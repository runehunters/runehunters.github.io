const TILE_SIZE = 32;
const MAP_WIDTH = 45;
const MAP_HEIGHT = 45;

const ARTIFACTS = {
  pottery1: { name: "Terra Sigillata Bowl", rarity: "common", value: 15, description: "Red-gloss pottery widely traded." },
  pottery2: { name: "Amphora Fragment", rarity: "common", value: 12, description: "Storage vessel for wine." },
  coin1: { name: "Silver Denarius", rarity: "uncommon", value: 45, description: "Roman silver coin." },
  coin2: { name: "Bronze Sestertius", rarity: "uncommon", value: 40, description: "Large bronze coin." },
  tool1: { name: "Iron Strigil", rarity: "common", value: 18, description: "Curved scraper for baths." },
  tool2: { name: "Bronze Fibula", rarity: "common", value: 20, description: "Ornate brooch." },
  jewelry1: { name: "Gold Aureus Ring", rarity: "rare", value: 100, description: "Finger ring with gold coin." },
  jewelry2: { name: "Carnelian Intaglio", rarity: "rare", value: 95, description: "Carved gemstone seal." },
  tablet1: { name: "Wax Tablet Stylus", rarity: "uncommon", value: 35, description: "Bronze writing implement." },
  tablet2: { name: "Lead Curse Tablet", rarity: "epic", value: 250, description: "Inscribed lead curse sheet." },
  sculpture1: { name: "Marble Portrait Bust", rarity: "rare", value: 120, description: "Life-sized Roman portrait." },
  sculpture2: { name: "Terracotta Figurine", rarity: "common", value: 22, description: "Small household deity." },
  seal1: { name: "Imperial Bulla", rarity: "rare", value: 110, description: "Gold pendant for children." },
  seal2: { name: "Signaculum Stamp", rarity: "uncommon", value: 50, description: "Bronze ownership seal." },
  weapon1: { name: "Gladius Hispaniensis", rarity: "rare", value: 115, description: "Roman legionary sword." },
  weapon2: { name: "Pilum Head", rarity: "uncommon", value: 48, description: "Javelin point." },
  mosaic1: { name: "Geometric Mosaic Tessera", rarity: "rare", value: 90, description: "Colored mosaic cube." },
  mosaic2: { name: "Figured Mosaic Panel", rarity: "epic", value: 200, description: "Mythological scene mosaic." },
  lamp1: { name: "Terracotta Oil Lamp", rarity: "common", value: 16, description: "Mass-produced clay lamp." },
  lamp2: { name: "Bronze Lucerna", rarity: "uncommon", value: 42, description: "Multi-nozzle bronze lamp." },
  glass1: { name: "Blown Glass Unguentarium", rarity: "uncommon", value: 38, description: "Small glass bottle." },
  glass2: { name: "Millefiori Glass Bowl", rarity: "epic", value: 220, description: "Mosaic glass vessel." },
  inscr1: { name: "Funerary Inscription", rarity: "rare", value: 108, description: "Marble tombstone." },
  inscr2: { name: "Building Dedication", rarity: "epic", value: 240, description: "Stone construction record." },
  statue1: { name: "Bronze Statuette of Mercury", rarity: "rare", value: 112, description: "Small bronze god figure." },
  statue2: { name: "Venus Figurine", rarity: "uncommon", value: 46, description: "Terracotta Venus figure." },
  tile1: { name: "Roof Tile with Mark", rarity: "common", value: 14, description: "Legion roof tile." },
  tile2: { name: "Hypocaust Tile", rarity: "uncommon", value: 36, description: "Heating system tile." },
  armor1: { name: "Lorica Segmentata Plate", rarity: "rare", value: 118, description: "Roman armor plate." },
  armor2: { name: "Bronze Scale Armor", rarity: "rare", value: 102, description: "Bronze scale armor." },
  medical1: { name: "Bronze Surgical Probe", rarity: "uncommon", value: 44, description: "Medical instrument." },
  medical2: { name: "Collyrium Stamp", rarity: "rare", value: 94, description: "Eye medicine stamp." },
  weight1: { name: "Lead Steelyard Weight", rarity: "common", value: 17, description: "Balance scale weight." },
  weight2: { name: "Bronze Measure", rarity: "uncommon", value: 39, description: "Grain measure." },
  dice1: { name: "Bone Gaming Die", rarity: "common", value: 19, description: "Six-sided bone die." },
  dice2: { name: "Loaded Lead Die", rarity: "uncommon", value: 41, description: "Weighted gaming die." },
  key1: { name: "Bronze Door Key", rarity: "common", value: 21, description: "L-shaped door key." },
  key2: { name: "Iron Chest Lock", rarity: "uncommon", value: 37, description: "Chest lock mechanism." },
  mirror1: { name: "Polished Bronze Mirror", rarity: "rare", value: 96, description: "Hand mirror." },
  mirror2: { name: "Silver Hand Mirror", rarity: "epic", value: 210, description: "Ornate silver mirror." },
  tool3: { name: "Iron Hoe Blade", rarity: "common", value: 20, description: "Agricultural tool." },
  tool4: { name: "Surveying Groma", rarity: "rare", value: 122, description: "Surveying instrument." },
  jewelry3: { name: "Glass Bead Necklace", rarity: "common", value: 18, description: "Colorful glass beads." },
  jewelry4: { name: "Emerald Earrings", rarity: "legendary", value: 500, description: "Gold emerald earrings." },
  pottery3: { name: "Samian Ware Cup", rarity: "common", value: 13, description: "Red-gloss cup." },
  pottery4: { name: "African Red Slip Dish", rarity: "uncommon", value: 43, description: "North African fine ware." },
  book1: { name: "Stylus and Wax Tablet", rarity: "uncommon", value: 47, description: "Writing set." },
  book2: { name: "Papyrus Fragment", rarity: "epic", value: 230, description: "Egyptian papyrus." }
};

