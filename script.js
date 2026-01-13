const TILE_SIZE=32;
const MAP_WIDTH=45;
const MAP_HEIGHT=45;
const ARTIFACTS={
pottery1:{name:"Terra Sigillata Bowl",value:3,description:"Red-gloss pottery widely traded across the Roman Empire. The stamped decoration indicates mass production in Gaulish workshops.",insights:["Popular trade good across Mediterranean","Manufacturing techniques spread through conquest","Similar styles found in Britain and Africa"]},
pottery2:{name:"Amphora Fragment",value:2,description:"Storage vessel for wine, olive oil, or garum. The shape and clay composition reveal its origin and trade route.",insights:["Essential for maritime commerce","Different regions had distinct amphora styles","Contents identifiable through residue analysis"]},
coin1:{name:"Silver Denarius",value:9,description:"Roman silver coin featuring Emperor Trajan. Coins help date archaeological layers and track economic connections.",insights:["Portraiture propaganda tool for emperors","Debasement over time reflects economic decline","Found far beyond empire borders via trade"]},
coin2:{name:"Bronze Sestertius",value:8,description:"Large bronze coin with detailed imagery. The reverse depicts a military victory, common imperial propaganda.",insights:["Coins communicated political messages","Bronze denominations for daily transactions","Imagery reveals contemporary events"]},
tool1:{name:"Iron Strigil",value:4,description:"Curved scraper used in Roman baths to remove oil and sweat. Essential grooming tool for all social classes.",insights:["Bathing central to Roman culture","Similar tools across vast geographic range","Manufacturing standardization evidence"]},
tool2:{name:"Bronze Fibula",value:4,description:"Ornate brooch for fastening clothing. The design indicates regional fashion preferences and metalworking skill.",insights:["Practical yet decorative objects","Regional styles show cultural diversity","Evolution tracks fashion changes"]},
jewelry1:{name:"Gold Aureus Ring",value:20,description:"Finger ring incorporating a gold coin. Demonstrates wealth and possibly political allegiance to the emperor depicted.",insights:["Gold reserved for elite classes","Coin-rings show imperial loyalty","Similar designs across empire suggest workshops"]},
jewelry2:{name:"Carnelian Intaglio",value:19,description:"Carved gemstone seal showing Minerva. Used to stamp documents with personal signature in wax.",insights:["Literacy and legal documentation widespread","Gemstone trade from India and Arabia","Iconography reveals religious preferences"]},
tablet1:{name:"Wax Tablet Stylus",value:7,description:"Bronze writing implement for inscribing letters in wax-filled wooden tablets. Evidence of daily correspondence.",insights:["High literacy rates in urban areas","Reusable writing surfaces economical","Business records and letters preserved"]},
tablet2:{name:"Lead Curse Tablet",value:50,description:"Inscribed lead sheet from a sacred spring. Contains a curse requesting divine punishment for a thief.",insights:["Personal religious practices documented","Latin literacy across social classes","Magic and religion intertwined"]},
sculpture1:{name:"Marble Portrait Bust",value:24,description:"Life-sized head of a Roman matron. Hairstyle dates it to the Flavian period, showing fashion as chronological marker.",insights:["Portraiture emphasized social status","Hairstyles changed rapidly, aiding dating","Imported Greek marble for wealthy patrons"]},
sculpture2:{name:"Terracotta Figurine",value:4,description:"Small household deity or decorative figure. Mass-produced for the lower classes to display in home shrines.",insights:["Religious practice at all economic levels","Standardized production for mass market","Regional deities alongside Roman pantheon"]},
seal1:{name:"Imperial Bulla",value:22,description:"Gold pendant worn by freeborn children until coming of age. Protective amulet and status symbol.",insights:["Life-stage rituals marked by objects","Gold bullae exclusive to upper classes","Protective magic widespread belief"]},
seal2:{name:"Signaculum Stamp",value:10,description:"Bronze seal for marking ownership of goods. Inscribed name proves literacy and commercial activity.",insights:["Personal property protection important","Commercial networks required identification","Administrative systems relied on seals"]},
weapon1:{name:"Gladius Hispaniensis",value:23,description:"Short sword used by Roman legionaries. Superior iron-working technology gave Rome military advantage.",insights:["Standardized military equipment","Iron technology from Celtic influences","Found in burial contexts shows veteran status"]},
weapon2:{name:"Pilum Head",value:10,description:"Javelin point designed to bend on impact, preventing reuse by enemies. Engineering innovation in warfare.",insights:["Military tactics drove technological innovation","Standardization across legions","Metalworking prowess of empire"]},
mosaic1:{name:"Geometric Mosaic Tessera",value:18,description:"Small colored stone cube from a floor mosaic. Geometric patterns decorated middle-class homes.",insights:["Artistic styles spread empire-wide","Local workshops copied elite fashions","Mathematics in decorative arts"]},
mosaic2:{name:"Figured Mosaic Panel",value:40,description:"Mythological scene depicting Neptune. Complex figural mosaics required master craftsmen and wealthy patrons.",insights:["Greek mythology remained culturally dominant","Workshop signatures sometimes preserved","Similar iconography across provinces shows cultural unity"]},
lamp1:{name:"Terracotta Oil Lamp",value:3,description:"Mass-produced clay lamp with maker's stamp. Artificial lighting extended productive hours and social activities.",insights:["Factory production of household goods","Maker's marks track commercial networks","Design standardization across empire"]},
lamp2:{name:"Bronze Lucerna",value:8,description:"Multi-nozzle bronze lamp for wealthy households. More expensive and decorative than ceramic versions.",insights:["Material wealth visible in daily objects","Bronze lamps could be heirlooms","Decorative motifs show personal taste"]},
fresco1:{name:"Pompeian Red Fresco",value:21,description:"Wall painting fragment showing architectural illusion. Fourth Pompeian Style with elaborate fantasy architecture.",insights:["Interior decoration priority for Romans","Painting styles evolved over time","Volcanic preservation unique opportunity"]},
fresco2:{name:"Garden Scene Fresco",value:20,description:"Naturalistic painting of plants and birds. Romans brought nature indoors through trompe-l'oeil artworks.",insights:["Nature scenes created peaceful ambiance","Greek artistic influence strong","Pigments imported from across empire"]},
glass1:{name:"Blown Glass Unguentarium",value:8,description:"Small glass bottle for perfumes or oils. Glass-blowing revolution made glass affordable for middle classes.",insights:["Syrian innovation spread rapidly","Recycled glass common practice","Perfume trade from Arabia"]},
glass2:{name:"Millefiori Glass Bowl",value:44,description:"Multi-colored mosaic glass vessel. Complex technique requiring specialized knowledge and expensive materials.",insights:["Luxury goods for elite display","Mediterranean-wide trade in glass","Technical knowledge closely guarded"]},
inscr1:{name:"Funerary Inscription",value:22,description:"Marble tombstone with deceased's name, age, and profession. Commemorates a freed slave who became a merchant.",insights:["Social mobility possible through commerce","Freed slaves integral to economy","Commemoration important across classes"]},
inscr2:{name:"Building Dedication",value:48,description:"Stone block recording construction of public baths by a wealthy magistrate. Lists benefactor's political offices.",insights:["Public building displayed civic virtue","Political careers documented in stone","Infrastructure funded by private wealth"]},
statue1:{name:"Bronze Statuette of Mercury",value:22,description:"Small bronze figure of the messenger god. Household shrine deity or votive offering at a temple.",insights:["Personal religious devotion documented","Bronze casting widespread skill","Roman and local deities coexisted"]},
statue2:{name:"Venus Figurine",value:9,description:"Terracotta Venus figure from a domestic shrine. Love goddess popular across all social levels.",insights:["Domestic religious practices universal","Female deities prominent in worship","Mass production of religious items"]},
tile1:{name:"Roof Tile with Mark",value:3,description:"Curved clay roof tile stamped with legion name. Military kilns produced standardized building materials.",insights:["Military infrastructure sophisticated","Legions self-sufficient in production","Standardization across provinces"]},
tile2:{name:"Hypocaust Tile",value:7,description:"Box tile from underfloor heating system. Engineering innovation that heated public baths and wealthy homes.",insights:["Advanced engineering for comfort","Roman concrete enabled complex structures","Heating systems show climate adaptation"]},
armor1:{name:"Lorica Segmentata Plate",value:24,description:"Iron plate armor segment from legionary kit. Superior protection through articulated metal strips.",insights:["Military equipment highly specialized","Iron industry enormous scale","Standardized legionary appearance"]},
armor2:{name:"Bronze Scale Armor",value:20,description:"Overlapping bronze scales sewn to fabric backing. Used by auxiliary cavalry and eastern legions.",insights:["Regional military traditions incorporated","Auxiliary units brought diverse equipment","Scale armor eastern origin"]},
medical1:{name:"Bronze Surgical Probe",value:9,description:"Medical instrument for wound examination and treatment. Roman medicine surprisingly advanced.",insights:["Professional medical practitioners widespread","Greek medical knowledge adopted","Surgical tools sophisticated"]},
medical2:{name:"Collyrium Stamp",value:19,description:"Stone stamp for eye medicine. Inscription names the physician and medication for specific conditions.",insights:["Pharmaceutical knowledge extensive","Doctor's reputation marked on product","Eye diseases common ailment"]},
weight1:{name:"Lead Steelyard Weight",value:3,description:"Counterweight for Roman balance scales. Standardized weights enabled fair commerce across empire.",insights:["Standardized measurement systems","Commercial regulation by government","Lead abundant and malleable"]},
weight2:{name:"Bronze Measure",value:8,description:"Standard volume measure for grain sales. Stamped with official verification to prevent fraud.",insights:["Government regulated commerce","Grain supply critical to stability","Bronze durability ensured accuracy"]},
dice1:{name:"Bone Gaming Die",value:4,description:"Six-sided die carved from animal bone. Gaming and gambling popular across all social classes.",insights:["Leisure activities universal","Games spread throughout empire","Similar forms to modern dice"]},
dice2:{name:"Loaded Lead Die",value:8,description:"Weighted die for cheating at games. Evidence that gambling fraud is ancient practice.",insights:["Human behavior consistent across time","Gaming important social activity","Cheating prompted regulations"]},
key1:{name:"Bronze Door Key",value:4,description:"L-shaped key for tumbler lock. Roman locks surprisingly sophisticated with complex mechanisms.",insights:["Security concerns in urban areas","Lock technology advanced","Personal property protection"]},
key2:{name:"Iron Chest Lock",value:7,description:"Locking mechanism from strongbox. Wealthy households secured valuables with complex locks.",insights:["Wealth security paramount","Metalworking enabled complex mechanisms","Locksmithing specialized profession"]},
mirror1:{name:"Polished Bronze Mirror",value:19,description:"Hand mirror with decorated handle. Personal grooming important to Romans of both genders.",insights:["Appearance valued across genders","Bronze polishing sophisticated technique","Greek influence on personal care"]},
mirror2:{name:"Silver Hand Mirror",value:42,description:"Ornate silver mirror with mythological scene. Luxury item demonstrating exceptional wealth and craftsmanship.",insights:["Silver reserved for elite","Greek artisans employed by wealthy","Mythology in everyday objects"]},
tool3:{name:"Iron Hoe Blade",value:4,description:"Agricultural tool from rural villa. Iron tools increased farming efficiency and productivity.",insights:["Agriculture backbone of economy","Iron tools widespread by empire","Rural life contrasts urban"]},
tool4:{name:"Surveying Groma",value:24,description:"Bronze surveying instrument for laying out straight roads and property boundaries. Roman engineering precision.",insights:["Engineering created empire infrastructure","Geometry applied practically","Standardized tools across provinces"]},
jewelry3:{name:"Glass Bead Necklace",value:4,description:"Colorful glass beads strung together. Affordable jewelry for lower classes after glass-blowing invention.",insights:["Fashion accessible to all classes","Glass industry democratized luxury","Color preferences show personal taste"]},
jewelry4:{name:"Emerald Earrings",value:100,description:"Gold earrings set with Egyptian emeralds. Extreme luxury indicating highest social status and wealth.",insights:["Gemstone trade from Egypt and beyond","Gold jewelry status symbol","Elite fashion influenced all classes"]},
pottery3:{name:"Samian Ware Cup",value:3,description:"Red-gloss drinking vessel with relief decoration. Standard tableware found across Western provinces.",insights:["Standardized tableware empire-wide","Gaulish pottery industry massive scale","Style preferences spread through trade"]},
pottery4:{name:"African Red Slip Dish",value:9,description:"North African fine ware that replaced Samian pottery. Shift shows changing trade patterns in late empire.",insights:["Economic centers shifted over time","North African industry rose","Trade patterns reveal historical changes"]},
book1:{name:"Stylus and Wax Tablet",value:9,description:"Complete writing set with bronze stylus and wooden frame holding wax. Personal correspondence and accounts.",insights:["Literacy valued skill","Writing materials portable","Business records essential"]},
book2:{name:"Papyrus Fragment",value:46,description:"Egyptian papyrus with Latin text. Rare survival of perishable material preserves actual Roman handwriting.",insights:["Egypt supplied writing material","Dry climate preserved organics","Cursive script evolved regionally"]}
};
const RESEARCH_TREE={
tier1:[
{id:'dig1',name:'Enhanced Digging',cost:30,effect:'Dig 1x2 area',tier:1,unlocked:false,prereqs:[],x:100,y:50},
{id:'reveal1',name:'Lucky Finds',cost:30,effect:'20% chance to reveal artifacts',tier:1,unlocked:false,prereqs:[],x:350,y:50},
{id:'layers1',name:'Layer Insight',cost:40,effect:'See 2 layers at once',tier:1,unlocked:false,prereqs:[],x:600,y:50}
],
tier2:[
{id:'dig2',name:'Wider Excavation',cost:50,effect:'Dig 2x2 area',tier:2,unlocked:false,prereqs:['dig1'],x:100,y:150},
{id:'reveal2',name:'Marked Treasures',cost:60,effect:'30% reveal chance, ! on artifacts',tier:2,unlocked:false,prereqs:['reveal1'],x:350,y:150},
{id:'layers2',name:'Deep Vision',cost:60,effect:'See 3 layers at once',tier:2,unlocked:false,prereqs:['layers1'],x:600,y:150}
],
tier3:[
{id:'dig3',name:'Broad Digging',cost:80,effect:'Dig 3x2 area',tier:3,unlocked:false,prereqs:['dig2'],x:100,y:250},
{id:'reveal3',name:'Fortune Seeker',cost:100,effect:'40% reveal chance',tier:3,unlocked:false,prereqs:['reveal2'],x:350,y:250},
{id:'layers3',name:'Archaeologist\'s Eye',cost:120,effect:'See 4 layers at once',tier:3,unlocked:false,prereqs:['layers2'],x:600,y:250}
],
tier4:[
{id:'dig4',name:'Mass Excavation',cost:150,effect:'Dig 3x3 area',tier:4,unlocked:false,prereqs:['dig3'],x:100,y:350},
{id:'reveal4',name:'Treasure Hunter',cost:200,effect:'50% reveal chance',tier:4,unlocked:false,prereqs:['reveal3'],x:350,y:350},
{id:'layers4',name:'Ancient Secrets',cost:240,effect:'See 5 layers at once',tier:4,unlocked:false,prereqs:['layers3'],x:600,y:350}
],
tier5:[
{id:'dig5',name:'Ultimate Excavator',cost:300,effect:'Dig 4x3 area',tier:5,unlocked:false,prereqs:['dig4'],x:225,y:450},
{id:'reveal5',name:'Master Archaeologist',cost:400,effect:'60% reveal chance',tier:5,unlocked:false,prereqs:['reveal4'],x:450,y:450},
{id:'victory',name:'Dig Victory',cost:600,effect:'FINAL: Mission Complete!',tier:5,unlocked:false,prereqs:['dig5','reveal5','layers4'],x:337,y:550}
]
};

