import re

raw = open('gita_arnold_raw.txt', encoding='utf-8').read().replace('\r', '')
lines = raw.split('\n')

start = next(i for i, l in enumerate(lines) if l.strip() == 'CHAPTER I')
end = next(i for i, l in enumerate(lines) if re.match(r'^\[FN#\d+\]', l))
seg = '\n'.join(lines[start:end])

blocks = [b.strip() for b in re.split(r'\n\s*\n', seg) if b.strip()]

def esc(s):
    s = s.replace('\\', '')
    s = re.sub(r'\[FN#\d+\]', '', s)            # drop inline footnote markers
    s = re.sub(r'\s+', ' ', s).strip()
    for a, b in [('&', '\\&'), ('#', '\\#'), ('$', '\\$'), ('_', '\\_'), ('%', '\\%')]:
        s = s.replace(a, b)
    s = re.sub(r'\s*--\s*', ' --- ', s)          # Arnold uses -- for em dashes
    s = re.sub(r'\s+', ' ', s).strip()
    return s

CH_RE = re.compile(r'^CHAPTER\s+([IVXL]+)\s*$')
body = ['\\work{The Song Celestial (Bhagavad-Gita)}',
        '\\attrib{Vyasa (traditional)}{Sir Edwin Arnold (public domain)}', '']
nchap = 0; npara = 0; n = 0
for blk in blocks:
    first = blk.split('\n', 1)[0].strip()
    if CH_RE.match(first) and len(blk.strip().split('\n')) == 1:
        nchap += 1; n = 0
        body.append(f"\\section*{{Chapter {nchap}}}"); body.append('')
        continue
    if first.upper().startswith('HERE END'):
        continue
    n += 1; npara += 1
    body.append(f"\\para[{n}] {esc(blk)}"); body.append('')

meta = ("% !atlas-meta\n% id: bhagavad-gita\n% title: Bhagavad Gita\n% author: badarayana\n"
        "% authorName: Vyasa (traditional)\n% language: English\n% sourceLanguage: Sanskrit\n"
        "% translator: Sir Edwin Arnold\n% translationYear: 1885\n"
        "% source: https://www.gutenberg.org/ebooks/2388\n"
        "% license: Public Domain (translator Sir Edwin Arnold d. 1904)\n% status: complete\n"
        "% !end-atlas-meta")
preamble = ("\\documentclass[12pt]{article}\n\\usepackage[utf8]{inputenc}\n\\usepackage{ebgaramond}\n"
            "\\usepackage[margin=1.2in]{geometry}\n\\usepackage{parskip}\n"
            "\\newcommand{\\work}[1]{\\begin{center}\\LARGE\\scshape #1\\end{center}}\n"
            "\\newcommand{\\attrib}[2]{\\begin{center}\\large #1\\\\[2pt]\\small\\itshape trans.\\ #2\\end{center}\\vspace{1em}}\n"
            "\\newcommand{\\para}[1][]{\\par\\noindent\\ifx&#1&\\else\\textsuperscript{\\footnotesize #1}~\\fi}\n"
            "\\begin{document}")
tex = f"{meta}\n{preamble}\n% !body-start\n" + "\n".join(body).strip() + "\n% !body-end\n\\end{document}\n"
open('../bhagavad-gita.tex', 'w').write(tex)
print(f"chapters: {nchap}, paras: {npara}")
