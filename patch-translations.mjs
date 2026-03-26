import { readFileSync, writeFileSync } from 'fs';

const path = '/Users/Alessandro/philosopic atlas/philosophical-atlas/src/data/texts.ts';
let content = readFileSync(path, 'utf8');

// Parse JSON array from the file
const match = content.match(/export const texts: PhilosophicalText\[\] = (\[[\s\S]*\]);/);
if (!match) { console.error('Could not parse texts.ts'); process.exit(1); }
const texts = JSON.parse(match[1]);

// =============================================
// PTAHHOTEP - The Maxims (c. 2400 BCE)
// The OLDEST philosophical text in human history
// =============================================
const ptahhotepIdx = texts.findIndex(t => t.id === 'maxims-of-ptahhotep');
if (ptahhotepIdx >= 0) {
  texts[ptahhotepIdx] = {
    ...texts[ptahhotepIdx],
    originalTitle: 'Teachings of the Vizier Ptahhotep',
    summary: 'The oldest complete philosophical text in human history (c. 2400 BCE). Written by the vizier Ptahhotep for his son, it contains 37 maxims on justice (Maat), right speech, humility, self-restraint, and the proper conduct of life. It is the foundational document of Egyptian wisdom philosophy.',
    structure: [
      'Prologue: The Vizier\'s Petition to the King',
      'Maxim 1: On the limits of knowledge',
      'Maxim 2: On not being arrogant about knowledge',
      'Maxim 3: On contending with a superior',
      'Maxim 4: On contending with an equal',
      'Maxim 5: On contending with an inferior',
      'Maxim 6: On right conduct at a feast',
      'Maxim 7: On greed',
      'Maxim 8: On gossip',
      'Maxim 9: On being a trusted messenger',
      'Maxim 10: On prosperity',
      'Maxim 11: On following the heart',
      'Maxim 12: On dealing with a petitioner',
      'Maxim 13: On avoiding false speech',
      'Maxim 14-15: On kindness',
      'Maxim 16-20: On leadership and humility',
      'Maxim 21-25: On marriage, friendship, and household',
      'Maxim 26-30: On generosity and justice',
      'Maxim 31-37: On wisdom, age, and legacy',
      'Epilogue: On the value of obedience to Maat',
    ],
    translationAvailability: 'Multiple scholarly translations: Lichtheim (1973), Simpson (2003), Allen (2015). Public domain original. Prisse Papyrus (Bibliothèque nationale de France) is the primary manuscript.',
    manuscriptNotes: 'Preserved primarily in the Prisse Papyrus (12th Dynasty copy, c. 1800 BCE), now in the Bibliothèque nationale de France. Also fragments in British Museum Papyri. The original composition dates to the 5th Dynasty (c. 2400 BCE), making it the oldest complete philosophical text known.',
    samplePassage: `mdw.n jmj-rA njwt TAtj ptH-Htp
xr Hm n njswt jzzj
nDs pw xpr m jAw
sxr.n sw jAwt
aA mrwt jb qsn ra nb
jrt.n.f m Sspw
sDm pw nfr sDm.t jb

jw sDm nfr sDm nfr
jx sDm sA.j n mdw.j
mk wj Hr wAt.j r Xrt-nTr
nn rDj.n.j xsf jm.s

jr grt rx.k wAH-jb
sxm.k jm Hna mrwt
jw mAat r st.s
nn xsf sw

jr ptr.k s aq r Xnw
rx.tw rn.f jw.f m rx
m wHa jb.k r.f
jr mAa-xrw m-a.k
mAat pw rdj.t(w) n nb.s`,
    aiTranslation: `THE MAXIMS OF PTAHHOTEP
Vizier of King Isesi of the Fifth Dynasty
(c. 2400 BCE)

PROLOGUE

The instruction of the Mayor and Vizier Ptahhotep, under the Majesty of King Isesi:

The Vizier Ptahhotep says: O Sovereign, my lord! Old age has come, decrepitude has arrived, feebleness has come, and weakness renews itself daily. The eyes are dim, the ears are deaf, strength wanes through weariness of heart. The mouth is silent and speaks not. The heart is forgetful and remembers not yesterday. The bones ache throughout. Good has become evil. All taste has gone. What old age does to a person is evil in every respect.

Let there be appointed for me a staff of old age — that is, a son to whom I may speak the words of those who have listened, the ways of the ancestors who have hearkened to the gods. May the like be done for you, so that strife may be removed from the people and the Two Banks may serve you.

THE MAXIMS

MAXIM 1: On the Limits of Knowledge

Do not be proud on account of your knowledge. Take counsel with the ignorant as well as with the wise, for the limits of skill cannot be reached, and no artisan is fully equipped with his craft. Good speech is more hidden than malachite, yet it may be found among the women at the millstones.

MAXIM 2: On Contending with a Superior

If you encounter a disputant in his moment of action, one who is superior to you, fold your arms and bend your back. Do not seize your heart against him, for he will never agree with you. Diminish his evil speech by not opposing him in his moment. He will be called an ignoramus when your self-control has matched his excess.

MAXIM 3: On Contending with an Equal

If you encounter a disputant in his moment who is your equal, your match, let your excellence surpass his by silence while he speaks evil. Great will be the talk among the listeners, and your name will be good in the opinion of the magistrates.

MAXIM 4: On Contending with an Inferior

If you encounter a disputant who is a poor man, not your equal, do not be aggressive to him because he is weak. Leave him alone and he will confute himself. Do not answer him just to lighten your heart. Do not vent your anger against your opponent. Wretched is he who injures a poor man. What you wish will be done: you will beat him through the magistrates' reproval.

MAXIM 5: On Right Speech

If you are a man of authority, be patient when you listen to the words of a petitioner. Do not stop him from purging his body of that which he has planned to tell. A person in distress wants to pour out his heart more than that his case be won. If a petitioner is stopped, people say: "Why does he reject it?" Not all that is petitioned for can be granted, but a good hearing soothes the heart.

MAXIM 6: On Greed

Do not be greedy in a division. Do not covet more than your share. Do not be greedy toward your relatives. A mild person has a greater claim than the harsh one. Poor is the one who forgets his relatives; he is deprived of their company. Even a little of what is wanted smooths over a quarrel. It is the character of a well-taught man that he can eat in peace.

MAXIM 7: On Following Maat

If you are a person of quality, beget a son who shall please the god. If he is straight, takes after your character, cares for your possessions properly, then do for him all that is good. He is your son, belonging to the seed of your ka. Do not withdraw your heart from him. But if he goes astray and does not follow your counsel, if he disobeys all that is said and his mouth goes according to evil speech — then thrust him away, for he is not your son, he was not born to you. Subdue him, for whoever is hateful to Maat shall not endure.

MAXIM 8: On Leadership

If you are a leader commanding the conduct of many, seek every good aim so that your conduct may be without fault. Maat is great and its effect endures. It has not been disturbed since the time of its maker. It is the path set before the one who knows nothing. Wrongdoing has never brought its venture to safe port. Maat endures. A man says: "It is the property of my father." It can never perish.

MAXIM 9: On Hearing and Wisdom

Hearing is good, and hearing is excellent. Hearing benefits the hearer. Hearing is better than anything. It produces goodwill. How good it is when a son accepts what his father says! How happy is the one of whom it is said: "The son, he is the lord of hearing." The hearer of whom this is said, he is well-endowed and honored by his father. His memory lives in the mouths of the living, those who are on earth, and those who shall be.

EPILOGUE

If a good nature is formed for the one who follows Maat, all his conduct will be according to right. Set the example yourself. Do not give orders only. It profits to live in the midst of Maat. Its reward is that it endures.

The teaching is completed, from its beginning to its end, as found in writing.`,
    latexContent: `\\section*{The Maxims of Ptahhotep}
\\textbf{Author:} Ptahhotep, Vizier of King Isesi\\\\
\\textbf{Date:} c. 2400 BCE (5th Dynasty, Old Kingdom)\\\\
\\textbf{Original Language:} Middle Egyptian (earliest copy)\\\\
\\textbf{Tradition:} Ancient Egyptian Philosophy\\\\
\\textbf{Manuscript:} Prisse Papyrus (Biblioth\\`eque nationale de France)

\\subsection*{Textual Note}
This is the oldest complete philosophical text in human history. The Prisse Papyrus, dating to the 12th Dynasty (c. 1800 BCE), preserves a copy of teachings attributed to the 5th Dynasty vizier Ptahhotep (c. 2400 BCE). The text contains 37 maxims on justice (Maat), right conduct, humility, and wisdom.

\\subsection*{AI-Assisted Translation Note}
This English rendering is an AI-assisted scholarly translation intended for navigation and comparative study. It draws on the standard critical editions and established translations by Lichtheim (1973), Simpson (2003), and Allen (2015). For rigorous philological work, consult the original hieratic text and critical editions.

\\subsection*{Prologue}
The instruction of the Mayor and Vizier Ptahhotep, under the Majesty of King Isesi:

The Vizier Ptahhotep says: O Sovereign, my lord! Old age has come, decrepitude has arrived, feebleness has come, and weakness renews itself daily. The eyes are dim, the ears are deaf, strength wanes through weariness of heart.

Let there be appointed for me a staff of old age---that is, a son to whom I may speak the words of those who have listened, the ways of the ancestors who have hearkened to the gods.

\\subsection*{Maxim 1: On the Limits of Knowledge}
Do not be proud on account of your knowledge. Take counsel with the ignorant as well as with the wise, for the limits of skill cannot be reached, and no artisan is fully equipped with his craft. Good speech is more hidden than malachite, yet it may be found among the women at the millstones.

\\subsection*{Maxim 2: On Contending with a Superior}
If you encounter a disputant in his moment of action, one who is superior to you, fold your arms and bend your back. Do not seize your heart against him, for he will never agree with you.

\\subsection*{Maxim 3: On Contending with an Equal}
If you encounter a disputant who is your equal, your match, let your excellence surpass his by silence while he speaks evil.

\\subsection*{Maxim 4: On Contending with an Inferior}
If you encounter a disputant who is a poor man, not your equal, do not be aggressive to him because he is weak. Leave him alone and he will confute himself.

\\subsection*{Maxim 5: On Right Speech}
If you are a man of authority, be patient when you listen to the words of a petitioner. Do not stop him from purging his body of that which he has planned to tell.

\\subsection*{Maxim 6: On Greed}
Do not be greedy in a division. Do not covet more than your share.

\\subsection*{Maxim 7: On Following Maat}
If you are a person of quality, beget a son who shall please the god. Maat is great and its effect endures. It has not been disturbed since the time of its maker.

\\subsection*{Maxim 8: On Leadership}
If you are a leader commanding the conduct of many, seek every good aim so that your conduct may be without fault. Maat is great and its effect endures.

\\subsection*{Maxim 9: On Hearing and Wisdom}
Hearing is good, and hearing is excellent. Hearing benefits the hearer. How good it is when a son accepts what his father says!

\\subsection*{Epilogue}
If a good nature is formed for the one who follows Maat, all his conduct will be according to right. Set the example yourself. Do not give orders only. It profits to live in the midst of Maat. Its reward is that it endures.

\\subsection*{Annotations}
\\begin{enumerate}
\\item \\textbf{Maat} (m\\=a\\c{c}t): The central concept of ancient Egyptian philosophy---cosmic justice, truth, order, and right conduct. Maat is both a principle and a goddess.
\\item \\textbf{Ka}: The spiritual double or vital force of a person in Egyptian thought.
\\item The \\textbf{Prisse Papyrus} is the oldest surviving literary manuscript, now in Paris.
\\item The emphasis on \\textbf{hearing/listening} (sd\\d{m}) as the path to wisdom anticipates later philosophical traditions' emphasis on receptivity and contemplation.
\\item The distinction between contending with superiors, equals, and inferiors shows sophisticated social-ethical analysis.
\\end{enumerate}

\\subsection*{Glossary}
\\begin{description}
\\item[Maat] Cosmic justice, truth, and order; the foundational ethical concept of Egyptian philosophy.
\\item[Ka] The vital force or spiritual double of a person.
\\item[Vizier] (tj\\=atj): The highest official after the pharaoh; chief minister and judge.
\\item[Two Banks] (t\\=awy): Upper and Lower Egypt; a metonym for the entire kingdom.
\\end{description}

\\subsection*{Bibliography}
\\begin{enumerate}
\\item Lichtheim, M. (1973). \\textit{Ancient Egyptian Literature}, Vol. I. University of California Press.
\\item Simpson, W.K. (2003). \\textit{The Literature of Ancient Egypt}. 3rd ed. Yale University Press.
\\item Allen, J.P. (2015). \\textit{Middle Egyptian: An Introduction to the Language and Culture of Hieroglyphs}. 3rd ed. Cambridge University Press.
\\item Parkinson, R.B. (2002). \\textit{Poetry and Culture in Middle Kingdom Egypt}. Continuum.
\\end{enumerate}`,
  };
}

// =============================================
// Also patch: HATATA by Zera Yacob (1667)
// Ethiopian rationalist philosophy
// =============================================
const hatataIdx = texts.findIndex(t => t.id === 'hatata');
if (hatataIdx >= 0) {
  texts[hatataIdx] = {
    ...texts[hatataIdx],
    summary: 'An Ethiopian rationalist philosophical treatise written in 1667, independently developing arguments for God\'s existence, human equality, and the primacy of reason over religious authority — decades before the European Enlightenment.',
    structure: [
      'Chapter 1: Zera Yacob\'s early life and education',
      'Chapter 2: The problem of conflicting religions',
      'Chapter 3: Retreat to a cave for rational inquiry',
      'Chapter 4: Arguments for God\'s existence from nature',
      'Chapter 5: On the equality of all humans',
      'Chapter 6: Critique of religious laws as human inventions',
      'Chapter 7: On marriage, sexuality, and natural law',
      'Chapter 8: On the value of reason and inquiry',
    ],
    translationAvailability: 'Translated by Claude Sumner (1976) in Ethiopian Philosophy. Public domain original in Ge\'ez.',
    samplePassage: 'ወይቤለኒ፡ ልቡናየ፡ ኢትግበር፡ ዘይገብሩ፡ ሰብእ፡ ግበር፡ ዘይነግርከ፡ ልቡናከ። ወርኢኩ፡ ከመ፡ ቅንዕና፡ ዘልቡና፡ ውእቱ፡ ብርሃን፡ ዘእግዚአብሔር።',
    aiTranslation: `HATATA (Inquiry)
By Zera Yacob of Axum (1667)

AI-Assisted English Translation

CHAPTER 3: On Rational Inquiry

And my reason told me: "Do not do what people do; do what your reason tells you." And I saw that the uprightness of reason is the light of God.

I asked myself: "Is everything that is written in Holy Scripture true?" And my reason answered me: "Not everything." For the Scriptures of the Christians say one thing, the Scriptures of the Muslims say another, and the Scriptures of the Jews say yet another. Each claims that its scripture is the true one and that the others are false. But all are the words of human beings.

Therefore I said: "I shall follow only what my Creator has given me — that is, reason — and I shall examine everything with the light of reason."

CHAPTER 4: On God's Existence

Looking at the order of the world, I understood that there is a Creator who orders all things. The sun rises and sets in order. The seasons come in order. The plants grow in order. All this shows the work of an intelligent Creator.

And I asked: "Why did God create humanity?" And my reason told me: "God created us for goodness, not for evil. He gave us reason so that we might seek what is good and avoid what is evil."

CHAPTER 5: On Human Equality

All people are equal before God, for God created all from one origin. The division of people into classes — masters and slaves, superior and inferior — is not from God but from human pride and wickedness. God did not create one person to dominate another.

CHAPTER 6: On the Critique of Religious Laws

And I examined the laws of the different religions, and I found that many of them are the inventions of human beings, not the commandments of God. For what is truly from God accords with reason, and what contradicts reason is from human beings.

For example, some religions say that certain foods are forbidden, but reason tells us that God created all foods for our use. Some religions say that women are inferior to men, but reason tells us that God created both equally. Some religions permit slavery, but reason tells us that all are born free.

Therefore I concluded: the law of God is the law of reason, and whatever contradicts reason is not truly from God, even if it is found in scripture.

CHAPTER 7: On the Good Life

The good life consists in following reason, doing what is just, and treating all people with kindness. Wealth and power are not the marks of a good person, but justice and wisdom are.

And I understood that prayer is good when it comes from the heart, not when it is performed out of habit or fear. True worship of God is the pursuit of truth and the practice of justice.`,
    latexContent: `\\section*{Hatata (Inquiry)}
\\textbf{Author:} Zera Yacob of Axum\\\\
\\textbf{Date:} 1667 CE\\\\
\\textbf{Original Language:} Ge'ez (Classical Ethiopic)\\\\
\\textbf{Tradition:} Ethiopian Rationalist Philosophy

\\subsection*{Textual Note}
The \\emph{Hatata} (meaning "inquiry" or "investigation") was written in 1667 by Zera Yacob, an Ethiopian philosopher who independently developed rationalist arguments remarkably similar to those of the European Enlightenment. Writing in a cave where he had retreated from religious persecution, Zera Yacob used reason alone to critique religious dogmatism and defend human equality.

\\subsection*{AI-Assisted Translation Note}
This English rendering is based on Claude Sumner's pioneering translation (1976). It is an AI-assisted scholarly version for navigation and comparative study.

\\subsection*{Chapter 3: On Rational Inquiry}
And my reason told me: "Do not do what people do; do what your reason tells you." And I saw that the uprightness of reason is the light of God.

I asked myself: "Is everything that is written in Holy Scripture true?" And my reason answered me: "Not everything." For the Scriptures of the Christians say one thing, the Scriptures of the Muslims say another, and the Scriptures of the Jews say yet another. Each claims that its scripture is the true one and that the others are false. But all are the words of human beings.

Therefore I said: "I shall follow only what my Creator has given me---that is, reason---and I shall examine everything with the light of reason."

\\subsection*{Chapter 4: On God's Existence}
Looking at the order of the world, I understood that there is a Creator who orders all things. The sun rises and sets in order. The seasons come in order. The plants grow in order. All this shows the work of an intelligent Creator.

\\subsection*{Chapter 5: On Human Equality}
All people are equal before God, for God created all from one origin. The division of people into classes---masters and slaves, superior and inferior---is not from God but from human pride and wickedness.

\\subsection*{Chapter 6: On the Critique of Religious Laws}
And I examined the laws of the different religions, and I found that many of them are the inventions of human beings, not the commandments of God. For what is truly from God accords with reason, and what contradicts reason is from human beings.

\\subsection*{Annotations}
\\begin{enumerate}
\\item Zera Yacob's rationalism predates Descartes' \\emph{Meditations} (1641) by only 26 years and was developed entirely independently.
\\item The argument from the order of nature to God's existence parallels the teleological argument in Western philosophy.
\\item The critique of conflicting scriptures anticipates Enlightenment comparative religion.
\\item The defense of human equality---including the equality of women---is remarkably progressive for any 17th-century context.
\\end{enumerate}

\\subsection*{Bibliography}
\\begin{enumerate}
\\item Sumner, Claude (1976). \\textit{Ethiopian Philosophy}, Vol. II-III. Addis Ababa: Commercial Printing Press.
\\item Sumner, Claude (1985). \\textit{Classical Ethiopian Philosophy}. Los Angeles: Adey Publishing.
\\item Workineh Kelbessa (2011). "The Rehabilitation of Indigenous Thought in African Philosophy." \\textit{Journal of African Cultural Studies}.
\\end{enumerate}`,
    publicDomain: true,
  };
}

// Write back
const output = `import type { PhilosophicalText } from '@/types';\n\nexport const texts: PhilosophicalText[] = ${JSON.stringify(texts, null, 2)};\n`;
writeFileSync(path, output);
console.log(`Patched ${texts.length} texts with translations for Ptahhotep and Zera Yacob`);
