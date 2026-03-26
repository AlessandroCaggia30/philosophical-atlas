// Data generation script for Philosophical Atlas
// Run with: node generate-data.mjs
import { writeFileSync } from 'fs';

// ============================================
// AUTHORS
// ============================================
const authorsData = [
  // GREEK/ROMAN
  ['thales','Thales','Θαλῆς',-624,-546,true,37.85,27.25,'Miletus','pre-socratic',['pre-socratic'],['Milesian school'],'First philosopher of the Western tradition; proposed water as the fundamental substance of all things.',['Water as archē','All things are full of gods'],[],['anaximander','anaximenes'],['on-nature-thales'],['substance','being'],[]],
  ['anaximander','Anaximander','Ἀναξίμανδρος',-610,-546,true,37.85,27.25,'Miletus','pre-socratic',['pre-socratic'],['Milesian school'],'Proposed the apeiron (the boundless/infinite) as the origin of all things.',['Apeiron as archē','Cosmic justice'],['thales'],[],['on-nature-anaximander'],['being','substance'],[]],
  ['heraclitus','Heraclitus','Ἡράκλειτος',-535,-475,true,38.42,27.14,'Ephesus','pre-socratic',['pre-socratic'],[],'Philosopher of flux and the unity of opposites; "everything flows" and fire as the fundamental element.',['Logos','Unity of opposites','Panta rhei'],[],['plato','stoicism'],['fragments-heraclitus'],['logos','becoming','dialectic'],[]],
  ['parmenides','Parmenides','Παρμενίδης',-515,-450,true,40.16,15.08,'Elea','pre-socratic',['pre-socratic'],['Eleatic school'],'Argued that Being is one, eternal, and unchanging; change and multiplicity are illusion.',['Being is one and unchanging','Way of Truth vs Way of Opinion'],[],['plato','zeno-of-elea'],['on-nature-parmenides'],['being','truth'],['heraclitus']],
  ['empedocles','Empedocles','Ἐμπεδοκλῆς',-494,-434,true,37.31,13.58,'Agrigentum','pre-socratic',['pre-socratic'],[],'Proposed four root elements (earth, water, air, fire) united and separated by Love and Strife.',['Four elements','Love and Strife'],['parmenides'],[],[],['substance','form'],[]],
  ['democritus','Democritus','Δημόκριτος',-460,-370,true,40.95,24.15,'Abdera','pre-socratic',['pre-socratic'],['Atomism'],'Co-founder of ancient atomism; reality consists of atoms and void.',['Atomism','Void'],[],['epicurus'],[],['substance','materialism'],[]],
  ['socrates','Socrates','Σωκράτης',-470,-399,false,37.97,23.72,'Athens','platonism',['platonism'],[],'Athenian philosopher who developed the dialectical method; wrote nothing but transformed philosophy through questioning.',['Socratic method','Knowledge as virtue','Examined life'],[],['plato','aristotle','antisthenes'],[],['virtue','knowledge','justice'],['protagoras','gorgias']],
  ['plato','Plato','Πλάτων',-428,-348,true,37.97,23.72,'Athens','platonism',['platonism'],['Academy'],'Founder of the Academy; developed the theory of Forms and wrote dialogues on justice, beauty, and the good.',['Theory of Forms','Philosopher-king','Allegory of the Cave'],['socrates','parmenides','heraclitus'],['aristotle','plotinus','augustine','proclus'],['republic','symposium','phaedo','timaeus','meno','phaedrus'],['forms','justice','knowledge','good','beauty','soul'],['protagoras']],
  ['aristotle','Aristotle','Ἀριστοτέλης',-384,-322,false,40.62,22.95,'Stagira/Athens','aristotelianism',['aristotelianism'],['Lyceum'],'Student of Plato who created a comprehensive philosophical system covering logic, metaphysics, ethics, politics, and natural science.',['Four causes','Substance and accidents','Virtue ethics','Syllogistic logic'],['plato','socrates'],['al-farabi','ibn-sina','ibn-rushd','aquinas','theophrastus'],['nicomachean-ethics','metaphysics-aristotle','physics-aristotle','politics-aristotle','de-anima','categories','poetics-aristotle'],['substance','form','potentiality','actuality','virtue','eudaimonia'],['plato']],
  ['diogenes-of-sinope','Diogenes of Sinope','Διογένης',-412,-323,true,42.03,34.95,'Sinope/Athens','cynicism',['cynicism'],[],'Most famous Cynic philosopher; lived in radical poverty, rejecting conventional values.',['Life according to nature','Rejection of convention'],['socrates'],['zeno-of-citium'],[],['virtue','freedom'],[]],
  ['pyrrho','Pyrrho','Πύρρων',-365,-275,true,39.6,20.49,'Elis','skepticism',['skepticism'],['Pyrrhonism'],'Founder of Pyrrhonian skepticism; advocated suspension of judgment as the path to tranquility.',[' Epochē (suspension of judgment)','Ataraxia through doubt'],[],['sextus-empiricus'],[],['skepticism','truth'],[]],
  ['epicurus','Epicurus','Ἐπίκουρος',-341,-270,false,37.97,23.72,'Athens','epicureanism',['epicureanism'],['The Garden'],'Founded the Garden school; taught that pleasure (absence of pain) is the highest good and atoms constitute reality.',['Pleasure as highest good','Atomism','Death is nothing to us'],['democritus'],['lucretius'],['letter-to-menoeceus','principal-doctrines'],['pleasure','atomism','free-will'],[]],
  ['zeno-of-citium','Zeno of Citium','Ζήνων',-334,-262,true,37.97,23.72,'Athens','stoicism',['stoicism'],['The Stoa'],'Founder of Stoicism; taught that virtue is the only good and the universe is governed by logos.',['Virtue as sole good','Living according to nature','Logos governs all'],['diogenes-of-sinope'],['chrysippus','seneca','epictetus'],['on-nature-zeno'],['virtue','logos','duty'],[]],
  ['chrysippus','Chrysippus','Χρύσιππος',-279,-206,true,37.97,23.72,'Athens','stoicism',['stoicism'],[],'Third head of the Stoa; systematized Stoic logic, physics, and ethics.',['Stoic logic','Propositional logic','Determinism and compatibilism'],['zeno-of-citium'],['seneca','epictetus','marcus-aurelius'],[],['logos','determinism','virtue'],[]],
  ['cicero','Cicero','Marcus Tullius Cicero',-106,-43,false,41.9,12.5,'Rome','stoicism',['stoicism','skepticism'],['Roman eclecticism'],'Roman statesman and philosopher who transmitted Greek philosophy to the Latin world.',['Natural law','Civic virtue'],['plato','aristotle','zeno-of-citium'],[],['on-duties'],['duty','justice','virtue'],[]],
  ['lucretius','Lucretius','Titus Lucretius Carus',-99,-55,true,41.9,12.5,'Rome','epicureanism',['epicureanism'],[],'Roman poet-philosopher who expounded Epicurean physics and ethics in verse.',['Atomic swerve','Mortality of the soul'],['epicurus'],[],['on-the-nature-of-things'],['atomism','pleasure','materialism'],[]],
  ['seneca','Seneca','Lucius Annaeus Seneca',-4,65,false,41.9,12.5,'Rome','stoicism',['stoicism'],[],'Roman Stoic philosopher, dramatist, and statesman; wrote on ethics, anger, and the good life.',['Equanimity','Virtue in adversity'],['chrysippus','zeno-of-citium'],['marcus-aurelius'],['letters-seneca','on-the-shortness-of-life'],['virtue','duty'],[]],
  ['epictetus','Epictetus','Ἐπίκτητος',50,135,true,41.9,12.5,'Rome/Nicopolis','stoicism',['stoicism'],[],'Former slave who became one of the most influential Stoic teachers; focused on what is "up to us."',['Dichotomy of control','Inner freedom'],['chrysippus','zeno-of-citium'],['marcus-aurelius'],['discourses-epictetus','enchiridion'],['freedom','virtue','duty'],[]],
  ['marcus-aurelius','Marcus Aurelius','Μᾶρκος Αὐρήλιος',121,180,false,41.9,12.5,'Rome','stoicism',['stoicism'],[],'Roman emperor and Stoic philosopher; his private meditations became a classic of philosophical reflection.',['Impermanence of all things','Duty and service'],['epictetus','seneca'],['many later thinkers'],['meditations'],['virtue','duty','impermanence'],[]],
  ['plotinus','Plotinus','Πλωτῖνος',204,270,false,31.2,29.95,'Alexandria/Rome','neoplatonism',['neoplatonism'],[],'Founder of Neoplatonism; developed a metaphysics of emanation from the One through Nous to Soul.',['The One','Emanation','Henosis (mystical union)'],['plato'],['porphyry','proclus','augustine','ibn-arabi'],['enneads'],['the-one','emanation','nous','soul'],[]],
  ['porphyry','Porphyry','Πορφύριος',234,305,false,33.89,35.5,'Tyre/Rome','neoplatonism',['neoplatonism'],[],'Student of Plotinus; edited the Enneads and wrote the Isagoge, foundational for medieval logic.',['Categories and universals'],['plotinus'],['proclus','boethius'],[],['universals','being'],[]],
  ['proclus','Proclus','Πρόκλος',412,485,false,37.97,23.72,'Athens','neoplatonism',['neoplatonism'],[],'Last major head of the Platonic Academy; systematized Neoplatonic metaphysics.',['Triadic procession','Elements of theology'],['plotinus','plato'],['pseudo-dionysius'],['elements-of-theology'],['the-one','emanation'],[]],
  ['hypatia','Hypatia','Ὑπατία',360,415,true,31.2,29.95,'Alexandria','neoplatonism',['neoplatonism','platonism'],[],'Alexandrian philosopher and mathematician; one of the last great thinkers of ancient Alexandria.',['Neoplatonic mathematics'],['plotinus','plato'],[],[],['being','knowledge'],[]],
  ['sextus-empiricus','Sextus Empiricus','Σέξτος Ἐμπειρικός',160,210,true,37.97,23.72,'Alexandria/Athens','skepticism',['skepticism'],['Pyrrhonism'],'Systematized Pyrrhonian skepticism; his works are our fullest source for ancient skeptical arguments.',['Ten modes of skepticism','Equipollence'],['pyrrho'],['descartes','hume'],['outlines-of-pyrrhonism'],['skepticism','knowledge','truth'],[]],

  // INDIAN
  ['buddha','Siddhārtha Gautama (Buddha)','सिद्धार्थ गौतम',-563,-483,true,27.49,83.27,'Lumbini/Bodh Gaya','theravada-buddhism',['theravada-buddhism','mahayana-buddhism'],[],'Founder of Buddhism; taught the Four Noble Truths and the Middle Way between asceticism and indulgence.',['Four Noble Truths','Dependent origination','No-self (anatta)','Middle Way'],[],['nagarjuna','buddhaghosa','asanga','vasubandhu'],['dhammapada','sutta-nipata'],['no-self','dependent-origination','impermanence','nirvana','emptiness'],[]],
  ['mahavira','Mahavira','महावीर',-599,-527,true,25.6,85.1,'Bihar','jainism',['jainism'],[],'24th Tirthankara of Jainism; systematized non-violence and many-sidedness of truth.',['Ahimsa','Anekantavada','Five vows'],[],[],['tattvartha-sutra'],['ahimsa','karma','moksha'],[]],
  ['kapila','Kapila','कपिल',-600,-500,true,25.0,83.0,'India','samkhya',['samkhya'],[],'Legendary founder of Samkhya philosophy; distinguished consciousness (purusha) from matter (prakriti).',['Purusha-Prakriti dualism'],[],['ishvarakrishna','patanjali'],[],['purusha','prakriti','consciousness'],[]],
  ['patanjali','Patanjali','पतञ्जलि',-200,200,true,25.0,83.0,'India','yoga-philosophy',['yoga-philosophy'],[],'Compiler of the Yoga Sutras; systematized the eight-limbed path of yoga.',['Ashtanga yoga','Chitta vritti nirodha'],['kapila'],[],['yoga-sutras'],['consciousness','moksha'],[]],
  ['gautama-aksapada','Gautama Aksapada','गौतम अक्षपाद',-200,200,true,25.6,85.1,'Mithila','nyaya',['nyaya'],[],'Founder of the Nyaya school of logic and epistemology; systematized Indian logical method.',['Four pramanas','Five-membered syllogism'],[],['udayana'],['nyaya-sutras'],['knowledge','inference','perception'],[]],
  ['kanada','Kanada','कणाद',-600,-200,true,25.0,83.0,'India','vaisheshika',['vaisheshika'],[],'Founder of Vaisheshika philosophy; developed an atomic theory of nature.',['Atomic theory','Six categories of reality'],[],[],['vaisheshika-sutras'],['substance','atomism'],[]],
  ['nagarjuna','Nāgārjuna','नागार्जुन',150,250,true,17.0,79.0,'Andhra Pradesh','madhyamaka',['madhyamaka','mahayana-buddhism'],[],'Founder of Madhyamaka Buddhism; demonstrated that all phenomena are empty of inherent existence through rigorous dialectic.',['Śūnyatā (emptiness)','Two truths doctrine','Prasanga method'],['buddha'],['aryadeva','chandrakirti','shantideva','tsongkhapa'],['mulamadhyamakakarika','vigrahavyavartani'],['emptiness','dependent-origination','no-self','svabhava'],['vaibhashika-scholars']],
  ['aryadeva','Āryadeva','आर्यदेव',170,270,true,7.87,80.77,'Sri Lanka/India','madhyamaka',['madhyamaka'],[],'Chief disciple of Nagarjuna; developed Madhyamaka critique of rival schools.',['Emptiness of all views'],['nagarjuna'],['chandrakirti'],[],['emptiness'],[]],
  ['asanga','Asanga','असङ्ग',310,390,true,30.0,77.0,'Gandhara','yogacara',['yogacara','mahayana-buddhism'],[],'Co-founder of Yogacara Buddhism; developed the theory of consciousness-only.',['Three natures','Consciousness-only'],[],['vasubandhu'],[],['consciousness','alaya-vijnana'],[]],
  ['vasubandhu','Vasubandhu','वसुबन्धु',316,396,true,30.0,77.0,'Gandhara','yogacara',['yogacara','mahayana-buddhism'],[],'Wrote the Abhidharmakosa and co-founded Yogacara; one of the most important Buddhist philosophers.',['Twenty verses','Consciousness-only'],['asanga'],['dignaga'],['abhidharmakosa'],['consciousness','no-self','alaya-vijnana'],[]],
  ['dignaga','Dignāga','दिन्नाग',480,540,true,17.0,79.0,'South India','yogacara',['yogacara','buddhist-epistemology'],[],'Founder of Buddhist logic and epistemology; developed the theory of apoha (exclusion).',['Apoha theory','Two pramanas'],['vasubandhu'],['dharmakirti'],['pramana-samuccaya'],['knowledge','inference','perception'],[]],
  ['dharmakirti','Dharmakīrti','धर्मकीर्ति',600,660,true,25.0,83.0,'India','yogacara',['yogacara','buddhist-epistemology'],[],'Greatest Buddhist logician; refined Dignaga\'s epistemology and debated Hindu schools.',['Momentariness','Self-awareness','Logical inference'],['dignaga'],[],['pramanavarttika'],['knowledge','inference','perception'],['kumarila-bhatta']],
  ['buddhaghosa','Buddhaghosa','बुद्धघोस',370,450,true,7.87,80.77,'Sri Lanka','theravada-buddhism',['theravada-buddhism'],[],'Greatest Theravada commentator; wrote the Visuddhimagga, the classic manual of Buddhist meditation.',['Purification through insight','Abhidhamma analysis'],['buddha'],[],['visuddhimagga'],['nirvana','no-self','impermanence'],[]],
  ['gaudapada','Gaudapada','गौडपाद',500,600,true,15.0,74.0,'India','advaita-vedanta',['advaita-vedanta'],[],'Pre-Shankara Advaitin; wrote the Mandukya Karika arguing for non-dualism with Buddhist-influenced arguments.',['Ajativada (non-origination)'],['nagarjuna'],['shankara'],['mandukya-karika'],['brahman','maya'],[]],
  ['shankara','Ādi Śaṅkara','शङ्कर',788,820,false,10.0,76.0,'Kerala','advaita-vedanta',['advaita-vedanta','vedanta'],[],'Greatest philosopher of Advaita Vedanta; argued Brahman alone is real, the world is appearance (maya).',['Brahman is sole reality','World as maya','Jiva is Brahman'],['gaudapada','badarayana'],['ramanuja','madhva','vivekananda'],['brahma-sutra-bhashya','vivekachudamani','upadeshasahasri'],['brahman','atman','maya','moksha','avidya'],['ramanuja','buddhist-scholars']],
  ['ramanuja','Rāmānuja','रामानुज',1017,1137,false,13.08,80.27,'Tamil Nadu','vedanta',['vedanta'],['Vishishtadvaita'],'Chief philosopher of qualified non-dualism; argued the world and souls are real attributes of Brahman.',['Vishishtadvaita','Brahman with attributes'],['badarayana'],['madhva'],['sri-bhashya'],['brahman','devotion','moksha'],['shankara']],
  ['madhva','Madhva','मध्व',1238,1317,false,13.34,74.74,'Karnataka','vedanta',['vedanta'],['Dvaita'],'Founder of Dvaita (dualist) Vedanta; insisted on real distinction between God, souls, and world.',['Five-fold difference','Dvaita'],['badarayana'],[],[],['brahman','soul','moksha'],['shankara','ramanuja']],
  ['bhartrhari','Bhartṛhari','भर्तृहरि',450,510,true,25.0,83.0,'India','vedanta',['vedanta','philosophy-of-language'],[],'Grammarian-philosopher who developed the sphota theory of meaning and the identity of Brahman with language.',['Sphota theory','Shabda-Brahman'],[],[],[],['meaning','brahman','logos'],[]],
  ['shantideva','Śāntideva','शान्तिदेव',685,763,true,17.0,79.0,'India','madhyamaka',['madhyamaka','mahayana-buddhism'],[],'Author of the Bodhicaryavatara; masterpiece on the bodhisattva path combining ethics with Madhyamaka philosophy.',['Bodhisattva ideal','Equalizing self and other'],['nagarjuna'],[],['bodhicaryavatara'],['compassion','emptiness'],[]],
  ['chandrakirti','Candrakīrti','चन्द्रकीर्ति',600,650,true,17.0,79.0,'India','madhyamaka',['madhyamaka'],['Prasangika'],'Greatest commentator on Nagarjuna; established the Prasangika interpretation of Madhyamaka.',['Prasangika method','Conventional truth defense'],['nagarjuna','aryadeva'],['tsongkhapa'],['madhyamakavatara'],['emptiness','dependent-origination'],[]],
  ['kumarila-bhatta','Kumārila Bhaṭṭa','कुमारिल भट्ट',620,680,true,25.0,83.0,'India','mimamsa',['mimamsa'],['Bhatta school'],'Greatest Mimamsa philosopher; defended Vedic authority and ritual against Buddhist critiques.',['Intrinsic validity of knowledge','Svataḥ prāmāṇya'],[],[],[],['knowledge','dharma','testimony-shabda'],['dharmakirti','buddhaghosa']],
  ['vivekananda','Swami Vivekananda','स्वामी विवेकानन्द',1863,1902,false,22.57,88.36,'Kolkata','advaita-vedanta',['advaita-vedanta','vedanta'],[],'Modern Hindu philosopher who brought Vedanta to the West; synthesized Advaita with social activism.',['Practical Vedanta','Universal religion'],['shankara'],['aurobindo','radhakrishnan'],[],['brahman','moksha','consciousness'],[]],
  ['aurobindo','Sri Aurobindo','श्री अरविन्द',1872,1950,false,11.93,79.83,'Pondicherry','vedanta',['vedanta'],['Integral Yoga'],'Philosopher of integral non-dualism; proposed evolution of consciousness toward a supramental transformation.',['Integral Yoga','Supermind','Evolution of consciousness'],['shankara','vivekananda','hegel'],[],[],['consciousness','being','evolution'],[]],
  ['gandhi','Mahatma Gandhi','महात्मा गांधी',1869,1948,false,23.03,72.58,'Gujarat/India','vedanta',['vedanta'],[],'Philosopher of non-violence (ahimsa) and truth (satyagraha); developed a political philosophy of non-violent resistance.',['Satyagraha','Ahimsa','Swaraj'],['tolstoy','thoreau','bhagavad-gita'],['ambedkar','king'],[],['ahimsa','truth','civil-disobedience','dharma'],[]],
  ['ambedkar','B.R. Ambedkar','भीमराव अम्बेडकर',1891,1956,false,19.08,72.88,'Maharashtra','theravada-buddhism',['theravada-buddhism','social-philosophy'],[],'Architect of India\'s constitution and philosopher of caste abolition; converted to Buddhism as a path of liberation.',['Annihilation of caste','Navayana Buddhism'],['buddha','dewey'],[],[],['justice','equality','liberation'],['gandhi']],

  // CHINESE
  ['confucius','Confucius','孔子',-551,-479,false,35.6,117.0,'Qufu, Shandong','confucianism',['confucianism'],[],'Founder of Confucianism; taught humaneness (ren), ritual propriety (li), and moral cultivation as the basis of good governance.',['Ren (humaneness)','Li (ritual propriety)','Junzi (exemplary person)'],[],['mencius','xunzi','zhu-xi'],['analects'],['ren','li-ritual','yi-righteousness','virtue'],[]],
  ['laozi','Laozi','老子',-600,-500,true,34.0,109.0,'China','daoism',['daoism'],[],'Legendary author of the Daodejing; taught the Dao as the ineffable source of all things and wuwei as the ideal mode of action.',['Dao','Wuwei','Return to simplicity'],[],['zhuangzi'],['daodejing'],['dao','wuwei','yin-yang'],[]],
  ['zhuangzi','Zhuangzi','莊子',-369,-286,true,34.0,114.0,'China','daoism',['daoism'],[],'Daoist philosopher known for relativism, spontaneity, and the butterfly dream; developed Laozi\'s thought into radical freedom.',['Equality of things','Butterfly dream','Wuwei'],['laozi'],[],['zhuangzi-text'],['dao','freedom','wuwei'],['confucius']],
  ['mencius','Mencius','孟子',-372,-289,false,35.6,117.0,'Zou, Shandong','confucianism',['confucianism'],[],'Most important early Confucian after Confucius; argued that human nature is innately good.',['Innate goodness','Four sprouts of virtue'],['confucius'],['zhu-xi'],['mencius-text'],['ren','yi-righteousness','good'],['xunzi']],
  ['xunzi','Xunzi','荀子',-310,-235,true,35.0,117.0,'Zhao/Qi','confucianism',['confucianism'],[],'Confucian who argued human nature tends toward selfishness and needs ritual cultivation.',['Human nature as needing cultivation','Importance of ritual education'],['confucius'],['han-fei'],['xunzi-text'],['li-ritual','virtue'],['mencius']],
  ['mozi','Mozi','墨子',-470,-391,true,35.0,117.0,'Lu state','mohism',['mohism'],[],'Founded Mohism; advocated universal love (jian ai) and consequentialist ethics opposing Confucian ritual.',['Universal love','Anti-aggression','Consequentialism'],[],[],['mozi-text'],['justice','good'],['confucius','mencius']],
  ['han-fei','Han Fei','韓非',-280,-233,false,34.0,109.0,'Han state','legalism',['legalism'],[],'Greatest Legalist philosopher; synthesized law, statecraft, and authority into a comprehensive theory of governance.',['Rule by law','Statecraft','Position of power'],['xunzi','laozi'],[],['han-feizi'],['power','state','authority'],[]],
  ['gongsun-long','Gongsun Long','公孫龍',-320,-250,true,35.0,114.0,'Zhao state','school-of-names',['school-of-names'],[],'Chinese logician famous for the "White Horse" paradox; analyzed the relationship between names and reality.',['White horse is not horse','Name-reality distinction'],[],[],['gongsun-longzi'],['meaning','reference','zhengming'],[]],
  ['huineng','Huineng','惠能',638,713,false,23.13,113.26,'Guangdong','zen-buddhism',['zen-buddhism'],[],'Sixth Patriarch of Chan Buddhism; taught sudden enlightenment and non-duality of meditation and wisdom.',['Sudden enlightenment','No-mind','Buddha-nature'],['buddha','bodhidharma'],[],['platform-sutra'],['satori','emptiness','enlightenment-bodhi'],[]],
  ['zhu-xi','Zhu Xi','朱熹',1130,1200,false,27.75,118.28,'Fujian','neo-confucianism',['neo-confucianism','confucianism'],[],'Greatest Neo-Confucian synthesizer; developed li (principle) and qi (material force) metaphysics.',['Li-Qi metaphysics','Investigation of things','Great Learning commentary'],['cheng-yi','mencius','confucius'],['wang-yangming'],['reflections-on-things-at-hand'],['li-principle','qi','knowledge','virtue'],['wang-yangming','lu-jiuyuan']],
  ['wang-yangming','Wang Yangming','王陽明',1472,1529,false,29.87,121.55,'Zhejiang','neo-confucianism',['neo-confucianism','confucianism'],[],'Developed the School of Mind; taught the unity of knowledge and action and innate moral knowledge (liangzhi).',['Unity of knowledge and action','Liangzhi (innate knowing)'],['lu-jiuyuan','mencius'],[],['instructions-for-practical-living'],['knowledge','virtue','consciousness'],['zhu-xi']],
  ['zhang-zai','Zhang Zai','張載',1020,1077,false,34.27,108.94,'Shaanxi','neo-confucianism',['neo-confucianism'],[],'Neo-Confucian cosmologist who identified qi as the fundamental substance of reality.',['Qi monism','Western Inscription'],['confucius'],['cheng-yi','cheng-hao'],['western-inscription'],['qi','ren'],[]],
  ['cheng-yi','Cheng Yi','程頤',1033,1107,false,34.75,113.65,'Henan','neo-confucianism',['neo-confucianism'],[],'Neo-Confucian who emphasized li (principle) as the metaphysical ground of morality.',['Li as principle','Reverent seriousness'],['zhang-zai','zhou-dunyi'],['zhu-xi'],[],['li-principle','knowledge'],[]],
  ['lu-jiuyuan','Lu Jiuyuan','陸九淵',1139,1193,false,28.0,117.0,'Jiangxi','neo-confucianism',['neo-confucianism'],['School of Mind'],'Pioneer of the School of Mind; argued the mind itself is principle (li).',['Mind is principle'],['mencius'],['wang-yangming'],[],['mind','li-principle'],['zhu-xi']],
  ['zhou-dunyi','Zhou Dunyi','周敦頤',1017,1073,false,25.0,111.0,'Hunan','neo-confucianism',['neo-confucianism'],[],'Pioneer of Neo-Confucianism; wrote on the Supreme Ultimate (Taiji) generating yin-yang.',['Taiji','Diagram of the Supreme Ultimate'],[],['zhang-zai','cheng-yi'],['taiji-tushuo'],['yin-yang','being'],[]],
  ['wang-fuzhi','Wang Fuzhi','王夫之',1619,1692,false,27.0,112.0,'Hunan','neo-confucianism',['neo-confucianism'],[],'Late Ming philosopher who developed a materialist reinterpretation of qi as primary over li.',['Qi as primary','Historical materialism'],['zhang-zai'],['dai-zhen'],[],['qi','being','matter'],[]],
  ['dai-zhen','Dai Zhen','戴震',1724,1777,false,29.7,118.3,'Anhui','confucianism',['confucianism'],['Evidential learning'],'Qing dynasty philosopher who critiqued Song Neo-Confucianism; defended desire and feeling against ascetic li.',['Feelings as natural','Critique of li-centered ethics'],['wang-fuzhi'],[],[],['desire','good','virtue'],['zhu-xi']],

  // JAPANESE
  ['kukai','Kūkai','空海',774,835,false,34.22,135.17,'Mt. Koya','zen-buddhism',['zen-buddhism','mahayana-buddhism'],['Shingon'],'Founder of Shingon Buddhism in Japan; developed esoteric Buddhist philosophy of embodied enlightenment.',['Sokushin jōbutsu','Mandala philosophy'],['buddha'],[],[],['enlightenment-bodhi','consciousness'],[]],
  ['dogen','Dōgen','道元',1200,1253,false,35.01,135.77,'Kyoto','zen-buddhism',['zen-buddhism'],['Soto Zen'],'Founder of Soto Zen in Japan; philosopher of being-time (uji) and the practice-realization unity.',['Being-time (uji)','Shikantaza','Practice-realization unity'],['huineng','nagarjuna'],[],['shobogenzo'],['being','impermanence','satori','emptiness'],[]],
  ['nishida-kitaro','Nishida Kitarō','西田幾多郎',1870,1945,false,35.01,135.77,'Kyoto','kyoto-school',['kyoto-school'],[],'Founder of the Kyoto School; developed "pure experience" and "absolute nothingness" synthesizing Zen with Western philosophy.',['Pure experience','Basho (place)','Absolute nothingness'],['james','hegel','zen-buddhism'],[],['inquiry-into-the-good'],['nothingness','experience','consciousness'],[]],
  ['tanabe-hajime','Tanabe Hajime','田辺元',1885,1962,false,35.01,135.77,'Kyoto','kyoto-school',['kyoto-school'],[],'Kyoto School philosopher who developed the "logic of species" mediating between universal and individual.',['Logic of species','Philosophy as metanoetics'],['nishida-kitaro','hegel'],[],[],['being','nothingness','dialectic'],[]],
  ['nishitani-keiji','Nishitani Keiji','西谷啓治',1900,1990,false,35.01,135.77,'Kyoto','kyoto-school',['kyoto-school'],[],'Kyoto School philosopher who addressed nihilism through the concept of śūnyatā as the overcoming of Western nihilism.',['Śūnyatā as overcoming nihilism','Standpoint of emptiness'],['nishida-kitaro','heidegger','nietzsche'],[],[],['nothingness','emptiness','nihilism'],[]],
  ['watsuji-tetsuro','Watsuji Tetsurō','和辻哲郎',1889,1960,false,35.01,135.77,'Kyoto/Tokyo','kyoto-school',['kyoto-school','hermeneutics'],[],'Japanese ethicist who developed a relational conception of human existence rooted in climate and culture.',['Aidagara (betweenness)','Climate and culture'],['heidegger','confucius'],[],[],['self','community','ethics'],[]],

  // ISLAMIC
  ['al-kindi','Al-Kindī','الكندي',801,873,false,33.3,44.4,'Baghdad','islamic-falsafa',['islamic-falsafa'],[],'First philosopher of the Islamic world; demonstrated the compatibility of Greek philosophy with Islam.',['Harmony of reason and revelation','Created intellect'],[],['al-farabi'],['on-first-philosophy'],['intellect','god','knowledge'],[]],
  ['al-farabi','Al-Fārābī','الفارابي',872,950,false,33.3,44.4,'Baghdad','islamic-falsafa',['islamic-falsafa'],[],'The "Second Teacher" (after Aristotle); synthesized Plato and Aristotle and developed emanationist metaphysics.',['Virtuous city','Emanation of intellects','Harmony of Plato and Aristotle'],['al-kindi','aristotle','plato'],['ibn-sina'],['virtuous-city'],['intellect','emanation','good','state'],[]],
  ['ibn-sina','Ibn Sīnā (Avicenna)','ابن سينا',980,1037,false,39.77,64.42,'Bukhara/Isfahan','islamic-falsafa',['islamic-falsafa'],[],'Greatest philosopher of the Islamic world; developed a comprehensive system of metaphysics, logic, and medicine.',['Essence-existence distinction','Flying Man argument','Necessary Being'],['al-farabi','aristotle'],['al-ghazali','ibn-rushd','aquinas','suhrawardi','mulla-sadra'],['book-of-healing'],['being','essence','existence','god','soul'],['al-ghazali']],
  ['al-ghazali','Al-Ghazālī','الغزالي',1058,1111,false,36.32,59.61,'Tus/Baghdad','kalam',['kalam','sufism'],['Ash\'arism'],'Critiqued the philosophers in Incoherence of the Philosophers; revitalized Sufi spirituality within orthodox Islam.',['Incoherence of philosophy','Occasionalism','Sufi epistemology'],['ibn-sina'],['ibn-rushd','aquinas'],['incoherence-of-philosophers','deliverance-from-error'],['god','knowledge','mystical-experience'],['ibn-sina','ibn-rushd']],
  ['ibn-rushd','Ibn Rushd (Averroes)','ابن رشد',1126,1198,false,37.88,-4.77,'Córdoba','islamic-falsafa',['islamic-falsafa'],[],'Greatest Aristotelian commentator in the Islamic world; defended philosophy against al-Ghazali\'s critique.',['Double truth rejected','Unity of intellect','Defense of philosophy'],['aristotle','ibn-sina'],['aquinas','latin-averroists'],['incoherence-of-incoherence'],['reason','truth','intellect'],['al-ghazali']],
  ['ibn-arabi','Ibn ʿArabī','ابن عربي',1165,1240,false,37.39,-5.99,'Murcia/Damascus','sufism',['sufism','islamic-falsafa'],[],'Greatest Sufi metaphysician; developed the concept of wahdat al-wujud (unity of being).',['Wahdat al-wujud','Perfect Human','Imagination'],['plotinus'],['mulla-sadra','rumi'],['fusus-al-hikam'],['being','divine','mystical-experience'],[]],
  ['suhrawardi','Suhrawardī','سهروردی',1154,1191,false,36.0,53.0,'Persia/Aleppo','islamic-falsafa',['islamic-falsafa'],['Illuminationism'],'Founder of Illuminationist philosophy; synthesized Platonic and Zoroastrian light metaphysics.',['Ishraq (illumination)','Light metaphysics'],['plato','plotinus'],['mulla-sadra'],['philosophy-of-illumination'],['illumination','knowledge','being'],[]],
  ['mulla-sadra','Mullā Ṣadrā','ملا صدرا',1572,1640,false,29.62,52.53,'Shiraz','islamic-falsafa',['islamic-falsafa'],['Transcendent Theosophy'],'Greatest late Islamic philosopher; synthesized Peripatetic, Illuminationist, and Sufi thought.',['Substantial motion','Primacy of existence','Transcendent theosophy'],['ibn-sina','suhrawardi','ibn-arabi'],[],['transcendent-theosophy'],['being','existence','soul','god'],[]],
  ['ibn-khaldun','Ibn Khaldūn','ابن خلدون',1332,1406,false,36.8,10.18,'Tunis','islamic-falsafa',['islamic-falsafa'],[],'Pioneer of historiography and social science; analyzed the rise and fall of civilizations through asabiyyah.',['Asabiyyah','Cyclical history','Social science of civilization'],[],[],['muqaddimah'],['state','power','history'],[]],
  ['ibn-tufayl','Ibn Ṭufayl','ابن طفيل',1105,1185,false,37.18,-3.6,'Granada','islamic-falsafa',['islamic-falsafa'],[],'Author of Hayy ibn Yaqzan, a philosophical novel about natural reason discovering truth without revelation.',['Natural reason','Autodidactic philosophy'],['ibn-sina'],[],['hayy-ibn-yaqzan'],['knowledge','reason','god'],[]],
  ['muhammad-iqbal','Muhammad Iqbal','محمد اقبال',1877,1938,false,31.52,74.35,'Lahore','islamic-falsafa',['islamic-falsafa'],[],'Poet-philosopher who reconstructed Islamic thought using Bergson and Nietzsche; advocated the creative self.',['Khudi (selfhood)','Reconstruction of religious thought'],['nietzsche','rumi','bergson'],[],[],['self','freedom','god'],[]],

  // JEWISH
  ['philo-of-alexandria','Philo of Alexandria','Φίλων',-25,50,true,31.2,29.95,'Alexandria','jewish-philosophy',['jewish-philosophy','platonism'],[],'First major Jewish philosopher; synthesized Hellenistic philosophy with Torah interpretation.',['Allegorical exegesis','Logos as mediator'],['plato','stoicism'],[],[],['logos','god','divine'],[]],
  ['saadia-gaon','Saadia Gaon','סעדיה גאון',882,942,false,30.0,47.0,'Fayyum/Baghdad','jewish-philosophy',['jewish-philosophy'],[],'First systematic Jewish philosopher; defended rational theology and free will.',['Rational theology','Four sources of knowledge'],[],['maimonides'],['book-of-beliefs-and-opinions'],['god','knowledge','free-will'],[]],
  ['judah-halevi','Judah Halevi','יהודה הלוי',1075,1141,false,37.39,-6.0,'Toledo/Palestine','jewish-philosophy',['jewish-philosophy'],[],'Poet-philosopher who argued for the superiority of revelation over philosophical reasoning.',['Critique of philosophy','Experiential knowledge of God'],[],[],['kuzari'],['revelation','faith','god'],['aristotle']],
  ['maimonides','Maimonides','משה בן מימון',1138,1204,false,37.88,-4.77,'Córdoba/Cairo','jewish-philosophy',['jewish-philosophy','aristotelianism'],[],'Greatest medieval Jewish philosopher; reconciled Aristotelian philosophy with Torah through negative theology.',['Negative theology','Guide of the perplexed','13 principles'],['aristotle','al-farabi'],[],['guide-for-the-perplexed'],['god','knowledge','reason'],[]],
  ['spinoza','Baruch Spinoza','ברוך שפינוזה',1632,1677,false,52.37,4.9,'Amsterdam','rationalism',['rationalism','jewish-philosophy'],[],'Developed a radical monistic metaphysics identifying God with Nature; Ethics demonstrated in geometric order.',['Deus sive Natura','Substance monism','Conatus'],['descartes','maimonides'],['hegel','deleuze','einstein'],['ethics-spinoza'],['god','substance','freedom','monism'],['descartes']],
  ['buber','Martin Buber','מרטין בובר',1878,1965,false,48.2,16.37,'Vienna/Jerusalem','jewish-philosophy',['jewish-philosophy','existentialism'],[],'Philosopher of dialogue; distinguished I-Thou encounter (genuine relation) from I-It objectification.',['I-Thou/I-It','Dialogical philosophy'],['kierkegaard','hasidism'],['levinas'],['i-and-thou'],['dialogue-concept','alterity','god'],[]],
  ['levinas','Emmanuel Levinas','עמנואל לוינס',1906,1995,false,48.85,2.35,'Paris','phenomenology',['phenomenology','jewish-philosophy'],[],'Philosopher of alterity; argued that ethics — the face-to-face encounter with the Other — is first philosophy.',['Face of the Other','Ethics as first philosophy','Infinite responsibility'],['husserl','heidegger'],['derrida'],['totality-and-infinity'],['alterity','ethics','face','transcendence'],['heidegger']],

  // AFRICAN
  ['ptahhotep','Ptahhotep','',-2400,-2350,true,29.87,31.25,'Memphis, Egypt','africana-philosophy',['africana-philosophy'],[],'Ancient Egyptian vizier; author of one of the oldest works of philosophical wisdom literature on justice and conduct.',['Maat (cosmic justice)','Wisdom through listening'],[],[],['maxims-of-ptahhotep'],['maat','justice','virtue'],[]],
  ['zera-yacob','Zera Yacob','ዘርአ ያዕቆብ',1599,1692,false,13.5,39.47,'Axum, Ethiopia','africana-philosophy',['africana-philosophy'],[],'Ethiopian rationalist philosopher whose Hatata independently developed arguments for God\'s existence and human equality.',['Rational inquiry','Human equality','Natural theology'],[],['walda-heywat'],['hatata'],['reason','god','equality'],[]],
  ['nkrumah','Kwame Nkrumah','',1909,1972,false,5.6,-0.19,'Accra, Ghana','africana-philosophy',['africana-philosophy'],['Pan-Africanism'],'First president of Ghana and philosopher of pan-Africanism; developed consciencism as a philosophical framework for decolonization.',['Consciencism','Pan-Africanism'],['marx','gandhi'],['fanon'],['consciencism'],['decolonization','freedom','consciencism-concept'],[]],
  ['senghor','Léopold Sédar Senghor','',1906,2001,false,14.69,-17.44,'Dakar, Senegal','africana-philosophy',['africana-philosophy'],['Negritude'],'Poet-philosopher and president of Senegal; co-founded the Negritude movement celebrating African identity and values.',['Negritude','African emotion vs European reason'],[],[],[],['negritude','identity'],['wiredu']],
  ['fanon','Frantz Fanon','',1925,1961,false,14.62,-61.06,'Martinique/Algeria','postcolonial-philosophy',['postcolonial-philosophy','existentialism'],[],'Psychiatrist and philosopher of decolonization; analyzed the psychopathology of colonialism and the necessity of liberation.',['Colonial psychopathology','Violence and liberation','National consciousness'],['sartre','hegel','marx'],['said','spivak','bhabha','mbembe'],['wretched-of-the-earth','black-skin-white-masks'],['colonialism','freedom','alienation','decolonization'],[]],
  ['wiredu','Kwasi Wiredu','',1931,2022,false,5.6,-0.19,'Accra, Ghana','africana-philosophy',['africana-philosophy'],[],'Analytical African philosopher who advocated conceptual decolonization through critical examination of inherited concepts.',['Conceptual decolonization','Consensual democracy'],[],[],[],['truth','knowledge','decolonization'],['senghor']],
  ['hountondji','Paulin Hountondji','',1942,2024,false,6.37,2.43,'Cotonou, Benin','africana-philosophy',['africana-philosophy'],[],'Critic of ethnophilosophy; argued African philosophy must be critical, individual discourse, not collective worldview.',['Critique of ethnophilosophy','Scientific pluralism'],[],[],[],['knowledge','tradition-concept'],[]],
  ['mbembe','Achille Mbembe','',1957,2025,false,-25.75,28.23,'Johannesburg','postcolonial-philosophy',['postcolonial-philosophy','africana-philosophy'],[],'Philosopher of necropolitics and postcolonial critique; analyzes power, death, and racial capitalism.',['Necropolitics','Critique of reason'],['fanon','foucault'],[],[],['power','colonialism','death'],[]],
  ['ramose','Mogobe Ramose','',1945,2025,false,-25.75,28.23,'South Africa','ubuntu-philosophy',['ubuntu-philosophy','africana-philosophy'],[],'Leading philosopher of ubuntu; developed ubuntu as a comprehensive philosophical system.',['Ubuntu as philosophy','Be-ing and motion'],[],[],[],['ubuntu','being','community'],[]],

  // CHRISTIAN/MEDIEVAL
  ['augustine','Augustine of Hippo','Aurelius Augustinus',354,430,false,36.37,7.59,'Hippo Regius/Milan','augustinianism',['augustinianism','scholasticism'],[],'Greatest Church Father philosopher; synthesized Neoplatonism with Christianity; explored time, memory, and free will.',['Original sin','Divine illumination','Time as distension of the soul'],['plato','plotinus'],['aquinas','anselm','descartes'],['confessions-augustine','city-of-god'],['god','soul','free-will','evil'],['pelagius']],
  ['boethius','Boethius','Anicius Manlius Severinus Boëthius',477,524,false,41.9,12.5,'Rome','scholasticism',['scholasticism','neoplatonism'],[],'Last Roman philosopher; his Consolation of Philosophy mediated Greco-Roman thought to the Latin Middle Ages.',['Consolation through philosophy','Eternity vs temporality'],['aristotle','plato'],[],['consolation-of-philosophy'],['god','freedom','good'],[]],
  ['anselm','Anselm of Canterbury','',1033,1109,false,51.28,1.08,'Canterbury','scholasticism',['scholasticism'],[],'Developed the ontological argument for God\'s existence; "faith seeking understanding."',['Ontological argument','Fides quaerens intellectum'],['augustine'],['descartes','kant'],['proslogion'],['god','being','existence'],['gaunilo']],
  ['abelard','Peter Abelard','Petrus Abaelardus',1079,1142,false,48.85,2.35,'Paris','scholasticism',['scholasticism'],[],'Pioneer of scholastic method; developed a conceptualist solution to the problem of universals.',['Conceptualism','Sic et Non method'],['aristotle','boethius'],['aquinas'],['sic-et-non'],['universals','knowledge'],[]],
  ['aquinas','Thomas Aquinas','',1225,1274,false,41.9,12.5,'Paris/Naples','thomism',['thomism','scholasticism'],['Dominican'],'Greatest scholastic philosopher; synthesized Aristotle with Christian theology in the Summa Theologiae.',['Five Ways','Essence-existence distinction','Natural law','Analogy of being'],['aristotle','ibn-sina','ibn-rushd','augustine'],['duns-scotus','suarez'],['summa-theologiae','summa-contra-gentiles'],['god','being','substance','good','virtue'],['duns-scotus']],
  ['duns-scotus','John Duns Scotus','',1266,1308,false,55.78,-2.1,'Duns/Paris','scholasticism',['scholasticism'],['Franciscan'],'Subtle Doctor; developed univocity of being and haecceitas (thisness) as principles of individuation.',['Univocity of being','Haecceitas','Formal distinction'],['aristotle','aquinas'],['william-of-ockham'],[],['being','universals','essence'],['aquinas']],
  ['william-of-ockham','William of Ockham','',1287,1347,false,51.3,-0.86,'Ockham/Munich','nominalism',['nominalism','scholasticism'],['Franciscan'],'Father of nominalism; argued universals are mental concepts only; developed Ockham\'s Razor.',['Ockham\'s Razor','Nominalism','Voluntarism'],['duns-scotus'],[],['summa-logicae'],['universals','knowledge'],['aquinas','duns-scotus']],
  ['meister-eckhart','Meister Eckhart','',1260,1328,false,50.97,11.03,'Thuringia','scholasticism',['scholasticism','mysticism'],['Dominican'],'Christian mystic philosopher who taught the birth of the Word in the soul and detachment (Gelassenheit).',['Gelassenheit','Birth of the Word','Ground of the soul'],[],['heidegger','nicholas-of-cusa'],[],['god','nothingness','mystical-experience'],[]],
  ['nicholas-of-cusa','Nicholas of Cusa','Nicolaus Cusanus',1401,1464,false,50.05,7.06,'Kues/Rome','scholasticism',['scholasticism'],[],'Philosopher of learned ignorance; argued God transcends all opposites (coincidentia oppositorum).',['Learned ignorance','Coincidentia oppositorum'],['meister-eckhart','plato'],[],['de-docta-ignorantia'],['god','knowledge','infinity'],[]],

  // MODERN EUROPEAN
  ['descartes','René Descartes','',1596,1650,false,48.85,2.35,'France/Netherlands','rationalism',['rationalism'],[],'Father of modern philosophy; established foundational epistemology through methodical doubt and the cogito.',['Cogito ergo sum','Mind-body dualism','Methodical doubt'],['augustine','anselm'],['spinoza','leibniz','locke','malebranche'],['meditations-on-first-philosophy','discourse-on-method'],['mind','knowledge','god','dualism','certainty'],[]],
  ['hobbes','Thomas Hobbes','',1588,1679,false,51.5,-0.12,'London','empiricism',['empiricism'],[],'Materialist philosopher who argued for absolute sovereignty; humans in nature are in a war of all against all.',['Social contract','State of nature','Leviathan'],['galileo'],['locke','rousseau'],['leviathan'],['state','power','social-contract'],['descartes']],
  ['locke','John Locke','',1632,1704,false,51.5,-0.12,'London','empiricism',['empiricism'],[],'Father of British empiricism and political liberalism; argued the mind begins as a blank slate.',['Tabula rasa','Natural rights','Government by consent'],['descartes','hobbes'],['berkeley','hume','jefferson'],['essay-concerning-human-understanding','two-treatises-government'],['knowledge','experience','rights','freedom'],[]],
  ['berkeley','George Berkeley','',1685,1753,false,53.35,-6.26,'Dublin/London','empiricism',['empiricism'],[],'Developed subjective idealism: to be is to be perceived (esse est percipi).',['Esse est percipi','Immaterialism'],['locke'],['hume'],[],['perception','idealism','being','god'],['locke']],
  ['hume','David Hume','',1711,1776,false,55.95,-3.19,'Edinburgh','empiricism',['empiricism'],[],'Greatest British empiricist; challenged causation, induction, personal identity, and natural theology.',['Problem of induction','Bundle theory of self','Is-ought gap'],['locke','berkeley'],['kant','logical-positivism','quine'],['treatise-of-human-nature','enquiry-human-understanding'],['knowledge','skepticism','perception','self'],['descartes','leibniz']],
  ['leibniz','Gottfried Wilhelm Leibniz','',1646,1716,false,52.37,9.74,'Hanover','rationalism',['rationalism'],[],'Developed the monadology and principle of sufficient reason; co-invented calculus.',['Monadology','Pre-established harmony','Best of all possible worlds'],['descartes','spinoza'],['kant','whitehead','analytic-philosophy'],['monadology'],['monad','god','substance','being'],['locke']],
  ['kant','Immanuel Kant','',1724,1804,false,54.72,20.51,'Königsberg','german-idealism',['german-idealism','rationalism'],[],'Initiated the critical turn in philosophy; synthesized rationalism and empiricism in the Critique of Pure Reason.',['Transcendental idealism','Categorical imperative','Synthetic a priori'],['hume','leibniz','rousseau'],['fichte','hegel','schopenhauer','husserl'],['critique-of-pure-reason','critique-of-practical-reason','groundwork-metaphysics-morals'],['a-priori','noumena','phenomena','categorical-imperative','duty','autonomy'],[]],
  ['fichte','Johann Gottlieb Fichte','',1762,1814,false,51.34,12.37,'Rammenau/Berlin','german-idealism',['german-idealism'],[],'Radicalized Kant\'s idealism; the self-positing I (Ich) is the foundation of all reality.',['Self-positing I','Wissenschaftslehre'],['kant'],['schelling','hegel'],[],['self','freedom','being'],[]],
  ['schelling','Friedrich Schelling','',1775,1854,false,48.14,11.58,'Munich/Berlin','german-idealism',['german-idealism'],[],'Developed a philosophy of nature and identity; sought to reunify nature and spirit.',['Philosophy of nature','Identity philosophy','Positive philosophy'],['kant','fichte','spinoza'],['hegel','kierkegaard','heidegger'],[],['being','freedom','nature'],[]],
  ['hegel','Georg Wilhelm Friedrich Hegel','',1770,1831,false,52.52,13.4,'Berlin','german-idealism',['german-idealism'],[],'Developed the most comprehensive philosophical system since Aristotle through dialectical method.',['Dialectic','Absolute Spirit','Master-slave dialectic','Aufhebung'],['kant','fichte','schelling'],['marx','kierkegaard','sartre','beauvoir','adorno','dussel'],['phenomenology-of-spirit','science-of-logic'],['dialectic','being','freedom','spirit','reason'],['kierkegaard','marx']],
  ['schopenhauer','Arthur Schopenhauer','',1788,1860,false,52.52,13.4,'Frankfurt/Berlin','german-idealism',['german-idealism'],[],'Philosopher of pessimism; the world is driven by blind Will; influenced by both Kant and Indian philosophy.',['World as Will','Pessimism','Aesthetic contemplation'],['kant','upanishads','buddha'],['nietzsche','wittgenstein'],['world-as-will'],['will','suffering','maya'],['hegel']],
  ['kierkegaard','Søren Kierkegaard','',1813,1855,false,55.68,12.57,'Copenhagen','existentialism',['existentialism'],[],'Father of existentialism; emphasized subjective truth, the leap of faith, and the stages of existence.',['Leap of faith','Three stages of existence','Anxiety and despair'],['socrates','hegel'],['heidegger','sartre','buber'],['either-or','fear-and-trembling'],['anxiety','authenticity','faith','freedom-existential'],['hegel']],
  ['nietzsche','Friedrich Nietzsche','',1844,1900,false,51.34,12.37,'Leipzig/Turin','existentialism',['existentialism'],[],'Proclaimed the death of God; developed will to power, eternal recurrence, and Übermensch.',['Will to power','Eternal recurrence','Death of God','Übermensch'],['schopenhauer','heraclitus'],['heidegger','foucault','derrida','deleuze','camus'],['beyond-good-and-evil','thus-spoke-zarathustra','genealogy-of-morals'],['power','good','evil','truth','nothingness'],['socrates','kant']],
  ['marx','Karl Marx','',1818,1883,false,51.5,-0.12,'London','marxism',['marxism'],[],'Developed historical materialism and critique of capitalism; material conditions determine consciousness.',['Historical materialism','Alienation','Class struggle','Surplus value'],['hegel','feuerbach','smith'],['gramsci','lukacs','adorno','benjamin','fanon','dussel'],['capital','communist-manifesto'],['alienation','dialectic','praxis','class','power'],['hegel','proudhon']],
  ['mill','John Stuart Mill','',1806,1873,false,51.5,-0.12,'London','utilitarianism',['utilitarianism','empiricism'],[],'Greatest utilitarian philosopher; defended liberty, women\'s rights, and qualitative distinctions among pleasures.',['Higher and lower pleasures','Harm principle','Women\'s equality'],['bentham'],['rawls'],['on-liberty','utilitarianism-mill'],['pleasure','freedom','rights','justice'],[]],
  ['husserl','Edmund Husserl','',1859,1938,false,49.81,9.95,'Göttingen/Freiburg','phenomenology',['phenomenology'],[],'Founder of phenomenology; developed the method of bracketing (epochē) to investigate the structures of consciousness.',['Intentionality','Phenomenological reduction','Lifeworld'],['descartes','brentano'],['heidegger','sartre','merleau-ponty','levinas'],['logical-investigations','ideas-husserl'],['consciousness','intentionality','experience','phenomena'],[]],
  ['heidegger','Martin Heidegger','',1889,1976,false,47.99,8.4,'Freiburg','phenomenology',['phenomenology','existentialism'],[],'Posed the question of Being (Seinsfrage); analyzed human existence (Dasein) as being-toward-death.',['Dasein','Being-toward-death','Ontological difference','Aletheia'],['husserl','kierkegaard','nietzsche','aristotle'],['sartre','gadamer','levinas','derrida','arendt','nishitani-keiji'],['being-and-time'],['being','dasein','authenticity','death','nothingness','truth'],['husserl','carnap']],
  ['sartre','Jean-Paul Sartre','',1905,1980,false,48.85,2.35,'Paris','existentialism',['existentialism','phenomenology'],[],'Existentialist who declared "existence precedes essence"; humans are "condemned to be free."',['Existence precedes essence','Radical freedom','Bad faith','Being-for-itself'],['heidegger','husserl','hegel'],['beauvoir','fanon'],['being-and-nothingness'],['freedom-existential','bad-faith','nothingness','authenticity'],['camus']],
  ['beauvoir','Simone de Beauvoir','',1908,1986,false,48.85,2.35,'Paris','existentialism',['existentialism','feminist-philosophy'],[],'Existentialist feminist who analyzed woman as "Other"; The Second Sex is a founding text of modern feminism.',['Woman as Other','Situated freedom','Ethics of ambiguity'],['hegel','husserl','sartre'],['butler','feminist-philosophy'],['the-second-sex'],['freedom-existential','gender','autonomy','alterity'],[]],
  ['camus','Albert Camus','',1913,1960,false,48.85,2.35,'Paris/Algiers','existentialism',['existentialism'],[],'Philosopher of the absurd; argued that life\'s meaninglessness demands revolt, not suicide.',['The Absurd','Revolt','Sisyphus as happy'],['nietzsche','kierkegaard'],['postmodern-thought'],['myth-of-sisyphus'],['absurdity','meaning-of-life','freedom'],['sartre']],
  ['merleau-ponty','Maurice Merleau-Ponty','',1908,1961,false,48.85,2.35,'Paris','phenomenology',['phenomenology'],[],'Philosopher of embodied perception; developed a phenomenology of the body as our primary mode of being-in-the-world.',['Embodied perception','Flesh of the world','Primacy of perception'],['husserl','heidegger'],['cognitive-science'],['phenomenology-of-perception'],['consciousness','perception','experience','embodiment'],[]],
  ['gadamer','Hans-Georg Gadamer','',1900,2002,false,49.4,8.68,'Heidelberg','hermeneutics',['hermeneutics','phenomenology'],[],'Founder of philosophical hermeneutics; understanding always involves a "fusion of horizons."',['Fusion of horizons','Effective historical consciousness','Prejudice as productive'],['heidegger','plato'],['ricoeur'],['truth-and-method'],['hermeneutics-concept','truth','tradition-concept'],['habermas']],
  ['arendt','Hannah Arendt','',1906,1975,false,40.71,-74.01,'New York','existentialism',['existentialism','political-philosophy'],[],'Political philosopher who analyzed totalitarianism, the banality of evil, and the vita activa.',['Banality of evil','Action','Natality','Public sphere'],['heidegger','kant','augustine'],[],['human-condition'],['power','freedom','state','evil'],[]],
  ['wittgenstein','Ludwig Wittgenstein','',1889,1951,false,52.2,0.12,'Cambridge','analytic-philosophy',['analytic-philosophy'],[],'Revolutionized philosophy twice: logical atomism (Tractatus) and language games (Philosophical Investigations).',['Picture theory of meaning','Language games','Family resemblance','Private language argument'],['frege','russell'],['austin','ryle','kripke'],['tractatus','philosophical-investigations'],['meaning','language-game','truth','reference'],[]],
  ['russell','Bertrand Russell','',1872,1970,false,52.2,0.12,'Cambridge','analytic-philosophy',['analytic-philosophy'],[],'Pioneer of analytic philosophy and mathematical logic; co-authored Principia Mathematica.',['Theory of descriptions','Logical atomism','Type theory'],['frege','moore-ge'],['wittgenstein','carnap','quine'],['principia-mathematica'],['truth','reference','knowledge','meaning'],[]],
  ['frege','Gottlob Frege','',1848,1925,false,50.93,13.34,'Jena','analytic-philosophy',['analytic-philosophy'],[],'Father of modern logic; distinguished sense from reference; founded the logicist program.',['Sense and reference','Function and argument','Logicism'],[],['russell','wittgenstein','carnap'],[],['meaning','reference','truth','logos'],[]],
  ['carnap','Rudolf Carnap','',1891,1970,false,34.05,-118.24,'Vienna/Chicago','analytic-philosophy',['analytic-philosophy','logical-positivism'],['Vienna Circle'],'Leading logical positivist; developed the linguistic framework approach and the elimination of metaphysics.',['Logical syntax','Internal/external questions','Elimination of metaphysics'],['frege','russell','wittgenstein'],['quine'],[],['meaning','truth','a-priori'],['heidegger']],
  ['quine','Willard Van Orman Quine','',1908,2000,false,42.37,-71.12,'Cambridge, MA','analytic-philosophy',['analytic-philosophy'],[],'Challenged the analytic-synthetic distinction and the notion of meaning; developed naturalized epistemology.',['Two Dogmas','Indeterminacy of translation','Naturalized epistemology'],['carnap','russell'],['davidson','kripke'],['word-and-object'],['meaning','truth','knowledge'],['carnap']],
  ['popper','Karl Popper','',1902,1994,false,51.5,-0.12,'London','analytic-philosophy',['analytic-philosophy','philosophy-of-science'],[],'Philosopher of science who proposed falsificationism; advocated the open society against totalitarianism.',['Falsificationism','Critical rationalism','Open society'],['hume','kant'],[],['logic-of-scientific-discovery'],['truth','knowledge','skepticism'],['kuhn']],
  ['kuhn','Thomas Kuhn','',1922,1996,false,42.37,-71.12,'Cambridge, MA','analytic-philosophy',['analytic-philosophy','philosophy-of-science'],[],'Revolutionized philosophy of science with the concept of paradigm shifts.',['Paradigm shifts','Normal science','Incommensurability'],[],[],['structure-scientific-revolutions'],['truth','knowledge','incommensurability'],['popper']],
  ['foucault','Michel Foucault','',1926,1984,false,48.85,2.35,'Paris','post-structuralism',['post-structuralism'],[],'Analyzed the relationship between power and knowledge; studied how discourses shape subjectivity.',['Power/knowledge','Genealogy','Biopolitics','Discourse'],['nietzsche','heidegger'],['butler','said','agamben'],['discipline-and-punish','order-of-things'],['power','knowledge','self','freedom'],['habermas','sartre']],
  ['derrida','Jacques Derrida','',1930,2004,false,48.85,2.35,'Paris','post-structuralism',['post-structuralism','deconstruction'],[],'Founder of deconstruction; showed how texts undermine their own philosophical presuppositions.',['Deconstruction','Différance','Logocentrism'],['heidegger','husserl','nietzsche','levinas'],['butler','spivak'],['of-grammatology'],['deconstruction-concept','meaning','reference','alterity'],['searle']],
  ['deleuze','Gilles Deleuze','',1925,1995,false,48.85,2.35,'Paris','post-structuralism',['post-structuralism'],[],'Philosopher of difference and immanence; developed concepts of rhizome, becoming, and virtual/actual.',['Difference in itself','Rhizome','Immanence','Becoming'],['spinoza','nietzsche','bergson'],[],['difference-and-repetition'],['being','becoming','substance'],[]],
  ['habermas','Jürgen Habermas','',1929,2025,false,50.11,8.68,'Frankfurt','critical-theory',['critical-theory'],[],'Second-generation Frankfurt School; developed communicative action theory and discourse ethics.',['Communicative action','Discourse ethics','Public sphere'],['kant','marx','adorno'],['contemporary-social-philosophy'],['theory-communicative-action'],['reason','truth','democracy','dialogue-concept'],['gadamer','foucault']],
  ['adorno','Theodor W. Adorno','',1903,1969,false,50.11,8.68,'Frankfurt','critical-theory',['critical-theory','marxism'],['Frankfurt School'],'Critical theorist who analyzed the culture industry and the dialectic of Enlightenment.',['Negative dialectics','Culture industry','Dialectic of Enlightenment'],['marx','hegel','benjamin'],['habermas'],['dialectic-of-enlightenment'],['dialectic','reason','alienation'],[]],
  ['benjamin','Walter Benjamin','',1892,1940,false,52.52,13.4,'Berlin','critical-theory',['critical-theory','marxism'],[],'Critic and philosopher who analyzed art in the age of mechanical reproduction and the philosophy of history.',['Aura','Angel of History','Dialectical image'],['marx','jewish-mysticism'],['adorno','arendt'],[],['aesthetics','history','dialectic'],[]],
  ['marcuse','Herbert Marcuse','',1898,1979,false,34.05,-118.24,'Berlin/San Diego','critical-theory',['critical-theory','marxism'],['Frankfurt School'],'Analyzed how advanced capitalism creates "one-dimensional" thought suppressing liberation.',['One-dimensional man','Repressive desublimation','Great Refusal'],['marx','hegel','freud'],[],['one-dimensional-man'],['freedom','alienation','reason'],[]],
  ['gramsci','Antonio Gramsci','',1891,1937,false,41.9,12.5,'Sardinia/Turin','marxism',['marxism'],[],'Marxist philosopher who developed the concept of cultural hegemony and the organic intellectual.',['Cultural hegemony','Organic intellectual','War of position'],['marx','machiavelli'],['said','laclau'],['prison-notebooks'],['hegemony','power','praxis','ideology'],[]],
  ['rawls','John Rawls','',1921,2002,false,42.37,-71.12,'Cambridge, MA','analytic-philosophy',['analytic-philosophy','political-philosophy'],[],'Developed justice as fairness through the original position and veil of ignorance thought experiment.',['Veil of ignorance','Two principles of justice','Original position'],['kant','mill'],[],['theory-of-justice'],['justice','equality','freedom','rights'],['nozick']],
  ['kripke','Saul Kripke','',1940,2022,false,40.71,-74.01,'New York','analytic-philosophy',['analytic-philosophy'],[],'Developed the causal theory of reference and necessary a posteriori truths.',['Rigid designators','Necessary a posteriori','Possible worlds semantics'],['frege','russell'],[],['naming-and-necessity'],['meaning','reference','truth','a-priori'],[]],

  // AMERICAN/PRAGMATIST
  ['emerson','Ralph Waldo Emerson','',1803,1882,false,42.37,-71.12,'Concord, MA','transcendentalism',['transcendentalism'],[],'American transcendentalist who advocated self-reliance and the divinity of nature.',['Self-reliance','Oversoul','Transcendentalism'],[],['thoreau','nietzsche','james'],['nature-emerson'],['self','divine','nature'],[]],
  ['peirce','Charles Sanders Peirce','',1839,1914,false,40.35,-74.66,'Milford, PA','pragmatism',['pragmatism'],[],'Founder of pragmatism and semiotics; developed the pragmatic maxim and a sophisticated logic of inquiry.',['Pragmatic maxim','Semiotics','Fallibilism'],['kant'],[' james','dewey'],[],['truth','meaning','inference'],[]],
  ['james','William James','',1842,1910,false,42.37,-71.12,'Cambridge, MA','pragmatism',['pragmatism'],[],'Developed pragmatic theory of truth and radical empiricism; founded psychology as a discipline in America.',['Pragmatic truth','Radical empiricism','Will to believe'],['peirce','mill'],['dewey','rorty','nishida-kitaro'],['pragmatism-james'],['truth','experience','consciousness'],[]],
  ['dewey','John Dewey','',1859,1952,false,40.71,-74.01,'New York','pragmatism',['pragmatism'],[],'Greatest American philosopher of education and democracy; developed instrumentalism and experiential learning.',['Instrumentalism','Education as growth','Democracy as way of life'],['james','hegel'],['rorty','ambedkar'],['democracy-and-education'],['experience','democracy','knowledge','truth'],[]],
  ['du-bois','W.E.B. Du Bois','',1868,1963,false,42.37,-71.12,'Great Barrington/Atlanta','africana-philosophy',['africana-philosophy','pragmatism'],[],'Philosopher of double consciousness and the color line; foundational figure in Africana philosophy.',['Double consciousness','The Veil','Talented Tenth'],[],['fanon','cornel-west'],['souls-of-black-folk'],['consciousness','freedom','equality','alienation'],[]],
  ['whitehead','Alfred North Whitehead','',1861,1947,false,42.37,-71.12,'Cambridge, MA','process-philosophy',['process-philosophy'],[],'Developed process philosophy; reality consists of events and occasions of experience, not substances.',['Process and reality','Actual occasions','Creativity'],['russell','james'],[],['process-and-reality'],['becoming','experience','god'],[]],
  ['rorty','Richard Rorty','',1931,2007,false,40.35,-74.66,'Princeton/Stanford','pragmatism',['pragmatism','analytic-philosophy'],[],'Neo-pragmatist who rejected the mirror of nature metaphor; advocated solidarity over objectivity.',['Anti-representationalism','Irony','Solidarity'],['dewey','wittgenstein','heidegger'],[],['philosophy-and-mirror-of-nature'],['truth','knowledge','meaning'],[]],
  ['cornel-west','Cornel West','',1953,2025,false,40.71,-74.01,'New York/Princeton','pragmatism',['pragmatism','africana-philosophy'],[],'Prophetic pragmatist combining Black radical tradition with American pragmatism and Christian thought.',['Prophetic pragmatism','Race matters'],['du-bois','dewey','marx'],[],[],['justice','freedom','democracy'],[]],

  // FEMINIST
  ['wollstonecraft','Mary Wollstonecraft','',1759,1797,false,51.5,-0.12,'London','feminist-philosophy',['feminist-philosophy','empiricism'],[],'Pioneer of feminist philosophy; argued for women\'s rational equality and right to education.',['Women\'s rational equality','Education for women'],[],['beauvoir','mill'],['vindication-rights-woman'],['rights','equality','freedom','autonomy'],[]],
  ['butler','Judith Butler','',1956,2025,false,37.87,-122.27,'Berkeley','feminist-philosophy',['feminist-philosophy','post-structuralism'],[],'Developed the theory of gender performativity; gender is constituted through repeated acts rather than being a fixed essence.',['Gender performativity','Subversion','Precarious life'],['beauvoir','foucault','derrida'],[],['gender-trouble'],['gender','self','power','identity'],[]],
  ['hooks','bell hooks','',1952,2021,false,37.75,-84.29,'Kentucky','feminist-philosophy',['feminist-philosophy','africana-philosophy'],[],'Feminist and cultural critic who theorized intersections of race, gender, and class from the margins.',['Margin as site of resistance','Love as political','Engaged pedagogy'],['freire','fanon'],[],[],['freedom','alienation','community'],[]],
  ['spivak','Gayatri Chakravorty Spivak','গায়ত্রী চক্রবর্তী স্পিভাক',1942,2025,false,40.71,-74.01,'New York','postcolonial-philosophy',['postcolonial-philosophy','feminist-philosophy'],[],'Postcolonial feminist; posed the question "Can the subaltern speak?" interrogating Western knowledge production.',['Subaltern speech','Strategic essentialism','Epistemic violence'],['derrida','marx','gramsci'],[],['can-the-subaltern-speak'],['subaltern','colonialism','alterity'],[]],
  ['irigaray','Luce Irigaray','',1930,2025,false,48.85,2.35,'Paris','feminist-philosophy',['feminist-philosophy','post-structuralism'],[],'Feminist philosopher of sexual difference who critiqued the masculine bias of Western philosophy.',['Sexual difference','Mimicry','Ethics of sexual difference'],['lacan','heidegger'],[],[],['gender','alterity','being'],[]],

  // LATIN AMERICAN
  ['las-casas','Bartolomé de las Casas','',1484,1566,false,19.43,-99.13,'Spain/Mexico','latin-american-philosophy',['latin-american-philosophy'],['Dominican'],'Defended indigenous rights against colonial exploitation; earliest advocate of human rights in the Americas.',['Indigenous rights','Universal human dignity'],['aquinas'],[],[],['rights','justice','dignity'],[]],
  ['sor-juana','Sor Juana Inés de la Cruz','',1648,1695,false,19.43,-99.13,'Mexico City','latin-american-philosophy',['latin-american-philosophy'],[],'Mexican philosopher-poet who defended women\'s right to knowledge and intellectual life.',['Right to knowledge','Feminist epistemology'],[],[],['reply-to-sor-filotea'],['knowledge','freedom','gender'],[]],
  ['dussel','Enrique Dussel','',1934,2025,false,-34.6,-58.38,'Buenos Aires/Mexico City','latin-american-philosophy',['latin-american-philosophy','postcolonial-philosophy'],[],'Philosopher of liberation who critiques Eurocentric philosophy from the perspective of the excluded other.',['Philosophy of liberation','Transmodernity','Exteriority'],['levinas','marx','hegel'],[],['philosophy-of-liberation'],['alterity','liberation','decolonization','praxis'],[]],
  ['freire','Paulo Freire','',1921,1997,false,-8.05,-34.87,'Recife, Brazil','latin-american-philosophy',['latin-american-philosophy'],[],'Philosopher of education who developed critical pedagogy; the oppressed must liberate themselves through praxis.',['Critical pedagogy','Banking education critique','Conscientization'],['marx','fanon'],[],['pedagogy-of-the-oppressed'],['praxis','freedom','liberation'],[]],

  // POSTCOLONIAL
  ['said','Edward Said','إدوارد سعيد',1935,2003,false,40.71,-74.01,'New York','postcolonial-philosophy',['postcolonial-philosophy'],[],'Critiqued Orientalism as a system of Western knowledge-power constructing the "East."',['Orientalism','Colonial discourse','Contrapuntal reading'],['foucault','gramsci','fanon'],['bhabha','spivak'],['orientalism'],['colonialism','power','knowledge','alterity'],[]],
  ['bhabha','Homi K. Bhabha','',1949,2025,false,42.37,-71.12,'Cambridge, MA','postcolonial-philosophy',['postcolonial-philosophy'],[],'Theorist of cultural hybridity and the "third space" where colonial identities are negotiated.',['Hybridity','Third space','Mimicry'],['fanon','derrida','lacan'],[],[],['hybridity','alterity','colonialism'],[]],
  ['mignolo','Walter Mignolo','',1941,2025,false,35.99,-78.9,'Durham, NC','postcolonial-philosophy',['postcolonial-philosophy'],['Decoloniality'],'Decolonial thinker who critiques the "coloniality of power" persisting after formal decolonization.',['Coloniality of power','Epistemic disobedience','Border thinking'],['quijano','dussel'],[],[],['colonialism','decolonization','knowledge'],[]],
  ['quijano','Aníbal Quijano','',1928,2018,false,-12.05,-77.04,'Lima, Peru','postcolonial-philosophy',['postcolonial-philosophy'],[],'Developed the concept of "coloniality of power" showing how colonial racial hierarchies persist.',['Coloniality of power','Eurocentrism critique'],['marx','fanon'],['mignolo'],[],['colonialism','power','modernity'],[]],
  ['cesaire','Aimé Césaire','',1913,2008,false,14.62,-61.06,'Martinique','postcolonial-philosophy',['postcolonial-philosophy','africana-philosophy'],['Negritude'],'Co-founder of the Negritude movement; poet-philosopher of anti-colonial resistance.',['Negritude','Discourse on colonialism'],['marx'],[],['discourse-on-colonialism'],['negritude','colonialism','freedom'],[]],
];

