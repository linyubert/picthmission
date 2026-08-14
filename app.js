const screens = {
  start: document.querySelector('#screenStart'),
  character: document.querySelector('#screenCharacter'),
  game: document.querySelector('#screenGame'),
  result: document.querySelector('#screenResult'),
  summary: document.querySelector('#screenSummary'),
};

const SESSION_TOTAL = 6;

const soloDetectiveCards = {
  奏太: [
    { id: 'sota-1', name: '音叉追蹤', bonus: 1, rarity: 'R', image: 'assets/cards/sota-1.png', story: '先用音叉建立正確基準音，再追出旋律偏離的方向。' },
    { id: 'sota-2', name: '譜面放大鏡', bonus: 2, rarity: 'R', image: 'assets/cards/sota-2.png', story: '檢查譜面的每個細節，找出寫錯位置的臨時記號。' },
    { id: 'sota-3', name: '琴鍵測試', bonus: 3, rarity: 'SR', image: 'assets/cards/sota-3.png', story: '逐鍵比對音高，鎖定造成鋼琴走音的異常琴槌。' },
    { id: 'sota-4', name: '線索共振板', bonus: 4, rarity: 'SR', image: 'assets/cards/sota-4.png', story: '把節拍、音高與樂器狀態連成線，還原走音發生的原因。' },
    { id: 'sota-5', name: '金色基準音', bonus: 5, rarity: 'SSR', image: 'assets/cards/sota-5.png', story: '所有線索與基準音完全吻合，奏太漂亮地破解了案件。' },
  ],
  小音: [
    { id: 'koto-1', name: '斷弦的低語', bonus: 1, rarity: 'R', image: 'assets/cards/koto-1.png', story: '小音發現琴弦斷裂後張力改變，正是音準失常的線索。' },
    { id: 'koto-2', name: '錯位的接管', bonus: 2, rarity: 'R', image: 'assets/cards/koto-2.png', story: '管樂器接管沒有對準，漏氣讓原本的音高悄悄偏移。' },
    { id: 'koto-4', name: '偏移的琴槌', bonus: 4, rarity: 'SR', image: 'assets/cards/koto-4.png', story: '琴槌與琴弦的機構出現偏移，敲出的聲音因此不再準確。' },
    { id: 'koto-5', name: '音準修復師', bonus: 5, rarity: 'SSR', image: 'assets/cards/koto-5.png', story: '小音修復所有異常零件，讓整間音樂教室重新和諧共鳴。' },
  ],
};

const duoDetectiveCards = [
  { id: 'duo-ssr-1', name: '雙人斷弦修復', bonus: 5, rarity: 'SSR', image: 'assets/cards/duo-ssr-1.png', owner: '奏太 × 小音', story: '奏太用音叉監測基準音，小音重新調整斷弦；兩人的合作讓提琴恢復音準。' },
  { id: 'duo-ssr-2', name: '接管重組任務', bonus: 5, rarity: 'SSR', image: 'assets/cards/duo-ssr-2.png', owner: '奏太 × 小音', story: '兩人找出單簧管接管錯位與按鍵沒有對齊的問題，完成精密重組。' },
  { id: 'duo-ssr-3', name: '鋼琴共鳴校準', bonus: 5, rarity: 'SSR', image: 'assets/cards/duo-ssr-3.png', owner: '奏太 × 小音', story: '一人確認琴弦音高、一人校正琴槌機構，終於讓鋼琴重新準確共鳴。' },
];

const ultraRareDetectiveCard = {
  id: 'duo-sssr', name: '燦笑勝利紀念', bonus: 6, rarity: 'SSSR', image: 'assets/cards/duo-sssr.png', owner: '奏太 × 小音',
  story: '兩位偵探面向鏡頭燦笑比出勝利手勢，紀念完美破解走音案件的珍貴瞬間。',
};

