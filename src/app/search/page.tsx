'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Fuse from 'fuse.js';
import { traditions } from '@/data/traditions';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';
import { concepts } from '@/data/concepts';
import { formatYear } from '@/lib/utils';
import type { NodeType } from '@/types';

export default function SearchPageWrapper() {
  return (
    <Suspense fallback={<div style={{ padding: 40, textAlign: 'center' }}>Loading search...</div>}>
      <SearchPage />
    </Suspense>
  );
}

interface SearchItem {
  id: string;
  type: NodeType;
  name: string;
  secondary?: string;
  tradition?: string;
  period?: string;
  description?: string;
}

function SearchPage() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') as NodeType | null;
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [typeFilter, setTypeFilter] = useState<NodeType | 'all'>(initialType || 'all');
  const [traditionFilter, setTraditionFilter] = useState<string>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');

  // Build search index
  const allItems = useMemo(() => {
    const items: SearchItem[] = [];

    traditions.forEach(t => {
      items.push({
        id: t.id,
        type: 'tradition',
        name: t.name,
        secondary: t.alternateNames?.join(', '),
        tradition: t.name,
        period: `${formatYear(t.timeSpan.start)} – ${t.timeSpan.end >= 2024 ? 'present' : formatYear(t.timeSpan.end)}`,
        description: t.shortSummary,
      });
    });

    authors.forEach(a => {
      items.push({
        id: a.id,
        type: 'author',
        name: a.name,
        secondary: a.nativeScriptName,
        tradition: a.traditions.join(', '),
        period: `${formatYear(a.dates.start)} – ${formatYear(a.dates.end)}`,
        description: a.shortBio,
      });
    });

    texts.forEach(t => {
      items.push({
        id: t.id,
        type: 'text',
        name: t.title,
        secondary: t.originalTitle,
        tradition: t.tradition,
        period: formatYear(t.date.start),
        description: t.summary,
      });
    });

    concepts.forEach(c => {
      items.push({
        id: c.id,
        type: 'concept',
        name: c.term,
        secondary: c.originalLanguageVariants.map(v => v.term).join(', '),
        description: c.definitionsByTradition[0]?.definition,
      });
    });

    return items;
  }, []);

  const fuse = useMemo(() => new Fuse(allItems, {
    keys: ['name', 'secondary', 'description', 'tradition'],
    threshold: 0.4,
    includeScore: true,
    minMatchCharLength: 2,
  }), [allItems]);

  const results = useMemo(() => {
    let items = query.length >= 2
      ? fuse.search(query).map(r => r.item)
      : allItems;

    if (typeFilter !== 'all') {
      items = items.filter(item => item.type === typeFilter);
    }
    if (traditionFilter !== 'all') {
      items = items.filter(item => item.tradition?.includes(traditionFilter));
    }

    return items.slice(0, 200);
  }, [query, typeFilter, traditionFilter, fuse, allItems]);

  const counts = useMemo(() => {
    const c = { all: allItems.length, tradition: 0, author: 0, text: 0, concept: 0 };
    allItems.forEach(item => { c[item.type]++; });
    return c;
  }, [allItems]);

  const typeIcons: Record<NodeType, string> = {
    tradition: '◆',
    author: '●',
    text: '□',
    concept: '△',
  };

  const getHref = (item: SearchItem) => {
    switch (item.type) {
      case 'tradition': return `/tradition/${item.id}`;
      case 'author': return `/author/${item.id}`;
      case 'text': return `/text/${item.id}`;
      case 'concept': return `/concept/${item.id}`;
    }
  };

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
      <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, marginBottom: 24 }}>Search</h1>

      {/* Search bar */}
      <div style={{ position: 'relative', marginBottom: 20 }}>
        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16, color: 'var(--color-text-muted)' }}>⌕</span>
        <input
          className="search-input"
          placeholder="Search authors, texts, concepts, traditions…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
          style={{ fontSize: 16, padding: '14px 16px 14px 42px' }}
        />
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 24, flexWrap: 'wrap' }}>
        {/* Type filter */}
        <div className="filter-group">
          {(['all', 'tradition', 'author', 'text', 'concept'] as const).map(type => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={`filter-chip ${typeFilter === type ? 'active' : ''}`}
            >
              {type === 'all' ? `All (${counts.all})` : `${typeIcons[type]} ${type} (${counts[type]})`}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div style={{ fontSize: 13, color: 'var(--color-text-muted)', marginBottom: 16 }}>
        {results.length} results{query && ` for "${query}"`}
      </div>

      {/* Results */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {results.map(item => (
          <Link key={`${item.type}-${item.id}`} href={getHref(item)} style={{ textDecoration: 'none' }}>
            <div className="card" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'var(--color-bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 16,
                flexShrink: 0,
              }}>
                {typeIcons[item.type]}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ fontWeight: 600, fontSize: 15, color: 'var(--color-text)' }}>{item.name}</span>
                  {item.secondary && (
                    <span style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>{item.secondary}</span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: 8, marginTop: 2, flexWrap: 'wrap' }}>
                  <span className="badge">{item.type}</span>
                  {item.tradition && <span className="badge">{item.tradition}</span>}
                  {item.period && <span style={{ fontSize: 12, color: 'var(--color-text-muted)' }}>{item.period}</span>}
                </div>
                {item.description && (
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: '6px 0 0', lineHeight: 1.5 }}>
                    {item.description.length > 200 ? item.description.slice(0, 200) + '…' : item.description}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {results.length === 0 && (
        <div style={{ textAlign: 'center', padding: 60, color: 'var(--color-text-muted)' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>⌕</div>
          <p>No results found. Try a different search term or adjust filters.</p>
        </div>
      )}
    </div>
  );
}
