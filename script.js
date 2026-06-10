/* ============================================================
   TIME TRAVELER ACADEMY — LOST INDONESIAN HISTORY
   script.js — Complete Game Logic (QA-Fixed & Polished)
   ============================================================ */

'use strict';

/* ============================================================
   GAME DATA
   ============================================================ */
const GAME_DATA = {
  eras: [
    /* ─────────────── ERA 1: SRIWIJAYA ─────────────── */
    {
      id: 'sriwijaya',
      name: 'Sriwijaya Kingdom',
      period: '650 – 1377 CE',
      icon: '⛵',
      bgClass: 'scene-sriwijaya',
      description:
        'You have arrived in ancient Palembang, the heart of the mighty Sriwijaya maritime empire. ' +
        'Golden trade ships fill the river while Buddhist monks meditate in riverside monasteries. ' +
        'The air smells of spices and sea salt. Explore this bustling port city to recover the lost facts!',
      npcs: [
        {
          id: 'monk', name: 'Scholar Monk', icon: '🧘',
          dialogue:
            'Welcome, young traveler! You stand in Palembang, where great Dapunta Hyang Sri Jayanasa ' +
            'founded this empire around 650 CE. We are a people of the sea — our ships carry silks ' +
            'and spices from China to India. Our kingdom controls the Strait of Malacca, the most ' +
            'important sea lane in all of Asia!'
        },
        {
          id: 'merchant', name: 'Silk Merchant', icon: '🏺',
          dialogue:
            'Ah, a curious visitor! Sriwijaya is not just a trading kingdom — it is the greatest ' +
            'center of Buddhist learning in all of Southeast Asia. Pilgrims travel from India and China ' +
            'to study the Dharma here. Chinese monk Yi Jing spent years studying our texts and wrote ' +
            'that over a thousand monks live among us!'
        }
      ],
      objects: [
        { id: 'scroll',  icon: '📜', label: 'Ancient Scroll',   factIndex: 0 },
        { id: 'ship',    icon: '⛵', label: 'Trade Ship',        factIndex: 1 },
        { id: 'temple',  icon: '🏛️', label: 'Buddhist Temple',  factIndex: 2 }
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
          text: 'Sriwijaya was a major center of Vajrayana Buddhism. Chinese monk Yi Jing (義淨) visited in 671 CE and spent years studying Buddhist texts there, describing more than a thousand resident monks.'
        }
      ],
      timelineEvents: [
        { id: 'e1_1', year: '650 CE',   order: 0, description: 'Dapunta Hyang Sri Jayanasa founds the Sriwijaya Empire in Palembang, Sumatra' },
        { id: 'e1_2', year: '671 CE',   order: 1, description: 'Chinese Buddhist pilgrim Yi Jing visits Sriwijaya, documents over 1,000 monks studying there' },
        { id: 'e1_3', year: '775 CE',   order: 2, description: 'The Sailendra dynasty, allied with Sriwijaya, begins construction of Borobudur in Java' },
        { id: 'e1_4', year: '1025 CE',  order: 3, description: 'The Chola Empire of South India raids Sriwijaya\'s ports, beginning its long decline' }
      ],
      quiz: [
        {
          question: 'Where was the capital of the Sriwijaya Empire located?',
          icon: '🗺️',
          options: ['Palembang, South Sumatra', 'Majapahit, East Java', 'Mataram, Central Java', 'Kutai, Borneo'],
          correct: 0,
          explanation: 'Palembang in South Sumatra was the capital. It is recorded in the Kedukan Bukit Inscription of 682 CE as the seat of Sriwijaya\'s power.'
        },
        {
          question: 'What religion was the primary faith and center of learning in the Sriwijaya Empire?',
          icon: '🙏',
          options: ['Buddhism', 'Hinduism', 'Islam', 'Animism'],
          correct: 0,
          explanation: 'Buddhism — specifically Vajrayana Buddhism — was the dominant religion. Yi Jing documented over 1,000 Buddhist monks studying in Sriwijaya in 671 CE.'
        },
        {
          question: 'Which strategically crucial sea passage did Sriwijaya control, making it a wealthy trading empire?',
          icon: '⚓',
          options: ['Strait of Malacca', 'Strait of Hormuz', 'Strait of Gibraltar', 'Bering Strait'],
          correct: 0,
          explanation: 'Sriwijaya controlled the Strait of Malacca — the narrow passage between the Malay Peninsula and Sumatra — the primary maritime trade route between China and India.'
        }
      ]
    },

    /* ─────────────── ERA 2: MAJAPAHIT ─────────────── */
    {
      id: 'majapahit',
      name: 'Majapahit Kingdom',
      period: '1293 – 1527 CE',
      icon: '⚔️',
      bgClass: 'scene-majapahit',
      description:
        'You stand in Trowulan, the grand capital of the Majapahit Empire. ' +
        'Magnificent temples and wide canals stretch before you. Warriors in golden armor patrol the royal palace. ' +
        'This is the height of the Nusantara empire — the greatest pre-colonial kingdom in Indonesian history. ' +
        'Seek out the hidden facts before the timeline collapses!',
      npcs: [
        {
          id: 'gajah_mada', name: 'Prime Minister Gajah Mada', icon: '⚔️',
          dialogue:
            'I am Gajah Mada, Mahapatih of Majapahit! In 1334, I swore the Palapa Oath — I shall not ' +
            'taste any spice until I have united all of Nusantara under Majapahit\'s glory. Under my ' +
            'command and King Hayam Wuruk\'s reign, this empire stretches from Sumatra to the Philippines. ' +
            'We are the greatest power in all of Southeast Asia!'
        },
        {
          id: 'poet', name: 'Court Poet Prapanca', icon: '📖',
          dialogue:
            'Greetings! I am Mpu Prapanca. In 1365, I completed the Nagarakretagama — a magnificent ' +
            'kakawin poem describing the full glory of this empire under King Hayam Wuruk. It lists ' +
            '98 tributaries and vassal states across Southeast Asia. It is our most precious historical document!'
        }
      ],
      objects: [
        { id: 'keris',          icon: '🗡️', label: 'Royal Keris',      factIndex: 0 },
        { id: 'nagarakretagama',icon: '📖', label: 'Nagarakretagama', factIndex: 1 },
        { id: 'temple_rel',     icon: '🛕', label: 'Temple Relief',    factIndex: 2 }
      ],
      facts: [
        {
          id: 'f2_1',
          text: 'Majapahit was founded in 1293 CE by Raden Wijaya after defeating the Mongol invasion fleet of Kublai Khan through a cunning military alliance. The kingdom was named after the maja fruit that grew at its founding site.'
        },
        {
          id: 'f2_2',
          text: 'Under Prime Minister Gajah Mada\'s leadership (1334–1364 CE), Majapahit reached its greatest extent. His Palapa Oath (Sumpah Palapa) vowed to unite all of Nusantara — and he nearly succeeded.'
        },
        {
          id: 'f2_3',
          text: 'The Nagarakretagama, written in 1365 CE by court poet Mpu Prapanca during King Hayam Wuruk\'s reign, is the most important primary source on Majapahit, listing 98 tributaries. It is on UNESCO\'s Memory of the World register.'
        }
      ],
      timelineEvents: [
        { id: 'e2_1', year: '1293 CE', order: 0, description: 'Raden Wijaya founds Majapahit Kingdom after defeating the Mongol fleet of Kublai Khan' },
        { id: 'e2_2', year: '1334 CE', order: 1, description: 'Gajah Mada becomes Mahapatih and swears the Palapa Oath to unite all of Nusantara' },
        { id: 'e2_3', year: '1365 CE', order: 2, description: 'Mpu Prapanca completes the Nagarakretagama describing Majapahit\'s vast empire under King Hayam Wuruk' },
        { id: 'e2_4', year: '1478 CE', order: 3, description: 'The fall of Trowulan marks the beginning of Majapahit\'s terminal decline as Islamic kingdoms rise' }
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
          question: 'What was the name of the famous oath sworn by Gajah Mada to unite all of Nusantara?',
          icon: '✊',
          options: ['Sumpah Palapa', 'Sumpah Pemuda', 'Sumpah Bhayangkara', 'Sumpah Sati'],
          correct: 0,
          explanation: 'The Sumpah Palapa (Palapa Oath) was sworn by Gajah Mada in 1334 CE. He vowed to abstain from spices until he had united all of Nusantara under Majapahit\'s rule.'
        },
        {
          question: 'Which ancient text, written in 1365 CE, is the most important historical document about Majapahit?',
          icon: '📜',
          options: ['Nagarakretagama', 'Sutasoma', 'Pararaton', 'Arjunawiwaha'],
          correct: 0,
          explanation: 'The Nagarakretagama by Mpu Prapanca (1365 CE) describes Majapahit at its height, listing 98 tributaries. It is inscribed on UNESCO\'s Memory of the World register.'
        }
      ]
    },

    /* ─────────────── ERA 3: INDEPENDENCE ─────────────── */
    {
      id: 'independence',
      name: 'Indonesian Independence',
      period: '1945 CE',
      icon: '🇮🇩',
      bgClass: 'scene-independence',
      description:
        'You have arrived at Jalan Pegangsaan Timur 56, Jakarta, on August 17, 1945. ' +
        'The morning air crackles with tension and excitement. ' +
        'After 350 years of Dutch colonization and Japanese occupation, Indonesia is about to be born. ' +
        'Sukarno and Hatta are preparing to make history. Find the hidden facts before the proclamation!',
      npcs: [
        {
          id: 'sukarno', name: 'Ir. Sukarno', icon: '🎙️',
          dialogue:
            'The time has come! Japan surrendered on August 15th. Yesterday the pemuda — the youth groups ' +
            '— took us to Rengasdengklok and demanded we proclaim independence immediately, without waiting ' +
            'for Japan. Today, at 10 AM on August 17th, 1945, I will read the Proclamation of Independence. ' +
            'This moment belongs to all the Indonesian people!'
        },
        {
          id: 'hatta', name: 'Drs. Mohammad Hatta', icon: '📋',
          dialogue:
            'The proclamation text was drafted last night at the home of Japanese naval commander Laksamana ' +
            'Maeda. Sukarno, Achmad Soebardjo, and I worked through the night. Sayuti Melik typed the ' +
            'final text. We will sign it together — Sukarno and Hatta — on behalf of the Indonesian people!'
        }
      ],
      objects: [
        { id: 'proclamation', icon: '📜', label: 'Proclamation Text',  factIndex: 0 },
        { id: 'flag',         icon: '🚩', label: 'Merah Putih Flag',   factIndex: 1 },
        { id: 'microphone',   icon: '🎙️', label: 'Radio Microphone',  factIndex: 2 }
      ],
      facts: [
        {
          id: 'f3_1',
          text: 'Indonesia\'s Proclamation of Independence was read by Ir. Sukarno and signed by Sukarno–Hatta at Jalan Pegangsaan Timur 56, Jakarta, at 10:00 AM on Friday, August 17, 1945 — two days after Japan\'s surrender.'
        },
        {
          id: 'f3_2',
          text: 'The Merah Putih (Red and White) national flag was sewn by Fatmawati, Sukarno\'s wife, and raised immediately after the proclamation was read. Red symbolizes courage; white symbolizes purity.'
        },
        {
          id: 'f3_3',
          text: 'On August 18, 1945, the PPKI adopted the 1945 Constitution and elected Sukarno as the first President and Mohammad Hatta as the first Vice President of the Republic of Indonesia.'
        }
      ],
      timelineEvents: [
        { id: 'e3_1', year: 'Aug 15, 1945', order: 0, description: 'Japan surrenders to Allied forces after atomic bombs on Hiroshima and Nagasaki, ending World War II in Asia' },
        { id: 'e3_2', year: 'Aug 16, 1945', order: 1, description: 'The pemuda (youth groups) take Sukarno and Hatta to Rengasdengklok, demanding immediate proclamation of independence' },
        { id: 'e3_3', year: 'Aug 17, 1945', order: 2, description: 'Sukarno reads the Proclamation of Indonesian Independence at Jalan Pegangsaan Timur 56, Jakarta at 10:00 AM' },
        { id: 'e3_4', year: 'Aug 18, 1945', order: 3, description: 'PPKI adopts the 1945 Constitution and elects Sukarno as President and Hatta as Vice President of Indonesia' }
      ],
      quiz: [
        {
          question: 'On what exact date was Indonesia\'s Proclamation of Independence announced?',
          icon: '📅',
          options: ['August 17, 1945', 'August 15, 1945', 'August 18, 1945', 'August 16, 1945'],
          correct: 0,
          explanation: 'August 17, 1945 at 10:00 AM at Jalan Pegangsaan Timur 56, Jakarta. This date is commemorated every year as Indonesia\'s National Independence Day.'
        },
        {
          question: 'Who proclaimed Indonesian independence together, representing the Indonesian people?',
          icon: '✊',
          options: ['Sukarno and Mohammad Hatta', 'Sukarno and Sutan Sjahrir', 'Hatta and Achmad Soebardjo', 'Sukarno and Sayuti Melik'],
          correct: 0,
          explanation: 'Sukarno and Mohammad Hatta co-signed and proclaimed independence "atas nama bangsa Indonesia" (on behalf of the Indonesian people). They became the first President and Vice President.'
        },
        {
          question: 'Who sewed the original Merah Putih flag raised during the Independence Proclamation ceremony?',
          icon: '🚩',
          options: ['Fatmawati', 'Kartini', 'Dewi Sartika', 'Cut Nyak Dhien'],
          correct: 0,
          explanation: 'Fatmawati, Sukarno\'s wife, personally sewed the original Merah Putih flag raised at Jalan Pegangsaan Timur 56 during the proclamation ceremony on August 17, 1945.'
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
          'and arrange the events in correct chronological order. ' +
          'Your Time Traveler\'s Notebook will record everything you discover.'
  },
  {
    speaker: 'Mission Computer',
    text: 'Each era you restore will repair the timeline portal and unlock the next destination. ' +
          'Think carefully, trust what you learn — the history of Indonesia is counting on you!'
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
    } catch (e) { /* audio unavailable */ }
  },
  /* FIX: always resume suspended context before playing */
  play(type) {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    try {
      const osc  = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      const configs = {
        click:   { freq: 440,  dur: 0.08, wave: 'sine',     vol: 0.14 },
        correct: { freq: 523,  dur: 0.35, wave: 'triangle', vol: 0.2  },
        wrong:   { freq: 200,  dur: 0.28, wave: 'sawtooth', vol: 0.14 },
        portal:  { freq: 660,  dur: 0.55, wave: 'sine',     vol: 0.2  },
        collect: { freq: 587,  dur: 0.22, wave: 'triangle', vol: 0.17 }
      };
      const cfg = configs[type] || configs.click;
      osc.type = cfg.wave;
      osc.frequency.setValueAtTime(cfg.freq, this.ctx.currentTime);
      if (type === 'portal') {
        osc.frequency.exponentialRampToValueAtTime(1046, this.ctx.currentTime + cfg.dur);
      } else if (type === 'correct') {
        osc.frequency.exponentialRampToValueAtTime(659, this.ctx.currentTime + cfg.dur);
      }
      gain.gain.setValueAtTime(cfg.vol, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + cfg.dur);
      osc.start();
      osc.stop(this.ctx.currentTime + cfg.dur);
    } catch (e) { /* silence */ }
  }
};