const puzzles = [
  {
    title: '小星星', tempo: 80,
    notes: ['G4', 'G4', 'D5', 'D5', 'E5', 'E5', 'D5'], durations: [1, 1, 1, 1, 1, 1, 1],
    trailingBeats: 1,
    answer: 5, alter: -1,
    audio: {
      original: 'assets/media/asset-012.mp3',
      changed: 'assets/media/asset-013.mp3',
      sourceTempo: 120,
    },
    scoreImage: 'assets/media/asset-011.svg',
    scoreSize: { width: 2448, height: 266.784 },
    scorePositions: [
      { x: 278.438, y: 164.146 }, { x: 539.58, y: 164.146 },
      { x: 782.671, y: 94.706 }, { x: 1043.81, y: 94.706 },
      { x: 1357.13, y: 77.346 }, { x: 1618.27, y: 77.346 },
      { x: 1879.42, y: 94.706 },
    ],
  },
  {
    title: '小綿羊', tempo: 80,
    notes: ['B4', 'A4', 'G4', 'A4', 'B4', 'B4', 'B4'], durations: [1, 1, 1, 1, 1, 1, 2],
    answer: 4, alter: -1,
    audio: {
      original: 'assets/media/asset-015.mp3',
      changed: 'assets/media/asset-016.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-014.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 266.685, y: 184.868 }, { x: 562.447, y: 202.228 },
      { x: 840.158, y: 219.588 }, { x: 1117.87, y: 202.228 },
      { x: 1429.71, y: 184.868 }, { x: 1707.42, y: 184.868 },
      { x: 1985.13, y: 184.868 },
    ],
  },
  {
    title: '歡樂頌 1', tempo: 80,
    notes: ['B4', 'B4', 'C5', 'D5', 'D5', 'C5', 'B4', 'A4'], durations: [1, 1, 1, 1, 1, 1, 1, 1],
    answer: 2, alter: 1,
    audio: {
      original: 'assets/media/asset-024.mp3',
      changed: 'assets/media/asset-025.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-023.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 266.685, y: 184.868 }, { x: 527.04, y: 184.868 },
      { x: 787.394, y: 167.508 }, { x: 1047.75, y: 150.148 },
      { x: 1360.28, y: 150.148 }, { x: 1620.64, y: 167.508 },
      { x: 1880.99, y: 184.868 }, { x: 2159.39, y: 202.228 },
    ],
  },
  {
    title: '歡頌', tempo: 80,
    notes: ['G4', 'G4', 'A4', 'B4', 'B4', 'A4', 'G4'], durations: [1, 1, 1, 1, 1.5, .5, 2],
    answer: 3, alter: -1,
    audio: {
      original: 'assets/media/asset-027.mp3',
      changed: 'assets/media/asset-028.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-026.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 219.588 }, { x: 559.449, y: 219.588 },
      { x: 840.461, y: 202.228 }, { x: 1103.42, y: 184.868 },
      { x: 1436.61, y: 184.868 }, { x: 1810.89, y: 202.228 },
      { x: 1998.23, y: 219.588 },
    ],
  },
  {
    title: '四季紅 1', tempo: 80,
    notes: ['D4', 'G4', 'G4', 'A4', 'B4', 'A4', 'G4', 'A4', 'B4'], durations: [1, 1, 1.5, .5, .5, .5, .5, .5, 2],
    answer: 8, alter: -1,
    audio: {
      original: 'assets/media/asset-009.mp3',
      changed: 'assets/media/asset-010.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-008.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 271.668 }, { x: 538.234, y: 219.588 },
      { x: 798.03, y: 219.588 }, { x: 1127.37, y: 202.228 },
      { x: 1337.27, y: 184.868 }, { x: 1510.46, y: 202.228 },
      { x: 1683.66, y: 219.588 }, { x: 1856.86, y: 202.228 },
      { x: 2012.01, y: 184.868 },
    ],
  },
  {
    title: '四季紅 2', tempo: 80,
    notes: ['G4', 'C5', 'C5', 'D5', 'E5', 'D5', 'C5', 'D5', 'E5'], durations: [1, 1, 1.5, .5, .5, .5, .5, .5, 2],
    answer: 2, alter: 1,
    audio: {
      original: 'assets/media/asset-007.mp3',
      changed: 'assets/media/asset-005.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-006.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 219.588 }, { x: 518.274, y: 167.508 },
      { x: 776.159, y: 167.508 }, { x: 1103.07, y: 150.148 },
      { x: 1327.17, y: 132.788 }, { x: 1499.1, y: 150.148 },
      { x: 1671.02, y: 167.508 }, { x: 1842.95, y: 150.148 },
      { x: 2014.87, y: 132.788 },
    ],
  },
  {
    title: '丟丟銅仔', tempo: 80,
    notes: ['D5', 'E5', 'D5', 'E5', 'D5', 'C5', 'D5', 'E5', 'D5', 'C5', 'D5'], durations: [1, 1, .5, .5, .5, .5, .5, .5, .5, .5, 1],
    trailingBeats: 1,
    answer: 8, alter: -1,
    audio: {
      original: 'assets/media/asset-004.mp3',
      changed: 'assets/media/asset-003.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-002.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 266.685, y: 150.148 }, { x: 489.846, y: 132.788 },
      { x: 713.007, y: 150.148 }, { x: 861.781, y: 132.788 },
      { x: 1010.56, y: 150.148 }, { x: 1159.33, y: 167.508 },
      { x: 1360.28, y: 150.148 }, { x: 1509.05, y: 132.788 },
      { x: 1657.83, y: 150.148 }, { x: 1806.6, y: 167.508 },
      { x: 1955.38, y: 150.148 },
    ],
  },
  {
    title: '望春風', tempo: 80,
    notes: ['D4', 'D4', 'E4', 'G4', 'A4', 'G4', 'A4', 'B4'], durations: [1, 1, 1, 1, 1, .5, .5, 2],
    answer: 3, alter: -1,
    audio: {
      original: 'assets/media/asset-018.mp3',
      changed: 'assets/media/asset-019.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-017.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 271.668 }, { x: 547.111, y: 271.668 },
      { x: 815.784, y: 254.308 }, { x: 1084.46, y: 219.588 },
      { x: 1389.83, y: 202.228 }, { x: 1658.51, y: 219.588 },
      { x: 1837.62, y: 202.228 }, { x: 1998.69, y: 184.868 },
    ],
  },
  {
    title: '踏雪尋梅', tempo: 80,
    notes: ['B4', 'D5', 'D5', 'G4', 'A4', 'B4'], durations: [1, 1, 1, .5, .5, 4],
    answer: 2, alter: -1,
    audio: {
      original: 'assets/media/asset-030.mp3',
      changed: 'assets/media/asset-031.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-029.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 266.685, y: 184.868 }, { x: 516.625, y: 150.148 },
      { x: 766.566, y: 150.148 }, { x: 1034.56, y: 219.588 },
      { x: 1201.18, y: 202.228 }, { x: 1401.94, y: 184.868 },
    ],
  },
  {
    title: '校歌', tempo: 80,
    notes: ['D5', 'D5', 'B4', 'A4', 'G4', 'A4', 'G4', 'E4', 'D4'], durations: [1.5, .5, 1, 1, .75, .25, .5, .5, 2],
    answer: 3, alter: -1,
    audio: {
      original: 'assets/media/asset-021.mp3',
      changed: 'assets/media/asset-022.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-020.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 266.685, y: 150.148 }, { x: 596.819, y: 150.148 },
      { x: 770.436, y: 184.868 }, { x: 1048.91, y: 202.228 },
      { x: 1346.04, y: 219.588 }, { x: 1566.13, y: 202.228 },
      { x: 1681.88, y: 219.588 }, { x: 1855.49, y: 254.308 },
      { x: 2029.11, y: 271.668 },
    ],
  },
  {
    title: '國歌', tempo: 80,
    notes: ['G4', 'E5', 'D5', 'E5', 'D5', 'G4', 'D5', 'D5', 'E5', 'C5'], durations: [1, 1, .5, .5, 1, 1, 1, .5, .5, 1],
    answer: 5, alter: 1,
    audio: {
      original: 'assets/media/asset-034.mp3',
      changed: 'assets/media/asset-033.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-032.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 219.588 }, { x: 503.227, y: 132.788 },
      { x: 746.066, y: 150.148 }, { x: 907.959, y: 132.788 },
      { x: 1069.85, y: 150.148 }, { x: 1367.45, y: 219.588 },
      { x: 1592.23, y: 150.148 }, { x: 1835.07, y: 150.148 },
      { x: 1996.97, y: 132.788 }, { x: 2158.86, y: 167.508 },
    ],
  },
  {
    title: '康城', tempo: 80,
    notes: ['G4', 'G4', 'E4', 'G4', 'A4', 'G4', 'E4'], durations: [1, 1, 1, 1, 1, 1, 2],
    answer: 5, alter: 1,
    audio: {
      original: 'assets/media/asset-037.mp3',
      changed: 'assets/media/asset-036.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-035.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 219.588 }, { x: 559.052, y: 219.588 },
      { x: 839.666, y: 254.308 }, { x: 1120.28, y: 219.588 },
      { x: 1437.6, y: 202.228 }, { x: 1718.21, y: 219.588 },
      { x: 1998.83, y: 254.308 },
    ],
  },
  {
    title: '王老', tempo: 80,
    notes: ['D5', 'D5', 'D5', 'A4', 'B4', 'B4', 'A4'], durations: [1, 1, 1, 1, 1, 1, 2],
    answer: 2, alter: 1,
    audio: {
      original: 'assets/media/asset-040.mp3',
      changed: 'assets/media/asset-039.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-038.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 266.685, y: 150.148 }, { x: 544.397, y: 150.148 },
      { x: 822.108, y: 150.148 }, { x: 1117.87, y: 202.228 },
      { x: 1429.71, y: 184.868 }, { x: 1707.42, y: 184.868 },
      { x: 2003.18, y: 202.228 },
    ],
  },
  {
    title: '生日快樂', tempo: 80,
    notes: ['G4', 'G4', 'A4', 'G4', 'C5', 'B4'], durations: [.75, .25, 1, 1, 1, 2],
    trailingBeats: 2,
    answer: 3, alter: 1,
    audio: {
      original: 'assets/media/asset-042.mp3',
      changed: 'assets/media/asset-043.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-041.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 219.588 }, { x: 505.095, y: 219.588 },
      { x: 624.293, y: 202.228 }, { x: 892.49, y: 219.588 },
      { x: 1142.64, y: 167.508 }, { x: 1463.01, y: 184.868 },
    ],
  },
  {
    title: '登登', tempo: 80,
    notes: ['C5', 'G4', 'A4', 'G4', 'G4', 'B4', 'C5', 'C5'], durations: [1, 1, 1, 1, 1, 1, 1, 1],
    answer: 7, alter: 1,
    audio: {
      original: 'assets/media/asset-046.mp3',
      changed: 'assets/media/asset-045.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-044.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 266.685, y: 167.508 }, { x: 547.024, y: 219.588 },
      { x: 809.312, y: 202.228 }, { x: 1071.6, y: 219.588 },
      { x: 1370.59, y: 219.588 }, { x: 1614.83, y: 184.868 },
      { x: 1877.12, y: 167.508 }, { x: 2139.41, y: 167.508 },
    ],
  },
  {
    title: '蝴蝶', tempo: 80,
    notes: ['G4', 'G4', 'A4', 'B4', 'B4', 'A4', 'G4', 'A4', 'B4', 'G4'], durations: [1, .5, .5, 1, 1, .5, .5, .5, .5, 1],
    trailingBeats: 1,
    answer: 1, alter: 1,
    audio: {
      original: 'assets/media/asset-049.mp3',
      changed: 'assets/media/asset-048.mp3',
      sourceTempo: 80,
    },
    scoreImage: 'assets/media/asset-047.svg',
    scoreSize: { width: 2448, height: 322.226 },
    scorePositions: [
      { x: 278.438, y: 219.588 }, { x: 512.283, y: 219.588 },
      { x: 668.18, y: 202.228 }, { x: 806.027, y: 184.868 },
      { x: 1039.87, y: 184.868 }, { x: 1328.47, y: 202.228 },
      { x: 1484.37, y: 219.588 }, { x: 1640.26, y: 202.228 },
      { x: 1796.16, y: 184.868 }, { x: 1952.06, y: 219.588 },
    ],
  },
];