const TUTORIAL_STEPS=[
{text:"Welcome to Rune Hunters! You're an archaeologist studying ancient Roman civilization. Your mission is to excavate artifacts and learn about the past."},
{text:"Archaeology is the study of human history through excavation and analysis of artifacts and structures. Each discovery helps us understand how people lived thousands of years ago."},
{text:"Move around using your movement keys. The map shows your research base and surrounding areas where dig sites will appear."},
{text:"Dig sites appear each day at 9 AM. Visit them during the day to excavate layered trenches."},
{text:"The central building is your Research Laboratory. Visit it to document your artifacts and earn Research Points!"},
{text:"When ready to sleep, enter your Camp building at night. This starts a new day with fresh dig sites. Time to begin your journey!"}
];

const splashTexts = [
  "Digging artifacts",
  "Unearthing history",
  "Excavating the past",
  "Discovering ancient secrets",
  "Archaeology in action",
  "Finding lost civilizations",
  "Revealing Roman mysteries",
  "Uncovering historical treasures",
  "Exploring ancient ruins",
  "Preserving the past"
];

function startLoadingSequence() {
  const loadingElement = document.getElementById('loadingScreen');
  const textElement = loadingElement.querySelector('p');

  // Create a container for better layout control
  const loadingContainer = document.createElement('div');
  loadingContainer.style.display = 'flex';
  loadingContainer.style.flexDirection = 'column';
  loadingContainer.style.alignItems = 'center';
  loadingContainer.style.justifyContent = 'center';
  loadingContainer.style.gap = '15px';

  // Create progress bar container
  const progressElement = document.createElement('div');
  progressElement.style.width = '200px';
  progressElement.style.height = '10px';
  progressElement.style.background = 'rgba(255, 215, 0, 0.3)';
  progressElement.style.borderRadius = '5px';
  progressElement.style.overflow = 'hidden';

  const progressBar = document.createElement('div');
  progressBar.style.width = '0%';
  progressBar.style.height = '100%';
  progressBar.style.background = '#ffd700';
  progressBar.style.transition = 'width 0.3s ease';
  progressElement.appendChild(progressBar);

  // Style the text element for centered display below progress bar
  textElement.style.display = 'block';
  textElement.style.textAlign = 'center';
  textElement.style.margin = '0';
  textElement.style.fontSize = '18px';
  textElement.textContent = 'Loading Rune Hunters...';

  // Assemble the container
  loadingContainer.appendChild(progressElement);
  loadingContainer.appendChild(textElement);

  // Clear loading screen and add our container
  loadingElement.innerHTML = '';
  loadingElement.appendChild(loadingContainer);

  return {
    updateProgress: (percent) => {
      progressBar.style.width = `${Math.min(100, percent)}%`;
    },
    setMessage: (message) => {
      textElement.textContent = message;
    }
  };
}

function getTutorialText(stepIndex) {
  const baseText = TUTORIAL_STEPS[stepIndex].text;

  if (stepIndex === 2) {
    if (game.controlScheme === 'touch') {
      return "Use the on-screen joystick to move around. The map shows your research base and surrounding areas where dig sites will appear.";
    } else {
      return "Use your movement keys to move around. The map shows your research base and surrounding areas where dig sites will appear.";
    }
  }

  if (stepIndex === 3) {
    if (game.controlScheme === 'touch') {
      return "Dig sites appear each day at 9 AM. Tap the center button to enter them during the day and excavate layered trenches.";
    } else {
      return "Dig sites appear each day at 9 AM. Press E to enter them during the day and excavate layered trenches.";
    }
  }

  if (stepIndex === 4) {
    if (game.controlScheme === 'touch') {
      return "The central building is your Research Laboratory. Tap the center button to enter and document your artifacts to earn Research Points!";
    } else {
      return "The central building is your Research Laboratory. Press E to enter and document your artifacts to earn Research Points!";
    }
  }

  if (stepIndex === 5) {
    if (game.controlScheme === 'touch') {
      return "When ready to sleep, tap the center button to enter your Camp building at night. This starts a new day with fresh dig sites. Time to begin your journey!";
    } else {
      return "When ready to sleep, press E to enter your Camp building at night. This starts a new day with fresh dig sites. Time to begin your journey!";
    }
  }

  return baseText;
}

function handleDpadPress(event, direction) {
  event.preventDefault();
  const dirs = direction.split('-');
  dirs.forEach(dir => {
    const key = game.keybinds[dir][0];
    game.keys[key] = true;
  });
}

function handleDpadRelease(event, direction) {
  event.preventDefault();
  const dirs = direction.split('-');
  dirs.forEach(dir => {
    const key = game.keybinds[dir][0];
    game.keys[key] = false;
  });
}

function handleJoystickCenterPress(event) {
  event.preventDefault();
  const key = game.keybinds.interact[0];
  game.keys[key] = true;
}

