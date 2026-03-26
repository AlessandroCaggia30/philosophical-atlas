// =============================================
// MULTI-AGENT ORCHESTRATION ENGINE
// =============================================

import type {
  AgentIdentity, AgentLevel, AgentMessage, AgentMessageType,
  CultureAgentOutput, AgeAgentOutput, AuthorAgentOutput, TextAgentOutput,
  OrchestratorState, ConflictEntry, ValidationResult, GraphIntegrityReport,
  ConfidenceLevel, UncertaintyAnnotation, DisputedClaim,
  PeriodDefinition, SchoolDefinition, DebateCluster,
} from '@/types/agents';

// =============================================
// AGENT REGISTRY
// =============================================

let agentCounter = 0;

export function createAgentId(level: AgentLevel, scope: string): string {
  return `${level}-${scope.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${++agentCounter}`;
}

export function createAgent(
  level: AgentLevel,
  name: string,
  scope: string,
  parentId?: string
): AgentIdentity {
  return {
    id: createAgentId(level, scope),
    level,
    name,
    scope,
    parentAgentId: parentId,
    childAgentIds: [],
    siblingAgentIds: [],
    status: 'pending',
  };
}

// =============================================
// META-ORCHESTRATOR
// =============================================

export class MetaOrchestrator {
  state: OrchestratorState;
  cultureOutputs: Map<string, CultureAgentOutput> = new Map();
  ageOutputs: Map<string, AgeAgentOutput> = new Map();
  authorOutputs: Map<string, AuthorAgentOutput> = new Map();
  textOutputs: Map<string, TextAgentOutput> = new Map();

  constructor() {
    this.state = {
      globalOntologyVersion: '1.0.0',
      totalAgents: 0,
      agentRegistry: {},
      messageLog: [],
      conflictQueue: [],
      mergeQueue: [],
      validationResults: [],
      completionStatus: {
        cultures: { total: 0, completed: 0 },
        ages: { total: 0, completed: 0 },
        authors: { total: 0, completed: 0 },
        texts: { total: 0, completed: 0 },
      },
      balanceMetrics: {
        byRegion: {},
        byPeriod: {},
        byCulture: {},
      },
    };
  }

  registerAgent(agent: AgentIdentity): void {
    this.state.agentRegistry[agent.id] = agent;
    this.state.totalAgents++;
    if (agent.parentAgentId && this.state.agentRegistry[agent.parentAgentId]) {
      this.state.agentRegistry[agent.parentAgentId].childAgentIds.push(agent.id);
    }
  }