const pitchNames = { C: 'Do', D: 'Re', E: 'Mi', F: 'Fa', G: 'Sol', A: 'La', B: 'Si' };
const semitone = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const noteY = { C4: 218, D4: 204, E4: 190, F4: 176, G4: 162, A4: 148, B4: 134, C5: 120, D5: 106, E5: 92 };
const accidentalPaths = {
  sharp: 'M23.3,-10.5 C23.9,-10.6 24.4,-11.3 24.4,-11.9 L24.4,-17.8 C24.4,-18.8 23.7,-19.2 22.8,-19.2 L19.5,-18.5 L19.5,-33.4 L16.7,-33.4 L16.7,-17.9 L7.8,-16.1 L7.8,-30.2 L5,-30.2 L5,-15.5 L1.1,-14.7 C0.5,-14.6 0,-13.9 0,-13.3 L0,-7.5 C0,-6.4 0.8,-6.1 1.7,-6.1 L5,-6.8 L5,9.7 L1.1,10.5 C0.5,10.6 0,11.3 0,11.9 L0,17.7 C0,18.8 0.8,19.1 1.7,19.1 L5,18.4 L5,33.3 L7.8,33.3 L7.8,17.8 L16.7,16 L16.7,30.1 L19.5,30.1 L19.5,15.4 L23.3,14.7 C23.9,14.6 24.4,13.9 24.4,13.3 L24.4,7.4 C24.4,6.4 23.7,6 22.8,6 L19.5,6.7 L19.5,-9.8 L23.3,-10.5 M7.8,-7.4 L16.7,-9.2 L16.7,7.3 L7.8,9.2 L7.8,-7.4',
  flat: 'M12,-15.5 C7,-15.5 4.1,-12.4 3.6,-11.8 L4,-43.9 C4,-44.7 3.4,-45.3 2.6,-45.3 L1.4,-45.3 C0.6,-45.3 0,-44.7 0,-43.9 L0.5,16.2 C0.5,17 1.1,17.6 1.9,17.6 C2.1,17.6 2.5,17.5 2.7,17.4 C11.3,13.1 20.3,4.9 20.3,-5.4 C20.3,-10.6 17.9,-15.5 12,-15.5 M3.3,12.7 L3.6,-6.8 C3.8,-7.7 5.3,-10.6 9.3,-10.6 C12.9,-10.6 13.2,-7.2 13.2,-5.1 C13.2,3.8 9.9,7.5 3.3,12.7',
};

let audioContext;
let muted = false;
let homeBgmEnabled = true;
let selectedCharacter = '奏太';
let phase = 'listen';
let selectedNote = null;
let selectedAccidental = null;
let replayLeft = 2;
let puzzleIndex = 0;
let sessionOrder = [];
let playing = false;
let activeRecording = null;
let recordedStopTimer = null;
let scorePlayheadFrame = null;
let feedbackToneTimer = null;
let failureAdvanceTimer = null;
let resultScreenTimer = null;
let roundAttempts = 0;
let sessionStats = createSessionStats();
let cardDrawn = false;
let cardRevealed = false;
let currentRewardCard = null;
let cardAnimationTimers = [];
let packSwipeActive = false;
let packOpening = false;
let packSwipeStartX = 0;
let packSwipeProgress = 0;
const recordedAudioCache = new Map();

const els = {
  app: document.querySelector('#app'),
  begin: document.querySelector('#beginBtn'),
  homeBgm: document.querySelector('#homeBgm'),
  homeBgmButton: document.querySelector('#homeBgmBtn'),
  home: document.querySelector('#homeBtn'),
  sound: document.querySelector('#soundBtn'),
  progress: document.querySelector('#caseProgress'),
  phaseEyebrow: document.querySelector('#phaseEyebrow'),
  phaseTitle: document.querySelector('#phaseTitle'),
  phaseHint: document.querySelector('#phaseHint'),
  sessionCounter: document.querySelector('#sessionCounter'),
  endGame: document.querySelector('#endGameBtn'),
  noteNumbers: document.querySelector('#noteNumbers'),
  scoreImage: document.querySelector('#scoreImage'),
  staff: document.querySelector('#staff'),
  mask: document.querySelector('#scoreMask'),
  playhead: document.querySelector('#playhead'),
  tools: document.querySelector('#answerTools'),
  replay: document.querySelector('#replayBtn'),
  replayCount: document.querySelector('#replayCount'),
  noDiff: document.querySelector('#noDiffBtn'),
  nextPhase: document.querySelector('#nextPhaseBtn'),
  submit: document.querySelector('#submitBtn'),
  feedback: document.querySelector('#feedback'),
  resultPortrait: document.querySelector('#resultPortrait'),
  resultText: document.querySelector('#resultText'),
  originalLabel: document.querySelector('#originalLabel'),
  changedLabel: document.querySelector('#changedLabel'),
  playAgain: document.querySelector('#playAgainBtn'),
  endFromResult: document.querySelector('#endFromResultBtn'),
  summaryMessage: document.querySelector('#summaryMessage'),
  accuracyRing: document.querySelector('#accuracyRing'),
  accuracyValue: document.querySelector('#accuracyValue'),
  completedValue: document.querySelector('#completedValue'),
  firstTryValue: document.querySelector('#firstTryValue'),
  attemptsValue: document.querySelector('#attemptsValue'),
  positionMistakesValue: document.querySelector('#positionMistakesValue'),
  accidentalMistakesValue: document.querySelector('#accidentalMistakesValue'),
  partnerValue: document.querySelector('#partnerValue'),
  cardReward: document.querySelector('#cardReward'),
  cardRewardTitle: document.querySelector('#cardRewardTitle'),
  cardRewardHint: document.querySelector('#cardRewardHint'),
  drawCard: document.querySelector('#drawCardBtn'),
  summaryHome: document.querySelector('#summaryHomeBtn'),
  restartSession: document.querySelector('#restartSessionBtn'),
  cardDrawOverlay: document.querySelector('#cardDrawOverlay'),
  closeCardDraw: document.querySelector('#closeCardDrawBtn'),
  cardBgm: document.querySelector('#cardBgm'),
  blindPack: document.querySelector('#blindPack'),
  swipeGuide: document.querySelector('#swipeGuide'),
  revealedCard: document.querySelector('#revealedCard'),
  rewardCardImage: document.querySelector('#rewardCardImage'),
  rewardCardBadge: document.querySelector('#rewardCardBadge'),
  rewardCardRarity: document.querySelector('#rewardCardRarity'),
  rewardCardBonus: document.querySelector('#rewardCardBonus'),
  rewardCardOwner: document.querySelector('#rewardCardOwner'),
  rewardCardName: document.querySelector('#rewardCardName'),
  rewardCardStory: document.querySelector('#rewardCardStory'),
  cardDrawStatus: document.querySelector('#cardDrawStatus'),
};

