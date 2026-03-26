


import Link from 'next/link';
import { traditions } from '@/data/traditions';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';
import { concepts } from '@/data/concepts';

import { formatYear } from '@/lib/utils';


export function generateStaticParams() {
  return traditions.map(t => ({ id: t.id }));
}

export default async function TraditionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tradition = traditions.find(t => t.id === id);

  if (!tradition) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>Tradition not found</h1>
        <Link href="/search" style={{ color: 'var(--color-accent)' }}>Search traditions →</Link>
      </div>
    );
  }

  const tradAuthors = authors.filter(a => a.traditions.includes(tradition.id))
    .sort((a, b) => a.dates.start - b.dates.start);
  const tradTexts = texts.filter(t => t.tradition === tradition.id)
    .sort((a, b) => a.date.start - b.date.start);
  const tradConcepts = concepts.filter(c => tradition.majorConcepts.includes(c.id));
  const relatedTradList = traditions.filter(t => tradition.relatedTraditions.includes(t.id));

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link href="/search?type=tradition" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Traditions</Link>
        {' / '}
        <span style={{ color: 'var(--color-text)' }}>{tradition.name}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <span style={{
            width: 16,
            height: 16,
            borderRadius: '50%',
            background: tradition.color,
            display: 'inline-block',
          }} />
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, margin: 0 }}>{tradition.name}</h1>
        </div>
        {tradition.alternateNames && tradition.alternateNames.length > 0 && (
          <div style={{ fontSize: 14, color: 'var(--color-text-muted)', marginBottom: 8 }}>
            Also known as: {tradition.alternateNames.join(', ')}
          </div>
        )}
        <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginBottom: 12 }}>
          {tradition.region} · {tradition.timeSpan.approximate ? 'c. ' : ''}{formatYear(tradition.timeSpan.start)} – {tradition.timeSpan.end >= 2024 ? 'present' : formatYear(tradition.timeSpan.end)}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tradition.tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
        </div>
      </header>

      {/* Description */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
          Overview
        </h2>
        <p style={{ lineHeight: 1.7, fontSize: 15, marginBottom: 12 }}>{tradition.shortSummary}</p>
        <p style={{ lineHeight: 1.7, fontSize: 14, color: 'var(--color-text-secondary)' }}>{tradition.longDescription}</p>
      </section>

      {/* Major Figures (timeline-like) */}
      {tradAuthors.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Major Figures ({tradAuthors.length})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {tradAuthors.map(a => (
              <Link key={a.id} href={`/author/${a.id}`} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {a.name}
                    {a.nativeScriptName && (
                      <span style={{ fontWeight: 400, fontSize: 12, color: 'var(--color-text-muted)', marginLeft: 6 }}>{a.nativeScriptName}</span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 4 }}>
                    {a.dates.approximate ? 'c. ' : ''}{formatYear(a.dates.start)} – {formatYear(a.dates.end)}
                  </div>
                  <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0 }}>
                    {a.shortBio.length > 100 ? a.shortBio.slice(0, 100) + '…' : a.shortBio}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Major Texts */}
      {tradTexts.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Major Texts ({tradTexts.length})
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
            {tradTexts.map(t => (
              <Link key={t.id} href={`/text/${t.id}`} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{t.title}</div>
                  {t.originalTitle && <div style={{ fontSize: 12, fontStyle: 'italic', color: 'var(--color-text-muted)' }}>{t.originalTitle}</div>}
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginTop: 2 }}>
                    {t.authorName || t.author} · {formatYear(t.date.start)} · {t.genre}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Concepts */}
      {tradConcepts.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Key Concepts
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tradConcepts.map(c => (
              <Link key={c.id} href={`/concept/${c.id}`} className="badge" style={{ textDecoration: 'none', padding: '6px 14px', fontSize: 13 }}>
                {c.term}
                {c.originalLanguageVariants.length > 0 && (
                  <span style={{ marginLeft: 4, fontSize: 11, color: 'var(--color-text-muted)' }}>
                    ({c.originalLanguageVariants[0].term})
                  </span>
                )}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Traditions */}
      {relatedTradList.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Related Traditions
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {relatedTradList.map(t => (
              <Link key={t.id} href={`/tradition/${t.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.color }} />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{t.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href={`/network?tradition=${tradition.id}`} style={{
          padding: '10px 20px',
          background: 'var(--color-accent)',
          color: 'white',
          borderRadius: 6,
          textDecoration: 'none',
          fontSize: 14,
        }}>
          View in network →
        </Link>
        <Link href="/search?type=tradition" style={{
          padding: '10px 20px',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          textDecoration: 'none',
          fontSize: 14,
          color: 'var(--color-text)',
        }}>
          Browse all traditions
        </Link>
      </div>
    </div>
  );
}
