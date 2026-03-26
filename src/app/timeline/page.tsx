'use client';

import { useState, useMemo, useRef } from 'react';
import Link from 'next/link';
import { traditions } from '@/data/traditions';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';
import { formatYear, getTraditionColor } from '@/lib/utils';

const ERA_MARKERS = [
  { year: -3000, label: '3000 BCE' },
  { year: -2500, label: '2500 BCE' },
  { year: -2000, label: '2000 BCE' },
  { year: -1500, label: '1500 BCE' },
  { year: -1000, label: '1000 BCE' },
  { year: -500, label: '500 BCE' },
  { year: 0, label: '1 CE' },
  { year: 500, label: '500 CE' },
  { year: 1000, label: '1000 CE' },
  { year: 1500, label: '1500 CE' },
  { year: 1700, label: '1700' },
  { year: 1800, label: '1800' },
  { year: 1900, label: '1900' },
  { year: 2000, label: '2000' },
];

const TOTAL_YEARS = 5025; // -3000 to 2025
const PIXELS_PER_YEAR = 1.5;
const TOTAL_WIDTH = TOTAL_YEARS * PIXELS_PER_YEAR;

function yearToX(year: number): number {
  return (year + 3000) * PIXELS_PER_YEAR;
}

export default function TimelinePage() {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [showAuthors, setShowAuthors] = useState(true);
  const [showTexts, setShowTexts] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const regions = useMemo(() => {
    const r = new Set<string>();
    traditions.forEach(t => r.add(t.region));
    return ['All', ...Array.from(r).sort()];
  }, []);

  const filteredTraditions = useMemo(() => {
    let t = traditions;
    if (selectedRegion !== 'All') {
      t = t.filter(tr => tr.region === selectedRegion || tr.regions?.includes(selectedRegion));
    }
    return t.sort((a, b) => a.timeSpan.start - b.timeSpan.start);
  }, [selectedRegion]);

  const traditionAuthors = useMemo(() => {
    const map: Record<string, typeof authors> = {};
    authors.forEach(a => {
      a.traditions.forEach(tId => {
        if (!map[tId]) map[tId] = [];
        map[tId].push(a);
      });
    });
    return map;
  }, []);

  const jumpTo = (year: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = yearToX(year) - 300;
    }
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{
        padding: '12px 20px',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: 'var(--color-bg-secondary)',
        flexWrap: 'wrap',
      }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, margin: 0 }}>Timeline</h1>

        <div className="filter-group">
          {regions.map(r => (
            <button key={r} onClick={() => setSelectedRegion(r)}
              className={`filter-chip ${selectedRegion === r ? 'active' : ''}`}>{r}</button>
          ))}
        </div>

        <label style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
          <input type="checkbox" checked={showAuthors} onChange={e => setShowAuthors(e.target.checked)} />
          Authors
        </label>
        <label style={{ fontSize: 13, display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer' }}>
          <input type="checkbox" checked={showTexts} onChange={e => setShowTexts(e.target.checked)} />
          Texts
        </label>

        {/* Quick jump */}
        <div style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
          {[{ y: -500, l: '500 BCE' }, { y: 0, l: '1 CE' }, { y: 1000, l: '1000' }, { y: 1800, l: '1800' }].map(j => (
            <button key={j.y} onClick={() => jumpTo(j.y)}
              style={{ padding: '2px 8px', border: '1px solid var(--color-border)', borderRadius: 4, background: 'var(--color-surface)', cursor: 'pointer', fontSize: 11 }}>
              {j.l}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline body */}
      <div ref={scrollRef} style={{ flex: 1, overflowX: 'auto', overflowY: 'auto', position: 'relative' }}>
        <div style={{ width: TOTAL_WIDTH + 200, minHeight: '100%', position: 'relative', paddingTop: 40, paddingBottom: 40 }}>
          {/* Year markers */}
          {ERA_MARKERS.map(m => (
            <div key={m.year} style={{
              position: 'absolute',
              left: yearToX(m.year),
              top: 0,
              bottom: 0,
              borderLeft: '1px solid var(--color-border)',
              zIndex: 1,
            }}>
              <div style={{
                position: 'sticky',
                top: 0,
                background: 'var(--color-bg)',
                padding: '4px 8px',
                fontSize: 11,
                color: 'var(--color-text-muted)',
                fontWeight: 600,
              }}>
                {m.label}
              </div>
            </div>
          ))}

          {/* Tradition tracks */}
          {filteredTraditions.map((t, i) => {
            const x1 = yearToX(t.timeSpan.start);
            const x2 = yearToX(Math.min(t.timeSpan.end, 2025));
            const y = 60 + i * (showAuthors ? 56 : 36);
            const tAuthors = traditionAuthors[t.id] || [];

            return (
              <div key={t.id} style={{ position: 'absolute', top: y, left: 0, right: 0, height: showAuthors ? 52 : 32 }}>
                {/* Tradition bar */}
                <Link href={`/tradition/${t.id}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    position: 'absolute',
                    left: x1,
                    width: Math.max(x2 - x1, 20),
                    height: 24,
                    background: t.color + '40',
                    border: `1px solid ${t.color}80`,
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: 6,
                    cursor: 'pointer',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text)' }}>
                      {t.name}
                    </span>
                  </div>
                </Link>

                {/* Authors within tradition */}
                {showAuthors && tAuthors.slice(0, 15).map((a, j) => {
                  const ax = yearToX(a.dates.start);
                  const aw = Math.max(yearToX(a.dates.end) - ax, 3);
                  return (
                    <Link key={a.id} href={`/author/${a.id}`} style={{ textDecoration: 'none' }}>
                      <div
                        title={`${a.name} (${formatYear(a.dates.start)}–${formatYear(a.dates.end)})`}
                        style={{
                          position: 'absolute',
                          left: ax,
                          top: 28,
                          width: aw,
                          height: 6,
                          background: t.color,
                          borderRadius: 3,
                          cursor: 'pointer',
                          opacity: 0.7,
                        }}
                      />
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
