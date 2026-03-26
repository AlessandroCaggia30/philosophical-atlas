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
}

interface GraphEdge {
  source: string;
  target: string;
  type: string;
  color: string;
}

export default function NetworkGraph({ filters, onNodeClick, highlightedNode }: NetworkGraphProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<GraphNode | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const nodesRef = useRef<GraphNode[]>([]);
  const edgesRef = useRef<GraphEdge[]>([]);

  // Build graph data
  const graphData = useMemo(() => {
    const nodes: GraphNode[] = [];
    const graphEdges: GraphEdge[] = [];

    const showType = (type: NodeType) => filters.nodeTypes.length === 0 || filters.nodeTypes.includes(type);
    const matchTradition = (tradIds: string[]) => filters.traditions.length === 0 || tradIds.some(t => filters.traditions.includes(t));
    const matchEra = (year: number) => year >= filters.eraStart && year <= filters.eraEnd;
    const matchSearch = (label: string) => !filters.searchQuery || label.toLowerCase().includes(filters.searchQuery.toLowerCase());

    const nodeIds = new Set<string>();

    // Add traditions
    if (showType('tradition')) {
      traditions.forEach((t, i) => {
        if (matchTradition([t.id]) && matchSearch(t.name)) {
          const angle = (i / traditions.length) * Math.PI * 2;
          const radius = 300 + Math.random() * 100;
          nodes.push({
            id: t.id,
            type: 'tradition',
            label: t.name,
            tradition: t.id,
            year: t.timeSpan.start,
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            size: 12,
            color: t.color,
          });
          nodeIds.add(t.id);
        }
      });
    }

    // Add authors
    if (showType('author')) {
      authors.forEach((a, i) => {
        if (matchTradition(a.traditions) && matchEra(a.dates.start) && matchSearch(a.name)) {
          const tradNode = nodes.find(n => a.traditions.includes(n.id));
          const baseX = tradNode ? tradNode.x : 0;
          const baseY = tradNode ? tradNode.y : 0;
          const scatter = 150;
          nodes.push({
            id: a.id,
            type: 'author',
            label: a.name,
            tradition: a.traditions[0],
            year: a.dates.start,
            x: baseX + (Math.random() - 0.5) * scatter,
            y: baseY + (Math.random() - 0.5) * scatter,
            size: 6 + Math.min(a.influencesGiven.length, 10),
            color: getTraditionColor(a.traditions[0] || ''),
          });
          nodeIds.add(a.id);
        }
      });
    }

    // Add texts (smaller subset for performance)
    if (showType('text')) {
      const textSubset = texts.slice(0, 200);
      textSubset.forEach(t => {
        if (matchTradition([t.tradition]) && matchEra(t.date.start) && matchSearch(t.title)) {
          const authorNode = nodes.find(n => n.id === t.author);
          const baseX = authorNode ? authorNode.x : (Math.random() - 0.5) * 600;
          const baseY = authorNode ? authorNode.y : (Math.random() - 0.5) * 600;
          nodes.push({
            id: t.id,
            type: 'text',
            label: t.title,
            tradition: t.tradition,
            year: t.date.start,
            x: baseX + (Math.random() - 0.5) * 60,
            y: baseY + (Math.random() - 0.5) * 60,
            size: 4,
            color: getTraditionColor(t.tradition),
          });
          nodeIds.add(t.id);
        }
      });
    }

    // Add concepts
    if (showType('concept')) {
      concepts.forEach((c, i) => {
        if (matchSearch(c.term)) {
          const angle = (i / concepts.length) * Math.PI * 2;
          nodes.push({
            id: c.id,
            type: 'concept',
            label: c.term,
            year: 0,
            x: Math.cos(angle) * 500 + (Math.random() - 0.5) * 100,
            y: Math.sin(angle) * 500 + (Math.random() - 0.5) * 100,
            size: 5,
            color: '#eab308',
          });
          nodeIds.add(c.id);
        }
      });
    }

    // Build edges
    edges.forEach(e => {
      if (nodeIds.has(e.source) && nodeIds.has(e.target)) {
        graphEdges.push({
          source: e.source,
          target: e.target,
          type: e.relationType,
          color: e.relationType === 'influenced' ? '#6366f180' :
                 e.relationType === 'criticized' ? '#ef444480' :
                 e.relationType === 'developed' ? '#22c55e80' :
                 '#6b728040',
        });
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
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.save();
    ctx.translate(rect.width / 2 + transform.x, rect.height / 2 + transform.y);
    ctx.scale(transform.scale, transform.scale);

    const nodes = nodesRef.current;
    const gEdges = edgesRef.current;
    const nodeMap = new Map(nodes.map(n => [n.id, n]));

    // Draw edges
    ctx.lineWidth = 0.5;
    gEdges.forEach(e => {
      const source = nodeMap.get(e.source);
      const target = nodeMap.get(e.target);
      if (!source || !target) return;

      const isHighlighted = highlightedNode && (e.source === highlightedNode || e.target === highlightedNode);
      ctx.strokeStyle = isHighlighted ? '#6366f1' : e.color;
      ctx.lineWidth = isHighlighted ? 1.5 : 0.3;
      ctx.beginPath();
      ctx.moveTo(source.x, source.y);
      ctx.lineTo(target.x, target.y);
      ctx.stroke();
    });

    // Draw nodes
    nodes.forEach(node => {
      const isHighlighted = node.id === highlightedNode;
      const isHovered = hoveredNode?.id === node.id;

      ctx.beginPath();
      const size = (isHighlighted || isHovered) ? node.size * 1.5 : node.size;

      if (node.type === 'tradition') {
        // Diamond
        ctx.moveTo(node.x, node.y - size);
        ctx.lineTo(node.x + size, node.y);
        ctx.lineTo(node.x, node.y + size);
        ctx.lineTo(node.x - size, node.y);
        ctx.closePath();
      } else if (node.type === 'text') {
        // Square
        ctx.rect(node.x - size/2, node.y - size/2, size, size);
      } else if (node.type === 'concept') {
        // Triangle
        ctx.moveTo(node.x, node.y - size);
        ctx.lineTo(node.x + size, node.y + size);
        ctx.lineTo(node.x - size, node.y + size);
        ctx.closePath();
      } else {
        // Circle for authors
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
      }

      ctx.fillStyle = (isHighlighted || isHovered) ? node.color : node.color + 'cc';
      ctx.fill();

      if (isHighlighted || isHovered) {
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Label
      if (transform.scale > 0.8 || isHighlighted || isHovered || node.type === 'tradition') {
        ctx.fillStyle = 'var(--color-text)';
        ctx.font = `${isHighlighted || isHovered ? '12' : '9'}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.fillStyle = isHighlighted || isHovered ? '#ffffff' : '#888888';
        ctx.fillText(node.label, node.x, node.y + size + 12);
      }
    });

    ctx.restore();
  }, [transform, highlightedNode, hoveredNode, graphData]);

  useEffect(() => {
    draw();
  }, [draw]);

  // Resize
  useEffect(() => {
    const handleResize = () => draw();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [draw]);

  // Mouse handlers
  const findNodeAt = useCallback((clientX: number, clientY: number): GraphNode | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const mx = (clientX - rect.left - rect.width / 2 - transform.x) / transform.scale;
    const my = (clientY - rect.top - rect.height / 2 - transform.y) / transform.scale;

    for (const node of nodesRef.current) {
      const dx = mx - node.x;
      const dy = my - node.y;
      if (dx * dx + dy * dy < (node.size + 5) * (node.size + 5)) {
        return node;
      }
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
      if (canvasRef.current) {
        canvasRef.current.style.cursor = node ? 'pointer' : 'grab';
      }
    }
  };

  const handleMouseUp = () => setDragging(false);

  const handleClick = (e: React.MouseEvent) => {
    const node = findNodeAt(e.clientX, e.clientY);
    if (node) {
      onNodeClick(node.id, node.type);
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform(t => ({ ...t, scale: Math.max(0.1, Math.min(5, t.scale * factor)) }));
  };

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
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
        <div
          className="tooltip"
          style={{
            left: mousePos.x - (containerRef.current?.getBoundingClientRect().left || 0) + 12,
            top: mousePos.y - (containerRef.current?.getBoundingClientRect().top || 0) - 8,
          }}
        >
          <div style={{ fontWeight: 600, marginBottom: 2 }}>{hoveredNode.label}</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-muted)' }}>
            {hoveredNode.type}{hoveredNode.tradition ? ` · ${hoveredNode.tradition}` : ''}
          </div>
        </div>
      )}
      {/* Controls */}
      <div style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}>
        <button onClick={() => setTransform(t => ({ ...t, scale: Math.min(5, t.scale * 1.3) }))}
          style={{ width: 32, height: 32, border: '1px solid var(--color-border)', borderRadius: 6, background: 'var(--color-surface)', cursor: 'pointer', fontSize: 16 }}>+</button>
        <button onClick={() => setTransform(t => ({ ...t, scale: Math.max(0.1, t.scale / 1.3) }))}
          style={{ width: 32, height: 32, border: '1px solid var(--color-border)', borderRadius: 6, background: 'var(--color-surface)', cursor: 'pointer', fontSize: 16 }}>−</button>
        <button onClick={() => setTransform({ x: 0, y: 0, scale: 1 })}
          style={{ width: 32, height: 32, border: '1px solid var(--color-border)', borderRadius: 6, background: 'var(--color-surface)', cursor: 'pointer', fontSize: 11 }}>⟳</button>
      </div>
      {/* Legend */}
      <div style={{
        position: 'absolute',
        bottom: 16,
        left: 16,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        padding: '8px 12px',
        fontSize: 11,
      }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Node types</div>
        <div style={{ display: 'flex', gap: 12 }}>
          <span>◆ Tradition</span>
          <span>● Author</span>
          <span>□ Text</span>
          <span>△ Concept</span>
        </div>
        <div style={{ marginTop: 6, color: 'var(--color-text-muted)' }}>
          {graphData.nodes.length} nodes · {graphData.edges.length} edges
        </div>
      </div>
    </div>
  );
}