// Build author objects
const authorObjects = authorsData.map(a => ({
  id: a[0],
  name: a[1],
  nativeScriptName: a[2] || undefined,
  dates: { start: a[3], end: a[4], approximate: a[5] },
  places: [{ lat: a[6], lng: a[7], name: a[8], region: a[9] || undefined }],
  traditions: a[10],
  schools: a[11],
  shortBio: a[12],
  keyDoctrines: a[13],
  influencesReceived: a[14],
  influencesGiven: a[15],
  majorTexts: a[16],
  relatedConcepts: a[17],
  debates: a[18],
}));

let authorsTs = `import type { Author } from '@/types';\n\nexport const authors: Author[] = ${JSON.stringify(authorObjects, null, 2)};\n`;
// Fix the -2400 issue for Ptahhotep
authorsTs = authorsTs.replace('"start": null', '"start": -2400');
writeFileSync('/Users/Alessandro/philosopic atlas/philosophical-atlas/src/data/authors.ts', authorsTs);
console.log(`Written ${authorObjects.length} authors`);

// ============================================
// EDGES (generated programmatically)
// ============================================
const edgesList = [];
let eid = 1;

function addEdge(src, sType, tgt, tType, rel, cert, expl) {
  edgesList.push({ id: `e-${eid++}`, source: src, sourceType: sType, target: tgt, targetType: tType, relationType: rel, certainty: cert, explanation: expl || undefined });
}