const RESEARCH_TREE = {
  tier1: [
    { id: 'brush1', name: 'Brush With Greatness', cost: 150, effect: 'Finds artifacts', tier: 1, unlocked: false, prereqs: [] },
    { id: 'file', name: 'File It Under History', cost: 150, effect: '+20% RP from artifacts', tier: 1, unlocked: false, prereqs: [] },
    { id: 'cardio', name: 'Cardio-facts Training', cost: 200, effect: '+10% movement speed', tier: 1, unlocked: false, prereqs: [] },
    { id: 'questpack1', name: 'Open Sesame-Stone', cost: 100, effect: 'Unlock Quest Pack 1', tier: 1, unlocked: false, prereqs: [] }
  ],
  tier2: [
    { id: 'shovel1', name: 'Shovel Some Respect', cost: 250, effect: 'Faster digging', tier: 2, unlocked: false, prereqs: ['brush1'] },
    { id: 'radar1', name: 'Peek Performance', cost: 300, effect: 'See 2 layers deep', tier: 2, unlocked: false, prereqs: ['brush1'] },
    { id: 'paperwork', name: 'Paperwork Makes Dream Work', cost: 500, effect: 'Document more at once', tier: 2, unlocked: false, prereqs: ['file'] },
    { id: 'questpack2', name: 'Quest-ionable Methods', cost: 300, effect: 'Unlock Quest Pack 2', tier: 2, unlocked: false, prereqs: ['questpack1'] }
  ],
  tier3: [
    { id: 'brush2', name: 'Brush Hour 2', cost: 400, effect: 'Rarer artifacts', tier: 3, unlocked: false, prereqs: ['shovel1'] },
    { id: 'scan1', name: 'Scan-You-Dig-It?', cost: 700, effect: '10% auto-reveal tiles', tier: 3, unlocked: false, prereqs: ['radar1'] },
    { id: 'radar2', name: 'Double-Down Detector', cost: 600, effect: 'See 3 layers deep', tier: 3, unlocked: false, prereqs: ['radar1'] },
    { id: 'keep', name: 'Keep It Together', cost: 1100, effect: 'Artifacts never break', tier: 3, unlocked: false, prereqs: ['paperwork'] },
    { id: 'questpack3', name: 'Quest For Success', cost: 900, effect: 'Unlock Quest Pack 3', tier: 3, unlocked: false, prereqs: ['questpack2'] }
  ],
  tier4: [
    { id: 'shovel2', name: 'Shovel With Punches', cost: 600, effect: 'Master tools', tier: 4, unlocked: false, prereqs: ['brush2'] },
    { id: 'radar3', name: 'Depth Charge', cost: 1200, effect: 'See 4 layers, +25% detection', tier: 4, unlocked: false, prereqs: ['scan1', 'radar2'] },
    { id: 'map', name: 'Map-tastic Insights', cost: 900, effect: 'See buried artifacts', tier: 4, unlocked: false, prereqs: ['keep'] },
    { id: 'labgo', name: 'Lab On the Go-pher', cost: 2800, effect: 'Document in field', tier: 4, unlocked: false, prereqs: ['keep'] },
    { id: 'questpack4', name: 'A Quest-ion of Time', cost: 1200, effect: 'Unlock Quest Pack 4', tier: 4, unlocked: false, prereqs: ['questpack3'] }
  ],
  tier5: [
    { id: 'tools3', name: 'Dig-nificantly Better', cost: 1200, effect: 'Finds everything', tier: 5, unlocked: false, prereqs: ['shovel2'] },
    { id: 'radar4', name: 'All-Seeing Eye-chaeology', cost: 1800, effect: 'See 5 layers, +50% detection', tier: 5, unlocked: false, prereqs: ['radar3'] },
    { id: 'laser', name: 'Laser Focused', cost: 3000, effect: '30% instant layer reveal', tier: 5, unlocked: false, prereqs: ['radar3'] },
    { id: 'research', name: 'Research and Destroy', cost: 2400, effect: 'Bonus RP from all', tier: 5, unlocked: false, prereqs: ['map', 'labgo'] },
    { id: 'victory', name: 'Dig Victory', cost: 4000, effect: 'Complete the journey!', tier: 5, unlocked: false, prereqs: ['tools3', 'radar4', 'laser', 'research'] }
  ]
};

