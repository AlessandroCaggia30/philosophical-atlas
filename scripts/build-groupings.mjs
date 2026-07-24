// build-groupings.mjs
//
// Deterministically classifies every text in src/data/texts.ts into ONE
// philosophical topic and records its sortYear (date.start), then writes
// src/data/text-groupings.ts.
//
// This is PURE CATEGORIZATION of data already present (genre + keyConcepts
// + summary). It does not invent facts or rewrite any text.
//
// Run:  node scripts/build-groupings.mjs

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const textsPath = path.join(root, 'src', 'data', 'texts.ts');
const outPath = path.join(root, 'src', 'data', 'text-groupings.ts');

// ---------------------------------------------------------------------------
// 1. The fixed topic taxonomy.
// ---------------------------------------------------------------------------
const TOPICS = [
  'Metaphysics',
  'Epistemology',
  'Ethics',
  'Political Philosophy',
  'Logic & Dialectic',
  'Philosophy of Language',
  'Philosophy of Mind',
  'Aesthetics',
  'Philosophy of Religion / Theology',
  'Natural Philosophy / Science',
  'Cosmology',
  'Mysticism / Spirituality',
  'Existentialism & Phenomenology',
];

// ---------------------------------------------------------------------------
// 2. Keyword rules. Each rule lists substrings looked up against the text's
//    keyConcepts (weighted heavily) and against genre + summary (weighted
//    lightly). The topic with the highest score wins; ties break toward
//    whichever rule appears EARLIER in this list (so specific topics beat the
//    broad Metaphysics fallback). A text scoring 0 defaults to Metaphysics.
//
//    Rules are ordered most-specific first for tie-breaking.
// ---------------------------------------------------------------------------
const RULES = [
  {
    topic: 'Mysticism / Spirituality',
    concepts: [
      'moksha', 'brahman', 'atman', 'emptiness', 'nirvana', 'enlightenment-bodhi',
      'satori', 'prajna', 'maya', 'no-self', 'dao', 'meditation', 'mystical-experience',
      'non-duality', 'illumination', 'dependent-origination', 'impermanence', 'wuwei',
      'purusha', 'prakriti', 'karma', 'devotion', 'the-one', 'emanation', 'liberation',
      'ahimsa', 'satori',
    ],
    text: ['mystic', 'meditation', 'enlightenment', 'liberation', 'yoga', 'contemplat', 'ascent of the soul', 'union with'],
  },
  {
    topic: 'Existentialism & Phenomenology',
    concepts: [
      'freedom-existential', 'dasein', 'anxiety', 'authenticity', 'bad-faith', 'absurdity',
      'nothingness', 'alterity', 'face', 'meaning-of-life', 'embodiment', 'intentionality',
      'phenomena', 'noumena',
    ],
    text: ['existential', 'phenomenolog', 'absurd', 'authentic', 'anguish', 'lived experience', 'being-in-the-world'],
  },
  {
    topic: 'Political Philosophy',
    concepts: [
      'justice', 'state', 'power', 'rights', 'democracy', 'equality', 'social-contract',
      'colonialism', 'decolonization', 'class', 'revolution', 'authority', 'hegemony',
      'ideology', 'subaltern', 'negritude', 'praxis', 'alienation', 'gender', 'freedom',
      'autonomy', 'li-ritual', 'yi-righteousness',
    ],
    text: ['political', 'the state', 'government', 'sovereign', 'colonial', 'oppress', 'class struggle', 'social contract', 'revolution', 'republic'],
  },
  {
    topic: 'Philosophy of Religion / Theology',
    concepts: [
      'god', 'faith', 'revelation', 'divine', 'evil', 'free-will', 'grace', 'maat', 'sin',
      'providence', 'trinity',
    ],
    text: ['theolog', 'existence of god', 'scripture', 'divine', 'salvation', 'the church', 'prophet'],
  },
  {
    topic: 'Aesthetics',
    concepts: ['beauty', 'mimesis', 'creativity', 'sublime', 'art'],
    text: ['aesthetic', 'beauty', 'the sublime', 'art of', 'poetics', 'tragedy'],
  },
  {
    topic: 'Philosophy of Language',
    concepts: ['reference', 'language-game', 'meaning', 'deconstruction-concept', 'difference', 'hermeneutics-concept', 'incommensurability', 'logos'],
    text: ['language', 'linguistic', 'meaning of words', 'reference', 'sign', 'semantic'],
  },
  {
    topic: 'Philosophy of Mind',
    concepts: ['consciousness', 'mind', 'self', 'perception', 'qualia', 'will'],
    text: ['philosophy of mind', 'the mind', 'mental', 'consciousness', 'perception'],
  },
  {
    topic: 'Logic & Dialectic',
    concepts: ['dialectic', 'logic', 'inference', 'syllogism', 'pramana', 'dialogue-concept'],
    text: ['logic', 'dialectic', 'syllogism', 'valid inference', 'categories', 'organon'],
  },
  {
    topic: 'Cosmology',
    concepts: ['cosmos', 'yin-yang', 'infinity', 'monad', 'time'],
    text: ['cosmolog', 'creation of the world', 'the universe', 'the cosmos', 'origin of the world', 'demiurge', 'heaven and earth'],
  },
  {
    topic: 'Natural Philosophy / Science',
    concepts: ['matter', 'atomism', 'materialism', 'causation', 'qi', 'nature', 'motion'],
    text: ['natural philosophy', 'physics', 'nature of things', 'atoms', 'the body', 'scientific', 'mechanics'],
  },
  {
    topic: 'Epistemology',
    concepts: [
      'knowledge', 'truth', 'perception', 'inference', 'skepticism', 'certainty', 'method',
      'a-priori', 'episteme', 'experience', 'reason', 'pramana',
    ],
    text: ['knowledge', 'epistemolog', 'skeptic', 'certainty', 'how we know', 'justified belief', 'the understanding'],
  },
  {
    topic: 'Ethics',
    concepts: [
      'virtue', 'ethics', 'duty', 'good', 'eudaimonia', 'pleasure', 'dharma', 'ren',
      'yi-righteousness', 'compassion', 'categorical-imperative', 'dignity', 'suffering',
      'universal-love', 'sincerity', 'harmony',
    ],
    text: ['ethic', 'virtue', 'the good life', 'moral', 'how to live', 'happiness', 'duty'],
  },
  {
    topic: 'Metaphysics',
    concepts: [
      'being', 'substance', 'form', 'forms', 'essence', 'existence', 'potentiality',
      'actuality', 'universals', 'monism', 'dualism', 'becoming', 'nous', 'svabhava',
      'li-principle', 'transcendence', 'fate', 'monad',
    ],
    text: ['metaphysic', 'first philosophy', 'the nature of being', 'substance', 'ontolog', 'reality'],
  },
];