// Author influenced chains
const influences = [
  ['socrates','plato',5],['plato','aristotle',5],['aristotle','theophrastus',5],['plato','plotinus',4],['plotinus','porphyry',5],['porphyry','proclus',4],['plotinus','augustine',4],['zeno-of-citium','chrysippus',5],['chrysippus','seneca',4],['chrysippus','epictetus',4],['epictetus','marcus-aurelius',5],['epicurus','lucretius',5],['pyrrho','sextus-empiricus',4],['democritus','epicurus',4],['heraclitus','plato',3],['parmenides','plato',4],
  ['buddha','nagarjuna',4],['nagarjuna','aryadeva',5],['aryadeva','chandrakirti',5],['nagarjuna','shantideva',4],['buddha','buddhaghosa',4],['asanga','vasubandhu',5],['vasubandhu','dignaga',5],['dignaga','dharmakirti',5],['gaudapada','shankara',5],['shankara','ramanuja',4],['ramanuja','madhva',3],['kapila','patanjali',3],['gautama-aksapada','kumarila-bhatta',3],['vivekananda','aurobindo',4],['gandhi','ambedkar',3],
  ['confucius','mencius',5],['confucius','xunzi',5],['laozi','zhuangzi',4],['mencius','zhu-xi',4],['cheng-yi','zhu-xi',5],['lu-jiuyuan','wang-yangming',5],['zhou-dunyi','zhang-zai',4],['zhang-zai','cheng-yi',4],['xunzi','han-fei',4],['wang-fuzhi','dai-zhen',4],
  ['al-kindi','al-farabi',4],['al-farabi','ibn-sina',5],['ibn-sina','al-ghazali',4],['ibn-sina','ibn-rushd',4],['suhrawardi','mulla-sadra',4],['ibn-arabi','mulla-sadra',4],['plotinus','ibn-arabi',3],
  ['aristotle','al-farabi',5,'Aristotle transmitted through Syriac/Arabic translations'],['aristotle','ibn-sina',5],['ibn-sina','aquinas',5,'Avicenna\'s metaphysics deeply influenced Aquinas'],['ibn-rushd','aquinas',5,'Averroes\' Aristotle commentaries shaped scholasticism'],['plotinus','augustine',4],['al-ghazali','aquinas',3],
  ['descartes','spinoza',5],['descartes','leibniz',4],['descartes','locke',4],['locke','berkeley',5],['locke','hume',5],['hume','kant',5,'Hume\'s skepticism awoke Kant from his "dogmatic slumber"'],['kant','fichte',5],['fichte','schelling',5],['schelling','hegel',5],['hegel','marx',5],['hegel','kierkegaard',4],['schopenhauer','nietzsche',5],['kant','schopenhauer',5],
  ['husserl','heidegger',5],['heidegger','sartre',5],['heidegger','gadamer',5],['heidegger','levinas',5],['husserl','merleau-ponty',5],['sartre','beauvoir',5],['kierkegaard','heidegger',4],['nietzsche','heidegger',4],['nietzsche','foucault',4],['nietzsche','derrida',4],
  ['frege','russell',5],['russell','wittgenstein',5],['wittgenstein','carnap',4],['carnap','quine',5],['peirce','james',5],['james','dewey',5],['dewey','rorty',4],
  ['marx','gramsci',5],['marx','lukacs',5],['marx','adorno',4],['marx','benjamin',4],['adorno','habermas',5],
  ['fanon','said',4],['fanon','spivak',3],['beauvoir','butler',5],['marx','fanon',4],['hegel','dussel',3],['derrida','spivak',4],['foucault','butler',4],['foucault','said',4],['sartre','fanon',4],['heidegger','nishida-kitaro',3],['james','nishida-kitaro',4],
  ['thoreau','gandhi',4],['gandhi','king',5],['buddha','dogen',3],['nagarjuna','tsongkhapa',4],['huineng','dogen',3],
  ['hobbes','locke',4],['locke','rousseau',4],['rousseau','kant',3],['bentham','mill',5],
  ['plato','philo-of-alexandria',4],['maimonides','spinoza',3],['saadia-gaon','maimonides',3],
  ['augustine','anselm',4],['anselm','descartes',3],['aquinas','duns-scotus',4],['duns-scotus','william-of-ockham',4],
  ['shankara','vivekananda',4],['buddha','huineng',3],
];

