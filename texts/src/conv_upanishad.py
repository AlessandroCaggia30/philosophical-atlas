"""Convert a saved Wikisource Müller-SBE Upanishad HTML JSON to an Atlas .tex file.
Deterministic: no text is generated, only structural markers inserted.

Usage: python3 conv_upanishad.py <html_json> <config_json>
config_json keys: id,title,author,authorName,sourceLanguage,translator,
                  translationYear,source,license,work,attribAuthor,attribTrans,
                  outfile
"""
import json, re, sys
from ws_lib import to_lines, html_from_file

ORD = r'(?:FIRST|SECOND|THIRD|FOURTH|FIFTH|SIXTH|SEVENTH|EIGHTH|NINTH|TENTH|ELEVENTH|TWELFTH|First|Second|Third|Fourth|Fifth|Sixth|Seventh|Eighth|Ninth|Tenth|Eleventh|Twelfth)'
DIV = r'(?:ADHY[ÂA]YA|VALL[ÎI]|KHANDA|BR[ÂA]HMANA|PRAP[ÂA]THAKA|ANUV[ÂA]KA|Adhy[âa]ya|Vall[îi]|Khanda|Br[âa]hmana|Prap[âa]thaka|Anuv[âa]ka|Question|Mantra|Prasna)'
HEADER_RE = re.compile(rf'^{ORD}\s+{DIV}\.?$')
VERSE_RE = re.compile(r'^(\d+)\.\s+(.*)$')

def esc(s):
    s = s.replace('\\', '')
    s = s.replace('&', '\\&').replace('#', '\\#').replace('$', '\\$')
    s = s.replace('_', '\\_').replace('%', '\\%')
    s = re.sub(r'\s*—\s*', ' --- ', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

def convert(html_json, cfg):
    lines = to_lines(html_from_file(html_json), cfg.get('cutHtmlAt'))
    # Drop leading nav/header residue: everything before the first header or verse.
    start = 0
    for i, ln in enumerate(lines):
        if HEADER_RE.match(ln) or VERSE_RE.match(ln):
            start = i
            break
    lines = lines[start:]

    blocks = []  # ('section', title) or ('para', n, text)
    cur = None
    def flush():
        nonlocal cur
        if cur:
            blocks.append(('para', cur[0], ' '.join(cur[1]).strip()))
            cur = None
    for ln in lines:
        if HEADER_RE.match(ln):
            flush(); blocks.append(('section', ln.rstrip('.')))
        else:
            m = VERSE_RE.match(ln)
            if m:
                flush(); cur = (int(m.group(1)), [m.group(2)])
            elif cur:
                cur[1].append(ln)
            elif blocks:
                # stray line right after a section header, before verse 1
                blocks.append(('para', 0, ln))
    flush()
    return blocks

def build_tex(blocks, cfg):
    body = [f"\\work{{{cfg['work']}}}",
            f"\\attrib{{{cfg['attribAuthor']}}}{{{cfg['attribTrans']}}}",
            ""]
    npara = 0
    for b in blocks:
        if b[0] == 'section':
            body.append(f"\\section*{{{esc(b[1])}}}"); body.append("")
        else:
            # Drop Müller's trailing editorial scripture cross-reference (apparatus, not text).
            raw = re.sub(r'\s*\((?:Rv|Rig-?veda|S[âa]ma-?veda|Ya?gur-?veda|Atharva-?veda)\.[^)]*\)\s*$', '', b[2])
            n, text = b[1], esc(raw)
            npara += 1
            if b[1] == 0:
                body.append(f"\\para {text}")
            else:
                body.append(f"\\para[{n}] {text}")
            body.append("")
    meta = ("% !atlas-meta\n"
            f"% id: {cfg['id']}\n% title: {cfg['title']}\n% author: {cfg['author']}\n"
            f"% authorName: {cfg['authorName']}\n% language: English\n"
            f"% sourceLanguage: {cfg['sourceLanguage']}\n% translator: {cfg['translator']}\n"
            f"% translationYear: {cfg['translationYear']}\n% source: {cfg['source']}\n"
            f"% license: {cfg['license']}\n% status: {cfg.get('status','complete')}\n"
            "% !end-atlas-meta")
    preamble = ("\\documentclass[12pt]{article}\n"
                "\\usepackage[utf8]{inputenc}\n\\usepackage{ebgaramond}\n"
                "\\usepackage[margin=1.2in]{geometry}\n\\usepackage{parskip}\n"
                "\\newcommand{\\work}[1]{\\begin{center}\\LARGE\\scshape #1\\end{center}}\n"
                "\\newcommand{\\attrib}[2]{\\begin{center}\\large #1\\\\[2pt]\\small\\itshape trans.\\ #2\\end{center}\\vspace{1em}}\n"
                "\\newcommand{\\para}[1][]{\\par\\noindent\\ifx&#1&\\else\\textsuperscript{\\footnotesize #1}~\\fi}\n"
                "\\begin{document}")
    tex = f"{meta}\n{preamble}\n% !body-start\n" + "\n".join(body).strip() + "\n% !body-end\n\\end{document}\n"
    return tex, npara

if __name__ == '__main__':
    cfg = json.load(open(sys.argv[2]))
    blocks = convert(sys.argv[1], cfg)
    tex, npara = build_tex(blocks, cfg)
    open(cfg['outfile'], 'w').write(tex)
    nsec = sum(1 for b in blocks if b[0]=='section')
    print(f"{cfg['id']}: {nsec} sections, {npara} paras -> {cfg['outfile']}")
