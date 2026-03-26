// =============================================
// PHILOSOPHICAL ATLAS — Multi-Agent Architecture
// Hierarchical Swarm Type Definitions
// =============================================

// =============================================
// CONFIDENCE & UNCERTAINTY MODEL
// =============================================

export type ConfidenceLevel = 1 | 2 | 3 | 4 | 5;

export interface UncertaintyAnnotation {
  claim: string;
  confidence: ConfidenceLevel;
  basis: string;        // e.g., "scholarly consensus", "single source", "inference"
  disputes?: string[];  // competing claims
  sources?: string[];   // citations supporting this claim
  note?: string;
}

export interface DisputedClaim {
  id: string;
  topic: string;          // e.g., "dating", "authorship", "attribution"
  positions: {
    claim: string;
    supporters: string[];   // scholar names or tradition names
    evidence: string;
    confidence: ConfidenceLevel;
  }[];
  resolution?: string;     // current scholarly consensus if any
  unresolvedReason?: string;
}

// =============================================
// AGENT IDENTITY & COMMUNICATION
// =============================================

export type AgentLevel = 'meta-orchestrator' | 'culture' | 'age' | 'author' | 'text' | 'utility';

export type UtilityAgentType =
  | 'ontology'
  | 'chronology'
  | 'philology'
  | 'concept-mapping'
  | 'translation'
  | 'latex-edition'
  | 'citation-evidence'
  | 'graph-integrity'
  | 'comparative-philosophy'
  | 'copyright-access';

export interface AgentIdentity {
  id: string;
  level: AgentLevel;
  utilityType?: UtilityAgentType;
  name: string;
  scope: string;             // human-readable scope description
  parentAgentId?: string;
  childAgentIds: string[];
  siblingAgentIds: string[];
  status: 'active' | 'completed' | 'error' | 'pending';
}

export interface AgentMessage {
  id: string;
  timestamp: string;
  fromAgentId: string;
  toAgentId: string;
  type: AgentMessageType;
  payload: Record<string, unknown>;
  priority: 'low' | 'normal' | 'high' | 'critical';
}

export type AgentMessageType =
  | 'data_submission'        // agent submits its output
  | 'cross_reference'        // agent requests info from another
  | 'conflict_report'        // agent reports contradictory data
  | 'merge_request'          // request to merge duplicate entities
  | 'validation_request'     // request graph integrity check
  | 'chronology_dispute'     // disputed dates
  | 'identity_resolution'    // alternate names / transliterations
  | 'concept_mapping'        // cross-tradition concept linkage
  | 'influence_claim'        // proposed influence edge
  | 'refinement_pass'        // iterative improvement
  | 'scope_assignment'       // orchestrator assigns scope
  | 'status_update';         // progress report

// =============================================
// LEVEL 1: CULTURE AGENT
// =============================================

export interface CultureAgentOutput {
  agentId: string;
  cultureId: string;
  cultureName: string;
  alternateNames: string[];
  overview: string;                    // comprehensive overview
  geographicScope: string[];           // regions
  linguisticZones: string[];           // languages used
  timeSpan: { start: number; end: number; approximate: boolean };

  // Internal structure
  periodization: PeriodDefinition[];
  schools: SchoolDefinition[];
  majorAuthors: string[];              // author IDs
  majorTexts: string[];                // text IDs
  keyConcepts: string[];               // concept IDs

  // External relations
  transmissionRoutes: TransmissionRoute[];
  crossCulturalContacts: CrossCulturalContact[];
  influencesReceived: CulturalInfluence[];
  influencesGiven: CulturalInfluence[];

  // Scholarly metadata
  internalDebates: DebateCluster[];
  historiographicDisputes: DisputedClaim[];
  uncertainties: UncertaintyAnnotation[];
  bibliography: string[];

  // Child agents
  ageAgentIds: string[];
}

export interface PeriodDefinition {
  id: string;
  name: string;
  alternateNames?: string[];
  dateRange: { start: number; end: number; approximate: boolean };
  description: string;
  majorSchools: string[];
  majorAuthors: string[];
  majorTexts: string[];
  dominantConcepts: string[];
  continuityWithPrevious?: string;
  ruptureFromPrevious?: string;
}

