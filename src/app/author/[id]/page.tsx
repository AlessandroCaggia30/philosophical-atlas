


import Link from 'next/link';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';
import { traditions } from '@/data/traditions';
import { concepts } from '@/data/concepts';
import { edges } from '@/data/edges';
import { formatYear, getTraditionColor } from '@/lib/utils';



export function generateStaticParams() {
  return authors.map(a => ({ id: a.id }));
}

export default async function AuthorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const author = authors.find(a => a.id === id);

  if (!author) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>Author not found</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>No author with ID &quot;{id}&quot; exists in the database.</p>
        <Link href="/search" style={{ color: 'var(--color-accent)' }}>Search authors →</Link>
      </div>
    );
  }

  const authorTexts = texts.filter(t => t.author === author.id);
  const authorTraditions = traditions.filter(t => author.traditions.includes(t.id));
  const influencedBy = authors.filter(a => author.influencesReceived.includes(a.id));
  const influenced = authors.filter(a => author.influencesGiven.includes(a.id));
  const opponents = authors.filter(a => author.debates.includes(a.id));
  const authorConcepts = concepts.filter(c => author.relatedConcepts.includes(c.id));
  const relatedEdges = edges.filter(e => e.source === author.id || e.target === author.id);

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link href="/search?type=author" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Authors</Link>
        {' / '}
        <span style={{ color: 'var(--color-text)' }}>{author.name}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, margin: '0 0 4px' }}>
          {author.name}
        </h1>
        {author.nativeScriptName && (
          <div style={{ fontSize: 22, color: 'var(--color-text-muted)', marginBottom: 8 }}>
            {author.nativeScriptName}
          </div>
        )}
        <div style={{ fontSize: 15, color: 'var(--color-text-secondary)', marginBottom: 12 }}>
          {author.dates.approximate ? 'c. ' : ''}{formatYear(author.dates.start)} – {formatYear(author.dates.end)}
          {author.dateNote && <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}> ({author.dateNote})</span>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {authorTraditions.map(t => (
            <Link key={t.id} href={`/tradition/${t.id}`} style={{ textDecoration: 'none' }}>
              <span className="badge" style={{ background: t.color + '30', borderColor: t.color + '60', color: 'var(--color-text)' }}>
                {t.name}
              </span>
            </Link>
          ))}
          {author.schools.map(s => (
            <span key={s} className="badge">{s}</span>
          ))}
        </div>
        {author.places.length > 0 && (
          <div style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
            📍 {author.places.map(p => p.name).join(', ')}
          </div>
        )}
      </header>

      {/* Biography */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
          Biography
        </h2>
        <p style={{ lineHeight: 1.7, fontSize: 15 }}>{author.shortBio}</p>
      </section>

      {/* Key Doctrines */}
      {author.keyDoctrines.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Key Doctrines
          </h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.7 }}>
            {author.keyDoctrines.map((d, i) => (
              <li key={i} style={{ marginBottom: 6 }}>{d}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Network: Influences */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        {influencedBy.length > 0 && (
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
              Influences Received
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {influencedBy.map(a => (
                <Link key={a.id} href={`/author/${a.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '8px 12px' }}>
                    <div style={{ fontWeight: 500, fontSize: 14 }}>{a.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{formatYear(a.dates.start)} – {formatYear(a.dates.end)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
        {influenced.length > 0 && (
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
              Influences Given
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {influenced.map(a => (
                <Link key={a.id} href={`/author/${a.id}`} style={{ textDecoration: 'none' }}>
                  <div className="card" style={{ padding: '8px 12px' }}>
                    <div style={{ fontWeight: 500, fontSize: 14 }}>{a.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{formatYear(a.dates.start)} – {formatYear(a.dates.end)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Debates / opponents */}
      {opponents.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Debates &amp; Opponents
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {opponents.map(a => (
              <Link key={a.id} href={`/author/${a.id}`} className="badge" style={{ textDecoration: 'none', background: '#ef444420', borderColor: '#ef444460' }}>
                {a.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Major Texts */}
      {authorTexts.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Major Texts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 12 }}>
            {authorTexts.map(t => (
              <Link key={t.id} href={`/text/${t.id}`} style={{ textDecoration: 'none' }}>
                <div className="card">
                  <h3 style={{ fontSize: 15, margin: '0 0 4px' }}>{t.title}</h3>
                  {t.originalTitle && <div style={{ fontSize: 12, color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 4 }}>{t.originalTitle}</div>}
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)', marginBottom: 6 }}>
                    {t.date.approximate ? 'c. ' : ''}{formatYear(t.date.start)} · {t.originalLanguage} · {t.genre}
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                    {t.summary.length > 120 ? t.summary.slice(0, 120) + '…' : t.summary}
                  </p>
                  {t.publicDomain && t.latexContent && (
                    <div style={{ marginTop: 6 }}>
                      <span className="badge" style={{ background: 'var(--color-gold)', color: 'white', borderColor: 'var(--color-gold)' }}>Read text</span>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Concepts */}
      {authorConcepts.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Related Concepts
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {authorConcepts.map(c => (
              <Link key={c.id} href={`/concept/${c.id}`} className="badge" style={{ textDecoration: 'none', padding: '4px 12px', fontSize: 13 }}>
                {c.term}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Network connections */}
      {relatedEdges.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Network Connections ({relatedEdges.length})
          </h2>
          <div style={{ maxHeight: 300, overflowY: 'auto' }}>
            <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <th style={{ textAlign: 'left', padding: '6px 8px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Relation</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Target</th>
                  <th style={{ textAlign: 'left', padding: '6px 8px', color: 'var(--color-text-muted)', fontWeight: 500 }}>Certainty</th>
                </tr>
              </thead>
              <tbody>
                {relatedEdges.slice(0, 20).map(e => (
                  <tr key={e.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '6px 8px' }}>
                      <span className="badge">{e.relationType.replace(/_/g, ' ')}</span>
                    </td>
                    <td style={{ padding: '6px 8px' }}>
                      {e.source === author.id ? e.target : e.source}
                    </td>
                    <td style={{ padding: '6px 8px' }}>
                      {'★'.repeat(e.certainty)}{'☆'.repeat(5 - e.certainty)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Confidence notes */}
      {author.confidenceNotes && (
        <section style={{
          background: 'var(--color-bg-secondary)',
          borderRadius: 8,
          padding: 16,
          fontSize: 13,
          color: 'var(--color-text-secondary)',
          marginBottom: 32,
        }}>
          <strong>Scholarly notes:</strong> {author.confidenceNotes}
        </section>
      )}

      {/* Navigation */}
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href={`/network?highlight=${author.id}`} style={{
          padding: '8px 16px',
          background: 'var(--color-accent)',
          color: 'white',
          borderRadius: 6,
          textDecoration: 'none',
          fontSize: 13,
        }}>
          View in network →
        </Link>
        <Link href="/search?type=author" style={{
          padding: '8px 16px',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          textDecoration: 'none',
          fontSize: 13,
          color: 'var(--color-text)',
        }}>
          Browse all authors
        </Link>
      </div>
    </div>
  );
}