const CONCEPT_WEIGHT = 3;
const TEXT_WEIGHT = 1;
const DEFAULT_TOPIC = 'Metaphysics';

// ---------------------------------------------------------------------------
// 3. Read + parse texts.ts (the array is a JSON-ish object-literal list).
// ---------------------------------------------------------------------------
const src = fs.readFileSync(textsPath, 'utf8');
const start = src.indexOf('[');
const end = src.lastIndexOf(']');
if (start === -1 || end === -1) {
  throw new Error('Could not locate the texts array in texts.ts');
}
// eslint-disable-next-line no-eval
const texts = eval(src.slice(start, end + 1));

// ---------------------------------------------------------------------------
// 4. Classify.
// ---------------------------------------------------------------------------
function classify(t) {
  const concepts = (t.keyConcepts || []).map((c) => String(c).toLowerCase());
  const conceptSet = new Set(concepts);
  const blob = [t.genre || '', t.summary || '', t.title || ''].join(' ').toLowerCase();

  let best = null;
  let bestScore = 0;
  for (const rule of RULES) {
    let score = 0;
    for (const kw of rule.concepts) {
      if (conceptSet.has(kw)) score += CONCEPT_WEIGHT;
    }
    for (const kw of rule.text) {
      if (blob.includes(kw)) score += TEXT_WEIGHT;
    }
    // Strictly-greater: earlier (more specific) rules win ties.
    if (score > bestScore) {
      bestScore = score;
      best = rule.topic;
    }
  }
  return { topic: best || DEFAULT_TOPIC, defaulted: bestScore === 0 };
}

const groupings = {};
const counts = Object.fromEntries(TOPICS.map((t) => [t, 0]));
const defaulted = [];
for (const t of texts) {
  const { topic, defaulted: wasDefault } = classify(t);
  const sortYear = Number(t.date?.start);
  groupings[t.id] = { topic, sortYear: Number.isFinite(sortYear) ? sortYear : 0 };
  counts[topic]++;
  if (wasDefault) defaulted.push(t.id);
}

// ---------------------------------------------------------------------------
// 5. Emit src/data/text-groupings.ts
// ---------------------------------------------------------------------------
const header = `// AUTO-GENERATED by scripts/build-groupings.mjs — do not edit by hand.
// Topic + sortYear for every text, derived deterministically from each text's
// existing genre + keyConcepts + summary. Re-run the script to regenerate.

`;
const topicsLiteral = `export const TOPICS: string[] = ${JSON.stringify(TOPICS, null, 2)};\n\n`;

const sortedIds = Object.keys(groupings).sort();
const entries = sortedIds
  .map((id) => `  ${JSON.stringify(id)}: { topic: ${JSON.stringify(groupings[id].topic)}, sortYear: ${groupings[id].sortYear} },`)
  .join('\n');
const groupingsLiteral =
  `export const textGroupings: Record<string, { topic: string; sortYear: number }> = {\n${entries}\n};\n`;

fs.writeFileSync(outPath, header + topicsLiteral + groupingsLiteral);

// ---------------------------------------------------------------------------
// 6. Report to stdout.
// ---------------------------------------------------------------------------
console.log(`Classified ${texts.length} texts -> ${outPath}\n`);
console.log('Counts by topic:');
for (const t of TOPICS) console.log(`  ${String(counts[t]).padStart(3)}  ${t}`);
console.log(`\nDefaulted to ${DEFAULT_TOPIC} (score 0): ${defaulted.length}`);
if (defaulted.length) console.log('  ' + defaulted.join(', '));
