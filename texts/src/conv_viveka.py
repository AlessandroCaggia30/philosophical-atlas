import re
from ws_lib import to_lines, html_from_file

CHAPTERS = [
    (1, 'First Steps on the Path'), (2, 'Self, Potencies, Vestures'),
    (3, 'The Witness'), (4, 'Finding the Real Self'),
    (5, 'The Power of Mind-Images'), (6, 'Free Even in Life'),
    (7, 'The Three Kinds of Works'), (8, 'Master and Pupil'),
    (9, 'The Perfect Sage'), (10, 'For Ever Free'),
]

ID_RE = re.compile(r'^\d+The Crest Jewel of Wisdom')
ALLCAPS = re.compile(r"^[A-ZÎÂŚ][A-ZÎÂŚ '\".,;:()-]+$")

def esc(s):
    s = s.replace('\\', '')
    for a, b in [('&', '\\&'), ('#', '\\#'), ('$', '\\$'), ('_', '\\_'), ('%', '\\%')]:
        s = s.replace(a, b)
    s = re.sub(r'\s*--\s*', ' --- ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

body = ['\\work{The Crest-Jewel of Wisdom (Vivekachudamani)}',
        '\\attrib{Adi Shankara}{Charles Johnston (public domain)}', '']
n = 0
for num, name in CHAPTERS:
    lines = to_lines(html_from_file(f'cj_{num:02d}.json'))
    # content begins right after the id/attribution line
    start = next((i for i, l in enumerate(lines) if ID_RE.match(l)), 0) + 1
    lines = lines[start:]
    body.append(f"\\section*{{{esc(name)}}}"); body.append('')
    seen_title = False
    for ln in lines:
        if ln == '[edit]':
            continue
        if not seen_title and ln.strip() == name:
            seen_title = True; continue
        if re.match(r'^\(Verses', ln):
            # attach verse-range to the most recent heading
            for j in range(len(body) - 1, -1, -1):
                if body[j].startswith('\\section*'):
                    body[j] = body[j][:-1] + f" {esc(ln)}" + '}'
                    break
            continue
        if ALLCAPS.match(ln) and len(ln) < 65:
            body.append(f"\\section*{{{esc(ln)}}}"); body.append('')
            continue
        n += 1
        body.append(f"\\para[{n}] {esc(ln)}"); body.append('')

meta = ("% !atlas-meta\n% id: vivekachudamani\n% title: Vivekachudamani (Crest-Jewel of Wisdom)\n"
        "% author: shankara\n% authorName: Adi Shankara\n% language: English\n"
        "% sourceLanguage: Sanskrit\n% translator: Charles Johnston\n% translationYear: 1925\n"
        "% source: https://en.wikisource.org/wiki/The_Crest_Jewel_of_Wisdom\n"
        "% license: Public Domain (translator Charles Johnston d. 1931)\n% status: complete\n"
        "% !end-atlas-meta")
preamble = ("\\documentclass[12pt]{article}\n\\usepackage[utf8]{inputenc}\n\\usepackage{ebgaramond}\n"
            "\\usepackage[margin=1.2in]{geometry}\n\\usepackage{parskip}\n"
            "\\newcommand{\\work}[1]{\\begin{center}\\LARGE\\scshape #1\\end{center}}\n"
            "\\newcommand{\\attrib}[2]{\\begin{center}\\large #1\\\\[2pt]\\small\\itshape trans.\\ #2\\end{center}\\vspace{1em}}\n"
            "\\newcommand{\\para}[1][]{\\par\\noindent\\ifx&#1&\\else\\textsuperscript{\\footnotesize #1}~\\fi}\n"
            "\\begin{document}")
tex = f"{meta}\n{preamble}\n% !body-start\n" + "\n".join(body).strip() + "\n% !body-end\n\\end{document}\n"
open('../vivekachudamani.tex', 'w').write(tex)
print("vivekachudamani paras:", n)