export interface SchoolDefinition {
  id: string;
  name: string;
  alternateNames?: string[];
  founder?: string;
  period: string;
  keyConcepts: string[];
  majorFigures: string[];
  majorTexts: string[];
  parentSchool?: string;
  childSchools: string[];
  rivals: string[];
}

export interface TransmissionRoute {
  from: string;          // culture or region
  to: string;
  period: string;
  mechanism: string;     // e.g., "translation movement", "trade", "conquest", "missionary"
  keyTexts: string[];
  keyFigures: string[];
  confidence: ConfidenceLevel;
}

export interface CrossCulturalContact {
  otherCulture: string;
  period: string;
  nature: 'influence' | 'reception' | 'debate' | 'translation' | 'parallel' | 'transmission';
  description: string;
  evidence: string[];
  confidence: ConfidenceLevel;
}

export interface CulturalInfluence {
  culture: string;
  direction: 'received' | 'given';
  period: string;
  domain: string;        // e.g., "metaphysics", "logic", "ethics"
  description: string;
  confidence: ConfidenceLevel;
}

export interface DebateCluster {
  id: string;
  topic: string;
  period: string;
  participants: string[];   // author or school IDs
  positions: { party: string; position: string }[];
  outcome?: string;
  significance: string;
}

// =============================================
// LEVEL 2: AGE / PERIOD AGENT
// =============================================

export interface AgeAgentOutput {
  agentId: string;
  ageId: string;
  ageName: string;
  cultureId: string;
  dateRange: { start: number; end: number; approximate: boolean };

  // Context
  politicalContext: string;
  socialContext: string;
  intellectualContext: string;

  // Content
  majorSchools: SchoolDefinition[];
  majorAuthors: AuthorSummary[];
  majorTexts: TextSummary[];
  dominantConcepts: string[];
  debateClusters: DebateCluster[];

  // Textual production
  textualProductionPatterns: string;   // analysis of writing/transmission
  genres: string[];
  languages: string[];

  // Transitions
  continuityAnalysis: string;          // how this age continues the previous
  ruptureAnalysis: string;             // how this age breaks from the previous
  legacyAnalysis: string;              // how this age shapes the next

  // Links
  previousAgeId?: string;
  nextAgeId?: string;
  contemporaryAges: string[];          // ages in other cultures overlapping in time

  // Metadata
  uncertainties: UncertaintyAnnotation[];
  historiographicDisputes: DisputedClaim[];
  bibliography: string[];

  // Child agents
  authorAgentIds: string[];
}

export interface AuthorSummary {
  id: string;
  name: string;
  dates: string;
  significance: string;
}

export interface TextSummary {
  id: string;
  title: string;
  author: string;
  date: string;
  significance: string;
}

// =============================================
// LEVEL 3: AUTHOR AGENT
// =============================================

export interface AuthorAgentOutput {
  agentId: string;
  authorId: string;

  // Identity
  canonicalName: string;
  nameVariants: { script: string; name: string; language: string }[];
  dates: { birth: number; death: number; approximate: boolean };
  datingConfidence: UncertaintyAnnotation;
  regions: string[];
  places: { name: string; lat: number; lng: number; role: string }[];

  // Intellectual position
  tradition: string;
  school: string;
  cultureId: string;
  ageId: string;

  // Works
  authenticWorks: WorkEntry[];
  disputedWorks: WorkEntry[];
  lostWorks: WorkEntry[];
  attributedWorks: WorkEntry[];

  // Doctrines
  coreDoctrines: DoctrineEntry[];
  conceptsUsed: string[];
  conceptsOriginated: string[];

  // Network
  interlocutors: RelationEntry[];
  predecessors: RelationEntry[];
  successors: RelationEntry[];
  teachers: string[];
  students: string[];
  criticsOf: string[];
  criticizedBy: string[];

  // Commentary tradition
  commentariesOnAuthor: CommentaryEntry[];
  commentariesByAuthor: CommentaryEntry[];

  // Reception
  receptionHistory: ReceptionEntry[];

  // Metadata
  biographicalNarrative: string;
  intellectualContext: string;
  scholarlyDebates: DisputedClaim[];
  uncertainties: UncertaintyAnnotation[];
  bibliography: string[];
  sourceNotes: string;