influences.forEach(([s,t,c,e]) => addEdge(s,'author',t,'author','influenced',c,e));

// Teacher-student
const teacherStudent = [
  ['socrates','plato'],['plato','aristotle'],['zeno-of-citium','chrysippus'],['epictetus','marcus-aurelius'],
  ['nagarjuna','aryadeva'],['asanga','vasubandhu'],['dignaga','dharmakirti'],['gaudapada','shankara'],
  ['confucius','mencius'],['cheng-yi','zhu-xi'],['lu-jiuyuan','wang-yangming'],
  ['al-farabi','ibn-sina'],['husserl','heidegger'],['heidegger','gadamer'],['heidegger','arendt'],
  ['russell','wittgenstein'],['peirce','james'],['nishida-kitaro','tanabe-hajime'],['nishida-kitaro','nishitani-keiji'],
];
teacherStudent.forEach(([s,t]) => addEdge(s,'author',t,'author','teacher_of',5));

// Debates
const debates = [
  ['al-ghazali','ibn-rushd',5,'Al-Ghazali\'s Incoherence critiqued philosophers; Ibn Rushd responded'],
  ['plato','protagoras',4],['aristotle','plato',5],['shankara','nagarjuna',3,'Shankara critiqued Buddhist emptiness while developing similar arguments'],
  ['carnap','heidegger',4],['kierkegaard','hegel',5],['marx','hegel',5],
  ['rawls','nozick',5],['habermas','gadamer',5],['habermas','foucault',4],
  ['popper','kuhn',4],['mencius','xunzi',4],['confucius','mozi',4],
  ['zhu-xi','wang-yangming',4],['zhu-xi','lu-jiuyuan',5],
  ['sartre','camus',4],['derrida','searle',4],['kumarila-bhatta','dharmakirti',4],
  ['senghor','wiredu',3],['shankara','ramanuja',4],
];
debates.forEach(([s,t,c,e]) => { addEdge(s,'author',t,'author','debated',c,e); addEdge(t,'author',s,'author','debated',c); });