function createSessionStats() {
  return {
    completed: 0,
    failed: 0,
    correctFirstTry: 0,
    totalAttempts: 0,
    positionMistakes: 0,
    accidentalMistakes: 0,
  };
}

function buildSessionOrder() {
  const candidates = puzzles.slice(1).map((_, index) => index + 1);
  for (let i = candidates.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  return [0, ...candidates.slice(0, Math.max(SESSION_TOTAL - 1, 0))];
}

function currentPuzzle() {
  return puzzles[sessionOrder[puzzleIndex] ?? 0];
}

function startSession() {
  stopHomeBgm();
  window.clearTimeout(failureAdvanceTimer);
  failureAdvanceTimer = null;
  puzzleIndex = 0;
  sessionOrder = buildSessionOrder();
  sessionStats = createSessionStats();
  cardDrawn = false;
  cardRevealed = false;
  currentRewardCard = null;
  closeCardDrawOverlay();
  roundAttempts = 0;
  showScreen('game');
  setupPuzzle();
}

function updateHomeBgmButton() {
  const isOn = homeBgmEnabled && !els.homeBgm.paused;
  els.homeBgmButton.setAttribute('aria-pressed', String(isOn));
  els.homeBgmButton.querySelector('small').textContent = `背景音樂：${isOn ? '開' : '關'}`;
}

function playHomeBgm() {
  if (!homeBgmEnabled) return;
  els.homeBgm.volume = 0.28;
  const playRequest = els.homeBgm.play();
  if (playRequest) playRequest.then(updateHomeBgmButton).catch(updateHomeBgmButton);
}

function playCardBgm() {
  els.cardBgm.pause();
  els.cardBgm.currentTime = 0;
  els.cardBgm.volume = .34;
  els.cardBgm.muted = muted;
  const playRequest = els.cardBgm.play();
  if (playRequest) playRequest.catch(() => {});
}

function stopCardBgm() {
  els.cardBgm.pause();
  els.cardBgm.currentTime = 0;
}

function stopHomeBgm() {
  els.homeBgm.pause();
  els.homeBgm.currentTime = 0;
  updateHomeBgmButton();
}

function showScreen(name) {
  if (name !== 'summary') closeCardDrawOverlay();
  if (name !== 'game' && failureAdvanceTimer) {
    window.clearTimeout(failureAdvanceTimer);
    failureAdvanceTimer = null;
  }
  Object.values(screens).forEach((screen) => screen.classList.remove('active'));
  screens[name].classList.add('active');
  els.app.classList.toggle('home-mode', name === 'start');
  const gameVisible = name === 'game';
  els.progress.classList.toggle('hidden', !gameVisible);
  if (gameVisible) renderProgress();
  if (name === 'start' || name === 'character') playHomeBgm();
  else stopHomeBgm();
}

function renderProgress() {
  const active = phase === 'listen' ? 0 : 1;
  els.progress.innerHTML = [0, 1, 2].map((i) => `<i class="${i < active ? 'done' : i === active ? 'active' : ''}"></i>`).join('');
}

function ensureAudio() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume();
}

function getRecordedAudio(src) {
  if (!recordedAudioCache.has(src)) {
    const player = new Audio(src);
    player.preload = 'auto';
    recordedAudioCache.set(src, player);
  }
  return recordedAudioCache.get(src);
}

function preloadRecordedAudio() {
  puzzles.forEach((puzzle) => {
    if (!puzzle.audio) return;
    getRecordedAudio(puzzle.audio.original).load();
    getRecordedAudio(puzzle.audio.changed).load();
  });
}

function stopRecordedAudio() {
  if (recordedStopTimer) window.clearTimeout(recordedStopTimer);
  recordedStopTimer = null;
  if (scorePlayheadFrame) cancelAnimationFrame(scorePlayheadFrame);
  scorePlayheadFrame = null;
  recordedAudioCache.forEach((player) => {
    player.pause();
    player.currentTime = 0;
  });
  activeRecording = null;
  playing = false;
  els.playhead.classList.remove('playing');
}

function noteFrequency(note, alteration = 0) {
  const letter = note[0];
  const octave = Number(note.slice(-1));
  const midi = 12 * (octave + 1) + semitone[letter] + alteration;
  return 440 * Math.pow(2, (midi - 69) / 12);
}

function playTone(note, start, duration, alteration = 0) {
  if (muted) return;
  const osc = audioContext.createOscillator();
  const upper = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const upperGain = audioContext.createGain();
  osc.type = 'sine';
  upper.type = 'triangle';
  osc.frequency.value = noteFrequency(note, alteration);
  upper.frequency.value = noteFrequency(note, alteration) * 2;
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(0.22, start + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration * 0.9);
  upperGain.gain.setValueAtTime(0.0001, start);
  upperGain.gain.exponentialRampToValueAtTime(0.045, start + 0.012);
  upperGain.gain.exponentialRampToValueAtTime(0.0001, start + duration * 0.55);
  osc.connect(gain).connect(audioContext.destination);
  upper.connect(upperGain).connect(audioContext.destination);
  osc.start(start); upper.start(start);
  osc.stop(start + duration); upper.stop(start + duration);
}

function playCaseButtonSound() {
  if (muted) return;
  ensureAudio();
  const now = audioContext.currentTime;
  const chime = audioContext.createOscillator();
  const chimeGain = audioContext.createGain();
  chime.type = 'triangle';
  chime.frequency.setValueAtTime(430, now);
  chime.frequency.exponentialRampToValueAtTime(720, now + .075);
  chimeGain.gain.setValueAtTime(.0001, now);
  chimeGain.gain.exponentialRampToValueAtTime(.045, now + .008);
  chimeGain.gain.exponentialRampToValueAtTime(.0001, now + .1);
  chime.connect(chimeGain).connect(audioContext.destination);
  chime.start(now);
  chime.stop(now + .11);
}

function playCardRevealSound(rarity) {
  if (muted) return;
  ensureAudio();
  const now = audioContext.currentTime;
  const notes = rarity === 'SSSR'
    ? [523.25, 659.25, 783.99, 987.77, 1318.51]
    : rarity === 'SSR' ? [523.25, 659.25, 783.99, 1046.5]
      : rarity === 'SR' ? [440, 554.37, 659.25] : [392, 523.25];
  notes.forEach((frequency, index) => {
    const osc = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = now + index * .11;
    osc.type = rarity === 'SSR' || rarity === 'SSSR' ? 'sine' : 'triangle';
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, start);
    gain.gain.exponentialRampToValueAtTime(rarity === 'SSSR' ? .12 : rarity === 'SSR' ? .1 : .065, start + .02);
    gain.gain.exponentialRampToValueAtTime(.0001, start + .58);
    osc.connect(gain).connect(audioContext.destination);
    osc.start(start);
    osc.stop(start + .62);
  });
}

function playSequence(changed = false) {
  if (playing) return;
  ensureAudio();
  const puzzle = currentPuzzle();
  if (puzzle.audio) {
    const src = changed ? puzzle.audio.changed : puzzle.audio.original;
    const player = getRecordedAudio(src);
    stopRecordedAudio();
    activeRecording = player;
    player.currentTime = 0;
    player.muted = muted;
    player.playbackRate = puzzle.tempo / puzzle.audio.sourceTempo;
    player.preservesPitch = true;
    playing = true;
    player.play().then(() => {
      const musicalSeconds = animateScorePlayhead(puzzle);
      recordedStopTimer = window.setTimeout(() => {
        if (activeRecording !== player) return;
        player.pause();
        player.currentTime = 0;
        activeRecording = null;
        playing = false;
        els.playhead.classList.remove('playing');
      }, musicalSeconds * 1000 + 120);
    }).catch(() => {
      activeRecording = null;
      playing = false;
      playSynthSequence(changed);
    });
    player.onended = () => {
      if (activeRecording === player) activeRecording = null;
      playing = false;
      els.playhead.classList.remove('playing');
    };
    return;
  }
  playSynthSequence(changed);
}