function handleJoystickCenterRelease(event) {
  event.preventDefault();
  const key = game.keybinds.interact[0];
  game.keys[key] = false;
}

function setupJoystick() {
  const joystickBase = document.getElementById('joystick-base');
  const joystickHandle = document.getElementById('joystick-handle');
  const joystickContainer = document.querySelector('.joystick-container');

  let isDragging = false;
  let touchId = null;
  let maxRadius = 40;

  function handleTouchStart(e) {
    if (e.touches.length > 1) return;

    const touch = e.touches[0];
    const rect = joystickContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Check if touch is within the joystick base
    const distance = Math.sqrt(Math.pow(touch.clientX - centerX, 2) + Math.pow(touch.clientY - centerY, 2));
    if (distance <= rect.width / 2) {
      isDragging = true;
      touchId = touch.identifier;
      e.preventDefault();
    }
  }

  function handleTouchMove(e) {
    if (!isDragging || touchId === null) return;

    const touch = Array.from(e.touches).find(t => t.identifier === touchId);
    if (!touch) return;

    const rect = joystickContainer.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate position relative to center
    let dx = touch.clientX - centerX;
    let dy = touch.clientY - centerY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Constrain to max radius
    if (distance > maxRadius) {
      const ratio = maxRadius / distance;
      dx *= ratio;
      dy *= ratio;
    }

    // Update handle position
    joystickHandle.style.transform = `translate(${dx}px, ${dy}px)`;

    // Calculate angle and determine direction
    const angle = Math.atan2(-dy, dx);
    const degrees = angle * (180 / Math.PI);

    // Clear all directional keys
    Object.keys(game.keybinds).forEach(dir => {
      if (dir !== 'interact' && dir !== 'return') {
        game.keybinds[dir].forEach(key => {
          if (key) game.keys[key] = false;
        });
      }
    });

    // Determine which direction(s) to activate based on angle
    if (distance > 10) { // Dead zone
      const sectors = [
        { min: -22.5, max: 22.5, dirs: ['right'] },
        { min: 22.5, max: 67.5, dirs: ['up', 'right'] },
        { min: 67.5, max: 112.5, dirs: ['up'] },
        { min: 112.5, max: 157.5, dirs: ['up', 'left'] },
        { min: 157.5, max: 180, dirs: ['left'] },
        { min: -180, max: -157.5, dirs: ['left'] },
        { min: -157.5, max: -112.5, dirs: ['down', 'left'] },
        { min: -112.5, max: -67.5, dirs: ['down'] },
        { min: -67.5, max: -22.5, dirs: ['down', 'right'] }
      ];

      const sector = sectors.find(s =>
        (degrees >= s.min && degrees <= s.max) ||
        (s.min < 0 && s.max < 0 && degrees >= s.min && degrees <= s.max)
      );

      if (sector) {
        sector.dirs.forEach(dir => {
          const key = game.keybinds[dir][0];
          if (key) game.keys[key] = true;
        });
      }
    }

    e.preventDefault();
  }

  function handleTouchEnd(e) {
    if (!isDragging || touchId === null) return;

    // Reset handle position
    joystickHandle.style.transform = 'translate(0px, 0px)';

    // Clear all directional keys
    Object.keys(game.keybinds).forEach(dir => {
      if (dir !== 'interact' && dir !== 'return') {
        game.keybinds[dir].forEach(key => {
          if (key) game.keys[key] = false;
        });
      }
    });

    isDragging = false;
    touchId = null;
  }

  // Add event listeners
  joystickBase.addEventListener('touchstart', handleTouchStart, { passive: false });
  document.addEventListener('touchmove', handleTouchMove, { passive: false });
  document.addEventListener('touchend', handleTouchEnd);
  document.addEventListener('touchcancel', handleTouchEnd);
}

function updateJoystickVisibility() {
  const joystick = document.getElementById('joystick');
  const modals = ['settingsModal', 'controlsModal', 'artifactModal', 'documentationModal', 'sleepModal', 'researchTreeModal', 'questBoardModal', 'creditsModal', 'missionCompleteModal', 'lateNightModal', 'confirmModal', 'howToPlayModal', 'controlSchemeModal'];
  const modalOpen = modals.some(id => document.getElementById(id).style.display === 'flex');
  if (game.controlScheme === 'touch' && !modalOpen) {
    joystick.style.display = 'block';
    if (!joystickSetupComplete) {
      setupJoystick();
      joystickSetupComplete = true;
    }
  } else {
    joystick.style.display = 'none';
  }
  game.zoomScale = 1.0;
}

function saveGame() {
  const saveData = {
    player: game.player,
    inventory: game.inventory,
    documentedArtifacts: game.documentedArtifacts,
    researchPoints: game.researchPoints,
    time: game.time,
    keybinds: game.keybinds,
    tutorialActive: game.tutorialActive,
    tutorialStep: game.tutorialStep,
    questProgress: game.questProgress,
    controlScheme: game.controlScheme,
    zoomScale: game.zoomScale,
    unlockedResearches: []
  };
  for(const tierKey in RESEARCH_TREE){
    RESEARCH_TREE[tierKey].forEach(upgrade => {
      if(upgrade.unlocked){
        saveData.unlockedResearches.push(upgrade.id);
      }
    });
  }
  localStorage.setItem('runehunters_save', JSON.stringify(saveData));
}

function loadGame() {
  const saved = localStorage.getItem('runehunters_save');
  if(saved){
    const saveData = JSON.parse(saved);
    Object.assign(game.player, saveData.player);
    game.inventory = saveData.inventory || {};
    game.documentedArtifacts = saveData.documentedArtifacts || {};
    game.researchPoints = saveData.researchPoints || 0;
    Object.assign(game.time, saveData.time);
    game.keybinds = saveData.keybinds || game.keybinds;
    game.tutorialActive = saveData.tutorialActive || false;
    game.tutorialStep = saveData.tutorialStep || 0;
    game.questProgress = saveData.questProgress || game.questProgress;
    game.controlScheme = saveData.controlScheme || 'keyboard';
    game.zoomScale = saveData.zoomScale || 1.0;
    if(saveData.unlockedResearches){
      saveData.unlockedResearches.forEach(id => {
        const upgrade = findResearchById(id);
        if(upgrade){
          upgrade.unlocked = true;
        }
      });
    }
  }
}

