import re
from ws_lib import to_lines, html_from_file
from conv_upanishad import HEADER_RE, VERSE_RE, esc

# (display title, html json, cut regex or None)
WORKS = [
    ("Isha-Upanishad (V\\^agasaneyi-Samhit\\^a)", "isha_html.json",
     '<hr class="wst-rule wst-rule-center" style="color:inherit;width:5em;" />\n<style'),
    ("Kena-Upanishad (Talavak\\^ara)", "coll_kena.json", None),
    ("Katha-Upanishad", "katha_html.json", None),
    ("Prasna-Upanishad", "coll_prasna.json", None),
    ("Mundaka-Upanishad", "coll_mundaka.json", None),
]

NOISE = re.compile(r'^(←|→|Sacred Books of the East|Also known as|\d{6,}Sacred|Footnotes$)')
TITLE = re.compile(r'^[A-ZÂÎÊÑÛ]+-UPANISHAD\.?$')

def clean_lines(lines):
    out = []
    for ln in lines:
        if NOISE.match(ln) or TITLE.match(ln):
            continue
        out.append(ln)
    # trim before first header/verse
    start = 0
    for i, ln in enumerate(out):
        if HEADER_RE.match(ln) or VERSE_RE.match(ln) or ln.startswith('Adoration') or ln.startswith('OM'):
            start = i; break
    return out[start:]

def blocks_for(html_json, cut):
    lines = clean_lines(to_lines(html_from_file(html_json), cut))
    blocks = []
    cur = None
    def flush():
        nonlocal cur
        if cur:
            blocks.append(('para', cur[0], ' '.join(cur[1]).strip())); cur = None
    for ln in lines:
        if HEADER_RE.match(ln):
            flush(); blocks.append(('section', ln.rstrip('.')))
        else:
            m = VERSE_RE.match(ln)
            if m:
                flush(); cur = (int(m.group(1)), [m.group(2)])
            elif cur:
                cur[1].append(ln)
            else:
                blocks.append(('para', 0, ln))  # invocation before first verse
    flush()
    return blocks

body = ['\\work{The Upanishads}',
        '\\attrib{Anonymous (Vedic sages)}{F. Max M\\"uller (public domain)}', '']
total_para = 0
for title, hj, cut in WORKS:
    body.append(f"\\section*{{{title}}}"); body.append('')
    for b in blocks_for(hj, cut):
        if b[0] == 'section':
            body.append(f"\\section*{{{esc(b[1])}}}"); body.append('')
        else:
            raw = re.sub(r'\s*\((?:Rv|Rig-?veda)\.[^)]*\)\s*$', '', b[2])
            total_para += 1
            if b[1] == 0:
                body.append(f"\\para {esc(raw)}")
            else:
                body.append(f"\\para[{b[1]}] {esc(raw)}")
            body.append('')

meta = ("% !atlas-meta\n% id: upanishads\n% title: Upanishads\n% author: badarayana\n"
        "% authorName: Various\n% language: English\n% sourceLanguage: Sanskrit\n"
        "% translator: F. Max Müller\n% translationYear: 1879\n"
        "% source: https://en.wikisource.org/wiki/Sacred_Books_of_the_East/Volume_1\n"
        "% license: Public Domain (translator F. Max Müller d. 1900)\n% status: complete\n"
        "% !end-atlas-meta")
preamble = ("\\documentclass[12pt]{article}\n\\usepackage[utf8]{inputenc}\n\\usepackage{ebgaramond}\n"
            "\\usepackage[margin=1.2in]{geometry}\n\\usepackage{parskip}\n"
            "\\newcommand{\\work}[1]{\\begin{center}\\LARGE\\scshape #1\\end{center}}\n"
            "\\newcommand{\\attrib}[2]{\\begin{center}\\large #1\\\\[2pt]\\small\\itshape trans.\\ #2\\end{center}\\vspace{1em}}\n"
            "\\newcommand{\\para}[1][]{\\par\\noindent\\ifx&#1&\\else\\textsuperscript{\\footnotesize #1}~\\fi}\n"
            "\\begin{document}")
tex = f"{meta}\n{preamble}\n% !body-start\n" + "\n".join(body).strip() + "\n% !body-end\n\\end{document}\n"
open('../upanishads.tex', 'w').write(tex)
print("upanishads collection paras:", total_para)
