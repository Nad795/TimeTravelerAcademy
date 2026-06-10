/* ============================================================
   TIME TRAVELER ACADEMY - LOST INDONESIAN HISTORY
   script.js — Complete Game Logic
   ============================================================ */

'use strict';

/* ============================================================
   GAME DATA
   ============================================================ */
const GAME_DATA = {
  eras: [
    /* -------------------- ERA 1: SRIWIJAYA -------------------- */
    {
      id: 'sriwijaya',
      name: 'Sriwijaya Kingdom',
      period: '650 – 1377 CE',
      icon: '⛵',
      bgClass: 'scene-sriwijaya',
      description:
        'You have arrived in ancient Palembang, the heart of the mighty Sriwijaya maritime empire. ' +
        'Golden trade ships fill the river, while Buddhist monks meditate in riverside monasteries. ' +
        'The air smells of spices and sea salt. Explore this bustling port city to recover the lost facts!',
      npcs: [
        {
          id: 'monk',
          name: 'Scholar Monk',
          icon: '🧘',
          dialogue:
            'Welcome, young traveler! You stand in Palembang, where great King Sri Jayanasa founded this empire around 650 CE. ' +
            'We are a people of the sea — our ships carry silks and spices from China to India. ' +
            'Our kingdom controls the Strait of Malacca, the most important sea lane in all of Asia!'
        },
        {
          id: 'merchant',
          name: 'Silk Merchant',
          icon: '🏺',
          dialogue:
            'Ah, a curious visitor! Did you know that Sriwijaya is not just a trading kingdom — ' +
            'it is also the greatest center of Buddhist learning in all of Southeast Asia? ' +
            'Pilgrims travel from as far as India and China to study the Dharma here. ' +
            'Our ruler, the Maharaja, is both king and protector of the Buddha\'s teachings.'
        }
      ],
      objects: [
        {
          id: 'scroll',
          icon: '📜',
          label: 'Ancient Scroll',
          factIndex: 0
        },
        {
          id: 'ship',
          icon: '⛵',
          label: 'Trade Ship',
          factIndex: 1
        },
        {
          id: 'temple',
          icon: '🏛️',
          label: 'Buddhist Temple',
          factIndex: 2
        }
      ],
      facts: [
        {
          id: 'f1_1',
          text: 'Sriwijaya was a powerful maritime empire founded around 650 CE in Palembang, South Sumatra, by Dapunta Hyang Sri Jayanasa, as recorded in the Kedukan Bukit Inscription (682 CE).'
        },
        {
          id: 'f1_2',
          text: 'Sriwijaya controlled the Strait of Malacca and the Sunda Strait, making it the dominant power over maritime trade routes between China and India for over 600 years.'
        },
        {
          id: 'f1_3',
          text: 'Sriwijaya was a major center of Vajrayana Buddhism in Southeast Asia. Chinese monk Yi Jing (義淨) visited in 671 CE and spent years studying Buddhist texts there, describing it as home to more than a thousand monks.'
        }
      ],
      timelineEvents: [
        {
          id: 'e1_1',
          year: '650 CE',
          description: 'Dapunta Hyang Sri Jayanasa founds the Sriwijaya Empire in Palembang, Sumatra',
          order: 0
        },
        {
          id: 'e1_2',
          year: '671 CE',
          description: 'Chinese Buddhist pilgrim Yi Jing visits Sriwijaya, documents over 1,000 monks studying there',
          order: 1
        },
        {
          id: 'e1_3',
          year: '775 CE',
          description: 'The Sailendra dynasty, allied with Sriwijaya, begins construction of Borobudur in Java',
          order: 2
        },
        {
          id: 'e1_4',
          year: '1025 CE',
          description: 'The Chola Empire of South India raids Sriwijaya\'s ports, beginning its long decline',
          order: 3
        }
      ],
      quiz: [
        {
          question: 'Where was the capital of the Sriwijaya Empire located?',
          icon: '🗺️',
          options: ['Palembang, South Sumatra', 'Majapahit, East Java', 'Mataram, Central Java', 'Kutai, Borneo'],
          correct: 0,
          explanation: 'Palembang in South Sumatra was the capital and main port city of the Sriwijaya Empire, recorded in the Kedukan Bukit Inscription of 682 CE.'
        },
        {
          question: 'What religion was the primary faith and center of learning in the Sriwijaya Empire?',
          icon: '🙏',
          options: ['Buddhism', 'Hinduism', 'Islam', 'Animism'],
          correct: 0,
          explanation: 'Buddhism — specifically Vajrayana Buddhism — was the dominant religion. Chinese monk Yi Jing documented over 1,000 Buddhist monks studying in Sriwijaya in 671 CE.'
        },
        {
          question: 'Which strategically crucial sea passage did Sriwijaya control, making it a wealthy trading empire?',
          icon: '⚓',
          options: ['Strait of Malacca', 'Strait of Hormuz', 'Strait of Gibraltar', 'Bering Strait'],
          correct: 0,
          explanation: 'Sriwijaya controlled the Strait of Malacca — the narrow passage between the Malay Peninsula and Sumatra — which was the main sea route for trade between China and India.'
        }
      ]
    },

    /* -------------------- ERA 2: MAJAPAHIT -------------------- */
    {
      id: 'majapahit',
      name: 'Majapahit Kingdom',
      period: '1293 – 1527 CE',
      icon: '⚔️',
      bgClass: 'scene-majapahit',
      description:
        'You stand in Trowulan, the grand capital of the Majapahit Empire. ' +
        'Magnificent temples and wide canals stretch before you. Warriors in golden armor guard the royal palace. ' +
        'This is the height of the Nusantara empire — the greatest pre-colonial kingdom in Indonesian history. ' +
        'Seek out the hidden facts before the timeline collapses!',
      npcs: [
        {
          id: 'gajah_mada',
          name: 'Prime Minister Gajah Mada',
          icon: '⚔️',
          dialogue:
            'I am Gajah Mada, Mahapatih of Majapahit! In 1334, I swore the Palapa Oath — ' +
            'I shall not taste any spice until I have united all of Nusantara under Majapahit\'s glory. ' +
            'Under my command and King Hayam Wuruk\'s reign, this empire stretches across Sumatra, Borneo, Java, ' +
            'Bali, and even reaches the Philippines! We are the greatest power in all of Southeast Asia!'
        },
        {
          id: 'poet',
          name: 'Court Poet Prapanca',
          icon: '📖',
          dialogue:
            'Greetings! I am Mpu Prapanca, court poet of Majapahit. In 1365, I completed the ' +
            'Nagarakretagama — a magnificent poem describing the full glory of this empire under ' +
            'King Hayam Wuruk. The poem lists 98 tributaries and vassal states. ' +
            'It is our most precious historical document!'
        }
      ],
      objects: [
        {
          id: 'keris',
          icon: '🗡️',
          label: 'Royal Keris',
          factIndex: 0
        },
        {
          id: 'nagarakretagama',
          icon: '📖',
          label: 'Nagarakretagama',
          factIndex: 1
        },
        {
          id: 'temple_rel',
          icon: '🛕',
          label: 'Temple Relief',
          factIndex: 2
        }
      ],
      facts: [
        {
          id: 'f2_1',
          text: 'Majapahit was founded in 1293 CE by Raden Wijaya after defeating the Mongol invasion fleet of Kublai Khan through a cunning military strategy. The kingdom was named after the maja fruit that grew at its founding site.'
        },
        {
          id: 'f2_2',
          text: 'Under Prime Minister Gajah Mada\'s leadership (1334–1364 CE), Majapahit reached its greatest territorial extent. His famous Palapa Oath (Sumpah Palapa) vowed to unite all of Nusantara under Majapahit rule.'
        },
        {
          id: 'f2_3',
          text: 'The Nagarakretagama, written in 1365 CE by court poet Mpu Prapanca during King Hayam Wuruk\'s reign, is the most important primary source describing Majapahit\'s glory, listing 98 tributaries across Southeast Asia.'
        }
      ],
      timelineEvents: [
        {
          id: 'e2_1',
          year: '1293 CE',
          description: 'Raden Wijaya founds the Majapahit Kingdom after defeating the Mongol fleet of Kublai Khan',
          order: 0
        },
        {
          id: 'e2_2',
          year: '1334 CE',
          description: 'Gajah Mada becomes Mahapatih (Prime Minister) and swears the Palapa Oath to unite Nusantara',
          order: 1
        },
        {
          id: 'e2_3',
          year: '1365 CE',
          description: 'Mpu Prapanca completes the Nagarakretagama, describing Majapahit\'s vast empire under King Hayam Wuruk',
          order: 2
        },
        {
          id: 'e2_4',
          year: '1478 CE',
          description: 'The fall of Trowulan marks the beginning of Majapahit\'s terminal decline as Islamic kingdoms rise',
          order: 3
        }
      ],
      quiz: [
        {
          question: 'Who founded the Majapahit Kingdom in 1293 CE?',
          icon: '👑',
          options: ['Raden Wijaya', 'Gajah Mada', 'Hayam Wuruk', 'Ken Arok'],
          correct: 0,
          explanation: 'Raden Wijaya founded Majapahit in 1293 CE. He cleverly allied with the invading Mongol fleet to defeat his enemies, then turned against the Mongols and expelled them from Java.'
        },
        {
          question: 'What was the name of the famous oath sworn by Gajah Mada to unite all of Nusantara under Majapahit?',
          icon: '✊',
          options: ['Sumpah Palapa', 'Sumpah Pemuda', 'Sumpah Bhayangkara', 'Sumpah Amukti Palapa'],
          correct: 0,
          explanation: 'The Sumpah Palapa (Palapa Oath) was sworn by Gajah Mada in 1334 CE. He vowed to abstain from all spices and pleasures until he had united all of Nusantara under Majapahit\'s dominion.'
        },
        {
          question: 'Which ancient text, written in 1365 CE, is the most important historical document describing the glory of Majapahit?',
          icon: '📜',
          options: ['Nagarakretagama', 'Sutasoma', 'Pararaton', 'Arjunawiwaha'],
          correct: 0,
          explanation: 'The Nagarakretagama was written by Mpu Prapanca in 1365 CE. It describes Majapahit under King Hayam Wuruk at the height of its power, listing 98 tributaries and is inscribed on UNESCO\'s Memory of the World register.'
        }
      ]
    },

    /* -------------------- ERA 3: INDEPENDENCE -------------------- */
    {
      id: 'independence',
      name: 'Indonesian Independence',
      period: '1945 CE',
      icon: '🇮🇩',
      bgClass: 'scene-independence',
      description:
        'You have arrived at Jalan Pegangsaan Timur 56, Jakarta, on August 17, 1945. ' +
        'The morning air crackles with tension and excitement. ' +
        'After 350 years of Dutch colonization and Japanese occupation, this is the moment Indonesia will be born. ' +
        'Sukarno and Hatta are preparing to make history. Find the hidden facts before the proclamation!',
      npcs: [
        {
          id: 'sukarno',
          name: 'Ir. Sukarno',
          icon: '🎙️',
          dialogue:
            'The time has come, young friend. Japan has surrendered on August 15th. ' +
            'Yesterday, the youth groups — the pemuda — seized me and Hatta and brought us to Rengasdengklok. ' +
            'They demanded we proclaim independence immediately, without waiting for the Japanese. ' +
            'Today, at 10 AM on August 17th, 1945, I will read the Proclamation of Indonesian Independence. ' +
            'This moment belongs to all Indonesian people!'
        },
        {
          id: 'hatta',
          name: 'Drs. Mohammad Hatta',
          icon: '📋',
          dialogue:
            'The proclamation text was drafted last night at the residence of Japanese naval commander Laksamana Maeda. ' +
            'Sukarno, Achmad Soebardjo, and I worked through the night. The final text was typed by Sayuti Melik. ' +
            'Tomorrow — no, today — we will sign it together: Sukarno and Hatta. ' +
            'On behalf of the Indonesian people, we declare Indonesia\'s independence!'
        }
      ],
      objects: [
        {
          id: 'proclamation',
          icon: '📜',
          label: 'Proclamation Text',
          factIndex: 0
        },
        {
          id: 'flag',
          icon: '🚩',
          label: 'Merah Putih Flag',
          factIndex: 1
        },
        {
          id: 'microphone',
          icon: '🎙️',
          label: 'Radio Microphone',
          factIndex: 2
        }
      ],
      facts: [
        {
          id: 'f3_1',
          text: 'Indonesia\'s Proclamation of Independence was read by Ir. Sukarno and signed by Sukarno–Hatta at Jalan Pegangsaan Timur 56, Jakarta, at 10:00 AM on Friday, August 17, 1945 — two days after Japan\'s surrender to the Allied forces.'
        },
        {
          id: 'f3_2',
          text: 'The Merah Putih (Red and White) national flag was sewn by Fatmawati, Sukarno\'s wife, and raised immediately after the proclamation was read. The red symbolizes courage, and the white symbolizes purity.'
        },
        {
          id: 'f3_3',
          text: 'On August 18, 1945, the day after independence, the Panitia Persiapan Kemerdekaan Indonesia (PPKI) adopted the 1945 Constitution and elected Sukarno as the first President and Mohammad Hatta as the first Vice President of the Republic of Indonesia.'
        }
      ],
      timelineEvents: [
        {
          id: 'e3_1',
          year: 'Aug 15, 1945',
          description: 'Japan surrenders to Allied forces after atomic bombs on Hiroshima and Nagasaki, ending World War II',
          order: 0
        },
        {
          id: 'e3_2',
          year: 'Aug 16, 1945',
          description: 'The pemuda (youth groups) take Sukarno and Hatta to Rengasdengklok, demanding immediate independence proclamation',
          order: 1
        },
        {
          id: 'e3_3',
          year: 'Aug 17, 1945',
          description: 'Sukarno reads the Proclamation of Indonesian Independence at Jalan Pegangsaan Timur 56, Jakarta at 10:00 AM',
          order: 2
        },
        {
          id: 'e3_4',
          year: 'Aug 18, 1945',
          description: 'PPKI adopts the 1945 Constitution and elects Sukarno as President and Hatta as Vice President of Indonesia',
          order: 3
        }
      ],
      quiz: [
        {
          question: 'On what exact date was Indonesia\'s Proclamation of Independence announced?',
          icon: '📅',
          options: ['August 17, 1945', 'August 15, 1945', 'August 18, 1945', 'August 16, 1945'],
          correct: 0,
          explanation: 'The Proclamation of Independence was read by Sukarno on August 17, 1945 at 10:00 AM at Jalan Pegangsaan Timur 56, Jakarta — now commemorated as Indonesia\'s National Independence Day.'
        },
        {
          question: 'Who proclaimed Indonesian independence together, representing the Indonesian people?',
          icon: '✊',
          options: ['Sukarno and Mohammad Hatta', 'Sukarno and Sutan Sjahrir', 'Mohammad Hatta and Achmad Soebardjo', 'Sukarno and Sayuti Melik'],
          correct: 0,
          explanation: 'Sukarno and Mohammad Hatta co-signed and proclaimed the independence "atas nama bangsa Indonesia" (on behalf of the Indonesian people). They later became Indonesia\'s first President and Vice President.'
        },
        {
          question: 'Who sewed the original Merah Putih (Red and White) Indonesian national flag raised during the Independence Proclamation ceremony?',
          icon: '🚩',
          options: ['Fatmawati', 'Kartini', 'Dewi Sartika', 'Cut Nyak Dhien'],
          correct: 0,
          explanation: 'Fatmawati, Sukarno\'s wife, personally sewed the original Merah Putih flag that was raised at Jalan Pegangsaan Timur 56 during the proclamation ceremony on August 17, 1945.'
        }
      ]
    }
  ]
};

