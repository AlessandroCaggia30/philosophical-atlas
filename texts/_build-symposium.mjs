// One-off: turn the Jowett Symposium (Project Gutenberg #1600, public domain)
// into texts/symposium.tex in the atlas macro format, so the reader's audiobook
// has numbered paragraphs to play. Speech headings mark each speaker's turn.
//
// Run:  node texts/_build-symposium.mjs   then   node texts/build-fulltexts.mjs
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
const src = readFileSync(join(dir, '..', 'video', 'source', 'pg1600.txt'), 'utf8').split('\n');

// The dialogue proper (excludes Jowett's long introduction and PG boilerplate).
const body = src.slice(986, 2941);

// Speaker turns, by the transition cues in the text → \section* headings.
const SPEECHES = [
  { at: 'Phaedrus began by affirming', name: 'Phaedrus — Love, the Eldest of the Gods' },
  { at: 'the next which he\nrepeated was that of Pausanias', name: 'Pausanias — The Two Loves' },
  { at: 'Eryximachus spoke as follows', name: 'Eryximachus — Love in All Things' },
  { at: 'Aristophanes professed to open', name: 'Aristophanes — The Origin of Love' },
  { at: 'as I shall be when Agathon has spoken', name: 'Agathon — The Youngest and Fairest' },
  { at: 'And now, Phaedrus, the story of my youth', name: 'Socrates — What Diotima Taught Him' },
  { at: 'When Socrates had done speaking', name: 'Alcibiades — In Praise of Socrates' },
];

function clean(s) {
  return s
    .replace(/\(Greek\)/g, '')
    .replace(/\(compare[^)]*\)/gi, '')
    .replace(/\(Probably[^)]*\)/g, '')
    .replace(/\s*\(\s*\)\s*/g, ' ')
    .replace(/--/g, '---')             // en/em handled by the reader
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim();
}

// Unwrap Gutenberg's hard wrapping into paragraphs (blank-line delimited).
const paras = [];
let cur = [];
for (const line of body) {
  if (line.trim() === '') { if (cur.length) { paras.push(cur.join(' ')); cur = []; } }
  else cur.push(line.trim());
}
if (cur.length) paras.push(cur.join(' '));

const meta = `% !atlas-meta
% id: symposium
% title: Symposium
% author: plato
% authorName: Plato
% language: English
% sourceLanguage: Ancient Greek
% translator: Benjamin Jowett
% translationYear: 1892
% source: https://www.gutenberg.org/ebooks/1600
% license: Public Domain
% status: complete
% !end-atlas-meta`;

const out = ['\\work{Symposium}', '\\attrib{Plato}{Benjamin Jowett (public domain)}', ''];
let n = 0;
for (const raw of paras) {
  const p = clean(raw);
  if (p.length < 25) continue;
  for (const sp of SPEECHES) {
    if (raw.replace(/\s+/g, ' ').includes(sp.at.replace(/\s+/g, ' '))) {
      out.push(`\\section*{${sp.name}}`, '');
    }
  }
  out.push(`\\para[${++n}] ${p}`, '');
}

const tex = `${meta}\n\n% !body-start\n${out.join('\n')}\n% !body-end\n`;
writeFileSync(join(dir, 'symposium.tex'), tex);
console.log(`symposium.tex — ${n} paragraphs`);