// Wrote
const wroteLinks = [
  ['plato','republic'],['plato','symposium'],['plato','phaedo'],['plato','timaeus'],['plato','meno'],['plato','phaedrus'],
  ['aristotle','nicomachean-ethics'],['aristotle','metaphysics-aristotle'],['aristotle','physics-aristotle'],['aristotle','politics-aristotle'],['aristotle','de-anima'],['aristotle','categories'],['aristotle','poetics-aristotle'],
  ['marcus-aurelius','meditations'],['epictetus','discourses-epictetus'],['epictetus','enchiridion'],
  ['seneca','letters-seneca'],['seneca','on-the-shortness-of-life'],['lucretius','on-the-nature-of-things'],
  ['epicurus','letter-to-menoeceus'],['sextus-empiricus','outlines-of-pyrrhonism'],['cicero','on-duties'],
  ['plotinus','enneads'],['proclus','elements-of-theology'],
  ['nagarjuna','mulamadhyamakakarika'],['vasubandhu','abhidharmakosa'],
  ['shankara','brahma-sutra-bhashya'],['shankara','vivekachudamani'],['ramanuja','sri-bhashya'],
  ['patanjali','yoga-sutras'],['buddhaghosa','visuddhimagga'],['shantideva','bodhicaryavatara'],
  ['chandrakirti','madhyamakavatara'],['tsongkhapa','lamrim-chenmo'],['dogen','shobogenzo'],
  ['confucius','analects'],['laozi','daodejing'],['zhuangzi','zhuangzi-text'],['mencius','mencius-text'],
  ['xunzi','xunzi-text'],['mozi','mozi-text'],['han-fei','han-feizi'],
  ['zhu-xi','reflections-on-things-at-hand'],['wang-yangming','instructions-for-practical-living'],['huineng','platform-sutra'],
  ['al-kindi','on-first-philosophy'],['al-farabi','virtuous-city'],['ibn-sina','book-of-healing'],
  ['al-ghazali','incoherence-of-philosophers'],['al-ghazali','deliverance-from-error'],
  ['ibn-rushd','incoherence-of-incoherence'],['ibn-tufayl','hayy-ibn-yaqzan'],
  ['ibn-khaldun','muqaddimah'],['ibn-arabi','fusus-al-hikam'],
  ['suhrawardi','philosophy-of-illumination'],['mulla-sadra','transcendent-theosophy'],
  ['maimonides','guide-for-the-perplexed'],['saadia-gaon','book-of-beliefs-and-opinions'],
  ['judah-halevi','kuzari'],['spinoza','ethics-spinoza'],['buber','i-and-thou'],['levinas','totality-and-infinity'],
  ['augustine','confessions-augustine'],['augustine','city-of-god'],['boethius','consolation-of-philosophy'],
  ['anselm','proslogion'],['abelard','sic-et-non'],['aquinas','summa-theologiae'],['aquinas','summa-contra-gentiles'],
  ['william-of-ockham','summa-logicae'],['nicholas-of-cusa','de-docta-ignorantia'],
  ['descartes','meditations-on-first-philosophy'],['descartes','discourse-on-method'],
  ['hobbes','leviathan'],['locke','essay-concerning-human-understanding'],
  ['hume','treatise-of-human-nature'],['leibniz','monadology'],
  ['kant','critique-of-pure-reason'],['kant','critique-of-practical-reason'],['kant','groundwork-metaphysics-morals'],
  ['hegel','phenomenology-of-spirit'],['hegel','science-of-logic'],
  ['schopenhauer','world-as-will'],['kierkegaard','either-or'],['kierkegaard','fear-and-trembling'],
  ['nietzsche','beyond-good-and-evil'],['nietzsche','thus-spoke-zarathustra'],['nietzsche','genealogy-of-morals'],
  ['marx','capital'],['marx','communist-manifesto'],['mill','on-liberty'],['mill','utilitarianism-mill'],
  ['husserl','logical-investigations'],['husserl','ideas-husserl'],
  ['heidegger','being-and-time'],['sartre','being-and-nothingness'],
  ['beauvoir','the-second-sex'],['camus','myth-of-sisyphus'],
  ['merleau-ponty','phenomenology-of-perception'],['gadamer','truth-and-method'],
  ['arendt','human-condition'],['wittgenstein','tractatus'],['wittgenstein','philosophical-investigations'],
  ['russell','principia-mathematica'],['rawls','theory-of-justice'],['kripke','naming-and-necessity'],
  ['foucault','discipline-and-punish'],['foucault','order-of-things'],
  ['derrida','of-grammatology'],['deleuze','difference-and-repetition'],
  ['adorno','dialectic-of-enlightenment'],['marcuse','one-dimensional-man'],
  ['gramsci','prison-notebooks'],['kuhn','structure-scientific-revolutions'],
  ['popper','logic-of-scientific-discovery'],['quine','word-and-object'],
  ['nishida-kitaro','inquiry-into-the-good'],['zera-yacob','hatata'],['nkrumah','consciencism'],
  ['fanon','wretched-of-the-earth'],['fanon','black-skin-white-masks'],
  ['said','orientalism'],['spivak','can-the-subaltern-speak'],
  ['freire','pedagogy-of-the-oppressed'],['butler','gender-trouble'],
  ['dussel','philosophy-of-liberation'],['wollstonecraft','vindication-rights-woman'],
  ['emerson','nature-emerson'],['james','pragmatism-james'],['dewey','democracy-and-education'],
  ['du-bois','souls-of-black-folk'],['whitehead','process-and-reality'],
  ['habermas','theory-communicative-action'],
];
wroteLinks.forEach(([s,t]) => addEdge(s,'author',t,'text','wrote',5));

