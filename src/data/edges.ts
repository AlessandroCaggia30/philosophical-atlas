import type { Edge } from '@/types';

export const edges: Edge[] = [
  {
    "id": "e-1",
    "source": "socrates",
    "sourceType": "author",
    "target": "plato",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-2",
    "source": "plato",
    "sourceType": "author",
    "target": "aristotle",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-3",
    "source": "aristotle",
    "sourceType": "author",
    "target": "theophrastus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-4",
    "source": "plato",
    "sourceType": "author",
    "target": "plotinus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-5",
    "source": "plotinus",
    "sourceType": "author",
    "target": "porphyry",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-6",
    "source": "porphyry",
    "sourceType": "author",
    "target": "proclus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-7",
    "source": "plotinus",
    "sourceType": "author",
    "target": "augustine",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-8",
    "source": "zeno-of-citium",
    "sourceType": "author",
    "target": "chrysippus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-9",
    "source": "chrysippus",
    "sourceType": "author",
    "target": "seneca",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-10",
    "source": "chrysippus",
    "sourceType": "author",
    "target": "epictetus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-11",
    "source": "epictetus",
    "sourceType": "author",
    "target": "marcus-aurelius",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-12",
    "source": "epicurus",
    "sourceType": "author",
    "target": "lucretius",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-13",
    "source": "pyrrho",
    "sourceType": "author",
    "target": "sextus-empiricus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-14",
    "source": "democritus",
    "sourceType": "author",
    "target": "epicurus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-15",
    "source": "heraclitus",
    "sourceType": "author",
    "target": "plato",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-16",
    "source": "parmenides",
    "sourceType": "author",
    "target": "plato",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-17",
    "source": "buddha",
    "sourceType": "author",
    "target": "nagarjuna",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-18",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "aryadeva",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-19",
    "source": "aryadeva",
    "sourceType": "author",
    "target": "chandrakirti",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-20",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "shantideva",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-21",
    "source": "buddha",
    "sourceType": "author",
    "target": "buddhaghosa",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-22",
    "source": "asanga",
    "sourceType": "author",
    "target": "vasubandhu",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-23",
    "source": "vasubandhu",
    "sourceType": "author",
    "target": "dignaga",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-24",
    "source": "dignaga",
    "sourceType": "author",
    "target": "dharmakirti",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-25",
    "source": "gaudapada",
    "sourceType": "author",
    "target": "shankara",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-26",
    "source": "shankara",
    "sourceType": "author",
    "target": "ramanuja",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-27",
    "source": "ramanuja",
    "sourceType": "author",
    "target": "madhva",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-28",
    "source": "kapila",
    "sourceType": "author",
    "target": "patanjali",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-29",
    "source": "gautama-aksapada",
    "sourceType": "author",
    "target": "kumarila-bhatta",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-30",
    "source": "vivekananda",
    "sourceType": "author",
    "target": "aurobindo",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-31",
    "source": "gandhi",
    "sourceType": "author",
    "target": "ambedkar",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-32",
    "source": "confucius",
    "sourceType": "author",
    "target": "mencius",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-33",
    "source": "confucius",
    "sourceType": "author",
    "target": "xunzi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-34",
    "source": "laozi",
    "sourceType": "author",
    "target": "zhuangzi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-35",
    "source": "mencius",
    "sourceType": "author",
    "target": "zhu-xi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-36",
    "source": "cheng-yi",
    "sourceType": "author",
    "target": "zhu-xi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-37",
    "source": "lu-jiuyuan",
    "sourceType": "author",
    "target": "wang-yangming",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-38",
    "source": "zhou-dunyi",
    "sourceType": "author",
    "target": "zhang-zai",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-39",
    "source": "zhang-zai",
    "sourceType": "author",
    "target": "cheng-yi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-40",
    "source": "xunzi",
    "sourceType": "author",
    "target": "han-fei",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-41",
    "source": "wang-fuzhi",
    "sourceType": "author",
    "target": "dai-zhen",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-42",
    "source": "al-kindi",
    "sourceType": "author",
    "target": "al-farabi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-43",
    "source": "al-farabi",
    "sourceType": "author",
    "target": "ibn-sina",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-44",
    "source": "ibn-sina",
    "sourceType": "author",
    "target": "al-ghazali",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-45",
    "source": "ibn-sina",
    "sourceType": "author",
    "target": "ibn-rushd",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-46",
    "source": "suhrawardi",
    "sourceType": "author",
    "target": "mulla-sadra",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-47",
    "source": "ibn-arabi",
    "sourceType": "author",
    "target": "mulla-sadra",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-48",
    "source": "plotinus",
    "sourceType": "author",
    "target": "ibn-arabi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-49",
    "source": "aristotle",
    "sourceType": "author",
    "target": "al-farabi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5,
    "explanation": "Aristotle transmitted through Syriac/Arabic translations"
  },
  {
    "id": "e-50",
    "source": "aristotle",
    "sourceType": "author",
    "target": "ibn-sina",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-51",
    "source": "ibn-sina",
    "sourceType": "author",
    "target": "aquinas",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5,
    "explanation": "Avicenna's metaphysics deeply influenced Aquinas"
  },
  {
    "id": "e-52",
    "source": "ibn-rushd",
    "sourceType": "author",
    "target": "aquinas",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5,
    "explanation": "Averroes' Aristotle commentaries shaped scholasticism"
  },
  {
    "id": "e-53",
    "source": "plotinus",
    "sourceType": "author",
    "target": "augustine",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-54",
    "source": "al-ghazali",
    "sourceType": "author",
    "target": "aquinas",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-55",
    "source": "descartes",
    "sourceType": "author",
    "target": "spinoza",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-56",
    "source": "descartes",
    "sourceType": "author",
    "target": "leibniz",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-57",
    "source": "descartes",
    "sourceType": "author",
    "target": "locke",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-58",
    "source": "locke",
    "sourceType": "author",
    "target": "berkeley",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-59",
    "source": "locke",
    "sourceType": "author",
    "target": "hume",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-60",
    "source": "hume",
    "sourceType": "author",
    "target": "kant",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5,
    "explanation": "Hume's skepticism awoke Kant from his \"dogmatic slumber\""
  },
  {
    "id": "e-61",
    "source": "kant",
    "sourceType": "author",
    "target": "fichte",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-62",
    "source": "fichte",
    "sourceType": "author",
    "target": "schelling",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-63",
    "source": "schelling",
    "sourceType": "author",
    "target": "hegel",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-64",
    "source": "hegel",
    "sourceType": "author",
    "target": "marx",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-65",
    "source": "hegel",
    "sourceType": "author",
    "target": "kierkegaard",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-66",
    "source": "schopenhauer",
    "sourceType": "author",
    "target": "nietzsche",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-67",
    "source": "kant",
    "sourceType": "author",
    "target": "schopenhauer",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-68",
    "source": "husserl",
    "sourceType": "author",
    "target": "heidegger",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-69",
    "source": "heidegger",
    "sourceType": "author",
    "target": "sartre",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-70",
    "source": "heidegger",
    "sourceType": "author",
    "target": "gadamer",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-71",
    "source": "heidegger",
    "sourceType": "author",
    "target": "levinas",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-72",
    "source": "husserl",
    "sourceType": "author",
    "target": "merleau-ponty",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-73",
    "source": "sartre",
    "sourceType": "author",
    "target": "beauvoir",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-74",
    "source": "kierkegaard",
    "sourceType": "author",
    "target": "heidegger",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-75",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "heidegger",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-76",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "foucault",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-77",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "derrida",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-78",
    "source": "frege",
    "sourceType": "author",
    "target": "russell",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-79",
    "source": "russell",
    "sourceType": "author",
    "target": "wittgenstein",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-80",
    "source": "wittgenstein",
    "sourceType": "author",
    "target": "carnap",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-81",
    "source": "carnap",
    "sourceType": "author",
    "target": "quine",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-82",
    "source": "peirce",
    "sourceType": "author",
    "target": "james",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-83",
    "source": "james",
    "sourceType": "author",
    "target": "dewey",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-84",
    "source": "dewey",
    "sourceType": "author",
    "target": "rorty",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-85",
    "source": "marx",
    "sourceType": "author",
    "target": "gramsci",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-86",
    "source": "marx",
    "sourceType": "author",
    "target": "lukacs",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-87",
    "source": "marx",
    "sourceType": "author",
    "target": "adorno",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-88",
    "source": "marx",
    "sourceType": "author",
    "target": "benjamin",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-89",
    "source": "adorno",
    "sourceType": "author",
    "target": "habermas",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-90",
    "source": "fanon",
    "sourceType": "author",
    "target": "said",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-91",
    "source": "fanon",
    "sourceType": "author",
    "target": "spivak",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-92",
    "source": "beauvoir",
    "sourceType": "author",
    "target": "butler",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-93",
    "source": "marx",
    "sourceType": "author",
    "target": "fanon",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-94",
    "source": "hegel",
    "sourceType": "author",
    "target": "dussel",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-95",
    "source": "derrida",
    "sourceType": "author",
    "target": "spivak",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-96",
    "source": "foucault",
    "sourceType": "author",
    "target": "butler",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-97",
    "source": "foucault",
    "sourceType": "author",
    "target": "said",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-98",
    "source": "sartre",
    "sourceType": "author",
    "target": "fanon",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-99",
    "source": "heidegger",
    "sourceType": "author",
    "target": "nishida-kitaro",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-100",
    "source": "james",
    "sourceType": "author",
    "target": "nishida-kitaro",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-101",
    "source": "thoreau",
    "sourceType": "author",
    "target": "gandhi",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-102",
    "source": "gandhi",
    "sourceType": "author",
    "target": "king",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-103",
    "source": "buddha",
    "sourceType": "author",
    "target": "dogen",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-104",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "tsongkhapa",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-105",
    "source": "huineng",
    "sourceType": "author",
    "target": "dogen",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-106",
    "source": "hobbes",
    "sourceType": "author",
    "target": "locke",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-107",
    "source": "locke",
    "sourceType": "author",
    "target": "rousseau",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-108",
    "source": "rousseau",
    "sourceType": "author",
    "target": "kant",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-109",
    "source": "bentham",
    "sourceType": "author",
    "target": "mill",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-110",
    "source": "plato",
    "sourceType": "author",
    "target": "philo-of-alexandria",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-111",
    "source": "maimonides",
    "sourceType": "author",
    "target": "spinoza",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-112",
    "source": "saadia-gaon",
    "sourceType": "author",
    "target": "maimonides",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-113",
    "source": "augustine",
    "sourceType": "author",
    "target": "anselm",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-114",
    "source": "anselm",
    "sourceType": "author",
    "target": "descartes",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-115",
    "source": "aquinas",
    "sourceType": "author",
    "target": "duns-scotus",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-116",
    "source": "duns-scotus",
    "sourceType": "author",
    "target": "william-of-ockham",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-117",
    "source": "shankara",
    "sourceType": "author",
    "target": "vivekananda",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-118",
    "source": "buddha",
    "sourceType": "author",
    "target": "huineng",
    "targetType": "author",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-119",
    "source": "socrates",
    "sourceType": "author",
    "target": "plato",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-120",
    "source": "plato",
    "sourceType": "author",
    "target": "aristotle",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-121",
    "source": "zeno-of-citium",
    "sourceType": "author",
    "target": "chrysippus",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-122",
    "source": "epictetus",
    "sourceType": "author",
    "target": "marcus-aurelius",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-123",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "aryadeva",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-124",
    "source": "asanga",
    "sourceType": "author",
    "target": "vasubandhu",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-125",
    "source": "dignaga",
    "sourceType": "author",
    "target": "dharmakirti",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-126",
    "source": "gaudapada",
    "sourceType": "author",
    "target": "shankara",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-127",
    "source": "confucius",
    "sourceType": "author",
    "target": "mencius",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-128",
    "source": "cheng-yi",
    "sourceType": "author",
    "target": "zhu-xi",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-129",
    "source": "lu-jiuyuan",
    "sourceType": "author",
    "target": "wang-yangming",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-130",
    "source": "al-farabi",
    "sourceType": "author",
    "target": "ibn-sina",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-131",
    "source": "husserl",
    "sourceType": "author",
    "target": "heidegger",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-132",
    "source": "heidegger",
    "sourceType": "author",
    "target": "gadamer",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-133",
    "source": "heidegger",
    "sourceType": "author",
    "target": "arendt",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-134",
    "source": "russell",
    "sourceType": "author",
    "target": "wittgenstein",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-135",
    "source": "peirce",
    "sourceType": "author",
    "target": "james",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-136",
    "source": "nishida-kitaro",
    "sourceType": "author",
    "target": "tanabe-hajime",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-137",
    "source": "nishida-kitaro",
    "sourceType": "author",
    "target": "nishitani-keiji",
    "targetType": "author",
    "relationType": "teacher_of",
    "certainty": 5
  },
  {
    "id": "e-138",
    "source": "al-ghazali",
    "sourceType": "author",
    "target": "ibn-rushd",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5,
    "explanation": "Al-Ghazali's Incoherence critiqued philosophers; Ibn Rushd responded"
  },
  {
    "id": "e-139",
    "source": "ibn-rushd",
    "sourceType": "author",
    "target": "al-ghazali",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-140",
    "source": "plato",
    "sourceType": "author",
    "target": "protagoras",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-141",
    "source": "protagoras",
    "sourceType": "author",
    "target": "plato",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-142",
    "source": "aristotle",
    "sourceType": "author",
    "target": "plato",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-143",
    "source": "plato",
    "sourceType": "author",
    "target": "aristotle",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-144",
    "source": "shankara",
    "sourceType": "author",
    "target": "nagarjuna",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 3,
    "explanation": "Shankara critiqued Buddhist emptiness while developing similar arguments"
  },
  {
    "id": "e-145",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "shankara",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 3
  },
  {
    "id": "e-146",
    "source": "carnap",
    "sourceType": "author",
    "target": "heidegger",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-147",
    "source": "heidegger",
    "sourceType": "author",
    "target": "carnap",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-148",
    "source": "kierkegaard",
    "sourceType": "author",
    "target": "hegel",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-149",
    "source": "hegel",
    "sourceType": "author",
    "target": "kierkegaard",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-150",
    "source": "marx",
    "sourceType": "author",
    "target": "hegel",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-151",
    "source": "hegel",
    "sourceType": "author",
    "target": "marx",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-152",
    "source": "rawls",
    "sourceType": "author",
    "target": "nozick",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-153",
    "source": "nozick",
    "sourceType": "author",
    "target": "rawls",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-154",
    "source": "habermas",
    "sourceType": "author",
    "target": "gadamer",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-155",
    "source": "gadamer",
    "sourceType": "author",
    "target": "habermas",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-156",
    "source": "habermas",
    "sourceType": "author",
    "target": "foucault",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-157",
    "source": "foucault",
    "sourceType": "author",
    "target": "habermas",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-158",
    "source": "popper",
    "sourceType": "author",
    "target": "kuhn",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-159",
    "source": "kuhn",
    "sourceType": "author",
    "target": "popper",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-160",
    "source": "mencius",
    "sourceType": "author",
    "target": "xunzi",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-161",
    "source": "xunzi",
    "sourceType": "author",
    "target": "mencius",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-162",
    "source": "confucius",
    "sourceType": "author",
    "target": "mozi",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-163",
    "source": "mozi",
    "sourceType": "author",
    "target": "confucius",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-164",
    "source": "zhu-xi",
    "sourceType": "author",
    "target": "wang-yangming",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-165",
    "source": "wang-yangming",
    "sourceType": "author",
    "target": "zhu-xi",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-166",
    "source": "zhu-xi",
    "sourceType": "author",
    "target": "lu-jiuyuan",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-167",
    "source": "lu-jiuyuan",
    "sourceType": "author",
    "target": "zhu-xi",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-168",
    "source": "sartre",
    "sourceType": "author",
    "target": "camus",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-169",
    "source": "camus",
    "sourceType": "author",
    "target": "sartre",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-170",
    "source": "derrida",
    "sourceType": "author",
    "target": "searle",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-171",
    "source": "searle",
    "sourceType": "author",
    "target": "derrida",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-172",
    "source": "kumarila-bhatta",
    "sourceType": "author",
    "target": "dharmakirti",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-173",
    "source": "dharmakirti",
    "sourceType": "author",
    "target": "kumarila-bhatta",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-174",
    "source": "senghor",
    "sourceType": "author",
    "target": "wiredu",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 3
  },
  {
    "id": "e-175",
    "source": "wiredu",
    "sourceType": "author",
    "target": "senghor",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 3
  },
  {
    "id": "e-176",
    "source": "shankara",
    "sourceType": "author",
    "target": "ramanuja",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-177",
    "source": "ramanuja",
    "sourceType": "author",
    "target": "shankara",
    "targetType": "author",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-178",
    "source": "plato",
    "sourceType": "author",
    "target": "republic",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-179",
    "source": "plato",
    "sourceType": "author",
    "target": "symposium",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-180",
    "source": "plato",
    "sourceType": "author",
    "target": "phaedo",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-181",
    "source": "plato",
    "sourceType": "author",
    "target": "timaeus",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-182",
    "source": "plato",
    "sourceType": "author",
    "target": "meno",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-183",
    "source": "plato",
    "sourceType": "author",
    "target": "phaedrus",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-184",
    "source": "aristotle",
    "sourceType": "author",
    "target": "nicomachean-ethics",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-185",
    "source": "aristotle",
    "sourceType": "author",
    "target": "metaphysics-aristotle",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-186",
    "source": "aristotle",
    "sourceType": "author",
    "target": "physics-aristotle",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-187",
    "source": "aristotle",
    "sourceType": "author",
    "target": "politics-aristotle",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-188",
    "source": "aristotle",
    "sourceType": "author",
    "target": "de-anima",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-189",
    "source": "aristotle",
    "sourceType": "author",
    "target": "categories",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-190",
    "source": "aristotle",
    "sourceType": "author",
    "target": "poetics-aristotle",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-191",
    "source": "marcus-aurelius",
    "sourceType": "author",
    "target": "meditations",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-192",
    "source": "epictetus",
    "sourceType": "author",
    "target": "discourses-epictetus",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-193",
    "source": "epictetus",
    "sourceType": "author",
    "target": "enchiridion",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-194",
    "source": "seneca",
    "sourceType": "author",
    "target": "letters-seneca",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-195",
    "source": "seneca",
    "sourceType": "author",
    "target": "on-the-shortness-of-life",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-196",
    "source": "lucretius",
    "sourceType": "author",
    "target": "on-the-nature-of-things",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-197",
    "source": "epicurus",
    "sourceType": "author",
    "target": "letter-to-menoeceus",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-198",
    "source": "sextus-empiricus",
    "sourceType": "author",
    "target": "outlines-of-pyrrhonism",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-199",
    "source": "cicero",
    "sourceType": "author",
    "target": "on-duties",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-200",
    "source": "plotinus",
    "sourceType": "author",
    "target": "enneads",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-201",
    "source": "proclus",
    "sourceType": "author",
    "target": "elements-of-theology",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-202",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "mulamadhyamakakarika",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-203",
    "source": "vasubandhu",
    "sourceType": "author",
    "target": "abhidharmakosa",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-204",
    "source": "shankara",
    "sourceType": "author",
    "target": "brahma-sutra-bhashya",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-205",
    "source": "shankara",
    "sourceType": "author",
    "target": "vivekachudamani",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-206",
    "source": "ramanuja",
    "sourceType": "author",
    "target": "sri-bhashya",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-207",
    "source": "patanjali",
    "sourceType": "author",
    "target": "yoga-sutras",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-208",
    "source": "buddhaghosa",
    "sourceType": "author",
    "target": "visuddhimagga",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-209",
    "source": "shantideva",
    "sourceType": "author",
    "target": "bodhicaryavatara",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-210",
    "source": "chandrakirti",
    "sourceType": "author",
    "target": "madhyamakavatara",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-211",
    "source": "tsongkhapa",
    "sourceType": "author",
    "target": "lamrim-chenmo",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-212",
    "source": "dogen",
    "sourceType": "author",
    "target": "shobogenzo",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-213",
    "source": "confucius",
    "sourceType": "author",
    "target": "analects",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-214",
    "source": "laozi",
    "sourceType": "author",
    "target": "daodejing",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-215",
    "source": "zhuangzi",
    "sourceType": "author",
    "target": "zhuangzi-text",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-216",
    "source": "mencius",
    "sourceType": "author",
    "target": "mencius-text",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-217",
    "source": "xunzi",
    "sourceType": "author",
    "target": "xunzi-text",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-218",
    "source": "mozi",
    "sourceType": "author",
    "target": "mozi-text",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-219",
    "source": "han-fei",
    "sourceType": "author",
    "target": "han-feizi",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-220",
    "source": "zhu-xi",
    "sourceType": "author",
    "target": "reflections-on-things-at-hand",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-221",
    "source": "wang-yangming",
    "sourceType": "author",
    "target": "instructions-for-practical-living",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-222",
    "source": "huineng",
    "sourceType": "author",
    "target": "platform-sutra",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-223",
    "source": "al-kindi",
    "sourceType": "author",
    "target": "on-first-philosophy",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-224",
    "source": "al-farabi",
    "sourceType": "author",
    "target": "virtuous-city",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-225",
    "source": "ibn-sina",
    "sourceType": "author",
    "target": "book-of-healing",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-226",
    "source": "al-ghazali",
    "sourceType": "author",
    "target": "incoherence-of-philosophers",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-227",
    "source": "al-ghazali",
    "sourceType": "author",
    "target": "deliverance-from-error",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-228",
    "source": "ibn-rushd",
    "sourceType": "author",
    "target": "incoherence-of-incoherence",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-229",
    "source": "ibn-tufayl",
    "sourceType": "author",
    "target": "hayy-ibn-yaqzan",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-230",
    "source": "ibn-khaldun",
    "sourceType": "author",
    "target": "muqaddimah",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-231",
    "source": "ibn-arabi",
    "sourceType": "author",
    "target": "fusus-al-hikam",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-232",
    "source": "suhrawardi",
    "sourceType": "author",
    "target": "philosophy-of-illumination",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-233",
    "source": "mulla-sadra",
    "sourceType": "author",
    "target": "transcendent-theosophy",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-234",
    "source": "maimonides",
    "sourceType": "author",
    "target": "guide-for-the-perplexed",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-235",
    "source": "saadia-gaon",
    "sourceType": "author",
    "target": "book-of-beliefs-and-opinions",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-236",
    "source": "judah-halevi",
    "sourceType": "author",
    "target": "kuzari",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-237",
    "source": "spinoza",
    "sourceType": "author",
    "target": "ethics-spinoza",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-238",
    "source": "buber",
    "sourceType": "author",
    "target": "i-and-thou",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-239",
    "source": "levinas",
    "sourceType": "author",
    "target": "totality-and-infinity",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-240",
    "source": "augustine",
    "sourceType": "author",
    "target": "confessions-augustine",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-241",
    "source": "augustine",
    "sourceType": "author",
    "target": "city-of-god",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-242",
    "source": "boethius",
    "sourceType": "author",
    "target": "consolation-of-philosophy",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-243",
    "source": "anselm",
    "sourceType": "author",
    "target": "proslogion",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-244",
    "source": "abelard",
    "sourceType": "author",
    "target": "sic-et-non",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-245",
    "source": "aquinas",
    "sourceType": "author",
    "target": "summa-theologiae",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-246",
    "source": "aquinas",
    "sourceType": "author",
    "target": "summa-contra-gentiles",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-247",
    "source": "william-of-ockham",
    "sourceType": "author",
    "target": "summa-logicae",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-248",
    "source": "nicholas-of-cusa",
    "sourceType": "author",
    "target": "de-docta-ignorantia",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-249",
    "source": "descartes",
    "sourceType": "author",
    "target": "meditations-on-first-philosophy",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-250",
    "source": "descartes",
    "sourceType": "author",
    "target": "discourse-on-method",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-251",
    "source": "hobbes",
    "sourceType": "author",
    "target": "leviathan",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-252",
    "source": "locke",
    "sourceType": "author",
    "target": "essay-concerning-human-understanding",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-253",
    "source": "hume",
    "sourceType": "author",
    "target": "treatise-of-human-nature",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-254",
    "source": "leibniz",
    "sourceType": "author",
    "target": "monadology",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-255",
    "source": "kant",
    "sourceType": "author",
    "target": "critique-of-pure-reason",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-256",
    "source": "kant",
    "sourceType": "author",
    "target": "critique-of-practical-reason",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-257",
    "source": "kant",
    "sourceType": "author",
    "target": "groundwork-metaphysics-morals",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-258",
    "source": "hegel",
    "sourceType": "author",
    "target": "phenomenology-of-spirit",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-259",
    "source": "hegel",
    "sourceType": "author",
    "target": "science-of-logic",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-260",
    "source": "schopenhauer",
    "sourceType": "author",
    "target": "world-as-will",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-261",
    "source": "kierkegaard",
    "sourceType": "author",
    "target": "either-or",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-262",
    "source": "kierkegaard",
    "sourceType": "author",
    "target": "fear-and-trembling",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-263",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "beyond-good-and-evil",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-264",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "thus-spoke-zarathustra",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-265",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "genealogy-of-morals",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-266",
    "source": "marx",
    "sourceType": "author",
    "target": "capital",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-267",
    "source": "marx",
    "sourceType": "author",
    "target": "communist-manifesto",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-268",
    "source": "mill",
    "sourceType": "author",
    "target": "on-liberty",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-269",
    "source": "mill",
    "sourceType": "author",
    "target": "utilitarianism-mill",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-270",
    "source": "husserl",
    "sourceType": "author",
    "target": "logical-investigations",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-271",
    "source": "husserl",
    "sourceType": "author",
    "target": "ideas-husserl",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-272",
    "source": "heidegger",
    "sourceType": "author",
    "target": "being-and-time",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-273",
    "source": "sartre",
    "sourceType": "author",
    "target": "being-and-nothingness",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-274",
    "source": "beauvoir",
    "sourceType": "author",
    "target": "the-second-sex",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-275",
    "source": "camus",
    "sourceType": "author",
    "target": "myth-of-sisyphus",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-276",
    "source": "merleau-ponty",
    "sourceType": "author",
    "target": "phenomenology-of-perception",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-277",
    "source": "gadamer",
    "sourceType": "author",
    "target": "truth-and-method",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-278",
    "source": "arendt",
    "sourceType": "author",
    "target": "human-condition",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-279",
    "source": "wittgenstein",
    "sourceType": "author",
    "target": "tractatus",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-280",
    "source": "wittgenstein",
    "sourceType": "author",
    "target": "philosophical-investigations",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-281",
    "source": "russell",
    "sourceType": "author",
    "target": "principia-mathematica",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-282",
    "source": "rawls",
    "sourceType": "author",
    "target": "theory-of-justice",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-283",
    "source": "kripke",
    "sourceType": "author",
    "target": "naming-and-necessity",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-284",
    "source": "foucault",
    "sourceType": "author",
    "target": "discipline-and-punish",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-285",
    "source": "foucault",
    "sourceType": "author",
    "target": "order-of-things",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-286",
    "source": "derrida",
    "sourceType": "author",
    "target": "of-grammatology",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-287",
    "source": "deleuze",
    "sourceType": "author",
    "target": "difference-and-repetition",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-288",
    "source": "adorno",
    "sourceType": "author",
    "target": "dialectic-of-enlightenment",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-289",
    "source": "marcuse",
    "sourceType": "author",
    "target": "one-dimensional-man",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-290",
    "source": "gramsci",
    "sourceType": "author",
    "target": "prison-notebooks",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-291",
    "source": "kuhn",
    "sourceType": "author",
    "target": "structure-scientific-revolutions",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-292",
    "source": "popper",
    "sourceType": "author",
    "target": "logic-of-scientific-discovery",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-293",
    "source": "quine",
    "sourceType": "author",
    "target": "word-and-object",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-294",
    "source": "nishida-kitaro",
    "sourceType": "author",
    "target": "inquiry-into-the-good",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-295",
    "source": "zera-yacob",
    "sourceType": "author",
    "target": "hatata",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-296",
    "source": "nkrumah",
    "sourceType": "author",
    "target": "consciencism",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-297",
    "source": "fanon",
    "sourceType": "author",
    "target": "wretched-of-the-earth",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-298",
    "source": "fanon",
    "sourceType": "author",
    "target": "black-skin-white-masks",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-299",
    "source": "said",
    "sourceType": "author",
    "target": "orientalism",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-300",
    "source": "spivak",
    "sourceType": "author",
    "target": "can-the-subaltern-speak",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-301",
    "source": "freire",
    "sourceType": "author",
    "target": "pedagogy-of-the-oppressed",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-302",
    "source": "butler",
    "sourceType": "author",
    "target": "gender-trouble",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-303",
    "source": "dussel",
    "sourceType": "author",
    "target": "philosophy-of-liberation",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-304",
    "source": "wollstonecraft",
    "sourceType": "author",
    "target": "vindication-rights-woman",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-305",
    "source": "emerson",
    "sourceType": "author",
    "target": "nature-emerson",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-306",
    "source": "james",
    "sourceType": "author",
    "target": "pragmatism-james",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-307",
    "source": "dewey",
    "sourceType": "author",
    "target": "democracy-and-education",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-308",
    "source": "du-bois",
    "sourceType": "author",
    "target": "souls-of-black-folk",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-309",
    "source": "whitehead",
    "sourceType": "author",
    "target": "process-and-reality",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-310",
    "source": "habermas",
    "sourceType": "author",
    "target": "theory-communicative-action",
    "targetType": "text",
    "relationType": "wrote",
    "certainty": 5
  },
  {
    "id": "e-311",
    "source": "plato",
    "sourceType": "author",
    "target": "platonism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-312",
    "source": "aristotle",
    "sourceType": "author",
    "target": "aristotelianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-313",
    "source": "zeno-of-citium",
    "sourceType": "author",
    "target": "stoicism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-314",
    "source": "epicurus",
    "sourceType": "author",
    "target": "epicureanism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-315",
    "source": "pyrrho",
    "sourceType": "author",
    "target": "skepticism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-316",
    "source": "plotinus",
    "sourceType": "author",
    "target": "neoplatonism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-317",
    "source": "diogenes-of-sinope",
    "sourceType": "author",
    "target": "cynicism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-318",
    "source": "socrates",
    "sourceType": "author",
    "target": "platonism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-319",
    "source": "seneca",
    "sourceType": "author",
    "target": "stoicism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-320",
    "source": "epictetus",
    "sourceType": "author",
    "target": "stoicism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-321",
    "source": "marcus-aurelius",
    "sourceType": "author",
    "target": "stoicism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-322",
    "source": "lucretius",
    "sourceType": "author",
    "target": "epicureanism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-323",
    "source": "sextus-empiricus",
    "sourceType": "author",
    "target": "skepticism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-324",
    "source": "proclus",
    "sourceType": "author",
    "target": "neoplatonism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-325",
    "source": "hypatia",
    "sourceType": "author",
    "target": "neoplatonism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-326",
    "source": "cicero",
    "sourceType": "author",
    "target": "stoicism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-327",
    "source": "buddha",
    "sourceType": "author",
    "target": "theravada-buddhism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-328",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "madhyamaka",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-329",
    "source": "asanga",
    "sourceType": "author",
    "target": "yogacara",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-330",
    "source": "vasubandhu",
    "sourceType": "author",
    "target": "yogacara",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-331",
    "source": "huineng",
    "sourceType": "author",
    "target": "zen-buddhism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-332",
    "source": "dogen",
    "sourceType": "author",
    "target": "zen-buddhism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-333",
    "source": "tsongkhapa",
    "sourceType": "author",
    "target": "tibetan-buddhism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-334",
    "source": "buddhaghosa",
    "sourceType": "author",
    "target": "theravada-buddhism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-335",
    "source": "shankara",
    "sourceType": "author",
    "target": "advaita-vedanta",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-336",
    "source": "ramanuja",
    "sourceType": "author",
    "target": "vedanta",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-337",
    "source": "madhva",
    "sourceType": "author",
    "target": "vedanta",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-338",
    "source": "patanjali",
    "sourceType": "author",
    "target": "yoga-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-339",
    "source": "gautama-aksapada",
    "sourceType": "author",
    "target": "nyaya",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-340",
    "source": "kanada",
    "sourceType": "author",
    "target": "vaisheshika",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-341",
    "source": "kapila",
    "sourceType": "author",
    "target": "samkhya",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-342",
    "source": "mahavira",
    "sourceType": "author",
    "target": "jainism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-343",
    "source": "confucius",
    "sourceType": "author",
    "target": "confucianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-344",
    "source": "laozi",
    "sourceType": "author",
    "target": "daoism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-345",
    "source": "zhuangzi",
    "sourceType": "author",
    "target": "daoism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-346",
    "source": "mencius",
    "sourceType": "author",
    "target": "confucianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-347",
    "source": "xunzi",
    "sourceType": "author",
    "target": "confucianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-348",
    "source": "mozi",
    "sourceType": "author",
    "target": "mohism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-349",
    "source": "han-fei",
    "sourceType": "author",
    "target": "legalism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-350",
    "source": "zhu-xi",
    "sourceType": "author",
    "target": "neo-confucianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-351",
    "source": "wang-yangming",
    "sourceType": "author",
    "target": "neo-confucianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-352",
    "source": "zhang-zai",
    "sourceType": "author",
    "target": "neo-confucianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-353",
    "source": "al-farabi",
    "sourceType": "author",
    "target": "islamic-falsafa",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-354",
    "source": "ibn-sina",
    "sourceType": "author",
    "target": "islamic-falsafa",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-355",
    "source": "ibn-rushd",
    "sourceType": "author",
    "target": "islamic-falsafa",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-356",
    "source": "al-ghazali",
    "sourceType": "author",
    "target": "kalam",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-357",
    "source": "ibn-arabi",
    "sourceType": "author",
    "target": "sufism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-358",
    "source": "suhrawardi",
    "sourceType": "author",
    "target": "islamic-falsafa",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-359",
    "source": "mulla-sadra",
    "sourceType": "author",
    "target": "islamic-falsafa",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-360",
    "source": "maimonides",
    "sourceType": "author",
    "target": "jewish-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-361",
    "source": "spinoza",
    "sourceType": "author",
    "target": "rationalism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-362",
    "source": "buber",
    "sourceType": "author",
    "target": "jewish-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-363",
    "source": "levinas",
    "sourceType": "author",
    "target": "phenomenology",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-364",
    "source": "augustine",
    "sourceType": "author",
    "target": "augustinianism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-365",
    "source": "aquinas",
    "sourceType": "author",
    "target": "thomism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-366",
    "source": "duns-scotus",
    "sourceType": "author",
    "target": "scholasticism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-367",
    "source": "william-of-ockham",
    "sourceType": "author",
    "target": "nominalism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-368",
    "source": "descartes",
    "sourceType": "author",
    "target": "rationalism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-369",
    "source": "locke",
    "sourceType": "author",
    "target": "empiricism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-370",
    "source": "hume",
    "sourceType": "author",
    "target": "empiricism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-371",
    "source": "berkeley",
    "sourceType": "author",
    "target": "empiricism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-372",
    "source": "kant",
    "sourceType": "author",
    "target": "german-idealism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-373",
    "source": "hegel",
    "sourceType": "author",
    "target": "german-idealism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-374",
    "source": "fichte",
    "sourceType": "author",
    "target": "german-idealism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-375",
    "source": "schelling",
    "sourceType": "author",
    "target": "german-idealism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-376",
    "source": "kierkegaard",
    "sourceType": "author",
    "target": "existentialism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-377",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "existentialism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-378",
    "source": "sartre",
    "sourceType": "author",
    "target": "existentialism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-379",
    "source": "beauvoir",
    "sourceType": "author",
    "target": "existentialism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-380",
    "source": "heidegger",
    "sourceType": "author",
    "target": "phenomenology",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-381",
    "source": "husserl",
    "sourceType": "author",
    "target": "phenomenology",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-382",
    "source": "merleau-ponty",
    "sourceType": "author",
    "target": "phenomenology",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-383",
    "source": "wittgenstein",
    "sourceType": "author",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-384",
    "source": "russell",
    "sourceType": "author",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-385",
    "source": "frege",
    "sourceType": "author",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-386",
    "source": "carnap",
    "sourceType": "author",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-387",
    "source": "quine",
    "sourceType": "author",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-388",
    "source": "kripke",
    "sourceType": "author",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-389",
    "source": "peirce",
    "sourceType": "author",
    "target": "pragmatism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-390",
    "source": "james",
    "sourceType": "author",
    "target": "pragmatism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-391",
    "source": "dewey",
    "sourceType": "author",
    "target": "pragmatism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-392",
    "source": "rorty",
    "sourceType": "author",
    "target": "pragmatism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-393",
    "source": "marx",
    "sourceType": "author",
    "target": "marxism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-394",
    "source": "gramsci",
    "sourceType": "author",
    "target": "marxism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-395",
    "source": "adorno",
    "sourceType": "author",
    "target": "critical-theory",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-396",
    "source": "habermas",
    "sourceType": "author",
    "target": "critical-theory",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-397",
    "source": "beauvoir",
    "sourceType": "author",
    "target": "feminist-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-398",
    "source": "butler",
    "sourceType": "author",
    "target": "feminist-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-399",
    "source": "wollstonecraft",
    "sourceType": "author",
    "target": "feminist-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-400",
    "source": "fanon",
    "sourceType": "author",
    "target": "postcolonial-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-401",
    "source": "said",
    "sourceType": "author",
    "target": "postcolonial-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-402",
    "source": "spivak",
    "sourceType": "author",
    "target": "postcolonial-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-403",
    "source": "nishida-kitaro",
    "sourceType": "author",
    "target": "kyoto-school",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-404",
    "source": "nkrumah",
    "sourceType": "author",
    "target": "africana-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-405",
    "source": "wiredu",
    "sourceType": "author",
    "target": "africana-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-406",
    "source": "dussel",
    "sourceType": "author",
    "target": "latin-american-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-407",
    "source": "freire",
    "sourceType": "author",
    "target": "latin-american-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-408",
    "source": "du-bois",
    "sourceType": "author",
    "target": "africana-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-409",
    "source": "rawls",
    "sourceType": "author",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-410",
    "source": "whitehead",
    "sourceType": "author",
    "target": "process-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-411",
    "source": "foucault",
    "sourceType": "author",
    "target": "post-structuralism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-412",
    "source": "derrida",
    "sourceType": "author",
    "target": "post-structuralism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-413",
    "source": "deleuze",
    "sourceType": "author",
    "target": "post-structuralism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-414",
    "source": "gadamer",
    "sourceType": "author",
    "target": "hermeneutics",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-415",
    "source": "nishitani-keiji",
    "sourceType": "author",
    "target": "kyoto-school",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-416",
    "source": "tanabe-hajime",
    "sourceType": "author",
    "target": "kyoto-school",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-417",
    "source": "ramose",
    "sourceType": "author",
    "target": "ubuntu-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-418",
    "source": "mbembe",
    "sourceType": "author",
    "target": "postcolonial-philosophy",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-419",
    "source": "cornel-west",
    "sourceType": "author",
    "target": "pragmatism",
    "targetType": "tradition",
    "relationType": "belongs_to",
    "certainty": 5
  },
  {
    "id": "e-420",
    "source": "platonism",
    "sourceType": "tradition",
    "target": "neoplatonism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-421",
    "source": "neoplatonism",
    "sourceType": "tradition",
    "target": "augustinianism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-422",
    "source": "aristotelianism",
    "sourceType": "tradition",
    "target": "islamic-falsafa",
    "targetType": "tradition",
    "relationType": "transmitted_to",
    "certainty": 5
  },
  {
    "id": "e-423",
    "source": "islamic-falsafa",
    "sourceType": "tradition",
    "target": "scholasticism",
    "targetType": "tradition",
    "relationType": "transmitted_to",
    "certainty": 5
  },
  {
    "id": "e-424",
    "source": "neoplatonism",
    "sourceType": "tradition",
    "target": "islamic-falsafa",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-425",
    "source": "neoplatonism",
    "sourceType": "tradition",
    "target": "sufism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-426",
    "source": "confucianism",
    "sourceType": "tradition",
    "target": "neo-confucianism",
    "targetType": "tradition",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-427",
    "source": "daoism",
    "sourceType": "tradition",
    "target": "zen-buddhism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-428",
    "source": "theravada-buddhism",
    "sourceType": "tradition",
    "target": "madhyamaka",
    "targetType": "tradition",
    "relationType": "historically_connected",
    "certainty": 5
  },
  {
    "id": "e-429",
    "source": "madhyamaka",
    "sourceType": "tradition",
    "target": "tibetan-buddhism",
    "targetType": "tradition",
    "relationType": "transmitted_to",
    "certainty": 5
  },
  {
    "id": "e-430",
    "source": "madhyamaka",
    "sourceType": "tradition",
    "target": "zen-buddhism",
    "targetType": "tradition",
    "relationType": "transmitted_to",
    "certainty": 4
  },
  {
    "id": "e-431",
    "source": "yogacara",
    "sourceType": "tradition",
    "target": "zen-buddhism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-432",
    "source": "german-idealism",
    "sourceType": "tradition",
    "target": "existentialism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-433",
    "source": "german-idealism",
    "sourceType": "tradition",
    "target": "marxism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-434",
    "source": "phenomenology",
    "sourceType": "tradition",
    "target": "existentialism",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-435",
    "source": "empiricism",
    "sourceType": "tradition",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-436",
    "source": "stoicism",
    "sourceType": "tradition",
    "target": "epicureanism",
    "targetType": "tradition",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-437",
    "source": "confucianism",
    "sourceType": "tradition",
    "target": "daoism",
    "targetType": "tradition",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-438",
    "source": "confucianism",
    "sourceType": "tradition",
    "target": "mohism",
    "targetType": "tradition",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-439",
    "source": "vedanta",
    "sourceType": "tradition",
    "target": "madhyamaka",
    "targetType": "tradition",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-440",
    "source": "scholasticism",
    "sourceType": "tradition",
    "target": "rationalism",
    "targetType": "tradition",
    "relationType": "historically_connected",
    "certainty": 4
  },
  {
    "id": "e-441",
    "source": "rationalism",
    "sourceType": "tradition",
    "target": "empiricism",
    "targetType": "tradition",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-442",
    "source": "pragmatism",
    "sourceType": "tradition",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "parallels",
    "certainty": 3
  },
  {
    "id": "e-443",
    "source": "existentialism",
    "sourceType": "tradition",
    "target": "analytic-philosophy",
    "targetType": "tradition",
    "relationType": "debated",
    "certainty": 3
  },
  {
    "id": "e-444",
    "source": "marxism",
    "sourceType": "tradition",
    "target": "critical-theory",
    "targetType": "tradition",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-445",
    "source": "critical-theory",
    "sourceType": "tradition",
    "target": "postcolonial-philosophy",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-446",
    "source": "existentialism",
    "sourceType": "tradition",
    "target": "feminist-philosophy",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-447",
    "source": "advaita-vedanta",
    "sourceType": "tradition",
    "target": "zen-buddhism",
    "targetType": "tradition",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-448",
    "source": "stoicism",
    "sourceType": "tradition",
    "target": "confucianism",
    "targetType": "tradition",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-449",
    "source": "daoism",
    "sourceType": "tradition",
    "target": "process-philosophy",
    "targetType": "tradition",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-450",
    "source": "platonism",
    "sourceType": "tradition",
    "target": "vedanta",
    "targetType": "tradition",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-451",
    "source": "neoplatonism",
    "sourceType": "tradition",
    "target": "kabbalah",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 3
  },
  {
    "id": "e-452",
    "source": "post-structuralism",
    "sourceType": "tradition",
    "target": "postcolonial-philosophy",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-453",
    "source": "post-structuralism",
    "sourceType": "tradition",
    "target": "feminist-philosophy",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-454",
    "source": "samkhya",
    "sourceType": "tradition",
    "target": "yoga-philosophy",
    "targetType": "tradition",
    "relationType": "historically_connected",
    "certainty": 5
  },
  {
    "id": "e-455",
    "source": "nyaya",
    "sourceType": "tradition",
    "target": "vaisheshika",
    "targetType": "tradition",
    "relationType": "historically_connected",
    "certainty": 5
  },
  {
    "id": "e-456",
    "source": "thomism",
    "sourceType": "tradition",
    "target": "scholasticism",
    "targetType": "tradition",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-457",
    "source": "nominalism",
    "sourceType": "tradition",
    "target": "scholasticism",
    "targetType": "tradition",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-458",
    "source": "zen-buddhism",
    "sourceType": "tradition",
    "target": "kyoto-school",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 5
  },
  {
    "id": "e-459",
    "source": "phenomenology",
    "sourceType": "tradition",
    "target": "kyoto-school",
    "targetType": "tradition",
    "relationType": "influenced",
    "certainty": 4
  },
  {
    "id": "e-460",
    "source": "emptiness",
    "sourceType": "concept",
    "target": "nothingness",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 3
  },
  {
    "id": "e-461",
    "source": "dharma",
    "sourceType": "concept",
    "target": "duty",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-462",
    "source": "dao",
    "sourceType": "concept",
    "target": "logos",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-463",
    "source": "ren",
    "sourceType": "concept",
    "target": "virtue",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 3
  },
  {
    "id": "e-464",
    "source": "brahman",
    "sourceType": "concept",
    "target": "the-one",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 3
  },
  {
    "id": "e-465",
    "source": "atman",
    "sourceType": "concept",
    "target": "soul",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 3
  },
  {
    "id": "e-466",
    "source": "maya",
    "sourceType": "concept",
    "target": "phenomena",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-467",
    "source": "moksha",
    "sourceType": "concept",
    "target": "nirvana",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 4
  },
  {
    "id": "e-468",
    "source": "maat",
    "sourceType": "concept",
    "target": "justice",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-469",
    "source": "ubuntu",
    "sourceType": "concept",
    "target": "community",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 4
  },
  {
    "id": "e-470",
    "source": "karma",
    "sourceType": "concept",
    "target": "justice",
    "targetType": "concept",
    "relationType": "parallels",
    "certainty": 2
  },
  {
    "id": "e-471",
    "source": "free-will",
    "sourceType": "concept",
    "target": "determinism",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-472",
    "source": "idealism",
    "sourceType": "concept",
    "target": "materialism",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-473",
    "source": "atman",
    "sourceType": "concept",
    "target": "no-self",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-474",
    "source": "being",
    "sourceType": "concept",
    "target": "nothingness",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-475",
    "source": "good",
    "sourceType": "concept",
    "target": "evil",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-476",
    "source": "dualism",
    "sourceType": "concept",
    "target": "monism",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-477",
    "source": "emptiness",
    "sourceType": "concept",
    "target": "dependent-origination",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 5
  },
  {
    "id": "e-478",
    "source": "virtue",
    "sourceType": "concept",
    "target": "eudaimonia",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 5
  },
  {
    "id": "e-479",
    "source": "consciousness",
    "sourceType": "concept",
    "target": "mind",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 5
  },
  {
    "id": "e-480",
    "source": "essence",
    "sourceType": "concept",
    "target": "existence",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 4
  },
  {
    "id": "e-481",
    "source": "dao",
    "sourceType": "concept",
    "target": "wuwei",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 5
  },
  {
    "id": "e-482",
    "source": "li-principle",
    "sourceType": "concept",
    "target": "qi",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 5
  },
  {
    "id": "e-483",
    "source": "brahman",
    "sourceType": "concept",
    "target": "atman",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 5
  },
  {
    "id": "e-484",
    "source": "prakriti",
    "sourceType": "concept",
    "target": "purusha",
    "targetType": "concept",
    "relationType": "debated",
    "certainty": 5
  },
  {
    "id": "e-485",
    "source": "satori",
    "sourceType": "concept",
    "target": "enlightenment-bodhi",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 5
  },
  {
    "id": "e-486",
    "source": "logos",
    "sourceType": "concept",
    "target": "reason",
    "targetType": "concept",
    "relationType": "shares_concept",
    "certainty": 4
  },
  {
    "id": "e-487",
    "source": "plato",
    "sourceType": "author",
    "target": "forms",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-488",
    "source": "plato",
    "sourceType": "author",
    "target": "justice",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-489",
    "source": "plato",
    "sourceType": "author",
    "target": "good",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-490",
    "source": "aristotle",
    "sourceType": "author",
    "target": "substance",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-491",
    "source": "aristotle",
    "sourceType": "author",
    "target": "eudaimonia",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-492",
    "source": "aristotle",
    "sourceType": "author",
    "target": "potentiality",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-493",
    "source": "aristotle",
    "sourceType": "author",
    "target": "virtue",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-494",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "emptiness",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-495",
    "source": "nagarjuna",
    "sourceType": "author",
    "target": "dependent-origination",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-496",
    "source": "buddha",
    "sourceType": "author",
    "target": "no-self",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-497",
    "source": "buddha",
    "sourceType": "author",
    "target": "impermanence",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-498",
    "source": "buddha",
    "sourceType": "author",
    "target": "nirvana",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-499",
    "source": "confucius",
    "sourceType": "author",
    "target": "ren",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-500",
    "source": "confucius",
    "sourceType": "author",
    "target": "li-ritual",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-501",
    "source": "laozi",
    "sourceType": "author",
    "target": "dao",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-502",
    "source": "laozi",
    "sourceType": "author",
    "target": "wuwei",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-503",
    "source": "kant",
    "sourceType": "author",
    "target": "categorical-imperative",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-504",
    "source": "kant",
    "sourceType": "author",
    "target": "a-priori",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-505",
    "source": "kant",
    "sourceType": "author",
    "target": "noumena",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-506",
    "source": "heidegger",
    "sourceType": "author",
    "target": "dasein",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-507",
    "source": "heidegger",
    "sourceType": "author",
    "target": "authenticity",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-508",
    "source": "sartre",
    "sourceType": "author",
    "target": "bad-faith",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-509",
    "source": "sartre",
    "sourceType": "author",
    "target": "freedom-existential",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-510",
    "source": "marx",
    "sourceType": "author",
    "target": "alienation",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-511",
    "source": "marx",
    "sourceType": "author",
    "target": "praxis",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-512",
    "source": "rawls",
    "sourceType": "author",
    "target": "justice",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-513",
    "source": "foucault",
    "sourceType": "author",
    "target": "power",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-514",
    "source": "derrida",
    "sourceType": "author",
    "target": "deconstruction-concept",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-515",
    "source": "husserl",
    "sourceType": "author",
    "target": "intentionality",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-516",
    "source": "husserl",
    "sourceType": "author",
    "target": "consciousness",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-517",
    "source": "wittgenstein",
    "sourceType": "author",
    "target": "language-game",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-518",
    "source": "wittgenstein",
    "sourceType": "author",
    "target": "meaning",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-519",
    "source": "shankara",
    "sourceType": "author",
    "target": "brahman",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-520",
    "source": "shankara",
    "sourceType": "author",
    "target": "maya",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-521",
    "source": "shankara",
    "sourceType": "author",
    "target": "atman",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-522",
    "source": "zhu-xi",
    "sourceType": "author",
    "target": "li-principle",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-523",
    "source": "zhu-xi",
    "sourceType": "author",
    "target": "qi",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-524",
    "source": "wang-yangming",
    "sourceType": "author",
    "target": "knowledge",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-525",
    "source": "plotinus",
    "sourceType": "author",
    "target": "the-one",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-526",
    "source": "plotinus",
    "sourceType": "author",
    "target": "emanation",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-527",
    "source": "kierkegaard",
    "sourceType": "author",
    "target": "anxiety",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-528",
    "source": "kierkegaard",
    "sourceType": "author",
    "target": "authenticity",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-529",
    "source": "beauvoir",
    "sourceType": "author",
    "target": "gender",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-530",
    "source": "butler",
    "sourceType": "author",
    "target": "gender",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-531",
    "source": "fanon",
    "sourceType": "author",
    "target": "colonialism",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-532",
    "source": "fanon",
    "sourceType": "author",
    "target": "decolonization",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-533",
    "source": "gramsci",
    "sourceType": "author",
    "target": "hegemony",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-534",
    "source": "said",
    "sourceType": "author",
    "target": "colonialism",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-535",
    "source": "spinoza",
    "sourceType": "author",
    "target": "substance",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-536",
    "source": "spinoza",
    "sourceType": "author",
    "target": "god",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-537",
    "source": "descartes",
    "sourceType": "author",
    "target": "dualism",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-538",
    "source": "hobbes",
    "sourceType": "author",
    "target": "social-contract",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-539",
    "source": "locke",
    "sourceType": "author",
    "target": "rights",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-540",
    "source": "rousseau",
    "sourceType": "author",
    "target": "social-contract",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-541",
    "source": "hegel",
    "sourceType": "author",
    "target": "dialectic",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-542",
    "source": "hegel",
    "sourceType": "author",
    "target": "being",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-543",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "power",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-544",
    "source": "nietzsche",
    "sourceType": "author",
    "target": "nothingness",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-545",
    "source": "ibn-sina",
    "sourceType": "author",
    "target": "existence",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-546",
    "source": "ibn-sina",
    "sourceType": "author",
    "target": "essence",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-547",
    "source": "aquinas",
    "sourceType": "author",
    "target": "god",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-548",
    "source": "aquinas",
    "sourceType": "author",
    "target": "being",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-549",
    "source": "levinas",
    "sourceType": "author",
    "target": "alterity",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-550",
    "source": "buber",
    "sourceType": "author",
    "target": "dialogue-concept",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-551",
    "source": "ramose",
    "sourceType": "author",
    "target": "ubuntu",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-552",
    "source": "gandhi",
    "sourceType": "author",
    "target": "ahimsa",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  },
  {
    "id": "e-553",
    "source": "dogen",
    "sourceType": "author",
    "target": "impermanence",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 4
  },
  {
    "id": "e-554",
    "source": "nishida-kitaro",
    "sourceType": "author",
    "target": "nothingness",
    "targetType": "concept",
    "relationType": "developed",
    "certainty": 5
  }
];