function showControlSchemeSelector() {
  document.getElementById('controlSchemeModal').style.display = 'flex';
  const selectedRadio = document.querySelector(`input[name="controlScheme"][value="${game.controlScheme}"]`);
  if (selectedRadio) {
    selectedRadio.checked = true;
  }
  updateJoystickVisibility();
}
let game={
state:'town',
scene:'overworld',
player:{x:(MAP_WIDTH/2)*TILE_SIZE,y:(MAP_HEIGHT/2)*TILE_SIZE,speed:8,dx:0,dy:1,walkFrame:0,walkCounter:0,isWalking:false},
map:[],
mapObjects:[],
ambianceElements:[],
backgroundElements:[],
digsites:[],
paths:[],
currentDigsite:null,
inventory:{},
documentedArtifacts:{},
researchPoints:0,
time:{hour:9,minute:0,day:1,frameCounter:0},
keys:{},
keybinds:{up:['w','arrowup'],down:['s','arrowdown'],left:['a','arrowleft'],right:['d','arrowright'],interact:['e',''],return:['r','']},
tutorialActive:false,
tutorialStep:0,
offsetX:0,
offsetY:0,
isNight:false,
nightOpacity:0,
timeFrozen:false,
lateNightWarningShown:false,
labPopupShown:false,
questProgress:{totalCollected:0,totalDigsites:0},
currentKeybindChange:null,
currentKeybindSlot:null,
controlScheme:'keyboard',
zoomScale:1.0,
interactPressed:false
};
let joystickSetupComplete = false;
const canvas=document.getElementById('gameCanvas');
const ctx=canvas.getContext('2d');
function resizeCanvas(){
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
}
function createMap(){
const map=Array(MAP_HEIGHT).fill(null).map(()=>Array(MAP_WIDTH).fill('g'));
const buildings = [
{type: 'b', width: 7, height: 5}, // lab
{type: 'h', width: 5, height: 5}  // camp
];
const placedBuildings = [];
for(const building of buildings){
let placed = false;
let attempts = 0;
while(!placed && attempts < 100){
const x = Math.floor(Math.random() * (MAP_WIDTH - building.width - 4)) + 2;
const y = Math.floor(Math.random() * (MAP_HEIGHT - building.height - 4)) + 2;
const distFromCenter = Math.sqrt(Math.pow(x + building.width/2 - MAP_WIDTH/2, 2) + Math.pow(y + building.height/2 - MAP_HEIGHT/2, 2));
if(distFromCenter > 10){
let clear = true;
for(let dy = 0; dy < building.height; dy++){
for(let dx = 0; dx < building.width; dx++){
if(map[y + dy][x + dx] !== 'g') clear = false;
}
}
let tooClose = false;
for (const pb of placedBuildings) {
  if (!(x + building.width + 2 <= pb.x || pb.x + pb.width + 2 <= x ||
        y + building.height + 2 <= pb.y || pb.y + pb.height + 2 <= y)) {
    tooClose = true;
    break;
  }
}
if(clear && !tooClose){
for(let dy = 0; dy < building.height; dy++){
for(let dx = 0; dx < building.width; dx++){
map[y + dy][x + dx] = building.type;
}
}
placedBuildings.push({x, y, width: building.width, height: building.height, type: building.type});
placed = true;
}
}
attempts++;
}
}
return map;
}
function generatePaths(){
game.paths = [];
}
function MapObject(x,y,type,name){
this.x=x;
this.y=y;
this.type=type;
this.name=name;
this.collider={x:x-10,y:y-10,w:20,h:20};
}
function isPositionBlocked(x,y){
if(x<0||x>=MAP_WIDTH||y<0||y>=MAP_HEIGHT)return true;
const tileType=game.map[y][x];
return tileType==='b'||tileType==='h'||tileType==='d'||tileType==='w';
}
function isBlockedForObject(x,y){
if(game.map[y][x] !== 'g') return true;
// Check buildings
if(game.map[y][x] === 'b' || game.map[y][x] === 'h') return true;
// Check distance to other trees and rocks
for(const obj of game.mapObjects){
if(Math.abs(obj.x/TILE_SIZE - x) <=1 && Math.abs(obj.y/TILE_SIZE - y) <=1) return true;
}
for(const amb of game.ambianceElements){
if(Math.abs(amb.x/TILE_SIZE - x) <=1 && Math.abs(amb.y/TILE_SIZE - y) <=1) return true;
}
return false;
}
function generateMapObjects(){
game.mapObjects=[];
const treeCount=Math.floor(MAP_WIDTH*MAP_HEIGHT/80); // Further reduced from /60 to /80
for(let i=0;i<treeCount;i++){
let x,y,attempts=0;
do{
x= Math.floor(Math.random()*MAP_WIDTH);
y= Math.floor(Math.random()*MAP_HEIGHT);
attempts++;
if(attempts>1000)break;
}while(game.map[y][x]!=='g' || isBlockedForObject(x,y));
if(game.map[y][x]==='g' && !isBlockedForObject(x,y)){
game.mapObjects.push(new MapObject(x*TILE_SIZE+TILE_SIZE/2,y*TILE_SIZE+TILE_SIZE/2,'tree','Tree'));
}
}
}
function generateAmbiance(){
game.ambianceElements=[];
const rockCount=Math.floor(MAP_WIDTH*MAP_HEIGHT/70); // Reduced from /35 to /70
for(let i=0;i<rockCount;i++){
let x,y,attempts=0;
do{
x= Math.floor(Math.random()*MAP_WIDTH);
y= Math.floor(Math.random()*MAP_HEIGHT);
attempts++;
if(attempts>1000)break;
}while(game.map[y][x]!=='g' || isBlockedForObject(x,y));
if(game.map[y][x]==='g' && !isBlockedForObject(x,y)){
game.ambianceElements.push({x:x*TILE_SIZE+TILE_SIZE/2,y:y*TILE_SIZE+TILE_SIZE/2,type:'rock'});
}
}
}
function generateBackgroundElements(){
game.backgroundElements=[];
for(let i=0;i<10;i++){ // Reduced from 15 to 10
game.backgroundElements.push({x:Math.random()*(MAP_WIDTH*TILE_SIZE),y:Math.random()*(MAP_HEIGHT*TILE_SIZE*0.4),type:'column',height:80+Math.random()*40});
}
for(let i=0;i<5;i++){ // Reduced from 8 to 5
game.backgroundElements.push({x:Math.random()*(MAP_WIDTH*TILE_SIZE),y:Math.random()*(MAP_HEIGHT*TILE_SIZE*0.4),type:'arch',width:60+Math.random()*40});
}
game.backgroundElements.push({x:MAP_WIDTH*TILE_SIZE*0.8,y:MAP_HEIGHT*TILE_SIZE*0.15,type:'colosseum'});
}
function generateDigsites(){
for(let y=0;y<MAP_HEIGHT;y++){
for(let x=0;x<MAP_WIDTH;x++){
if(game.map[y][x]==='d'||game.map[y][x]==='w'){
game.map[y][x]='g';
}
}
}
game.digsites=[];
const existingDigsites=game.digsites.filter(d=>d.completed===false);
const newSitesNeeded=4-existingDigsites.length;
for(let i=0;i<newSitesNeeded;i++){
let placed=false;
let attempts=0;
while(!placed&&attempts<100){
const x=Math.floor(Math.random()*(MAP_WIDTH-5))+2;
const y=Math.floor(Math.random()*(MAP_HEIGHT-5))+2;
const distFromCenter=Math.sqrt(Math.pow(x-21,2)+Math.pow(y-12,2));
const width = 3;
const height = 3;
let isClear=distFromCenter>10;
if(isClear){
for(let dy=0;dy<height;dy++){
for(let dx=0;dx<width;dx++){
if(game.map[y+dy]&&game.map[y+dy][x+dx]!=='g'){
isClear=false;
}
}
}
}
if(isClear){
for(let dy=0;dy<height;dy++){
for(let dx=0;dx<width;dx++){
game.map[y+dy][x+dx]='d';
}
}
const layers = 5 + Math.floor(Math.random() * 6);
game.digsites.push({x:x+1,y:y+1,completed:false,grid:null,layers:layers,width:width,height:height});
placed=true;
}
attempts++;
}
}
generatePaths();
}
function generateDigsiteContent(digsite){
const rows=digsite.layers;
const cols = 15;
digsite.grid=Array(rows).fill(null).map(()=>Array(cols).fill(null));
digsite.artifactCount=0;
digsite.dirtCount=0;
digsite.currentLayer=0;
const artifactTypes=Object.keys(ARTIFACTS);
const numArtifacts=Math.floor(rows*cols*0.15);
for(let i=0;i<numArtifacts;i++){
let placed=false;
while(!placed){
const x=Math.floor(Math.random()*cols);
const y=Math.floor(Math.random()*rows);
if(digsite.grid[y][x]===null){
const artifactType=artifactTypes[Math.floor(Math.random()*artifactTypes.length)];
digsite.grid[y][x]=artifactType;
digsite.artifactCount++;
placed=true;
}
}
}
digsite.dirtCount=(rows*cols)-digsite.artifactCount;
digsite.dugCells=Array(rows).fill(null).map(()=>Array(cols).fill(false));
}
function drawMap(){
const startTileX = Math.max(0, Math.floor(-game.offsetX / TILE_SIZE) - 1);
const endTileX = Math.min(MAP_WIDTH, Math.ceil((-game.offsetX + canvas.width) / TILE_SIZE) + 1);
const startTileY = Math.max(0, Math.floor(-game.offsetY / TILE_SIZE) - 1);
const endTileY = Math.min(MAP_HEIGHT, Math.ceil((-game.offsetY + canvas.height) / TILE_SIZE) + 1);
for(let y=startTileY;y<endTileY;y++){
for(let x=startTileX;x<endTileX;x++){
const tileX=x*TILE_SIZE+game.offsetX;
const tileY=y*TILE_SIZE+game.offsetY;
let color;
switch(game.map[y][x]){
case'g':color='#6b8e4e';break;
case'p':color='#a89070';break;
case'b':color='#8b7355';break;
case'h':color='#7a6a5a';break;
case'd':color='#d4a574';break;
default:color='#6b8e4e';
}
ctx.fillStyle=color;
ctx.fillRect(tileX,tileY,TILE_SIZE,TILE_SIZE);
if(game.map[y][x]==='b'){
const top = (y === 0 || game.map[y-1][x] !== 'b');
const bottom = (y === MAP_HEIGHT-1 || game.map[y+1][x] !== 'b');
const wallColor = '#A09070'; // pale tan
const roofColor = '#B06060'; // muted red
if (top) {
ctx.fillStyle=roofColor;
ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
} else if (bottom) {
ctx.fillStyle=wallColor;
ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
// Door
ctx.fillStyle='#654321';
ctx.fillRect(tileX+12, tileY+16, 8, 16);
} else {
ctx.fillStyle=wallColor;
ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
// Windows
ctx.fillStyle='rgba(0,0,0,0.4)';
ctx.fillRect(tileX+4, tileY+8, 6,6);
ctx.fillRect(tileX+12, tileY+8, 6,6);
ctx.fillRect(tileX+20, tileY+8, 6,6);
ctx.fillRect(tileX+4, tileY+18, 6,6);
ctx.fillRect(tileX+20, tileY+18, 6,6);
}
// Outline
ctx.strokeStyle='#654321';
ctx.lineWidth=1;
ctx.strokeRect(tileX,tileY,TILE_SIZE,TILE_SIZE);
}
if(game.map[y][x]==='h'){
const top = (y === 0 || game.map[y-1][x] !== 'h');
const bottom = (y === MAP_HEIGHT-1 || game.map[y+1][x] !== 'h');
const wallColor = '#708070'; // pale sage
const roofColor = '#F4A460'; // sandy brown
if (top) {
ctx.fillStyle=roofColor;
ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
} else if (bottom) {
ctx.fillStyle=wallColor;
ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
// Door
ctx.fillStyle='#0F5132';
ctx.fillRect(tileX+12, tileY+16, 8, 16);
} else {
ctx.fillStyle=wallColor;
ctx.fillRect(tileX, tileY, TILE_SIZE, TILE_SIZE);
// Windows
ctx.fillStyle='rgba(0,0,0,0.4)';
ctx.fillRect(tileX+4, tileY+8, 6,6);
ctx.fillRect(tileX+12, tileY+8, 6,6);
ctx.fillRect(tileX+20, tileY+8, 6,6);
ctx.fillRect(tileX+4, tileY+18, 6,6);
ctx.fillRect(tileX+20, tileY+18, 6,6);
}
// Outline
ctx.strokeStyle='#0F5132';
ctx.lineWidth=1;
ctx.strokeRect(tileX,tileY,TILE_SIZE,TILE_SIZE);
}
ctx.fillStyle='#f4e4c1';
ctx.font='bold 18px Comfortaa';
ctx.textAlign='center';
function isRoofTile(y, x, type) {
  return game.map[y][x] === type && (y === 0 || game.map[y-1][x] !== type);
}
const buildingTitles = {'b': 'Lab', 'h': 'Camp'};
for(const type in buildingTitles){
  const title = buildingTitles[type];
  const chars = title.split('');
  let roofTiles = [];
  for(let y=0; y<MAP_HEIGHT; y++){
    for(let x=0; x<MAP_WIDTH; x++){
      if(isRoofTile(y, x, type)){
        roofTiles.push({x, y});
      }
    }
  }
  roofTiles.sort((a,b)=>a.x - b.x);
  for(let i=0; i<chars.length && i<roofTiles.length; i++){
    const tile = roofTiles[i];
    const tileX = tile.x * TILE_SIZE + game.offsetX;
    const tileY = tile.y * TILE_SIZE + game.offsetY;
    ctx.fillText(chars[i], tileX + TILE_SIZE/2, tileY + TILE_SIZE/2);
  }
}
}
}
game.digsites.forEach(site=>{
if(site.completed)return;
const centerX=site.x*TILE_SIZE+game.offsetX;
const centerY=site.y*TILE_SIZE+game.offsetY;
ctx.fillStyle='rgba(0,0,0,0.3)';
ctx.fillRect(centerX-TILE_SIZE,centerY+TILE_SIZE/2,TILE_SIZE*3,TILE_SIZE);
ctx.fillStyle='#f4e4c1';
ctx.font='bold 16px Comfortaa';
ctx.textAlign='center';
ctx.fillText('Dig Site',centerX+TILE_SIZE/2,centerY+TILE_SIZE*2-8);
});

}
function drawAmbiance(){
game.ambianceElements.forEach(amb=>{
const drawX=amb.x+game.offsetX;
const drawY=amb.y+game.offsetY;
if(amb.type==='rock'){
ctx.fillStyle='#7a7a7a';
ctx.beginPath();
ctx.arc(drawX,drawY,5,0,Math.PI*2);
ctx.fill();
ctx.fillStyle='#6a6a6a';
ctx.beginPath();
ctx.arc(drawX+3,drawY+3,3,0,Math.PI*2);
ctx.fill();
}
});
}
function drawMapObjects(){
game.mapObjects.sort((a,b)=>a.y-b.y);
game.mapObjects.forEach(obj=>{
const drawX=obj.x+game.offsetX;
const drawY=obj.y+game.offsetY;
if(obj.type==='tree'){
ctx.fillStyle='#5a4a3a';
ctx.fillRect(drawX-4,drawY+5,8,15);
ctx.fillStyle='#3a5a3a';
ctx.beginPath();
ctx.arc(drawX,drawY,15,0,Math.PI*2);
ctx.fill();
ctx.arc(drawX-8,drawY+5,10,0,Math.PI*2);
ctx.fill();
ctx.arc(drawX+8,drawY+5,10,0,Math.PI*2);
ctx.fill();
}
});
}
function drawPlayer(){
if(game.state==='digsite')return;
const size=24;
const x=canvas.width/2;
const y=canvas.height/2;
if(game.player.isWalking){
game.player.walkCounter++;
if(game.player.walkCounter>=8){
game.player.walkFrame=(game.player.walkFrame+1)%4;
game.player.walkCounter=0;
}
}else{
game.player.walkFrame=0;
game.player.walkCounter=0;
}
let leftLegOffset=0;
let rightLegOffset=0;
if(game.player.walkFrame===1){
leftLegOffset=3;
rightLegOffset=-3;
}else if(game.player.walkFrame===3){
leftLegOffset=-3;
rightLegOffset=3;
}
let armSwing=0;
if(game.player.walkFrame===1)armSwing=2;
else if(game.player.walkFrame===3)armSwing=-2;
ctx.fillStyle='rgba(0,0,0,0.3)';
ctx.fillRect(x-10,y+size-2,20,4);
ctx.fillStyle='#d4d4d4';
ctx.fillRect(x-10,y-12,20,18);
ctx.fillStyle='#6a4a3a';
ctx.fillRect(x-12,y-8,24,4);
ctx.fillStyle='#4a3a2a';
ctx.fillRect(x-10,y-4,20,3);
ctx.fillStyle='#d4a574';
ctx.fillRect(x-8,y+6,16,10);
ctx.fillStyle='#c49564';
ctx.fillRect(x-12,y+8-armSwing,4,6);
ctx.fillRect(x+8,y+8+armSwing,4,6);
ctx.fillStyle='#4a5a6a';
ctx.fillRect(x-4,y+8,2,8);
if(leftLegOffset!==0){
ctx.fillRect(x-4,y+16,2,leftLegOffset);
}
ctx.fillRect(x+2,y+8,2,8);
if(rightLegOffset!==0){
ctx.fillRect(x+2,y+16,2,rightLegOffset);
}
ctx.fillStyle='#5a4a3a';
ctx.fillRect(x-5,y+16+leftLegOffset,3,4);
ctx.fillRect(x+2,y+16+rightLegOffset,3,4);
}

