'use client';

import { useEffect, useRef, useCallback, useState, useMemo } from 'react';
import type { NodeType, FilterState } from '@/types';
import { traditions } from '@/data/traditions';
import { authors } from '@/data/authors';
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
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
}

interface GraphEdge {
  source: string;
  target: string;
  type: string;
}

// Force-directed layout parameters
const REPULSION = 15000;
const ATTRACTION = 0.0004;
const TRADITION_GRAVITY = 0.003;
const DAMPING = 0.78;
const MIN_DIST = 100;

function seeded(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return ((h & 0x7fffffff) % 10000) / 10000;
}

// Region layout: spread traditions in a large circle grouped by region
const REGION_ORDER = [
  'South Asia', 'Central Asia', 'East Asia', 'Middle East',
  'Europe', 'Africa', 'Americas', 'Global',
];

export default function NetworkGraph({ filters, onNodeClick, highlightedNode }: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 0.25 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nodesRef = useRef<GraphNode[]>([]);
  const edgesRef = useRef<GraphEdge[]>([]);
  const animRef = useRef<number>(0);
  const [settled, setSettled] = useState(false);
  const iterRef = useRef(0);

  // Build graph — only traditions and authors (no texts/concepts for clarity)
  const graphData = useMemo(() => {
    const nodes: GraphNode[] = [];
    const graphEdges: GraphEdge[] = [];
    const nodeIds = new Set<string>();

    const showType = (type: NodeType) => filters.nodeTypes.length === 0 || filters.nodeTypes.includes(type);
    const matchTradition = (tradIds: string[]) => filters.traditions.length === 0 || tradIds.some(t => filters.traditions.includes(t));
    const matchEra = (year: number) => year >= filters.eraStart && year <= filters.eraEnd;
    const matchSearch = (label: string) => !filters.searchQuery || label.toLowerCase().includes(filters.searchQuery.toLowerCase());

    // Place traditions in a circle grouped by region
    const tradByRegion: Record<string, typeof traditions> = {};
    traditions.forEach(t => {
      const r = t.region || 'Global';
      if (!tradByRegion[r]) tradByRegion[r] = [];
      tradByRegion[r].push(t);
    });

    let globalIdx = 0;
    const totalTrad = traditions.length;
    const tradPositions = new Map<string, { x: number; y: number }>();

    REGION_ORDER.forEach(region => {
      const trads = tradByRegion[region] || [];
      trads.forEach(t => {
        if (!matchTradition([t.id]) || !matchSearch(t.name)) { globalIdx++; return; }
        const angle = (globalIdx / totalTrad) * Math.PI * 2 - Math.PI / 2;
        const r = 1600;
        const x = Math.cos(angle) * r;
        const y = Math.sin(angle) * r;
        tradPositions.set(t.id, { x, y });

        if (showType('tradition')) {
          nodes.push({
            id: t.id, type: 'tradition', label: t.name, tradition: t.id,
            year: t.timeSpan.start, x, y, vx: 0, vy: 0,
            size: 18, color: t.color, alpha: 1.0,
          });
          nodeIds.add(t.id);
        }
        globalIdx++;
      });
    });

    // Authors — initial position near their tradition
    if (showType('author')) {
      authors.forEach(a => {
        if (!matchTradition(a.traditions) || !matchEra(a.dates.start) || !matchSearch(a.name)) return;

        let bx = 0, by = 0;
        for (const tId of a.traditions) {
          const p = tradPositions.get(tId);
          if (p) { bx = p.x; by = p.y; break; }
        }

        const spread = 500;
        const ax = seeded(a.id);
        const ay = seeded(a.id + 'y');

        // Era-based alpha: ancient = lighter
        const yearNorm = Math.max(0, Math.min(1, (a.dates.start + 2500) / 4525));
        const alpha = 0.35 + yearNorm * 0.65;

        // Size by connections
        const conns = a.influencesGiven.length + a.influencesReceived.length;
        const size = 5 + Math.min(conns, 8) * 0.8;

        nodes.push({
          id: a.id, type: 'author', label: a.name, tradition: a.traditions[0],
          year: a.dates.start,
          x: bx + (ax - 0.5) * spread,
          y: by + (ay - 0.5) * spread,
          vx: 0, vy: 0,
          size, color: getTraditionColor(a.traditions[0] || ''), alpha,
        });
        nodeIds.add(a.id);
      });
    }

    // Edges — only influence, teacher, student, debated
    edges.forEach(e => {
      if (!nodeIds.has(e.source) || !nodeIds.has(e.target)) return;
      if (['influenced', 'teacher_of', 'student_of', 'debated', 'criticized', 'developed', 'transmitted_to', 'parallels'].includes(e.relationType)) {
        graphEdges.push({ source: e.source, target: e.target, type: e.relationType });
      }
    });

    return { nodes, edges: graphEdges };
  }, [filters]);

  // Reset simulation on data change
  useEffect(() => {
    nodesRef.current = graphData.nodes.map(n => ({ ...n }));
    edgesRef.current = graphData.edges;
    setSettled(false);
    iterRef.current = 0;
  }, [graphData]);

  // Force simulation step
  const simulate = useCallback(() => {
    const nodes = nodesRef.current;
    const gEdges = edgesRef.current;
    if (nodes.length === 0) return;

    const nodeMap = new Map(nodes.map(n => [n.id, n]));

    // Repulsion between all nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1) { dist = 1; dx = Math.random() - 0.5; dy = Math.random() - 0.5; }
        if (dist > 1500) continue; // skip far nodes for perf

        const minD = a.type === 'tradition' && b.type === 'tradition' ? 350 : MIN_DIST;
        const force = REPULSION / (dist * dist);
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        a.vx -= fx; a.vy -= fy;
        b.vx += fx; b.vy += fy;

        // Extra push if overlapping
        if (dist < minD) {
          const push = (minD - dist) * 0.3;
          a.vx -= (dx / dist) * push;
          a.vy -= (dy / dist) * push;
          b.vx += (dx / dist) * push;
          b.vy += (dy / dist) * push;
        }
      }
    }

    // Edge attraction
    gEdges.forEach(e => {
      const a = nodeMap.get(e.source);
      const b = nodeMap.get(e.target);
      if (!a || !b) return;
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1) return;
      const force = dist * ATTRACTION;
      const fx = (dx / dist) * force;
      const fy = (dy / dist) * force;
      a.vx += fx; a.vy += fy;
      b.vx -= fx; b.vy -= fy;
    });

    // Tradition gravity: authors pulled gently toward their tradition
    nodes.forEach(n => {
      if (n.type !== 'author' || !n.tradition) return;
      const trad = nodeMap.get(n.tradition);
      if (!trad) return;
      const dx = trad.x - n.x;
      const dy = trad.y - n.y;
      n.vx += dx * TRADITION_GRAVITY;
      n.vy += dy * TRADITION_GRAVITY;
    });

    // Traditions: light gravity toward their initial circle position
    const totalTrad = traditions.length;
    let gi = 0;
    traditions.forEach(t => {
      const node = nodeMap.get(t.id);
      if (!node) { gi++; return; }
      const angle = (gi / totalTrad) * Math.PI * 2 - Math.PI / 2;
      const tx = Math.cos(angle) * 1600;
      const ty = Math.sin(angle) * 1600;
      node.vx += (tx - node.x) * 0.005;
      node.vy += (ty - node.y) * 0.005;
      gi++;
    });

    // Apply velocity
    let totalMovement = 0;
    nodes.forEach(n => {
      n.vx *= DAMPING;
      n.vy *= DAMPING;
      n.x += n.vx;
      n.y += n.vy;
      totalMovement += Math.abs(n.vx) + Math.abs(n.vy);
    });

    iterRef.current++;
    if (iterRef.current > 600 || totalMovement / nodes.length < 0.02) {
      setSettled(true);
    }
  }, []);

  // Animation loop
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

    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);

    ctx.save();
    ctx.translate(rect.width / 2 + transform.x, rect.height / 2 + transform.y);
    ctx.scale(transform.scale, transform.scale);

    const nodes = nodesRef.current;
    const gEdges = edgesRef.current;
    const nodeMap = new Map(nodes.map(n => [n.id, n]));

    // Draw edges first
    gEdges.forEach(e => {
      const a = nodeMap.get(e.source);
      const b = nodeMap.get(e.target);
      if (!a || !b) return;

      const isHl = highlightedNode && (e.source === highlightedNode || e.target === highlightedNode);

      if (isHl) {
        ctx.strokeStyle = '#4f46e5';
        ctx.lineWidth = 2.5;
        ctx.globalAlpha = 0.9;
      } else {
        // Edge color by type
        switch (e.type) {
          case 'influenced': case 'teacher_of': case 'student_of':
            ctx.strokeStyle = '#94a3b8'; break;
          case 'debated': case 'criticized':
            ctx.strokeStyle = '#fca5a5'; break;
          case 'transmitted_to':
            ctx.strokeStyle = '#6ee7b7'; break;
          case 'parallels':
            ctx.strokeStyle = '#fde68a'; break;
          default:
            ctx.strokeStyle = '#e2e8f0'; break;
        }
        ctx.lineWidth = 0.8;
        ctx.globalAlpha = 0.3;
      }

      ctx.beginPath();
      ctx.moveTo(a.x, a.y);

      // Gentle curve for longer edges
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 150) {
        const mx = (a.x + b.x) / 2 - dy * 0.08;
        const my = (a.y + b.y) / 2 + dx * 0.08;
        ctx.quadraticCurveTo(mx, my, b.x, b.y);
      } else {
        ctx.lineTo(b.x, b.y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1.0;
    });

    // Draw nodes — traditions first (as big background circles), then authors
    // Sort: traditions last so they draw on top
    const sorted = [...nodes].sort((a, b) => {
      if (a.type === 'tradition' && b.type !== 'tradition') return 1;
      if (a.type !== 'tradition' && b.type === 'tradition') return -1;
      return 0;
    });

    sorted.forEach(node => {
      const isHl = node.id === highlightedNode;
      const isHov = hoveredNode?.id === node.id;
      const active = isHl || isHov;

      if (node.type === 'tradition') {
        // Large soft circle as cluster background
        const bgR = 180;
        ctx.beginPath();
        ctx.arc(node.x, node.y, bgR, 0, Math.PI * 2);
        ctx.fillStyle = node.color + '0d'; // very subtle fill
        ctx.fill();
        ctx.strokeStyle = node.color + '25';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner diamond
        const s = active ? 14 : 10;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y - s);
        ctx.lineTo(node.x + s, node.y);
        ctx.lineTo(node.x, node.y + s);
        ctx.lineTo(node.x - s, node.y);
        ctx.closePath();
        ctx.fillStyle = node.color;
        ctx.fill();
        if (active) {
          ctx.strokeStyle = node.color;
          ctx.lineWidth = 3;
          ctx.stroke();
        }

        // Label always visible
        ctx.font = 'bold 11px Inter, system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillStyle = node.color;
        ctx.fillText(node.label, node.x, node.y + s + 6);

      } else {
        // Author node
        const s = active ? node.size * 1.8 : node.size;
        ctx.globalAlpha = active ? 1.0 : node.alpha;

        // Circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, s, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();

        if (active) {
          ctx.strokeStyle = '#1e1e1e';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Label on hover/highlight or when zoomed in
        if (active || transform.scale > 1.5 || (transform.scale > 1.0 && node.size > 8)) {
          ctx.font = `${active ? '11' : '9'}px Inter, system-ui, sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillStyle = '#374151';
          ctx.fillText(node.label, node.x, node.y + s + 4);
        }

        ctx.globalAlpha = 1.0;
      }
    });

    ctx.restore();
  }, [transform, highlightedNode, hoveredNode]);

  // Main loop
  useEffect(() => {
    let running = true;
    const loop = () => {
      if (!running) return;
      if (!settled) simulate();
      draw();
      animRef.current = requestAnimationFrame(loop);
    };
    loop();
    return () => { running = false; cancelAnimationFrame(animRef.current); };
  }, [simulate, draw, settled]);

  // Mouse handlers
  const findNodeAt = useCallback((clientX: number, clientY: number): GraphNode | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const mx = (clientX - rect.left - rect.width / 2 - transform.x) / transform.scale;
    const my = (clientY - rect.top - rect.height / 2 - transform.y) / transform.scale;

    // Traditions first (priority)
    for (const node of nodesRef.current) {
      if (node.type !== 'tradition') continue;
      const dx = mx - node.x, dy = my - node.y;
      if (dx * dx + dy * dy < 15 * 15) return node;
    }
    for (const node of nodesRef.current) {
      if (node.type === 'tradition') continue;
      const dx = mx - node.x, dy = my - node.y;
      if (dx * dx + dy * dy < (node.size + 4) * (node.size + 4)) return node;
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
    const f = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(t => ({ ...t, scale: Math.max(0.15, Math.min(10, t.scale * f)) }));
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative', background: '#fff' }}>
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
          background: '#fff',
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          padding: '8px 12px',
          fontSize: 12,
          color: '#1f2937',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          zIndex: 100,
          pointerEvents: 'none',
          maxWidth: 280,
        }}>
          <div style={{ fontWeight: 600, marginBottom: 2 }}>
            <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: hoveredNode.color, marginRight: 6 }} />
            {hoveredNode.label}
          </div>
          <div style={{ fontSize: 10, color: '#6b7280' }}>
            {hoveredNode.type === 'tradition' ? 'Tradition' : 'Author'}
            {hoveredNode.tradition && hoveredNode.type !== 'tradition' ? ` · ${hoveredNode.tradition.replace(/-/g, ' ')}` : ''}
            {hoveredNode.year ? ` · ${hoveredNode.year < 0 ? Math.abs(hoveredNode.year) + ' BCE' : hoveredNode.year + ' CE'}` : ''}
          </div>
        </div>
      )}

      {/* Zoom controls */}
      <div style={{ position: 'absolute', bottom: 16, right: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {[
          { label: '+', action: () => setTransform(t => ({ ...t, scale: Math.min(10, t.scale * 1.4) })) },
          { label: '−', action: () => setTransform(t => ({ ...t, scale: Math.max(0.15, t.scale / 1.4) })) },
          { label: '⟳', action: () => { setTransform({ x: 0, y: 0, scale: 0.25 }); setSettled(false); iterRef.current = 0; nodesRef.current = graphData.nodes.map(n => ({ ...n })); } },
        ].map(b => (
          <button key={b.label} onClick={b.action} style={{
            width: 34, height: 34, border: '1px solid #e5e7eb', borderRadius: 8,
            background: '#fff', color: '#374151', cursor: 'pointer', fontSize: 16,
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          }}>{b.label}</button>
        ))}
      </div>

      {/* Legend */}
      <div style={{
        position: 'absolute', bottom: 16, left: 16,
        background: '#ffffffee', border: '1px solid #e5e7eb', borderRadius: 10,
        padding: '12px 16px', fontSize: 10, color: '#6b7280',
        maxWidth: 200, boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}>
        <div style={{ fontWeight: 700, fontSize: 11, color: '#1f2937', marginBottom: 6 }}>Legend</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 12px', marginBottom: 8 }}>
          {traditions.slice(0, 14).map(t => (
            <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.color, flexShrink: 0 }} />
              <span style={{ whiteSpace: 'nowrap' }}>{t.name.length > 18 ? t.name.slice(0, 16) + '…' : t.name}</span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: 6, display: 'flex', gap: 10 }}>
          <span>◆ Tradition</span>
          <span>● Author</span>
        </div>
        <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
          <span style={{ opacity: 0.3, color: '#374151' }}>●</span> ancient
          <span style={{ margin: '0 2px', color: '#d1d5db' }}>→</span>
          <span style={{ opacity: 1.0, color: '#374151' }}>●</span> modern
        </div>
        <div style={{ marginTop: 4, color: '#9ca3af' }}>
          {graphData.nodes.length} nodes · {graphData.edges.length} edges
        </div>
      </div>
    </div>
  );
}
