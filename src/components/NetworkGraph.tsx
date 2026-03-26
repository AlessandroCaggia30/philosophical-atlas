'use client';

import { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import type { NodeType, FilterState } from '@/types';
import { traditions } from '@/data/traditions';
import { authors } from '@/data/authors';
import { texts } from '@/data/texts';
import { concepts } from '@/data/concepts';
import { edges } from '@/data/edges';
import { getTraditionColor } from '@/lib/utils';

interface NetworkGraphProps {
  filters: FilterState;
  onNodeClick: (id: string, type: NodeType) => void;
  highlightedNode?: string | null;
}

interface GraphNode {
  id: string;
  type: NodeType;
  label: string;
  tradition?: string;
  year?: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

interface GraphEdge {
  source: string;
  target: string;
  type: string;
  color: string;
}

// Assign each tradition a region-based angular sector for spatial clustering
const REGION_SECTORS: Record<string, { startAngle: number; endAngle: number; radius: number }> = {
  'South Asia':    { startAngle: 0.0,  endAngle: 0.5,  radius: 350 },
  'East Asia':     { startAngle: 0.5,  endAngle: 1.0,  radius: 350 },
  'Middle East':   { startAngle: 1.0,  endAngle: 1.4,  radius: 350 },
  'Europe':        { startAngle: 1.4,  endAngle: 2.2,  radius: 350 },
  'Africa':        { startAngle: 2.2,  endAngle: 2.6,  radius: 350 },
  'Americas':      { startAngle: 2.6,  endAngle: 3.0,  radius: 350 },
  'Central Asia':  { startAngle: 0.3,  endAngle: 0.6,  radius: 280 },
  'Global':        { startAngle: 3.0,  endAngle: 3.5,  radius: 280 },
};

function getRegionSector(region: string) {
  for (const [key, sector] of Object.entries(REGION_SECTORS)) {
    if (region.includes(key) || key.includes(region)) return sector;
  }
  return REGION_SECTORS['Global'] || { startAngle: 0, endAngle: Math.PI * 2, radius: 400 };
}

// Map year to opacity: earlier = more transparent, recent = more opaque
function yearToOpacity(year: number | undefined): number {
  if (year === undefined) return 0.8;
  const minYear = -2500;
  const maxYear = 2025;
  const normalized = (year - minYear) / (maxYear - minYear); // 0 = ancient, 1 = modern
  return 0.3 + normalized * 0.7; // range 0.3 to 1.0
}

// Deterministic pseudo-random from string seed
function seededRandom(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return ((hash & 0x7fffffff) % 1000) / 1000;
}

export default function NetworkGraph({ filters, onNodeClick, highlightedNode }: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.85 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nodesRef = useRef<GraphNode[]>([]);
  const edgesRef = useRef<GraphEdge[]>([]);

  const graphData = useMemo(() => {
    const nodes: GraphNode[] = [];
    const graphEdges: GraphEdge[] = [];

    const showType = (type: NodeType) => filters.nodeTypes.length === 0 || filters.nodeTypes.includes(type);
    const matchTradition = (tradIds: string[]) => filters.traditions.length === 0 || tradIds.some(t => filters.traditions.includes(t));
    const matchEra = (year: number) => year >= filters.eraStart && year <= filters.eraEnd;
    const matchSearch = (label: string) => !filters.searchQuery || label.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const nodeIds = new Set<string>();

    // Assign traditions to spatial sectors by region
    const traditionPositions = new Map<string, { x: number; y: number }>();
    const regionTraditionCounts: Record<string, number> = {};
    const regionTraditionIndex: Record<string, number> = {};

    // Count traditions per region
    traditions.forEach(t => {
      const region = t.region || 'Global';
      regionTraditionCounts[region] = (regionTraditionCounts[region] || 0) + 1;
    });

    // Place traditions in their regional sector
    if (showType('tradition')) {
      traditions.forEach(t => {
        if (!matchTradition([t.id]) || !matchSearch(t.name)) return;
        const region = t.region || 'Global';
        const sector = getRegionSector(region);
        if (!regionTraditionIndex[region]) regionTraditionIndex[region] = 0;
        const idx = regionTraditionIndex[region]++;
        const count = regionTraditionCounts[region] || 1;

        const angleRange = (sector.endAngle - sector.startAngle) * Math.PI;
        const angle = sector.startAngle * Math.PI + angleRange * ((idx + 0.5) / count);
        const r = sector.radius + seededRandom(t.id) * 60 - 30;

        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        traditionPositions.set(t.id, { x, y });

        nodes.push({
          id: t.id,
          type: 'tradition',
          label: t.name,
          tradition: t.id,
          year: t.timeSpan.start,
          x, y,
          size: 14,
          color: t.color,
          opacity: 1.0,
        });
        nodeIds.add(t.id);
      });
    }

    // Place authors clustered near their tradition, with chronological spread
    if (showType('author')) {
      authors.forEach(a => {
        if (!matchTradition(a.traditions) || !matchEra(a.dates.start) || !matchSearch(a.name)) return;

        // Find the tradition center
        let baseX = 0, baseY = 0;
        for (const tId of a.traditions) {
          const pos = traditionPositions.get(tId);
          if (pos) { baseX = pos.x; baseY = pos.y; break; }
        }

        // Spread authors around tradition center, using year for radial distance
        // Earlier authors closer to center, later ones further out
        const yearNorm = ((a.dates.start + 2500) / 4525); // 0=ancient, 1=modern
        const spreadRadius = 40 + yearNorm * 80;
        const angle = seededRandom(a.id) * Math.PI * 2;

        const x = baseX + Math.cos(angle) * spreadRadius;
        const y = baseY + Math.sin(angle) * spreadRadius;

        // Size based on influence (connections)
        const connectionCount = a.influencesGiven.length + a.influencesReceived.length;
        const size = 4 + Math.min(connectionCount, 12) * 0.6;

        nodes.push({
          id: a.id,
          type: 'author',
          label: a.name,
          tradition: a.traditions[0],
          year: a.dates.start,
          x, y,
          size,
          color: getTraditionColor(a.traditions[0] || ''),
          opacity: yearToOpacity(a.dates.start),
        });
        nodeIds.add(a.id);
      });
    }

    // Texts: small dots near their author
    if (showType('text')) {
      const textSubset = texts.slice(0, 200);
      textSubset.forEach(t => {
        if (!matchTradition([t.tradition]) || !matchEra(t.date.start) || !matchSearch(t.title)) return;
        const authorNode = nodes.find(n => n.id === t.author);
        const bx = authorNode ? authorNode.x : (seededRandom(t.id) - 0.5) * 600;
        const by = authorNode ? authorNode.y : (seededRandom(t.id + 'y') - 0.5) * 600;

        nodes.push({
          id: t.id, type: 'text', label: t.title, tradition: t.tradition,
          year: t.date.start,
          x: bx + (seededRandom(t.id + 'tx') - 0.5) * 30,
          y: by + (seededRandom(t.id + 'ty') - 0.5) * 30,
          size: 3,
          color: getTraditionColor(t.tradition),
          opacity: yearToOpacity(t.date.start) * 0.6,
        });
        nodeIds.add(t.id);
      });
    }

    // Concepts: placed between traditions that share them
    if (showType('concept')) {
      concepts.forEach(c => {
        if (!matchSearch(c.term)) return;

        // Position concept near the average of its major authors' positions
        let cx = 0, cy = 0, count = 0;
        c.majorAuthors.forEach(aId => {
          const an = nodes.find(n => n.id === aId);
          if (an) { cx += an.x; cy += an.y; count++; }
        });
        if (count > 0) { cx /= count; cy /= count; }
        else {
          const angle = seededRandom(c.id) * Math.PI * 2;
          cx = Math.cos(angle) * 200;
          cy = Math.sin(angle) * 200;
        }

        nodes.push({
          id: c.id, type: 'concept', label: c.term,
          year: 0,
          x: cx + (seededRandom(c.id + 'cx') - 0.5) * 40,
          y: cy + (seededRandom(c.id + 'cy') - 0.5) * 40,
          size: 5,
          color: '#eab308',
          opacity: 0.7,
        });
        nodeIds.add(c.id);
      });
    }

    // Edges
    edges.forEach(e => {
      if (nodeIds.has(e.source) && nodeIds.has(e.target)) {
        let color: string;
        switch (e.relationType) {
          case 'influenced': case 'teacher_of': case 'student_of': color = '#6366f150'; break;
          case 'criticized': case 'debated': color = '#ef444440'; break;
          case 'developed': case 'wrote': color = '#22c55e30'; break;
          case 'belongs_to': color = '#6b728020'; break;
          case 'parallels': case 'shares_concept': color = '#eab30830'; break;
          case 'transmitted_to': color = '#06b6d440'; break;
          default: color = '#6b728020';
        }
        graphEdges.push({ source: e.source, target: e.target, type: e.relationType, color });
      }
    });

    return { nodes, edges: graphEdges };
  }, [filters]);

  useEffect(() => {
    nodesRef.current = graphData.nodes;
    edgesRef.current = graphData.edges;
  }, [graphData]);

  // Draw
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    // Dark background
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.save();
    ctx.translate(rect.width / 2 + transform.x, rect.height / 2 + transform.y);
    ctx.scale(transform.scale, transform.scale);

    const nodes = nodesRef.current;
    const gEdges = edgesRef.current;
    const nodeMap = new Map(nodes.map(n => [n.id, n]));

    // Region labels (subtle background text)
    ctx.globalAlpha = 0.08;
    ctx.font = 'bold 28px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffffff';
    const regionLabels = [
      { label: 'South Asia', angle: 0.25, r: 350 },
      { label: 'East Asia', angle: 0.75, r: 350 },
      { label: 'Middle East', angle: 1.2, r: 350 },
      { label: 'Europe', angle: 1.8, r: 380 },
      { label: 'Africa', angle: 2.4, r: 350 },
      { label: 'Americas', angle: 2.8, r: 350 },
    ];
    regionLabels.forEach(rl => {
      ctx.fillText(rl.label, Math.cos(rl.angle * Math.PI) * rl.r, Math.sin(rl.angle * Math.PI) * rl.r);
    });
    ctx.globalAlpha = 1.0;

    // Draw edges
    gEdges.forEach(e => {
      const source = nodeMap.get(e.source);
      const target = nodeMap.get(e.target);
      if (!source || !target) return;

      const isHighlighted = highlightedNode && (e.source === highlightedNode || e.target === highlightedNode);

      if (isHighlighted) {
        ctx.strokeStyle = '#818cf8';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.9;
      } else {
        ctx.strokeStyle = e.color;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = 0.4;
      }

      ctx.beginPath();
      // Curved edges for cross-region connections
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 200 && e.type !== 'belongs_to' && e.type !== 'wrote') {
        // Curved
        const mx = (source.x + target.x) / 2 - dy * 0.1;
        const my = (source.y + target.y) / 2 + dx * 0.1;
        ctx.moveTo(source.x, source.y);
        ctx.quadraticCurveTo(mx, my, target.x, target.y);
      } else {
        ctx.moveTo(source.x, source.y);
        ctx.lineTo(target.x, target.y);
      }
      ctx.stroke();
    });
    ctx.globalAlpha = 1.0;

    // Draw nodes (sorted: traditions on top)
    const sortedNodes = [...nodes].sort((a, b) => {
      const order: Record<string, number> = { text: 0, concept: 1, author: 2, tradition: 3 };
      return (order[a.type] || 0) - (order[b.type] || 0);
    });

    sortedNodes.forEach(node => {
      const isHighlighted = node.id === highlightedNode;
      const isHovered = hoveredNode?.id === node.id;
      const active = isHighlighted || isHovered;
      const size = active ? node.size * 1.8 : node.size;
      ctx.globalAlpha = active ? 1.0 : node.opacity;

      // Glow effect for traditions
      if (node.type === 'tradition') {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, size * 3);
        gradient.addColorStop(0, node.color + '30');
        gradient.addColorStop(1, node.color + '00');
        ctx.fillStyle = gradient;
        ctx.arc(node.x, node.y, size * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.beginPath();
      if (node.type === 'tradition') {
        // Diamond with fill
        ctx.moveTo(node.x, node.y - size);
        ctx.lineTo(node.x + size, node.y);
        ctx.lineTo(node.x, node.y + size);
        ctx.lineTo(node.x - size, node.y);
        ctx.closePath();
        ctx.fillStyle = node.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff40';
        ctx.lineWidth = 1;
        ctx.stroke();
      } else if (node.type === 'text') {
        // Small filled square
        const s = size * 0.7;
        ctx.rect(node.x - s, node.y - s, s * 2, s * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
      } else if (node.type === 'concept') {
        // Triangle
        ctx.moveTo(node.x, node.y - size);
        ctx.lineTo(node.x + size * 0.87, node.y + size * 0.5);
        ctx.lineTo(node.x - size * 0.87, node.y + size * 0.5);
        ctx.closePath();
        ctx.fillStyle = '#eab308';
        ctx.fill();
      } else {
        // Circle for authors — with border ring
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        if (active) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      }

      // Labels
      const showLabel = active || node.type === 'tradition' ||
        (transform.scale > 1.2 && node.type === 'author') ||
        (transform.scale > 2.0);

      if (showLabel) {
        const fontSize = node.type === 'tradition' ? 11 : active ? 11 : 8;
        ctx.font = `${node.type === 'tradition' ? 'bold ' : ''}${fontSize}px Inter, system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';

        // Text shadow for readability
        ctx.fillStyle = '#000000';
        ctx.globalAlpha = 0.6;
        ctx.fillText(node.label, node.x + 1, node.y + size + 5);
        ctx.globalAlpha = active ? 1.0 : node.opacity;
        ctx.fillStyle = node.type === 'tradition' ? '#ffffff' : '#cccccc';
        ctx.fillText(node.label, node.x, node.y + size + 4);
      }
    });

    ctx.globalAlpha = 1.0;
    ctx.restore();
  }, [transform, highlightedNode, hoveredNode, graphData]);

  useEffect(() => { draw(); }, [draw]);

  useEffect(() => {
    const handleResize = () => draw();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [draw]);

  const findNodeAt = useCallback((clientX: number, clientY: number): GraphNode | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const mx = (clientX - rect.left - rect.width / 2 - transform.x) / transform.scale;
    const my = (clientY - rect.top - rect.height / 2 - transform.y) / transform.scale;

    // Check traditions first (priority), then authors, then others
    const sorted = [...nodesRef.current].sort((a, b) => {
      const order: Record<string, number> = { tradition: 3, author: 2, concept: 1, text: 0 };
      return (order[b.type] || 0) - (order[a.type] || 0);
    });
    for (const node of sorted) {
      const dx = mx - node.x;
      const dy = my - node.y;
      const hitSize = node.size + (node.type === 'tradition' ? 8 : 4);
      if (dx * dx + dy * dy < hitSize * hitSize) return node;
    }
    return null;
  }, [transform]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStart({ x: e.clientX - transform.x, y: e.clientY - transform.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    if (dragging) {
      setTransform(t => ({ ...t, x: e.clientX - dragStart.x, y: e.clientY - dragStart.y }));
    } else {
      const node = findNodeAt(e.clientX, e.clientY);
      setHoveredNode(node);
      if (canvasRef.current) canvasRef.current.style.cursor = node ? 'pointer' : 'grab';
    }
  };

  const handleMouseUp = () => setDragging(false);

  const handleClick = (e: React.MouseEvent) => {
    const node = findNodeAt(e.clientX, e.clientY);
    if (node) onNodeClick(node.id, node.type);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(t => ({ ...t, scale: Math.max(0.1, Math.min(8, t.scale * factor)) }));
  };

  // Tradition color legend
  const visibleTraditions = useMemo(() => {
    return traditions.slice(0, 20).map(t => ({ name: t.name, color: t.color }));
  }, []);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative', background: '#0a0a0a' }}>
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', cursor: 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClick={handleClick}
        onWheel={handleWheel}
      />

      {/* Tooltip */}
      {hoveredNode && !dragging && (
        <div style={{
          position: 'absolute',
          left: mousePos.x - (containerRef.current?.getBoundingClientRect().left || 0) + 14,
          top: mousePos.y - (containerRef.current?.getBoundingClientRect().top || 0) - 10,
          background: '#1a1a1a',
          border: '1px solid #333',
          borderRadius: 8,
          padding: '8px 12px',
          fontSize: 12,
          color: '#e0e0e0',
          boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
          zIndex: 100,
          pointerEvents: 'none',
          maxWidth: 260,
        }}>
          <div style={{ fontWeight: 600, marginBottom: 2, color: hoveredNode.color }}>{hoveredNode.label}</div>
          <div style={{ fontSize: 10, color: '#888' }}>
            {hoveredNode.type}{hoveredNode.tradition ? ` · ${hoveredNode.tradition.replace(/-/g, ' ')}` : ''}
            {hoveredNode.year ? ` · ${hoveredNode.year < 0 ? Math.abs(hoveredNode.year) + ' BCE' : hoveredNode.year + ' CE'}` : ''}
          </div>
        </div>
      )}

      {/* Zoom controls */}
      <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <button onClick={() => setTransform(t => ({ ...t, scale: Math.min(8, t.scale * 1.3) }))}
          style={{ width: 32, height: 32, border: '1px solid #333', borderRadius: 6, background: '#1a1a1a', color: '#ccc', cursor: 'pointer', fontSize: 16 }}>+</button>
        <button onClick={() => setTransform(t => ({ ...t, scale: Math.max(0.1, t.scale / 1.3) }))}
          style={{ width: 32, height: 32, border: '1px solid #333', borderRadius: 6, background: '#1a1a1a', color: '#ccc', cursor: 'pointer', fontSize: 16 }}>−</button>
        <button onClick={() => setTransform({ x: 0, y: 0, scale: 0.85 })}
          style={{ width: 32, height: 32, border: '1px solid #333', borderRadius: 6, background: '#1a1a1a', color: '#ccc', cursor: 'pointer', fontSize: 11 }}>⟳</button>
      </div>

      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: 16,
        left: 16,
        background: '#1a1a1aee',
        border: '1px solid #333',
        borderRadius: 8,
        padding: '10px 14px',
        fontSize: 10,
        color: '#aaa',
        maxWidth: 220,
        maxHeight: 300,
        overflowY: 'auto',
      }}>
        <div style={{ fontWeight: 700, marginBottom: 6, fontSize: 11, color: '#ddd' }}>Traditions</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {visibleTraditions.map(t => (
            <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 8, borderTop: '1px solid #333', paddingTop: 6 }}>
          <div style={{ fontWeight: 700, marginBottom: 4, fontSize: 11, color: '#ddd' }}>Shapes</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <span>◆ Tradition</span>
            <span>● Author</span>
            <span>■ Text</span>
            <span>▲ Concept</span>
          </div>
        </div>
        <div style={{ marginTop: 6, borderTop: '1px solid #333', paddingTop: 6 }}>
          <div style={{ fontWeight: 700, marginBottom: 4, fontSize: 11, color: '#ddd' }}>Brightness</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ opacity: 0.3 }}>●</span>
            <span>Ancient</span>
            <span style={{ margin: '0 2px' }}>→</span>
            <span style={{ opacity: 1.0 }}>●</span>
            <span>Modern</span>
          </div>
        </div>
        <div style={{ marginTop: 4, color: '#666' }}>
          {graphData.nodes.length} nodes · {graphData.edges.length} edges
        </div>
      </div>
    </div>
  );
}
