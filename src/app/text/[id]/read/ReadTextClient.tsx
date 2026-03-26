'use client';

import { useState } from 'react';
import Link from 'next/link';
import { texts } from '@/data/texts';
import { authors } from '@/data/authors';
import { formatYear } from '@/lib/utils';

type ViewMode = 'rendered' | 'latex' | 'parallel';

export default function ReadTextClient({ id }: { id: string }) {
  const text = texts.find(t => t.id === id);
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
  const latexContent = text.latexContent || generateDefaultLatex(text, author);

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
        {(['rendered', 'latex', 'parallel'] as ViewMode[]).map(mode => (
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
          <RenderedView text={text} author={author} latexContent={latexContent} />
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
        <strong>Note:</strong> This is an AI-assisted scholarly translation intended for study and navigation.
      </div>
    </div>
  );
}

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