function isWalkable(targetX,targetY){
const tileX=Math.floor(targetX/TILE_SIZE);
const tileY=Math.floor(targetY/TILE_SIZE);
if(tileX<0||tileX>=MAP_WIDTH||tileY<0||tileY>=MAP_HEIGHT)return false;
const tileType=game.map[tileY][tileX];
if(tileType==='g'||tileType==='p'||tileType==='d'){
for(const obj of game.mapObjects){
const dx=obj.x-targetX;
const dy=obj.y-targetY;
if(Math.abs(dx)<15&&Math.abs(dy)<15){
return false;
}
}
for(const amb of game.ambianceElements){
const dx=amb.x-targetX;
const dy=amb.y-targetY;
if(Math.abs(dx)<15&&Math.abs(dy)<15){
return false;
}
}
return true;
}
return false;
}
function getInteractionTarget(){
if(game.scene!=='overworld'){
return{type:'exit',name:'Exit Building'};
}
const interactX=game.player.x+(game.player.dx*TILE_SIZE);
const interactY=game.player.y+(game.player.dy*TILE_SIZE);
const tileX=Math.floor(interactX/TILE_SIZE);
const tileY=Math.floor(interactY/TILE_SIZE);
if(tileX>=0&&tileX<MAP_WIDTH&&tileY>=0&&tileY<MAP_HEIGHT){
const tileType=game.map[tileY][tileX];
if(tileType==='b'){
return{type:'building',name:'Research Laboratory',tileX,tileY};
}
if(tileType==='h'){
return{type:'home',name:'Camp',tileX,tileY};
}
if(tileType==='d'){
return{type:'digsite',name:'Archaeological Dig Site',tileX,tileY};
}
}
return null;
}
function drawDigsite(){
const digsite=game.currentDigsite;
if(!digsite)return;
const rows=digsite.layers;
const cols=digsite.grid[0].length;
const cellSize=40;
const gridW=cols*cellSize;
const gridH=rows*cellSize;
const startX=(canvas.width-gridW)/2;
const startY=(canvas.height-gridH)/2;
ctx.fillStyle='#8b7355';
ctx.fillRect(0,0,canvas.width,canvas.height);
for(let y=0;y<rows;y++){
const layerShade=Math.floor(139-y*15);
const layerColor=`rgb(${layerShade},${Math.floor(layerShade*0.8)},${Math.floor(layerShade*0.6)})`;
ctx.fillStyle=layerColor;
ctx.fillRect(startX,startY+y*cellSize,gridW,cellSize);
}
for(let y=0;y<rows;y++){
for(let x=0;x<cols;x++){
const tileX=startX+x*cellSize;
const tileY=startY+y*cellSize;
const isDug=digsite.dugCells[y][x];
if(isDug){
const excavatedShade=Math.floor(160-y*10);
ctx.fillStyle=`rgb(${excavatedShade},${Math.floor(excavatedShade*0.75)},${Math.floor(excavatedShade*0.55)})`;
ctx.fillRect(tileX+2,tileY+2,cellSize-4,cellSize-4);
}else if(y===digsite.currentLayer){
ctx.fillStyle='#6a5545';
ctx.fillRect(tileX+2,tileY+2,cellSize-4,cellSize-4);
ctx.strokeStyle='#5a4535';
ctx.lineWidth=1;
ctx.strokeRect(tileX+2,tileY+2,cellSize-4,cellSize-4);
}else{
ctx.fillStyle='#4a3a2a';
ctx.fillRect(tileX+2,tileY+2,cellSize-4,cellSize-4);
}
}
}
ctx.fillStyle='#f4e4c1';
ctx.font='16px Comfortaa';
ctx.textAlign='center';
ctx.fillText(`Artifacts Remaining: ${digsite.artifactCount} | Layer: ${digsite.currentLayer+1}/${rows}`,canvas.width/2,startY-20);
const interactKey=game.keybinds.interact.filter(k=>k).map(k=>k.toUpperCase()).join(' / ');
ctx.fillText(`Press ${interactKey} to return to base`,canvas.width/2,startY-40);
}
function dig(mouseX,mouseY){
const digsite=game.currentDigsite;
if(!digsite)return;
const rows=digsite.layers;
const cols=digsite.grid[0].length;
const cellSize=40;
const gridW=cols*cellSize;
const gridH=rows*cellSize;
const startX=(canvas.width-gridW)/2;
const startY=(canvas.height-gridH)/2;
const gridX=Math.floor((mouseX-startX)/cellSize);
const gridY=Math.floor((mouseY-startY)/cellSize);
if(gridX>=0&&gridX<cols&&gridY>=0&&gridY<rows){
if(digsite.dugCells[gridY][gridX]){
return;
}
if(gridY!==digsite.currentLayer){
showMessage("You must clear the current layer first!");
return;
}
const x=gridX;
const y=gridY;
const cell=digsite.grid[y][x];
digsite.dugCells[y][x]=true;
if(cell&&cell!=='dug'){
const artifact=ARTIFACTS[cell];
game.inventory[cell]=(game.inventory[cell]||0)+1;
digsite.artifactCount--;
game.questProgress.totalCollected++;
updateQuestProgress();
showArtifactInfo(artifact);
}
let layerComplete=true;
for(let cx=0;cx<cols;cx++){
if(!digsite.dugCells[y][cx]){
layerComplete=false;
break;
}
}
if(layerComplete&&digsite.currentLayer<digsite.layers-1){
digsite.currentLayer++;
showMessage(`Layer ${digsite.currentLayer+1} unlocked!`);
}
updateHUD();
if(digsite.artifactCount===0){
game.questProgress.totalDigsites++;
updateQuestProgress();
const digsiteIndex=game.digsites.findIndex(d=>d===digsite);
if(digsiteIndex!==-1){
game.digsites[digsiteIndex].completed=true;
}
showMessage("All artifacts excavated! Return to the lab to document your findings.");
}
}
}
function showArtifactInfo(artifact){
document.getElementById('artifactName').textContent=artifact.name;
document.getElementById('artifactDescription').textContent=artifact.description;
document.getElementById('artifactModal').style.display='flex';
}
function updateGame(){
if(!game.timeFrozen&&!game.tutorialActive){
game.time.frameCounter++;
if(game.time.frameCounter>=30){
game.time.frameCounter=0;
game.time.minute++;
if(game.time.minute>=60){
game.time.minute=0;
game.time.hour++;
if(game.time.hour>=23){
game.time.hour=23;
game.time.minute=0;
game.timeFrozen=true;
if(!game.lateNightWarningShown){
game.lateNightWarningShown=true;
document.getElementById('lateNightModal').style.display='flex';
}
}
if(game.time.hour>=24){
game.time.hour=0;
}
}
}
}
game.isNight=game.time.hour>=18||game.time.hour<6;
const targetOpacity=game.isNight?0.6:0;
if(Math.abs(game.nightOpacity-targetOpacity)>0.01){
const fadeSpeed=0.01;
if(game.nightOpacity<targetOpacity){
game.nightOpacity=Math.min(game.nightOpacity+fadeSpeed,targetOpacity);
}else{
game.nightOpacity=Math.max(game.nightOpacity-fadeSpeed,targetOpacity);
}
document.getElementById('nightOverlay').style.opacity=game.nightOpacity;
}
if(game.time.hour>=17&&game.state==='digsite'){
game.state='town';
showMessage("The dig site closed for the day! Return tomorrow.");
document.getElementById('artifactModal').style.display='none';
}
if(game.state==='town'&&game.scene==='overworld'){
updatePlayerMovement();
updateCamera();
}
if((game.keys[game.keybinds.interact[0]] || game.keys[game.keybinds.interact[1]]) && !game.interactPressed){
if(game.state === 'digsite'){
game.state='town';
game.currentDigsite=null;
document.getElementById('artifactModal').style.display='none';
}else if(!game.tutorialActive){
handleInteraction();
}
game.interactPressed = true;
} else if(!game.keys[game.keybinds.interact[0]] && !game.keys[game.keybinds.interact[1]]) {
game.interactPressed = false;
}
updateHUD();
draw();
}
function updatePlayerMovement(){
let newX=game.player.x;
let newY=game.player.y;
let moving=false;
let speed=game.player.speed;
if(getResearchUnlocked('cardio'))speed*=1.1;
if(game.keys[game.keybinds.up[0]]||game.keys[game.keybinds.up[1]]){newY-=speed;moving=true;}
if(game.keys[game.keybinds.down[0]]||game.keys[game.keybinds.down[1]]){newY+=speed;moving=true;}
if(game.keys[game.keybinds.left[0]]||game.keys[game.keybinds.left[1]]){newX-=speed;moving=true;}
if(game.keys[game.keybinds.right[0]]||game.keys[game.keybinds.right[1]]){newX+=speed;moving=true;}
game.player.isWalking=moving;
if(newX!==game.player.x&&isWalkable(newX,game.player.y)){
game.player.x=newX;
}
if(newY!==game.player.y&&isWalkable(game.player.x,newY)){
game.player.y=newY;
}
if(moving){
if(game.keys[game.keybinds.up[0]]||game.keys[game.keybinds.up[1]]){game.player.dy=-1;game.player.dx=0;}
else if(game.keys[game.keybinds.down[0]]||game.keys[game.keybinds.down[1]]){game.player.dy=1;game.player.dx=0;}
else if(game.keys[game.keybinds.left[0]]||game.keys[game.keybinds.left[1]]){game.player.dx=-1;game.player.dy=0;}
else if(game.keys[game.keybinds.right[0]]||game.keys[game.keybinds.right[1]]){game.player.dx=1;game.player.dy=0;}
}
}
function updateCamera(){
game.offsetX=canvas.width/2-game.player.x*game.zoomScale;
game.offsetY=canvas.height/2-game.player.y*game.zoomScale;
}
function updateActionPrompt(){
const target=getInteractionTarget();
if(target){
document.getElementById('actionPrompt').style.display='block';
const interactKey=game.keybinds.interact.filter(k=>k).map(k=>k.toUpperCase()).join(' / ');
document.getElementById('promptText').textContent=`Press ${interactKey} to enter ${target.name}`;
}else{
document.getElementById('actionPrompt').style.display='none';
}
}
function updateHUD(){
const minutesFormatted=game.time.minute.toString().padStart(2,'0');
const timeFormatted=`${(game.time.hour%12)||12}:${minutesFormatted} ${game.time.hour<12?'AM':'PM'}`;
document.getElementById('timeDisplay').textContent=`${timeFormatted}, Day ${game.time.day}`;
document.getElementById('moneyDisplay').textContent=game.researchPoints;

let inventoryHtml='';
for(const artifactType in game.inventory){
  if(game.inventory[artifactType]>0){
  const artifact=ARTIFACTS[artifactType];
  inventoryHtml+=`<div class="artifact-info">${artifact.name}: ${game.inventory[artifactType]}</div>`;
  }
}

if (inventoryHtml !== '') {
  document.getElementById('inventoryDisplay').innerHTML=inventoryHtml;
  document.getElementById('bottomLeftPanel').style.display='block';
} else {
  document.getElementById('inventoryDisplay').innerHTML='';
  document.getElementById('bottomLeftPanel').style.display='none';
}
}
function showMessage(message){
document.getElementById('messageText').textContent=message;
document.getElementById('messageBox').style.display='block';
setTimeout(()=>{
document.getElementById('messageBox').style.display='none';
},4000);
}
function draw(){
ctx.fillStyle='#8b7355';
ctx.fillRect(0,0,canvas.width,canvas.height);
game.backgroundElements.forEach(elem=>{
const drawX=elem.x+game.offsetX*0.2;
const drawY=elem.y+game.offsetY*0.2;
if(elem.type==='column'){
ctx.fillStyle='rgba(200,180,160,0.4)';
ctx.fillRect(drawX-8,drawY,16,elem.height);
ctx.fillRect(drawX-10,drawY,20,8);
ctx.fillRect(drawX-10,drawY+elem.height-8,20,8);
}else if(elem.type==='arch'){
ctx.fillStyle='rgba(180,160,140,0.4)';
ctx.fillRect(drawX,drawY,elem.width,60);
ctx.beginPath();
ctx.arc(drawX+elem.width/2,drawY+60,elem.width/2,0,Math.PI,true);
ctx.fill();
}else if(elem.type==='colosseum'){
ctx.fillStyle='rgba(160,140,120,0.5)';
for(let i=0;i<3;i++){
ctx.beginPath();
ctx.ellipse(drawX,drawY+i*20,80,15,0,0,Math.PI*2);
ctx.fill();
}
for(let i=0;i<8;i++){
ctx.fillRect(drawX-70+i*20,drawY+10,6,40);
}
}
});
if(game.state==='town'){
if(game.scene==='overworld'){
drawMap();
drawAmbiance();
drawMapObjects();
drawPlayer();
}
}else if(game.state==='digsite'){
drawDigsite();
}
if(game.tutorialActive){
document.getElementById('tutorialOverlay').style.display='flex';
document.getElementById('tutorialBox').style.display='block';
document.getElementById('tutorialText').textContent=getTutorialText(game.tutorialStep);
document.getElementById('nextTutorialButton').textContent=(game.tutorialStep===TUTORIAL_STEPS.length-1)?'Start Excavating!':'Next';
}else{
document.getElementById('tutorialOverlay').style.display='none';
document.getElementById('tutorialBox').style.display='none';
}
}
function handleInteraction(){
if(game.tutorialActive&&game.tutorialStep<TUTORIAL_STEPS.length-1){
return;
}

if(game.state==='town'&&game.scene==='overworld'){
const target=getInteractionTarget(); // Get target
if(target){
if(target.type==='building'&&target.name==='Research Laboratory'){
documentArtifacts(); // Call modal directly
}else if(target.type==='home'){
if(game.isNight || game.time.hour >= 23){ // Check time
showSleepModal();
} else {
showMessage("You can only sleep at night (after 6 PM).");
}
}else if(target.type==='quest'){
showQuestBoard(); // Call modal directly
}else if(target.type==='digsite'){
if(game.time.hour>=9&&game.time.hour<17){
const digsite=game.digsites.find(d=>Math.abs(d.x-target.tileX)<=1&&Math.abs(d.y-target.tileY)<=1);
if(digsite&&!digsite.completed){
if(!digsite.grid){
generateDigsiteContent(digsite);
}
game.currentDigsite=digsite;
game.state='digsite';
showMessage("Excavation site entered. Click carefully to uncover artifacts!");
}else{
showMessage("This dig site has been fully excavated.");
}
}else{
showMessage("Dig sites are only open from 9 AM to 5 PM.");
}
}
}
}

}
function showSleepModal(){
document.getElementById('sleepMessage').textContent = "Rest up for tomorrow's excavations?";
document.getElementById('sleepModal').style.display='flex';
}
function startNewDay(){
game.time.hour=9;
game.time.minute=0;
game.time.day++;
game.timeFrozen=false;
game.lateNightWarningShown=false;
game.map = createMap();
generateDigsites();
generateMapObjects();
generateAmbiance();
saveGame();
document.getElementById('sleepModal').style.display='none';
game.scene='overworld';
showMessage(`Day ${game.time.day}: New dig sites have been discovered! Check your map.`);
}
function documentArtifacts(){
let totalValue=0;
let documentedItems=[];
const docList=document.getElementById('documentationList');
docList.innerHTML='';

for(const artifactType in game.inventory){
  const toDocument = game.inventory[artifactType] || 0;

  if(toDocument > 0){
  const artifact=ARTIFACTS[artifactType];
  let value=toDocument*artifact.value;
  totalValue+=value;

  // Add to documented list (for tracking totals, if needed)
  game.documentedArtifacts[artifactType] = (game.documentedArtifacts[artifactType] || 0) + toDocument;
  // Remove from active inventory
  game.inventory[artifactType] = 0;

  documentedItems.push(`${toDocument}x ${artifact.name}`);
  const itemDiv=document.createElement('div');
  itemDiv.className='study-item';
  itemDiv.innerHTML=`<strong>${toDocument}x ${artifact.name}</strong><br><small>+${value} Research Points</small>`;
  docList.appendChild(itemDiv);
  }
}

if(totalValue>0){
  game.researchPoints+=totalValue;
  updateQuestProgress();
  saveGame();
  document.getElementById('documentationMessage').textContent=`Successfully documented ${documentedItems.length} new artifact type(s)!`;
}else{
  document.getElementById('documentationMessage').textContent='No new artifacts to document. Go excavate some dig sites!';
}

updateHUD();
document.getElementById('documentationModal').style.display='flex';
updateJoystickVisibility();
}
function showResearchTree(){
const content=document.getElementById('researchTreeContent');
content.innerHTML='';

const treeDiv=document.createElement('div');
treeDiv.className='research-tree';

const tooltipDiv=document.createElement('div');
tooltipDiv.className='tooltip';
tooltipDiv.id='researchTooltip';
treeDiv.appendChild(tooltipDiv);

const lines = [];

for(const tierKey in RESEARCH_TREE){
  RESEARCH_TREE[tierKey].forEach(upgrade=>{
    const nodeDiv=document.createElement('div');
    nodeDiv.className=`tree-node ${upgrade.unlocked?'unlocked':''} ${!canUnlockResearch(upgrade)?'locked':''}`;
    nodeDiv.style.left=`${upgrade.x}px`;
    nodeDiv.style.top=`${upgrade.y}px`;
    nodeDiv.innerHTML=`
      <div style="font-weight:bold;margin-bottom:2px">${upgrade.name}</div>
      <div style="font-size:10px">${upgrade.cost} RP</div>
    `;
    if(upgrade.unlocked){
      nodeDiv.innerHTML+='<div style="font-size:10px;color:#4a8a4a">✓</div>';
    }else if(canUnlockResearch(upgrade)){
      const button=document.createElement('button');
      button.className='action-button';
      button.textContent='Unlock';
      button.onclick=()=>unlockResearch(upgrade.id);
      nodeDiv.appendChild(button);
    }
    nodeDiv.addEventListener('mouseenter', ()=>{
      const prereqText = upgrade.prereqs.length > 0 ? 'Prerequisites: ' + upgrade.prereqs.map(id => findResearchById(id).name).join(', ') : 'No prerequisites';
      tooltipDiv.innerHTML=`
        <strong>${upgrade.name}</strong><br>
        Cost: ${upgrade.cost} RP<br>
        Effect: ${upgrade.effect}<br>
        ${prereqText}
      `;
      tooltipDiv.style.left=`${upgrade.x + 70}px`;
      tooltipDiv.style.top=`${upgrade.y - 60}px`;
      tooltipDiv.style.display='block';
    });
    nodeDiv.addEventListener('mouseleave', ()=>{
      tooltipDiv.style.display='none';
    });

    // Touchscreen behavior
    nodeDiv.addEventListener('touchstart', (e) => {
      e.preventDefault();
      if (game.controlScheme === 'touch') {
        if (canUnlockResearch(upgrade)) {
          // If can afford, unlock immediately without showing tooltip
          unlockResearch(upgrade.id);
        } else {
          // If can't afford, show tooltip
          const prereqText = upgrade.prereqs.length > 0 ? 'Prerequisites: ' + upgrade.prereqs.map(id => findResearchById(id).name).join(', ') : 'No prerequisites';
          tooltipDiv.innerHTML=`
            <strong>${upgrade.name}</strong><br>
            Cost: ${upgrade.cost} RP<br>
            Effect: ${upgrade.effect}<br>
            ${prereqText}
          `;
          tooltipDiv.style.left=`${upgrade.x + 70}px`;
          tooltipDiv.style.top=`${upgrade.y - 60}px`;
          tooltipDiv.style.display='block';

          // Hide tooltip after a delay
          setTimeout(() => {
            tooltipDiv.style.display='none';
          }, 3000);
        }
      }
    });
    treeDiv.appendChild(nodeDiv);

    upgrade.prereqs.forEach(prereqId=>{
      const prereq = findResearchById(prereqId);
      if(prereq){
        const lineDiv=document.createElement('div');
        lineDiv.className='tree-line';
        // Draw lines from bottom of previous to top of next
        const x1 = prereq.x + 60; // Center X of prereq
        const y1 = prereq.y + 60; // Bottom of prereq (node height is 60px)
        const x2 = upgrade.x + 60; // Center X of upgrade
        const y2 = upgrade.y;      // Top of upgrade
        const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        lineDiv.style.left = `${x1}px`;
        lineDiv.style.top = `${y1}px`;
        lineDiv.style.width = `${length}px`;
        lineDiv.style.height = '2px';
        lineDiv.style.transformOrigin = '0 0';
        lineDiv.style.transform = `rotate(${angle}deg)`;
        lines.push(lineDiv);
      }
    });
  });
}

lines.forEach(line => treeDiv.appendChild(line));

content.appendChild(treeDiv);
const modalContent = document.getElementById('researchTreeModal').querySelector('.modal-content');
modalContent.style.maxWidth = '900px';
document.getElementById('researchTreeModal').style.display='flex';
updateJoystickVisibility();
}
function canUnlockResearch(upgrade){
if(upgrade.unlocked)return false;
if(game.researchPoints<upgrade.cost)return false;
for(const prereqId of upgrade.prereqs){
const prereq=findResearchById(prereqId);
if(!prereq||!prereq.unlocked)return false;
}
return true;
}
function findResearchById(id){
for(const tierKey in RESEARCH_TREE){
const upgrade=RESEARCH_TREE[tierKey].find(u=>u.id===id);
if(upgrade)return upgrade;
}
return null;
}
function getResearchUnlocked(id){
const upgrade=findResearchById(id);
return upgrade?upgrade.unlocked:false;
}
function unlockResearch(id){
const upgrade=findResearchById(id);
if(upgrade&&canUnlockResearch(upgrade)){
upgrade.unlocked=true;
game.researchPoints-=upgrade.cost;
updateHUD();
showMessage(`Unlocked: ${upgrade.name}!`);
saveGame();
if(id==='victory'){
setTimeout(()=>{
document.getElementById('missionCompleteModal').style.display='flex';
},1000);
}
showResearchTree();
return;
}
}
function canUnlockQuest(quest, pack) {
    // Check if quest has prerequisites
    if(quest.prereqs && quest.prereqs.length > 0) {
        for(const prereqQuestId of quest.prereqs) {
            // Find the prerequisite quest in the same pack
            const prereqQuest = pack.quests.find(q => q.id === prereqQuestId);
            if(!prereqQuest || !prereqQuest.completed) {
                return false;
            }
        }
    }
    return true;
}

