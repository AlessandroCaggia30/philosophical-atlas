# Bibliography layer — schema

One JSON file per author: `bibliography/<author-id>.json`.
Source of truth for the *complete works* layer of the atlas. Feeds a generator into `src/data/texts.ts`.

Goal: for every author, **every** work attributed to them — extant, fragmentary, lost, spurious —
with the catalogue numbers a student needs to actually find the passage.

## File shape

```jsonc
{
  "authorId": "thales",            // must match an id in src/data/authors.ts
  "authorName": "Thales of Miletus",
  "corpusNote": "...",             // 1-3 sentences: what the corpus IS, and its central problem
  "referenceSystems": [            // the numbering a student will meet in editions
    { "name": "Diels–Kranz", "abbrev": "DK", "note": "Thales = DK 11; A = testimonia, B = verbatim" }
  ],
  "works": [ /* see below */ ],
  "excluded": [                    // works commonly credited to the author that are NOT theirs
    { "title": "...", "reason": "...", "actualAuthor": "..." }
  ],
  "sources": [ "..." ],            // what this compilation rests on
  "compiled": "YYYY-MM-DD",
  "confidence": "high|medium|low"  // of the *completeness* of the list
}
```

## Work entry

```jsonc
{
  "id": "thales-on-the-solstice",   // kebab, unique atlas-wide, prefixed by author id
  "title": "On the Solstice",       // English
  "originalTitle": "Περὶ τροπῆς",   // native script, when attested
  "transliteration": "Peri tropēs",
  "status": "extant",               // see vocabulary below
  "genre": "treatise",
  "language": "Ancient Greek",
  "date": { "start": -580, "end": -560, "approximate": true, "note": "..." },
  "extent": "lost; title only",     // HOW MUCH survives, in numbers where possible
  "citations": ["DL I.23"],         // where the work is attested / catalogued
  "transmission": "...",            // who preserves it and through what chain
  "authenticity": "...",            // scholarly verdict + who dissents
  "summary": "...",                 // what it argues, if known
  "editions": ["..."],              // standard critical editions
  "translations": ["..."],
  "publicDomain": true,
  "onlineText": "https://...",      // link students can actually open
  "notes": "..."
}
```

## `status` vocabulary

| value         | meaning                                                                 |
|---------------|-------------------------------------------------------------------------|
| `extant`      | survives complete or substantially complete                             |
| `fragmentary` | survives only in quoted fragments / partial manuscripts                 |
| `epitome`     | survives only in ancient summary or abridgement                         |
| `translation-only` | original lost, survives in Arabic / Latin / Tibetan / Chinese      |
| `lost`        | attested by title or citation, no text survives                         |
| `attributed`  | ancient attribution, authenticity unsettled                             |
| `spurious`    | scholarly consensus: not by this author                                 |
| `disputed`    | live scholarly disagreement                                             |
| `non-authorial` | the author wrote nothing; text is a record made by others (Socrates, Buddha, Confucius, Epictetus) |

## Rules

1. **No invented catalogue numbers.** If a DK/Bekker/Taishō number isn't verified, omit the field
   rather than guess. Precision that is wrong is worse than an absent field.
2. **Lost works get entries.** For Aristotle or Chrysippus, the lost corpus is most of the corpus.
3. **Record the attribution problem**, don't silently resolve it. `authenticity` is where the
   scholarship goes.
4. **Non-writers get a corpus anyway** — Socrates, Buddha, Confucius, Pyrrho and Epictetus wrote
   nothing; their entries list the *records* others made, marked `non-authorial`.
5. `confidence` is about **completeness of the list**, not truth of individual entries.
