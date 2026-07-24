# Agent brief — converting public-domain texts to Atlas LaTeX

You are transcribing one author's works into `texts/<text-id>.tex` for the Philosophical Atlas.
Read this whole brief before starting.

## HOW TO GET THE TEXT — use curl, not WebFetch

**`WebFetch` pipes pages through a summarizing model.** On a long work it will paraphrase or
truncate, which is exactly the failure this project cannot tolerate. Do not use it for text bodies.

Instead:

1. `curl` the raw plain-text file (Project Gutenberg serves these at
   `https://www.gutenberg.org/cache/epub/<N>/pg<N>.txt`; Wikisource and others have raw views).
2. Convert it to LaTeX with a **deterministic script** — re-wrap lines, escape specials, insert
   `\para` / `\section*` markers. No model in the loop rewriting prose.
3. **Verify**: diff the normalized word stream of your `.tex` body against the source line range.
   They should be identical apart from markers you inserted. Report the diff result.
4. Use `WebFetch` only for *metadata* — confirming the translator's name, dates, and PD status on
   the catalogue page.

Strip front/back matter: translators' introductions, analyses, indexes, and the Gutenberg licence
boilerplate are not the author's text. Editorial footnotes go too. Keep verse quotations that sit
inside the body.

## THE ONE UNBREAKABLE RULE

**Never write text from memory. Ever.**

You transcribe only bytes that a `curl` or fetch actually returned to you in this session. If it fails,
returns a summary instead of the full text, or returns only part of the work — you report that
honestly and move on. You do **not** fill gaps from your own knowledge, do not paraphrase, do not
"reconstruct" a missing chapter, do not smooth over a truncated passage.

A fabricated paragraph of Plato in a students' atlas is worse than no paragraph at all, and it is
undetectable once written. If in doubt, leave it out and say so in your report.

Mark any work you could not fully obtain with `% status: partial` or `% status: failed` in the
metadata header, and say exactly which parts are missing.

## COPYRIGHT — only public domain

A translation is usable only if one of these is verifiably true:

1. The **translator died more than 70 years ago** (EU/Italy rule — this project is Italian), or
2. The page **explicitly states** public domain / CC0 / "no rights reserved".

Safe and common: Benjamin Jowett (d. 1893), George Long (d. 1879), Thomas Taylor (d. 1835),
John Burnet (d. 1928), Hastings Crossley, W.J. Oates-era reprints of the above, and anything on
a site that states PD/CC0 explicitly.

**Not safe**: W.D. Ross (d. 1971), most 20th-century Loeb translations, Penguin/Hackett/Oxford
World's Classics, and anything published recently without an explicit PD statement.

If you cannot establish the translator and their death date, **do not use that text**. Record the
attempt in your report instead.

Good source sites: PoesiaLatina, The Latin Library, Perseus Digital Library, Wikisource,
sacred-texts.com, Project Gutenberg, ctext.org (Chinese), GRETIL (Sanskrit), monadnock.net.

## Which texts to do

Target the text `id`s that already exist in `src/data/texts.ts` for your author — the atlas links
`/text/<id>/read` to your file, so **the filename must be `<id>.tex` with that exact id**.
Check the ids first:

```bash
grep -o "T('[a-z0-9-]*'" generate-texts-concepts.mjs | head -200
```

or grep `src/data/texts.ts` for `"author": "<author-id>"` and read the `id` fields.

Do NOT invent new ids. If a work has no id yet, note it in your report and skip it.

## File format

One file per work: `texts/<id>.tex`. Copy this skeleton exactly.

```latex
% !atlas-meta
% id: letter-to-menoeceus
% title: Letter to Menoeceus
% author: epicurus
% authorName: Epicurus
% language: English
% sourceLanguage: Ancient Greek
% translator: Peter Saint-Andre
% translationYear: 2011
% source: https://monadnock.net/epicurus/letter.html
% license: Public Domain (CC0)
% status: complete
% !end-atlas-meta
\documentclass[12pt]{article}
\usepackage[utf8]{inputenc}
\usepackage{ebgaramond}
\usepackage[margin=1.2in]{geometry}
\usepackage{parskip}
\newcommand{\work}[1]{\begin{center}\LARGE\scshape #1\end{center}}
\newcommand{\attrib}[2]{\begin{center}\large #1\\[2pt]\small\itshape trans.\ #2\end{center}\vspace{1em}}
\newcommand{\para}[1][]{\par\noindent\ifx&#1&\else\textsuperscript{\footnotesize #1}~\fi}
\begin{document}
% !body-start
\work{Letter to Menoeceus}
\attrib{Epicurus}{Peter Saint-Andre (public domain)}

\section*{Book I}

\para[1] First paragraph of the actual text...

\para[2] Second paragraph...
% !body-end
\end{document}
```

### Body rules

- `\work{Title}` once, then `\attrib{Author}{Translator (public domain)}` once.
- `\section*{...}` for book / chapter / part divisions the source actually has.
- `\para[n]` starts every paragraph. `n` is the paragraph or section number — use the source's own
  numbering (Stephanus, Bekker, chapter §) when it has one; otherwise number sequentially from 1.
- **One blank line between blocks.** The parser splits on blank lines — a missing blank line merges
  two paragraphs.
- Escape `%` as `\%`, `&` as `\&`, `#` as `\#`, `$` as `\$`, `_` as `\_`.
- Use `---` for em dashes. Straight quotes are fine.
- No other macros. The renderer only understands the four above.

### Long works

Fetch and write **one chapter/book at a time**, appending as you go, so a failure midway still
leaves a valid partial file. Re-verify after each chunk that you actually received text and not a
summary. For very long works (Republic, Laws, Nicomachean Ethics) this means many fetches — that is
expected and fine. Set `% status: partial` until the whole work is in, then flip to `complete`.

## When done

0. Run `node texts/verify.mjs` — it must show `✓` for your files, with 0 failing. It checks the
   metadata header, paragraph numbering, unescaped LaTeX specials, and above all whether the final
   paragraph ends on terminal punctuation (the signature of a truncated fetch).
1. Run `node texts/build-fulltexts.mjs` from the repo root — it must report your files.
2. Report back: for each work — id, translator, license basis (why it is PD), source URL,
   paragraph count, status (complete/partial/failed), and anything you could not get and why.

Be blunt about failures. An honest "the only online translation I found is under copyright" is a
useful result; a fabricated text is a catastrophe.
