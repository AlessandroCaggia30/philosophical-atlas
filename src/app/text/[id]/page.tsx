


import Link from 'next/link';
import { texts } from '@/data/texts';
import { fullTexts } from '@/data/fulltexts';
import { authors } from '@/data/authors';
import { concepts } from '@/data/concepts';
import { edges } from '@/data/edges';
import { formatYear } from '@/lib/utils';



export function generateStaticParams() {
  return texts.map(t => ({ id: t.id }));
}

export default async function TextPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const text = texts.find(t => t.id === id);

  if (!text) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-serif)' }}>Text not found</h1>
        <Link href="/search" style={{ color: 'var(--color-accent)' }}>Search texts →</Link>
      </div>
    );
  }

  const author = authors.find(a => a.id === text.author);
  const textConcepts = concepts.filter(c => text.keyConcepts.includes(c.id));
  const relatedTextsList = texts.filter(t => text.relatedTexts.includes(t.id));
  const influenceTextsList = texts.filter(t => text.influenceLinks.includes(t.id));

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '40px 24px' }}>
      {/* Breadcrumb */}
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 20 }}>
        <Link href="/" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Home</Link>
        {' / '}
        <Link href="/search?type=text" style={{ color: 'var(--color-text-muted)', textDecoration: 'none' }}>Texts</Link>
        {' / '}
        <span style={{ color: 'var(--color-text)' }}>{text.title}</span>
      </div>

      {/* Header */}
      <header style={{ marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 36, margin: '0 0 4px' }}>{text.title}</h1>
        {text.originalTitle && (
          <div style={{ fontSize: 20, color: 'var(--color-text-muted)', fontStyle: 'italic', marginBottom: 8 }}>
            {text.originalTitle}
          </div>
        )}

        {/* Metadata grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 12,
          marginTop: 16,
          padding: 16,
          background: 'var(--color-bg-secondary)',
          borderRadius: 8,
        }}>
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 2 }}>Author</div>
            {author ? (
              <Link href={`/author/${author.id}`} style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: 14 }}>
                {author.name}
              </Link>
            ) : (
              <span style={{ fontSize: 14 }}>{text.authorName || text.author}</span>
            )}
          </div>
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 2 }}>Date</div>
            <div style={{ fontSize: 14 }}>{text.date.approximate ? 'c. ' : ''}{formatYear(text.date.start)}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 2 }}>Language</div>
            <div style={{ fontSize: 14 }}>{text.originalLanguage}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 2 }}>Genre</div>
            <div style={{ fontSize: 14 }}>{text.genre}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 2 }}>Tradition</div>
            <Link href={`/tradition/${text.tradition}`} style={{ color: 'var(--color-accent)', textDecoration: 'none', fontSize: 14 }}>
              {text.tradition}
            </Link>
          </div>
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 2 }}>Status</div>
            <span className="badge" style={text.publicDomain ? { background: '#22c55e20', borderColor: '#22c55e60', color: '#16a34a' } : {}}>
              {text.publicDomain ? 'Public domain' : 'Copyrighted'}
            </span>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
          Summary
        </h2>
        <p style={{ lineHeight: 1.7, fontSize: 15 }}>{text.summary}</p>
      </section>

      {/* Structure */}
      {text.structure && text.structure.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Structure
          </h2>
          <ol style={{ paddingLeft: 20, lineHeight: 1.7 }}>
            {text.structure.map((s, i) => <li key={i}>{s}</li>)}
          </ol>
        </section>
      )}

      {/* Key Concepts */}
      {textConcepts.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Key Concepts
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {textConcepts.map(c => (
              <Link key={c.id} href={`/concept/${c.id}`} className="badge" style={{ textDecoration: 'none', padding: '6px 12px', fontSize: 13 }}>
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

      {/* Related Texts */}
      {relatedTextsList.length > 0 && (
        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
            Related Texts
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12 }}>
            {relatedTextsList.map(t => (
              <Link key={t.id} href={`/text/${t.id}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ padding: '10px 14px' }}>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>{t.title}</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>
                    {t.authorName || t.author} · {formatYear(t.date.start)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Translation / Source info */}
      <section style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 20, marginBottom: 12, borderBottom: '1px solid var(--color-border)', paddingBottom: 6 }}>
          Editions &amp; Translations
        </h2>
        {text.translationAvailability && (
          <p style={{ fontSize: 14, lineHeight: 1.6 }}>{text.translationAvailability}</p>
        )}
        {text.manuscriptNotes && (
          <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{text.manuscriptNotes}</p>
        )}
        {!text.publicDomain && (
          <div style={{
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: 16,
            marginTop: 12,
            fontSize: 13,
          }}>
            <strong>Copyright notice:</strong> This text is under copyright. The Philosophical Atlas provides
            metadata, scholarly summaries, and links to legitimate editions. Full unauthorized reproduction
            is not available.
          </div>
        )}
      </section>

      {/* Read button for public domain texts with content */}
      <div style={{ display: 'flex', gap: 12 }}>
        {(fullTexts[text.id] || (text.publicDomain && text.latexContent)) && (
          <Link href={`/text/${text.id}/read`} style={{
            padding: '10px 20px',
            background: 'var(--color-gold)',
            color: 'white',
            borderRadius: 6,
            textDecoration: 'none',
            fontSize: 14,
            fontWeight: 500,
          }}>
            {fullTexts[text.id] ? `Read full text (${fullTexts[text.id].paragraphs} paras) →` : 'Read scholarly edition →'}
          </Link>
        )}
        <Link href={`/network?highlight=${text.id}`} style={{
          padding: '10px 20px',
          border: '1px solid var(--color-border)',
          borderRadius: 6,
          textDecoration: 'none',
          fontSize: 14,
          color: 'var(--color-text)',
        }}>
          View in network
        </Link>
      </div>
    </div>
  );
}