  // Child agents
  textAgentIds: string[];
}

export interface WorkEntry {
  id: string;
  title: string;
  originalTitle?: string;
  date?: string;
  authenticity: 'certain' | 'probable' | 'disputed' | 'spurious' | 'lost';
  authenticityNote?: string;
  genre: string;
  significance: string;
}

export interface DoctrineEntry {
  name: string;
  description: string;
  relatedConcepts: string[];
  relatedTexts: string[];
  confidence: ConfidenceLevel;
}

export interface RelationEntry {
  authorId: string;
  authorName: string;
  relationType: string;
  description: string;
  evidence: string;
  confidence: ConfidenceLevel;
}

export interface CommentaryEntry {
  textId: string;
  textTitle: string;
  commentator: string;
  date: string;
  type: 'commentary' | 'subcommentary' | 'gloss' | 'translation' | 'refutation' | 'summary';
  significance: string;
}

export interface ReceptionEntry {
  period: string;
  region: string;
  description: string;
  keyFigures: string[];
  nature: 'positive' | 'negative' | 'transformative' | 'selective' | 'misreading';
}

// =============================================
// LEVEL 4: TEXT AGENT
// =============================================

export interface TextAgentOutput {
  agentId: string;
  textId: string;

  // Identity
  title: string;
  originalTitle?: string;
  titleVariants: { language: string; title: string }[];
  author: string;
  authorName: string;

  // Dating & Authenticity
  date: { start: number; end: number; approximate: boolean };
  datingNote?: string;
  datingDisputes?: DisputedClaim[];
  authenticity: 'certain' | 'probable' | 'disputed' | 'composite' | 'pseudepigraphic';
  authenticityNote?: string;
  redactionHistory?: string;

  // Classification
  language: string;
  tradition: string;
  genre: string;
  subgenre?: string;

  // Structure
  structure: TextStructure;
  totalSections: number;

  // Content analysis
  synopsis: string;
  argumentMap?: ArgumentNode[];
  keyTerms: TermEntry[];
  namedEntities: NamedEntityEntry[];
  linkedConcepts: string[];
  linkedAuthors: string[];
  linkedTraditions: string[];

  // Textual scholarship
  manuscriptHistory?: string;
  majorEditions?: EditionEntry[];
  translations: TranslationEntry[];
  commentaryTradition: CommentaryEntry[];

  // Relations
  relatedTexts: TextRelation[];
  influencedBy: TextRelation[];
  influenced: TextRelation[];
  respondedTo: TextRelation[];
  parallelPassages: ParallelPassage[];

  // Access & rights
  publicDomain: boolean;
  copyrightStatus: string;
  lawfulDisplayPolicy: 'full' | 'excerpt' | 'metadata-only' | 'summary-only';
  aiTranslationEligible: boolean;
  latexExportEligible: boolean;

  // AI-generated content (for eligible texts)
  aiTranslation?: AITranslation;
  latexEdition?: string;

  // Metadata
  uncertainties: UncertaintyAnnotation[];
  bibliography: string[];
}

export interface TextStructure {
  type: 'books' | 'chapters' | 'sections' | 'verses' | 'sutras' | 'dialogues' | 'letters' | 'other';
  divisions: TextDivision[];
}

export interface TextDivision {
  id: string;
  label: string;        // e.g., "Book I", "Chapter 3", "Verse 42"
  title?: string;
  summary?: string;
  keyConcepts?: string[];
  subDivisions?: TextDivision[];
}

export interface ArgumentNode {
  id: string;
  claim: string;
  premises: string[];
  conclusion: string;
  type: 'deductive' | 'inductive' | 'dialectical' | 'reductio' | 'analogy' | 'appeal';
  textLocation: string;
  relatedArguments: string[];
}

export interface TermEntry {
  term: string;
  originalTerm?: string;
  language?: string;
  definition: string;
  frequency: 'key' | 'frequent' | 'occasional';
  relatedConcepts: string[];
}

export interface NamedEntityEntry {
  name: string;
  type: 'person' | 'place' | 'text' | 'school' | 'deity' | 'concept';
  referenceId?: string;
  context: string;
}