const QUEST_PACKS = {
  pack1: { name: "Beginner's Luck", unlock: 'questpack1', quests: [
    { id: 'q1_1', name: 'First Steps', desc: 'Collect 5 artifacts', type: 'collect', target: 5, progress: 0, completed: false, reward: 50 },
    { id: 'q1_3', name: 'Complete Excavation', desc: 'Complete 1 dig site', type: 'digsite', target: 1, progress: 0, completed: false, reward: 100 }
  ]},
  pack2: { name: "Intermediate Excavator", unlock: 'questpack2', quests: [
    { id: 'q2_1', name: 'Rare Finds', desc: 'Collect 3 rare artifacts', type: 'collectRare', target: 3, progress: 0, completed: false, reward: 150 },
    { id: 'q2_2', name: 'Research Focus', desc: 'Earn 500 RP', type: 'earnRP', target: 500, progress: 0, completed: false, reward: 200 }
  ]},
  pack3: { name: "Deep Digs", unlock: 'questpack3', quests: [
    { id: 'q3_1', name: 'Master Excavator', desc: 'Complete 5 dig sites', type: 'digsite', target: 5, progress: 0, completed: false, reward: 300 },
    { id: 'q3_2', name: 'Epic Hunter', desc: 'Collect 2 epic artifacts', type: 'collectEpic', target: 2, progress: 0, completed: false, reward: 350 },
    { id: 'q3_3', name: 'Knowledge Seeker', desc: 'Earn 1500 RP', type: 'earnRP', target: 1500, progress: 0, completed: false, reward: 400 }
  ]},
  pack4: { name: "Legendary Discoveries", unlock: 'questpack4', quests: [
    { id: 'q4_1', name: 'Legendary Find', desc: 'Collect 1 legendary artifact', type: 'collectLegendary', target: 1, progress: 0, completed: false, reward: 500 },
    { id: 'q4_2', name: 'Complete Collection', desc: 'Collect 50 artifacts', type: 'collect', target: 50, progress: 0, completed: false, reward: 600 },
    { id: 'q4_3', name: 'Research Master', desc: 'Earn 3000 RP', type: 'earnRP', target: 3000, progress: 0, completed: false, reward: 700 }
  ]}
};

const TUTORIAL_STEPS = [
  { text: "Welcome to Rune Hunters! You are an archaeologist studying ancient Roman civilization." },
  { text: "Archaeology is the study of human history through excavation and analysis of artifacts." },
  { text: "Move around using your movement keys. The map shows your research base and surrounding areas." },
  { text: "Dig sites appear each day at 9 AM. Visit them to excavate layered trenches." },
  { text: "The central building is your Research Laboratory. Visit it to document your artifacts!" },
  { text: "When ready to sleep, enter your Camp building at night to start a new day." }
];