function animateScorePlayhead(puzzle) {
  const beatSeconds = 60 / puzzle.tempo;
  const positions = puzzle.scorePositions || [];
  const scoreWidth = puzzle.scoreSize?.width || 1040;
  const points = [];
  let elapsedBeats = 0;
  positions.forEach(({ x }, index) => {
    points.push({ time: elapsedBeats * beatSeconds, left: (x / scoreWidth) * 100 });
    elapsedBeats += puzzle.durations[index] || 1;
  });
  points.push({ time: elapsedBeats * beatSeconds, left: 88 });
  elapsedBeats += puzzle.trailingBeats || 0;
  points.push({ time: elapsedBeats * beatSeconds, left: 96 });
  const totalSeconds = elapsedBeats * beatSeconds;
  const startTime = performance.now();
  els.playhead.classList.add('playing');
  els.playhead.style.transition = 'none';
  els.playhead.style.left = `${points[0]?.left ?? 7}%`;

  const step = (now) => {
    const seconds = Math.min(totalSeconds, (now - startTime) / 1000);
    let pointIndex = points.findIndex((point) => point.time >= seconds);
    if (pointIndex < 0) pointIndex = points.length - 1;
    const next = points[pointIndex];
    const previous = points[Math.max(0, pointIndex - 1)];
    const span = Math.max(.001, next.time - previous.time);
    const progress = Math.max(0, Math.min(1, (seconds - previous.time) / span));
    const left = previous.left + (next.left - previous.left) * progress;
    els.playhead.style.left = `${left}%`;
    if (seconds < totalSeconds) {
      scorePlayheadFrame = requestAnimationFrame(step);
    } else {
      scorePlayheadFrame = null;
    }
  };
  scorePlayheadFrame = requestAnimationFrame(step);
  return totalSeconds;
}

function playSynthSequence(changed = false) {
  playing = true;
  const puzzle = currentPuzzle();
  const beat = 60 / puzzle.tempo;
  const start = audioContext.currentTime + 0.08;
  let cursor = 0;
  const totalBeats = puzzle.durations.reduce((a, b) => a + b, 0);
  puzzle.notes.forEach((note, index) => {
    const duration = puzzle.durations[index] * beat;
    const alteration = changed && index === puzzle.answer ? puzzle.alter : 0;
    playTone(note, start + cursor * beat, Math.max(0.18, duration * 0.92), alteration);
    cursor += puzzle.durations[index];
  });
  animatePlayhead(totalBeats * beat);
}

function animatePlayhead(seconds) {
  els.playhead.classList.add('playing');
  els.playhead.style.transition = 'none';
  els.playhead.style.left = '7%';
  requestAnimationFrame(() => requestAnimationFrame(() => {
    els.playhead.style.transition = `left ${seconds}s linear`;
    els.playhead.style.left = '96%';
  }));
  window.setTimeout(() => {
    els.playhead.classList.remove('playing');
    els.playhead.style.transition = 'none';
    playing = false;
  }, seconds * 1000 + 120);
}

function playSingle(changed) {
  ensureAudio();
  const puzzle = currentPuzzle();
  playTone(puzzle.notes[puzzle.answer], audioContext.currentTime + .05, .8, changed ? puzzle.alter : 0);
}

function renderTeacherNoteNumbers(puzzle, scoreWidth, scoreHeight) {
  const wrap = els.staff.parentElement;
  const overlayWidth = Math.max(wrap.clientWidth - 36, 0);
  const overlayHeight = Math.max(wrap.clientHeight - 84, 0);
  const renderedWidth = Math.min(overlayWidth, overlayHeight * scoreWidth / scoreHeight);
  const renderedLeft = 18 + (overlayWidth - renderedWidth) / 2;
  els.noteNumbers.innerHTML = puzzle.scorePositions.map(({ x }, i) => {
    const noteCenter = x + 22;
    const left = renderedLeft + (noteCenter / scoreWidth) * renderedWidth;
    return `<span style="left:${left}px">${i + 1}</span>`;
  }).join('');
}

function renderAccidental(type, noteX, noteY, teacherScore = false) {
  if (!type) return '';
  const isSharp = type === 'sharp';
  const offset = teacherScore
    ? (isSharp ? 42.564 : 36.87)
    : (isSharp ? 46.4 : 42.3);
  const transform = teacherScore
    ? `matrix(1.3888,0,0,1.3888,${noteX - offset},${noteY})`
    : `translate(${noteX - offset} ${noteY})`;
  return `<path class="answer-accidental" transform="${transform}" d="${accidentalPaths[type]}"/>`;
}

function renderStaff() {
  const puzzle = currentPuzzle();
  const usesTeacherScore = Boolean(puzzle.scoreImage && puzzle.scorePositions);
  els.scoreImage.classList.toggle('hidden', !usesTeacherScore);
  els.noteNumbers.classList.toggle('hidden', !usesTeacherScore);
  els.staff.classList.toggle('score-overlay', usesTeacherScore);
  els.staff.setAttribute('preserveAspectRatio', 'xMidYMid meet');
  if (usesTeacherScore) {
    els.scoreImage.src = puzzle.scoreImage;
    els.scoreImage.alt = `${puzzle.title}教師提供譜面`;
    const scoreWidth = puzzle.scoreSize?.width || 1040;
    const scoreHeight = puzzle.scoreSize?.height || 290;
    els.staff.setAttribute('viewBox', `0 0 ${scoreWidth} ${scoreHeight}`);
    const positions = puzzle.scorePositions;
    renderTeacherNoteNumbers(puzzle, scoreWidth, scoreHeight);
    const overlays = positions.map(({ x, y }, i) => {
      const previousX = positions[i - 1]?.x ?? scoreWidth * .04;
      const nextX = positions[i + 1]?.x ?? scoreWidth * .96;
      const left = i === 0 ? scoreWidth * .04 : (previousX + x) / 2;
      const right = i === positions.length - 1 ? scoreWidth * .96 : (x + nextX) / 2;
      const ring = selectedNote === i ? `<ellipse class="note-ring" cx="${x + 22}" cy="${y}" rx="54" ry="43"/>` : '';
      const accidental = selectedNote === i && selectedAccidental
        ? renderAccidental(selectedAccidental, x, y, true) : '';
      return `<g>${ring}${accidental}<rect class="note-hit" data-note="${i}" x="${left}" y="0" width="${right - left}" height="${scoreHeight}"/></g>`;
    }).join('');
    els.staff.innerHTML = overlays;
    els.staff.querySelectorAll('.note-hit').forEach((hit) => hit.addEventListener('click', () => selectNote(Number(hit.dataset.note))));
    return;
  }
  els.noteNumbers.innerHTML = '';
  els.scoreImage.removeAttribute('src');
  els.staff.setAttribute('viewBox', '0 0 1040 290');
  const count = puzzle.notes.length;
  const startX = 145;
  const step = 820 / Math.max(count - 1, 1);
  const lines = Array.from({ length: 5 }, (_, i) => `<line class="staff-line" x1="85" y1="${134 + i * 28}" x2="995" y2="${134 + i * 28}"/>`).join('');
  const notes = puzzle.notes.map((note, i) => {
    const x = startX + step * i;
    const y = noteY[note] ?? 176;
    const stemUp = y >= 176;
    const stem = stemUp
      ? `<line x1="${x + 12}" y1="${y}" x2="${x + 12}" y2="${y - 62}" stroke="#29364a" stroke-width="4"/>`
      : `<line x1="${x - 12}" y1="${y}" x2="${x - 12}" y2="${y + 62}" stroke="#29364a" stroke-width="4"/>`;
    const ring = selectedNote === i ? `<ellipse class="note-ring" cx="${x}" cy="${y}" rx="36" ry="31"/>` : '';
    const accidental = selectedNote === i && selectedAccidental
      ? renderAccidental(selectedAccidental, x, y) : '';
    const ledger = y >= 218 ? `<line class="staff-line" x1="${x - 25}" y1="218" x2="${x + 25}" y2="218"/>` : '';
    return `<g>${ledger}${stem}<ellipse class="staff-note" cx="${x}" cy="${y}" rx="14" ry="10" transform="rotate(-18 ${x} ${y})"/>${ring}${accidental}<text class="note-index" x="${x}" y="275" text-anchor="middle">${i + 1}</text><rect class="note-hit" data-note="${i}" x="${x - step / 2}" y="55" width="${step}" height="225"/></g>`;
  }).join('');
  els.staff.innerHTML = `${lines}<text x="35" y="203" font-size="80" fill="#29364a">𝄞</text><line class="staff-bar" x1="85" y1="134" x2="85" y2="246"/><line class="staff-bar" x1="995" y1="134" x2="995" y2="246"/>${notes}`;
  els.staff.querySelectorAll('.note-hit').forEach((hit) => hit.addEventListener('click', () => selectNote(Number(hit.dataset.note))));
}