// Belongs to tradition
const belongsTo = [
  ['plato','platonism'],['aristotle','aristotelianism'],['zeno-of-citium','stoicism'],['epicurus','epicureanism'],
  ['pyrrho','skepticism'],['plotinus','neoplatonism'],['diogenes-of-sinope','cynicism'],['socrates','platonism'],
  ['seneca','stoicism'],['epictetus','stoicism'],['marcus-aurelius','stoicism'],['lucretius','epicureanism'],
  ['sextus-empiricus','skepticism'],['proclus','neoplatonism'],['hypatia','neoplatonism'],['cicero','stoicism'],
  ['buddha','theravada-buddhism'],['nagarjuna','madhyamaka'],['asanga','yogacara'],['vasubandhu','yogacara'],
  ['huineng','zen-buddhism'],['dogen','zen-buddhism'],['tsongkhapa','tibetan-buddhism'],['buddhaghosa','theravada-buddhism'],
  ['shankara','advaita-vedanta'],['ramanuja','vedanta'],['madhva','vedanta'],['patanjali','yoga-philosophy'],
  ['gautama-aksapada','nyaya'],['kanada','vaisheshika'],['kapila','samkhya'],['mahavira','jainism'],
  ['confucius','confucianism'],['laozi','daoism'],['zhuangzi','daoism'],['mencius','confucianism'],
  ['xunzi','confucianism'],['mozi','mohism'],['han-fei','legalism'],
  ['zhu-xi','neo-confucianism'],['wang-yangming','neo-confucianism'],['zhang-zai','neo-confucianism'],
  ['al-farabi','islamic-falsafa'],['ibn-sina','islamic-falsafa'],['ibn-rushd','islamic-falsafa'],
  ['al-ghazali','kalam'],['ibn-arabi','sufism'],['suhrawardi','islamic-falsafa'],['mulla-sadra','islamic-falsafa'],
  ['maimonides','jewish-philosophy'],['spinoza','rationalism'],['buber','jewish-philosophy'],['levinas','phenomenology'],
  ['augustine','augustinianism'],['aquinas','thomism'],['duns-scotus','scholasticism'],['william-of-ockham','nominalism'],
  ['descartes','rationalism'],['locke','empiricism'],['hume','empiricism'],['berkeley','empiricism'],
  ['kant','german-idealism'],['hegel','german-idealism'],['fichte','german-idealism'],['schelling','german-idealism'],
  ['kierkegaard','existentialism'],['nietzsche','existentialism'],['sartre','existentialism'],['beauvoir','existentialism'],
  ['heidegger','phenomenology'],['husserl','phenomenology'],['merleau-ponty','phenomenology'],
  ['wittgenstein','analytic-philosophy'],['russell','analytic-philosophy'],['frege','analytic-philosophy'],
  ['carnap','analytic-philosophy'],['quine','analytic-philosophy'],['kripke','analytic-philosophy'],
  ['peirce','pragmatism'],['james','pragmatism'],['dewey','pragmatism'],['rorty','pragmatism'],
  ['marx','marxism'],['gramsci','marxism'],['adorno','critical-theory'],['habermas','critical-theory'],
  ['beauvoir','feminist-philosophy'],['butler','feminist-philosophy'],['wollstonecraft','feminist-philosophy'],
  ['fanon','postcolonial-philosophy'],['said','postcolonial-philosophy'],['spivak','postcolonial-philosophy'],
  ['nishida-kitaro','kyoto-school'],['nkrumah','africana-philosophy'],['wiredu','africana-philosophy'],
  ['dussel','latin-american-philosophy'],['freire','latin-american-philosophy'],
  ['du-bois','africana-philosophy'],['rawls','analytic-philosophy'],['whitehead','process-philosophy'],
  ['foucault','post-structuralism'],['derrida','post-structuralism'],['deleuze','post-structuralism'],
  ['gadamer','hermeneutics'],['nishitani-keiji','kyoto-school'],['tanabe-hajime','kyoto-school'],
  ['ramose','ubuntu-philosophy'],['mbembe','postcolonial-philosophy'],['cornel-west','pragmatism'],
];
belongsTo.forEach(([s,t]) => addEdge(s,'author',t,'tradition','belongs_to',5));

