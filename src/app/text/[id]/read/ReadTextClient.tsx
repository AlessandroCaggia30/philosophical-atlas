'use client';

import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { texts } from '@/data/texts';
import { authors } from '@/data/authors';
import { fullTexts } from '@/data/fulltexts';
import { formatYear } from '@/lib/utils';

type ViewMode = 'rendered' | 'latex' | 'parallel';

export default function ReadTextClient({ id }: { id: string }) {
  const text = texts.find(t => t.id === id);
  const full = fullTexts[id];
  const [viewMode, setViewMode] = useState<ViewMode>('rendered');
  const [copied, setCopied] = useState(false);

  if (!text) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>Text not found</h1>
        <Link href="/search" style={{ color: 'var(--color-accent)' }}>Search texts →</Link>
      </div>
    );
  }

  if (!text.publicDomain) {
    return (
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '60px 24px', textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', marginBottom: 16 }}>{text.title}</h1>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: 24 }}>
          This text is under copyright. Full reproduction is not available.
        </p>
        <Link href={`/text/${text.id}`} style={{ color: 'var(--color-accent)' }}>
          ← View text metadata and summary
        </Link>
      </div>
    );
  }

  const author = authors.find(a => a.id === text.author);
  const latexContent = full?.tex || text.latexContent || generateDefaultLatex(text, author);

  const copyLatex = () => {
    navigator.clipboard.writeText(latexContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadLatex = () => {
    const blob = new Blob([latexContent], { type: 'text/x-latex' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${text.id}.tex`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link href={`/text/${text.id}`} style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>{text.title}</Link>
        {' / '}
        <span style={{ color: 'var(--color-text)' }}>Read</span>
      </div>

      <header style={{ marginBottom: 32, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 32, margin: '0 0 4px' }}>{text.title}</h1>
        {text.originalTitle && (
          <div style={{ fontSize: 18, color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 8 }}>{text.originalTitle}</div>
        )}
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
          {author?.name || text.authorName || text.author} · {text.date.approximate ? 'c. ' : ''}{formatYear(text.date.start)} · {text.originalLanguage}
        </div>
      </header>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
        {((full ? ['rendered', 'latex'] : ['rendered', 'latex', 'parallel']) as ViewMode[]).map(mode => (
          <button key={mode} onClick={() => setViewMode(mode)}
            className={`filter-chip ${viewMode === mode ? 'active' : ''}`}
            style={{ padding: '6px 16px', fontSize: 13 }}>
            {mode === 'rendered' ? 'Scholarly Edition' : mode === 'latex' ? 'LaTeX Source' : 'Parallel View'}
          </button>
        ))}
        <button onClick={copyLatex} style={{ padding: '6px 16px', border: '1px solid var(--color-border)', borderRadius: 9999, background: 'var(--color-surface)', cursor: 'pointer', fontSize: 13 }}>
          {copied ? 'Copied!' : 'Copy LaTeX'}
        </button>
        <button onClick={downloadLatex} style={{ padding: '6px 16px', border: '1px solid var(--color-border)', borderRadius: 9999, background: 'var(--color-surface)', cursor: 'pointer', fontSize: 13 }}>
          Download .tex
        </button>
      </div>

      {viewMode === 'rendered' && (
        <div className="latex-content" style={{ animation: 'fadeIn 0.3s ease' }}>
          {full
            ? <AudiobookReader tex={full.tex} title={text.title} author={author?.name || text.authorName || text.author} />
            : <RenderedView text={text} author={author} latexContent={latexContent} />}
        </div>
      )}

      {viewMode === 'latex' && (
        <div style={{ maxWidth: 800, margin: '0 auto', background: 'var(--color-bg-secondary)', borderRadius: 8, padding: 24, fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-wrap', overflowX: 'auto' }}>
          {latexContent}
        </div>
      )}

      {viewMode === 'parallel' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, maxWidth: 1100, margin: '0 auto' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, marginBottom: 16, color: 'var(--color-text-muted)' }}>Original ({text.originalLanguage})</h3>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 2, whiteSpace: 'pre-wrap' }}>
              {text.samplePassage || 'Original text not available for this edition.'}
            </div>
          </div>
          <div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 16, marginBottom: 16, color: 'var(--color-text-muted)' }}>AI-Assisted English Translation</h3>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: 15, lineHeight: 2, whiteSpace: 'pre-wrap' }}>
              {text.aiTranslation || text.summary}
            </div>
          </div>
        </div>
      )}

      <div style={{ maxWidth: 700, margin: '40px auto 0', padding: 16, background: 'var(--color-bg-secondary)', borderRadius: 8, fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
        {full ? (
          <>
            <strong>Public-domain edition.</strong>{' '}
            {full.translator && <>Translated by {full.translator}{full.translationYear ? ` (${full.translationYear})` : ''}. </>}
            {full.language}{full.sourceLanguage ? ` (from ${full.sourceLanguage})` : ''}. License: {full.license}.
            {full.source && <> · <a href={full.source} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>Source</a></>}
          </>
        ) : (
          <><strong>Note:</strong> This is an AI-assisted scholarly translation intended for study and navigation.</>
        )}
      </div>
    </div>
  );
}

// Renders the controlled macro subset used by texts/*.tex:
//   \work{...}  \attrib{who}{trans}  \section*{...}  \para[n] body...
type Block =
  | { kind: 'work'; text: string }
  | { kind: 'attrib'; who: string; trans: string }
  | { kind: 'heading'; text: string }
  | { kind: 'para'; num?: string; text: string };

function parseAtlasTex(tex: string): Block[] {
  const blocks: Block[] = [];
  // Split on blank lines: each chunk is one logical block.
  for (const raw of tex.split(/\n\s*\n/)) {
    const chunk = raw.trim();
    if (!chunk) continue;

    const work = chunk.match(/^\\work\{([\s\S]+?)\}$/);
    if (work) { blocks.push({ kind: 'work', text: work[1].trim() }); continue; }

    const attrib = chunk.match(/^\\attrib\{([\s\S]*?)\}\{([\s\S]*?)\}$/);
    if (attrib) { blocks.push({ kind: 'attrib', who: attrib[1].trim(), trans: attrib[2].trim() }); continue; }

    const heading = chunk.match(/^\\(?:sub)?section\*?\{([\s\S]+?)\}$/);
    if (heading) { blocks.push({ kind: 'heading', text: heading[1].trim() }); continue; }

    const para = chunk.match(/^\\para(?:\[([^\]]*)\])?\s*([\s\S]*)$/);
    if (para) { blocks.push({ kind: 'para', num: para[1] || undefined, text: cleanInline(para[2]) }); continue; }

    blocks.push({ kind: 'para', text: cleanInline(chunk) });
  }
  return blocks;
}

function cleanInline(s: string): string {
  return s
    .replace(/\\(?:textbf|textit|emph)\{(.+?)\}/g, '$1')
    .replace(/---/g, '—')
    .replace(/``|''/g, '"')
    .replace(/\\,/g, ' ')
    .replace(/\\%/g, '%')
    .replace(/\s+/g, ' ')
    .trim();
}

// ============================================================================
// Audiobook reader.
//
// Renders the same public-domain body as before, but every numbered paragraph is
// a play-head: click its number to begin narration there. Narration auto-advances
// paragraph to paragraph and highlights the line being read.
//
// The voice engine is the browser's built-in Web Speech synthesiser — no backend,
// which is what lets this work on a static GitHub Pages export. `speak()` is the
// single seam: swap it for pre-rendered <audio> playback (e.g. ElevenLabs mp3s
// shipped under public/audio/<id>/<n>.mp3) and nothing else in the UI changes.
// ============================================================================

// Read aloud ≠ read on screen: the screen keeps the original spelling, the
// synthesiser gets a respelling of names it otherwise mangles. Shared across
// texts; words not present just pass through untouched.
const SPEECH_LEXICON: Record<string, string> = {
  Eryximachus: 'Eh-rick-SIM-uh-kus', Alcibiades: 'Al-suh-BY-uh-deez',
  Aristophanes: 'A-ris-TOFF-uh-neez', Diotima: 'Dye-oh-TEE-muh',
  Pausanias: 'Paw-SAY-nee-us', Agathon: 'AG-uh-thon', Apollodorus: 'Uh-pol-oh-DOR-us',
  Aristodemus: 'A-ris-toh-DEE-mus', Phaedrus: 'FEE-drus', Glaucon: 'GLOW-kon',
  Phalerum: 'Fuh-LEER-um', Hephaestus: 'Heh-FESS-tus', Socrates: 'SOCK-ruh-teez',
};
function forSpeech(text: string): string {
  let out = text;
  for (const [w, say] of Object.entries(SPEECH_LEXICON)) {
    out = out.replace(new RegExp(`\\b${w}\\b`, 'g'), say);
  }
  return out.replace(/\s*—\s*/g, ', ');   // an em-dash is a breath
}

interface ParaRef { blockIndex: number; num?: string; text: string }

function AudiobookReader({ tex, title, author }: { tex: string; title: string; author: string }) {
  const blocks = useMemo(() => parseAtlasTex(tex), [tex]);

  // The narratable spine: paragraph blocks, in order. Their index is the play
  // position. Non-para blocks (headings, attribution) are skipped by the voice.
  const paras = useMemo<ParaRef[]>(() => {
    const out: ParaRef[] = [];
    blocks.forEach((b, blockIndex) => {
      if (b.kind === 'para') out.push({ blockIndex, num: b.num, text: b.text });
    });
    return out;
  }, [blocks]);
  const paraIndexByBlock = useMemo(() => {
    const m = new Map<number, number>();
    paras.forEach((p, i) => m.set(p.blockIndex, i));
    return m;
  }, [paras]);

  const [supported, setSupported] = useState(true);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);      // paragraph currently spoken
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [voiceURI, setVoiceURI] = useState('');

  // Live values the auto-advance chain reads, so rate/voice changes take effect
  // on the next paragraph without restarting playback.
  const rateRef = useRef(rate); useEffect(() => { rateRef.current = rate; }, [rate]);
  const voiceRef = useRef(voiceURI); useEffect(() => { voiceRef.current = voiceURI; }, [voiceURI]);
  // Each spoken utterance carries a generation token; a superseded utterance's
  // onend (which cancel() also fires) is ignored, so the chain never double-advances.
  const genRef = useRef(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) { setSupported(false); return; }
    const load = () => {
      const vs = window.speechSynthesis.getVoices().filter(v => v.lang.startsWith('en'));
      setVoices(vs);
      setVoiceURI(cur => cur || (
        vs.find(v => /Daniel|Arthur|UK English Male/.test(v.name)) ||
        vs.find(v => v.lang === 'en-GB') || vs.find(v => v.default) || vs[0]
      )?.voiceURI || '');
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => { window.speechSynthesis.cancel(); window.speechSynthesis.onvoiceschanged = null; };
  }, []);

  const speak = useCallback((i: number) => {
    if (i < 0 || i >= paras.length) { window.speechSynthesis.cancel(); setPlaying(false); setActive(-1); return; }
    genRef.current += 1;
    const myGen = genRef.current;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(forSpeech(paras[i].text));
    u.rate = rateRef.current;
    const v = voices.find(v => v.voiceURI === voiceRef.current);
    if (v) u.voice = v;
    u.onend = () => { if (myGen === genRef.current) speak(i + 1); };
    window.speechSynthesis.speak(u);
    setActive(i); setPlaying(true); setOpen(true);
    if (typeof document !== 'undefined') {
      document.getElementById(`para-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [paras, voices]);

  const stop = useCallback(() => { genRef.current += 1; window.speechSynthesis.cancel(); setPlaying(false); }, []);
  const togglePlay = useCallback(() => {
    const s = window.speechSynthesis;
    if (playing) { s.pause(); setPlaying(false); }
    else if (s.paused && active >= 0) { s.resume(); setPlaying(true); }
    else speak(active >= 0 ? active : 0);
  }, [playing, active, speak]);

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', paddingBottom: open ? 96 : 0 }}>
      {blocks.map((b, i) => {
        if (b.kind === 'work') return (
          <h2 key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: 30, textAlign: 'center', margin: '0 0 4px', letterSpacing: '0.02em' }}>{b.text}</h2>
        );
        if (b.kind === 'attrib') return (
          <div key={i} style={{ textAlign: 'center', marginBottom: 36, paddingBottom: 20, borderBottom: '2px solid var(--color-gold)' }}>
            <div style={{ fontSize: 16 }}>{b.who}</div>
            <div style={{ fontSize: 13, fontStyle: 'italic', color: 'var(--color-text-muted)', marginTop: 2 }}>trans. {b.trans}</div>
          </div>
        );
        if (b.kind === 'heading') return (
          <h3 key={i} style={{ fontFamily: 'var(--font-serif)', fontSize: 19, margin: '32px 0 12px', color: 'var(--color-gold)' }}>{b.text}</h3>
        );
        const pi = paraIndexByBlock.get(i)!;
        const isActive = pi === active;
        const label = b.num || String(pi + 1);
        return (
          <p key={i} id={`para-${pi}`} style={{
            position: 'relative', fontSize: 17, lineHeight: 1.85, margin: '0 0 20px',
            textAlign: 'justify', fontFamily: 'var(--font-serif)',
            background: isActive ? 'var(--color-bg-tertiary)' : 'transparent',
            boxShadow: isActive ? 'inset 3px 0 0 var(--color-gold)' : 'none',
            borderRadius: isActive ? 4 : 0, padding: isActive ? '6px 10px 6px 14px' : '6px 0',
            transition: 'background 0.25s, box-shadow 0.25s',
          }}>
            <button
              onClick={() => (isActive && playing ? stop() : speak(pi))}
              title={supported ? `Play from ${label}` : 'Audio not supported in this browser'}
              disabled={!supported}
              style={{
                position: 'absolute', left: -46, top: 2, width: 34, height: 26,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontFamily: 'var(--font-mono)',
                color: isActive ? 'var(--color-gold)' : 'var(--color-text-muted)',
                background: 'transparent', border: 'none',
                cursor: supported ? 'pointer' : 'default', userSelect: 'none',
              }}
              onMouseEnter={e => { if (supported) e.currentTarget.style.color = 'var(--color-accent)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = isActive ? 'var(--color-gold)' : 'var(--color-text-muted)'; }}
            >
              {isActive && playing ? '❚❚' : label}
            </button>
            {b.text}
          </p>
        );
      })}

      {/* Floating open button */}
      {supported && !open && (
        <button onClick={() => (active >= 0 ? setOpen(true) : speak(0))}
          style={{
            position: 'fixed', right: 24, bottom: 24, zIndex: 50,
            display: 'flex', alignItems: 'center', gap: 8, padding: '12px 20px',
            borderRadius: 9999, border: '1px solid var(--color-border)',
            background: 'var(--color-gold)', color: '#1a1410', fontWeight: 600, fontSize: 14,
            cursor: 'pointer', boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
          }}>
          🎧 Listen
        </button>
      )}

      {/* Player bar */}
      {supported && open && (
        <div style={{
          position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 50,
          background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)',
          padding: '12px 20px', display: 'flex', alignItems: 'center', gap: 16,
          flexWrap: 'wrap', boxShadow: '0 -4px 20px rgba(0,0,0,0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={() => speak(Math.max(0, (active < 0 ? 0 : active) - 1))} title="Previous" style={pbtn}>⏮</button>
            <button onClick={togglePlay} title={playing ? 'Pause' : 'Play'} style={{ ...pbtn, width: 44, height: 44, fontSize: 18, background: 'var(--color-gold)', color: '#1a1410', border: 'none' }}>
              {playing ? '❚❚' : '▶'}
            </button>
            <button onClick={() => speak((active < 0 ? -1 : active) + 1)} title="Next" style={pbtn}>⏭</button>
          </div>

          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', minWidth: 120, flex: 1 }}>
            <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>{title}</div>
            <div style={{ color: 'var(--color-text-muted)' }}>
              {active >= 0 ? `¶ ${paras[active].num || active + 1} of ${paras.length}` : `${author} · ${paras.length} paragraphs`}
            </div>
          </div>

          <label style={{ fontSize: 12, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
            Speed
            <select value={rate} onChange={e => setRate(Number(e.target.value))} style={psel}>
              {[0.8, 0.9, 1, 1.1, 1.25, 1.5].map(r => <option key={r} value={r}>{r}×</option>)}
            </select>
          </label>

          {voices.length > 0 && (
            <label style={{ fontSize: 12, color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: 6 }}>
              Voice
              <select value={voiceURI} onChange={e => setVoiceURI(e.target.value)} style={{ ...psel, maxWidth: 160 }}>
                {voices.map(v => <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>)}
              </select>
            </label>
          )}

          <button onClick={() => { stop(); setOpen(false); }} title="Close" style={{ ...pbtn, border: 'none' }}>✕</button>
        </div>
      )}

      {!supported && (
        <div style={{ maxWidth: 700, margin: '24px auto 0', padding: 12, fontSize: 12, color: 'var(--color-text-muted)', textAlign: 'center' }}>
          Read-aloud isn’t available in this browser. Try Chrome, Edge, or Safari.
        </div>
      )}
    </div>
  );
}

const pbtn: CSSProperties = {
  width: 36, height: 36, borderRadius: 9999, border: '1px solid var(--color-border)',
  background: 'var(--color-surface)', color: 'var(--color-text)', cursor: 'pointer', fontSize: 14,
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
};
const psel: CSSProperties = {
  padding: '4px 8px', borderRadius: 6, border: '1px solid var(--color-border)',
  background: 'var(--color-surface)', color: 'var(--color-text)', fontSize: 12, cursor: 'pointer',
};

function RenderedView({ text, author, latexContent }: { text: any; author: any; latexContent: string }) {
  const sections = parseLatexSections(latexContent);
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 32, paddingBottom: 24, borderBottom: '2px solid var(--color-gold)' }}>
        <div style={{ fontSize: 28, fontFamily: 'var(--font-serif)', fontWeight: 700, marginBottom: 8 }}>{text.title}</div>
        {text.originalTitle && <div style={{ fontSize: 18, fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: 12 }}>{text.originalTitle}</div>}
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)' }}>
          <strong>Author:</strong> {author?.name || text.author}<br />
          <strong>Date:</strong> {text.date.approximate ? 'c. ' : ''}{formatYear(text.date.start)}<br />
          <strong>Original Language:</strong> {text.originalLanguage}
        </div>
      </div>
      <div style={{ marginBottom: 32 }}>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 8, color: 'var(--color-text-muted)' }}>Translator&apos;s Note</h3>
        <p style={{ fontSize: 14, lineHeight: 1.7, fontStyle: 'italic' }}>This English version is an AI-assisted scholarly translation intended for study and navigation.</p>
      </div>
      {sections.map((section, i) => (
        <div key={i} style={{ marginBottom: 20 }}>
          {section.heading && <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: 'var(--color-gold)' }}>{section.heading}</h3>}
          {section.content.split('\n').map((line, j) => (
            line.trim() ? <div key={j} style={{ marginBottom: 8, fontSize: 15, lineHeight: 1.8, paddingLeft: 16, borderLeft: '2px solid var(--color-gold)' }}>{line}</div> : <div key={j} style={{ height: 8 }} />
          ))}
        </div>
      ))}
      {sections.length === 0 && <p style={{ fontSize: 15, lineHeight: 1.8 }}>{text.aiTranslation || text.summary}</p>}
    </div>
  );
}