  sendMessage(msg: Omit<AgentMessage, 'id' | 'timestamp'>): void {
    const fullMsg: AgentMessage = {
      ...msg,
      id: `msg-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      timestamp: new Date().toISOString(),
    };
    this.state.messageLog.push(fullMsg);
  }

  reportConflict(conflict: Omit<ConflictEntry, 'id' | 'status'>): void {
    this.state.conflictQueue.push({
      ...conflict,
      id: `conflict-${this.state.conflictQueue.length + 1}`,
      status: 'open',
    });
  }

  resolveConflict(conflictId: string, resolution: string, preserveAsDisputed: boolean): void {
    const conflict = this.state.conflictQueue.find(c => c.id === conflictId);
    if (conflict) {
      conflict.resolution = resolution;
      conflict.status = preserveAsDisputed ? 'preserved-as-disputed' : 'resolved';
    }
  }

  runGraphIntegrityCheck(): GraphIntegrityReport {
    const report: GraphIntegrityReport = {
      timestamp: new Date().toISOString(),
      totalNodes: 0,
      totalEdges: 0,
      danglingNodes: [],
      duplicateEntities: [],
      contradictoryEdges: [],
      circularChronologies: [],
      missingConnections: [],
      balanceWarnings: [],
    };

    // Count nodes
    report.totalNodes = this.cultureOutputs.size + this.ageOutputs.size +
      this.authorOutputs.size + this.textOutputs.size;

    // Check balance
    const regionCounts: Record<string, number> = {};
    this.cultureOutputs.forEach(c => {
      c.geographicScope.forEach(r => {
        regionCounts[r] = (regionCounts[r] || 0) + 1;
      });
    });
    this.state.balanceMetrics.byRegion = regionCounts;

    // Check for severely imbalanced coverage
    const values = Object.values(regionCounts);
    if (values.length > 0) {
      const max = Math.max(...values);
      const min = Math.min(...values);
      if (max > min * 5) {
        report.balanceWarnings.push(
          `Coverage imbalance detected: max region has ${max} cultures, min has ${min}`
        );
      }
    }

    this.state.validationResults = report.danglingNodes.map(id => ({
      id: `val-${id}`,
      type: 'dangling-node' as const,
      entityIds: [id],
      description: `Node ${id} has no connections`,
      severity: 'warning' as const,
    }));

    return report;
  }

  getCompletionStatus() {
    return this.state.completionStatus;
  }

  getAgentTree(): AgentTreeNode[] {
    const roots = Object.values(this.state.agentRegistry)
      .filter(a => !a.parentAgentId);
    return roots.map(r => this.buildTree(r));
  }

  private buildTree(agent: AgentIdentity): AgentTreeNode {
    return {
      agent,
      children: agent.childAgentIds
        .map(id => this.state.agentRegistry[id])
        .filter(Boolean)
        .map(child => this.buildTree(child)),
    };
  }
}

export interface AgentTreeNode {
  agent: AgentIdentity;
  children: AgentTreeNode[];
}

// =============================================
// CULTURE DEFINITIONS
// =============================================

export interface CultureDefinition {
  id: string;
  name: string;
  regions: string[];
  timeSpan: { start: number; end: number };
  periods: PeriodSpec[];
}

export interface PeriodSpec {
  id: string;
  name: string;
  start: number;
  end: number;
  description: string;
  majorSchools: string[];
  majorAuthors: string[];
}

export const CULTURE_DEFINITIONS: CultureDefinition[] = [
  {
    id: 'greek-hellenistic', name: 'Greek & Hellenistic Philosophy',
    regions: ['Greece', 'Mediterranean', 'Near East'],
    timeSpan: { start: -600, end: 529 },
    periods: [
      { id: 'presocratic', name: 'Presocratic', start: -600, end: -450, description: 'The first philosophers of the Greek world, inquiring into the nature of the cosmos.', majorSchools: ['Milesian', 'Eleatic', 'Pythagorean', 'Atomist', 'Pluralist'], majorAuthors: ['thales', 'anaximander', 'heraclitus', 'parmenides', 'empedocles', 'democritus'] },
      { id: 'classical-greek', name: 'Classical', start: -450, end: -323, description: 'The golden age of Greek philosophy: Socrates, Plato, and Aristotle.', majorSchools: ['Academy', 'Lyceum', 'Sophists'], majorAuthors: ['socrates', 'plato', 'aristotle'] },
      { id: 'hellenistic', name: 'Hellenistic', start: -323, end: -31, description: 'The great philosophical schools: Stoicism, Epicureanism, Skepticism.', majorSchools: ['Stoicism', 'Epicureanism', 'Pyrrhonism', 'Academic Skepticism'], majorAuthors: ['zeno-of-citium', 'epicurus', 'pyrrho', 'chrysippus'] },
      { id: 'roman-imperial', name: 'Roman Imperial', start: -31, end: 200, description: 'Roman adoption and transformation of Greek philosophy.', majorSchools: ['Roman Stoicism', 'Middle Platonism'], majorAuthors: ['cicero', 'seneca', 'epictetus', 'marcus-aurelius', 'lucretius'] },
      { id: 'late-antique', name: 'Late Antique / Neoplatonic', start: 200, end: 529, description: 'The Neoplatonic synthesis and the end of the ancient schools.', majorSchools: ['Neoplatonism'], majorAuthors: ['plotinus', 'porphyry', 'proclus', 'hypatia'] },
    ],
  },
  {
    id: 'indian', name: 'Indian Philosophy',
    regions: ['South Asia', 'Central Asia'],
    timeSpan: { start: -1500, end: 2025 },
    periods: [
      { id: 'vedic-upanishadic', name: 'Vedic & Upanishadic', start: -1500, end: -500, description: 'The earliest Indian philosophical speculation in the Vedas and Upanishads.', majorSchools: ['Vedic thought'], majorAuthors: [] },
      { id: 'shramanic', name: 'Shramanic & Early Systematic', start: -600, end: -200, description: 'Rise of Buddhism, Jainism, and the beginning of systematic philosophy.', majorSchools: ['Early Buddhism', 'Jainism', 'Ajivika', 'Charvaka'], majorAuthors: ['buddha', 'mahavira'] },
      { id: 'sutra-darshana', name: 'Sutra & Classical Darshana', start: -200, end: 500, description: 'Systematic sutra literature: Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta, Buddhist and Jain schools.', majorSchools: ['Nyaya', 'Vaisheshika', 'Samkhya', 'Yoga', 'Mimamsa', 'Vedanta', 'Madhyamaka', 'Yogacara'], majorAuthors: ['patanjali', 'gautama-aksapada', 'kanada', 'nagarjuna', 'vasubandhu', 'asanga'] },
      { id: 'classical-commentarial', name: 'Classical Commentarial', start: 500, end: 1200, description: 'The great commentators: Shankara, Ramanuja, Dharmakirti, Kumarila.', majorSchools: ['Advaita Vedanta', 'Vishishtadvaita', 'Dvaita', 'Navya-Nyaya'], majorAuthors: ['shankara', 'ramanuja', 'madhva', 'dharmakirti', 'kumarila-bhatta', 'dignaga'] },
      { id: 'late-classical', name: 'Late Classical & Early Modern', start: 1200, end: 1800, description: 'Navya-Nyaya logic, Bhakti philosophy, and late scholastic developments.', majorSchools: ['Navya-Nyaya', 'Bhakti philosophy'], majorAuthors: [] },
      { id: 'colonial-modern', name: 'Colonial & Modern', start: 1800, end: 2025, description: 'Encounter with the West, reform movements, and neo-Vedanta.', majorSchools: ['Neo-Vedanta', 'Buddhist modernism'], majorAuthors: ['vivekananda', 'aurobindo', 'gandhi', 'ambedkar'] },
    ],
  },
  {
    id: 'chinese', name: 'Chinese Philosophy',
    regions: ['East Asia'],
    timeSpan: { start: -1000, end: 2025 },
    periods: [
      { id: 'pre-qin', name: 'Pre-Qin (Hundred Schools)', start: -600, end: -221, description: 'The golden age of Chinese philosophy: Confucianism, Daoism, Mohism, Legalism.', majorSchools: ['Confucianism', 'Daoism', 'Mohism', 'Legalism', 'School of Names'], majorAuthors: ['confucius', 'laozi', 'zhuangzi', 'mencius', 'xunzi', 'mozi', 'han-fei'] },
      { id: 'han', name: 'Han Dynasty', start: -206, end: 220, description: 'Confucian orthodoxy, correlative cosmology, and early Buddhism in China.', majorSchools: ['Han Confucianism', 'Huang-Lao'], majorAuthors: [] },
      { id: 'wei-jin', name: 'Wei-Jin & Six Dynasties', start: 220, end: 589, description: 'Dark Learning (Xuanxue), Buddhist philosophy\'s maturation in China.', majorSchools: ['Xuanxue', 'Chinese Buddhism'], majorAuthors: [] },
      { id: 'sui-tang', name: 'Sui-Tang', start: 589, end: 907, description: 'Flowering of Chinese Buddhist philosophy: Tiantai, Huayan, Chan.', majorSchools: ['Tiantai', 'Huayan', 'Chan Buddhism'], majorAuthors: ['huineng'] },
      { id: 'song-ming', name: 'Song-Ming Neo-Confucianism', start: 960, end: 1644, description: 'The great Neo-Confucian synthesis: li-qi metaphysics, School of Mind.', majorSchools: ['Cheng-Zhu school', 'Lu-Wang school'], majorAuthors: ['zhu-xi', 'wang-yangming', 'zhang-zai', 'cheng-yi', 'lu-jiuyuan', 'zhou-dunyi'] },
      { id: 'qing', name: 'Qing Dynasty', start: 1644, end: 1912, description: 'Evidential learning, critiques of Neo-Confucianism, and early modernization.', majorSchools: ['Evidential learning', 'Statecraft'], majorAuthors: ['dai-zhen', 'wang-fuzhi'] },
      { id: 'modern-chinese', name: 'Modern & Contemporary', start: 1912, end: 2025, description: 'New Confucianism, Marxist philosophy, and contemporary Chinese thought.', majorSchools: ['New Confucianism', 'Chinese Marxism'], majorAuthors: [] },
    ],
  },
  {
    id: 'buddhist-transregional', name: 'Buddhist Philosophy (Transregional)',
    regions: ['South Asia', 'East Asia', 'Central Asia', 'Southeast Asia', 'Tibet'],
    timeSpan: { start: -500, end: 2025 },
    periods: [
      { id: 'early-buddhist', name: 'Early Buddhism', start: -500, end: -200, description: 'The Buddha\'s teaching and the earliest systematic doctrines.', majorSchools: ['Early schools (Nikaya)'], majorAuthors: ['buddha'] },
      { id: 'abhidharma', name: 'Abhidharma Period', start: -200, end: 200, description: 'Systematic analysis of dharmas (phenomena) by various Abhidharma schools.', majorSchools: ['Sarvastivada', 'Theravada Abhidhamma'], majorAuthors: ['buddhaghosa'] },
      { id: 'mahayana-emergence', name: 'Mahayana Emergence', start: 0, end: 300, description: 'Rise of Mahayana sutras and the bodhisattva ideal.', majorSchools: ['Prajnaparamita', 'Madhyamaka'], majorAuthors: ['nagarjuna', 'aryadeva'] },
      { id: 'classical-buddhist', name: 'Classical Buddhist Scholasticism', start: 300, end: 700, description: 'Yogacara, Buddhist logic, and mature Madhyamaka.', majorSchools: ['Yogacara', 'Prasangika', 'Svatantrika', 'Buddhist Epistemology'], majorAuthors: ['asanga', 'vasubandhu', 'dignaga', 'dharmakirti', 'chandrakirti', 'shantideva'] },
      { id: 'east-asian-buddhism', name: 'East Asian Buddhism', start: 300, end: 1300, description: 'Chan/Zen, Tiantai, Huayan, Pure Land, and Shingon.', majorSchools: ['Chan/Zen', 'Tiantai', 'Huayan', 'Pure Land', 'Shingon'], majorAuthors: ['huineng', 'dogen', 'kukai'] },
      { id: 'tibetan-buddhist', name: 'Tibetan Buddhist Scholasticism', start: 700, end: 2025, description: 'The four schools and the great commentarial traditions of Tibet.', majorSchools: ['Nyingma', 'Kagyu', 'Sakya', 'Gelug'], majorAuthors: ['tsongkhapa'] },
    ],
  },
  {
    id: 'islamic', name: 'Islamic Philosophy',
    regions: ['Middle East', 'North Africa', 'Central Asia', 'Iberia', 'South Asia'],
    timeSpan: { start: 700, end: 2025 },
    periods: [
      { id: 'early-kalam', name: 'Early Kalam', start: 700, end: 900, description: 'Emergence of rational theology: Mu\'tazila, early Ash\'arism.', majorSchools: ['Mu\'tazila', 'Ash\'ariyya'], majorAuthors: ['al-kindi'] },
      { id: 'classical-falsafa', name: 'Classical Falsafa', start: 900, end: 1100, description: 'The golden age of Islamic philosophy: al-Farabi, Ibn Sina.', majorSchools: ['Islamic Peripateticism', 'Neoplatonic-Aristotelian synthesis'], majorAuthors: ['al-farabi', 'ibn-sina'] },
      { id: 'ghazali-response', name: 'Al-Ghazali & Responses', start: 1050, end: 1200, description: 'Al-Ghazali\'s critique of philosophy and Ibn Rushd\'s defense.', majorSchools: ['Ash\'ari Kalam', 'Andalusian Aristotelianism'], majorAuthors: ['al-ghazali', 'ibn-rushd', 'ibn-tufayl'] },
      { id: 'illuminationist-sufi', name: 'Illuminationist & Philosophical Sufism', start: 1150, end: 1400, description: 'Suhrawardi\'s Illuminationism, Ibn Arabi\'s metaphysics of being.', majorSchools: ['Illuminationism', 'Akbarian school'], majorAuthors: ['suhrawardi', 'ibn-arabi', 'ibn-khaldun'] },
      { id: 'safavid-school', name: 'Safavid School & Transcendent Theosophy', start: 1500, end: 1700, description: 'Mulla Sadra\'s synthesis of Peripatetic, Illuminationist, and Sufi traditions.', majorSchools: ['School of Isfahan', 'Transcendent Theosophy'], majorAuthors: ['mulla-sadra'] },
      { id: 'modern-islamic', name: 'Modern & Contemporary', start: 1800, end: 2025, description: 'Islamic modernism, reformism, and contemporary Islamic philosophy.', majorSchools: ['Islamic modernism'], majorAuthors: ['muhammad-iqbal'] },
    ],
  },
  {
    id: 'jewish', name: 'Jewish Philosophy',
    regions: ['Middle East', 'Europe', 'North Africa'],
    timeSpan: { start: -200, end: 2025 },
    periods: [
      { id: 'hellenistic-jewish', name: 'Hellenistic Jewish', start: -200, end: 100, description: 'Philo\'s synthesis of Greek philosophy and Jewish scripture.', majorSchools: ['Alexandrian Judaism'], majorAuthors: ['philo-of-alexandria'] },
      { id: 'medieval-jewish', name: 'Medieval Jewish Philosophy', start: 900, end: 1500, description: 'Saadia Gaon, Halevi, Maimonides, and Gersonides.', majorSchools: ['Maimonidean rationalism', 'Halevi\'s experiential theology'], majorAuthors: ['saadia-gaon', 'judah-halevi', 'maimonides', 'gersonides'] },
      { id: 'early-modern-jewish', name: 'Early Modern', start: 1500, end: 1800, description: 'Spinoza\'s radical departure, Kabbalistic philosophy, Hasidic thought.', majorSchools: ['Spinozism', 'Kabbalistic philosophy'], majorAuthors: ['spinoza'] },
      { id: 'modern-jewish', name: 'Modern & Contemporary', start: 1800, end: 2025, description: 'Cohen, Buber, Rosenzweig, Levinas, and contemporary Jewish thought.', majorSchools: ['Neo-Kantianism', 'Dialogical philosophy', 'Ethical phenomenology'], majorAuthors: ['hermann-cohen', 'buber', 'levinas'] },
    ],
  },
  {
    id: 'christian-scholastic', name: 'Christian Philosophy & Scholasticism',
    regions: ['Europe', 'North Africa', 'Middle East'],
    timeSpan: { start: 100, end: 1500 },
    periods: [
      { id: 'patristic', name: 'Patristic', start: 100, end: 600, description: 'Church Fathers: Augustine, Boethius, and the synthesis of faith and reason.', majorSchools: ['Augustinianism', 'Cappadocian thought'], majorAuthors: ['augustine', 'boethius'] },
      { id: 'early-scholastic', name: 'Early Scholastic', start: 1000, end: 1200, description: 'Anselm, Abelard, and the birth of the university tradition.', majorSchools: ['Anselmian theology', 'Dialectical method'], majorAuthors: ['anselm', 'abelard'] },
      { id: 'high-scholastic', name: 'High Scholasticism', start: 1200, end: 1350, description: 'Aquinas, Scotus, Ockham: the golden age of medieval philosophy.', majorSchools: ['Thomism', 'Scotism', 'Nominalism'], majorAuthors: ['aquinas', 'duns-scotus', 'william-of-ockham', 'meister-eckhart'] },
      { id: 'late-medieval', name: 'Late Medieval', start: 1350, end: 1500, description: 'Nicholas of Cusa, late nominalism, and the transition to humanism.', majorSchools: ['Cusan thought', 'Late nominalism'], majorAuthors: ['nicholas-of-cusa'] },
    ],
  },
  {
    id: 'african', name: 'African Philosophy',
    regions: ['Africa', 'Caribbean', 'Americas'],
    timeSpan: { start: -2500, end: 2025 },
    periods: [
      { id: 'ancient-african', name: 'Ancient African', start: -2500, end: 500, description: 'Egyptian philosophical thought: Maat, wisdom literature.', majorSchools: ['Egyptian wisdom tradition'], majorAuthors: ['ptahhotep'] },
      { id: 'ethiopian', name: 'Ethiopian Rationalism', start: 1600, end: 1700, description: 'Zera Yacob\'s independent rationalist philosophy.', majorSchools: ['Ethiopian rationalism'], majorAuthors: ['zera-yacob'] },
      { id: 'colonial-resistance', name: 'Anti-Colonial & Pan-African', start: 1900, end: 1970, description: 'Negritude, Pan-Africanism, Fanon, and decolonial philosophy.', majorSchools: ['Negritude', 'Pan-Africanism', 'Fanonism'], majorAuthors: ['nkrumah', 'senghor', 'fanon', 'cesaire'] },
      { id: 'professional-african', name: 'Professional African Philosophy', start: 1970, end: 2025, description: 'Sage philosophy, Ubuntu, and the ethnophilosophy debate.', majorSchools: ['Sage philosophy', 'Ubuntu philosophy', 'Analytical African philosophy'], majorAuthors: ['wiredu', 'hountondji', 'ramose', 'mbembe'] },
    ],
  },
  {
    id: 'japanese', name: 'Japanese Philosophy',
    regions: ['East Asia'],
    timeSpan: { start: 700, end: 2025 },
    periods: [
      { id: 'nara-heian', name: 'Nara-Heian Buddhist', start: 700, end: 1185, description: 'Introduction and adaptation of Chinese Buddhist philosophy.', majorSchools: ['Shingon', 'Tendai'], majorAuthors: ['kukai'] },
      { id: 'kamakura', name: 'Kamakura', start: 1185, end: 1333, description: 'Zen, Pure Land, Nichiren: distinctively Japanese Buddhist developments.', majorSchools: ['Soto Zen', 'Rinzai Zen', 'Pure Land'], majorAuthors: ['dogen'] },
      { id: 'tokugawa', name: 'Tokugawa Neo-Confucian', start: 1603, end: 1868, description: 'Japanese Neo-Confucianism and National Learning.', majorSchools: ['Japanese Neo-Confucianism', 'Kokugaku'], majorAuthors: [] },
      { id: 'modern-japanese', name: 'Modern & Kyoto School', start: 1868, end: 2025, description: 'Nishida, Tanabe, Nishitani: East-West philosophical synthesis.', majorSchools: ['Kyoto School'], majorAuthors: ['nishida-kitaro', 'tanabe-hajime', 'nishitani-keiji', 'watsuji-tetsuro'] },
    ],
  },
  {
    id: 'modern-european', name: 'Modern European Philosophy',
    regions: ['Europe'],
    timeSpan: { start: 1500, end: 2025 },
    periods: [
      { id: 'renaissance', name: 'Renaissance Humanism', start: 1400, end: 1600, description: 'Recovery of ancient texts, humanism, and early modern science.', majorSchools: ['Humanism', 'Renaissance Platonism'], majorAuthors: [] },
      { id: 'early-modern', name: 'Early Modern (Rationalism & Empiricism)', start: 1596, end: 1781, description: 'Descartes, Spinoza, Leibniz vs. Locke, Berkeley, Hume.', majorSchools: ['Rationalism', 'Empiricism'], majorAuthors: ['descartes', 'spinoza', 'leibniz', 'locke', 'berkeley', 'hume', 'hobbes'] },
      { id: 'german-idealism-period', name: 'German Idealism', start: 1781, end: 1831, description: 'Kant, Fichte, Schelling, Hegel: the most ambitious systematic philosophies.', majorSchools: ['Critical philosophy', 'Absolute idealism'], majorAuthors: ['kant', 'fichte', 'schelling', 'hegel'] },
      { id: 'nineteenth-century', name: 'Nineteenth Century', start: 1831, end: 1900, description: 'Schopenhauer, Kierkegaard, Nietzsche, Marx, Mill, and the birth of modern philosophy.', majorSchools: ['Utilitarianism', 'Marxism', 'Existentialism (proto)'], majorAuthors: ['schopenhauer', 'kierkegaard', 'nietzsche', 'marx', 'mill'] },
      { id: 'phenomenology-existentialism', name: 'Phenomenology & Existentialism', start: 1900, end: 1970, description: 'Husserl, Heidegger, Sartre, Beauvoir, Merleau-Ponty, and the Continental tradition.', majorSchools: ['Phenomenology', 'Existentialism', 'Hermeneutics'], majorAuthors: ['husserl', 'heidegger', 'sartre', 'beauvoir', 'camus', 'merleau-ponty', 'gadamer', 'arendt'] },
      { id: 'analytic-tradition', name: 'Analytic Philosophy', start: 1879, end: 2025, description: 'Frege, Russell, Wittgenstein, and the Anglo-American analytical tradition.', majorSchools: ['Logical positivism', 'Ordinary language', 'Post-Quinean'], majorAuthors: ['frege', 'russell', 'wittgenstein', 'carnap', 'quine', 'popper', 'kuhn', 'rawls', 'kripke'] },
      { id: 'post-structuralism-period', name: 'Post-Structuralism & Critical Theory', start: 1960, end: 2025, description: 'Foucault, Derrida, Deleuze, Frankfurt School, and postmodern thought.', majorSchools: ['Post-structuralism', 'Deconstruction', 'Critical theory'], majorAuthors: ['foucault', 'derrida', 'deleuze', 'habermas', 'adorno', 'benjamin', 'marcuse', 'gramsci'] },
    ],
  },
  {
    id: 'american', name: 'American Philosophy',
    regions: ['Americas'],
    timeSpan: { start: 1800, end: 2025 },
    periods: [
      { id: 'transcendentalism-period', name: 'Transcendentalism', start: 1830, end: 1860, description: 'Emerson, Thoreau, and American literary-philosophical transcendentalism.', majorSchools: ['Transcendentalism'], majorAuthors: ['emerson'] },
      { id: 'classical-pragmatism', name: 'Classical Pragmatism', start: 1878, end: 1952, description: 'Peirce, James, Dewey: the distinctively American philosophical tradition.', majorSchools: ['Pragmatism'], majorAuthors: ['peirce', 'james', 'dewey'] },
      { id: 'african-american-phil', name: 'African-American Philosophy', start: 1900, end: 2025, description: 'Du Bois, Cornel West, and the philosophical tradition of Black thought.', majorSchools: ['Africana philosophy', 'Prophetic pragmatism'], majorAuthors: ['du-bois', 'cornel-west'] },
    ],
  },
  {
    id: 'feminist', name: 'Feminist Philosophy',
    regions: ['Global'],
    timeSpan: { start: 1792, end: 2025 },
    periods: [
      { id: 'proto-feminist', name: 'Proto-Feminist & First Wave', start: 1792, end: 1949, description: 'Wollstonecraft through Beauvoir: the philosophical foundations of feminism.', majorSchools: ['Liberal feminism', 'Existentialist feminism'], majorAuthors: ['wollstonecraft', 'beauvoir'] },
      { id: 'second-wave-feminist', name: 'Second & Third Wave', start: 1960, end: 2025, description: 'Butler, hooks, Spivak, Irigaray: performativity, intersectionality, postcolonial feminism.', majorSchools: ['Gender performativity', 'Intersectionality', 'Postcolonial feminism'], majorAuthors: ['butler', 'hooks', 'spivak', 'irigaray'] },
    ],
  },
  {
    id: 'postcolonial-decolonial', name: 'Postcolonial & Decolonial Philosophy',
    regions: ['Global', 'Global South'],
    timeSpan: { start: 1950, end: 2025 },
    periods: [
      { id: 'foundational-postcolonial', name: 'Foundational Postcolonial', start: 1950, end: 1990, description: 'Fanon, Said, Spivak: the philosophical analysis of colonialism and its aftermath.', majorSchools: ['Postcolonial theory', 'Subaltern studies'], majorAuthors: ['fanon', 'said', 'spivak', 'cesaire'] },
      { id: 'decolonial-turn', name: 'Decolonial Turn', start: 1990, end: 2025, description: 'Mignolo, Quijano, Dussel: coloniality of power and epistemic decolonization.', majorSchools: ['Decoloniality', 'Liberation philosophy'], majorAuthors: ['mignolo', 'quijano', 'dussel', 'freire', 'bhabha', 'mbembe'] },
    ],
  },
  {
    id: 'latin-american', name: 'Latin American Philosophy',
    regions: ['Americas'],
    timeSpan: { start: 1550, end: 2025 },
    periods: [
      { id: 'colonial-latin', name: 'Colonial', start: 1550, end: 1810, description: 'Las Casas, Sor Juana, and early Latin American intellectual life.', majorSchools: ['Colonial scholasticism', 'Indigenous rights'], majorAuthors: ['las-casas', 'sor-juana'] },
      { id: 'liberation-period', name: 'Liberation & Contemporary', start: 1960, end: 2025, description: 'Philosophy of liberation, pedagogy of the oppressed, decolonial thought.', majorSchools: ['Liberation philosophy', 'Critical pedagogy'], majorAuthors: ['dussel', 'freire'] },
    ],
  },
];

// =============================================
// AGENT TREE BUILDER
// =============================================

export function buildFullAgentTree(orchestrator: MetaOrchestrator): void {
  // Create meta-orchestrator agent
  const metaAgent = createAgent('meta-orchestrator', 'Meta-Orchestrator', 'global-philosophy');
  orchestrator.registerAgent(metaAgent);

  // Create culture agents
  CULTURE_DEFINITIONS.forEach(culture => {
    const cultureAgent = createAgent('culture', `Culture: ${culture.name}`, culture.id, metaAgent.id);
    orchestrator.registerAgent(cultureAgent);
    orchestrator.state.completionStatus.cultures.total++;

    // Create age agents for each period
    culture.periods.forEach(period => {
      const ageAgent = createAgent('age', `Age: ${period.name}`, `${culture.id}/${period.id}`, cultureAgent.id);
      orchestrator.registerAgent(ageAgent);
      orchestrator.state.completionStatus.ages.total++;

      // Create author agents for each major author
      period.majorAuthors.forEach(authorId => {
        const authorAgent = createAgent('author', `Author: ${authorId}`, `${culture.id}/${period.id}/${authorId}`, ageAgent.id);
        orchestrator.registerAgent(authorAgent);
        orchestrator.state.completionStatus.authors.total++;
      });
    });
  });
}

// =============================================
// SINGLETON ORCHESTRATOR
// =============================================

let _orchestrator: MetaOrchestrator | null = null;

export function getOrchestrator(): MetaOrchestrator {
  if (!_orchestrator) {
    _orchestrator = new MetaOrchestrator();
    buildFullAgentTree(_orchestrator);
  }
  return _orchestrator;
}