function selectNote(index) {
  if (phase !== 'answer' || playing) return;
  playCaseButtonSound();
  selectedNote = index;
  els.feedback.classList.add('hidden');
  renderStaff();
  updateSubmit();
}

function selectAccidental(type) {
  if (phase !== 'answer') return;
  selectedAccidental = selectedAccidental === type ? null : type;
  document.querySelectorAll('[data-accidental]').forEach((button) => button.classList.toggle('selected', button.dataset.accidental === selectedAccidental));
  renderStaff();
  updateSubmit();
}

function updateSubmit() {
  els.submit.disabled = selectedNote === null || !selectedAccidental;
}

function setupPuzzle() {
  window.clearTimeout(resultScreenTimer);
  resultScreenTimer = null;
  window.clearTimeout(feedbackToneTimer);
  feedbackToneTimer = null;
  phase = 'listen';
  roundAttempts = 0;
  selectedNote = null;
  selectedAccidental = null;
  replayLeft = 2;
  const puzzle = currentPuzzle();
  els.sessionCounter.textContent = `第 ${puzzleIndex + 1} / ${SESSION_TOTAL} 題`;
  els.phaseEyebrow.innerHTML = '<span></span> 第一階段 · 記住旋律';
  els.phaseTitle.textContent = '先用耳朵聽一次';
  els.phaseHint.textContent = '譜面被藏起來了。跟著光柱，記住每個音的位置。';
  els.mask.classList.remove('revealed');
  els.tools.classList.add('hidden');
  els.nextPhase.classList.remove('hidden');
  els.submit.classList.add('hidden');
  els.noDiff.classList.add('hidden');
  els.feedback.classList.add('hidden');
  els.submit.disabled = true;
  els.noDiff.disabled = false;
  document.querySelectorAll('[data-accidental]').forEach((button) => { button.disabled = false; });
  els.replayCount.textContent = replayLeft;
  document.querySelectorAll('[data-accidental]').forEach((button) => button.classList.remove('selected'));
  renderStaff();
  renderProgress();
  window.setTimeout(() => playSequence(false), 500);
}

function failCurrentPuzzle() {
  const puzzle = currentPuzzle();
  const needed = puzzle.alter > 0 ? 'sharp' : 'flat';
  const sign = puzzle.alter > 0 ? '♯' : '♭';
  phase = 'failed';
  sessionStats.completed += 1;
  sessionStats.failed += 1;
  window.clearTimeout(feedbackToneTimer);
  feedbackToneTimer = null;
  stopRecordedAudio();
  selectedNote = puzzle.answer;
  selectedAccidental = needed;
  document.querySelectorAll('[data-accidental]').forEach((button) => {
    button.classList.toggle('selected', button.dataset.accidental === needed);
    button.disabled = true;
  });
  els.submit.disabled = true;
  els.noDiff.disabled = true;
  els.feedback.textContent = `本題偵查失敗。正確答案是第 ${puzzle.answer + 1} 音 ${sign}，即將進入下一題。`;
  els.feedback.className = 'feedback fail';
  renderStaff();
  failureAdvanceTimer = window.setTimeout(() => {
    failureAdvanceTimer = null;
    if (sessionStats.completed >= SESSION_TOTAL) {
      showSummary();
      return;
    }
    puzzleIndex += 1;
    setupPuzzle();
  }, 2200);
}

function enterAnswerPhase() {
  if (playing) return;
  phase = 'answer';
  replayLeft = 2;
  els.phaseEyebrow.innerHTML = '<span></span> 第二階段 · 找出變化';
  els.phaseTitle.textContent = '哪一個音偷偷變了？';
  els.phaseHint.textContent = '點譜上的一格圈起來，再選擇它是升高 ♯ 或降低 ♭。';
  els.mask.classList.add('revealed');
  els.tools.classList.remove('hidden');
  els.nextPhase.classList.add('hidden');
  els.submit.classList.remove('hidden');
  els.noDiff.classList.remove('hidden');
  els.replayCount.textContent = replayLeft;
  renderProgress();
  window.setTimeout(() => playSequence(true), 350);
}

function submitAnswer() {
  if (phase !== 'answer') return;
  roundAttempts += 1;
  sessionStats.totalAttempts += 1;
  const puzzle = currentPuzzle();
  const needed = puzzle.alter > 0 ? 'sharp' : 'flat';
  if (selectedNote === puzzle.answer && selectedAccidental === needed) {
    phase = 'resolved';
    sessionStats.completed += 1;
    if (roundAttempts === 1) sessionStats.correctFirstTry += 1;
    els.feedback.textContent = '答對了！位置和記號都抓到了。';
    els.feedback.className = 'feedback good';
    els.submit.disabled = true;
    window.clearTimeout(resultScreenTimer);
    resultScreenTimer = window.setTimeout(() => {
      resultScreenTimer = null;
      if (phase === 'resolved') showResult();
    }, 650);
    return;
  }
  if (selectedNote === puzzle.answer) {
    sessionStats.accidentalMistakes += 1;
    if (roundAttempts >= 2) {
      failCurrentPuzzle();
      return;
    }
    els.feedback.textContent = '位置抓對了，但記號不對。還有 1 次機會：它是變高，還是變低？';
    els.feedback.className = 'feedback';
    playSingle(false);
    feedbackToneTimer = window.setTimeout(() => {
      feedbackToneTimer = null;
      if (phase === 'answer') playSingle(true);
    }, 900);
    selectedAccidental = null;
    document.querySelectorAll('[data-accidental]').forEach((button) => button.classList.remove('selected'));
    updateSubmit();
    renderStaff();
    return;
  }
  sessionStats.positionMistakes += 1;
  if (roundAttempts >= 2) {
    failCurrentPuzzle();
    return;
  }
  els.feedback.textContent = '位置不對，還有 1 次機會。再聽一次，注意光柱經過的時刻。';
  els.feedback.className = 'feedback';
  selectedNote = null;
  selectedAccidental = null;
  document.querySelectorAll('[data-accidental]').forEach((button) => button.classList.remove('selected'));
  updateSubmit();
  renderStaff();
}

