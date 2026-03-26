'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import type { NodeType, FilterState } from '@/types';
import { traditions } from '@/data/traditions';
import SidePanel from '@/components/SidePanel';

const NetworkGraph = dynamic(() => import('@/components/NetworkGraph'), { ssr: false });

const REGIONS = ['All', 'South Asia', 'East Asia', 'Middle East', 'Europe', 'Africa', 'Americas', 'Southeast Asia'];
const ERAS = [
  { label: 'All Time', start: -3000, end: 2025 },
  { label: 'Ancient (before 500 CE)', start: -3000, end: 500 },
  { label: 'Medieval (500–1500)', start: 500, end: 1500 },
  { label: 'Early Modern (1500–1800)', start: 1500, end: 1800 },
  { label: 'Modern (1800–2025)', start: 1800, end: 2025 },
];

export default function NetworkPage() {
  const [filters, setFilters] = useState<FilterState>({
    traditions: [],
    eraStart: -3000,
    eraEnd: 2025,
    regions: [],
    nodeTypes: [],
    searchQuery: '',
  });
  const [selectedNode, setSelectedNode] = useState<{ id: string; type: NodeType } | null>(null);
  const [showFilters, setShowFilters] = useState(true);

  const traditionGroups = useMemo(() => {
    const groups: Record<string, typeof traditions> = {};
    traditions.forEach(t => {
      const region = t.region || 'Other';
      if (!groups[region]) groups[region] = [];
      groups[region].push(t);
    });
    return groups;
  }, []);

  const toggleTradition = (id: string) => {
    setFilters(f => ({
      ...f,
      traditions: f.traditions.includes(id)
        ? f.traditions.filter(t => t !== id)
        : [...f.traditions, id],
    }));
  };

  const toggleNodeType = (type: NodeType) => {
    setFilters(f => ({
      ...f,
      nodeTypes: f.nodeTypes.includes(type)
        ? f.nodeTypes.filter(t => t !== type)
        : [...f.nodeTypes, type],
    }));
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header bar */}
      <div style={{
        padding: '12px 20px',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        background: 'var(--color-bg-secondary)',
      }}>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, margin: 0 }}>Global Network View</h1>
        <button
          onClick={() => setShowFilters(f => !f)}
          style={{
            padding: '4px 12px',
            border: '1px solid var(--color-border)',
            borderRadius: 6,
            background: showFilters ? 'var(--color-accent)' : 'var(--color-surface)',
            color: showFilters ? 'white' : 'var(--color-text)',
            cursor: 'pointer',
            fontSize: 13,
          }}
        >
          Filters {showFilters ? '▲' : '▼'}
        </button>

        {/* Search */}
        <div style={{ flex: 1, maxWidth: 300 }}>
          <input
            className="search-input"
            placeholder="Search nodes…"
            value={filters.searchQuery}
            onChange={e => setFilters(f => ({ ...f, searchQuery: e.target.value }))}
            style={{ paddingLeft: 12 }}
          />
        </div>

        {/* Node type toggles */}
        <div style={{ display: 'flex', gap: 6 }}>
          {(['tradition', 'author', 'text', 'concept'] as NodeType[]).map(type => (
            <button
              key={type}
              onClick={() => toggleNodeType(type)}
              className={`filter-chip ${filters.nodeTypes.includes(type) || filters.nodeTypes.length === 0 ? 'active' : ''}`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Filters panel */}
      {showFilters && (
        <div style={{
          padding: '12px 20px',
          borderBottom: '1px solid var(--color-border)',
          background: 'var(--color-bg-secondary)',
          maxHeight: 200,
          overflowY: 'auto',
        }}>
          {/* Era filter */}
          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 6 }}>Era</div>
            <div className="filter-group">
              {ERAS.map(era => (
                <button
                  key={era.label}
                  onClick={() => setFilters(f => ({ ...f, eraStart: era.start, eraEnd: era.end }))}
                  className={`filter-chip ${filters.eraStart === era.start && filters.eraEnd === era.end ? 'active' : ''}`}
                >
                  {era.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tradition filter */}
          <div>
            <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--color-text-muted)', marginBottom: 6 }}>
              Traditions {filters.traditions.length > 0 && (
                <button onClick={() => setFilters(f => ({ ...f, traditions: [] }))}
                  style={{ background: 'none', border: 'none', color: 'var(--color-accent)', cursor: 'pointer', fontSize: 11 }}>
                  clear
                </button>
              )}
            </div>
            <div className="filter-group">
              {traditions.slice(0, 40).map(t => (
                <button
                  key={t.id}
                  onClick={() => toggleTradition(t.id)}
                  className={`filter-chip ${filters.traditions.includes(t.id) ? 'active' : ''}`}
                  style={filters.traditions.includes(t.id) ? { background: t.color, borderColor: t.color } : {}}
                >
                  {t.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Graph */}
      <div style={{ flex: 1, position: 'relative' }}>
        <NetworkGraph
          filters={filters}
          onNodeClick={(id, type) => setSelectedNode({ id, type })}
          highlightedNode={selectedNode?.id}
        />
      </div>

      {/* Side panel */}
      <SidePanel
        nodeId={selectedNode?.id || null}
        nodeType={selectedNode?.type || null}
        onClose={() => setSelectedNode(null)}
      />
    </div>
  );
}