function parseLatexSections(latex: string): { heading?: string; content: string }[] {
  const sections: { heading?: string; content: string }[] = [];
  const lines = latex.split('\n');
  let currentHeading: string | undefined;
  let currentContent: string[] = [];
  for (const line of lines) {
    const m = line.match(/\\(?:sub)?section\*?\{(.+?)\}/);
    if (m) {
      if (currentContent.length > 0) { sections.push({ heading: currentHeading, content: currentContent.join('\n') }); currentContent = []; }
      currentHeading = m[1];
    } else {
      const cleaned = line.replace(/\\textbf\{(.+?)\}/g, '$1').replace(/\\textit\{(.+?)\}/g, '$1').replace(/\\emph\{(.+?)\}/g, '$1').replace(/\\begin\{.+?\}/g, '').replace(/\\end\{.+?\}/g, '').replace(/\\item\s?/g, '• ').replace(/\\\\/, '').replace(/\\[a-z]+\{?/gi, '').replace(/\}/g, '').trim();
      if (cleaned) currentContent.push(cleaned);
    }
  }
  if (currentContent.length > 0) sections.push({ heading: currentHeading, content: currentContent.join('\n') });
  return sections;
}

function generateDefaultLatex(text: any, author: any): string {
  return `\\section*{${text.title}}
\\textbf{Author:} ${author?.name || text.author}\\\\
\\textbf{Date:} ${text.date.approximate ? 'c. ' : ''}${formatYear(text.date.start)}\\\\
\\textbf{Original Language:} ${text.originalLanguage}

\\subsection*{Translator's Note}
This English version is an AI-assisted scholarly translation intended for study and navigation.

\\subsection*{Text}
${text.aiTranslation || text.summary}

\\subsection*{Notes}
\\begin{enumerate}
\\item This translation draws on established scholarly translations.
\\end{enumerate}`;
}