function showResult() {
  if (phase !== 'resolved') return;
  const puzzle = currentPuzzle();
  const base = pitchNames[puzzle.notes[puzzle.answer][0]];
  const sign = puzzle.alter > 0 ? '♯' : '♭';
  const direction = puzzle.alter > 0 ? '升高' : '降低';
  els.originalLabel.textContent = base;
  els.changedLabel.textContent = `${base} ${sign}`;
  els.resultText.textContent = `第 ${puzzle.answer + 1} 格的 ${base} 偷偷${direction}了半音。你不只找到了位置，也替旋律寫下了正確線索。`;
  els.resultPortrait.style.backgroundImage = `url("assets/${selectedCharacter === '奏太' ? 'detective-boy.png' : 'detective-girl.png'}")`;
  const isLastQuestion = sessionStats.completed >= SESSION_TOTAL;
  els.playAgain.innerHTML = isLastQuestion ? '查看偵查報告 <span>→</span>' : '下一個案件 <span>→</span>';
  els.endFromResult.classList.toggle('hidden', isLastQuestion);
  showScreen('result');
  window.setTimeout(() => { playSingle(false); window.setTimeout(() => playSingle(true), 850); }, 450);
}

function rewardIsEligible() {
  const correct = sessionStats.completed - sessionStats.failed;
  return sessionStats.completed === SESSION_TOTAL && correct >= 5;
}

function chooseRewardCard() {
  const roll = Math.random() * 100;
  const rarity = roll < 52 ? 'R' : roll < 82 ? 'SR' : roll < 97 ? 'SSR' : 'SSSR';
  if (rarity === 'SSSR') return ultraRareDetectiveCard;
  const soloPool = soloDetectiveCards[selectedCharacter].filter((card) => card.rarity === rarity);
  const pool = rarity === 'SSR' ? [...soloPool, ...duoDetectiveCards] : soloPool;
  return pool[Math.floor(Math.random() * pool.length)];
}

function updateCardRewardPanel() {
  const correct = sessionStats.completed - sessionStats.failed;
  const eligible = rewardIsEligible();
  els.cardReward.classList.toggle('eligible', eligible);
  els.cardReward.classList.toggle('locked', !eligible);
  els.cardReward.classList.toggle('drawn', cardDrawn);
  els.drawCard.disabled = !eligible;

  if (cardDrawn && currentRewardCard) {
    if (!cardRevealed) {
      els.cardRewardTitle.textContent = '案件卡包已送達，等待你親手滑開';
      els.cardRewardHint.textContent = '按住卡包由左往右滑動，距離達標才會揭卡';
      els.drawCard.textContent = '繼續開卡包';
      return;
    }
    els.cardRewardTitle.textContent = `已獲得 ${currentRewardCard.rarity} 卡「${currentRewardCard.name}」`;
    els.cardRewardHint.textContent = `本輪卡牌加成 +${currentRewardCard.bonus}・點擊可再次查看`;
    els.drawCard.textContent = '查看卡牌';
    return;
  }
  if (eligible) {
    els.cardRewardTitle.textContent = `答對 ${correct} 題，已解鎖 1 次抽卡機會！`;
    els.cardRewardHint.textContent = 'R 52% ・ SR 30% ・ SSR 15% ・ SSSR 3%（唯一雙人紀念卡）';
    els.drawCard.textContent = '抽案件牌卡';
    return;
  }
  els.cardRewardTitle.textContent = '完成 6 題並答對至少 5 題，即可抽卡';
  els.cardRewardHint.textContent = `本輪答對 ${Math.max(0, correct)} 題・R 52% ・ SR 30% ・ SSR 15% ・ SSSR 3%`;
  els.drawCard.textContent = '尚未解鎖';
}

function renderRewardCard(card) {
  const owner = card.owner || selectedCharacter;
  els.rewardCardImage.src = card.image;
  els.rewardCardImage.alt = `${owner}的${card.name}${card.rarity}卡牌`;
  els.rewardCardBadge.className = `card-rarity-badge rarity-${card.rarity}`;
  els.rewardCardRarity.textContent = card.rarity;
  els.rewardCardBonus.textContent = `+${card.bonus}`;
  els.rewardCardOwner.textContent = `${owner} CASE CARD`;
  els.rewardCardName.textContent = card.name;
  els.rewardCardStory.textContent = card.story;
}

function clearCardAnimationTimers() {
  cardAnimationTimers.forEach((timer) => window.clearTimeout(timer));
  cardAnimationTimers = [];
}

function setPackSwipeProgress(progress) {
  packSwipeProgress = Math.max(0, Math.min(1, progress));
  els.blindPack.style.setProperty('--swipe-progress', packSwipeProgress);
  els.blindPack.style.setProperty('--swipe-offset', `${packSwipeProgress * 14}px`);
  els.blindPack.style.setProperty('--swipe-scale', 1 + packSwipeProgress * .035);
  els.blindPack.style.setProperty('--swipe-brightness', 1 + packSwipeProgress * .16);
  els.swipeGuide.style.setProperty('--swipe-progress', packSwipeProgress);
  els.swipeGuide.style.setProperty('--swipe-percent', `${packSwipeProgress * 100}%`);
}

function resetPackSwipe() {
  packSwipeActive = false;
  packOpening = false;
  packSwipeStartX = 0;
  setPackSwipeProgress(0);
  els.blindPack.classList.remove('dragging', 'swipe-failed', 'swipe-complete');
  els.swipeGuide.classList.remove('complete');
}

function revealOpenedCard() {
  els.blindPack.classList.add('hidden');
  els.swipeGuide.classList.add('hidden');
  els.revealedCard.classList.add('active');
  cardRevealed = true;
  packOpening = false;
  updateCardRewardPanel();
  els.cardDrawStatus.textContent = `${currentRewardCard.rarity} 稀有卡牌・偵查加成 +${currentRewardCard.bonus}`;
  playCardRevealSound(currentRewardCard.rarity);
}

function openPackAfterSwipe() {
  if (packOpening || cardRevealed) return;
  packOpening = true;
  packSwipeActive = false;
  setPackSwipeProgress(1);
  els.blindPack.classList.remove('dragging');
  els.blindPack.classList.add('swipe-complete', 'opening');
  els.swipeGuide.classList.add('complete');
  els.cardDrawStatus.textContent = '滑動成功，案件封印正在解除！';
  cardAnimationTimers.push(window.setTimeout(() => {
    els.blindPack.classList.add('tearing');
  }, 420));
  cardAnimationTimers.push(window.setTimeout(revealOpenedCard, 1050));
}

function beginPackSwipe(event) {
  if (packOpening || cardRevealed || !els.cardDrawOverlay.classList.contains('active')) return;
  packSwipeActive = true;
  packSwipeStartX = event.clientX;
  setPackSwipeProgress(0);
  els.blindPack.classList.remove('swipe-failed');
  els.blindPack.classList.add('dragging');
  els.cardDrawStatus.textContent = '繼續向右滑，讓金色切線走到底……';
  if (els.blindPack.setPointerCapture) els.blindPack.setPointerCapture(event.pointerId);
  event.preventDefault();
}

function movePackSwipe(event) {
  if (!packSwipeActive || packOpening) return;
  const swipeDistance = Math.min(240, Math.max(190, window.innerWidth * .25));
  setPackSwipeProgress((event.clientX - packSwipeStartX) / swipeDistance);
  if (packSwipeProgress >= .72) els.cardDrawStatus.textContent = '就快打開了，再向右滑一點！';
  event.preventDefault();
}

function finishPackSwipe(event) {
  if (!packSwipeActive || packOpening) return;
  packSwipeActive = false;
  if (els.blindPack.hasPointerCapture?.(event.pointerId)) els.blindPack.releasePointerCapture(event.pointerId);
  const packBounds = els.blindPack.getBoundingClientRect();
  const reachedRightEdge = event.clientX >= packBounds.right - 12;
  if (event.type !== 'pointercancel' && packSwipeProgress >= .82 && reachedRightEdge) {
    openPackAfterSwipe();
    return;
  }
  els.blindPack.classList.remove('dragging');
  els.blindPack.classList.add('swipe-failed');
  setPackSwipeProgress(0);
  els.cardDrawStatus.textContent = '請從卡包左側一路滑到右邊緣，再試一次。';
  cardAnimationTimers.push(window.setTimeout(() => els.blindPack.classList.remove('swipe-failed'), 520));
}

