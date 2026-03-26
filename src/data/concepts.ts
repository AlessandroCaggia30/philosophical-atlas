import type { Concept } from '@/types';

export const concepts: Concept[] = [
  {
    "id": "being",
    "term": "Being",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "τὸ ὄν",
        "transliteration": "to on"
      },
      {
        "language": "German",
        "term": "Sein"
      },
      {
        "language": "Arabic",
        "term": "وجود",
        "transliteration": "wujud"
      },
      {
        "language": "Sanskrit",
        "term": "सत्",
        "transliteration": "sat"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "That which is; studied as \"being qua being.\""
      },
      {
        "tradition": "phenomenology",
        "definition": "The fundamental question of what it means for anything to be (Seinsfrage)."
      }
    ],
    "relatedConcepts": [
      "existence",
      "substance",
      "essence",
      "becoming"
    ],
    "opposingConcepts": [
      "nothingness",
      "non-being"
    ],
    "majorTexts": [
      "metaphysics-aristotle",
      "being-and-time"
    ],
    "majorAuthors": [
      "aristotle",
      "heidegger",
      "parmenides"
    ],
    "historicalTransformations": "From Parmenides' unity through Aristotle's categories to Heidegger's ontological difference."
  },
  {
    "id": "substance",
    "term": "Substance",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "οὐσία",
        "transliteration": "ousia"
      },
      {
        "language": "Latin",
        "term": "substantia"
      },
      {
        "language": "Sanskrit",
        "term": "द्रव्य",
        "transliteration": "dravya"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "The primary category of being; that which underlies properties and persists through change."
      },
      {
        "tradition": "rationalism",
        "definition": "That which exists in itself and is conceived through itself (Spinoza)."
      }
    ],
    "relatedConcepts": [
      "being",
      "essence",
      "form",
      "matter"
    ],
    "opposingConcepts": [
      "accidents",
      "phenomena"
    ],
    "majorTexts": [
      "metaphysics-aristotle",
      "ethics-spinoza"
    ],
    "majorAuthors": [
      "aristotle",
      "spinoza",
      "descartes"
    ],
    "historicalTransformations": "From Aristotle's primary substance through medieval debates to Spinoza's monism and Locke's critique."
  },
  {
    "id": "essence",
    "term": "Essence",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "τί ἦν εἶναι",
        "transliteration": "ti en einai"
      },
      {
        "language": "Latin",
        "term": "essentia"
      },
      {
        "language": "Arabic",
        "term": "ماهية",
        "transliteration": "mahiyya"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "The \"what it was to be\" a thing; its defining nature."
      },
      {
        "tradition": "existentialism",
        "definition": "There is no fixed human essence; existence precedes essence."
      }
    ],
    "relatedConcepts": [
      "being",
      "substance",
      "existence",
      "form"
    ],
    "opposingConcepts": [
      "existence",
      "accidents"
    ],
    "majorTexts": [
      "metaphysics-aristotle",
      "being-and-nothingness"
    ],
    "majorAuthors": [
      "aristotle",
      "ibn-sina",
      "sartre"
    ],
    "historicalTransformations": "From Aristotle through Ibn Sina's essence-existence distinction to Sartre's rejection of fixed essence."
  },
  {
    "id": "existence",
    "term": "Existence",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "existentia"
      },
      {
        "language": "Arabic",
        "term": "وجود",
        "transliteration": "wujud"
      },
      {
        "language": "German",
        "term": "Existenz"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "islamic-falsafa",
        "definition": "Distinguished from essence by Ibn Sina; in God alone essence and existence are identical."
      },
      {
        "tradition": "existentialism",
        "definition": "The concrete, lived reality of human being; precedes essence."
      }
    ],
    "relatedConcepts": [
      "being",
      "essence",
      "dasein"
    ],
    "opposingConcepts": [
      "nothingness"
    ],
    "majorTexts": [
      "book-of-healing",
      "being-and-nothingness"
    ],
    "majorAuthors": [
      "ibn-sina",
      "sartre",
      "kierkegaard"
    ],
    "historicalTransformations": "From the Islamic essence-existence distinction through Aquinas to existentialist primacy of existence."
  },
  {
    "id": "form",
    "term": "Form",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "εἶδος/μορφή",
        "transliteration": "eidos/morphe"
      },
      {
        "language": "Latin",
        "term": "forma"
      },
      {
        "language": "Sanskrit",
        "term": "रूप",
        "transliteration": "rupa"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "platonism",
        "definition": "Eternal, immutable archetype; the truly real, of which material things are copies."
      },
      {
        "tradition": "aristotelianism",
        "definition": "The actuality and defining structure of a substance, paired with matter."
      }
    ],
    "relatedConcepts": [
      "matter",
      "essence",
      "substance",
      "being"
    ],
    "opposingConcepts": [
      "matter"
    ],
    "majorTexts": [
      "republic",
      "metaphysics-aristotle"
    ],
    "majorAuthors": [
      "plato",
      "aristotle"
    ],
    "historicalTransformations": "From Platonic transcendent Forms to Aristotelian immanent form to Kantian forms of intuition."
  },
  {
    "id": "matter",
    "term": "Matter",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ὕλη",
        "transliteration": "hyle"
      },
      {
        "language": "Latin",
        "term": "materia"
      },
      {
        "language": "Sanskrit",
        "term": "प्रधान",
        "transliteration": "pradhana"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "The potential substrate that receives form; pure potentiality."
      },
      {
        "tradition": "materialism",
        "definition": "The fundamental constituent of reality; all that exists is material."
      }
    ],
    "relatedConcepts": [
      "form",
      "substance",
      "prakriti"
    ],
    "opposingConcepts": [
      "form",
      "spirit"
    ],
    "majorTexts": [
      "physics-aristotle",
      "on-the-nature-of-things"
    ],
    "majorAuthors": [
      "aristotle",
      "democritus",
      "marx"
    ],
    "historicalTransformations": "From Aristotelian potentiality through atomism to modern materialism and dialectical materialism."
  },
  {
    "id": "emptiness",
    "term": "Emptiness",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "शून्यता",
        "transliteration": "sunyata"
      },
      {
        "language": "Pali",
        "term": "suññatā"
      },
      {
        "language": "Chinese",
        "term": "空",
        "transliteration": "kong"
      },
      {
        "language": "Japanese",
        "term": "空",
        "transliteration": "ku"
      },
      {
        "language": "Tibetan",
        "term": "སྟོང་པ་ཉིད",
        "transliteration": "tongpanyi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "madhyamaka",
        "definition": "The absence of inherent self-nature (svabhava) in all phenomena; not nothingness but dependent origination."
      },
      {
        "tradition": "zen-buddhism",
        "definition": "Direct experiential insight into the empty nature of all things, including emptiness itself."
      }
    ],
    "relatedConcepts": [
      "dependent-origination",
      "no-self",
      "svabhava",
      "nothingness"
    ],
    "opposingConcepts": [
      "svabhava",
      "substance"
    ],
    "majorTexts": [
      "mulamadhyamakakarika",
      "heart-sutra"
    ],
    "majorAuthors": [
      "nagarjuna",
      "chandrakirti",
      "dogen"
    ],
    "historicalTransformations": "From early Buddhist analysis of aggregates through Nagarjuna's dialectical demonstration to East Asian interpretations."
  },
  {
    "id": "brahman",
    "term": "Brahman",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "ब्रह्मन्",
        "transliteration": "brahman"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "advaita-vedanta",
        "definition": "The sole, non-dual, infinite reality; pure consciousness without attributes (nirguna)."
      },
      {
        "tradition": "vedanta",
        "definition": "The supreme being or ground of all existence; qualified by attributes (saguna) in Ramanuja."
      }
    ],
    "relatedConcepts": [
      "atman",
      "maya",
      "the-one",
      "god"
    ],
    "opposingConcepts": [
      "maya",
      "avidya"
    ],
    "majorTexts": [
      "upanishads",
      "brahma-sutra-bhashya"
    ],
    "majorAuthors": [
      "shankara",
      "ramanuja",
      "badarayana"
    ],
    "historicalTransformations": "From Upanishadic cosmic principle through Shankara's non-dual absolute to Ramanuja's personal divine."
  },
  {
    "id": "atman",
    "term": "Atman/Self",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "आत्मन्",
        "transliteration": "atman"
      },
      {
        "language": "Pali",
        "term": "attā"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "vedanta",
        "definition": "The true Self, identical with Brahman; eternal, unchanging consciousness."
      },
      {
        "tradition": "theravada-buddhism",
        "definition": "Denied (anatta): there is no permanent self; only a stream of impermanent aggregates."
      }
    ],
    "relatedConcepts": [
      "brahman",
      "soul",
      "self",
      "consciousness"
    ],
    "opposingConcepts": [
      "no-self"
    ],
    "majorTexts": [
      "upanishads",
      "mulamadhyamakakarika"
    ],
    "majorAuthors": [
      "shankara",
      "buddha"
    ],
    "historicalTransformations": "Central to the Hindu-Buddhist debate: Vedanta affirms atman as Brahman; Buddhism denies any permanent self."
  },
  {
    "id": "dao",
    "term": "Dao (The Way)",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "道",
        "transliteration": "dao/tao"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "daoism",
        "definition": "The ineffable source and pattern of all things; cannot be named or grasped conceptually."
      },
      {
        "tradition": "confucianism",
        "definition": "The moral Way; the path of virtue, propriety, and humane governance."
      }
    ],
    "relatedConcepts": [
      "wuwei",
      "yin-yang",
      "logos"
    ],
    "opposingConcepts": [
      "naming"
    ],
    "majorTexts": [
      "daodejing",
      "analects"
    ],
    "majorAuthors": [
      "laozi",
      "confucius",
      "zhuangzi"
    ],
    "historicalTransformations": "From a general term meaning \"way/path\" to Laozi's metaphysical absolute and Confucius's moral path."
  },
  {
    "id": "li-principle",
    "term": "Li (Principle)",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "理",
        "transliteration": "li"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "neo-confucianism",
        "definition": "The metaphysical principle inherent in all things; the pattern or reason of the cosmos (Zhu Xi)."
      },
      {
        "tradition": "neo-confucianism",
        "definition": "Not separate from mind; mind itself is principle (Wang Yangming)."
      }
    ],
    "relatedConcepts": [
      "qi",
      "dao",
      "form",
      "reason"
    ],
    "opposingConcepts": [
      "qi"
    ],
    "majorTexts": [
      "reflections-on-things-at-hand",
      "instructions-for-practical-living"
    ],
    "majorAuthors": [
      "zhu-xi",
      "wang-yangming",
      "cheng-yi"
    ],
    "historicalTransformations": "Developed by Song Neo-Confucians as the metaphysical ground, debated between Zhu Xi (li primary) and Wang Yangming (mind is li)."
  },
  {
    "id": "qi",
    "term": "Qi (Vital Force)",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "氣",
        "transliteration": "qi/ch'i"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "neo-confucianism",
        "definition": "Material force or vital energy; the stuff of which all things are constituted, paired with li."
      },
      {
        "tradition": "daoism",
        "definition": "The vital breath pervading all things; cultivated through practice."
      }
    ],
    "relatedConcepts": [
      "li-principle",
      "matter",
      "prakriti",
      "yin-yang"
    ],
    "opposingConcepts": [],
    "majorTexts": [
      "reflections-on-things-at-hand"
    ],
    "majorAuthors": [
      "zhang-zai",
      "zhu-xi"
    ],
    "historicalTransformations": "From ancient Chinese cosmology through Neo-Confucian metaphysics as the material complement to li (principle)."
  },
  {
    "id": "dependent-origination",
    "term": "Dependent Origination",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "प्रतीत्यसमुत्पाद",
        "transliteration": "pratityasamutpada"
      },
      {
        "language": "Pali",
        "term": "paṭiccasamuppāda"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "theravada-buddhism",
        "definition": "The twelve-linked chain explaining how suffering arises through conditions."
      },
      {
        "tradition": "madhyamaka",
        "definition": "The basis for emptiness: all things arise dependently, therefore lack inherent nature."
      }
    ],
    "relatedConcepts": [
      "emptiness",
      "no-self",
      "impermanence",
      "karma"
    ],
    "opposingConcepts": [
      "svabhava",
      "substance"
    ],
    "majorTexts": [
      "mulamadhyamakakarika",
      "dhammapada"
    ],
    "majorAuthors": [
      "buddha",
      "nagarjuna"
    ],
    "historicalTransformations": "From early Buddhist causal analysis to Nagarjuna's identification of dependent origination with emptiness."
  },
  {
    "id": "impermanence",
    "term": "Impermanence",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "अनित्य",
        "transliteration": "anitya"
      },
      {
        "language": "Pali",
        "term": "anicca"
      },
      {
        "language": "Japanese",
        "term": "無常",
        "transliteration": "mujo"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "theravada-buddhism",
        "definition": "One of the three marks of existence: all conditioned phenomena are impermanent."
      },
      {
        "tradition": "zen-buddhism",
        "definition": "Direct realization of the transient nature of all things; the beauty of mono no aware."
      }
    ],
    "relatedConcepts": [
      "no-self",
      "dependent-origination",
      "becoming"
    ],
    "opposingConcepts": [
      "permanence",
      "substance"
    ],
    "majorTexts": [
      "dhammapada",
      "meditations"
    ],
    "majorAuthors": [
      "buddha",
      "marcus-aurelius",
      "dogen"
    ],
    "historicalTransformations": "From early Buddhist teaching through Stoic awareness of impermanence to Japanese aesthetic sensibility."
  },
  {
    "id": "no-self",
    "term": "No-Self (Anatta)",
    "originalLanguageVariants": [
      {
        "language": "Pali",
        "term": "अनत्ता",
        "transliteration": "anatta"
      },
      {
        "language": "Sanskrit",
        "term": "अनात्मन्",
        "transliteration": "anatman"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "theravada-buddhism",
        "definition": "There is no permanent, unchanging self; the person is a stream of five aggregates."
      },
      {
        "tradition": "madhyamaka",
        "definition": "Neither self nor non-self can be established with inherent nature."
      }
    ],
    "relatedConcepts": [
      "emptiness",
      "impermanence",
      "dependent-origination"
    ],
    "opposingConcepts": [
      "atman",
      "soul",
      "self"
    ],
    "majorTexts": [
      "mulamadhyamakakarika",
      "dhammapada"
    ],
    "majorAuthors": [
      "buddha",
      "nagarjuna"
    ],
    "historicalTransformations": "From early Buddhist denial of permanent self through Madhyamaka emptiness analysis."
  },
  {
    "id": "knowledge",
    "term": "Knowledge",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ἐπιστήμη",
        "transliteration": "episteme"
      },
      {
        "language": "Sanskrit",
        "term": "ज्ञान",
        "transliteration": "jnana"
      },
      {
        "language": "Arabic",
        "term": "علم",
        "transliteration": "ilm"
      },
      {
        "language": "Chinese",
        "term": "知",
        "transliteration": "zhi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "platonism",
        "definition": "Justified true belief; ultimately, knowledge of the eternal Forms through reason."
      },
      {
        "tradition": "nyaya",
        "definition": "Valid cognition (prama) through four instruments: perception, inference, comparison, testimony."
      }
    ],
    "relatedConcepts": [
      "truth",
      "reason",
      "perception",
      "inference"
    ],
    "opposingConcepts": [
      "ignorance",
      "avidya"
    ],
    "majorTexts": [
      "republic",
      "nyaya-sutras",
      "critique-of-pure-reason"
    ],
    "majorAuthors": [
      "plato",
      "aristotle",
      "kant",
      "gautama-aksapada"
    ],
    "historicalTransformations": "From Platonic recollection through Aristotelian demonstration to Kant's transcendental conditions of knowledge."
  },
  {
    "id": "truth",
    "term": "Truth",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ἀλήθεια",
        "transliteration": "aletheia"
      },
      {
        "language": "Latin",
        "term": "veritas"
      },
      {
        "language": "Sanskrit",
        "term": "सत्य",
        "transliteration": "satya"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "Correspondence of thought with reality; saying of what is that it is."
      },
      {
        "tradition": "pragmatism",
        "definition": "An idea is true insofar as it is useful, works, and leads to successful action."
      }
    ],
    "relatedConcepts": [
      "knowledge",
      "reason",
      "being"
    ],
    "opposingConcepts": [
      "falsehood"
    ],
    "majorTexts": [
      "metaphysics-aristotle",
      "pragmatism-james"
    ],
    "majorAuthors": [
      "aristotle",
      "james",
      "heidegger"
    ],
    "historicalTransformations": "From Aristotelian correspondence through medieval adaequatio to pragmatic, coherentist, and deflationary theories."
  },
  {
    "id": "reason",
    "term": "Reason",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "λόγος/νοῦς",
        "transliteration": "logos/nous"
      },
      {
        "language": "Latin",
        "term": "ratio"
      },
      {
        "language": "Arabic",
        "term": "عقل",
        "transliteration": "aql"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "rationalism",
        "definition": "The primary source of knowledge; capable of grasping necessary truths independent of experience."
      },
      {
        "tradition": "critical-theory",
        "definition": "Instrumental reason dominates nature but also traps humans; communicative reason offers an alternative."
      }
    ],
    "relatedConcepts": [
      "knowledge",
      "truth",
      "logos"
    ],
    "opposingConcepts": [
      "faith",
      "emotion"
    ],
    "majorTexts": [
      "critique-of-pure-reason",
      "dialectic-of-enlightenment"
    ],
    "majorAuthors": [
      "kant",
      "habermas",
      "descartes"
    ],
    "historicalTransformations": "From Greek logos through Enlightenment faith in reason to Frankfurt School critique of instrumental reason."
  },
  {
    "id": "virtue",
    "term": "Virtue",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ἀρετή",
        "transliteration": "arete"
      },
      {
        "language": "Latin",
        "term": "virtus"
      },
      {
        "language": "Chinese",
        "term": "德",
        "transliteration": "de"
      },
      {
        "language": "Sanskrit",
        "term": "गुण",
        "transliteration": "guna"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "A stable disposition to act well; the mean between excess and deficiency."
      },
      {
        "tradition": "confucianism",
        "definition": "Moral excellence cultivated through ritual practice, study, and self-reflection."
      }
    ],
    "relatedConcepts": [
      "eudaimonia",
      "good",
      "justice",
      "ren"
    ],
    "opposingConcepts": [
      "vice"
    ],
    "majorTexts": [
      "nicomachean-ethics",
      "analects"
    ],
    "majorAuthors": [
      "aristotle",
      "confucius",
      "aquinas"
    ],
    "historicalTransformations": "From Greek excellence through Confucian cultivation to medieval theological virtues and modern virtue ethics revival."
  },
  {
    "id": "justice",
    "term": "Justice",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "δικαιοσύνη",
        "transliteration": "dikaiosyne"
      },
      {
        "language": "Latin",
        "term": "iustitia"
      },
      {
        "language": "Sanskrit",
        "term": "न्याय",
        "transliteration": "nyaya"
      },
      {
        "language": "Arabic",
        "term": "عدالة",
        "transliteration": "adala"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "platonism",
        "definition": "Proper ordering of the soul and state; each part performing its proper function."
      },
      {
        "tradition": "analytic-philosophy",
        "definition": "Fairness: principles rational agents would choose behind a veil of ignorance (Rawls)."
      }
    ],
    "relatedConcepts": [
      "virtue",
      "good",
      "rights",
      "equality"
    ],
    "opposingConcepts": [
      "injustice"
    ],
    "majorTexts": [
      "republic",
      "theory-of-justice"
    ],
    "majorAuthors": [
      "plato",
      "aristotle",
      "rawls"
    ],
    "historicalTransformations": "From Platonic cosmic order through Aristotelian distributive justice to Rawlsian fairness."
  },
  {
    "id": "good",
    "term": "The Good",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "τὸ ἀγαθόν",
        "transliteration": "to agathon"
      },
      {
        "language": "Latin",
        "term": "bonum"
      },
      {
        "language": "Sanskrit",
        "term": "श्रेय",
        "transliteration": "shreya"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "platonism",
        "definition": "The highest Form; the source of truth and being, like the sun illuminating reality."
      },
      {
        "tradition": "utilitarianism",
        "definition": "That which produces the greatest happiness for the greatest number."
      }
    ],
    "relatedConcepts": [
      "virtue",
      "justice",
      "eudaimonia",
      "pleasure"
    ],
    "opposingConcepts": [
      "evil"
    ],
    "majorTexts": [
      "republic",
      "nicomachean-ethics",
      "utilitarianism-mill"
    ],
    "majorAuthors": [
      "plato",
      "aristotle",
      "mill"
    ],
    "historicalTransformations": "From Platonic Form of the Good through Aristotelian practical good to utilitarian maximization."
  },
  {
    "id": "evil",
    "term": "Evil",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "κακόν",
        "transliteration": "kakon"
      },
      {
        "language": "Latin",
        "term": "malum"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "augustinianism",
        "definition": "Not a substance but a privation of good (privatio boni); result of free will turning from God."
      },
      {
        "tradition": "existentialism",
        "definition": "The banality of evil: ordinary people commit evil through thoughtlessness (Arendt)."
      }
    ],
    "relatedConcepts": [
      "good",
      "theodicy",
      "free-will"
    ],
    "opposingConcepts": [
      "good"
    ],
    "majorTexts": [
      "city-of-god",
      "human-condition"
    ],
    "majorAuthors": [
      "augustine",
      "arendt",
      "nietzsche"
    ],
    "historicalTransformations": "From Platonic ignorance through Augustinian privation to modern analyses of radical and banal evil."
  },
  {
    "id": "duty",
    "term": "Duty",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "Pflicht"
      },
      {
        "language": "Sanskrit",
        "term": "कर्तव्य",
        "transliteration": "kartavya"
      },
      {
        "language": "Chinese",
        "term": "義",
        "transliteration": "yi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "german-idealism",
        "definition": "Moral obligation derived from the categorical imperative; acting from duty alone has moral worth."
      },
      {
        "tradition": "confucianism",
        "definition": "Yi (righteousness): acting according to what is right in one's social relationships."
      }
    ],
    "relatedConcepts": [
      "categorical-imperative",
      "dharma",
      "yi-righteousness"
    ],
    "opposingConcepts": [
      "desire",
      "pleasure"
    ],
    "majorTexts": [
      "groundwork-metaphysics-morals",
      "analects"
    ],
    "majorAuthors": [
      "kant",
      "confucius"
    ],
    "historicalTransformations": "From Stoic duty through Kantian moral obligation to Confucian righteousness."
  },
  {
    "id": "dharma",
    "term": "Dharma",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "धर्म",
        "transliteration": "dharma"
      },
      {
        "language": "Pali",
        "term": "dhamma"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "vedanta",
        "definition": "Cosmic order, moral law, and righteous duty; the foundation of individual and social ethics."
      },
      {
        "tradition": "theravada-buddhism",
        "definition": "The teaching of the Buddha; also the constituents of experienced reality."
      }
    ],
    "relatedConcepts": [
      "karma",
      "duty",
      "justice",
      "truth"
    ],
    "opposingConcepts": [
      "adharma"
    ],
    "majorTexts": [
      "bhagavad-gita",
      "dhammapada"
    ],
    "majorAuthors": [
      "buddha",
      "confucius"
    ],
    "historicalTransformations": "From Vedic cosmic law through Buddhist teaching to modern interpretations as universal moral principle."
  },
  {
    "id": "karma",
    "term": "Karma",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "कर्म",
        "transliteration": "karma"
      },
      {
        "language": "Pali",
        "term": "kamma"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "vedanta",
        "definition": "The moral law of cause and effect: actions determine future births and circumstances."
      },
      {
        "tradition": "theravada-buddhism",
        "definition": "Intentional action (cetana) that shapes future experience; not deterministic fate."
      }
    ],
    "relatedConcepts": [
      "dharma",
      "moksha",
      "dependent-origination"
    ],
    "opposingConcepts": [
      "grace"
    ],
    "majorTexts": [
      "bhagavad-gita",
      "dhammapada"
    ],
    "majorAuthors": [
      "buddha",
      "shankara"
    ],
    "historicalTransformations": "From Vedic ritual action through Hindu-Buddhist ethical causation to modern reinterpretations."
  },
  {
    "id": "ren",
    "term": "Ren (Humaneness)",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "仁",
        "transliteration": "ren"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "confucianism",
        "definition": "The supreme virtue: benevolence, humaneness, love for others; the heart of Confucian ethics."
      },
      {
        "tradition": "neo-confucianism",
        "definition": "The cosmic virtue of creativity and compassion pervading heaven and earth."
      }
    ],
    "relatedConcepts": [
      "li-ritual",
      "yi-righteousness",
      "virtue",
      "compassion"
    ],
    "opposingConcepts": [
      "selfishness"
    ],
    "majorTexts": [
      "analects",
      "mencius-text"
    ],
    "majorAuthors": [
      "confucius",
      "mencius"
    ],
    "historicalTransformations": "From Confucius's interpersonal virtue through Mencius's innate sprout to Neo-Confucian cosmic love."
  },
  {
    "id": "moksha",
    "term": "Moksha (Liberation)",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "मोक्ष",
        "transliteration": "moksha"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "advaita-vedanta",
        "definition": "Liberation through knowledge of the identity of Atman and Brahman; cessation of rebirth."
      },
      {
        "tradition": "yoga-philosophy",
        "definition": "Kaivalya: the isolation of pure consciousness from matter."
      }
    ],
    "relatedConcepts": [
      "brahman",
      "atman",
      "nirvana",
      "knowledge"
    ],
    "opposingConcepts": [
      "samsara",
      "avidya"
    ],
    "majorTexts": [
      "upanishads",
      "yoga-sutras"
    ],
    "majorAuthors": [
      "shankara",
      "patanjali"
    ],
    "historicalTransformations": "From Upanishadic liberation through Vedantic knowledge to yogic isolation of consciousness."
  },
  {
    "id": "nirvana",
    "term": "Nirvana",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "निर्वाण",
        "transliteration": "nirvana"
      },
      {
        "language": "Pali",
        "term": "nibbāna"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "theravada-buddhism",
        "definition": "The cessation of craving, aversion, and delusion; the unconditioned; end of the cycle of rebirth."
      },
      {
        "tradition": "madhyamaka",
        "definition": "Not a separate realm but the true nature of samsara itself when seen with wisdom."
      }
    ],
    "relatedConcepts": [
      "moksha",
      "emptiness",
      "enlightenment-bodhi"
    ],
    "opposingConcepts": [
      "samsara"
    ],
    "majorTexts": [
      "dhammapada",
      "mulamadhyamakakarika"
    ],
    "majorAuthors": [
      "buddha",
      "nagarjuna"
    ],
    "historicalTransformations": "From early Buddhist unconditioned to Nagarjuna's identity of nirvana and samsara."
  },
  {
    "id": "freedom",
    "term": "Freedom",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ἐλευθερία",
        "transliteration": "eleutheria"
      },
      {
        "language": "Latin",
        "term": "libertas"
      },
      {
        "language": "German",
        "term": "Freiheit"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "Radical freedom: humans are \"condemned to be free\"; no excuses for our choices."
      },
      {
        "tradition": "german-idealism",
        "definition": "Self-determination of reason; the realization of Spirit in history."
      }
    ],
    "relatedConcepts": [
      "autonomy",
      "rights",
      "free-will"
    ],
    "opposingConcepts": [
      "determinism",
      "oppression"
    ],
    "majorTexts": [
      "being-and-nothingness",
      "phenomenology-of-spirit"
    ],
    "majorAuthors": [
      "sartre",
      "hegel",
      "kant"
    ],
    "historicalTransformations": "From political liberty through Kantian autonomy to existentialist radical freedom."
  },
  {
    "id": "consciousness",
    "term": "Consciousness",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "चित्",
        "transliteration": "cit"
      },
      {
        "language": "German",
        "term": "Bewusstsein"
      },
      {
        "language": "Chinese",
        "term": "識",
        "transliteration": "shi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "phenomenology",
        "definition": "The field of intentional experience; always consciousness OF something."
      },
      {
        "tradition": "yogacara",
        "definition": "The fundamental structure of experience; eight types including storehouse consciousness."
      }
    ],
    "relatedConcepts": [
      "mind",
      "intentionality",
      "self",
      "citta"
    ],
    "opposingConcepts": [
      "unconscious"
    ],
    "majorTexts": [
      "ideas-husserl",
      "abhidharmakosa"
    ],
    "majorAuthors": [
      "husserl",
      "vasubandhu",
      "descartes"
    ],
    "historicalTransformations": "From Cartesian cogito through phenomenological intentionality to Buddhist multi-layered consciousness analysis."
  },
  {
    "id": "mind",
    "term": "Mind",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "νοῦς",
        "transliteration": "nous"
      },
      {
        "language": "Sanskrit",
        "term": "मनस्",
        "transliteration": "manas"
      },
      {
        "language": "Chinese",
        "term": "心",
        "transliteration": "xin"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "The capacity for rational thought; the highest part of the soul."
      },
      {
        "tradition": "neo-confucianism",
        "definition": "Xin: heart-mind; the seat of both thought and moral feeling."
      }
    ],
    "relatedConcepts": [
      "consciousness",
      "soul",
      "reason",
      "self"
    ],
    "opposingConcepts": [
      "matter",
      "body"
    ],
    "majorTexts": [
      "de-anima",
      "instructions-for-practical-living"
    ],
    "majorAuthors": [
      "aristotle",
      "wang-yangming",
      "descartes"
    ],
    "historicalTransformations": "From Greek nous through Cartesian res cogitans to Chinese xin and Buddhist citta."
  },
  {
    "id": "soul",
    "term": "Soul",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ψυχή",
        "transliteration": "psyche"
      },
      {
        "language": "Latin",
        "term": "anima"
      },
      {
        "language": "Sanskrit",
        "term": "जीव",
        "transliteration": "jiva"
      },
      {
        "language": "Arabic",
        "term": "نفس",
        "transliteration": "nafs"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "platonism",
        "definition": "Immortal, rational principle imprisoned in the body; seeks return to the world of Forms."
      },
      {
        "tradition": "aristotelianism",
        "definition": "The form and first actuality of a living body; not separable from the body."
      }
    ],
    "relatedConcepts": [
      "atman",
      "mind",
      "self",
      "consciousness"
    ],
    "opposingConcepts": [
      "body",
      "matter"
    ],
    "majorTexts": [
      "phaedo",
      "de-anima"
    ],
    "majorAuthors": [
      "plato",
      "aristotle",
      "augustine"
    ],
    "historicalTransformations": "From Platonic immortal soul through Aristotelian embodied form to modern debates on mind-body relations."
  },
  {
    "id": "self",
    "term": "Self",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "आत्मन्",
        "transliteration": "atman"
      },
      {
        "language": "German",
        "term": "Selbst"
      },
      {
        "language": "Chinese",
        "term": "己",
        "transliteration": "ji"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "vedanta",
        "definition": "The true Self (Atman) is identical with Brahman; eternal, unchanging."
      },
      {
        "tradition": "empiricism",
        "definition": "A bundle of perceptions with no underlying substance (Hume)."
      }
    ],
    "relatedConcepts": [
      "atman",
      "consciousness",
      "personal-identity",
      "soul"
    ],
    "opposingConcepts": [
      "no-self"
    ],
    "majorTexts": [
      "treatise-of-human-nature",
      "upanishads"
    ],
    "majorAuthors": [
      "hume",
      "shankara",
      "descartes"
    ],
    "historicalTransformations": "From Hindu Atman through Buddhist no-self to Humean bundle theory and modern theories of personal identity."
  },
  {
    "id": "logos",
    "term": "Logos",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "λόγος",
        "transliteration": "logos"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "pre-socratic",
        "definition": "The rational principle governing the cosmos; the underlying order of all things (Heraclitus)."
      },
      {
        "tradition": "stoicism",
        "definition": "Divine reason pervading and governing the universe; the active principle of all reality."
      }
    ],
    "relatedConcepts": [
      "reason",
      "truth",
      "dao",
      "meaning"
    ],
    "opposingConcepts": [
      "chaos",
      "irrationality"
    ],
    "majorTexts": [
      "fragments-heraclitus",
      "on-duties"
    ],
    "majorAuthors": [
      "heraclitus",
      "zeno-of-citium",
      "philo-of-alexandria"
    ],
    "historicalTransformations": "From Heraclitean cosmic fire through Stoic divine reason to Christian Logos theology and modern logic."
  },
  {
    "id": "dialectic",
    "term": "Dialectic",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "διαλεκτική",
        "transliteration": "dialektike"
      },
      {
        "language": "German",
        "term": "Dialektik"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "platonism",
        "definition": "The highest form of philosophical inquiry; ascent through question and answer to the Forms."
      },
      {
        "tradition": "german-idealism",
        "definition": "The movement of thought through thesis, antithesis, and synthesis (popularly attributed to Hegel)."
      }
    ],
    "relatedConcepts": [
      "reason",
      "truth",
      "being",
      "praxis"
    ],
    "opposingConcepts": [
      "dogmatism"
    ],
    "majorTexts": [
      "republic",
      "phenomenology-of-spirit"
    ],
    "majorAuthors": [
      "plato",
      "hegel",
      "marx"
    ],
    "historicalTransformations": "From Platonic dialogue through Hegelian logic to Marxist dialectical materialism and Adorno's negative dialectics."
  },
  {
    "id": "god",
    "term": "God",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "θεός",
        "transliteration": "theos"
      },
      {
        "language": "Latin",
        "term": "Deus"
      },
      {
        "language": "Arabic",
        "term": "الله",
        "transliteration": "Allah"
      },
      {
        "language": "Sanskrit",
        "term": "ईश्वर",
        "transliteration": "Ishvara"
      },
      {
        "language": "Hebrew",
        "term": "אלהים",
        "transliteration": "Elohim"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "thomism",
        "definition": "The necessary being whose essence is existence; demonstrated through the Five Ways."
      },
      {
        "tradition": "rationalism",
        "definition": "Deus sive Natura: God is identical with Nature as infinite substance (Spinoza)."
      }
    ],
    "relatedConcepts": [
      "divine",
      "being",
      "the-one",
      "brahman"
    ],
    "opposingConcepts": [
      "atheism"
    ],
    "majorTexts": [
      "summa-theologiae",
      "ethics-spinoza",
      "guide-for-the-perplexed"
    ],
    "majorAuthors": [
      "aquinas",
      "spinoza",
      "maimonides"
    ],
    "historicalTransformations": "From Greek philosophical theology through medieval proofs to modern critiques and process theology."
  },
  {
    "id": "the-one",
    "term": "The One",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "τὸ ἕν",
        "transliteration": "to hen"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "neoplatonism",
        "definition": "The absolutely simple first principle beyond being and thought; source of all reality through emanation."
      }
    ],
    "relatedConcepts": [
      "brahman",
      "god",
      "emanation",
      "being"
    ],
    "opposingConcepts": [
      "multiplicity"
    ],
    "majorTexts": [
      "enneads",
      "elements-of-theology"
    ],
    "majorAuthors": [
      "plotinus",
      "proclus"
    ],
    "historicalTransformations": "From Parmenides' unity of being through Plato's Good to Plotinus's transcendent One."
  },
  {
    "id": "emanation",
    "term": "Emanation",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "πρόοδος",
        "transliteration": "proodos"
      },
      {
        "language": "Arabic",
        "term": "فيض",
        "transliteration": "fayd"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "neoplatonism",
        "definition": "The necessary overflowing of reality from the One through Intellect and Soul to matter."
      },
      {
        "tradition": "islamic-falsafa",
        "definition": "The procession of intellects from the First Cause, adapted from Neoplatonic models."
      }
    ],
    "relatedConcepts": [
      "the-one",
      "being",
      "god"
    ],
    "opposingConcepts": [
      "creation"
    ],
    "majorTexts": [
      "enneads",
      "virtuous-city"
    ],
    "majorAuthors": [
      "plotinus",
      "al-farabi",
      "ibn-sina"
    ],
    "historicalTransformations": "From Plotinian procession through Islamic emanationism to its critique by al-Ghazali."
  },
  {
    "id": "wuwei",
    "term": "Wuwei (Non-Action)",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "無為",
        "transliteration": "wuwei"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "daoism",
        "definition": "Non-forcing action; acting in harmony with the natural flow of things without artificial interference."
      }
    ],
    "relatedConcepts": [
      "dao",
      "yin-yang",
      "freedom"
    ],
    "opposingConcepts": [
      "force",
      "artifice"
    ],
    "majorTexts": [
      "daodejing",
      "zhuangzi-text"
    ],
    "majorAuthors": [
      "laozi",
      "zhuangzi"
    ],
    "historicalTransformations": "From Laozi's political non-interference through Zhuangzi's spontaneity to Chan Buddhist practice."
  },
  {
    "id": "yin-yang",
    "term": "Yin-Yang",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "陰陽",
        "transliteration": "yinyang"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "daoism",
        "definition": "Complementary cosmic forces: yin (receptive, dark, feminine) and yang (active, bright, masculine)."
      },
      {
        "tradition": "neo-confucianism",
        "definition": "The dynamic polarity underlying all change and transformation in the cosmos."
      }
    ],
    "relatedConcepts": [
      "dao",
      "qi",
      "becoming"
    ],
    "opposingConcepts": [
      "dualism"
    ],
    "majorTexts": [
      "book-of-changes",
      "daodejing"
    ],
    "majorAuthors": [
      "laozi",
      "zhou-dunyi"
    ],
    "historicalTransformations": "From ancient Chinese cosmology through Yijing interpretation to Neo-Confucian metaphysics."
  },
  {
    "id": "maya",
    "term": "Maya",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "माया",
        "transliteration": "maya"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "advaita-vedanta",
        "definition": "Cosmic illusion or superimposition that conceals the true nature of Brahman as sole reality."
      },
      {
        "tradition": "vedanta",
        "definition": "The creative power of God that manifests the world (saguna Brahman)."
      }
    ],
    "relatedConcepts": [
      "brahman",
      "avidya",
      "phenomena"
    ],
    "opposingConcepts": [
      "truth",
      "knowledge"
    ],
    "majorTexts": [
      "brahma-sutra-bhashya",
      "vivekachudamani"
    ],
    "majorAuthors": [
      "shankara",
      "gaudapada"
    ],
    "historicalTransformations": "From Vedic magical power through Shankara's cosmic illusion to modern interpretations."
  },
  {
    "id": "prakriti",
    "term": "Prakriti (Nature/Matter)",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "प्रकृति",
        "transliteration": "prakriti"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "samkhya",
        "definition": "Primordial matter composed of three gunas; the source of all material evolution; unconscious."
      }
    ],
    "relatedConcepts": [
      "purusha",
      "matter",
      "qi"
    ],
    "opposingConcepts": [
      "purusha",
      "consciousness"
    ],
    "majorTexts": [
      "samkhya-karika",
      "yoga-sutras"
    ],
    "majorAuthors": [
      "kapila",
      "patanjali"
    ],
    "historicalTransformations": "From Samkhya primordial matter to Yoga's framework for liberation through discrimination."
  },
  {
    "id": "purusha",
    "term": "Purusha (Consciousness)",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "पुरुष",
        "transliteration": "purusha"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "samkhya",
        "definition": "Pure consciousness; the witness that is eternally distinct from prakriti/matter."
      }
    ],
    "relatedConcepts": [
      "prakriti",
      "consciousness",
      "atman"
    ],
    "opposingConcepts": [
      "prakriti",
      "matter"
    ],
    "majorTexts": [
      "samkhya-karika"
    ],
    "majorAuthors": [
      "kapila"
    ],
    "historicalTransformations": "From Samkhya cosmic person to pure consciousness principle in Yoga."
  },
  {
    "id": "noumena",
    "term": "Noumena",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "νοούμενα",
        "transliteration": "nooumena"
      },
      {
        "language": "German",
        "term": "Ding an sich"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "german-idealism",
        "definition": "Things-in-themselves; reality as it exists independently of our perception; unknowable."
      }
    ],
    "relatedConcepts": [
      "phenomena",
      "being",
      "a-priori"
    ],
    "opposingConcepts": [
      "phenomena"
    ],
    "majorTexts": [
      "critique-of-pure-reason"
    ],
    "majorAuthors": [
      "kant"
    ],
    "historicalTransformations": "Kant's distinction between how things appear to us (phenomena) and how they are in themselves."
  },
  {
    "id": "phenomena",
    "term": "Phenomena",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "φαινόμενα",
        "transliteration": "phainomena"
      },
      {
        "language": "German",
        "term": "Erscheinung"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "german-idealism",
        "definition": "Things as they appear to us, structured by the categories of the understanding."
      },
      {
        "tradition": "phenomenology",
        "definition": "That which shows itself from itself; what appears to consciousness."
      }
    ],
    "relatedConcepts": [
      "noumena",
      "experience",
      "perception"
    ],
    "opposingConcepts": [
      "noumena"
    ],
    "majorTexts": [
      "critique-of-pure-reason",
      "logical-investigations"
    ],
    "majorAuthors": [
      "kant",
      "husserl"
    ],
    "historicalTransformations": "From Kantian appearance to Husserlian \"things themselves\" to Heidegger's self-showing."
  },
  {
    "id": "a-priori",
    "term": "A Priori",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "a priori"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "german-idealism",
        "definition": "Knowledge independent of experience; necessary and universal (Kant)."
      },
      {
        "tradition": "analytic-philosophy",
        "definition": "Challenged by Quine: no sharp line between a priori and a posteriori."
      }
    ],
    "relatedConcepts": [
      "knowledge",
      "reason",
      "noumena"
    ],
    "opposingConcepts": [
      "a-posteriori",
      "experience"
    ],
    "majorTexts": [
      "critique-of-pure-reason",
      "word-and-object"
    ],
    "majorAuthors": [
      "kant",
      "quine",
      "kripke"
    ],
    "historicalTransformations": "From Leibnizian truths of reason through Kant's synthetic a priori to Kripke's necessary a posteriori."
  },
  {
    "id": "eudaimonia",
    "term": "Eudaimonia (Flourishing)",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "εὐδαιμονία",
        "transliteration": "eudaimonia"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "The highest human good: activity of the soul in accordance with virtue over a complete life."
      }
    ],
    "relatedConcepts": [
      "virtue",
      "good",
      "happiness"
    ],
    "opposingConcepts": [
      "vice"
    ],
    "majorTexts": [
      "nicomachean-ethics"
    ],
    "majorAuthors": [
      "aristotle"
    ],
    "historicalTransformations": "From Aristotle's comprehensive flourishing to Stoic virtue-sufficiency to modern neo-Aristotelian revival."
  },
  {
    "id": "pleasure",
    "term": "Pleasure",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ἡδονή",
        "transliteration": "hedone"
      },
      {
        "language": "Latin",
        "term": "voluptas"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "epicureanism",
        "definition": "The absence of pain (aponia) and disturbance (ataraxia); not mere sensual indulgence."
      },
      {
        "tradition": "utilitarianism",
        "definition": "The fundamental good; to be maximized across all sentient beings."
      }
    ],
    "relatedConcepts": [
      "eudaimonia",
      "good"
    ],
    "opposingConcepts": [
      "pain",
      "suffering"
    ],
    "majorTexts": [
      "letter-to-menoeceus",
      "utilitarianism-mill"
    ],
    "majorAuthors": [
      "epicurus",
      "mill",
      "bentham"
    ],
    "historicalTransformations": "From Epicurean refined pleasure through Bentham's calculus to Mill's qualitative distinctions."
  },
  {
    "id": "categorical-imperative",
    "term": "Categorical Imperative",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "kategorischer Imperativ"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "german-idealism",
        "definition": "Act only according to that maxim you could will to become a universal law (Kant)."
      }
    ],
    "relatedConcepts": [
      "duty",
      "autonomy",
      "reason"
    ],
    "opposingConcepts": [
      "hypothetical-imperative"
    ],
    "majorTexts": [
      "groundwork-metaphysics-morals"
    ],
    "majorAuthors": [
      "kant"
    ],
    "historicalTransformations": "Kant's supreme moral principle in three formulations: universal law, humanity as end, kingdom of ends."
  },
  {
    "id": "ahimsa",
    "term": "Ahimsa (Non-Violence)",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "अहिंसा",
        "transliteration": "ahimsa"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "jainism",
        "definition": "The supreme ethical principle: non-harm to all living beings in thought, word, and deed."
      },
      {
        "tradition": "vedanta",
        "definition": "Non-violence as the highest dharma, applied to political resistance by Gandhi."
      }
    ],
    "relatedConcepts": [
      "compassion",
      "dharma",
      "virtue"
    ],
    "opposingConcepts": [
      "violence"
    ],
    "majorTexts": [
      "tattvartha-sutra",
      "bhagavad-gita"
    ],
    "majorAuthors": [
      "mahavira",
      "gandhi"
    ],
    "historicalTransformations": "From Jain radical non-violence through Buddhist compassion to Gandhian political non-violence."
  },
  {
    "id": "ubuntu",
    "term": "Ubuntu",
    "originalLanguageVariants": [
      {
        "language": "Zulu",
        "term": "ubuntu"
      },
      {
        "language": "Xhosa",
        "term": "ubuntu"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "ubuntu-philosophy",
        "definition": "\"I am because we are\": personhood is realized through relationships with others; a relational ontology."
      }
    ],
    "relatedConcepts": [
      "community",
      "justice",
      "dignity",
      "compassion"
    ],
    "opposingConcepts": [
      "individualism"
    ],
    "majorTexts": [
      "maxims-of-ptahhotep"
    ],
    "majorAuthors": [
      "ramose"
    ],
    "historicalTransformations": "Southern African philosophy of communal personhood applied to ethics, politics, and reconciliation."
  },
  {
    "id": "maat",
    "term": "Maat",
    "originalLanguageVariants": [
      {
        "language": "Egyptian",
        "term": "mꜣꜥt",
        "transliteration": "maat"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "africana-philosophy",
        "definition": "Cosmic justice, truth, and order; the foundational ethical concept of ancient Egyptian thought."
      }
    ],
    "relatedConcepts": [
      "justice",
      "truth",
      "virtue"
    ],
    "opposingConcepts": [
      "chaos"
    ],
    "majorTexts": [
      "maxims-of-ptahhotep"
    ],
    "majorAuthors": [
      "ptahhotep"
    ],
    "historicalTransformations": "From ancient Egyptian cosmic order to modern Africana philosophical recovery as ethical framework."
  },
  {
    "id": "compassion",
    "term": "Compassion",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "करुणा",
        "transliteration": "karuna"
      },
      {
        "language": "Pali",
        "term": "karuṇā"
      },
      {
        "language": "Chinese",
        "term": "慈悲",
        "transliteration": "cibei"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "mahayana-buddhism",
        "definition": "The wish for all beings to be free from suffering; paired with wisdom as the bodhisattva's essence."
      },
      {
        "tradition": "confucianism",
        "definition": "Linked to ren (humaneness); the natural feeling of commiseration (Mencius)."
      }
    ],
    "relatedConcepts": [
      "ren",
      "ahimsa",
      "virtue",
      "good"
    ],
    "opposingConcepts": [
      "cruelty"
    ],
    "majorTexts": [
      "bodhicaryavatara",
      "mencius-text"
    ],
    "majorAuthors": [
      "shantideva",
      "mencius"
    ],
    "historicalTransformations": "From Buddhist universal compassion through Confucian moral feeling to modern ethics of care."
  },
  {
    "id": "free-will",
    "term": "Free Will",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "liberum arbitrium"
      },
      {
        "language": "Arabic",
        "term": "اختيار",
        "transliteration": "ikhtiyar"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "augustinianism",
        "definition": "A gift from God; the capacity to choose between good and evil, corrupted by original sin."
      },
      {
        "tradition": "kalam",
        "definition": "Central to divine justice: humans must have free will for moral responsibility (Mu'tazila)."
      }
    ],
    "relatedConcepts": [
      "freedom",
      "autonomy",
      "determinism"
    ],
    "opposingConcepts": [
      "determinism"
    ],
    "majorTexts": [
      "confessions-augustine",
      "city-of-god"
    ],
    "majorAuthors": [
      "augustine",
      "kant"
    ],
    "historicalTransformations": "From Stoic compatibilism through Augustinian freedom to Kantian autonomy and contemporary debates."
  },
  {
    "id": "determinism",
    "term": "Determinism",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "determinare"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "stoicism",
        "definition": "All events are determined by the logos; freedom consists in accepting what is fated."
      },
      {
        "tradition": "rationalism",
        "definition": "All things follow necessarily from the nature of God/substance (Spinoza)."
      }
    ],
    "relatedConcepts": [
      "free-will",
      "karma",
      "causation"
    ],
    "opposingConcepts": [
      "free-will",
      "freedom"
    ],
    "majorTexts": [
      "ethics-spinoza",
      "meditations"
    ],
    "majorAuthors": [
      "spinoza",
      "chrysippus"
    ],
    "historicalTransformations": "From Stoic fate through Spinozistic necessity to Laplacean determinism and modern debates."
  },
  {
    "id": "alienation",
    "term": "Alienation",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "Entfremdung"
      },
      {
        "language": "French",
        "term": "aliénation"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "marxism",
        "definition": "Workers' estrangement from their labor, products, fellow workers, and human nature under capitalism."
      },
      {
        "tradition": "existentialism",
        "definition": "The fundamental experience of being a stranger in the world; self-division."
      }
    ],
    "relatedConcepts": [
      "praxis",
      "class",
      "consciousness"
    ],
    "opposingConcepts": [
      "community",
      "solidarity"
    ],
    "majorTexts": [
      "capital",
      "being-and-nothingness"
    ],
    "majorAuthors": [
      "marx",
      "sartre",
      "hegel"
    ],
    "historicalTransformations": "From Hegel's self-alienation of Spirit through Marx's economic alienation to existentialist self-estrangement."
  },
  {
    "id": "power",
    "term": "Power",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "δύναμις",
        "transliteration": "dynamis"
      },
      {
        "language": "Latin",
        "term": "potestas"
      },
      {
        "language": "French",
        "term": "pouvoir"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "post-structuralism",
        "definition": "Not merely repressive but productive; constitutes subjects and knowledge (Foucault)."
      },
      {
        "tradition": "marxism",
        "definition": "Rooted in economic relations; the ruling class exercises power through ideology and state apparatus."
      }
    ],
    "relatedConcepts": [
      "authority",
      "state",
      "hegemony",
      "knowledge"
    ],
    "opposingConcepts": [
      "weakness",
      "submission"
    ],
    "majorTexts": [
      "discipline-and-punish",
      "prison-notebooks"
    ],
    "majorAuthors": [
      "foucault",
      "gramsci",
      "nietzsche"
    ],
    "historicalTransformations": "From Aristotelian potency through Machiavellian statecraft to Foucauldian capillary power."
  },
  {
    "id": "hegemony",
    "term": "Hegemony",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ἡγεμονία",
        "transliteration": "hegemonia"
      },
      {
        "language": "Italian",
        "term": "egemonia"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "marxism",
        "definition": "Cultural and ideological leadership of the ruling class; consent-based domination (Gramsci)."
      }
    ],
    "relatedConcepts": [
      "power",
      "ideology",
      "praxis"
    ],
    "opposingConcepts": [
      "counter-hegemony"
    ],
    "majorTexts": [
      "prison-notebooks"
    ],
    "majorAuthors": [
      "gramsci"
    ],
    "historicalTransformations": "From Gramsci's analysis of cultural domination to postcolonial and post-Marxist applications."
  },
  {
    "id": "praxis",
    "term": "Praxis",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "πρᾶξις",
        "transliteration": "praxis"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "marxism",
        "definition": "Practical, transformative action uniting theory and practice; the basis for revolutionary change."
      },
      {
        "tradition": "aristotelianism",
        "definition": "Action directed toward the good life; distinguished from poiesis (production)."
      }
    ],
    "relatedConcepts": [
      "dialectic",
      "alienation",
      "freedom"
    ],
    "opposingConcepts": [
      "theory-alone"
    ],
    "majorTexts": [
      "theses-on-feuerbach",
      "pedagogy-of-the-oppressed"
    ],
    "majorAuthors": [
      "marx",
      "aristotle",
      "freire"
    ],
    "historicalTransformations": "From Aristotelian practical wisdom through Marx's revolutionary practice to Freire's pedagogy."
  },
  {
    "id": "colonialism",
    "term": "Colonialism",
    "originalLanguageVariants": [],
    "definitionsByTradition": [
      {
        "tradition": "postcolonial-philosophy",
        "definition": "A system of domination involving political control, economic exploitation, and epistemic violence."
      },
      {
        "tradition": "decolonial-thought",
        "definition": "Not merely political but constitutive of modernity itself; the \"dark side\" of the Enlightenment."
      }
    ],
    "relatedConcepts": [
      "decolonization",
      "power",
      "subaltern"
    ],
    "opposingConcepts": [
      "freedom",
      "liberation"
    ],
    "majorTexts": [
      "orientalism",
      "wretched-of-the-earth"
    ],
    "majorAuthors": [
      "fanon",
      "said",
      "mignolo"
    ],
    "historicalTransformations": "From historical colonial systems to ongoing coloniality of power, knowledge, and being."
  },
  {
    "id": "decolonization",
    "term": "Decolonization",
    "originalLanguageVariants": [],
    "definitionsByTradition": [
      {
        "tradition": "postcolonial-philosophy",
        "definition": "Not merely political independence but transformation of knowledge, culture, and subjectivity."
      },
      {
        "tradition": "africana-philosophy",
        "definition": "Recovery and reconstruction of African philosophical traditions on their own terms."
      }
    ],
    "relatedConcepts": [
      "colonialism",
      "freedom",
      "liberation"
    ],
    "opposingConcepts": [
      "colonialism"
    ],
    "majorTexts": [
      "wretched-of-the-earth",
      "consciencism"
    ],
    "majorAuthors": [
      "fanon",
      "nkrumah",
      "wiredu"
    ],
    "historicalTransformations": "From political independence movements to epistemic and cultural decolonization."
  },
  {
    "id": "subaltern",
    "term": "Subaltern",
    "originalLanguageVariants": [],
    "definitionsByTradition": [
      {
        "tradition": "postcolonial-philosophy",
        "definition": "Those excluded from dominant discourse and political representation; \"Can the subaltern speak?\" (Spivak)."
      }
    ],
    "relatedConcepts": [
      "colonialism",
      "power",
      "alterity"
    ],
    "opposingConcepts": [
      "hegemony"
    ],
    "majorTexts": [
      "can-the-subaltern-speak",
      "prison-notebooks"
    ],
    "majorAuthors": [
      "spivak",
      "gramsci"
    ],
    "historicalTransformations": "From Gramsci's subordinate classes to Spivak's question of voice and representation."
  },
  {
    "id": "social-contract",
    "term": "Social Contract",
    "originalLanguageVariants": [
      {
        "language": "French",
        "term": "contrat social"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "empiricism",
        "definition": "A hypothetical agreement to leave the state of nature and establish political authority."
      },
      {
        "tradition": "analytic-philosophy",
        "definition": "A device for determining principles of justice: the original position (Rawls)."
      }
    ],
    "relatedConcepts": [
      "state",
      "freedom",
      "rights",
      "sovereignty"
    ],
    "opposingConcepts": [
      "anarchy"
    ],
    "majorTexts": [
      "leviathan",
      "social-contract-rousseau",
      "theory-of-justice"
    ],
    "majorAuthors": [
      "hobbes",
      "locke",
      "rousseau",
      "rawls"
    ],
    "historicalTransformations": "From Hobbes's absolute sovereign through Locke's limited government to Rawls's justice as fairness."
  },
  {
    "id": "authenticity",
    "term": "Authenticity",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "Eigentlichkeit"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "Owning one's freedom and finitude; resolutely choosing oneself in the face of anxiety and death."
      }
    ],
    "relatedConcepts": [
      "dasein",
      "freedom-existential",
      "anxiety"
    ],
    "opposingConcepts": [
      "bad-faith",
      "inauthenticity"
    ],
    "majorTexts": [
      "being-and-time",
      "being-and-nothingness"
    ],
    "majorAuthors": [
      "heidegger",
      "sartre",
      "kierkegaard"
    ],
    "historicalTransformations": "From Kierkegaard's passionate inwardness through Heidegger's Eigentlichkeit to Sartre's radical choice."
  },
  {
    "id": "bad-faith",
    "term": "Bad Faith",
    "originalLanguageVariants": [
      {
        "language": "French",
        "term": "mauvaise foi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "Self-deception about one's freedom; pretending to be a fixed thing or pure consciousness (Sartre)."
      }
    ],
    "relatedConcepts": [
      "authenticity",
      "freedom-existential",
      "nothingness"
    ],
    "opposingConcepts": [
      "authenticity"
    ],
    "majorTexts": [
      "being-and-nothingness"
    ],
    "majorAuthors": [
      "sartre"
    ],
    "historicalTransformations": "Sartre's analysis of how we flee from radical freedom by pretending to be determined."
  },
  {
    "id": "dasein",
    "term": "Dasein",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "Dasein"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "phenomenology",
        "definition": "Heidegger's term for human being: \"being-there\"; the entity that questions its own being."
      }
    ],
    "relatedConcepts": [
      "being",
      "authenticity",
      "death",
      "anxiety"
    ],
    "opposingConcepts": [
      "substance",
      "subject"
    ],
    "majorTexts": [
      "being-and-time"
    ],
    "majorAuthors": [
      "heidegger"
    ],
    "historicalTransformations": "Heidegger's central concept replacing \"subject\" and \"consciousness\" with being-in-the-world."
  },
  {
    "id": "nothingness",
    "term": "Nothingness",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "Nichts"
      },
      {
        "language": "Japanese",
        "term": "無",
        "transliteration": "mu"
      },
      {
        "language": "French",
        "term": "néant"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "Consciousness is a nothingness; the for-itself is what it is not and is not what it is (Sartre)."
      },
      {
        "tradition": "kyoto-school",
        "definition": "Absolute nothingness (zettai mu) as the ground of reality, drawing on Zen sunyata."
      }
    ],
    "relatedConcepts": [
      "being",
      "emptiness",
      "anxiety"
    ],
    "opposingConcepts": [
      "being",
      "substance"
    ],
    "majorTexts": [
      "being-and-nothingness",
      "inquiry-into-the-good"
    ],
    "majorAuthors": [
      "sartre",
      "heidegger",
      "nishida-kitaro"
    ],
    "historicalTransformations": "From Hegel's dialectical nothing through Heidegger's anxiety to Kyoto School absolute nothingness."
  },
  {
    "id": "anxiety",
    "term": "Anxiety",
    "originalLanguageVariants": [
      {
        "language": "Danish",
        "term": "Angest"
      },
      {
        "language": "German",
        "term": "Angst"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "A fundamental mood revealing our freedom and finitude; not fear of a specific object but of our own being."
      }
    ],
    "relatedConcepts": [
      "dasein",
      "authenticity",
      "death",
      "freedom-existential"
    ],
    "opposingConcepts": [
      "complacency"
    ],
    "majorTexts": [
      "either-or",
      "being-and-time"
    ],
    "majorAuthors": [
      "kierkegaard",
      "heidegger"
    ],
    "historicalTransformations": "From Kierkegaard's anxiety before freedom to Heidegger's Angst as disclosure of being-toward-death."
  },
  {
    "id": "absurdity",
    "term": "The Absurd",
    "originalLanguageVariants": [
      {
        "language": "French",
        "term": "l'absurde"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "The conflict between human desire for meaning and the universe's indifference; demands revolt, not suicide."
      }
    ],
    "relatedConcepts": [
      "meaning-of-life",
      "nothingness",
      "freedom"
    ],
    "opposingConcepts": [
      "meaning",
      "purpose"
    ],
    "majorTexts": [
      "myth-of-sisyphus"
    ],
    "majorAuthors": [
      "camus"
    ],
    "historicalTransformations": "Camus's development of the absurd as the tension between human longing and cosmic silence."
  },
  {
    "id": "death",
    "term": "Death",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "θάνατος",
        "transliteration": "thanatos"
      },
      {
        "language": "German",
        "term": "Tod"
      },
      {
        "language": "Sanskrit",
        "term": "मृत्यु",
        "transliteration": "mrityu"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "Being-toward-death: our ownmost, non-relational, certain possibility; individuates Dasein."
      },
      {
        "tradition": "epicureanism",
        "definition": "Death is nothing to us; when we exist, death does not, and vice versa."
      }
    ],
    "relatedConcepts": [
      "anxiety",
      "being",
      "dasein",
      "impermanence"
    ],
    "opposingConcepts": [
      "immortality"
    ],
    "majorTexts": [
      "being-and-time",
      "letter-to-menoeceus"
    ],
    "majorAuthors": [
      "heidegger",
      "epicurus"
    ],
    "historicalTransformations": "From Socratic preparation through Epicurean indifference to Heideggerian being-toward-death."
  },
  {
    "id": "alterity",
    "term": "Alterity/Otherness",
    "originalLanguageVariants": [
      {
        "language": "French",
        "term": "altérité"
      },
      {
        "language": "Latin",
        "term": "alteritas"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "phenomenology",
        "definition": "The radical otherness of the Other that exceeds my comprehension; grounds ethics (Levinas)."
      },
      {
        "tradition": "postcolonial-philosophy",
        "definition": "The construction of non-Western peoples as \"Other\" in colonial discourse."
      }
    ],
    "relatedConcepts": [
      "transcendence",
      "dialogue-concept",
      "colonialism"
    ],
    "opposingConcepts": [
      "identity",
      "same"
    ],
    "majorTexts": [
      "totality-and-infinity",
      "orientalism"
    ],
    "majorAuthors": [
      "levinas",
      "said",
      "beauvoir"
    ],
    "historicalTransformations": "From Hegelian recognition through Beauvoir's \"Other\" to Levinas's ethical alterity and postcolonial critique."
  },
  {
    "id": "intentionality",
    "term": "Intentionality",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "intentio"
      },
      {
        "language": "German",
        "term": "Intentionalität"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "phenomenology",
        "definition": "The directedness of consciousness; every mental act is about or of something (Husserl)."
      }
    ],
    "relatedConcepts": [
      "consciousness",
      "mind",
      "phenomena"
    ],
    "opposingConcepts": [
      "unconscious"
    ],
    "majorTexts": [
      "logical-investigations",
      "ideas-husserl"
    ],
    "majorAuthors": [
      "husserl",
      "brentano"
    ],
    "historicalTransformations": "From medieval scholastic intentio through Brentano's descriptive psychology to Husserlian phenomenology."
  },
  {
    "id": "meaning",
    "term": "Meaning",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "Bedeutung/Sinn"
      },
      {
        "language": "Chinese",
        "term": "義",
        "transliteration": "yi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "analytic-philosophy",
        "definition": "The study of how words and sentences represent reality; sense vs. reference (Frege)."
      },
      {
        "tradition": "hermeneutics",
        "definition": "Understanding arises in the dialogue between interpreter and text within tradition (Gadamer)."
      }
    ],
    "relatedConcepts": [
      "truth",
      "reference",
      "language-game",
      "logos"
    ],
    "opposingConcepts": [
      "nonsense"
    ],
    "majorTexts": [
      "tractatus",
      "truth-and-method"
    ],
    "majorAuthors": [
      "frege",
      "wittgenstein",
      "gadamer"
    ],
    "historicalTransformations": "From Fregean sense/reference through Wittgensteinian use-theory to hermeneutic understanding."
  },
  {
    "id": "language-game",
    "term": "Language Game",
    "originalLanguageVariants": [
      {
        "language": "German",
        "term": "Sprachspiel"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "analytic-philosophy",
        "definition": "Language functions in diverse ways; meaning is use within a form of life (Wittgenstein)."
      }
    ],
    "relatedConcepts": [
      "meaning",
      "reference"
    ],
    "opposingConcepts": [
      "private-language"
    ],
    "majorTexts": [
      "philosophical-investigations"
    ],
    "majorAuthors": [
      "wittgenstein"
    ],
    "historicalTransformations": "Wittgenstein's later concept replacing the picture theory of meaning with social practice."
  },
  {
    "id": "deconstruction-concept",
    "term": "Deconstruction",
    "originalLanguageVariants": [
      {
        "language": "French",
        "term": "déconstruction"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "post-structuralism",
        "definition": "A reading strategy revealing how texts undermine their own philosophical presuppositions (Derrida)."
      }
    ],
    "relatedConcepts": [
      "meaning",
      "logos",
      "alterity"
    ],
    "opposingConcepts": [
      "presence",
      "logocentrism"
    ],
    "majorTexts": [
      "of-grammatology"
    ],
    "majorAuthors": [
      "derrida"
    ],
    "historicalTransformations": "Derrida's approach to revealing aporias and undecidabilities within texts and philosophical systems."
  },
  {
    "id": "hermeneutics-concept",
    "term": "Hermeneutics",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "ἑρμηνευτική",
        "transliteration": "hermeneutike"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "hermeneutics",
        "definition": "The philosophy of interpretation and understanding; all understanding is interpretation within tradition."
      }
    ],
    "relatedConcepts": [
      "meaning",
      "truth",
      "tradition-concept"
    ],
    "opposingConcepts": [
      "objectivism"
    ],
    "majorTexts": [
      "truth-and-method"
    ],
    "majorAuthors": [
      "gadamer",
      "ricoeur"
    ],
    "historicalTransformations": "From biblical exegesis through Schleiermacher/Dilthey to Gadamer's philosophical hermeneutics."
  },
  {
    "id": "gender",
    "term": "Gender",
    "originalLanguageVariants": [
      {
        "language": "English",
        "term": "gender"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "feminist-philosophy",
        "definition": "A social construction of roles, behaviors, and identities; performatively constituted through repeated acts (Butler)."
      },
      {
        "tradition": "existentialism",
        "definition": "Situation: \"One is not born, but rather becomes, a woman\" (Beauvoir)."
      }
    ],
    "relatedConcepts": [
      "self",
      "power",
      "embodiment"
    ],
    "opposingConcepts": [
      "biological-essentialism"
    ],
    "majorTexts": [
      "the-second-sex",
      "gender-trouble"
    ],
    "majorAuthors": [
      "beauvoir",
      "butler"
    ],
    "historicalTransformations": "From Beauvoir's situated freedom through feminist constructionism to Butler's performativity."
  },
  {
    "id": "satori",
    "term": "Satori (Awakening)",
    "originalLanguageVariants": [
      {
        "language": "Japanese",
        "term": "悟り",
        "transliteration": "satori"
      },
      {
        "language": "Chinese",
        "term": "悟",
        "transliteration": "wu"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "zen-buddhism",
        "definition": "Sudden, direct insight into one's true nature; a non-conceptual realization of emptiness."
      }
    ],
    "relatedConcepts": [
      "enlightenment-bodhi",
      "emptiness",
      "consciousness"
    ],
    "opposingConcepts": [
      "delusion"
    ],
    "majorTexts": [
      "platform-sutra",
      "shobogenzo"
    ],
    "majorAuthors": [
      "huineng",
      "dogen"
    ],
    "historicalTransformations": "From Indian bodhi through Chinese wu to Japanese satori; debated as sudden vs. gradual."
  },
  {
    "id": "mystical-experience",
    "term": "Mystical Experience",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "μυστικός",
        "transliteration": "mystikos"
      },
      {
        "language": "Arabic",
        "term": "فناء",
        "transliteration": "fana"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "sufism",
        "definition": "Fana: annihilation of the ego in God; direct experiential knowledge (ma'rifa) of the divine."
      },
      {
        "tradition": "neoplatonism",
        "definition": "Henosis: mystical union with the One beyond all thought and being."
      }
    ],
    "relatedConcepts": [
      "god",
      "divine",
      "consciousness"
    ],
    "opposingConcepts": [
      "reason-alone"
    ],
    "majorTexts": [
      "enneads",
      "fusus-al-hikam"
    ],
    "majorAuthors": [
      "plotinus",
      "ibn-arabi",
      "meister-eckhart"
    ],
    "historicalTransformations": "From Plotinian henosis through Christian and Islamic mysticism to modern comparative study."
  },
  {
    "id": "faith",
    "term": "Faith",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "πίστις",
        "transliteration": "pistis"
      },
      {
        "language": "Latin",
        "term": "fides"
      },
      {
        "language": "Arabic",
        "term": "إيمان",
        "transliteration": "iman"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "scholasticism",
        "definition": "A supernatural theological virtue; believing what God has revealed, supported by reason."
      },
      {
        "tradition": "existentialism",
        "definition": "A passionate leap beyond rational proof; the absurd commitment to the religious (Kierkegaard)."
      }
    ],
    "relatedConcepts": [
      "revelation",
      "god",
      "truth"
    ],
    "opposingConcepts": [
      "reason",
      "skepticism"
    ],
    "majorTexts": [
      "proslogion",
      "fear-and-trembling"
    ],
    "majorAuthors": [
      "aquinas",
      "kierkegaard"
    ],
    "historicalTransformations": "From Pauline pistis through Anselmian faith-seeking-understanding to Kierkegaard's leap."
  },
  {
    "id": "transcendence",
    "term": "Transcendence",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "transcendentia"
      },
      {
        "language": "German",
        "term": "Transzendenz"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "existentialism",
        "definition": "The human capacity to go beyond given situations toward possibilities; Dasein's projection."
      },
      {
        "tradition": "phenomenology",
        "definition": "The radical alterity of the Other that exceeds totality (Levinas)."
      }
    ],
    "relatedConcepts": [
      "being",
      "freedom",
      "god",
      "alterity"
    ],
    "opposingConcepts": [
      "immanence"
    ],
    "majorTexts": [
      "being-and-time",
      "totality-and-infinity"
    ],
    "majorAuthors": [
      "heidegger",
      "levinas",
      "jaspers"
    ],
    "historicalTransformations": "From medieval divine transcendence through Kantian transcendental conditions to existentialist self-surpassing."
  },
  {
    "id": "beauty",
    "term": "Beauty",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "τὸ καλόν",
        "transliteration": "to kalon"
      },
      {
        "language": "Sanskrit",
        "term": "सुन्दर",
        "transliteration": "sundara"
      },
      {
        "language": "Japanese",
        "term": "美",
        "transliteration": "bi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "platonism",
        "definition": "The Form of Beauty; the beloved object that draws the soul upward toward the Good."
      },
      {
        "tradition": "german-idealism",
        "definition": "Disinterested pleasure in the form of an object; free play of imagination and understanding (Kant)."
      }
    ],
    "relatedConcepts": [
      "sublime",
      "good",
      "forms"
    ],
    "opposingConcepts": [
      "ugliness"
    ],
    "majorTexts": [
      "symposium",
      "critique-of-judgment"
    ],
    "majorAuthors": [
      "plato",
      "kant"
    ],
    "historicalTransformations": "From Platonic ascent to Beauty itself through Kantian aesthetic judgment to modern art theory."
  },
  {
    "id": "rasa",
    "term": "Rasa (Aesthetic Flavor)",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "रस",
        "transliteration": "rasa"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "indian-aesthetics",
        "definition": "The emotional essence or flavor of a work of art; nine primary rasas from love to peace."
      }
    ],
    "relatedConcepts": [
      "beauty",
      "aesthetic-experience"
    ],
    "opposingConcepts": [
      "ugliness"
    ],
    "majorTexts": [
      "natyashastra"
    ],
    "majorAuthors": [
      "bharata",
      "abhinavagupta"
    ],
    "historicalTransformations": "From Bharata's dramatic theory through Abhinavagupta's universalization to modern aesthetic theory."
  },
  {
    "id": "wabi-sabi",
    "term": "Wabi-Sabi",
    "originalLanguageVariants": [
      {
        "language": "Japanese",
        "term": "侘寂",
        "transliteration": "wabi-sabi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "zen-buddhism",
        "definition": "The aesthetic of imperfection, impermanence, and incompleteness; beauty in simplicity and age."
      }
    ],
    "relatedConcepts": [
      "beauty",
      "impermanence",
      "emptiness"
    ],
    "opposingConcepts": [
      "perfection"
    ],
    "majorTexts": [
      "shobogenzo"
    ],
    "majorAuthors": [
      "dogen"
    ],
    "historicalTransformations": "From tea ceremony aesthetics through Zen practice to contemporary Japanese and global design philosophy."
  },
  {
    "id": "mimesis",
    "term": "Mimesis (Imitation)",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "μίμησις",
        "transliteration": "mimesis"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "aristotelianism",
        "definition": "Art as imitation of nature and human action; through mimesis, we learn and experience catharsis."
      }
    ],
    "relatedConcepts": [
      "beauty",
      "art",
      "truth"
    ],
    "opposingConcepts": [
      "abstraction"
    ],
    "majorTexts": [
      "poetics-aristotle",
      "republic"
    ],
    "majorAuthors": [
      "aristotle",
      "plato"
    ],
    "historicalTransformations": "From Plato's critical view of mimesis to Aristotle's defense and modern theories of representation."
  },
  {
    "id": "democracy",
    "term": "Democracy",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "δημοκρατία",
        "transliteration": "demokratia"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "political-philosophy",
        "definition": "Government by the people; rule of the many as opposed to monarchy or aristocracy."
      },
      {
        "tradition": "pragmatism",
        "definition": "More than a form of government: a way of life based on communication and shared experience (Dewey)."
      }
    ],
    "relatedConcepts": [
      "freedom",
      "equality",
      "state",
      "rights"
    ],
    "opposingConcepts": [
      "tyranny",
      "authoritarianism"
    ],
    "majorTexts": [
      "politics-aristotle",
      "democracy-and-education"
    ],
    "majorAuthors": [
      "aristotle",
      "dewey",
      "rousseau"
    ],
    "historicalTransformations": "From Athenian direct democracy through republican government to modern representative and participatory forms."
  },
  {
    "id": "rights",
    "term": "Rights",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "ius/iura"
      },
      {
        "language": "French",
        "term": "droits"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "empiricism",
        "definition": "Natural rights to life, liberty, and property; government exists to protect them (Locke)."
      },
      {
        "tradition": "feminist-philosophy",
        "definition": "Extended from male citizens to women, workers, colonized peoples, and all humans."
      }
    ],
    "relatedConcepts": [
      "freedom",
      "justice",
      "equality",
      "dignity"
    ],
    "opposingConcepts": [
      "oppression"
    ],
    "majorTexts": [
      "two-treatises-government",
      "vindication-rights-woman"
    ],
    "majorAuthors": [
      "locke",
      "wollstonecraft",
      "rawls"
    ],
    "historicalTransformations": "From natural law through Lockean natural rights to modern universal human rights discourse."
  },
  {
    "id": "negritude",
    "term": "Negritude",
    "originalLanguageVariants": [
      {
        "language": "French",
        "term": "négritude"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "africana-philosophy",
        "definition": "A cultural and philosophical movement affirming the value and beauty of Black African identity and heritage."
      }
    ],
    "relatedConcepts": [
      "identity",
      "colonialism",
      "decolonization"
    ],
    "opposingConcepts": [
      "assimilation"
    ],
    "majorTexts": [
      "discourse-on-colonialism"
    ],
    "majorAuthors": [
      "senghor",
      "cesaire"
    ],
    "historicalTransformations": "From Césaire and Senghor's cultural affirmation through critique (Fanon, Wiredu) to ongoing debates."
  },
  {
    "id": "svabhava",
    "term": "Svabhava (Self-Nature)",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "स्वभाव",
        "transliteration": "svabhava"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "madhyamaka",
        "definition": "Inherent, independent existence — precisely what all phenomena lack according to Nagarjuna."
      }
    ],
    "relatedConcepts": [
      "emptiness",
      "substance",
      "essence"
    ],
    "opposingConcepts": [
      "dependent-origination",
      "emptiness"
    ],
    "majorTexts": [
      "mulamadhyamakakarika"
    ],
    "majorAuthors": [
      "nagarjuna"
    ],
    "historicalTransformations": "The target of Madhyamaka critique: the mistaken attribution of inherent self-nature to dependently arising phenomena."
  },
  {
    "id": "avidya",
    "term": "Avidya (Ignorance)",
    "originalLanguageVariants": [
      {
        "language": "Sanskrit",
        "term": "अविद्या",
        "transliteration": "avidya"
      },
      {
        "language": "Pali",
        "term": "avijjā"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "advaita-vedanta",
        "definition": "Beginningless ignorance that superimposes the world of multiplicity upon non-dual Brahman."
      },
      {
        "tradition": "theravada-buddhism",
        "definition": "The root of suffering; failure to see impermanence, suffering, and non-self."
      }
    ],
    "relatedConcepts": [
      "maya",
      "knowledge",
      "dependent-origination"
    ],
    "opposingConcepts": [
      "knowledge",
      "prajna"
    ],
    "majorTexts": [
      "brahma-sutra-bhashya",
      "dhammapada"
    ],
    "majorAuthors": [
      "shankara",
      "buddha"
    ],
    "historicalTransformations": "The fundamental obstacle to liberation in both Hindu and Buddhist traditions, though defined differently."
  },
  {
    "id": "li-ritual",
    "term": "Li (Ritual Propriety)",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "禮",
        "transliteration": "li"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "confucianism",
        "definition": "Ritual propriety, ceremony, and social norms that cultivate virtue and maintain social harmony."
      }
    ],
    "relatedConcepts": [
      "ren",
      "yi-righteousness",
      "virtue"
    ],
    "opposingConcepts": [
      "selfishness"
    ],
    "majorTexts": [
      "analects",
      "xunzi-text"
    ],
    "majorAuthors": [
      "confucius",
      "xunzi"
    ],
    "historicalTransformations": "From Zhou dynasty ritual through Confucian ethical cultivation to Neo-Confucian metaphysical interpretations."
  },
  {
    "id": "yi-righteousness",
    "term": "Yi (Righteousness)",
    "originalLanguageVariants": [
      {
        "language": "Chinese",
        "term": "義",
        "transliteration": "yi"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "confucianism",
        "definition": "Moral rightness; acting according to what is appropriate and just in one's situation."
      }
    ],
    "relatedConcepts": [
      "ren",
      "li-ritual",
      "duty",
      "justice"
    ],
    "opposingConcepts": [
      "profit-seeking"
    ],
    "majorTexts": [
      "mencius-text",
      "analects"
    ],
    "majorAuthors": [
      "confucius",
      "mencius"
    ],
    "historicalTransformations": "From Confucian moral duty through Mencius's innate moral sense to Neo-Confucian elaboration."
  },
  {
    "id": "autonomy",
    "term": "Autonomy",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "αὐτονομία",
        "transliteration": "autonomia"
      },
      {
        "language": "German",
        "term": "Autonomie"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "german-idealism",
        "definition": "Self-legislation of the moral will; giving oneself the moral law through reason (Kant)."
      }
    ],
    "relatedConcepts": [
      "freedom",
      "categorical-imperative",
      "dignity"
    ],
    "opposingConcepts": [
      "heteronomy"
    ],
    "majorTexts": [
      "groundwork-metaphysics-morals"
    ],
    "majorAuthors": [
      "kant"
    ],
    "historicalTransformations": "From Kantian moral self-legislation to modern bioethics and political autonomy debates."
  },
  {
    "id": "dignity",
    "term": "Dignity",
    "originalLanguageVariants": [
      {
        "language": "Latin",
        "term": "dignitas"
      },
      {
        "language": "German",
        "term": "Würde"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "german-idealism",
        "definition": "Every rational being has absolute worth and must be treated as an end, never merely as a means (Kant)."
      }
    ],
    "relatedConcepts": [
      "rights",
      "autonomy",
      "justice"
    ],
    "opposingConcepts": [
      "degradation"
    ],
    "majorTexts": [
      "groundwork-metaphysics-morals"
    ],
    "majorAuthors": [
      "kant"
    ],
    "historicalTransformations": "From Stoic inherent worth through Kantian absolute value to modern human rights foundations."
  },
  {
    "id": "cosmopolitanism",
    "term": "Cosmopolitanism",
    "originalLanguageVariants": [
      {
        "language": "Greek",
        "term": "κοσμοπολίτης",
        "transliteration": "kosmopolites"
      }
    ],
    "definitionsByTradition": [
      {
        "tradition": "stoicism",
        "definition": "We are all citizens of the cosmos; moral concern extends to all rational beings equally."
      },
      {
        "tradition": "german-idealism",
        "definition": "Perpetual peace through a federation of free states (Kant)."
      }
    ],
    "relatedConcepts": [
      "justice",
      "equality",
      "universalism"
    ],
    "opposingConcepts": [
      "nationalism"
    ],
    "majorTexts": [
      "on-duties"
    ],
    "majorAuthors": [
      "diogenes-of-sinope",
      "kant"
    ],
    "historicalTransformations": "From Cynic/Stoic world citizenship through Kantian cosmopolitan law to contemporary global ethics."
  }
];