// Tradition→Tradition
const tradLinks = [
  ['platonism','neoplatonism','influenced',5],['neoplatonism','augustinianism','influenced',5],
  ['aristotelianism','islamic-falsafa','transmitted_to',5],['islamic-falsafa','scholasticism','transmitted_to',5],
  ['neoplatonism','islamic-falsafa','influenced',4],['neoplatonism','sufism','influenced',4],
  ['confucianism','neo-confucianism','developed',5],['daoism','zen-buddhism','influenced',4],
  ['theravada-buddhism','madhyamaka','historically_connected',5],['madhyamaka','tibetan-buddhism','transmitted_to',5],
  ['madhyamaka','zen-buddhism','transmitted_to',4],['yogacara','zen-buddhism','influenced',3],
  ['german-idealism','existentialism','influenced',5],['german-idealism','marxism','influenced',5],
  ['phenomenology','existentialism','influenced',5],['empiricism','analytic-philosophy','influenced',4],
  ['stoicism','epicureanism','debated',5],['confucianism','daoism','debated',4],
  ['confucianism','mohism','debated',4],['vedanta','madhyamaka','debated',4],
  ['scholasticism','rationalism','historically_connected',4],['rationalism','empiricism','debated',5],
  ['pragmatism','analytic-philosophy','parallels',3],['existentialism','analytic-philosophy','debated',3],
  ['marxism','critical-theory','developed',5],['critical-theory','postcolonial-philosophy','influenced',4],
  ['existentialism','feminist-philosophy','influenced',4],['advaita-vedanta','zen-buddhism','parallels',2],
  ['stoicism','confucianism','parallels',2],['daoism','process-philosophy','parallels',2],
  ['platonism','vedanta','parallels',2],['neoplatonism','kabbalah','influenced',3],
  ['post-structuralism','postcolonial-philosophy','influenced',4],['post-structuralism','feminist-philosophy','influenced',4],
  ['samkhya','yoga-philosophy','historically_connected',5],['nyaya','vaisheshika','historically_connected',5],
  ['thomism','scholasticism','developed',5],['nominalism','scholasticism','developed',5],
  ['zen-buddhism','kyoto-school','influenced',5],['phenomenology','kyoto-school','influenced',4],
];
tradLinks.forEach(([s,t,r,c]) => addEdge(s,'tradition',t,'tradition',r,c));

