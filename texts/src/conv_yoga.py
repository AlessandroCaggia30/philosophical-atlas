import re, html, json

def paras(path):
    h = open(path, encoding='utf-8', errors='replace').read()
    ps = re.findall(r'<p>(.*?)</p>', h, re.S)
    out = []
    for p in ps:
        p = re.sub(r'<[^>]+>', '', html.unescape(p))
        p = re.sub(r'\s+', ' ', p).strip()
        if p:
            out.append(p)
    return out

allp = paras('yoga_ft.html') + paras('yoga_ft2.html')

ROMAN = {'I':1, 'II':2, 'III':3, 'IV':4}
sutras = []  # (book, num, text)
book = None
collect = False
for p in allp:
    m = re.match(r'^BOOK ([IV]+)$', p)
    if m:
        book = ROMAN[m.group(1)]; collect = True; continue
    if p.startswith('INTRODUCTION TO BOOK'):
        collect = False; continue
    if collect:
        mm = re.match(r'^(\d+)\.\s+(.*)$', p)
        if mm:
            sutras.append((book, int(mm.group(1)), mm.group(2)))

# Dedup any page-boundary repeats (same book+num+text).
seen = set(); uniq = []
for s in sutras:
    key = (s[0], s[1])
    if key in seen:
        continue
    seen.add(key); uniq.append(s)
sutras = uniq

# Report per-book numbering.
from collections import defaultdict
byb = defaultdict(list)
for b, n, t in sutras:
    byb[b].append(n)
for b in sorted(byb):
    nums = byb[b]
    gaps = [i for i in range(1, len(nums)) if nums[i] != nums[i-1]+1]
    print(f"Book {b}: {len(nums)} sutras, {nums[0]}..{nums[-1]}", "GAPS" if gaps else "ok",
          [(nums[i-1], nums[i]) for i in gaps][:5])

def esc(s):
    s = s.replace('\\', '')
    for a, b in [('&','\\&'),('#','\\#'),('$','\\$'),('_','\\_'),('%','\\%')]:
        s = s.replace(a, b)
    s = re.sub(r'\s*—\s*', ' --- ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

BOOK_TITLES = {1:'Book I --- The Spiritual Consciousness',
               2:'Book II --- The Means of Soul Growth',
               3:'Book III --- Spiritual Powers',
               4:'Book IV --- Spiritual Freedom'}

body = ['\\work{The Yoga Sutras of Patanjali}',
        '\\attrib{Patanjali}{Charles Johnston (public domain)}', '']
curbook = None
for b, n, t in sutras:
    if b != curbook:
        curbook = b
        body.append(f"\\section*{{Book {['','I','II','III','IV'][b]}}}"); body.append('')
    body.append(f"\\para[{n}] {esc(t)}"); body.append('')

meta = ("% !atlas-meta\n% id: yoga-sutras\n% title: Yoga Sutras\n% author: patanjali\n"
        "% authorName: Patanjali\n% language: English\n% sourceLanguage: Sanskrit\n"
        "% translator: Charles Johnston\n% translationYear: 1912\n"
        "% source: https://www.fulltextarchive.com/book/The-Yoga-Sutras-of-Patanjali/\n"
        "% license: Public Domain (translator Charles Johnston d. 1931)\n% status: complete\n"
        "% !end-atlas-meta")
preamble = ("\\documentclass[12pt]{article}\n\\usepackage[utf8]{inputenc}\n\\usepackage{ebgaramond}\n"
            "\\usepackage[margin=1.2in]{geometry}\n\\usepackage{parskip}\n"
            "\\newcommand{\\work}[1]{\\begin{center}\\LARGE\\scshape #1\\end{center}}\n"
            "\\newcommand{\\attrib}[2]{\\begin{center}\\large #1\\\\[2pt]\\small\\itshape trans.\\ #2\\end{center}\\vspace{1em}}\n"
            "\\newcommand{\\para}[1][]{\\par\\noindent\\ifx&#1&\\else\\textsuperscript{\\footnotesize #1}~\\fi}\n"
            "\\begin{document}")
tex = f"{meta}\n{preamble}\n% !body-start\n" + "\n".join(body).strip() + "\n% !body-end\n\\end{document}\n"
open('../yoga-sutras.tex', 'w').write(tex)
print("total sutras:", len(sutras))
