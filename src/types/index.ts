// =============================================
// PHILOSOPHICAL ATLAS — Core Type Definitions
// =============================================

export type NodeType = 'tradition' | 'author' | 'text' | 'concept';

export type EdgeType =
  | 'influenced'
  | 'criticized'
  | 'developed'
  | 'commented_on'
  | 'translated'
  | 'responded_to'
  | 'belongs_to'
  | 'parallels'
  | 'debated'
  | 'transmitted_to'
  | 'reinterpreted'
  | 'shares_concept'
  | 'historically_connected'
  | 'wrote'
  | 'student_of'
  | 'teacher_of';

export type CertaintyScore = 1 | 2 | 3 | 4 | 5; // 1=speculative, 5=well-documented

export interface TimeSpan {
  start: number; // year, negative for BCE
  end: number;
  approximate?: boolean;
  label?: string; // e.g. "6th century BCE"
}

export interface GeoLocation {
  lat: number;
  lng: number;
  name: string;
  region?: string;
}

// =============================================
// TRADITION
// =============================================
export interface Tradition {
  id: string;
  name: string;
  alternateNames?: string[];
  region: string;
  regions?: string[];
  timeSpan: TimeSpan;
  shortSummary: string;
  longDescription: string;
  majorConcepts: string[];   // concept IDs
  majorFigures: string[];    // author IDs
  majorTexts: string[];      // text IDs
  relatedTraditions: string[]; // tradition IDs
  tags: string[];
  color: string; // for visualization
  location?: GeoLocation;
}

// =============================================
// AUTHOR
// =============================================
export interface Author {
  id: string;
  name: string;
  nativeScriptName?: string;
  dates: TimeSpan;
  dateNote?: string;
  places: GeoLocation[];
  traditions: string[];    // tradition IDs
  schools: string[];
  shortBio: string;
  keyDoctrines: string[];
  influencesReceived: string[]; // author IDs
  influencesGiven: string[];   // author IDs
  majorTexts: string[];        // text IDs
  relatedConcepts: string[];   // concept IDs
  debates: string[];           // author IDs (opponents)
  bibliography?: string[];
  confidenceNotes?: string;
}

// =============================================
// TEXT
// =============================================
export interface PhilosophicalText {
  id: string;
  title: string;
  originalTitle?: string;
  author: string;          // author ID
  authorName?: string;
  date: TimeSpan;
  dateNote?: string;
  originalLanguage: string;
  tradition: string;       // tradition ID
  genre: string;
  summary: string;
  structure?: string[];    // chapter/section titles
  keyConcepts: string[];   // concept IDs
  relatedTexts: string[];  // text IDs
  influenceLinks: string[];// text IDs
  manuscriptNotes?: string;
  publicDomain: boolean;
  sourceLinks?: string[];
  translationAvailability?: string;
  samplePassage?: string;
  aiTranslation?: string;
  latexContent?: string;
}

// =============================================
// CONCEPT
// =============================================
export interface Concept {
  id: string;
  term: string;
  originalLanguageVariants: { language: string; term: string; transliteration?: string }[];
  definitionsByTradition: { tradition: string; definition: string }[];
  relatedConcepts: string[];   // concept IDs
  opposingConcepts: string[];  // concept IDs
  majorTexts: string[];        // text IDs
  majorAuthors: string[];      // author IDs
  historicalTransformations?: string;
}

// =============================================
// EDGE (Network Link)
// =============================================
export interface Edge {
  id: string;
  source: string;
  sourceType: NodeType;
  target: string;
  targetType: NodeType;
  relationType: EdgeType;
  explanation?: string;
  dateOrPeriod?: string;
  certainty: CertaintyScore;
  citations?: string[];
}

// =============================================
// Search result
// =============================================
export interface SearchResult {
  id: string;
  type: NodeType;
  name: string;
  tradition?: string;
  period?: string;
  snippet?: string;
}

// =============================================
// Utility types
// =============================================
export interface FilterState {
  traditions: string[];
  eraStart: number;
  eraEnd: number;
  regions: string[];
  nodeTypes: NodeType[];
  searchQuery: string;
}

export const EDGE_COLORS: Record<EdgeType, string> = {
  influenced: '#6366f1',
  criticized: '#ef4444',
  developed: '#22c55e',
  commented_on: '#a855f7',
  translated: '#06b6d4',
  responded_to: '#f97316',
  belongs_to: '#6b7280',
  parallels: '#eab308',
  debated: '#dc2626',
  transmitted_to: '#14b8a6',
  reinterpreted: '#8b5cf6',
  shares_concept: '#3b82f6',
  historically_connected: '#78716c',
  wrote: '#64748b',
  student_of: '#10b981',
  teacher_of: '#059669',
};

export const TRADITION_COLORS: Record<string, string> = {
  'greek': '#3b82f6',
  'roman': '#6366f1',
  'indian': '#f59e0b',
  'chinese': '#ef4444',
  'buddhist': '#f97316',
  'japanese': '#ec4899',
  'islamic': '#10b981',
  'jewish': '#8b5cf6',
  'african': '#84cc16',
  'christian': '#6366f1',
  'medieval': '#a855f7',
  'renaissance': '#14b8a6',
  'enlightenment': '#06b6d4',
  'german_idealism': '#64748b',
  'existentialism': '#dc2626',
  'phenomenology': '#7c3aed',
  'analytic': '#0ea5e9',
  'pragmatism': '#22c55e',
  'marxist': '#b91c1c',
  'feminist': '#d946ef',
  'postcolonial': '#65a30d',
  'contemporary': '#0891b2',
  'indigenous': '#a3e635',
  'default': '#6b7280',
};