function openCardDrawOverlay(instant = false) {
  if (!currentRewardCard) return;
  clearCardAnimationTimers();
  renderRewardCard(currentRewardCard);
  els.cardDrawOverlay.classList.add('active');
  els.cardDrawOverlay.setAttribute('aria-hidden', 'false');
  playCardBgm();
  els.revealedCard.classList.remove('active');
  els.blindPack.className = 'blind-pack';
  els.swipeGuide.className = 'swipe-guide';
  resetPackSwipe();
  els.cardDrawStatus.textContent = instant ? '這是你本輪獲得的案件牌卡。' : '按住卡包，由左往右滑動來解除封印。';

  if (instant) {
    els.blindPack.classList.add('hidden');
    els.swipeGuide.classList.add('hidden');
    els.revealedCard.classList.add('active');
    return;
  }
}

function closeCardDrawOverlay() {
  clearCardAnimationTimers();
  stopCardBgm();
  packSwipeActive = false;
  packOpening = false;
  els.cardDrawOverlay.classList.remove('active');
  els.cardDrawOverlay.setAttribute('aria-hidden', 'true');
}

function drawRewardCard() {
  if (!rewardIsEligible()) return;
  if (cardDrawn && currentRewardCard) {
    openCardDrawOverlay(cardRevealed);
    return;
  }
  currentRewardCard = chooseRewardCard();
  cardDrawn = true;
  cardRevealed = false;
  updateCardRewardPanel();
  openCardDrawOverlay(false);
}

function showSummary() {
  phase = 'summary';
  window.clearTimeout(resultScreenTimer);
  resultScreenTimer = null;
  window.clearTimeout(failureAdvanceTimer);
  failureAdvanceTimer = null;
  stopRecordedAudio();
  const completed = sessionStats.completed;
  const accuracy = completed ? Math.round((sessionStats.correctFirstTry / completed) * 100) : 0;
  els.accuracyRing.style.setProperty('--score-angle', `${accuracy * 3.6}deg`);
  els.accuracyValue.textContent = `${accuracy}%`;
  els.completedValue.textContent = `${completed} / ${SESSION_TOTAL}・${sessionStats.failed} 題`;
  els.firstTryValue.textContent = `${sessionStats.correctFirstTry} 題`;
  els.attemptsValue.textContent = `${sessionStats.totalAttempts} 次`;
  els.positionMistakesValue.textContent = `${sessionStats.positionMistakes} 次`;
  els.accidentalMistakesValue.textContent = `${sessionStats.accidentalMistakes} 次`;
  els.partnerValue.textContent = selectedCharacter;
  if (completed === 0) {
    els.summaryMessage.textContent = '這次還沒有完成題目。準備好後，再和搭檔重新開始偵查吧！';
  } else if (accuracy >= 80) {
    els.summaryMessage.textContent = '太厲害了！你能快速鎖定走音，已經具備敏銳的音感偵查力。';
  } else if (accuracy >= 50) {
    els.summaryMessage.textContent = '做得很好！你已能抓到多數線索，再注意聲音變高或變低就更完整了。';
  } else {
    els.summaryMessage.textContent = '每一次修正都是耳朵變敏銳的證明。再聽一次，你會找到更多線索！';
  }
  updateCardRewardPanel();
  showScreen('summary');
}

els.begin.addEventListener('click', () => { ensureAudio(); preloadRecordedAudio(); showScreen('character'); });
els.homeBgmButton.addEventListener('click', () => {
  if (!els.homeBgm.paused) {
    homeBgmEnabled = false;
    stopHomeBgm();
    return;
  }
  homeBgmEnabled = true;
  playHomeBgm();
});
els.homeBgm.addEventListener('play', updateHomeBgmButton);
els.homeBgm.addEventListener('pause', updateHomeBgmButton);
document.addEventListener('pointerdown', () => {
  if (screens.start.classList.contains('active') && homeBgmEnabled && els.homeBgm.paused) playHomeBgm();
}, { once: true });
els.home.addEventListener('click', () => { stopRecordedAudio(); showScreen('start'); });
els.sound.addEventListener('click', () => {
  muted = !muted;
  if (activeRecording) activeRecording.muted = muted;
  els.cardBgm.muted = muted;
  els.sound.textContent = muted ? '×' : '♪';
  els.sound.setAttribute('aria-label', muted ? '開啟聲音' : '關閉聲音');
});
document.querySelectorAll('.character-card').forEach((card) => card.addEventListener('click', () => {
  selectedCharacter = card.dataset.character;
  startSession();
}));
document.addEventListener('click', (event) => {
  const button = event.target.closest('button');
  if (!button || button.disabled || button.id === 'homeBgmBtn' || button.id === 'soundBtn') return;
  playCaseButtonSound();
});
document.querySelectorAll('[data-accidental]').forEach((button) => button.addEventListener('click', () => selectAccidental(button.dataset.accidental)));
els.nextPhase.addEventListener('click', enterAnswerPhase);
els.replay.addEventListener('click', () => {
  if (playing || replayLeft <= 0) return;
  replayLeft -= 1;
  els.replayCount.textContent = replayLeft;
  playSequence(phase === 'answer');
});
els.submit.addEventListener('click', submitAnswer);
els.noDiff.addEventListener('click', () => {
  if (phase !== 'answer') return;
  roundAttempts += 1;
  sessionStats.totalAttempts += 1;
  sessionStats.positionMistakes += 1;
  if (roundAttempts >= 2) {
    failCurrentPuzzle();
    return;
  }
  els.feedback.textContent = '這一題真的有一個音變了，還有 1 次機會，再追一次旋律留下的線索吧！';
  els.feedback.className = 'feedback';
});
document.querySelector('#playOriginalBtn').addEventListener('click', () => playSingle(false));
document.querySelector('#playChangedBtn').addEventListener('click', () => playSingle(true));
els.playAgain.addEventListener('click', () => {
  if (sessionStats.completed >= SESSION_TOTAL) {
    showSummary();
    return;
  }
  puzzleIndex += 1;
  showScreen('game');
  setupPuzzle();
});
els.endGame.addEventListener('click', showSummary);
els.endFromResult.addEventListener('click', showSummary);
els.summaryHome.addEventListener('click', () => showScreen('start'));
els.restartSession.addEventListener('click', startSession);
els.drawCard.addEventListener('click', drawRewardCard);
els.closeCardDraw.addEventListener('click', closeCardDrawOverlay);
els.blindPack.addEventListener('pointerdown', beginPackSwipe);
els.blindPack.addEventListener('pointermove', movePackSwipe);
els.blindPack.addEventListener('pointerup', finishPackSwipe);
els.blindPack.addEventListener('pointercancel', finishPackSwipe);
els.blindPack.addEventListener('keydown', (event) => {
  if (event.key !== 'ArrowRight' || packOpening || cardRevealed) return;
  event.preventDefault();
  setPackSwipeProgress(1);
  openPackAfterSwipe();
});
els.cardDrawOverlay.addEventListener('click', (event) => {
  if (event.target === els.cardDrawOverlay) closeCardDrawOverlay();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && els.cardDrawOverlay.classList.contains('active')) closeCardDrawOverlay();
});
window.addEventListener('resize', () => {
  if (!screens.game.classList.contains('hidden')) renderStaff();
});

showScreen('start');