const INTRO_DIALOGUES = [
  {
    speaker: 'Academy Director',
    text: 'Emergency alert, Cadet! Our time-monitoring systems have detected a critical malfunction. ' +
          'The historical records of the Indonesian archipelago — spanning over 1,300 years — have been corrupted and scrambled!'
  },
  {
    speaker: 'Academy Director',
    text: 'Three crucial eras have been affected: the Sriwijaya maritime empire, the mighty Majapahit kingdom, ' +
          'and Indonesia\'s historic proclamation of independence. If these timelines are not restored, ' +
          'history itself could unravel!'
  },
  {
    speaker: 'Mission Computer',
    text: 'Cadet, you must travel to each era, collect the lost historical facts, ' +
          'and arrange events in the correct chronological order. ' +
          'Your Time Traveler\'s Notebook will help you record what you discover.'
  },
  {
    speaker: 'Mission Computer',
    text: 'Each era you restore will repair the timeline portal and unlock the next destination. ' +
          'Trust what you learn, think carefully, and good luck — the history of Indonesia is counting on you!'
  }
];

/* ============================================================
   AUDIO MANAGER
   ============================================================ */
const AudioManager = {
  ctx: null,
  init() {
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    } catch (e) { /* Audio not available */ }
  },
  play(type) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      const configs = {
        click:   { freq: 440, dur: 0.08, type: 'sine',    vol: 0.15 },
        correct: { freq: 523, dur: 0.3,  type: 'triangle', vol: 0.2  },
        wrong:   { freq: 220, dur: 0.25, type: 'sawtooth', vol: 0.15 },
        portal:  { freq: 660, dur: 0.5,  type: 'sine',    vol: 0.2  },
        collect: { freq: 587, dur: 0.2,  type: 'triangle', vol: 0.18 }
      };
      const cfg = configs[type] || configs.click;
      osc.type = cfg.type;
      osc.frequency.setValueAtTime(cfg.freq, this.ctx.currentTime);
      if (type === 'portal') {
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + cfg.dur);
      }
      gain.gain.setValueAtTime(cfg.vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + cfg.dur);
      osc.start();
      osc.stop(this.ctx.currentTime + cfg.dur);
    } catch (e) { /* silence */ }
  }
};

