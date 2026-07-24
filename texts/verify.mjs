// Integrity checker for texts/*.tex — catches truncated fetches and broken structure.
// Run: node texts/verify.mjs
//
// Truncation is the main failure mode when transcribing from web sources: a fetch
// returns half a book and the file looks fine. The strongest tell is the final
// paragraph ending without terminal punctuation.
import { readFileSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const dir = dirname(fileURLToPath(import.meta.url));
const files = readdirSync(dir).filter(f => f.endsWith('.tex') && !f.startsWith('_'));

const REQUIRED_META = ['id', 'title', 'author', 'translator', 'source', 'license', 'status'];
let hardFail = 0, warn = 0;

for (const f of files) {
  const src = readFileSync(join(dir, f), 'utf8');
  const problems = [], warnings = [];

  const metaBlock = src.match(/% !atlas-meta([\s\S]*?)% !end-atlas-meta/);
  const meta = {};
  if (!metaBlock) problems.push('no !atlas-meta header');
  else for (const line of metaBlock[1].split('\n')) {
    const kv = line.match(/^%\s*([A-Za-z]+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].trim();
  }
  for (const k of REQUIRED_META) if (!meta[k]) problems.push(`meta missing: ${k}`);
  if (meta.id && meta.id !== f.replace(/\.tex$/, '')) problems.push(`id "${meta.id}" != filename`);

  const bodyM = src.match(/% !body-start([\s\S]*?)% !body-end/);
  if (!bodyM) { problems.push('no !body-start/!body-end markers'); }

  let blocks = [], numbered = [];
  if (bodyM) {
    // Blocks are separated by blank lines — same rule the renderer uses.
    blocks = bodyM[1].trim().split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
    const paraBlocks = blocks.filter(b => b.startsWith('\\para'));
    numbered = paraBlocks
      .map(b => b.match(/^\\para\[(\d+)\]/))
      .filter(Boolean).map(m => Number(m[1]));

    if (!paraBlocks.length) problems.push('no \\para blocks');

    // Numbering must be strictly ascending with no gaps.
    for (let i = 1; i < numbered.length; i++) {
      if (numbered[i] !== numbered[i - 1] + 1) {
        warnings.push(`numbering jump ${numbered[i - 1]} -> ${numbered[i]}`);
        break;
      }
    }

    // THE TRUNCATION CHECK: last paragraph should end like a finished sentence.
    // Strip trailing footnote markers — (92), [12], superscripts — before checking,
    // so a real ending that carries a note reference isn't misread as a cut-off.
    const last = paraBlocks[paraBlocks.length - 1] || '';
    const trimmed = last.replace(/\s+$/, '').replace(/[\s]*[\(\[]\d+[\)\]]$/, '').replace(/\s+$/, '');
    const tail = trimmed.slice(-1);
    if (trimmed && !'.!?"\'”’)'.includes(tail)) {
      const verdict = meta.status === 'partial' ? 'ends mid-sentence (partial — expected)' : 'likely TRUNCATED';
      const line = `final paragraph ends "${trimmed.slice(-45).replace(/\n/g, ' ')}" — ${verdict}`;
      if (meta.status === 'partial') warnings.push(line); else problems.push(line);
    }

    // A body that is suspiciously short for a claimed-complete work.
    const words = bodyM[1].split(/\s+/).length;
    if (meta.status === 'complete' && words < 400) warnings.push(`only ${words} words but marked complete`);

    // Unescaped specials that would break a LaTeX compile.
    const bad = bodyM[1].match(/(?<!\\)[&#$_]|(?<!\\)%(?!\s*!)/g);
    if (bad) warnings.push(`${bad.length} unescaped LaTeX special(s): ${[...new Set(bad)].join(' ')}`);
  }

  const status = problems.length ? 'FAIL' : warnings.length ? 'warn' : 'ok';
  if (problems.length) hardFail++; else if (warnings.length) warn++;
  const words = bodyM ? bodyM[1].split(/\s+/).length : 0;
  console.log(
    `${status === 'FAIL' ? '✗' : status === 'warn' ? '!' : '✓'} ${(meta.id || f).padEnd(28)}` +
    `${String(blocks.length).padStart(5)} blocks ${String(words).padStart(7)} words  ${meta.status || '?'}`
  );
  for (const p of problems) console.log(`    FAIL: ${p}`);
  for (const w of warnings) console.log(`    warn: ${w}`);
}

console.log(`\n${files.length} files — ${hardFail} failing, ${warn} with warnings`);
process.exit(hardFail ? 1 : 0);
