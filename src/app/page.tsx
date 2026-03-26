'use client';

import Link from 'next/link';
import { traditions } from '@/data/traditions';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';
import { concepts } from '@/data/concepts';
import { edges } from '@/data/edges';
import { formatYear } from '@/lib/utils';

export default function HomePage() {
  const stats = {
    traditions: traditions.length,
    authors: authors.length,
    texts: texts.length,
    concepts: concepts.length,
    connections: edges.length,
  };

  const featuredTraditions = traditions.slice(0, 12);
  const featuredAuthors = authors.slice(0, 8);

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px' }}>
      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: 60 }}>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 700,
          marginBottom: 16,
          lineHeight: 1.1,
        }}>
          <span style={{ color: 'var(--color-gold)' }}>Philosophical</span> Atlas
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: 'var(--color-text-secondary)',
          maxWidth: 700,
          margin: '0 auto 32px',
          lineHeight: 1.6,
        }}>
          An interactive, scholarly map of the full global history of philosophy —
          from the earliest recorded traditions to contemporary thought, presented as
          an interconnected world-network of ideas, thinkers, texts, and traditions.
        </p>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          flexWrap: 'wrap',
          marginBottom: 32,
        }}>
          {[
            { label: 'Traditions', value: stats.traditions },
            { label: 'Authors', value: stats.authors },
            { label: 'Texts', value: stats.texts },
            { label: 'Concepts', value: stats.concepts },
            { label: 'Connections', value: stats.connections },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 32,
                fontWeight: 700,
                fontFamily: 'var(--font-serif)',
                color: 'var(--color-gold)',
              }}>
                {s.value.toLocaleString()}
              </div>
              <div style={{ fontSize: 13, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 16,
          maxWidth: 800,
          margin: '0 auto',
        }}>
          {[
            { href: '/network', icon: '◉', title: 'Network View', desc: 'Explore the global graph of philosophy' },
            { href: '/timeline', icon: '━', title: 'Timeline', desc: 'Trace ideas across millennia' },
            { href: '/map', icon: '◈', title: 'Geographic Map', desc: 'Where ideas emerged and traveled' },
            { href: '/search', icon: '⌕', title: 'Search', desc: 'Find authors, texts, concepts' },
          ].map(card => (
            <Link key={card.href} href={card.href} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ textAlign: 'center', padding: '24px 16px' }}>
                <div style={{ fontSize: 28, marginBottom: 8, color: 'var(--color-accent)' }}>{card.icon}</div>
                <div style={{ fontWeight: 600, marginBottom: 4, color: 'var(--color-text)' }}>{card.title}</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{card.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </header>

      {/* Traditions overview */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginBottom: 20, borderBottom: '1px solid var(--color-border)', paddingBottom: 8 }}>
          Philosophical Traditions
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {featuredTraditions.map(t => (
            <Link key={t.id} href={`/tradition/${t.id}`} style={{ textDecoration: 'none' }}>
              <div className="card" style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                  <span style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: t.color,
                    display: 'inline-block',
                  }} />
                  <h3 style={{ fontSize: 16, margin: 0, color: 'var(--color-text)' }}>{t.name}</h3>
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 6 }}>
                  {t.region} · {t.timeSpan.approximate ? 'c. ' : ''}{formatYear(t.timeSpan.start)} – {t.timeSpan.end === 2024 ? 'present' : formatYear(t.timeSpan.end)}
                </div>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {t.shortSummary}
                </p>
                <div style={{ marginTop: 8, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                  {t.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="badge">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Link href="/search?type=tradition" style={{
            color: 'var(--color-accent)',
            fontSize: 14,
            textDecoration: 'none',
          }}>
            View all {stats.traditions} traditions →
          </Link>
        </div>
      </section>

      {/* Featured authors */}
      <section style={{ marginBottom: 60 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginBottom: 20, borderBottom: '1px solid var(--color-border)', paddingBottom: 8 }}>
          Featured Thinkers
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}>
          {featuredAuthors.map(a => (
            <Link key={a.id} href={`/author/${a.id}`} style={{ textDecoration: 'none' }}>
              <div className="card">
                <h3 style={{ fontSize: 16, margin: '0 0 4px', color: 'var(--color-text)' }}>
                  {a.name}
                  {a.nativeScriptName && (
                    <span style={{ fontSize: 13, color: 'var(--color-text-muted)', marginLeft: 8, fontWeight: 400 }}>
                      {a.nativeScriptName}
                    </span>
                  )}
                </h3>
                <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 6 }}>
                  {a.dates.approximate ? 'c. ' : ''}{formatYear(a.dates.start)} – {formatYear(a.dates.end)}
                  {a.places.length > 0 && ` · ${a.places[0].name}`}
                </div>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  {a.shortBio.length > 150 ? a.shortBio.slice(0, 150) + '…' : a.shortBio}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About */}
      <section style={{
        background: 'var(--color-bg-secondary)',
        borderRadius: 12,
        padding: 32,
        marginBottom: 40,
      }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12 }}>
          About Philosophical Atlas
        </h2>
        <div style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 800 }}>
          <p>
            Philosophical Atlas represents the whole history of philosophy as a dynamic, interconnected
            network — not a simple timeline or encyclopedia. It treats all major philosophical traditions
            as primary, covering Indian, Chinese, Buddhist, Islamic, Jewish, African, Indigenous, and
            Western philosophy as parts of a genuinely global intellectual heritage.
          </p>
          <p style={{ marginTop: 12 }}>
            Every connection in the network carries typed relationships (influence, critique, development,
            translation, debate) with certainty scores and scholarly citations. AI-assisted features
            are clearly labeled, and the platform distinguishes between documented historical connections
            and probable parallels.
          </p>
          <p style={{ marginTop: 12 }}>
            For public-domain texts, the Atlas provides AI-assisted scholarly translations with
            LaTeX-formatted reading views, parallel original/translation displays, concept annotations,
            and downloadable editions. Copyrighted texts are presented with metadata, summaries,
            and links to legitimate editions.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '24px 0',
        borderTop: '1px solid var(--color-border)',
        fontSize: 13,
        color: 'var(--color-text-muted)',
      }}>
        Philosophical Atlas — A scholarly, open map of the world&apos;s philosophical heritage
      </footer>
    </div>
  );
}
