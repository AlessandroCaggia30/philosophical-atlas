import type { Author, PhilosophicalText, Tradition, Concept, Edge, NodeType, FilterState } from '@/types';

export function formatYear(year: number): string {
  if (year < 0) return `${Math.abs(year)} BCE`;
  return `${year} CE`;
}

export function formatTimeSpan(start: number, end: number, approximate?: boolean): string {
  const prefix = approximate ? 'c. ' : '';
  if (start === end) return `${prefix}${formatYear(start)}`;
  return `${prefix}${formatYear(start)} – ${formatYear(end)}`;
}

export function getTraditionColor(traditionId: string): string {
  const colorMap: Record<string, string> = {
    'pre-socratic': '#3b82f6',
    'platonism': '#3b82f6',
    'aristotelianism': '#2563eb',
    'stoicism': '#1d4ed8',
    'epicureanism': '#60a5fa',
    'neoplatonism': '#818cf8',
    'skepticism': '#93c5fd',
    'cynicism': '#4f46e5',
    'vedanta': '#f59e0b',
    'advaita-vedanta': '#f59e0b',
    'samkhya': '#d97706',
    'yoga-philosophy': '#b45309',
    'nyaya': '#ea580c',
    'vaisheshika': '#c2410c',
    'mimamsa': '#92400e',
    'jainism': '#fbbf24',
    'charvaka': '#fcd34d',
    'confucianism': '#ef4444',
    'daoism': '#dc2626',
    'mohism': '#b91c1c',
    'legalism': '#991b1b',
    'neo-confucianism': '#f87171',
    'theravada-buddhism': '#f97316',
    'mahayana-buddhism': '#fb923c',
    'madhyamaka': '#fdba74',
    'yogacara': '#fed7aa',
    'zen-buddhism': '#ec4899',
    'tibetan-buddhism': '#f472b6',
    'huayan': '#f9a8d4',
    'pure-land-buddhism': '#fb7185',
    'islamic-falsafa': '#10b981',
    'kalam': '#059669',
    'sufism': '#047857',
    'mutazila': '#065f46',
    'asharism': '#34d399',
    'ismaili-philosophy': '#6ee7b7',
    'jewish-philosophy': '#8b5cf6',
    'kabbalah': '#a78bfa',
    'scholasticism': '#6366f1',
    'thomism': '#4f46e5',
    'augustinianism': '#7c3aed',
    'scotism': '#6d28d9',
    'nominalism': '#5b21b6',
    'rationalism': '#06b6d4',
    'empiricism': '#0891b2',
    'german-idealism': '#64748b',
    'transcendentalism': '#475569',
    'utilitarianism': '#0ea5e9',
    'existentialism': '#dc2626',
    'phenomenology': '#7c3aed',
    'hermeneutics': '#9333ea',
    'analytic-philosophy': '#0ea5e9',
    'logical-positivism': '#0284c7',
    'ordinary-language-philosophy': '#38bdf8',
    'pragmatism': '#22c55e',
    'process-philosophy': '#16a34a',
    'marxism': '#b91c1c',
    'critical-theory': '#991b1b',
    'frankfurt-school': '#7f1d1d',
    'structuralism': '#a855f7',
    'post-structuralism': '#9333ea',
    'deconstruction': '#7e22ce',
    'feminist-philosophy': '#d946ef',
    'africana-philosophy': '#84cc16',
    'ubuntu-philosophy': '#65a30d',
    'sage-philosophy': '#4d7c0f',
    'postcolonial-philosophy': '#65a30d',
    'decolonial-thought': '#3f6212',
    'latin-american-philosophy': '#a3e635',
    'liberation-philosophy': '#bef264',
    'kyoto-school': '#ec4899',
    'philosophy-of-mind': '#06b6d4',
    'philosophy-of-language': '#0891b2',
    'philosophy-of-science': '#0e7490',
    'contemporary-global': '#0891b2',
  };
  return colorMap[traditionId] || '#6b7280';
}

export function getNodeTypeIcon(type: NodeType): string {
  switch (type) {
    case 'tradition': return '◆';
    case 'author': return '●';
    case 'text': return '□';
    case 'concept': return '△';
  }
}

export function getNodeTypeLabel(type: NodeType): string {
  switch (type) {
    case 'tradition': return 'Tradition';
    case 'author': return 'Author';
    case 'text': return 'Text';
    case 'concept': return 'Concept';
  }
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function filterEdges(edges: Edge[], filters: Partial<FilterState>): Edge[] {
  return edges.filter(edge => {
    if (filters.traditions && filters.traditions.length > 0) {
      // This would need node data to check tradition membership
      return true;
    }
    return true;
  });
}

export function getCenturyLabel(year: number): string {
  if (year < 0) {
    const century = Math.ceil(Math.abs(year) / 100);
    return `${century}th century BCE`;
  }
  const century = Math.ceil(year / 100);
  const suffix = century === 1 ? 'st' : century === 2 ? 'nd' : century === 3 ? 'rd' : 'th';
  return `${century}${suffix} century CE`;
}

export function getRegionFromCoords(lat: number, lng: number): string {
  if (lat > 30 && lng > -30 && lng < 45) return 'Europe';
  if (lat > 5 && lat < 40 && lng > 60 && lng < 100) return 'South Asia';
  if (lat > 15 && lng > 100 && lng < 150) return 'East Asia';
  if (lat > 25 && lng > 25 && lng < 60) return 'Middle East';
  if (lat < 5 && lng > -20 && lng < 55) return 'Africa';
  if (lat > 10 && lat < 60 && lng < -50) return 'Americas';
  return 'Other';
}
