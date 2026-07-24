import json, re, html

def esc(s):
    s = s.replace('\\', '')
    for a, b in [('&','\\&'),('#','\\#'),('$','\\$'),('_','\\_'),('%','\\%')]:
        s = s.replace(a, b)
    s = re.sub(r'\s*—\s*', ' --- ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def sutras_for(bk):
    h = json.load(open(f'ys_book_{bk}.json'))['parse']['text']
    h = re.sub(r'<sup[^>]*class="reference".*?</sup>', '', h, flags=re.S)
    out = []
    for blk in re.findall(r'<p>(.*?)</p>', h, re.S):
        if re.match(r'\s*<i>', blk):
            txt = re.sub(r'<[^>]+>', '', html.unescape(blk))
            txt = re.sub(r'\s+', ' ', txt).strip()
            m = re.match(r'^(\d+)\.\s*(.*)$', txt)
            if m:
                out.append((int(m.group(1)), m.group(2).strip()))
    return out

body = ['\\work{The Yoga Sutras of Patanjali}',
        '\\attrib{Patanjali}{Charles Johnston (public domain)}', '']
total = 0
for bk in ['I', 'II', 'III', 'IV']:
    body.append(f"\\section*{{Book {bk}}}"); body.append('')
    for n, t in sutras_for(bk):
        body.append(f"\\para[{n}] {esc(t)}"); body.append('')
        total += 1

meta = ("% !atlas-meta\n% id: yoga-sutras\n% title: Yoga Sutras\n% author: patanjali\n"
        "% authorName: Patanjali\n% language: English\n% sourceLanguage: Sanskrit\n"
        "% translator: Charles Johnston\n% translationYear: 1912\n"
        "% source: https://en.wikisource.org/wiki/Yoga_Sutras\n"
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
print("total sutras:", total)