function showQuestBoard(){
const content=document.getElementById('questBoardContent');
content.innerHTML='';
for(const packKey in QUEST_PACKS){
const pack=QUEST_PACKS[packKey];
const isUnlocked=getResearchUnlocked(pack.unlock);
const packDiv=document.createElement('div');
packDiv.className=`quest-pack ${!isUnlocked?'locked':''}`;
packDiv.innerHTML=`<h3>${pack.name} ${!isUnlocked?'🔒':''}</h3>`;
if(isUnlocked){
pack.quests.forEach(quest=>{
const canUnlock = canUnlockQuest(quest, pack);
const questDiv=document.createElement('div');
questDiv.className=`quest-item ${quest.completed?'completed':''} ${!canUnlock?'locked':''}`;
const progressPercent=Math.min(100,(quest.progress/quest.target)*100);
let questHtml=`
<strong>${quest.name}</strong><br>
<small>${quest.desc}</small><br>
<div class="quest-progress">
<div class="quest-progress-bar" style="width:${progressPercent}%"></div>
</div>
<small>Progress: ${quest.progress}/${quest.target}</small><br>
<small>Reward: ${quest.reward} RP</small>
`;

if(quest.completed){
questHtml+=`<br><span style="color:#4a8a4a">✓ Completed!</span>`;
}else if(!canUnlock && quest.prereqs && quest.prereqs.length > 0){
questHtml+=`<br><small style="color:#8a6a4a">🔒 Requires: ${quest.prereqs.map(id => {
const prereqQuest = pack.quests.find(q => q.id === id);
return prereqQuest ? prereqQuest.name : id;
}).join(', ')}</small>`;
}

questDiv.innerHTML=questHtml;
packDiv.appendChild(questDiv);
});
}else{
packDiv.innerHTML+=`<p>Unlock "${pack.unlock}" in the Research Tree to access these quests.</p>`;
}
content.appendChild(packDiv);
}
document.getElementById('questBoardModal').style.display='flex';
}
function updateQuestProgress(){
for(const packKey in QUEST_PACKS){
const pack=QUEST_PACKS[packKey];
if(!getResearchUnlocked(pack.unlock))continue;
pack.quests.forEach(quest=>{
if(quest.completed)return;
let newProgress=0;
switch(quest.type){
case'collect':
newProgress=game.questProgress.totalCollected;
break;
case'digsite':
newProgress=game.questProgress.totalDigsites;
break;
}
quest.progress=newProgress;
if(quest.progress>=quest.target&&!quest.completed){
const canUnlock = canUnlockQuest(quest, pack);
if(canUnlock){
quest.completed=true;
game.researchPoints+=quest.reward;
showMessage(`Quest completed: ${quest.name}! Earned ${quest.reward} RP!`);
}
}
});
}
}
function handleKeydown(e){
if(game.controlScheme === 'touch') return;
const pressedKey=e.key.toLowerCase();
if(game.currentKeybindChange!==null){
const action=game.currentKeybindChange;
const slot=game.currentKeybindSlot;
if(Object.values(game.keybinds).flat().includes(pressedKey)&&pressedKey!==''){
showMessage("Key already in use!");
}else if(pressedKey.length>1&&!['arrowup','arrowdown','arrowleft','arrowright','space'].includes(pressedKey)){
showMessage("Please choose a simpler key.");
}else{
game.keybinds[action][slot]=pressedKey;
showMessage(`Set ${action} slot ${slot+1} to ${pressedKey.toUpperCase()}`);
}
populateKeybinds();
game.currentKeybindChange=null;
game.currentKeybindSlot=null;
e.preventDefault();
return;
}
game.keys[pressedKey]=true;
if(game.state==='digsite'&&game.keybinds.return.includes(pressedKey)){
game.state='town';
game.currentDigsite=null;
showMessage("Returning to base camp.");
document.getElementById('artifactModal').style.display='none';
}
if(game.currentKeybindChange !== null){
populateKeybinds();
game.currentKeybindChange = null;
game.currentKeybindSlot = null;
}
}
function handleKeyup(e){
if(game.controlScheme === 'touch') return;
game.keys[e.key.toLowerCase()]=false;
}
function handleMouseClick(e){
if(game.state==='digsite'){
dig(e.clientX,e.clientY);
}
}
document.getElementById('nextTutorialButton').addEventListener('click',()=>{
if(!game.tutorialActive)return;
game.tutorialStep++;
if(game.tutorialStep>=TUTORIAL_STEPS.length){
game.tutorialActive=false;
game.tutorialStep=0;
}
});
document.getElementById('controlsButton').addEventListener('click',()=>{
const keybindsSection = document.getElementById('keybindsSection');
if (game.controlScheme === 'keyboard') {
  keybindsSection.style.display = 'block';
} else {
  keybindsSection.style.display = 'none';
}
populateKeybinds();
document.getElementById('controlsModal').style.display='flex';
});
document.getElementById('settingsSelectKeyboard').addEventListener('click',()=>{
game.controlScheme = 'keyboard';
updateJoystickVisibility();
document.getElementById('keybindsSection').style.display = 'block';
});
document.getElementById('settingsSelectTouch').addEventListener('click',()=>{
game.controlScheme = 'touch';
generateDigsites();
// Reset joystick setup flag to ensure proper initialization
joystickSetupComplete = false;
updateJoystickVisibility();
document.getElementById('keybindsSection').style.display = 'none';
});
document.getElementById('closeControlsModal').addEventListener('click',()=>{
document.getElementById('controlsModal').style.display='none';
});
document.getElementById('settingsButton').addEventListener('click',()=>{
document.getElementById('settingsModal').style.display='flex';
});
document.getElementById('closeSettingsModal').addEventListener('click',()=>{
if(document.getElementById('controlsModal').style.display === 'flex'){
document.getElementById('controlsModal').style.display='none';
return;
}
document.getElementById('settingsModal').style.display='none';
});
document.getElementById('restartTutorialInModal').addEventListener('click',()=>{
game.tutorialActive=true;
game.tutorialStep=0;
document.getElementById('settingsModal').style.display='none';
showMessage("Tutorial restarted.");
});
document.getElementById('resetProgressButton').addEventListener('click',()=>{
document.getElementById('settingsModal').style.display='none';
document.getElementById('confirmModal').style.display='flex';
});
document.getElementById('confirmResetBtn').addEventListener('click',()=>{
localStorage.removeItem('runehunters_save');
location.reload();
});
document.getElementById('cancelResetBtn').addEventListener('click',()=>{
document.getElementById('confirmModal').style.display='none';
document.getElementById('settingsModal').style.display='flex';
});
document.getElementById('closeArtifactModal').addEventListener('click',()=>{
document.getElementById('artifactModal').style.display='none';
});
document.getElementById('confirmSleep').addEventListener('click',()=>{
startNewDay();
});
document.getElementById('cancelSleep').addEventListener('click',()=>{
document.getElementById('sleepModal').style.display='none';
});
document.getElementById('researchTreeButton').addEventListener('click',()=>{
showResearchTree();
});
document.getElementById('closeResearchTreeModal').addEventListener('click',()=>{
document.getElementById('researchTreeModal').style.display='none';
updateJoystickVisibility();
});
document.getElementById('closeQuestBoardModal').addEventListener('click',()=>{
document.getElementById('questBoardModal').style.display='none';
});
document.getElementById('showCreditsButton').addEventListener('click',()=>{
document.getElementById('settingsModal').style.display='none';
document.getElementById('creditsModal').style.display='flex';
});
document.getElementById('closeCreditsModal').addEventListener('click',()=>{
document.getElementById('creditsModal').style.display='none';
});
document.getElementById('continueExploringButton').addEventListener('click',()=>{
document.getElementById('missionCompleteModal').style.display='none';
});
document.getElementById('closeMissionCompleteModal').addEventListener('click',()=>{
document.getElementById('missionCompleteModal').style.display='none';
});
document.getElementById('closeLateNightModal').addEventListener('click',()=>{
document.getElementById('lateNightModal').style.display='none';
});
document.getElementById('closeDocumentationModal').addEventListener('click',()=>{
document.getElementById('documentationModal').style.display='none';
});
document.getElementById('howToPlayButton').addEventListener('click',()=>{
document.getElementById('settingsModal').style.display='none';
const moveKeys=game.keybinds.up.filter(k=>k).map(k=>k.toUpperCase()).join('/');
const interactKeys=game.keybinds.interact.filter(k=>k).map(k=>k.toUpperCase()).join('/');
const returnKeys=game.keybinds.return.filter(k=>k).map(k=>k.toUpperCase()).join('/');
document.getElementById('help-move-keys').textContent=moveKeys;
document.getElementById('help-interact-keys').textContent=interactKeys;
document.getElementById('help-return-keys').textContent=returnKeys;
if (game.controlScheme === 'touch') {
  document.querySelector('#howToPlayModal .help-section:nth-child(1) p').innerHTML = 'Use the <strong>on-screen joystick</strong> to move around the world.';
  document.querySelector('#howToPlayModal .help-section:nth-child(2) p').innerHTML = 'Dig sites have 5 hidden layers. Only one layer is visible at a time. <strong>Tap tiles</strong> to excavate them instantly. Clear all tiles in a layer to reveal the next layer.';
  document.querySelector('#howToPlayModal .help-section:nth-child(6) p').innerHTML = '<strong>Interact / Exit Site:</strong> Center button<br><strong>Secondary Return:</strong> Not used in touch mode';
} else {
  document.querySelector('#howToPlayModal .help-section:nth-child(1) p').innerHTML = 'Use <strong id="help-move-keys">WASD/Arrow Keys</strong> to move around the world.';
  document.querySelector('#howToPlayModal .help-section:nth-child(2) p').innerHTML = 'Dig sites have 5-10 hidden layers. Only one layer is visible at a time. Click tiles to excavate them instantly. Clear all tiles in a layer to reveal the next layer.';
  document.querySelector('#howToPlayModal .help-section:nth-child(6) p').innerHTML = 'Interact / Exit Site: <strong id="help-interact-keys">E</strong><br>Secondary Return: <strong id="help-return-keys">R</strong>';
}
document.getElementById('howToPlayModal').style.display='flex';
});
document.getElementById('closeHowToPlayModal').addEventListener('click',()=>{
document.getElementById('howToPlayModal').style.display='none';
document.getElementById('settingsModal').style.display='flex';
});
document.getElementById('selectKeyboard').addEventListener('click',()=>{
  game.controlScheme = 'keyboard';
  document.getElementById('controlSchemeModal').style.display='none';
  updateJoystickVisibility();
  game.tutorialActive = true;
  game.tutorialStep = 0;
});
document.getElementById('selectTouch').addEventListener('click',()=>{
game.controlScheme = 'touch';
document.getElementById('controlSchemeModal').style.display='none';
// Reset joystick setup flag to ensure proper initialization
joystickSetupComplete = false;
updateJoystickVisibility();
game.tutorialActive = true;
game.tutorialStep = 0;
});
function populateKeybinds(){
document.getElementById('keybind-up1-btn').textContent=game.keybinds.up[0].toUpperCase();
document.getElementById('keybind-up2-btn').textContent=game.keybinds.up[1]?game.keybinds.up[1].toUpperCase():'-';
document.getElementById('keybind-down1-btn').textContent=game.keybinds.down[0].toUpperCase();
document.getElementById('keybind-down2-btn').textContent=game.keybinds.down[1]?game.keybinds.down[1].toUpperCase():'-';
document.getElementById('keybind-left1-btn').textContent=game.keybinds.left[0].toUpperCase();
document.getElementById('keybind-left2-btn').textContent=game.keybinds.left[1]?game.keybinds.left[1].toUpperCase():'-';
document.getElementById('keybind-right1-btn').textContent=game.keybinds.right[0].toUpperCase();
document.getElementById('keybind-right2-btn').textContent=game.keybinds.right[1]?game.keybinds.right[1].toUpperCase():'-';
document.getElementById('keybind-interact1-btn').textContent=game.keybinds.interact[0].toUpperCase();
document.getElementById('keybind-interact2-btn').textContent=game.keybinds.interact[1]?game.keybinds.interact[1].toUpperCase():'-';
document.getElementById('keybind-return1-btn').textContent=game.keybinds.return[0].toUpperCase();
document.getElementById('keybind-return2-btn').textContent=game.keybinds.return[1]?game.keybinds.return[1].toUpperCase():'-';

const settingsSelectedRadio = document.querySelector(`input[name="settingsControlScheme"][value="${game.controlScheme}"]`);
if (settingsSelectedRadio) {
  settingsSelectedRadio.checked = true;
}
}
function startKeybindChange(action,slot){
game.currentKeybindChange=action;
game.currentKeybindSlot=slot;
document.getElementById(`keybind-${action}${slot+1}-btn`).textContent="...";
showMessage(`Press any key to set new bind for: ${action.toUpperCase()} slot ${slot+1}`);
}
window.unlockResearch=unlockResearch;
window.startKeybindChange=startKeybindChange;
function gameLoop() {
  updateGame();
  requestAnimationFrame(gameLoop);
}