export interface EditionEntry {
  editor: string;
  year: number;
  publisher: string;
  language: string;
  type: 'critical' | 'diplomatic' | 'popular' | 'digital';
  notes?: string;
}

export interface TranslationEntry {
  translator: string;
  year: number;
  language: string;
  publisher?: string;
  quality?: 'standard' | 'scholarly' | 'popular' | 'abridged';
  notes?: string;
}

export interface TextRelation {
  textId: string;
  textTitle: string;
  relationType: string;
  description?: string;
  confidence: ConfidenceLevel;
}

export interface ParallelPassage {
  thisLocation: string;
  otherTextId: string;
  otherLocation: string;
  nature: 'quotation' | 'allusion' | 'parallel' | 'response' | 'commentary';
  confidence: ConfidenceLevel;
}

export interface AITranslation {
  fullText?: string;
  sections: {
    id: string;
    original?: string;
    translation: string;
    notes?: string[];
    glossaryTerms?: { term: string; definition: string }[];
  }[];
  translatorNote: string;
  methodology: string;
  limitations: string;
  confidence: ConfidenceLevel;
}

// =============================================
// META-ORCHESTRATOR
// =============================================

export interface OrchestratorState {
  globalOntologyVersion: string;
  totalAgents: number;
  agentRegistry: Record<string, AgentIdentity>;
  messageLog: AgentMessage[];
  conflictQueue: ConflictEntry[];
  mergeQueue: MergeEntry[];
  validationResults: ValidationResult[];
  completionStatus: {
    cultures: { total: number; completed: number };
    ages: { total: number; completed: number };
    authors: { total: number; completed: number };
    texts: { total: number; completed: number };
  };
  balanceMetrics: {
    byRegion: Record<string, number>;    // count of entities per region
    byPeriod: Record<string, number>;
    byCulture: Record<string, number>;
  };
}

export interface ConflictEntry {
  id: string;
  type: 'dating' | 'attribution' | 'influence' | 'naming' | 'classification' | 'chronology';
  agentIds: string[];
  claims: { agentId: string; claim: string; evidence: string }[];
  resolution?: string;
  status: 'open' | 'resolved' | 'preserved-as-disputed';
}

export interface MergeEntry {
  id: string;
  entityType: 'author' | 'text' | 'concept' | 'tradition';
  candidateIds: string[];
  reason: string;
  status: 'pending' | 'merged' | 'rejected';
}

export interface ValidationResult {
  id: string;
  type: 'dangling-node' | 'contradictory-relation' | 'duplicate' | 'invalid-edge' | 'circular-chronology' | 'missing-data';
  entityIds: string[];
  description: string;
  severity: 'error' | 'warning' | 'info';
  resolution?: string;
}

// =============================================
// UTILITY AGENT OUTPUTS
// =============================================

export interface ConceptMappingOutput {
  conceptId: string;
  term: string;
  multilingualCluster: { language: string; term: string; transliteration?: string; tradition: string }[];
  partialEquivalences: { conceptId: string; degree: 'full' | 'partial' | 'analogous' | 'false-friend'; note: string }[];
  semanticDrift: { period: string; meaning: string; tradition: string }[];
  falseFriendWarnings: string[];
}

export interface ChronologyResolution {
  entityId: string;
  entityType: string;
  proposedDates: { start: number; end: number }[];
  selectedDate: { start: number; end: number };
  confidence: ConfidenceLevel;
  reasoning: string;
  disputes: DisputedClaim[];
}

export interface GraphIntegrityReport {
  timestamp: string;
  totalNodes: number;
  totalEdges: number;
  danglingNodes: string[];
  duplicateEntities: { ids: string[]; reason: string }[];
  contradictoryEdges: { edgeIds: string[]; description: string }[];
  circularChronologies: string[];
  missingConnections: { from: string; to: string; expectedRelation: string }[];
  balanceWarnings: string[];
}

export interface CopyrightAssessment {
  textId: string;
  publicDomain: boolean;
  copyrightHolder?: string;
  jurisdiction: string;
  lawfulDisplayPolicy: 'full' | 'excerpt' | 'metadata-only' | 'summary-only';
  aiTranslationEligible: boolean;
  latexExportEligible: boolean;
  reasoning: string;
}