/* ============================================================
   SAVE SYSTEM
   ============================================================ */
const SaveSystem = {
  KEY: 'tta_save_v1',
  defaultState() {
    return {
      currentEraIndex: 0,
      score: 0,
      completedEras: [],
      eraScores: {},
      collectedFacts: {},
      started: false
    };
  },
  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  },
  save(state) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(state));
    } catch (e) { /* storage not available */ }
  },
  clear() {
    localStorage.removeItem(this.KEY);
  },
  hasSave() {
    return !!this.load();
  }
};

/* ============================================================
   GAME STATE MANAGER
   ============================================================ */
const Game = {
  state: null,
  currentEraIndex: 0,
  currentEraData: null,
  currentQuizIndex: 0,
  currentQuizScore: 0,
  collectedFactsThisEra: [],
  timelineOrder: [null, null, null, null],
  draggedCard: null,
  dragSourceSlot: null,
  introIndex: 0,

  /* ---------- INIT ---------- */
  init() {
    AudioManager.init();
    this.createStars();
    this.setupMenuButtons();
    const save = SaveSystem.load();
    if (save && save.started) {
      document.getElementById('btn-continue').disabled = false;
    }
    this.showScreen('menu');
  },

  /* ---------- SCREEN MANAGER ---------- */
  showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById('screen-' + name);
    if (el) {
      el.classList.add('active');
      el.scrollTop = 0;
    }
  },

  /* ---------- STARS BACKGROUND ---------- */
  createStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --dur: ${2 + Math.random() * 4}s;
        --delay: ${Math.random() * 4}s;
        opacity: ${0.2 + Math.random() * 0.8};
        width: ${1 + Math.random() * 2}px;
        height: ${1 + Math.random() * 2}px;
      `;
      container.appendChild(star);
    }
  },

  /* ============================================================
     MAIN MENU
     ============================================================ */
  setupMenuButtons() {
    document.getElementById('btn-new-game').addEventListener('click', () => {
      AudioManager.play('click');
      this.startNewGame();
    });
    document.getElementById('btn-continue').addEventListener('click', () => {
      AudioManager.play('click');
      this.continueGame();
    });
    document.getElementById('btn-reset').addEventListener('click', () => {
      AudioManager.play('click');
      if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        SaveSystem.clear();
        document.getElementById('btn-continue').disabled = true;
        this.showScreen('menu');
      }
    });
  },

  startNewGame() {
    this.state = SaveSystem.defaultState();
    this.state.started = true;
    SaveSystem.save(this.state);
    this.introIndex = 0;
    this.showIntro();
  },

  continueGame() {
    this.state = SaveSystem.load() || SaveSystem.defaultState();
    this.showEraSelect();
  },

  /* ============================================================
     STORY INTRO
     ============================================================ */
  showIntro() {
    this.introIndex = 0;
    this.showScreen('intro');
    this.renderIntroDialogue();

    document.getElementById('btn-intro-next').onclick = () => {
      AudioManager.play('click');
      this.introIndex++;
      if (this.introIndex >= INTRO_DIALOGUES.length) {
        this.showEraSelect();
      } else {
        this.renderIntroDialogue();
      }
    };

    document.querySelectorAll('.dialogue-dots .dot').forEach(dot => {
      dot.addEventListener('click', () => {
        const idx = parseInt(dot.dataset.idx, 10);
        this.introIndex = idx;
        this.renderIntroDialogue();
      });
    });
  },

  renderIntroDialogue() {
    const d = INTRO_DIALOGUES[this.introIndex];
    const textEl = document.getElementById('intro-text');
    const speakerEl = document.getElementById('intro-speaker');
    const btn = document.getElementById('btn-intro-next');

    textEl.style.opacity = '0';
    speakerEl.textContent = d.speaker;
    setTimeout(() => {
      textEl.textContent = d.text;
      textEl.style.transition = 'opacity 0.4s';
      textEl.style.opacity = '1';
    }, 150);

    const isLast = this.introIndex === INTRO_DIALOGUES.length - 1;
    btn.textContent = isLast ? 'Begin Mission 🚀' : 'Next →';

    document.querySelectorAll('.dialogue-dots .dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === this.introIndex);
    });
  },

  /* ============================================================
     ERA SELECTION
     ============================================================ */
  showEraSelect() {
    this.updateScoreDisplay();
    this.renderEraCards();
    this.showScreen('era-select');
  },

  updateScoreDisplay() {
    if (!this.state) return;
    const total = this.state.score || 0;
    const completed = this.state.completedEras ? this.state.completedEras.length : 0;
    const pct = Math.round((completed / GAME_DATA.eras.length) * 100);
    const scoreEl = document.getElementById('score-display-era');
    const progressEl = document.getElementById('progress-display-era');
    if (scoreEl) scoreEl.textContent = total;
    if (progressEl) progressEl.textContent = pct + '%';
  },

  renderEraCards() {
    const container = document.getElementById('era-cards');
    container.innerHTML = '';
    const completed = this.state.completedEras || [];

    GAME_DATA.eras.forEach((era, i) => {
      const isCompleted = completed.includes(era.id);
      const isLocked = i > 0 && !completed.includes(GAME_DATA.eras[i - 1].id);
      const card = document.createElement('div');
      card.className = 'era-card' + (isCompleted ? ' completed' : '') + (isLocked ? ' locked' : '');
      card.innerHTML = `
        <div class="era-card-era-num">Era ${i + 1}</div>
        <div class="era-card-icon">${era.icon}</div>
        <h3>${era.name}</h3>
        <p class="era-card-period">${era.period}</p>
        <div class="era-card-status">
          ${isCompleted ? '✅ Restored' : isLocked ? '🔒 Locked' : '⚡ Available'}
        </div>
      `;
      if (!isLocked) {
        card.addEventListener('click', () => {
          AudioManager.play('click');
          this.startEra(i);
        });
      }
      container.appendChild(card);
    });
  },

  /* ============================================================
     EXPLORATION SCENE
     ============================================================ */
  startEra(index) {
    this.currentEraIndex = index;
    this.currentEraData = GAME_DATA.eras[index];
    this.collectedFactsThisEra = [];
    const savedFacts = (this.state.collectedFacts || {})[this.currentEraData.id] || [];
    this.collectedFactsThisEra = [...savedFacts];
    this.showExploration();
  },

  showExploration() {
    const era = this.currentEraData;
    document.getElementById('explore-era-name').textContent = era.name;
    document.getElementById('explore-score').textContent = this.state.score || 0;
    document.getElementById('scene-description').textContent = era.description;
    document.getElementById('scene-bg').className = 'scene-bg ' + era.bgClass;

    this.renderSceneObjects();
    this.renderSceneNPCs();
    this.renderNotebook();

    document.getElementById('btn-back-era').onclick = () => {
      AudioManager.play('click');
      this.showEraSelect();
    };
    document.getElementById('btn-proceed-timeline').onclick = () => {
      AudioManager.play('click');
      this.showTimeline();
    };

    document.getElementById('btn-close-popup').onclick = () => {
      document.getElementById('npc-popup').style.display = 'none';
    };
    document.getElementById('btn-close-fact-popup').onclick = () => {
      document.getElementById('fact-popup').style.display = 'none';
      this.renderNotebook();
    };

    this.showScreen('explore');
  },

  renderSceneObjects() {
    const era = this.currentEraData;
    const container = document.getElementById('scene-objects');
    container.innerHTML = '';

    era.objects.forEach(obj => {
      const factId = era.facts[obj.factIndex].id;
      const collected = this.collectedFactsThisEra.includes(factId);
      const el = document.createElement('div');
      el.className = 'scene-object' + (collected ? ' collected' : '');
      el.innerHTML = `
        <div class="obj-icon">${collected ? '✅' : obj.icon}</div>
        <div class="obj-label">${obj.label}</div>
      `;
      if (!collected) {
        el.addEventListener('click', () => this.collectFact(obj.factIndex));
      }
      container.appendChild(el);
    });
  },

  renderSceneNPCs() {
    const era = this.currentEraData;
    const container = document.getElementById('scene-npcs');
    container.innerHTML = '';

    era.npcs.forEach(npc => {
      const el = document.createElement('div');
      el.className = 'npc';
      el.innerHTML = `
        <div class="npc-icon">${npc.icon}</div>
        <div class="npc-name">${npc.name}</div>
      `;
      el.addEventListener('click', () => this.showNPCDialogue(npc));
      container.appendChild(el);
    });
  },

  showNPCDialogue(npc) {
    AudioManager.play('click');
    document.getElementById('popup-speaker-name').textContent = npc.name;
    document.getElementById('popup-npc-icon').textContent = npc.icon;
    document.getElementById('popup-dialogue-text').textContent = npc.dialogue;
    document.getElementById('npc-popup').style.display = 'flex';
  },

  collectFact(factIndex) {
    AudioManager.play('collect');
    const era = this.currentEraData;
    const fact = era.facts[factIndex];

    if (this.collectedFactsThisEra.includes(fact.id)) return;

    this.collectedFactsThisEra.push(fact.id);
    this.state.score = (this.state.score || 0) + 10;
    if (!this.state.collectedFacts) this.state.collectedFacts = {};
    this.state.collectedFacts[era.id] = [...this.collectedFactsThisEra];
    SaveSystem.save(this.state);

    document.getElementById('explore-score').textContent = this.state.score;
    document.getElementById('fact-popup-text').textContent = fact.text;
    document.getElementById('fact-popup').style.display = 'flex';

    this.renderSceneObjects();
    this.updateProceedButton();
  },

  renderNotebook() {
    const era = this.currentEraData;
    const total = era.facts.length;
    const collected = this.collectedFactsThisEra.length;

    era.facts.forEach((fact, i) => {
      const slot = document.getElementById('fact-slot-' + i);
      if (!slot) return;
      const isCollected = this.collectedFactsThisEra.includes(fact.id);
      slot.className = 'fact-slot ' + (isCollected ? 'filled' : 'empty');
      const textEl = slot.querySelector('.fact-text');
      if (isCollected) {
        const shortText = fact.text.length > 90 ? fact.text.substring(0, 90) + '…' : fact.text;
        textEl.textContent = shortText;
      } else {
        textEl.textContent = '— undiscovered —';
      }
    });

    const pct = Math.round((collected / total) * 100);
    document.getElementById('facts-progress-fill').style.width = pct + '%';
    document.getElementById('facts-progress-text').textContent = `${collected} / ${total} facts`;
    this.updateProceedButton();
  },

  updateProceedButton() {
    const btn = document.getElementById('btn-proceed-timeline');
    const allCollected = this.collectedFactsThisEra.length >= this.currentEraData.facts.length;
    btn.disabled = !allCollected;
    if (allCollected) {
      btn.textContent = '📅 Arrange Timeline →';
    }
  },

  /* ============================================================
     TIMELINE PUZZLE
     ============================================================ */
  showTimeline() {
    const era = this.currentEraData;
    document.getElementById('timeline-era-title').textContent = era.name + ' — Events';
    document.getElementById('timeline-score').textContent = this.state.score || 0;

    this.timelineOrder = [null, null, null, null];
    const shuffled = this.shuffleArray([...era.timelineEvents]);
    this.renderTimelineCards(shuffled);
    this.renderDropZones();
    this.setupTimelineControls();

    document.getElementById('timeline-feedback').style.display = 'none';
    document.getElementById('btn-back-explore').onclick = () => {
      AudioManager.play('click');
      this.showExploration();
    };
    this.showScreen('timeline');
  },

  shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  renderTimelineCards(events) {
    const container = document.getElementById('timeline-cards');
    container.innerHTML = '';
    events.forEach(evt => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.dataset.eventId = evt.id;
      card.dataset.order = evt.order;
      card.draggable = true;
      card.innerHTML = `<div class="event-year">${evt.year}</div><div class="event-desc">${evt.description}</div>`;
      this.setupCardDrag(card);
      container.appendChild(card);
    });
    this.setupTouchDrag();
  },

  renderDropZones() {
    for (let i = 0; i < 4; i++) {
      const zone = document.getElementById('drop-zone-' + i);
      zone.innerHTML = '<span class="drop-placeholder">Drop here</span>';
      zone.className = 'drop-zone';
      this.setupDropZone(zone);
    }
  },

  setupCardDrag(card) {
    card.addEventListener('dragstart', e => {
      this.draggedCard = card;
      this.dragSourceSlot = card.closest('.drop-zone') ? card.closest('.drop-zone').dataset.slot : null;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.dataset.eventId);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      this.draggedCard = null;
      this.dragSourceSlot = null;
    });
  },

  setupDropZone(zone) {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => {
      zone.classList.remove('drag-over');
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      if (!this.draggedCard) return;
      this.placeCardInZone(this.draggedCard, zone);
    });
  },

  placeCardInZone(card, zone) {
    const slotIdx = parseInt(zone.dataset.slot, 10);
    const existingCard = zone.querySelector('.event-card');

    if (existingCard && existingCard !== card) {
      const srcZone = this.dragSourceSlot !== null
        ? document.getElementById('drop-zone-' + this.dragSourceSlot)
        : null;
      if (srcZone) {
        srcZone.innerHTML = '';
        srcZone.appendChild(existingCard);
        this.setupCardDrag(existingCard);
        const ph = srcZone.querySelector('.drop-placeholder');
        if (ph) ph.remove();
      } else {
        const cardsArea = document.getElementById('timeline-cards');
        cardsArea.appendChild(existingCard);
        existingCard.classList.remove('placed');
        this.setupCardDrag(existingCard);
      }
    }

    if (this.dragSourceSlot !== null) {
      const srcZone = document.getElementById('drop-zone-' + this.dragSourceSlot);
      if (srcZone && !srcZone.querySelector('.event-card')) {
        srcZone.innerHTML = '<span class="drop-placeholder">Drop here</span>';
      }
    }

    zone.innerHTML = '';
    zone.appendChild(card);
    this.setupCardDrag(card);
    this.timelineOrder[slotIdx] = card.dataset.eventId;

    const cardsArea = document.getElementById('timeline-cards');
    if (cardsArea.contains(card)) {
      cardsArea.removeChild(card);
    }
  },

  setupTimelineControls() {
    document.getElementById('btn-timeline-check').onclick = () => {
      AudioManager.play('click');
      this.checkTimelineOrder();
    };
    document.getElementById('btn-timeline-reset').onclick = () => {
      AudioManager.play('click');
      const era = this.currentEraData;
      const shuffled = this.shuffleArray([...era.timelineEvents]);
      this.timelineOrder = [null, null, null, null];
      this.renderDropZones();
      this.renderTimelineCards(shuffled);
      this.setupTouchDrag();
      document.getElementById('timeline-feedback').style.display = 'none';
    };
  },

  checkTimelineOrder() {
    const era = this.currentEraData;
    const zones = document.querySelectorAll('.drop-zone');
    let allFilled = true;

    zones.forEach(zone => {
      if (!zone.querySelector('.event-card')) allFilled = false;
    });

    if (!allFilled) {
      this.showTimelineFeedback('⚠️ Please place all 4 event cards before checking!', false);
      return;
    }

    let correctCount = 0;
    zones.forEach((zone, slotIdx) => {
      const card = zone.querySelector('.event-card');
      if (!card) return;
      const cardOrder = parseInt(card.dataset.order, 10);
      const isCorrect = cardOrder === slotIdx;
      zone.classList.remove('correct', 'incorrect');
      zone.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect) correctCount++;
    });

    const points = correctCount * 20;
    this.state.score = (this.state.score || 0) + points;
    document.getElementById('timeline-score').textContent = this.state.score;
    SaveSystem.save(this.state);

    const allCorrect = correctCount === 4;
    const msg = allCorrect
      ? `🎉 Perfect! All 4 events in correct order! +${points} points!`
      : `You got ${correctCount}/4 correct. +${points} points. ${allCorrect ? '' : 'Green = correct, Red = incorrect.'}`;

    this.showTimelineFeedback(msg, allCorrect);

    if (allCorrect) {
      AudioManager.play('portal');
      setTimeout(() => this.showQuiz(), 1800);
    } else {
      AudioManager.play('wrong');
      document.getElementById('btn-timeline-check').textContent = '✓ Try Again';
    }
  },

  showTimelineFeedback(msg, isPositive) {
    const fb = document.getElementById('timeline-feedback');
    const text = document.getElementById('timeline-feedback-text');
    fb.style.display = 'block';
    text.textContent = msg;
    fb.style.background = isPositive
      ? 'rgba(22,163,74,0.15)' : 'rgba(245,158,11,0.15)';
  },

  /* ============================================================
     TOUCH DRAG SUPPORT FOR TIMELINE
     ============================================================ */
  setupTouchDrag() {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
      card.addEventListener('touchstart', e => this.onTouchStart(e, card), { passive: false });
      card.addEventListener('touchmove', e => this.onTouchMove(e), { passive: false });
      card.addEventListener('touchend', e => this.onTouchEnd(e), { passive: false });
    });
  },

  touchCard: null,
  touchClone: null,
  touchOffset: { x: 0, y: 0 },

  onTouchStart(e, card) {
    e.preventDefault();
    this.touchCard = card;
    this.dragSourceSlot = card.closest('.drop-zone') ? card.closest('.drop-zone').dataset.slot : null;
    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    this.touchOffset.x = touch.clientX - rect.left;
    this.touchOffset.y = touch.clientY - rect.top;

    this.touchClone = card.cloneNode(true);
    this.touchClone.style.cssText = `
      position: fixed; pointer-events: none; z-index: 9999;
      width: ${rect.width}px; opacity: 0.8;
      left: ${rect.left}px; top: ${rect.top}px;
    `;
    document.body.appendChild(this.touchClone);
    card.style.opacity = '0.3';
  },

  onTouchMove(e) {
    if (!this.touchClone) return;
    e.preventDefault();
    const touch = e.touches[0];
    this.touchClone.style.left = (touch.clientX - this.touchOffset.x) + 'px';
    this.touchClone.style.top  = (touch.clientY - this.touchOffset.y) + 'px';

    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const zone = el ? el.closest('.drop-zone') : null;
    if (zone) zone.classList.add('drag-over');
  },

  onTouchEnd(e) {
    if (!this.touchCard || !this.touchClone) return;
    e.preventDefault();
    const touch = e.changedTouches[0];
    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
    if (this.touchClone.parentNode) this.touchClone.parentNode.removeChild(this.touchClone);
    this.touchCard.style.opacity = '1';

    const el = document.elementFromPoint(touch.clientX, touch.clientY);
    const zone = el ? el.closest('.drop-zone') : null;
    if (zone) {
      this.draggedCard = this.touchCard;
      this.placeCardInZone(this.touchCard, zone);
    }

    this.touchCard = null;
    this.touchClone = null;
    this.draggedCard = null;
    this.dragSourceSlot = null;
  },

  /* ============================================================
     QUIZ SCENE
     ============================================================ */
  showQuiz() {
    const era = this.currentEraData;
    document.getElementById('quiz-era-title').textContent = era.name + ' — Quiz';
    document.getElementById('quiz-score').textContent = this.state.score || 0;

    this.currentQuizIndex = 0;
    this.currentQuizScore = 0;
    this.renderQuestion(0);

    document.getElementById('btn-quiz-next').onclick = () => {
      AudioManager.play('click');
      this.currentQuizIndex++;
      if (this.currentQuizIndex < era.quiz.length) {
        this.renderQuestion(this.currentQuizIndex);
      } else {
        this.showRestore();
      }
    };

    this.showScreen('quiz');
  },

  renderQuestion(index) {
    const era = this.currentEraData;
    const q = era.quiz[index];
    const total = era.quiz.length;

    document.getElementById('question-number').textContent = `Question ${index + 1} of ${total}`;
    document.getElementById('question-icon').textContent = q.icon;
    document.getElementById('question-text').textContent = q.question;

    document.querySelectorAll('.q-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.classList.toggle('done', i < index);
    });

    const optionsContainer = document.getElementById('answer-options');
    optionsContainer.innerHTML = '';
    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.innerHTML = `<span class="answer-option-letter">${letters[i]}</span><span>${opt}</span>`;
      btn.addEventListener('click', () => this.selectAnswer(i, q));
      optionsContainer.appendChild(btn);
    });

    const feedback = document.getElementById('quiz-feedback');
    feedback.style.display = 'none';
    feedback.className = 'quiz-feedback';

    const nextBtn = document.getElementById('btn-quiz-next');
    nextBtn.style.display = 'none';
    nextBtn.textContent = index + 1 < total ? 'Next Question →' : 'See Results →';
    document.getElementById('quiz-score').textContent = this.state.score || 0;
  },

  selectAnswer(selectedIndex, question) {
    const isCorrect = selectedIndex === question.correct;

    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === question.correct) btn.classList.add('correct');
      else if (i === selectedIndex) btn.classList.add('incorrect');
    });

    if (isCorrect) {
      AudioManager.play('correct');
      this.state.score = (this.state.score || 0) + 30;
      this.currentQuizScore += 30;
    } else {
      AudioManager.play('wrong');
    }

    document.getElementById('quiz-score').textContent = this.state.score;
    SaveSystem.save(this.state);

    const feedback = document.getElementById('quiz-feedback');
    const feedbackIcon = document.getElementById('feedback-icon');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackExp = document.getElementById('feedback-explanation');

    feedback.style.display = 'flex';
    feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
    feedbackIcon.textContent = isCorrect ? '✅' : '❌';
    feedbackText.textContent = isCorrect ? 'Correct! +30 points!' : `Incorrect. The correct answer is: ${question.options[question.correct]}`;
    feedbackExp.textContent = question.explanation;

    document.getElementById('btn-quiz-next').style.display = 'inline-flex';
  },

  /* ============================================================
     RESTORE TIMELINE
     ============================================================ */
  showRestore() {
    const era = this.currentEraData;
    AudioManager.play('portal');

    if (!this.state.completedEras) this.state.completedEras = [];
    if (!this.state.completedEras.includes(era.id)) {
      this.state.completedEras.push(era.id);
    }
    if (!this.state.eraScores) this.state.eraScores = {};
    this.state.eraScores[era.id] = this.state.score;
    SaveSystem.save(this.state);

    document.getElementById('restore-title').textContent = era.name + ' Restored! ✅';
    document.getElementById('restore-description').textContent =
      `Excellent work, Time Traveler! You have successfully restored the ${era.name} timeline. ` +
      `The historical records of this era are now safe. The timeline portal is repaired!`;
    document.getElementById('restore-era-score').textContent = this.currentQuizScore + (this.collectedFactsThisEra.length * 10);
    document.getElementById('restore-total-score').textContent = this.state.score;
    document.getElementById('portal-icon').textContent = era.icon;

    const summaryEl = document.getElementById('era-summary');
    summaryEl.innerHTML = '<h3 style="color:var(--gold);margin-bottom:12px;">Facts Recovered:</h3>';
    era.facts.forEach(fact => {
      const div = document.createElement('div');
      div.className = 'era-summary-fact';
      div.innerHTML = `<span>📜</span><span>${fact.text}</span>`;
      summaryEl.appendChild(div);
    });

    const allDone = this.state.completedEras.length === GAME_DATA.eras.length;
    const continueBtn = document.getElementById('btn-restore-continue');
    continueBtn.textContent = allDone ? '🏆 See Final Victory!' : 'Continue Mission →';
    continueBtn.onclick = () => {
      AudioManager.play('click');
      if (allDone) {
        this.showVictory();
      } else {
        this.showEraSelect();
      }
    };

    this.showScreen('restore');
  },

  /* ============================================================
     VICTORY SCREEN
     ============================================================ */
  showVictory() {
    const score = this.state.score || 0;
    const maxScore = GAME_DATA.eras.length * (3 * 10 + 4 * 20 + 3 * 30);

    document.getElementById('final-score').textContent = score;
    const pct = score / maxScore;
    let grade = '⭐';
    if (pct >= 0.9) grade = '⭐⭐⭐';
    else if (pct >= 0.7) grade = '⭐⭐';
    document.getElementById('final-grade').textContent = grade;

    const erasContainer = document.getElementById('victory-eras');
    erasContainer.innerHTML = '';
    GAME_DATA.eras.forEach(era => {
      const badge = document.createElement('div');
      badge.className = 'victory-era-badge';
      badge.textContent = `${era.icon} ${era.name} ✅`;
      erasContainer.appendChild(badge);
    });

    this.createConfetti();

    document.getElementById('btn-play-again').onclick = () => {
      AudioManager.play('click');
      SaveSystem.clear();
      this.state = SaveSystem.defaultState();
      this.introIndex = 0;
      this.showIntro();
    };
    document.getElementById('btn-view-history').onclick = () => {
      AudioManager.play('click');
      this.showEncyclopedia();
    };
    document.getElementById('btn-close-encyclopedia').onclick = () => {
      document.getElementById('encyclopedia-popup').style.display = 'none';
    };

    this.showScreen('victory');
  },

  createConfetti() {
    const area = document.getElementById('confetti-area');
    area.innerHTML = '';
    const colors = ['#f59e0b', '#2563eb', '#ffffff', '#16a34a', '#ef4444', '#8b5cf6'];
    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.cssText = `
        left: ${Math.random() * 100}%;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        --dur: ${3 + Math.random() * 4}s;
        --delay: ${Math.random() * 3}s;
        width: ${6 + Math.random() * 8}px;
        height: ${6 + Math.random() * 8}px;
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      `;
      area.appendChild(piece);
    }
  },

  showEncyclopedia() {
    const content = document.getElementById('encyclopedia-content');
    content.innerHTML = '';
    GAME_DATA.eras.forEach(era => {
      const section = document.createElement('div');
      section.className = 'enc-era';
      let factsHtml = era.facts.map(f =>
        `<div class="enc-fact"><span>📜</span><span>${f.text}</span></div>`
      ).join('');
      section.innerHTML = `<h3>${era.icon} ${era.name} (${era.period})</h3>${factsHtml}`;
      content.appendChild(section);
    });
    document.getElementById('encyclopedia-popup').style.display = 'flex';
  }
};

/* ============================================================
   BOOTSTRAP
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  Game.init();
});