async function initGame(){
resizeCanvas();
loadGame();
game.map=createMap();

const loading = startLoadingSequence();
window.addEventListener('resize',resizeCanvas);
window.addEventListener('keydown',handleKeydown);
window.addEventListener('keyup',handleKeyup);
canvas.addEventListener('click',handleMouseClick);

// Use frame-based loading to prevent UI freezing
async function loadWithProgress() {
  // Generate map objects with progress
  loading.setMessage("Generating terrain...");
  await new Promise(resolve => setTimeout(resolve, 100));
  generateMapObjects();
  loading.updateProgress(25);

  // Generate ambiance elements
  loading.setMessage("Adding environmental details...");
  await new Promise(resolve => setTimeout(resolve, 100));
  generateAmbiance();
  loading.updateProgress(50);

  // Generate dig sites
  loading.setMessage("Creating excavation sites...");
  await new Promise(resolve => setTimeout(resolve, 100));
  generateDigsites();
  loading.updateProgress(75);

  // Generate background elements
  loading.setMessage("Finalizing world...");
  await new Promise(resolve => setTimeout(resolve, 100));
  generateBackgroundElements();
  loading.updateProgress(90);

  // Adjust player spawn if blocked
  loading.setMessage("Preparing player...");
  await new Promise(resolve => setTimeout(resolve, 100));
  let playerTileX = Math.floor(game.player.x / TILE_SIZE);
  let playerTileY = Math.floor(game.player.y / TILE_SIZE);
  if (!isWalkable(game.player.x, game.player.y)) {
    let found = false;
    for (let radius = 1; radius < 10 && !found; radius++) {
      for (let dx = -radius; dx <= radius && !found; dx++) {
        for (let dy = -radius; dy <= radius && !found; dy++) {
          if (Math.abs(dx) + Math.abs(dy) === radius) {
            let nx = playerTileX + dx;
            let ny = playerTileY + dy;
            if (nx >= 0 && nx < MAP_WIDTH && ny >= 0 && ny < MAP_HEIGHT && game.map[ny][nx] === 'g') {
              game.player.x = nx * TILE_SIZE + TILE_SIZE / 2;
              game.player.y = ny * TILE_SIZE + TILE_SIZE / 2;
              found = true;
            }
          }
        }
      }
    }
  }

  loading.updateProgress(100);
  loading.setMessage("Ready to explore!");

  // Final setup
  updateHUD();
  updateJoystickVisibility();

  // Hide loading screen and start game
  await new Promise(resolve => setTimeout(resolve, 500));
  document.getElementById('loadingScreen').style.display = 'none';
  showControlSchemeSelector();
  requestAnimationFrame(gameLoop);
}

// Start the loading process
loadWithProgress();
}
initGame();