let game = {
  state: 'town',
  scene: 'overworld',
  player: { x: (MAP_WIDTH / 2) * TILE_SIZE, y: (MAP_HEIGHT / 2) * TILE_SIZE, speed: 8, dx: 0, dy: 1, walkFrame: 0, walkCounter: 0, isWalking: false },
  map: [],
  mapObjects: [],
  ambianceElements: [],
  backgroundElements: [],
  digsites: [],
  paths: [],
  currentDigsite: null,
  inventory: {},
  documentedArtifacts: {},
  researchPoints: 0,
  time: { hour: 9, minute: 0, day: 1, frameCounter: 0 },
  keys: {},
  keybinds: { up: ['w', 'arrowup'], down: ['s', 'arrowdown'], left: ['a', 'arrowleft'], right: ['d', 'arrowright'], interact: ['e', ''], return: ['r', ''] },
  tutorialActive: false,
  tutorialStep: 0,
  offsetX: 0,
  offsetY: 0,
  isNight: false,
  nightOpacity: 0,
  timeFrozen: false,
  lateNightWarningShown: false,
  labPopupShown: false,
  questProgress: { totalCollected: 0, totalDigsites: 0, rareCollected: 0, epicCollected: 0, legendaryCollected: 0, totalRPEarned: 0 },
  currentKeybindChange: null,
  currentKeybindSlot: null,
  controlScheme: 'keyboard',
  zoomScale: 1.0,
  interactPressed: false
};

let joystickSetupComplete = false;
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createMap() {
  const map = Array(MAP_HEIGHT).fill(null).map(() => Array(MAP_WIDTH).fill('g'));
  const buildings = [
    { type: 'b', width: 7, height: 5 },
    { type: 'h', width: 5, height: 5 },
    { type: 'q', width: 5, height: 5 }
  ];
  const placedBuildings = [];
  for (const building of buildings) {
    let placed = false;
    let attempts = 0;
    while (!placed && attempts < 100) {
      const x = Math.floor(Math.random() * (MAP_WIDTH - building.width - 4)) + 2;
      const y = Math.floor(Math.random() * (MAP_HEIGHT - building.height - 4)) + 2;
      const distFromCenter = Math.sqrt(Math.pow(x + building.width / 2 - MAP_WIDTH / 2, 2) + Math.pow(y + building.height / 2 - MAP_HEIGHT / 2, 2));
      if (distFromCenter > 10) {
        let clear = true;
        for (let dy = 0; dy < building.height; dy++) {
          for (let dx = 0; dx < building.width; dx++) {
            if (map[y + dy][x + dx] !== 'g') clear = false;
          }
        }
        let tooClose = false;
        for (const pb of placedBuildings) {
          if (!(x + building.width + 2 <= pb.x || pb.x + pb.width + 2 <= x || y + building.height + 2 <= pb.y || pb.y + pb.height + 2 <= y)) {
            tooClose = true;
            break;
          }
        }
        if (clear && !tooClose) {
          for (let dy = 0; dy < building.height; dy++) {
            for (let dx = 0; dx < building.width; dx++) {
              map[y + dy][x + dx] = building.type;
            }
          }
          placedBuildings.push({ x, y, width: building.width, height: building.height, type: building.type });
          placed = true;
        }
      }
      attempts++;
    }
  }
  return map;
}