/* ============================================================
   SAVE SYSTEM
   ============================================================ */
const SaveSystem = {
  KEY: 'tta_save_v2',
  defaultState() {
    return {
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
      return raw ? JSON.parse(raw) : null;
    } catch (e) { return null; }
  },
  save(state) {
    try { localStorage.setItem(this.KEY, JSON.stringify(state)); } catch (e) {}
  },
  clear() { localStorage.removeItem(this.KEY); },
  hasSave() { return !!this.load(); }
};

/* ============================================================
   GAME — MAIN CONTROLLER
   ============================================================ */
const Game = {
  /* runtime state */
  state: null,
  currentEraIndex: 0,
  currentEraData: null,
  currentQuizIndex: 0,
  eraSessionScore: 0,        /* points earned this era session */
  collectedFactsThisEra: [],
  timelineAlreadyScored: false,  /* FIX: prevent double-scoring on retry */
  timelineAdvanceTimer: null,    /* FIX: clearable auto-advance */
  draggedCard: null,             /* desktop drag state */
  touchCard: null,               /* touch drag state */
  touchClone: null,
  touchOffset: { x: 0, y: 0 },
  introIndex: 0,

  /* ── INIT ─────────────────────────────────────── */
  init() {
    AudioManager.init();
    this.createStars();
    this.setupMenuButtons();
    this.setupConfirmModal();
    const save = SaveSystem.load();
    if (save && save.started) {
      document.getElementById('btn-continue').disabled = false;
      document.getElementById('btn-continue').removeAttribute('aria-disabled');
    }
    this.showScreen('menu');
  },

  /* ── SCREEN MANAGER ───────────────────────────── */
  showScreen(name) {
    document.querySelectorAll('.screen').forEach(s => {
      s.classList.remove('active');
    });
    const el = document.getElementById('screen-' + name);
    if (el) {
      el.classList.add('active');
      el.scrollTop = 0;
    }
  },

  /* ── STARS BACKGROUND ─────────────────────────── */
  createStars() {
    const container = document.getElementById('stars');
    if (!container) return;
    for (let i = 0; i < 130; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.cssText = `
        left:${Math.random() * 100}%;
        top:${Math.random() * 100}%;
        --dur:${2 + Math.random() * 4}s;
        --delay:${Math.random() * 4}s;
        opacity:${0.2 + Math.random() * 0.8};
        width:${1 + Math.random() * 2.5}px;
        height:${1 + Math.random() * 2.5}px;
      `;
      container.appendChild(s);
    }
  },

  /* ── CUSTOM CONFIRM MODAL ─────────────────────── */
  /* FIX: replaces native confirm() which is blocked in some environments */
  setupConfirmModal() {
    document.getElementById('btn-modal-no').addEventListener('click', () => {
      this._hideConfirm();
    });
  },
  showConfirm(message, onYes) {
    document.getElementById('modal-confirm-text').textContent = message;
    const modal = document.getElementById('modal-confirm');
    modal.hidden = false;
    document.getElementById('btn-modal-yes').onclick = () => {
      this._hideConfirm();
      onYes();
    };
  },
  _hideConfirm() {
    document.getElementById('modal-confirm').hidden = true;
  },

  /* ── SCORE DISPLAY WITH FLASH ─────────────────── */
  updateScoreEl(elId, value) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = value;
    el.classList.remove('score-flash');
    void el.offsetWidth; /* force reflow to restart animation */
    el.classList.add('score-flash');
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
      this.showConfirm(
        'This will erase all your progress and scores. Are you sure?',
        () => {
          SaveSystem.clear();
          const btn = document.getElementById('btn-continue');
          btn.disabled = true;
          btn.setAttribute('aria-disabled', 'true');
          this.showScreen('menu');
        }
      );
    });
  },

  startNewGame() {
    this.state = SaveSystem.defaultState();
    this.state.started = true;
    SaveSystem.save(this.state);
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

    /* FIX: use onclick (not addEventListener) to avoid stacking listeners on Play Again */
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
      dot.onclick = () => {
        const idx = parseInt(dot.dataset.idx, 10);
        this.introIndex = idx;
        this.renderIntroDialogue();
      };
    });
  },

  renderIntroDialogue() {
    const d = INTRO_DIALOGUES[this.introIndex];
    const textEl    = document.getElementById('intro-text');
    const speakerEl = document.getElementById('intro-speaker');
    const btn       = document.getElementById('btn-intro-next');

    textEl.style.opacity = '0';
    speakerEl.textContent = d.speaker;
    setTimeout(() => {
      textEl.textContent = d.text;
      textEl.style.opacity = '1';
    }, 140);

    btn.textContent = this.introIndex === INTRO_DIALOGUES.length - 1
      ? 'Begin Mission 🚀' : 'Next →';

    document.querySelectorAll('.dialogue-dots .dot').forEach((dot, i) => {
      const active = i === this.introIndex;
      dot.classList.toggle('active', active);
      dot.setAttribute('aria-selected', String(active));
    });
  },

  /* ============================================================
     ERA SELECTION
     ============================================================ */
  showEraSelect() {
    this._updateEraScoreDisplay();
    this._renderEraCards();
    this.showScreen('era-select');
  },

  _updateEraScoreDisplay() {
    if (!this.state) return;
    const completed = (this.state.completedEras || []).length;
    const pct = Math.round((completed / GAME_DATA.eras.length) * 100);
    const scoreEl    = document.getElementById('score-display-era');
    const progressEl = document.getElementById('progress-display-era');
    if (scoreEl)    scoreEl.textContent    = this.state.score || 0;
    if (progressEl) progressEl.textContent = pct + '%';
  },

  _renderEraCards() {
    const container = document.getElementById('era-cards');
    container.innerHTML = '';
    const completed = this.state.completedEras || [];

    GAME_DATA.eras.forEach((era, i) => {
      const isCompleted = completed.includes(era.id);
      const isLocked    = i > 0 && !completed.includes(GAME_DATA.eras[i - 1].id);

      const card = document.createElement('div');
      card.className = 'era-card'
        + (isCompleted ? ' completed' : '')
        + (isLocked    ? ' locked'    : '');
      card.setAttribute('role', 'listitem');
      if (!isLocked) {
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', `Era ${i + 1}: ${era.name} — ${isCompleted ? 'Restored' : 'Available'}`);
      }

      card.innerHTML = `
        <span class="era-card-era-num">Era ${i + 1}</span>
        <span class="era-card-icon" aria-hidden="true">${era.icon}</span>
        <h3>${era.name}</h3>
        <p class="era-card-period">${era.period}</p>
        <span class="era-card-status">
          ${isCompleted ? '✅ Restored' : isLocked ? '🔒 Locked' : '⚡ Available'}
        </span>
      `;

      if (!isLocked) {
        const start = () => { AudioManager.play('click'); this.startEra(i); };
        card.addEventListener('click', start);
        card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); start(); } });
      }
      container.appendChild(card);
    });
  },

  /* ============================================================
     EXPLORATION SCENE
     ============================================================ */
  startEra(index) {
    this.currentEraIndex = index;
    this.currentEraData  = GAME_DATA.eras[index];
    this.eraSessionScore = 0;
    /* Restore previously collected facts for this era */
    const saved = (this.state.collectedFacts || {})[this.currentEraData.id] || [];
    this.collectedFactsThisEra = [...saved];
    this.showExploration();
  },

  showExploration() {
    const era = this.currentEraData;
    document.getElementById('explore-era-name').textContent = era.name;
    document.getElementById('explore-score').textContent    = this.state.score || 0;
    document.getElementById('scene-description').textContent = era.description;
    document.getElementById('scene-bg').className = 'scene-bg ' + era.bgClass;

    this._renderSceneObjects();
    this._renderSceneNPCs();
    this._renderNotebook();

    document.getElementById('btn-back-era').onclick = () => {
      AudioManager.play('click');
      this.showEraSelect();
    };
    document.getElementById('btn-proceed-timeline').onclick = () => {
      AudioManager.play('click');
      this.showTimeline();
    };
    document.getElementById('btn-close-popup').onclick = () => {
      document.getElementById('npc-popup').hidden = true;
    };
    document.getElementById('btn-close-fact-popup').onclick = () => {
      document.getElementById('fact-popup').hidden = true;
    };

    this.showScreen('explore');
  },

  _renderSceneObjects() {
    const era       = this.currentEraData;
    const container = document.getElementById('scene-objects');
    container.innerHTML = '';

    era.objects.forEach(obj => {
      const factId    = era.facts[obj.factIndex].id;
      const collected = this.collectedFactsThisEra.includes(factId);

      const el = document.createElement('div');
      el.className = 'scene-object' + (collected ? ' collected' : '');
      el.setAttribute('role', 'listitem');
      el.innerHTML = `
        <div class="obj-icon" aria-hidden="true">${collected ? '✅' : obj.icon}</div>
        <div class="obj-label">${obj.label}</div>
      `;
      if (!collected) {
        el.setAttribute('tabindex', '0');
        el.setAttribute('aria-label', `Investigate: ${obj.label}`);
        const collect = () => this.collectFact(obj.factIndex);
        el.addEventListener('click', collect);
        el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); collect(); } });
      } else {
        el.setAttribute('aria-label', `${obj.label} — already discovered`);
      }
      container.appendChild(el);
    });
  },

  _renderSceneNPCs() {
    const era       = this.currentEraData;
    const container = document.getElementById('scene-npcs');
    container.innerHTML = '';

    era.npcs.forEach(npc => {
      const el = document.createElement('div');
      el.className = 'npc';
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', `Talk to ${npc.name}`);
      el.innerHTML = `
        <div class="npc-icon" aria-hidden="true">${npc.icon}</div>
        <div class="npc-name">${npc.name}</div>
      `;
      const talk = () => this._showNPCDialogue(npc);
      el.addEventListener('click', talk);
      el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); talk(); } });
      container.appendChild(el);
    });
  },

  _showNPCDialogue(npc) {
    AudioManager.play('click');
    document.getElementById('popup-speaker-name').textContent  = npc.name;
    document.getElementById('popup-npc-icon').textContent      = npc.icon;
    document.getElementById('popup-dialogue-text').textContent = npc.dialogue;
    document.getElementById('npc-popup').hidden = false;
    document.getElementById('btn-close-popup').focus();
  },

  collectFact(factIndex) {
    AudioManager.play('collect');
    const era  = this.currentEraData;
    const fact = era.facts[factIndex];
    if (this.collectedFactsThisEra.includes(fact.id)) return;

    this.collectedFactsThisEra.push(fact.id);
    this.state.score = (this.state.score || 0) + 10;
    this.eraSessionScore += 10;

    if (!this.state.collectedFacts) this.state.collectedFacts = {};
    this.state.collectedFacts[era.id] = [...this.collectedFactsThisEra];
    SaveSystem.save(this.state);

    this.updateScoreEl('explore-score', this.state.score);

    document.getElementById('fact-popup-text').textContent = fact.text;
    document.getElementById('fact-popup').hidden = false;
    document.getElementById('btn-close-fact-popup').focus();

    this._renderSceneObjects();
    this._renderNotebook();
  },

  _renderNotebook() {
    const era     = this.currentEraData;
    const total   = era.facts.length;
    const ncoll   = this.collectedFactsThisEra.length;

    era.facts.forEach((fact, i) => {
      const slot = document.getElementById('fact-slot-' + i);
      if (!slot) return;
      const isCollected = this.collectedFactsThisEra.includes(fact.id);
      slot.className = 'fact-slot ' + (isCollected ? 'filled' : 'empty');
      const textEl = slot.querySelector('.fact-text');
      if (isCollected) {
        textEl.textContent = fact.text.length > 95
          ? fact.text.substring(0, 95) + '…' : fact.text;
      } else {
        textEl.textContent = '— undiscovered —';
      }
    });

    const pct = Math.round((ncoll / total) * 100);
    document.getElementById('facts-progress-fill').style.width = pct + '%';
    document.getElementById('facts-progress-bar').setAttribute('aria-valuenow', pct);
    document.getElementById('facts-progress-text').textContent = `${ncoll} / ${total} facts`;

    const btn = document.getElementById('btn-proceed-timeline');
    const allDone = ncoll >= total;
    btn.disabled = !allDone;
    btn.setAttribute('aria-disabled', String(!allDone));
  },

  /* ============================================================
     TIMELINE PUZZLE
     ============================================================ */
  showTimeline() {
    const era = this.currentEraData;
    document.getElementById('timeline-era-title').textContent = era.name + ' — Events';
    document.getElementById('timeline-score').textContent     = this.state.score || 0;

    this.timelineAlreadyScored = false;
    clearTimeout(this.timelineAdvanceTimer);

    const shuffled = this._shuffleArray([...era.timelineEvents]);
    this._renderDropZones();
    this._renderTimelineCards(shuffled);
    this._setupTimelineControls();

    const fb = document.getElementById('timeline-feedback');
    fb.hidden = true;

    document.getElementById('btn-back-explore').onclick = () => {
      AudioManager.play('click');
      clearTimeout(this.timelineAdvanceTimer);
      this.showExploration();
    };
    this.showScreen('timeline');
  },

  _shuffleArray(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  _renderTimelineCards(events) {
    const container = document.getElementById('timeline-cards');
    container.innerHTML = '';
    events.forEach(evt => {
      const card = document.createElement('div');
      card.className = 'event-card';
      card.dataset.eventId = evt.id;
      card.dataset.order   = evt.order;
      card.draggable       = true;
      card.setAttribute('role', 'listitem');
      card.setAttribute('aria-label', `${evt.year}: ${evt.description}`);
      card.innerHTML = `
        <div class="event-year">${evt.year}</div>
        <div class="event-desc">${evt.description}</div>
      `;
      this._setupCardDrag(card);
      container.appendChild(card);
    });
    this._setupTouchDrag();
  },

  _renderDropZones() {
    for (let i = 0; i < 4; i++) {
      const zone = document.getElementById('drop-zone-' + i);
      zone.innerHTML = '<span class="drop-placeholder" aria-hidden="true">Drop here</span>';
      zone.className = 'drop-zone';
      this._setupDropZone(zone);
    }
  },

  _setupCardDrag(card) {
    card.addEventListener('dragstart', e => {
      this.draggedCard = card;
      card.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', card.dataset.eventId);
    });
    card.addEventListener('dragend', () => {
      card.classList.remove('dragging');
      this.draggedCard = null;
    });
  },

  _setupDropZone(zone) {
    zone.addEventListener('dragover', e => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', e => {
      /* Only remove drag-over if leaving to outside the zone */
      if (!zone.contains(e.relatedTarget)) {
        zone.classList.remove('drag-over');
      }
    });
    zone.addEventListener('drop', e => {
      e.preventDefault();
      zone.classList.remove('drag-over');
      if (this.draggedCard) this._placeCardInZone(this.draggedCard, zone);
    });
  },

  /* ── FIXED placeCardInZone ────────────────────────
     Old version: innerHTML = '' detached the dragged card,
     causing it to appear in both source and target zones.
     New version: explicitly .remove() before any DOM mutations.
  ─────────────────────────────────────────────────── */
  _placeCardInZone(card, targetZone) {
    /* Already in the target — nothing to do */
    if (card.parentElement === targetZone) return;

    const sourceIsZone = card.parentElement &&
      card.parentElement.classList.contains('drop-zone');
    const sourceZone = sourceIsZone ? card.parentElement : null;

    /* Occupant of the target zone (different from dragged card) */
    const displaced = targetZone.querySelector('.event-card');
    if (displaced === card) return;

    /* Step 1: detach the dragged card from wherever it lives */
    card.remove();

    /* Step 2: handle displaced card (if any) */
    if (displaced) {
      displaced.remove();
      if (sourceZone) {
        /* Swap: send displaced to source zone */
        sourceZone.innerHTML = '';
        sourceZone.appendChild(displaced);
        this._setupCardDrag(displaced);
      } else {
        /* Card came from tray — send displaced back to tray */
        document.getElementById('timeline-cards').appendChild(displaced);
        this._setupCardDrag(displaced);
      }
    } else if (sourceZone) {
      /* Source zone is now empty — restore placeholder */
      sourceZone.innerHTML = '<span class="drop-placeholder" aria-hidden="true">Drop here</span>';
    }

    /* Step 3: place dragged card in target zone */
    targetZone.innerHTML = '';
    targetZone.appendChild(card);
    this._setupCardDrag(card);
  },

  _setupTimelineControls() {
    document.getElementById('btn-timeline-check').onclick = () => {
      AudioManager.play('click');
      this._checkTimelineOrder();
    };
    document.getElementById('btn-timeline-reset').onclick = () => {
      AudioManager.play('click');
      /* FIX: cancel any pending auto-advance */
      clearTimeout(this.timelineAdvanceTimer);
      /* FIX: reset button text */
      document.getElementById('btn-timeline-check').textContent = '✓ Check Order';
      /* FIX: reset scoring flag so a retry after partial success doesn't lose points */
      this.timelineAlreadyScored = false;
      const shuffled = this._shuffleArray([...this.currentEraData.timelineEvents]);
      this._renderDropZones();
      this._renderTimelineCards(shuffled);
      const fb = document.getElementById('timeline-feedback');
      fb.hidden = true;
    };
  },

  _checkTimelineOrder() {
    const zones = document.querySelectorAll('.drop-zone');
    let allFilled = true;
    zones.forEach(z => { if (!z.querySelector('.event-card')) allFilled = false; });

    if (!allFilled) {
      this._showTimelineFeedback('⚠️ Please place all 4 event cards before checking!', 'warn');
      return;
    }

    let correctCount = 0;
    zones.forEach((zone, slotIdx) => {
      const card = zone.querySelector('.event-card');
      if (!card) return;
      const isCorrect = parseInt(card.dataset.order, 10) === slotIdx;
      zone.classList.remove('correct', 'incorrect');
      zone.classList.add(isCorrect ? 'correct' : 'incorrect');
      if (isCorrect) correctCount++;
    });

    /* FIX: only award points once per timeline attempt */
    if (!this.timelineAlreadyScored) {
      const points = correctCount * 20;
      this.state.score = (this.state.score || 0) + points;
      this.eraSessionScore += points;
      this.timelineAlreadyScored = true;
      this.updateScoreEl('timeline-score', this.state.score);
      SaveSystem.save(this.state);
    }

    const allCorrect = correctCount === 4;

    if (allCorrect) {
      AudioManager.play('portal');
      this._showTimelineFeedback(
        `🎉 Perfect! All 4 events in the correct order! Advancing to quiz…`,
        'success'
      );
      document.getElementById('btn-timeline-check').disabled = true;
      /* FIX: store timer ref so Reset can cancel it */
      this.timelineAdvanceTimer = setTimeout(() => {
        document.getElementById('btn-timeline-check').disabled = false;
        this.showQuiz();
      }, 1800);
    } else {
      AudioManager.play('wrong');
      this._showTimelineFeedback(
        `You placed ${correctCount}/4 events correctly. 🟢 = correct  🔴 = incorrect. Try again!`,
        'warn'
      );
      document.getElementById('btn-timeline-check').textContent = '🔄 Try Again';
    }
  },

  _showTimelineFeedback(msg, type) {
    const fb   = document.getElementById('timeline-feedback');
    const text = document.getElementById('timeline-feedback-text');
    fb.hidden   = false;
    text.textContent = msg;
    const colors = {
      success: 'rgba(22,163,74,0.18)',
      warn:    'rgba(245,158,11,0.15)',
      error:   'rgba(220,38,38,0.15)'
    };
    fb.style.background = colors[type] || colors.warn;
  },

  /* ============================================================
     TOUCH DRAG (mobile)
     ============================================================ */
  _setupTouchDrag() {
    document.querySelectorAll('#timeline-cards .event-card, .drop-zone .event-card')
      .forEach(card => {
        card.addEventListener('touchstart', e => this._onTouchStart(e, card), { passive: false });
      });
    /* touchmove / touchend are handled globally to avoid losing track */
    if (!this._touchMoveHandler) {
      this._touchMoveHandler = e => this._onTouchMove(e);
      this._touchEndHandler  = e => this._onTouchEnd(e);
      document.addEventListener('touchmove', this._touchMoveHandler, { passive: false });
      document.addEventListener('touchend',  this._touchEndHandler,  { passive: false });
    }
  },

  _touchMoveHandler: null,
  _touchEndHandler: null,

  _onTouchStart(e, card) {
    e.preventDefault();
    this.touchCard = card;
    const touch = e.touches[0];
    const rect  = card.getBoundingClientRect();
    this.touchOffset.x = touch.clientX - rect.left;
    this.touchOffset.y = touch.clientY - rect.top;

    this.touchClone = card.cloneNode(true);
    Object.assign(this.touchClone.style, {
      position: 'fixed', pointerEvents: 'none', zIndex: '9999',
      width: rect.width + 'px', opacity: '0.85',
      left: rect.left + 'px', top: rect.top + 'px',
      transition: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
    });
    document.body.appendChild(this.touchClone);
    card.style.opacity = '0.3';
  },

  _onTouchMove(e) {
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

  _onTouchEnd(e) {
    if (!this.touchCard) return;
    e.preventDefault();
    const touch = e.changedTouches[0];

    document.querySelectorAll('.drop-zone').forEach(z => z.classList.remove('drag-over'));
    if (this.touchClone) {
      this.touchClone.remove();
      this.touchClone = null;
    }
    this.touchCard.style.opacity = '1';

    const el   = document.elementFromPoint(touch.clientX, touch.clientY);
    const zone = el ? el.closest('.drop-zone') : null;
    if (zone) {
      this._placeCardInZone(this.touchCard, zone);
    }

    this.touchCard = null;
  },

  /* ============================================================
     QUIZ SCENE
     ============================================================ */
  showQuiz() {
    const era = this.currentEraData;
    document.getElementById('quiz-era-title').textContent = era.name + ' — Quiz';
    document.getElementById('quiz-score').textContent     = this.state.score || 0;

    this.currentQuizIndex = 0;
    this._renderQuestion(0);

    /* FIX: use onclick to avoid stacking on quiz revisit */
    document.getElementById('btn-quiz-next').onclick = () => {
      AudioManager.play('click');
      this.currentQuizIndex++;
      if (this.currentQuizIndex < era.quiz.length) {
        this._renderQuestion(this.currentQuizIndex);
      } else {
        this.showRestore();
      }
    };

    this.showScreen('quiz');
  },

  _renderQuestion(index) {
    const era   = this.currentEraData;
    const q     = era.quiz[index];
    const total = era.quiz.length;

    document.getElementById('question-number').textContent = `Question ${index + 1} of ${total}`;
    document.getElementById('question-icon').textContent   = q.icon;
    document.getElementById('question-text').textContent   = q.question;

    /* Progress dots */
    document.querySelectorAll('.q-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      dot.classList.toggle('done',   i < index);
    });

    /* Answer options */
    const optsCont = document.getElementById('answer-options');
    optsCont.innerHTML = '';
    ['A', 'B', 'C', 'D'].forEach((letter, i) => {
      if (i >= q.options.length) return;
      const btn = document.createElement('button');
      btn.className = 'answer-btn';
      btn.setAttribute('aria-label', `Option ${letter}: ${q.options[i]}`);
      btn.innerHTML = `
        <span class="answer-option-letter" aria-hidden="true">${letter}</span>
        <span>${q.options[i]}</span>
      `;
      btn.addEventListener('click', () => this._selectAnswer(i, q));
      optsCont.appendChild(btn);
    });

    /* FIX: use hidden attribute (not inline style) — matches CSS [hidden] rule */
    const feedback = document.getElementById('quiz-feedback');
    feedback.hidden = true;
    feedback.className = 'quiz-feedback';

    const nextBtn = document.getElementById('btn-quiz-next');
    nextBtn.hidden = true;
    nextBtn.textContent = index + 1 < total ? 'Next Question →' : 'See Results →';

    /* Animate card in */
    const card = document.getElementById('quiz-card');
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = '';

    this.updateScoreEl('quiz-score', this.state.score || 0);
  },

  _selectAnswer(selectedIdx, question) {
    const isCorrect = selectedIdx === question.correct;

    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
      btn.disabled = true;
      if (i === question.correct) btn.classList.add('correct');
      else if (i === selectedIdx) btn.classList.add('incorrect');
    });

    if (isCorrect) {
      AudioManager.play('correct');
      this.state.score = (this.state.score || 0) + 30;
      this.eraSessionScore += 30;
    } else {
      AudioManager.play('wrong');
    }
    SaveSystem.save(this.state);
    this.updateScoreEl('quiz-score', this.state.score);

    /* Feedback panel */
    const feedback = document.getElementById('quiz-feedback');
    const feedbackContent = `
      <span class="feedback-icon" aria-hidden="true">${isCorrect ? '✅' : '❌'}</span>
      <div>
        <p id="feedback-text">${isCorrect ? 'Correct! +30 points!' : 'Incorrect. The correct answer is: ' + question.options[question.correct]}</p>
        <p class="feedback-explanation">${question.explanation}</p>
      </div>
    `;
    feedback.innerHTML = feedbackContent;
    feedback.className = 'quiz-feedback ' + (isCorrect ? 'correct-fb' : 'incorrect-fb');
    feedback.hidden = false;

    document.getElementById('btn-quiz-next').hidden = false;
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
    this.state.eraScores[era.id] = this.eraSessionScore;
    SaveSystem.save(this.state);

    document.getElementById('portal-icon').textContent         = era.icon;
    document.getElementById('restore-title').textContent       = era.name + ' Restored! ✅';
    document.getElementById('restore-description').textContent =
      `Excellent work, Time Traveler! You have successfully restored the ${era.name} timeline. ` +
      `The historical records of this era are now safe and the portal is repaired!`;
    document.getElementById('restore-era-score').textContent   = this.eraSessionScore;
    document.getElementById('restore-total-score').textContent = this.state.score;

    const summaryEl = document.getElementById('era-summary');
    summaryEl.innerHTML = '<p class="era-summary-title">Facts Recovered:</p>';
    era.facts.forEach(fact => {
      const div = document.createElement('div');
      div.className = 'era-summary-fact';
      div.innerHTML = `<span aria-hidden="true">📜</span><span>${fact.text}</span>`;
      summaryEl.appendChild(div);
    });

    const allDone     = this.state.completedEras.length === GAME_DATA.eras.length;
    const continueBtn = document.getElementById('btn-restore-continue');
    continueBtn.textContent = allDone ? '🏆 See Final Victory!' : 'Continue Mission →';
    continueBtn.onclick = () => {
      AudioManager.play('click');
      allDone ? this.showVictory() : this.showEraSelect();
    };

    /* Update era select buttons for next visit */
    const btn = document.getElementById('btn-continue');
    btn.disabled = false;
    btn.removeAttribute('aria-disabled');

    this.showScreen('restore');
  },

  /* ============================================================
     VICTORY SCREEN
     ============================================================ */
  showVictory() {
    const score    = this.state.score || 0;
    /* Max possible: 3 eras × (3 facts×10 + 4 slots×20 + 3 questions×30) = 3×200 = 600 */
    const maxScore = GAME_DATA.eras.length * (3 * 10 + 4 * 20 + 3 * 30);
    const pct      = score / maxScore;

    document.getElementById('final-score').textContent = score;
    document.getElementById('final-grade').textContent =
      pct >= 0.9 ? '⭐⭐⭐' : pct >= 0.65 ? '⭐⭐' : '⭐';

    const erasCont = document.getElementById('victory-eras');
    erasCont.innerHTML = '';
    GAME_DATA.eras.forEach(era => {
      const badge = document.createElement('div');
      badge.className = 'victory-era-badge';
      badge.textContent = `${era.icon} ${era.name} ✅`;
      erasCont.appendChild(badge);
    });

    this._createConfetti();

    document.getElementById('btn-play-again').onclick = () => {
      AudioManager.play('click');
      SaveSystem.clear();
      this.state = SaveSystem.defaultState();
      this.showIntro();
    };
    document.getElementById('btn-view-history').onclick = () => {
      AudioManager.play('click');
      this._showEncyclopedia();
    };
    document.getElementById('btn-close-encyclopedia').onclick = () => {
      document.getElementById('encyclopedia-popup').hidden = true;
    };

    this.showScreen('victory');
  },

  _createConfetti() {
    const area   = document.getElementById('confetti-area');
    area.innerHTML = '';
    const colors = ['#f59e0b','#2563eb','#ffffff','#16a34a','#ef4444','#8b5cf6','#06b6d4'];
    for (let i = 0; i < 90; i++) {
      const p   = document.createElement('div');
      const isCircle = Math.random() > 0.4;
      p.className = 'confetti-piece';
      const size  = 5 + Math.random() * 9;
      p.style.cssText = `
        left:${Math.random() * 100}%;
        top:-12px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        --dur:${3 + Math.random() * 4.5}s;
        --delay:-${Math.random() * 4}s;
        width:${size}px;
        height:${isCircle ? size : size * 0.4 + 2}px;
        border-radius:${isCircle ? '50%' : '2px'};
      `;
      area.appendChild(p);
    }
  },

  _showEncyclopedia() {
    const content = document.getElementById('encyclopedia-content');
    content.innerHTML = '';
    GAME_DATA.eras.forEach(era => {
      const section = document.createElement('div');
      section.className = 'enc-era';
      const factsHtml = era.facts
        .map(f => `<div class="enc-fact"><span aria-hidden="true">📜</span><span>${f.text}</span></div>`)
        .join('');
      section.innerHTML = `<h3>${era.icon} ${era.name} <span style="color:var(--grey-mid);font-weight:400">(${era.period})</span></h3>${factsHtml}`;
      content.appendChild(section);
    });
    const popup = document.getElementById('encyclopedia-popup');
    popup.hidden = false;
    document.getElementById('btn-close-encyclopedia').focus();
  }
};

/* ============================================================
   BOOTSTRAP
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => Game.init());
