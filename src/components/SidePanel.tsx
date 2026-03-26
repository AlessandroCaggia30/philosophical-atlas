'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Author, PhilosophicalText, Tradition, Concept, NodeType } from '@/types';
import { formatYear, getNodeTypeIcon } from '@/lib/utils';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';
import { traditions } from '@/data/traditions';
import { concepts } from '@/data/concepts';

interface SidePanelProps {
  nodeId: string | null;
  nodeType: NodeType | null;
  onClose: () => void;
}

export default function SidePanel({ nodeId, nodeType, onClose }: SidePanelProps) {
  if (!nodeId || !nodeType) return null;

  let content: React.ReactNode = null;

  if (nodeType === 'author') {
    const author = authors.find(a => a.id === nodeId);
    if (author) content = <AuthorPanel author={author} />;
  } else if (nodeType === 'text') {
    const text = texts.find(t => t.id === nodeId);
    if (text) content = <TextPanel text={text} />;
  } else if (nodeType === 'tradition') {
    const tradition = traditions.find(t => t.id === nodeId);
    if (tradition) content = <TraditionPanel tradition={tradition} />;
  } else if (nodeType === 'concept') {
    const concept = concepts.find(c => c.id === nodeId);
    if (concept) content = <ConceptPanel concept={concept} />;
  }

  if (!content) return null;

  return (
    <div className="side-panel open" style={{ padding: 0 }}>
      <div style={{
        position: 'sticky',
        top: 0,
        background: 'var(--color-surface)',
        borderBottom: '1px solid var(--color-border)',
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
      }}>
        <span className="badge">{getNodeTypeIcon(nodeType)} {nodeType}</span>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 20,
            color: 'var(--color-text-muted)',
            padding: '4px 8px',
          }}
        >
          ✕
        </button>
      </div>
      <div style={{ padding: 20 }}>
        {content}
      </div>
    </div>
  );
}

function AuthorPanel({ author }: { author: Author }) {
  return (
    <div className="animate-fade-in">
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, margin: '0 0 4px' }}>
        {author.name}
      </h2>
      {author.nativeScriptName && (
        <div style={{ fontSize: 16, color: 'var(--color-text-muted)', marginBottom: 8 }}>{author.nativeScriptName}</div>
      )}
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 12 }}>
        {author.dates.approximate ? 'c. ' : ''}{formatYear(author.dates.start)} – {formatYear(author.dates.end)}
        {author.places.length > 0 && ` · ${author.places[0].name}`}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{author.shortBio}</p>

      {author.traditions.length > 0 && (
        <Section title="Traditions">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {author.traditions.map(t => (
              <Link key={t} href={`/tradition/${t}`} className="badge" style={{ textDecoration: 'none' }}>{t}</Link>
            ))}
          </div>
        </Section>
      )}

      {author.keyDoctrines.length > 0 && (
        <Section title="Key Doctrines">
          <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13 }}>
            {author.keyDoctrines.map((d, i) => <li key={i} style={{ marginBottom: 4 }}>{d}</li>)}
          </ul>
        </Section>
      )}

      {author.majorTexts.length > 0 && (
        <Section title="Major Texts">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {author.majorTexts.map(t => (
              <Link key={t} href={`/text/${t}`} style={{ fontSize: 13, color: 'var(--color-accent)', textDecoration: 'none' }}>□ {t}</Link>
            ))}
          </div>
        </Section>
      )}

      <div style={{ marginTop: 16 }}>
        <Link href={`/author/${author.id}`} style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'var(--color-accent)',
          color: 'white',
          borderRadius: 6,
          fontSize: 13,
          textDecoration: 'none',
          fontWeight: 500,
        }}>
          View full profile →
        </Link>
      </div>
    </div>
  );
}

function TextPanel({ text }: { text: PhilosophicalText }) {
  return (
    <div className="animate-fade-in">
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, margin: '0 0 4px' }}>{text.title}</h2>
      {text.originalTitle && (
        <div style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 8, fontStyle: 'italic' }}>{text.originalTitle}</div>
      )}
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 12 }}>
        {text.authorName || text.author} · {text.date.approximate ? 'c. ' : ''}{formatYear(text.date.start)}
        {` · ${text.originalLanguage}`}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{text.summary}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
        <span className="badge">{text.genre}</span>
        <span className="badge">{text.publicDomain ? 'Public domain' : 'Copyrighted'}</span>
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        <Link href={`/text/${text.id}`} style={{
          display: 'inline-block',
          padding: '8px 16px',
          background: 'var(--color-accent)',
          color: 'white',
          borderRadius: 6,
          fontSize: 13,
          textDecoration: 'none',
          fontWeight: 500,
        }}>
          View details →
        </Link>
        {text.publicDomain && text.latexContent && (
          <Link href={`/text/${text.id}/read`} style={{
            display: 'inline-block',
            padding: '8px 16px',
            background: 'var(--color-gold)',
            color: 'white',
            borderRadius: 6,
            fontSize: 13,
            textDecoration: 'none',
            fontWeight: 500,
          }}>
            Read text →
          </Link>
        )}
      </div>
    </div>
  );
}

function TraditionPanel({ tradition }: { tradition: Tradition }) {
  return (
    <div className="animate-fade-in">
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, margin: '0 0 4px' }}>{tradition.name}</h2>
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 12 }}>
        {tradition.region} · {tradition.timeSpan.approximate ? 'c. ' : ''}{formatYear(tradition.timeSpan.start)} – {tradition.timeSpan.end >= 2024 ? 'present' : formatYear(tradition.timeSpan.end)}
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{tradition.shortSummary}</p>

      {tradition.majorFigures.length > 0 && (
        <Section title="Major Figures">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {tradition.majorFigures.slice(0, 8).map(a => (
              <Link key={a} href={`/author/${a}`} className="badge" style={{ textDecoration: 'none' }}>{a}</Link>
            ))}
          </div>
        </Section>
      )}

      <Link href={`/tradition/${tradition.id}`} style={{
        display: 'inline-block',
        padding: '8px 16px',
        background: 'var(--color-accent)',
        color: 'white',
        borderRadius: 6,
        fontSize: 13,
        textDecoration: 'none',
        fontWeight: 500,
        marginTop: 16,
      }}>
        View full tradition →
      </Link>
    </div>
  );
}

function ConceptPanel({ concept }: { concept: Concept }) {
  return (
    <div className="animate-fade-in">
      <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, margin: '0 0 4px' }}>{concept.term}</h2>
      {concept.originalLanguageVariants.length > 0 && (
        <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 12 }}>
          {concept.originalLanguageVariants.map(v => `${v.language}: ${v.term}`).join(' · ')}
        </div>
      )}

      {concept.definitionsByTradition.length > 0 && (
        <Section title="Definitions by Tradition">
          {concept.definitionsByTradition.map((d, i) => (
            <div key={i} style={{ marginBottom: 8 }}>
              <span className="badge" style={{ marginBottom: 4 }}>{d.tradition}</span>
              <p style={{ fontSize: 13, margin: '4px 0 0', lineHeight: 1.5 }}>{d.definition}</p>
            </div>
          ))}
        </Section>
      )}

      <Link href={`/concept/${concept.id}`} style={{
        display: 'inline-block',
        padding: '8px 16px',
        background: 'var(--color-accent)',
        color: 'white',
        borderRadius: 6,
        fontSize: 13,
        textDecoration: 'none',
        fontWeight: 500,
        marginTop: 16,
      }}>
        View full concept →
      </Link>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h4 style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', margin: '0 0 8px', fontFamily: 'var(--font-sans)' }}>
        {title}
      </h4>
      {children}
    </div>
  );
}