function generateDigsites() {
  for (let y = 0; y < MAP_HEIGHT; y++) {
    for (let x = 0; x < MAP_WIDTH; x++) {
      if (game.map[y][x] === 'd' || game.map[y][x] === 'w') {
        game.map[y][x] = 'g';
      }
    }
  }

  if (!game.digsites || game.digsites.length === 0) {
    game.digsites = [];
    const usedPositions = [];
    for (let i = 0; i < 4; i++) {
      let placed = false;
      let attempts = 0;
      while (!placed && attempts < 100) {
        const width = 3 + Math.floor(Math.random() * 3);
        const height = 3 + Math.floor(Math.random() * 3);
        const x = Math.floor(Math.random() * (MAP_WIDTH - width - 4)) + 2;
        const y = Math.floor(Math.random() * (MAP_HEIGHT - height - 4)) + 2;
        const distFromCenter = Math.sqrt(Math.pow(x - 21, 2) + Math.pow(y - 12, 2));
        
        let isClear = distFromCenter > 10;
        if (isClear) {
          for (let dy = 0; dy < height; dy++) {
            for (let dx = 0; dx < width; dx++) {
              if (game.map[y + dy] && game.map[y + dy][x + dx] !== 'g') {
                isClear = false;
              }
            }
          }
        }
        
        if (isClear) {
          for (const pos of usedPositions) {
            const overlap = !(x + width + 1 <= pos.x || pos.x + pos.width + 1 <= x || y + height + 1 <= pos.y || pos.y + pos.height + 1 <= y);
            if (overlap) {
              isClear = false;
              break;
            }
          }
        }
        
        if (isClear) {
          for (let dy = 0; dy < height; dy++) {
            for (let dx = 0; dx < width; dx++) {
              game.map[y + dy][x + dx] = 'd';
            }
          }
          const layers = 5 + Math.floor(Math.random() * 6);
          game.digsites.push({ x: x + 1, y: y + 1, completed: false, grid: null, layers: layers, width: width, height: height });
          usedPositions.push({ x, y, width, height });
          placed = true;
        }
        attempts++;
      }
    }
  }
  
  game.digsites.forEach(site => {
    if (!site.completed) {
      for (let dy = 0; dy < site.height; dy++) {
        for (let dx = 0; dx < site.width; dx++) {
          if (game.map[site.y + dy] && game.map[site.y + dy][site.x + dx] !== undefined) {
            game.map[site.y + dy][site.x + dx] = 'd';
          }
        }
      }
    }
  });
}

function generateMapObjects() {
  game.mapObjects = [];
  const treeCount = Math.floor(MAP_WIDTH * MAP_HEIGHT / 80);
  for (let i = 0; i < treeCount; i++) {
    let x, y, attempts = 0;
    do {
      x = Math.floor(Math.random() * MAP_WIDTH);
      y = Math.floor(Math.random() * MAP_HEIGHT);
      attempts++;
      if (attempts > 1000) break;
    } while (game.map[y][x] !== 'g' || (game.map[y][x] === 'g' && (Math.abs(x * TILE_SIZE + TILE_SIZE / 2 - game.player.x) < 50 && Math.abs(y * TILE_SIZE + TILE_SIZE / 2 - game.player.y) < 50)));
    if (game.map[y][x] === 'g') {
      game.mapObjects.push({ x: x * TILE_SIZE + TILE_SIZE / 2, y: y * TILE_SIZE + TILE_SIZE / 2, type: 'tree' });
    }
  }
}

function generateAmbiance() {
  game.ambianceElements = [];
  const rockCount = Math.floor(MAP_WIDTH * MAP_HEIGHT / 70);
  for (let i = 0; i < rockCount; i++) {
    let x, y, attempts = 0;
    do {
      x = Math.floor(Math.random() * MAP_WIDTH);
      y = Math.floor(Math.random() * MAP_HEIGHT);
      attempts++;
      if (attempts > 1000) break;
    } while (game.map[y][x] !== 'g');
    if (game.map[y][x] === 'g') {
      game.ambianceElements.push({ x: x * TILE_SIZE + TILE_SIZE / 2, y: y * TILE_SIZE + TILE_SIZE / 2, type: 'rock' });
    }
  }
}

function generateBackgroundElements() {
  game.backgroundElements = [];
  for (let i = 0; i < 10; i++) {
    game.backgroundElements.push({ x: Math.random() * (MAP_WIDTH * TILE_SIZE), y: Math.random() * (MAP_HEIGHT * TILE_SIZE * 0.4), type: 'column', height: 80 + Math.random() * 40 });
  }
  for (let i = 0; i < 5; i++) {
    game.backgroundElements.push({ x: Math.random() * (MAP_WIDTH * TILE_SIZE), y: Math.random() * (MAP_HEIGHT * TILE_SIZE * 0.4), type: 'arch', width: 60 + Math.random() * 40 });
  }
}

