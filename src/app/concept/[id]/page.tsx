


import Link from 'next/link';
import { concepts } from '@/data/concepts';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';



export function generateStaticParams() {
  return concepts.map(c => ({ id: c.id }));
}

export default async function ConceptPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const concept = concepts.find(c => c.id === id);

  if (!concept) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>Concept not found</h1>
        <Link href="/search" style={{ color: 'var(--color-accent)' }}>Search concepts →</Link>
      </div>
    );
  }

  const conceptAuthors = authors.filter(a => concept.majorAuthors.includes(a.id));
  const conceptTexts = texts.filter(t => concept.majorTexts.includes(t.id));
  const relatedConceptsList = concepts.filter(c => concept.relatedConcepts.includes(c.id));
  const opposingConceptsList = concepts.filter(c => concept.opposingConcepts.includes(c.id));

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link href="/search?type=concept" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Concepts</Link>
        {' / '}
        <span style={{ color: 'var(--color-text)' }}>{concept.term}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, margin: '0 0 8px' }}>
          {concept.term}
        </h1>

        {/* Original language variants */}
        {concept.originalLanguageVariants.length > 0 && (
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 12,
            marginBottom: 16,
            padding: 16,
            background: 'var(--color-bg-secondary)',
            borderRadius: 8,
          }}>
            {concept.originalLanguageVariants.map((v, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 20, fontFamily: 'var(--font-serif)' }}>{v.term}</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
                  {v.language}
                  {v.transliteration && ` (${v.transliteration})`}
                </div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Definitions by Tradition */}
      {concept.definitionsByTradition.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 16, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Definitions by Tradition
          </h2>
          {concept.definitionsByTradition.map((d, i) => (
            <div key={i} style={{
              marginBottom: 16,
              paddingLeft: 16,
              borderLeft: '3px solid var(--color-accent)',
            }}>
              <Link href={`/tradition/${d.tradition}`} style={{
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--color-accent)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}>
                {d.tradition.replace(/-/g, ' ')}
              </Link>
              <p style={{ fontSize: 14, lineHeight: 1.7, marginTop: 4 }}>{d.definition}</p>
            </div>
          ))}
        </section>
      )}

      {/* Historical Transformations */}
      {concept.historicalTransformations && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Historical Transformations
          </h2>
          <p style={{ lineHeight: 1.7, fontSize: 14 }}>{concept.historicalTransformations}</p>
        </section>
      )}

      {/* Related / Opposing */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
        {relatedConceptsList.length > 0 && (
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
              Related Concepts
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {relatedConceptsList.map(c => (
                <Link key={c.id} href={`/concept/${c.id}`} className="badge" style={{ textDecoration: 'none' }}>
                  {c.term}
                </Link>
              ))}
            </div>
          </section>
        )}
        {opposingConceptsList.length > 0 && (
          <section>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
              Opposing Concepts
            </h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {opposingConceptsList.map(c => (
                <Link key={c.id} href={`/concept/${c.id}`} className="badge" style={{ textDecoration: 'none', background: '#ef444420', borderColor: '#ef444460' }}>
                  {c.term}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Major Authors */}
      {conceptAuthors.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Major Authors
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {conceptAuthors.map(a => (
              <Link key={a.id} href={`/author/${a.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '8px 14px' }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{a.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Major Texts */}
      {conceptTexts.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Major Texts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {conceptTexts.map(t => (
              <Link key={t.id} href={`/text/${t.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '10px 14px' }}>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>{t.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{t.authorName || t.author}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Navigation */}
      <div style={{ display: 'flex', gap: 12 }}>
        <Link href={`/network?highlight=${concept.id}`} style={{
          padding: '10px 20px',
          background: 'var(--color-accent)',
          color: 'white',
          borderRadius: 6,
          textDecoration: 'none',
          fontSize: 14,
        }}>
          View in network →
        </Link>
      </div>
    </div>
  );
}
