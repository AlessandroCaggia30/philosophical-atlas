import { readFileSync, writeFileSync } from 'fs';

const raw = readFileSync(new URL('./dhammapada_raw.txt', import.meta.url), 'utf8');
const lines = raw.replace(/\r/g, '').split('\n');

// Find body: from the second standalone "DHAMMAPADA" header (line before Chapter I) to END marker.
let start = -1, end = -1;
for (let i = 0; i < lines.length; i++) {
  if (/^\*\*\* END OF THE PROJECT GUTENBERG/.test(lines[i])) { end = i; break; }
}
// Chapter I is our real start; back up to it.
for (let i = 0; i < lines.length; i++) {
  if (/^Chapter I\.\s/.test(lines[i])) { start = i; break; }
}
if (start < 0 || end < 0) throw new Error('bounds not found');

function esc(s) {
  return s
    .replace(/\\/g, '')
    .replace(/&/g, '\\&').replace(/#/g, '\\#').replace(/\$/g, '\\$')
    .replace(/_/g, '\\_').replace(/%/g, '\\%')
    .replace(/--/g, '---');
}

const out = [];
let cur = null; // current verse accumulator {n, text}
function flush() {
  if (cur) { out.push({ type: 'para', n: cur.n, text: cur.text.join(' ').replace(/\s+/g, ' ').trim() }); cur = null; }
}
const roman = { I:'I' };
for (let i = start; i < end; i++) {
  const ln = lines[i];
  const ch = ln.match(/^Chapter\s+([IVXLC]+)\.?\s+(.+?)\.?\s*$/);
  if (ch) { flush(); out.push({ type: 'section', title: `${ch[2]}` , roman: ch[1] }); continue; }
  const v = ln.match(/^(\d+)(?:,\s*\d+)*\.\s+(.*)$/);
  if (v) { flush(); cur = { n: Number(v[1]), text: [v[2]] }; continue; }
  if (ln.trim() === '') { continue; }
  if (cur) cur.text.push(ln.trim());
}
flush();

// Build tex body
const body = [];
body.push('\\work{The Dhammapada}');
body.push('\\attrib{The Buddha}{F. Max M\\"uller (public domain)}');
body.push('');
let chNum = 0;
for (const b of out) {
  if (b.type === 'section') {
    chNum++;
    body.push(`\\section*{Chapter ${chNum}. ${esc(b.title)}}`);
    body.push('');
  } else {
    body.push(`\\para[${b.n}] ${esc(b.text)}`);
    body.push('');
  }
}

const meta = `% !atlas-meta
% id: dhammapada
% title: The Dhammapada
% author: buddha
% authorName: The Buddha
% language: English
% sourceLanguage: Pali
% translator: F. Max Müller
% translationYear: 1881
% source: https://www.gutenberg.org/ebooks/2017
% license: Public Domain (translator F. Max Müller d. 1900)
% status: complete
% !end-atlas-meta`;

const preamble = `\\documentclass[12pt]{article}
\\usepackage[utf8]{inputenc}
\\usepackage{ebgaramond}
\\usepackage[margin=1.2in]{geometry}
\\usepackage{parskip}
\\newcommand{\\work}[1]{\\begin{center}\\LARGE\\scshape #1\\end{center}}
\\newcommand{\\attrib}[2]{\\begin{center}\\large #1\\\\[2pt]\\small\\itshape trans.\\ #2\\end{center}\\vspace{1em}}
\\newcommand{\\para}[1][]{\\par\\noindent\\ifx&#1&\\else\\textsuperscript{\\footnotesize #1}~\\fi}
\\begin{document}`;

const tex = `${meta}\n${preamble}\n% !body-start\n${body.join('\n').trim()}\n% !body-end\n\\end{document}\n`;
writeFileSync(new URL('../dhammapada.tex', import.meta.url), tex);
const paraCount = out.filter(b => b.type === 'para').length;
const secCount = out.filter(b => b.type === 'section').length;
console.log(`dhammapada: ${secCount} chapters, ${paraCount} verses`);