function generateDigsiteContent(digsite) {
  const rows = digsite.layers;
  const cols = 15;
  digsite.grid = Array(rows).fill(null).map(() => Array(cols).fill(null));
  digsite.artifactCount = 0;
  digsite.dirtCount = 0;
  digsite.currentLayer = 0;
  const artifactTypes = Object.keys(ARTIFACTS);
  const numArtifacts = Math.floor(rows * cols * 0.075);
  for (let i = 0; i < numArtifacts; i++) {
    let placed = false;
    while (!placed) {
      const x = Math.floor(Math.random() * cols);
      const y = Math.floor(Math.random() * rows);
      if (digsite.grid[y][x] === null) {
        const artifactType = artifactTypes[Math.floor(Math.random() * artifactTypes.length)];
        digsite.grid[y][x] = artifactType;
        digsite.artifactCount++;
        placed = true;
      }
    }
  }
  digsite.dirtCount = (rows * cols) - digsite.artifactCount;
  digsite.dugCells = Array(rows).fill(null).map(() => Array(cols).fill(false));
}

function isWalkable(x, y) {
  const tileX = Math.floor(x / TILE_SIZE);
  const tileY = Math.floor(y / TILE_SIZE);
  if (tileX < 0 || tileX >= MAP_WIDTH || tileY < 0 || tileY >= MAP_HEIGHT) return false;
  const tileType = game.map[tileY][tileX];
  if (tileType === 'g' || tileType === 'p' || tileType === 'd') {
    for (const obj of game.mapObjects) {
      const dx = obj.x - x;
      const dy = obj.y - y;
      if (Math.abs(dx) < 15 && Math.abs(dy) < 15) return false;
    }
    return true;
  }
  return false;
}

function getInteractionTarget() {
  if (game.scene !== 'overworld') return { type: 'exit', name: 'Exit Building' };
  const interactX = game.player.x + (game.player.dx * TILE_SIZE);
  const interactY = game.player.y + (game.player.dy * TILE_SIZE);
  const tileX = Math.floor(interactX / TILE_SIZE);
  const tileY = Math.floor(interactY / TILE_SIZE);
  if (tileX >= 0 && tileX < MAP_WIDTH && tileY >= 0 && tileY < MAP_HEIGHT) {
    const tileType = game.map[tileY][tileX];
    if (tileType === 'b') return { type: 'building', name: 'Research Laboratory', tileX, tileY };
    if (tileType === 'h') return { type: 'home', name: 'Camp', tileX, tileY };
    if (tileType === 'q') return { type: 'quest', name: 'Quest Room', tileX, tileY };
    if (tileType === 'd') return { type: 'digsite', name: 'Archaeological Dig Site', tileX, tileY };
  }
  return null;
}

function updateGame() {
  if (!game.timeFrozen && !game.tutorialActive) {
    game.time.frameCounter++;
    if (game.time.frameCounter >= 30) {
      game.time.frameCounter = 0;
      game.time.minute++;
      if (game.time.minute >= 60) {
        game.time.minute = 0;
        game.time.hour++;
        if (game.time.hour >= 24) game.time.hour = 0;
      }
    }
  }
  game.isNight = game.time.hour >= 18 || game.time.hour < 6;
  const targetOpacity = game.isNight ? 0.6 : 0;
  if (Math.abs(game.nightOpacity - targetOpacity) > 0.01) {
    const fadeSpeed = 0.01;
    game.nightOpacity = game.nightOpacity < targetOpacity ? Math.min(game.nightOpacity + fadeSpeed, targetOpacity) : Math.max(game.nightOpacity - fadeSpeed, targetOpacity);
    document.getElementById('nightOverlay').style.opacity = game.nightOpacity;
  }
  if (game.time.hour >= 17 && game.state === 'digsite') {
    game.state = 'town';
    showMessage('The dig site closed for the day! Return tomorrow.');
    document.getElementById('artifactModal').style.display = 'none';
  }
  if (game.state === 'town' && game.scene === 'overworld') {
    updatePlayerMovement();
    updateCamera();
  }
  if ((game.keys[game.keybinds.interact[0]] || game.keys[game.keybinds.interact[1]]) && !game.interactPressed) {
    if (game.state === 'digsite') {
      game.state = 'town';
      game.currentDigsite = null;
      document.getElementById('artifactModal').style.display = 'none';
    } else if (!game.tutorialActive) {
      handleInteraction();
    }
    game.interactPressed = true;
  } else if (!game.keys[game.keybinds.interact[0]] && !game.keys[game.keybinds.interact[1]]) {
    game.interactPressed = false;
  }
  updateHUD();
  draw();
}