// Concept parallels
const conceptLinks = [
  ['emptiness','nothingness','parallels',3],['dharma','duty','parallels',2],['dao','logos','parallels',2],
  ['ren','virtue','parallels',3],['brahman','the-one','parallels',3],['atman','soul','parallels',3],
  ['maya','phenomena','parallels',2],['moksha','nirvana','parallels',4],['maat','justice','parallels',2],
  ['ubuntu','community','shares_concept',4],['karma','justice','parallels',2],
  ['free-will','determinism','debated',5],['idealism','materialism','debated',5],
  ['atman','no-self','debated',5],['being','nothingness','debated',4],
  ['good','evil','debated',5],['dualism','monism','debated',5],
  ['emptiness','dependent-origination','shares_concept',5],['virtue','eudaimonia','shares_concept',5],
  ['consciousness','mind','shares_concept',5],['essence','existence','debated',4],
  ['dao','wuwei','shares_concept',5],['li-principle','qi','shares_concept',5],
  ['brahman','atman','shares_concept',5],['prakriti','purusha','debated',5],
  ['satori','enlightenment-bodhi','shares_concept',5],['logos','reason','shares_concept',4],
];
conceptLinks.forEach(([s,t,r,c]) => addEdge(s,'concept',t,'concept',r,c));

// Author→Concept developed
const authorConcepts = [
  ['plato','forms',5],['plato','justice',5],['plato','good',5],['aristotle','substance',5],
  ['aristotle','eudaimonia',5],['aristotle','potentiality',5],['aristotle','virtue',5],
  ['nagarjuna','emptiness',5],['nagarjuna','dependent-origination',5],
  ['buddha','no-self',5],['buddha','impermanence',5],['buddha','nirvana',5],
  ['confucius','ren',5],['confucius','li-ritual',5],['laozi','dao',5],['laozi','wuwei',5],
  ['kant','categorical-imperative',5],['kant','a-priori',5],['kant','noumena',5],
  ['heidegger','dasein',5],['heidegger','authenticity',5],['sartre','bad-faith',5],
  ['sartre','freedom-existential',5],['marx','alienation',5],['marx','praxis',5],
  ['rawls','justice',5],['foucault','power',5],['derrida','deconstruction-concept',5],
  ['husserl','intentionality',5],['husserl','consciousness',5],
  ['wittgenstein','language-game',5],['wittgenstein','meaning',5],
  ['shankara','brahman',5],['shankara','maya',5],['shankara','atman',5],
  ['zhu-xi','li-principle',5],['zhu-xi','qi',5],['wang-yangming','knowledge',4],
  ['plotinus','the-one',5],['plotinus','emanation',5],
  ['kierkegaard','anxiety',5],['kierkegaard','authenticity',4],
  ['beauvoir','gender',5],['butler','gender',5],
  ['fanon','colonialism',5],['fanon','decolonization',5],
  ['gramsci','hegemony',5],['said','colonialism',4],
  ['spinoza','substance',5],['spinoza','god',4],['descartes','dualism',5],
  ['hobbes','social-contract',5],['locke','rights',5],['rousseau','social-contract',4],
  ['hegel','dialectic',5],['hegel','being',4],
  ['nietzsche','power',4],['nietzsche','nothingness',4],
  ['ibn-sina','existence',5],['ibn-sina','essence',5],
  ['aquinas','god',5],['aquinas','being',5],
  ['levinas','alterity',5],['buber','dialogue-concept',5],
  ['ramose','ubuntu',5],['gandhi','ahimsa',5],
  ['dogen','impermanence',4],['nishida-kitaro','nothingness',5],
];
authorConcepts.forEach(([s,t,c]) => addEdge(s,'author',t,'concept','developed',c));

console.log(`Generated ${edgesList.length} edges`);

let edgesTs = `import type { Edge } from '@/types';\n\nexport const edges: Edge[] = ${JSON.stringify(edgesList, null, 2)};\n`;
writeFileSync('/Users/Alessandro/philosopic atlas/philosophical-atlas/src/data/edges.ts', edgesTs);
console.log(`Written edges.ts`);

console.log('Done! Run: npm run dev');