function updatePlayerMovement() {
  let newX = game.player.x;
  let newY = game.player.y;
  let moving = false;
  let speed = game.player.speed;
  if (getResearchUnlocked('cardio')) speed *= 1.1;
  if (game.keys[game.keybinds.up[0]] || game.keys[game.keybinds.up[1]]) { newY -= speed; moving = true; }
  if (game.keys[game.keybinds.down[0]] || game.keys[game.keybinds.down[1]]) { newY += speed; moving = true; }
  if (game.keys[game.keybinds.left[0]] || game.keys[game.keybinds.left[1]]) { newX -= speed; moving = true; }
  if (game.keys[game.keybinds.right[0]] || game.keys[game.keybinds.right[1]]) { newX += speed; moving = true; }
  game.player.isWalking = moving;
  if (newX !== game.player.x && isWalkable(newX, game.player.y)) game.player.x = newX;
  if (newY !== game.player.y && isWalkable(game.player.x, newY)) game.player.y = newY;
  if (moving) {
    if (game.keys[game.keybinds.up[0]] || game.keys[game.keybinds.up[1]]) { game.player.dy = -1; game.player.dx = 0; }
    else if (game.keys[game.keybinds.down[0]] || game.keys[game.keybinds.down[1]]) { game.player.dy = 1; game.player.dx = 0; }
    else if (game.keys[game.keybinds.left[0]] || game.keys[game.keybinds.left[1]]) { game.player.dx = -1; game.player.dy = 0; }
    else if (game.keys[game.keybinds.right[0]] || game.keys[game.keybinds.right[1]]) { game.player.dx = 1; game.player.dy = 0; }
  }
}

function updateCamera() {
  game.offsetX = canvas.width / 2 - game.player.x * game.zoomScale;
  game.offsetY = canvas.height / 2 - game.player.y * game.zoomScale;
}

function updateHUD() {
  const minutesFormatted = game.time.minute.toString().padStart(2, '0');
  const timeFormatted = (game.time.hour % 12 || 12) + ':' + minutesFormatted + ' ' + (game.time.hour < 12 ? 'AM' : 'PM');
  document.getElementById('timeDisplay').textContent = timeFormatted + ', Day ' + game.time.day;
  document.getElementById('moneyDisplay').textContent = game.researchPoints;
  
  let inventoryHtml = '';
  for (const artifactType in game.inventory) {
    if (game.inventory[artifactType] > 0) {
      const artifact = ARTIFACTS[artifactType];
      inventoryHtml += '<div class="artifact-info">' + artifact.name + ': ' + game.inventory[artifactType] + '</div>';
    }
  }
  if (inventoryHtml !== '') {
    document.getElementById('inventoryDisplay').innerHTML = inventoryHtml;
    document.getElementById('bottomLeftPanel').style.display = 'block';
  } else {
    document.getElementById('inventoryDisplay').innerHTML = '';
    document.getElementById('bottomLeftPanel').style.display = 'none';
  }
}

function showMessage(message) {
  document.getElementById('messageText').textContent = message;
  document.getElementById('messageBox').style.display = 'block';
  setTimeout(() => { document.getElementById('messageBox').style.display = 'none'; }, 4000);
}

function handleInteraction() {
  if (game.tutorialActive && game.tutorialStep < TUTORIAL_STEPS.length - 1) return;
  if (game.state === 'town' && game.scene === 'overworld') {
    const target = getInteractionTarget();
    if (target) {
      if (target.type === 'building') {
        documentArtifacts();
      } else if (target.type === 'home') {
        if (game.isNight || game.time.hour >= 23) {
          document.getElementById('sleepMessage').textContent = 'Rest up for tomorrow excavations?';
          document.getElementById('sleepModal').style.display = 'flex';
        } else {
          showMessage('You can only sleep at night (after 6 PM).');
        }
      } else if (target.type === 'quest') {
        showQuestBoard();
      } else if (target.type === 'digsite') {
        if (game.time.hour >= 9 && game.time.hour < 17) {
          const digsite = game.digsites.find(d => Math.abs(d.x - target.tile
