let somaticFont; let debugMode = false; 
let puppet; let nose; 
let pinkball; let purpleball; let blueball; let greenball; let orangeball; let yellowball; let mouthBallsGroup;
let man1; let man2; let man3; let man4; let man5; let pipe; let pipetimer = 0;
let mouth; let mouthTimer = 0; let mouthstate = 0;
let eyes; let eyesTimer = 0; let eyesstate = 0;
let man1state = 1; let man2state = 1; let man3state = 1; let man4state = 1; let man5state = 1;
let man1timer = 0; let man2timer = 0; let man3timer = 0; let man4timer = 0; let man5timer = 0;

//SFX Variables
let bgm; let bgmTimer = 0; let initial = 0;

// Man Walking Variables
let man1WanderTarget = { x: 0, y: 0 }; let man1NeedsNewTarget = true; let man1RestTimer = 0; let man1IsResting = false; let man1WalkCycles = 0;
let man2WanderTarget = { x: 0, y: 0 }; let man2NeedsNewTarget = true; let man2RestTimer = 0; let man2IsResting = false; let man2WalkCycles = 0;
let man3WanderTarget = { x: 0, y: 0 }; let man3NeedsNewTarget = true; let man3RestTimer = 0; let man3IsResting = false; let man3WalkCycles = 0;
let man4WanderTarget = { x: 0, y: 0 }; let man4NeedsNewTarget = true; let man4RestTimer = 0; let man4IsResting = false; let man4WalkCycles = 0;
let man5WanderTarget = { x: 0, y: 0 }; let man5NeedsNewTarget = true; let man5RestTimer = 0; let man5IsResting = false; let man5WalkCycles = 0;

// Camera, Touch Controls
let touchStartX = 0, touchStartY = 0; let touchMoveX, touchMoveY; let touchEndX, touchEndY;
let isTouchDevice = ("ontouchstart" in window); let sensitivity = 0.8; let invertControls = true;
let isDragging = false;  // Add this line to declare isDragging

// Global Essay Variables
let words = [];          // Array to hold all words of the essay
let currentWordIndex = 0; // To keep track of which word to display
let cycleInterval = 1000;   // Interval (in milliseconds) between word changes (e.g., 2000ms = 2 seconds)
let lastCycleTime = 0;      // Store the time the word was last updated
let autoCyclePaused = false; 
let essay = "Seeing comes before words. The child looks and recognizes before it can speak. But there is also another sense in which seeing comes before words. It is seeing which establishes our place in the surrounding world; we explain that world with words, but words can never undo the fact that we are surrounded by it. The relation between what we see and what we know is never settled. Each evening we see the sunset. We know that the earth is turning away from it. Yet the knowledge, the explanation, never quite fits the sight. The Surrealist painter Magritte commented on this always present gap between words and seeing in a painting called The Key of Dreams. The way we see things is affected by what we know or what we believe. In the Middle Ages when men believed in the physical existence of Hell the sight of fire must have meant something different from what it means today. Nevertheless their idea of Hell owed a lot to the sight of fire consuming and the ashes remaining - as well as to their experience of the pain of burns. When in love, the sight of the beloved has a completeness which no words and no embrace can match : a completeness which only the act of making love can temporarily accommodate. Yet this seeing which comes before words, and can never be quite covered by them, is not a question of mechanically reacting to stimuli. (It can only be thought of in this way if one isolates the small part of the process which concerns the eye's retina.) We only see what we look at. To look is an act of choice. As a result of this act, what we see is brought within our reach - though not necessarily within arm's reach. To touch something is to situate oneself in relation to it. Close your eyes, move round the room and notice how the faculty of touch is like a static, limited form of sight. We never look at just one thing; we are always looking at the relation between things and ourselves. Our vision is continually active, continually moving, continually holding things in a circle around itself, constituting what is present to us as we are. Soon after we can see, we are aware that we can also be seen. The eye of the other combines with our own eye to make it fully credible that we are part of the visible world. If we accept that we can see that hill over there, we propose that from that hill we can be seen. The reciprocal nature of vision is more fundamental than that of spoken dialogue. And often dialogue is an attempt to verbalize this - an attempt to explain how, either metaphorically or literally, 'you see things', and an attempt to discover how 'he sees things'. In the sense in which we use the word in this book, all images are man-made. An image is a sight which has been recreated or reproduced. It is an appearance, or a set of appearances, which has been detached from the place and time in which it first made its appearance and preserved - for a few moments or a few centuries. Every image embodies a way of seeing. Even a photograph. For photographs are not, as is often assumed, a mechanical record. Every time we look at a photograph, we are aware, however slightly, of the photographer selecting that sight from an infinity of other possible sights. This is true even in the most casual family snapshot. The photographer's way of seeing is reflected in his choice of subject. The painter's way of seeing is reconstituted by the marks he makes on the canvas or paper. Yet, although every image embodies a way of seeing, our perception or appreciation of an image depends also upon our own way of seeing. It may be, for example, that Sheila is one figure among twenty; but for our own reasons she is the one we have eyes for. Images were first made to conjure up the appearances of something that was absent. Gradually it became evident that an image could outlast what it represented; it then showed how something or somebody had once looked - and thus by implication how the subject had once been seen by other people. Later still the specific vision of the image-maker was also recognized as part of the record. An image became a record of how X had seen V. This was the result of an increasing consciousness of individuality, accompanying an increasing awareness of history. It would be rash to try to date this last development precisely. But certainly in Europe such consciousness has existed since the beginning of the Renaissance. No other kind of relic or text from the past can offer such a direct testimony about the world which surrounded other people at other times. In this respect images are more precise and richer than literature. To say this is not to deny the expressive or imaginative quality of art, treating it as mere documentary evidence; the more imaginative the work, the more profoundly it allows us to share the artist's experience of the visible. Yet when an image is presented as a work of art, the way people look at it is affected by a whole series of learnt assumptions about art. Assumptions concerning: Beauty , Truth, Genius, Civilisation, Form, Status, Taste, etc. Many of these assumptions no longer accord with the world as it is. (The world-as-it-is is more than pure objective fact, it includes consciousness.) Out of true with the present, these assumptions obscure the past. They mystify rather than clarify. The past is never there waiting to be discovered, to be recognized for exactly what it is. History always constitutes the relation between a present and its past. Consequently fear of the present leads to mystification of the past. The past is not for living in; it is a well of conclusions from which we draw in order to act. Cultural mystification of the past entails a double loss. Works of art are made unnecessarily remote. And the past offers us fewer conclusions to complete in action. When we 'see' a landscape, we situate ourselves in it. If we 'saw' the art of the past, we would situate ourselves in history. When we are prevented from seeing it, we are being deprived of the history which belongs to us. Who benefits from this deprivation? In the end, the art of the past is being mystified because a privileged minority is striving to invent a history which can retrospectively justify the role of the ruling classes, and such a justification can no longer make sense in modern terms. And so, inevitably, it mystifies. Let us consider a typical example of such mystification. A two-volume study was recently published on Frans Hals.' It is the authoritative work to date on this painter. As a book of specialized art history it is no better and no worse than the average. The last two great paintings by Frans Hals portray the Governors and the Governesses of an Alms House for old paupers in the Dutch seventeenth-century city of Haarlem. They were officially commissioned portraits. Hals, an old man of over eighty, was destitute. Most of his life he had been in debt. During the winter of 1664, the year he began painting these pictures, he obtained three loads of peat on public charity, otherwise he would have frozen to death. Those who now sat for him were administrators of such public charity. The author records these facts and then explicitly says that it would be incorrect to read into the paintings any criticism of the sitters. There is no evidence, he says, that Hals painted them in a spirit of bitterness. The author considers them, however, remarkable works of art and explains why. Here he writes of the Regentesses: Each woman speaks to us of the human condition with equal importance. Each woman stands out with equal clarity against the enormous deep harmonious fusion unforgettable contrast powerful a peak of breadth and strength The compositional unity of a painting contributes fundamentally to the power of its image. It is reasonable to consider a painting's composition. But here the composition is written about as though it were in itself the emotional charge of the painting. Terms like harmonious fusion, unforgettable contrast, reaching a peak of breadth and strength transfer the emotion provoked by the image from the plane of lived experience, to that of disinterested 'art appreciation'. All conflict disappears. One is left with the unchanging 'human condition', and the painting considered as a marvellously made object.";

// At the top with other global variables
let logoLetters; let isLogoExploded = false;

// At the top with other globals
let resetButton;

// At the top with other globals
let lastHoverTime = 0;
const HOVER_INTERVAL = 3000; // 3 seconds
let currentHoverIndex = 0;

// At the top with other globals
const MAX_MOUTH_BALLS = 1000; // Maximum number of mouth balls allowed

// Add at the top with other globals
const TRAIL_VELOCITY_THRESHOLD = 10; // Adjust this value to change when trails appear
const TRAIL_LENGTH = 5;
const TRAIL_OPACITY = 0.5;

// At the top with other globals, adjust these values
const PC_LERP_SPEED = 0.2;      // Smoother for PC hover
const TABLET_LERP_SPEED = 0.2;  // Adjusted for smoother tablet transitions
const TEXT_SIZE_SMALL = 16;
const TEXT_SIZE_LARGE = 20;
const CIRCLE_SIZE_SMALL = 76;
const CIRCLE_SIZE_LARGE = 95;

/**
 * Returns a random point uniformly distributed within a circle of a given radius.
 * The point is returned relative to the provided center.
 *
 * @param {object} center - An object with properties {x, y} representing the center of the circle.
 * @param {number} radius - The radius of the circle.
 * @returns {object} An object with properties {x, y} of the random point.
 */

// Misc Accessibility Variables
let draggedMouthBall = null;
let draggedLetter = null;
let textOpacity = 0.2;  
let pauseButton, speedButton, muteButton;
let worldSpeed = 1;
let isMuted = false;
let buttonSize = 50;  

function preload() {
	somaticFont = loadFont("assets/somatic.ttf");

	// sound preload
	bgm = loadSound("sfx/clear_vision.mp3"); bgm.setVolume(0.08); 
    bloop0 = loadSound("sfx/bloop1.mp3"); bloop0.setVolume(0.15);
	bloop1 = loadSound("sfx/bloop2.mp3"); bloop1.setVolume(0.15);
	bloop2 = loadSound("sfx/bloop3.mp3"); bloop2.setVolume(0.15);
	bloop3 = loadSound("sfx/bloop4.mp3"); bloop3.setVolume(0.15);
	pop0 = loadSound("sfx/pop1.mp3"); pop0.setVolume(0.06);
	pop1 = loadSound("sfx/pop1.mp3"); pop1.setVolume(0.06);
	pop2 = loadSound("sfx/pop2.mp3"); pop2.setVolume(0.06);
	pop3 = loadSound("sfx/pop3.mp3"); pop3.setVolume(0.06);
	pop4 = loadSound("sfx/pop4.mp3"); pop4.setVolume(0.06);
	pop5 = loadSound("sfx/pop5.mp3"); pop5.setVolume(0.06);
	nya0 = loadSound("sfx/nya0.mp3"); nya0.setVolume(0.06);
	nya1 = loadSound("sfx/nya1.mp3"); nya1.setVolume(0.06);
	nya2 = loadSound("sfx/nya2.mp3"); nya2.setVolume(0.06);

	//sprite preload
	cursor = new Sprite(-10,-10, 93.2, 72.4); cursor.spriteSheet = 'assets/-_cursor.png'; 
    cursor.addAnis({ cursor_main: { row: 0, frames: 1 }, cursor_hover: { row: 1, frames: 1 }, cursor_drag: { row: 2, frames: 1 } }); cursor.changeAni('cursor_main');

	man1 = new Sprite(0, 0, 28.8, 74.3 ); man1.spriteSheet = 'assets/-_man_sprite.png'; man1.anis.frameDelay = 10; 
	man1.addAnis({ pickup_reverse: { row: 0, frames: 7 }, pickup_pink: { row: 1, frames: 7 }, pickup_purple: { row: 2, frames: 7 }, pickup_blue: { row: 3, frames: 7 }, pickup_green: { row: 4, frames: 7 }, pickup_orange: { row: 5, frames: 7 }, pickup_yellow: { row: 6, frames: 7 }, walk_pink: { row: 7, frames: 12 }, walk_purple: { row: 8, frames: 12 }, walk_blue: { row: 9, frames: 12 }, walk_green: { row: 10, frames: 12 }, walk_orange: { row: 11, frames: 12 }, walk_yellow: { row: 12, frames: 12 }, walk_loop: { row: 13, frames: 12 }, walk_idle: { row: 13, frames: 1 }, pickup_reverse_default: { row: 0, frames: 7 }, pickup_default: { row: 13, frames: 1 }}); man1.changeAni('walk_idle'); 
	man2 = new Sprite(0, 0, 28.8, 74.3 ); man2.spriteSheet = 'assets/-_man_sprite.png'; man2.anis.frameDelay = 10; 
	man2.addAnis({ pickup_reverse: { row: 0, frames: 7 }, pickup_pink: { row: 1, frames: 7 }, pickup_purple: { row: 2, frames: 7 }, pickup_blue: { row: 3, frames: 7 }, pickup_green: { row: 4, frames: 7 }, pickup_orange: { row: 5, frames: 7 }, pickup_yellow: { row: 6, frames: 7 }, walk_pink: { row: 7, frames: 12 }, walk_purple: { row: 8, frames: 12 }, walk_blue: { row: 9, frames: 12 }, walk_green: { row: 10, frames: 12 }, walk_orange: { row: 11, frames: 12 }, walk_yellow: { row: 12, frames: 12 }, walk_loop: { row: 13, frames: 12 }, walk_idle: { row: 13, frames: 1 }, pickup_reverse_default: { row: 0, frames: 7 }, pickup_default: { row: 13, frames: 1 }}); man2.changeAni('walk_idle'); 
	man3 = new Sprite(0, 0, 28.8, 74.3 ); man3.spriteSheet = 'assets/-_man_sprite.png'; man3.anis.frameDelay = 10; 
	man3.addAnis({ pickup_reverse: { row: 0, frames: 7 }, pickup_pink: { row: 1, frames: 7 }, pickup_purple: { row: 2, frames: 7 }, pickup_blue: { row: 3, frames: 7 }, pickup_green: { row: 4, frames: 7 }, pickup_orange: { row: 5, frames: 7 }, pickup_yellow: { row: 6, frames: 7 }, walk_pink: { row: 7, frames: 12 }, walk_purple: { row: 8, frames: 12 }, walk_blue: { row: 9, frames: 12 }, walk_green: { row: 10, frames: 12 }, walk_orange: { row: 11, frames: 12 }, walk_yellow: { row: 12, frames: 12 }, walk_loop: { row: 13, frames: 12 }, walk_idle: { row: 13, frames: 1 }, pickup_reverse_default: { row: 0, frames: 7 }, pickup_default: { row: 13, frames: 1 }}); man3.changeAni('walk_idle'); 
	man4 = new Sprite(0, 0, 28.8, 74.3 ); man4.spriteSheet = 'assets/-_man_sprite.png'; man4.anis.frameDelay = 10; 
	man4.addAnis({ pickup_reverse: { row: 0, frames: 7 }, pickup_pink: { row: 1, frames: 7 }, pickup_purple: { row: 2, frames: 7 }, pickup_blue: { row: 3, frames: 7 }, pickup_green: { row: 4, frames: 7 }, pickup_orange: { row: 5, frames: 7 }, pickup_yellow: { row: 6, frames: 7 }, walk_pink: { row: 7, frames: 12 }, walk_purple: { row: 8, frames: 12 }, walk_blue: { row: 9, frames: 12 }, walk_green: { row: 10, frames: 12 }, walk_orange: { row: 11, frames: 12 }, walk_yellow: { row: 12, frames: 12 }, walk_loop: { row: 13, frames: 12 }, walk_idle: { row: 13, frames: 1 }, pickup_reverse_default: { row: 0, frames: 7 }, pickup_default: { row: 13, frames: 1 }}); man4.changeAni('walk_idle'); 
	man5 = new Sprite(0, 0, 28.8, 74.3 ); man5.spriteSheet = 'assets/-_man_sprite.png'; man5.anis.frameDelay = 10; 
	man5.addAnis({ pickup_reverse: { row: 0, frames: 7 }, pickup_pink: { row: 1, frames: 7 }, pickup_purple: { row: 2, frames: 7 }, pickup_blue: { row: 3, frames: 7 }, pickup_green: { row: 4, frames: 7 }, pickup_orange: { row: 5, frames: 7 }, pickup_yellow: { row: 6, frames: 7 }, walk_pink: { row: 7, frames: 12 }, walk_purple: { row: 8, frames: 12 }, walk_blue: { row: 9, frames: 12 }, walk_green: { row: 10, frames: 12 }, walk_orange: { row: 11, frames: 12 }, walk_yellow: { row: 12, frames: 12 }, walk_loop: { row: 13, frames: 12 }, walk_idle: { row: 13, frames: 1 }, pickup_reverse_default: { row: 0, frames: 7 }, pickup_default: { row: 13, frames: 1 }}); man5.changeAni('walk_idle');
   
	eyes = new Sprite(300, 300, 392.6148, 79.7723 ); eyes.spriteSheet = 'assets/-_eyes.png'; eyes.anis.frameDelay = 10;
	eyes.addAnis({ eyes_r2l: { row: 0, frames: 5 }, eyes_l2r: { row: 1, frames: 5 }, eyes_l2r_idle: { row: 1, frames: 1 }, eyes_r2l_idle: { row: 0, frames: 1 }  }); eyes.changeAni('eyes_r2l_idle');

	mouth = new Sprite(300, 300, 142.6, 57.9); mouth.spriteSheet = 'assets/-_mouthloop.png'; mouth.anis.frameDelay = 10;
    mouth.addAnis({ mouth_loop: { row: 0, frames: 9 }, mouth_loop_reverse: { row: 1, frames: 9 }, mouth_idle: { row: 0, frames: 1 }, mouth_idle_reverse: { row: 1, frames: 1 } }); mouth.changeAni('mouth_idle');

	pipe = new Sprite(300, 300, 67.3, 69.9 ); pipe.spriteSheet = 'assets/-_pipe_sprite.png'; pipe.anis.frameDelay = 10;
	pipe.addAnis({ pipe_pink: { row: 0, frames: 10 }, pipe_purple: { row: 1, frames: 10 }, pipe_blue: { row: 2, frames: 10 }, pipe_green: { row: 3, frames: 10 }, pipe_orange: { row: 4, frames: 10 }, pipe_yellow: { row: 5, frames: 10 }, pipe_idle: { row: 6, frames: 1 } }); pipe.changeAni('pipe_idle');
}

function keyPressed() {
	if (key === 'd') {
	  debugMode = !debugMode;
	  allSprites.debug = !allSprites.debug;  
	  //console.log("debugMode:", debugMode);

	}
	if (key === 's') {
		spawnRandomPinkBall();
		spawnRandomPurpleBall();
		spawnRandomBlueBall();
		spawnRandomGreenBall();
		spawnRandomOrangeBall();
		spawnRandomYellowBall();
	  }

	  /*if(key === ' ') {
		autoCyclePaused = !autoCyclePaused;
		console.log("Auto cycle paused:", autoCyclePaused);
	  }*/
} 

function update(){

	if (kb.presses('right')) {
	  let currentWord = words[currentWordIndex];
	  spawnBallForWord(currentWord);
	  
	  // Advance to the next word (loop back to the beginning if at the end)
	  currentWordIndex = (currentWordIndex + 1) % words.length;
	} else if (kb.presses('left')) {
	  let currentWord = words[currentWordIndex];
	  spawnBallForWord(currentWord);
	  
	  // Reverse to the previous word. Adding words.length ensures the result is non-negative.
	  currentWordIndex = (currentWordIndex - 1 + words.length) % words.length;
	}
  }

function setup() {
let DynamicWindowWidth = windowWidth;
userStartAudio();

// Touch Device Detection
if (isTouchDevice) {
	cursor.visible = false;
} else {
	cursor.visible = true;
}

if (windowWidth <= 600){
	//console.log("XS Size detected"); 
    DynamicWindowWidth = (windowHeight/16)*9;
} else if (windowWidth >= 600 && windowWidth <= 1023) {
	//console.log("Small Size detected"); 
    DynamicWindowWidth  = (windowHeight/16)*9;
} else if (windowWidth >= 1023 && windowWidth <= 1339) {
	//console.log("Medium Size detected");
    DynamicWindowWidth  = (windowHeight/16)*9;
} else if (windowWidth >= 1339 && windowWidth <= 2559) {
	//console.log("Large Size detected");
    DynamicWindowWidth  = (windowHeight/16)*9;
} else if (windowWidth >= 2560) {
	//console.log("Ultra Wide Size detected");
    DynamicWindowWidth  = (windowHeight/16)*9;
} 

new Canvas(1080, 1920);
displayMode('maxed');
frameRate(60);

textAlign(CENTER, TOP);


allSprites.pixelPerfect = true;

allSprites.overlaps(allSprites);
randomSeed(millis()); // or any varying value to randomize the starting sequence

words = essay.split(/\s+/);

man1.ballColor = null; man2.ballColor = null; man3.ballColor = null; man4.ballColor = null; man5.ballColor = null;

/*function ultrawideScreenSettings() {

	camera.zoom = 2;
	bricks.w = 650;
	TileWidth = 606;
	playarea.w = 645;
  MinScaleX = 0.1;
	sensitivity = 0.8;

	camera.x = bricks[0].x;
}

function largeScreenSettings() {

	camera.zoom = 2;
	bricks.w = 650;
	TileWidth = 650;
	playarea.w = 645;
  MinScaleX = 0.2;
	sensitivity = 0.8;
}

function mediumScreenSettings() {
	camera.zoom = 1.8;
	sensitivity = 0.8;

	bricks.w = 500;
	playarea.w = 495;
	MinScaleX = 1.4;

	camera.x = bricks[0].x;
}

function smallScreenSettings() {
	camera.zoom = 1.5;
	sensitivity = 0.8;

	bricks.w = 400;
	playarea.w = 390;
	MinScaleX = 1.4;

	camera.x = bricks[0].x;
}

function xsScreenSettings() {
	camera.zoom = 1.2;
	sensitivity = 0.6;

	bricks.w = 250;
	playarea.w = 245;
	MinScaleX = 0.1;
}*/
    // Cursor Sprite
	cursor.x = (canvas.w/2); cursor.y = (canvas.h/2); cursor.scale = 1;
	cursor.scale.x = 2; cursor.scale.y = 2;
	cursor.collider = 'none'; 

    // Colour Ball Spawne
	mouthBallsGroup = new Group();
	balls = new Group(); balls.layer = 2;

    pinkball = new Group(); // corrected instantiation
    pinkball.diameter = 6;
    pinkball.collider = "dynamic";
    pinkball.color = color(255, 255, 255);
    pinkball.stroke = '#ff0178';
    pinkball.strokeWeight = 4;
    pinkball.x = canvas.w/2;
    pinkball.y = canvas.h/2;
    pinkball.scale = 2;
    pinkball.layer = 4;

    purpleball = new Group(); // corrected instantiation
    purpleball.diameter = 6;
    purpleball.collider = "dynamic";
    purpleball.color = color(255, 255, 255);
    purpleball.stroke = '#a138ff';
    purpleball.strokeWeight = 4;
    purpleball.x = canvas.w/2;
    purpleball.y = canvas.h/2+10;
    purpleball.scale = 2;
    purpleball.layer = 4;

    blueball = new Group(); // corrected instantiation
    blueball.diameter = 6;
    blueball.collider = "dynamic";
    blueball.color = color(255, 255, 255);
    blueball.stroke = '#00a9ff';
    blueball.strokeWeight = 4;
    blueball.x = canvas.w/2;
    blueball.y = canvas.h/2+20; // equivalent to +10+10
    blueball.scale = 2;
    blueball.layer = 4;

    greenball = new Group(); // corrected instantiation
    greenball.diameter = 6;
    greenball.collider = "dynamic";
    greenball.color = color(255, 255, 255);
    greenball.stroke = '#13ce0d';
    greenball.strokeWeight = 4;
    greenball.x = canvas.w/2;
    greenball.y = canvas.h/2+30; // equivalent to +10+10+10
    greenball.scale = 2;
    greenball.layer = 4;

	orangeball = new Group(); // corrected instantiation
    orangeball.diameter = 6;
    orangeball.collider = "dynamic";
    orangeball.color = color(255, 255, 255);
    orangeball.stroke = '#ff560a';
    orangeball.strokeWeight = 4;
    orangeball.x = canvas.w/2;
    orangeball.y = canvas.h/2+40; // equivalent to +10+10+10+10
    orangeball.scale = 2;
    orangeball.layer = 4;

	yellowball = new Group(); // corrected instantiation
    yellowball.diameter = 6;
    yellowball.collider = "dynamic";
    yellowball.color = color(255, 255, 255);
    yellowball.stroke = '#ffb00b';
    yellowball.strokeWeight = 4;
    yellowball.x = canvas.w/2;
    yellowball.y = canvas.h/2+50; // equivalent to +10+10+10+10+10
    yellowball.scale = 2;
    yellowball.layer = 4;

	//pinkball.amount = 1; purpleball.amount = 1; blueball.amount = 1; greenball.amount = 1; orangeball.amount = 1; yellowball.amount = 1;

	// Initialise Man Sprites Locations
	man1.layer = 5; man2.layer = 5; man3.layer = 5; man4.layer = 5; man5.layer = 5; pipe.layer = 4; pipe.collider = 'none';
	man1.rotationLock = true; man2.rotationLock = true; man3.rotationLock = true; man4.rotationLock = true; man5.rotationLock = true;
	man1.width = 28.8/2; man1.height = 74.3/2; man2.width = 28.8/2; man2.height = 74.3/2; man3.width = 28.8/2; man3.height = 74.3/2; man4.width = 28.8/2; man4.height = 74.3/2; man5.width = 28.8/2; man5.height = 74.3/2; pipe.width = 67.3/2; pipe.height = 69.9/2;
	man1.collider = 'dynamic'; man2.collider = 'dynamic'; man3.collider = 'dynamic'; man4.collider = 'dynamic'; man5.collider = 'dynamic';
    man1.scale = 2; man2.scale = 2; man3.scale = 2; man4.scale = 2; man5.scale = 2; pipe.scale = 2;


	balls.collider = 'dynamic'; balls.scale = 2;
	
	man1.x = (canvas.w/2); man1.y = (canvas.h/15)*7; man2.x = (canvas.w/6*4); man2.y = (canvas.h/15)*8.5; man3.x = (canvas.w/6*2); man3.y = (canvas.h/15)*8.5; man4.x = (canvas.w/8*3); man4.y = (canvas.h/15)*10.2; man5.x = (canvas.w/8*5); man5.y = (canvas.h/15)*10.2;
    pipe.x = (canvas.w/2); pipe.y = (canvas.h/15)*9;

	// Gradient Background, 1080x1920 ->
	gradient = new Sprite();
    gradient.x = (canvas.w/2); gradient.y = (canvas.h/2);
	gradient.scale.x = 2; gradient.scale.y = 2;
	gradient.width = canvas.w; gradient.height = canvas.h;
    gradient.layer = 0; gradient.collider = 'none';
    gradient.image = 'assets/-_orange-gradient.png'; gradient.sleeping = true;

	// Canvas Bounding Box
	boundarybox = new Sprite();
	boundarybox.width = canvas.w; boundarybox.height = canvas.h; boundarybox.shape = 'chain';
	boundarybox.x = (canvas.w/2); boundarybox.y = (canvas.h/2); boundarybox.stroke = color(255); boundarybox.strokeWeight = 10;
	boundarybox.collider = 'static'; boundarybox.layer = 0; boundarybox.visible = false;

	// Puppet Sprite
	puppet = new Sprite();
	puppet.width = canvas.w; puppet.height = (canvas.w*0.8);
	puppet.x = (canvas.w/2); puppet.y = (canvas.h/2)+(puppet.height/2); puppet.scale = 1;
	puppet.scale.x = 2; puppet.scale.y = 2;
	puppet.collider = 'none'; puppet.layer = 1;
	puppet.image = 'assets/-_puppet.png'; 

	// Eyes Sprite
    eyes.x = (canvas.w/2); eyes.y = (canvas.h/2)+(puppet.height/1.58); eyes.scale = 1;
	eyes.scale.x = 2; eyes.scale.y = 2;
	eyes.collider = 'none'; eyes.layer = 5;

	// Invisible Borders
	invisborder = new Sprite(canvas.w/2, canvas.h/6*2, [50, -45, 890, -45, 1000, 90, 890, 90, 50, -45]);
	invisborder.stroke = color(0); invisborder.strokeWeight = 20;
	invisborder.collider = 'static'; invisborder.layer = 5; invisborder.scale = 1;
	invisborder.visible = false;

	// Lower Speech Bubble Box 
	dwbubble = new Sprite();
	dwbubble.x = (canvas.w/2); dwbubble.y = puppet.y/2;
	dwbubble.width = 989.5/2; dwbubble.height = 652.1/2;
	dwbubble.collider = 'none'; dwbubble.layer = 0; dwbubble.scale = 2;
	dwbubble.image = 'assets/-_chat-bubble.png'; dwbubble.sleeping = true;

	// Upper Speech Bubble Box 
	upbubble = new Sprite();
	upbubble.width = 989.5/2; upbubble.height = 652.1/2;
	upbubble.x = (canvas.w/2); upbubble.y = 200 + upbubble.height/2;
	upbubble.collider = 'none'; upbubble.layer = 0; upbubble.scale = 2;
	upbubble.image = 'assets/-_chat-bubble.png'; upbubble.sleeping = true;

	// Nose Sprite
	nose = new Sprite();
	nose.scale.x = 2; nose.scale.y = 2;
	nose.x = (canvas.w/2); nose.y = (canvas.h/15)*12;
	nose.collider = 'none'; nose.image = 'assets/-_nose.png';

    /*// OG Logo Text 
	logoText = new Sprite();
	logoText.fill = color(0, 0, 0, 0);    // Completely transparent fill
	logoText.stroke = color(0, 0, 0, 0);  // Remove stroke/borders
	logoText.collider = 'none'; logoText.scale = 2; 
	logoText.x = (canvas.w/2); logoText.y = (canvas.h/18)*1.3;
	logoText.textColor = '#550c5d';	logoText.font = 'assets/somatic.ttf';
	logoText.text = 'ways of seeing'; logoText.textSize = 140; logoText.opacity = 0.2; */

	// Logo Image
	//logoImage = new Sprite();
	//logoImage.x = (canvas.w/2); logoImage.y = (canvas.h/18)*1.3;
	//logoImage.width = 140; logoImage.height = 140;
	//logoImage.collider = 'none'; 
	//logoImage.image = 'assets/-_logo.png'; logoImage.scale = 2;

    // Initialize the group after p5play is ready
    logoLetters = new Group();
    
    // Define the text and spacing
    const textConfig = [
      { word: 'ways', spacings: [90, 80, 65, 11] },  // Spacing after each letter in 'ways'
      { word: 'of', spacings: [63, -1] },            // Spacing after each letter in 'of'
      { word: 'seeing', spacings: [65, 70, 50, 50, 80, 0] }  // Spacing after each letter in 'seeing'
    ];
    const wordSpacing = 100;   // Space between words
    const y = (canvas.h/18)*1.3;

    // First calculate total width to center everything
    let totalWidth = 0;
    for (let wordConfig of textConfig) {
      // Add up all letter spacings in the word
      totalWidth += wordConfig.spacings.reduce((sum, spacing) => sum + spacing, 0);
    }
    totalWidth += (textConfig.length - 1) * wordSpacing;  // Add space between words
    
    // Calculate starting X position to center the whole text
    let currentX = (canvas.w/2) - (totalWidth/2)+0;

    // Create sprites for each letter
    for (let wordIndex = 0; wordIndex < textConfig.length; wordIndex++) {
      const wordConfig = textConfig[wordIndex];
      const word = wordConfig.word;
      
      // Create letters for this word
      for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
        let letter = new Sprite(currentX, y);
        letter.text = word[letterIndex];
        letter.textSize = 140;
        letter.textColor = '#550c5d';
        letter.font = 'assets/somatic.ttf';
        letter.scale = 2;
        letter.layer = 19;
        letter.fill = color(0, 0, 0, 0);    // Transparent fill
        letter.stroke = color(0, 0, 0, 0);  // No stroke
        
        // Add collision properties
        letter.collider = 'none';  // Start with no collisions
        letter.mass = 0.1;
        letter.bounciness = 0.4;
        letter.overlaps(allSprites);  // Start with overlapping
        
        // Set up collisions
        letter.collide(boundarybox);  // Collide with main boundaries
        letter.collide(invisborder);  // Collide with invisible border
        letter.collides(mouthBallsGroup);  // Collide with mouth balls
		letter.collides(letter);  // Collide with letter
        
        // Store initial properties for later
        letter.initialX = currentX;
        letter.initialY = y;
        
        logoLetters.add(letter);
        
        // Move to next letter position
        currentX += wordConfig.spacings[letterIndex];
      }
      
      // Add word spacing
      if (wordIndex < textConfig.length - 1) {
        currentX += wordSpacing;
      }
    }

	// Cursor Sprite
	cursor.width = 10; cursor.height = 10; cursor.offset.x = 0; cursor.offset.y = 0;

	cursorHitbox = new Sprite(); cursorHitbox.visible = false;
	cursorHitbox.width = 10; cursorHitbox.height = 10; 

	// Author Text
	authorText = new Sprite();
	authorText.fill = color(0, 0, 0, 0);    // Completely transparent fill
	authorText.stroke = color(0, 0, 0, 0);  // Remove stroke/borders
	authorText.collider = 'none'; authorText.scale = 2; authorText.layer = 5;
	authorText.x = (canvas.w/2); authorText.y = (canvas.h/18)*2.18;
	authorText.textColor = '#550c5d';	authorText.font = 'assets/somatic.ttf';
	authorText.text = 'by john berger'; authorText.textSize = 140/3; authorText.opacity = 0.2;

	// Info Text
	infoText = new Sprite();
	infoText.fill = color(0, 0, 0, 0);    // Completely transparent fill
	infoText.stroke = color(0, 0, 0, 0);  // Remove stroke/borders
	infoText.collider = 'none'; infoText.scale = 2; infoText.layer = 5;
	infoText.x = (canvas.w/2); infoText.y = (canvas.h/18)*3.58;
	infoText.text = 'Perception varies from one person to another,\nby the way their brain processes information.\n\nEach ball corresponds to a word in the book,\nand the words are grouped by the way they\nare perceived by the brain.';
	infoText.textSize = 140/4; infoText.opacity = 0.2; infoText.textAlign = LEFT; infoText.textLeading = 2;
	infoText.textColor = '#550c5d';	infoText.font = 'assets/somatic.ttf';


	
	// Legend Texts
	legendText = new Sprite();
	legendText.fill = color(0, 0, 0, 0);    // Completely transparent fill
	legendText.stroke = color(0, 0, 0, 0);  // Remove stroke/borders
	legendText.collider = 'none'; legendText.scale = 2; legendText.layer = 5;
	legendText.x = (canvas.w/2); legendText.y = (canvas.h/18)*6.67;
	legendText.textColor = '#550c5d';	legendText.font = 'assets/somatic.ttf';
	legendText.text = 'Legend:'; legendText.textSize = 140/6; legendText.opacity = 1;

	// Legend Bubble Array Variables
	let horiOffset = 85; let vertOffset = 0; vertHeight = canvas.h/2.4; horiWidth = canvas.w/2;

	// Pink Text
	pinkText = new Sprite(); pinkText.diameter = 36;
	pinkText.fill = '#ff0178'; pinkText.stroke = '#fff9ea'; pinkText.strokeWeight = 5;
	pinkText.collider = 'none'; pinkText.scale = 2; pinkText.layer = 6;
	pinkText.x = (horiWidth)+(-horiOffset/2); pinkText.y = (vertHeight)+(vertOffset)-25;
	pinkText.text = 'Social'; pinkText.textSize = 16; pinkText.opacity = 1;
	pinkText.textColor = '#fff9ea'; pinkText.font = 'assets/somatic.ttf';

	// Purple Text
	purpleText = new Sprite(); purpleText.diameter = 36;
	purpleText.fill = '#a138ff'; purpleText.stroke = '#fff9ea'; purpleText.strokeWeight = 5;
	purpleText.collider = 'none'; purpleText.scale = 2; purpleText.layer = 6;
	purpleText.x = (horiWidth)+(horiOffset/2); purpleText.y = (vertHeight)+(vertOffset*2)-25;
	purpleText.text = 'Mental'; purpleText.textSize = 16; purpleText.opacity = 1;
	purpleText.textColor = '#fff9ea'; purpleText.font = 'assets/somatic.ttf';

	// Blue Text
	blueText = new Sprite(); blueText.diameter = 36;
	blueText.fill = '#00a9ff'; blueText.stroke = '#fff9ea'; blueText.strokeWeight = 5;
	blueText.collider = 'none'; blueText.scale = 2; blueText.layer = 6;
	blueText.x = (horiWidth)+(horiOffset*1.5); blueText.y = (vertHeight)+(vertOffset*3);
	blueText.text = 'Spatial'; blueText.textSize = 16; blueText.opacity = 1;
	blueText.textColor = '#fff9ea'; blueText.font = 'assets/somatic.ttf';

	// Green Text
	greenText = new Sprite(); greenText.diameter = 36;
	greenText.fill = '#13ce0d'; greenText.stroke = '#fff9ea'; greenText.strokeWeight = 5;
	greenText.collider = 'none'; greenText.scale = 2; greenText.layer = 6;
	greenText.x = (horiWidth)+(horiOffset*2.5); greenText.y = (vertHeight)+(vertOffset*4)+35;
	greenText.text = 'Visual'; greenText.textSize = 16; greenText.opacity = 1;
	greenText.textColor = '#fff9ea'; greenText.font = 'assets/somatic.ttf';

	// Orange Text
	orangeText = new Sprite(); orangeText.diameter = 36;
	orangeText.fill = '#ff560a'; orangeText.stroke = '#fff9ea'; orangeText.strokeWeight = 5;
	orangeText.collider = 'none'; orangeText.scale = 2; orangeText.layer = 6;
	orangeText.x = (horiWidth)+(-horiOffset*1.5); orangeText.y = (vertHeight)+(vertOffset*5);
	orangeText.text = 'Time'; orangeText.textSize = 16; orangeText.opacity = 1;
	orangeText.textColor = '#fff9ea'; orangeText.font = 'assets/somatic.ttf';

	// Yellow Text
	yellowText = new Sprite(); yellowText.diameter = 40;
	yellowText.fill = '#ffb00b'; yellowText.stroke = '#fff9ea'; yellowText.strokeWeight = 5;
	yellowText.collider = 'none'; yellowText.scale = 2; yellowText.layer = 6;
	yellowText.x = (horiWidth)+(-horiOffset*2.5); yellowText.y = (vertHeight)+(vertOffset*6)+35;
	yellowText.text = 'Danger'; yellowText.textSize = 16; yellowText.opacity = 1;
	yellowText.textColor = '#fff9ea'; yellowText.font = 'assets/somatic.ttf';

	// bookText Sprite
	bookText = new Sprite(); 
	bookText.fill = color(0, 0, 0, 0);    // Completely transparent fill
    bookText.stroke = color(0, 0, 0, 0);  // Remove stroke/borders
	bookText.collider = 'none'; bookText.scale = 2;
	bookText.x = (canvas.w/2); bookText.y = (canvas.h/18)*16;
	bookText.textColor = '#550c5d';	

	// Circle Brain-Box Bounding Box
	brainbox = new Sprite(); 
	brainbox.diameter = canvas.w/1.9; brainbox.shape = 'chain';
    brainbox.x = canvas.w/2; brainbox.y = canvas.h/1.67;
    brainbox.collider = 'static'; brainbox.fill = color(0, 0, 0, 0);  // Completely transparent fill
    brainbox.stroke = color(255); brainbox.strokeWeight = 3;        // Adjust this number to make the stroke thicker/thinner
	brainbox.visible = false; // Hide it so it doesn't show on screen

	// After creating your brainbox sprite, create a sprite for its true center
    brainboxCenter = new Sprite(brainbox.x, brainbox.y, canvas.w/2.7, canvas.w/2.7);
    brainboxCenter.visible = false; // Hide it so it doesn't show on screen

	// Circle Head-Box Bounding Box
	headbox = new Sprite(); 
	headbox.diameter = canvas.w/1.48; headbox.shape = 'chain';
    headbox.x = canvas.w/2; headbox.y = canvas.h/1.568;
    headbox.collider = 'static'; headbox.fill = color(0, 0, 0, 0);  // Completely transparent fill
    headbox.stroke = color(255); headbox.strokeWeight = 3;        // Adjust this number to make the stroke thicker/thinner	
    headbox.visible = false; headbox.friction = -0.5;

	// Mouth Sprite
	mouth.width = 142.6/2; mouth.height = 57.9/2;
	mouth.x = canvas.w/2; mouth.y = canvas.h/1.202;
	mouth.collider = 'none'; mouth.layer = 5; mouth.scale = 2;

	// Ball Spawning Regions
	// PINK / SOCIAL WORDS
    pinkreg1 = new Sprite(); 
	pinkreg1.diameter = canvas.w/6; pinkreg1.shape = 'chain';
    pinkreg1.x = canvas.w/2; pinkreg1.y = canvas.h/1.45;
    pinkreg1.collider = 'none'; pinkreg1.fill = "color(0, 0, 0, 0)";  
    pinkreg1.stroke = '#ff0178'; pinkreg1.strokeWeight = 3;     
	pinkreg1.visible = false;

	pinkreg2 = new Sprite(); 
	pinkreg2.diameter = canvas.w/8; pinkreg2.shape = 'chain';
    pinkreg2.x = canvas.w/3.5; pinkreg2.y = canvas.h/1.85;
    pinkreg2.collider = 'none'; pinkreg2.fill = "color(0, 0, 0, 0)";  
    pinkreg2.stroke = '#ff0178'; pinkreg2.strokeWeight = 3;   
	pinkreg2.visible = false;

	pinkreg3 = new Sprite(); 
	pinkreg3.diameter = canvas.w/8; pinkreg3.shape = 'chain';
    pinkreg3.x = canvas.w/1.4; pinkreg3.y = canvas.h/1.85;
    pinkreg3.collider = 'none'; pinkreg3.fill = "color(0, 0, 0, 0)";  
    pinkreg3.stroke = '#ff0178'; pinkreg3.strokeWeight = 3;   
	pinkreg3.visible = false;

	// PURPLE / MENTAL WORDS
	purplereg1 = new Sprite(); 
	purplereg1.diameter = canvas.w/8; purplereg1.shape = 'chain';
    purplereg1.x = canvas.w/1.55; purplereg1.y = canvas.h/1.45;
    purplereg1.collider = 'none'; purplereg1.fill = "color(0, 0, 0, 0)";  
    purplereg1.stroke = '#a138ff'; purplereg1.strokeWeight = 3;
	purplereg1.visible = false;

	purplereg2 = new Sprite(); 
	purplereg2.diameter = canvas.w/8; purplereg2.shape = 'chain';
    purplereg2.x = canvas.w/2.79; purplereg2.y = canvas.h/1.45;
    purplereg2.collider = 'none'; purplereg2.fill = "color(0, 0, 0, 0)";  
    purplereg2.stroke = '#a138ff'; purplereg2.strokeWeight = 3;   
	purplereg2.visible = false;

	purplereg3 = new Sprite(); 
	purplereg3.diameter = canvas.w/8; purplereg3.shape = 'chain';
    purplereg3.x = canvas.w/2; purplereg3.y = canvas.h/2;
    purplereg3.collider = 'none'; purplereg3.fill = "color(0, 0, 0, 0)";  
    purplereg3.stroke = '#a138ff'; purplereg3.strokeWeight = 3;   
	purplereg3.visible = false;
	//GREEN / VISUAL, TACTILE & NUMBER WORDS
	greenreg1 = new Sprite(); 
	greenreg1.diameter = canvas.w/6; greenreg1.shape = 'chain';
    greenreg1.x = canvas.w/2.7; greenreg1.y = canvas.h/1.9;
    greenreg1.collider = 'none'; greenreg1.fill = "color(0, 0, 0, 0)";  
    greenreg1.stroke = '#13ce0d'; greenreg1.strokeWeight = 3;   
	greenreg1.visible = false;

	greenreg2 = new Sprite(); 
	greenreg2.diameter = canvas.w/6; greenreg2.shape = 'chain';
    greenreg2.x = canvas.w/1.6; greenreg2.y = canvas.h/1.9;
    greenreg2.collider = 'none'; greenreg2.fill = "color(0, 0, 0, 0)";  
    greenreg2.stroke = '#13ce0d'; greenreg2.strokeWeight = 3;   
	greenreg2.visible = false;

	greenreg3 = new Sprite(); 
	greenreg3.diameter = canvas.w/6; greenreg3.shape = 'chain';
    greenreg3.x = canvas.w/2.7; greenreg3.y = canvas.h/1.46;
    greenreg3.collider = 'none'; greenreg3.fill = "color(0, 0, 0, 0)";  
    greenreg3.stroke = '#13ce0d'; greenreg3.strokeWeight = 3;  	 
	greenreg3.visible = false;

	greenreg4 = new Sprite(); 
	greenreg4.diameter = canvas.w/6; greenreg4.shape = 'chain';
    greenreg4.x = canvas.w/1.6; greenreg4.y = canvas.h/1.46;
    greenreg4.collider = 'none'; greenreg4.fill = "color(0, 0, 0, 0)";  
    greenreg4.stroke = '#13ce0d'; greenreg4.strokeWeight = 3;   
	greenreg4.visible = false;

	// BLUE / OUTDOOR WORDS
	bluereg1 = new Sprite(); 
	bluereg1.diameter = canvas.w/2.5; bluereg1.shape = 'chain';
    bluereg1.x = canvas.w/2; bluereg1.y = canvas.h/1.65;
    bluereg1.collider = 'none'; bluereg1.fill = "color(0, 0, 0, 0)";  
    bluereg1.stroke = '#00a9ff'; bluereg1.strokeWeight = 3;   
	bluereg1.visible = false;

	//ORANGE / PLACE, TIME WORDS
	orangereg1 = new Sprite(); 
	orangereg1.diameter = canvas.w/4; orangereg1.shape = 'chain';
    orangereg1.x = canvas.w/1.8; orangereg1.y = canvas.h/1.51;
    orangereg1.collider = 'none'; orangereg1.fill = "color(0, 0, 0, 0)";  
    orangereg1.stroke = '#ff560a'; orangereg1.strokeWeight = 3;   
	orangereg1.visible = false;

	orangereg2 = new Sprite(); 
	orangereg2.diameter = canvas.w/6; orangereg2.shape = 'chain';
    orangereg2.x = canvas.w/1.6; orangereg2.y = canvas.h/1.9;
    orangereg2.collider = 'none'; orangereg2.fill = "color(0, 0, 0, 0)";  
    orangereg2.stroke = '#ff560a'; orangereg2.strokeWeight = 3; 	
	orangereg2.visible = false;

	//YELLOW / BODYPARTS, VIOLENCE WORDS
	yellowreg1 = new Sprite(); 
	yellowreg1.diameter = canvas.w/3; yellowreg1.shape = 'chain';
    yellowreg1.x = canvas.w/2.2; yellowreg1.y = canvas.h/1.56;
    yellowreg1.collider = 'none'; yellowreg1.fill = "color(0, 0, 0, 0)";  
    yellowreg1.stroke = '#ffb00b'; yellowreg1.strokeWeight = 3;   	
	yellowreg1.visible = false;

	yellowreg2 = new Sprite(); 
	yellowreg2.diameter = canvas.w/7; yellowreg2.shape = 'chain';
    yellowreg2.x = canvas.w/1.5; yellowreg2.y = canvas.h/1.75;
    yellowreg2.collider = 'none'; yellowreg2.fill = "color(0, 0, 0, 0)";  
    yellowreg2.stroke = '#ffb00b'; yellowreg2.strokeWeight = 3; 		
	yellowreg2.visible = false;

    // Create control buttons
    const buttonY = canvas.h - 50;
    const spacing = 65;
    
    // Pause Button
    pauseButton = new Sprite(50, buttonY, buttonSize);
    pauseButton.color = '#fff9ea';
    pauseButton.text = autoCyclePaused ? '▶️' : '⏸️'; pauseButton.textSize = 20;
	pauseButton.strokeWeight = 0;
    pauseButton.layer = 20;
    pauseButton.collider = 'none'; 
    
    // Speed Button
    speedButton = new Sprite(50 + spacing, buttonY, buttonSize);
    speedButton.color = '#fff9ea';
    speedButton.text = '1x';
	speedButton.textColor = '#550c5d'; speedButton.textSize = 20;
	speedButton.strokeWeight = 0;
    speedButton.layer = 20;
    speedButton.collider = 'none'; 
    
    // Mute Button
    muteButton = new Sprite(50 + spacing * 2, buttonY, buttonSize);
    muteButton.color = '#fff9ea';
    muteButton.text = '🔊';
	muteButton.textColor = '#550c5d'; muteButton.textSize = 20;
	muteButton.strokeWeight = 0;
    muteButton.layer = 20;
    muteButton.collider = 'none';  

    // Reset Button (start as invisible)
    resetButton = new Sprite(50 + spacing * 3, buttonY, buttonSize);
    resetButton.color = '#fff9ea';
    resetButton.text = '🔄';
    resetButton.textColor = '#550c5d';
    resetButton.textSize = 20;
    resetButton.strokeWeight = 0;
    resetButton.layer = 20;
    resetButton.collider = 'none';
    resetButton.visible = false;  // Start hidden
}

// In your findNearestBall function, check if the ball has already been picked up:
function findNearestBall(manSprite) {
    let balls = [];

    // Only add balls that exist AND haven't been picked up
	if (pinkball.length > 0 && !pinkball[0].pickedUp)
        balls.push({ sprite: pinkball[0], color: 'pink' });
    if (purpleball.length > 0 && !purpleball[0].pickedUp)
        balls.push({ sprite: purpleball[0], color: 'purple' });
    if (blueball.length > 0 && !blueball[0].pickedUp)
        balls.push({ sprite: blueball[0], color: 'blue' });
    if (greenball.length > 0 && !greenball[0].pickedUp)
        balls.push({ sprite: greenball[0], color: 'green' });
    if (orangeball.length > 0 && !orangeball[0].pickedUp)
        balls.push({ sprite: orangeball[0], color: 'orange' });
    if (yellowball.length > 0 && !yellowball[0].pickedUp)
        balls.push({ sprite: yellowball[0], color: 'yellow' });

    let nearestBall = null;
    let shortestDistance = Infinity;
    for (let ball of balls) {
        let distance = dist(manSprite.x, manSprite.y, ball.sprite.x, ball.sprite.y);
        if (distance < shortestDistance) {
            shortestDistance = distance;
            nearestBall = ball;
        }
    }

    if (nearestBall) {
        //console.log("Found nearest ball:", nearestBall.color, "at", nearestBall.sprite.x, nearestBall.sprite.y);
    }
    return nearestBall;
}

// Called when a man's dropped ball reaches the pipe.
// ballColor is the color for that specific ball.
function handleBallEnteredPipe(ballColor) {
	// If this is the first ball, start the mouth animation.
	if (mouthstate === 0) {
		
	  mouthstate = 1;
	  mouthTimer = 0;
	  //console.log("First ball entered pipe: starting mouth animation");
	  // Spawn a colored ball from the mouth
	  spawnMouthBall(ballColor);
	  //playRandomNya();
	} 
	// Otherwise, if the animation is already running...
	else if (mouthstate === 1) {
	  // If we're still in the first phase, skip ahead.
	  if (mouthTimer < 31) {
		mouthTimer = 31;
		//console.log("Additional ball: skipping to mouth_idle_reverse phase");
	  }
	  // Optionally, you can also spawn another ball here:
	  spawnMouthBall(ballColor);
	  //playRandomNya();
	}
  }
  

  function spawnMouthBall(ballColor) {
	// Create a new ball sprite at the mouth's current position.
	let newBall = createSprite(mouth.x, mouth.y, random(30, 20));
	playRandomBloop()
	// Determine the hex value of the color.
	let hexColor;
	if (typeof ballColor === "string") {
	  if (ballColor.charAt(0) === "#") {
		// Already a hex value.
		hexColor = ballColor;
	  } else {
		// If it's not a hex code, convert the known color names.
		switch (ballColor.toLowerCase()) {
		  case "pink":
			hexColor = "#ff0178";
			break;
		  case "purple":
			hexColor = "#a138ff";
			break;
		  case "blue":
			hexColor = "#00a9ff";
			break;
		  case "green":
			hexColor = "#13ce0d";
			break;
		  case "orange":
			hexColor = "#ff560a";
			break;
		  case "yellow":
			hexColor = "#ffb00b";
			break;
		  default:
			hexColor = "#FFFFFF";
			break;
		}
	  }
	} else {
	  hexColor = "#FFFFFF"; // default to white if no valid color is provided
	}
  
	// Log for debugging
	//console.log("Spawning mouth ball with color:", ballColor, "mapped to:", hexColor);
	newBall.colour = hexColor; newBall.collider = 'dynamic'; 
	newBall.collide(boundarybox); newBall.collide(headbox); mouthBallsGroup.collide(invisborder); mouthBallsGroup.collides(mouthBallsGroup); 
	newBall.velocity.x = random(-10, 10); newBall.velocity.y = random(-30, -15);
	newBall.strokeWeight = 0; 

	// Set a custom gravity (negative value for upward acceleration)
	newBall.myGravity = -0.2;
	
	// Add the new ball to the group that holds mouth-spawned balls.
	mouthBallsGroup.add(newBall);
	
	// Add trail properties
	newBall.trailSprites = [];
	newBall.maxTrail = TRAIL_LENGTH;
	
	// Add custom update for trail
	newBall.update = function() {
		// Calculate total velocity
		let totalVelocity = Math.sqrt(this.velocity.x * this.velocity.x + this.velocity.y * this.velocity.y);
		
		// Only create trails if moving fast enough
		if (totalVelocity > TRAIL_VELOCITY_THRESHOLD) {
			// Create new trail sprite
			let trail = new Sprite(this.x, this.y);
			trail.diameter = this.diameter * 0.8;
			trail.color = this.colour;
			trail.opacity = TRAIL_OPACITY;
			trail.life = 10; trail.strokeWeight = 0;
			trail.collider = 'none';
			trail.layer = this.layer - 1;
			
			// Add to trail array
			this.trailSprites.unshift(trail);
			
			// Remove old trails
			if (this.trailSprites.length > this.maxTrail) {
				this.trailSprites.pop().remove();
			}
		} else {
			// Remove all trails when moving slowly
			this.trailSprites.forEach(trail => {
				if (trail) trail.remove();
			});
			this.trailSprites = [];
		}
	};
	
	return newBall;

}

 // Touch / Click Controls

 function touchStart(event) {
	touchStartX = event.touches[0].clientX;
	touchStartY = event.touches[0].clientY;
  }
  
  function touchMove(event) {
	touchMoveX = event.touches[0].clientX;
	touchMoveY = event.touches[0].clientY;
	// Debounce touch move events to reduce latency
	setTimeout(() => {
	  // Handle touch move event
	}, 50);
  }
  
  function touchEnd(event) {
	touchEndX = event.touches[0].clientX;
	touchEndY = event.touches[0].clientY;
	// Throttle touch end events to reduce latency
	setTimeout(() => {
	  // Handle touch end event
	}, 750);
  }

  function touchStarted() {
    if (isTouchDevice && touches.length > 0) {
        let touchX = touches[0].x;
        let touchY = touches[0].y;

        // Store initial touch position
        touchStartX = touchX;
        touchStartY = touchY;

        // Handle button touches first
        if (dist(touchX, touchY, pauseButton.x, pauseButton.y) < buttonSize/2) {
            autoCyclePaused = !autoCyclePaused;
            pauseButton.text = autoCyclePaused ? '▶️' : '⏸️';
            return false;
        }
        
        if (dist(touchX, touchY, speedButton.x, speedButton.y) < buttonSize/2) {
            worldSpeed = worldSpeed === 1 ? 2 : 1;
            world.timeScale = worldSpeed;
            speedButton.text = worldSpeed + 'x';
            return false;
        }
        
        if (dist(touchX, touchY, muteButton.x, muteButton.y) < buttonSize/2) {
            isMuted = !isMuted;
            muteButton.text = isMuted ? '🔇' : '🔊';
            bgm.volume = isMuted ? 0 : 0.08;
            return false;
        }
        
        if (dist(touchX, touchY, resetButton.x, resetButton.y) < buttonSize/2 && resetButton.visible) {
            handleReset();
            return false;
        }
        
        // Check for explosion trigger in top third
        if (touchY < canvas.h / 3 && !isLogoExploded && logoLetters) {
            isLogoExploded = true;
            resetButton.visible = true;

            for (let l of logoLetters) {
                if (!l.removed) {
                    l.collider = 'dynamic';
                    l.collide(boundarybox);
                    l.collide(invisborder);
                    l.collides(mouthBallsGroup);
                    l.collides(logoLetters);
                    
                    l.vel.x = random(-2, 2);
                    l.vel.y = -0.3;
                    l.rotationSpeed = random(-1, 1);
                    l.width = 65;
                    l.height = 65;
                    l.myGravity = 0.02;
                }
            }
            return false;
        }

        // Check for draggable mouth balls
        if (mouthBallsGroup) {
            for (let ball of mouthBallsGroup) {
                if (ball && !ball.removed &&
                    touchX >= ball.x - ball.width/2 && touchX <= ball.x + ball.width/2 &&
                    touchY >= ball.y - ball.height/2 && touchY <= ball.y + ball.height/2) {
                    draggedMouthBall = ball;
                    ball.velocity.x = 0;
                    ball.velocity.y = 0;
                    isDragging = true;
                    return false;
                }
            }
        }

        // Check for draggable letters only after explosion
        if (isLogoExploded && logoLetters) {
            for (let letter of logoLetters) {
                if (!letter.removed && dist(touchX, touchY, letter.x, letter.y) < 70) {
                    draggedLetter = letter;
                    letter.vel.x = 0;
                    letter.vel.y = 0;
                    isDragging = true;
                    return false;
                }
            }
        }
    }
    return false;
}

function touchMoved() {
    if (!isTouchDevice || touches.length === 0) return false;

    let touchX = touches[0].x;
    let touchY = touches[0].y;

    // Handle dragging
    if (isDragging) {
        if (draggedLetter) {
            // Update letter position
            draggedLetter.x = touchX;
            draggedLetter.y = touchY;
        } else if (draggedMouthBall) {
            // Update ball position
            draggedMouthBall.x = touchX;
            draggedMouthBall.y = touchY;
        }
    } else {
        // Handle camera movement when not dragging
        let deltaX = (touchX - touchStartX) * sensitivity;
        let deltaY = (touchY - touchStartY) * sensitivity;

        if (invertControls) {
            deltaX = -deltaX;
            deltaY = -deltaY;
        }

        // Enable if you want to move camera with touch
        /*camera.x += deltaX;
        camera.y += deltaY;*/

        touchStartX = touchX;
        touchStartY = touchY;
    }
    return false;
}

function touchEnded() {
    if (draggedLetter || draggedMouthBall) {
        draggedLetter = null;
        draggedMouthBall = null;
        isDragging = false;
    }
    return false;
}

// Helper function to handle reset
function handleReset() {
    resetButton.visible = false;
    authorText.opacity = 0.2;
    infoText.opacity = 0.2;
    
    if (logoLetters) {
        for (let letter of logoLetters) {
            if (letter) letter.remove();
        }
        logoLetters.removeAll();
    }
    
    isLogoExploded = false;
    logoLetters = new Group();
    
    // Recreate logo letters
    const textConfig = [
        { word: 'ways', spacings: [90, 80, 65, 11] },
        { word: 'of', spacings: [63, -1] },
        { word: 'seeing', spacings: [65, 70, 50, 50, 80, 0] }
    ];
    const wordSpacing = 100;
    const y = (canvas.h/18)*1.3;
    
    // Calculate total width
    let totalWidth = 0;
    for (let wordConfig of textConfig) {
        totalWidth += wordConfig.spacings.reduce((sum, spacing) => sum + spacing, 0);
    }
    totalWidth += (textConfig.length - 1) * wordSpacing;
    
    // Create new letters
    let currentX = (canvas.w/2) - (totalWidth/2);
    for (let wordIndex = 0; wordIndex < textConfig.length; wordIndex++) {
        const wordConfig = textConfig[wordIndex];
        const word = wordConfig.word;
        
        for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
            let letter = new Sprite(currentX, y);
            letter.text = word[letterIndex];
            letter.textSize = 140;
            letter.textColor = '#550c5d';
            letter.font = 'assets/somatic.ttf';
            letter.scale = 2;
            letter.layer = 19;
            letter.fill = color(0, 0, 0, 0);
            letter.stroke = color(0, 0, 0, 0);
            letter.collider = 'none';
            letter.overlaps(allSprites);
            
            logoLetters.add(letter);
            currentX += wordConfig.spacings[letterIndex];
        }
        if (wordIndex < textConfig.length - 1) {
            currentX += wordSpacing;
        }
    }
    return;
}

// Get Input Position for Touch Devices
function getInputPosition() {
  if (isTouchDevice && touches.length > 0) {  // Use comparison, not assignment.
    return {
      x: touches[0].x,
      y: touches[0].y
    };
  } else {
	cursor.visible = true;
    return {
      x: mouseX,  // Use mouseX/mouseY provided by p5.js
      y: mouseY
    };
  }
}


let targetDiameter = 76; let currentDiameter = 76; let targetTextSize = 16; let currentTextSize = 16; let lerpSpeed = 1;      

// Add these for each color if not already defined
let pinkCurrentDiameter = 76, pinkTargetDiameter = 76;
let blueCurrentDiameter = 76, blueTargetDiameter = 76;
let purpleCurrentDiameter = 76, purpleTargetDiameter = 76;
let greenCurrentDiameter = 76, greenTargetDiameter = 76;
let orangeCurrentDiameter = 76, orangeTargetDiameter = 76;

function mouseHover() {
    cursor.x = mouseX;
    cursor.y = mouseY;
    cursorHitbox.x = mouseX;
    cursorHitbox.y = mouseY;

    if (draggedLetter || draggedMouthBall) {
        cursor.changeAni('cursor_drag');
        return;
    }

    if (isTouchDevice) {
        let currentTime = millis();
        
        // Only reset states when switching to a new index
        if (currentTime - lastHoverTime >= HOVER_INTERVAL) {
            // Reset all visibility and sizes first
            resetAllVisibility();
            
            // Set states based on current cycle
            switch(currentHoverIndex) {
                case 0: // Yellow
                    yellowreg1.visible = yellowreg2.visible = true;
                    targetDiameter = CIRCLE_SIZE_LARGE;
                    orangeTargetDiameter = CIRCLE_SIZE_SMALL;
                    pinkTargetDiameter = CIRCLE_SIZE_SMALL;
                    purpleTargetDiameter = CIRCLE_SIZE_SMALL;
                    greenTargetDiameter = CIRCLE_SIZE_SMALL;
                    blueTargetDiameter = CIRCLE_SIZE_SMALL;
                    break;
                case 1: // Orange
                    orangereg1.visible = orangereg2.visible = true;
                    targetDiameter = CIRCLE_SIZE_SMALL;
                    orangeTargetDiameter = CIRCLE_SIZE_LARGE;
                    pinkTargetDiameter = CIRCLE_SIZE_SMALL;
                    purpleTargetDiameter = CIRCLE_SIZE_SMALL;
                    greenTargetDiameter = CIRCLE_SIZE_SMALL;
                    blueTargetDiameter = CIRCLE_SIZE_SMALL;
                    break;
                case 2: // Pink
                    pinkreg1.visible = pinkreg2.visible = pinkreg3.visible = true;
                    targetDiameter = CIRCLE_SIZE_SMALL;
                    orangeTargetDiameter = CIRCLE_SIZE_SMALL;
                    pinkTargetDiameter = CIRCLE_SIZE_LARGE;
                    purpleTargetDiameter = CIRCLE_SIZE_SMALL;
                    greenTargetDiameter = CIRCLE_SIZE_SMALL;
                    blueTargetDiameter = CIRCLE_SIZE_SMALL;
                    break;
                case 3: // Purple
                    purplereg1.visible = purplereg2.visible = purplereg3.visible = true;
					targetDiameter = CIRCLE_SIZE_SMALL;
                    orangeTargetDiameter = CIRCLE_SIZE_SMALL;
                    pinkTargetDiameter = CIRCLE_SIZE_SMALL;
                    purpleTargetDiameter = CIRCLE_SIZE_LARGE;
                    greenTargetDiameter = CIRCLE_SIZE_SMALL;
                    blueTargetDiameter = CIRCLE_SIZE_SMALL;
                    break;
                case 4: // Blue
                    bluereg1.visible = true;
					targetDiameter = CIRCLE_SIZE_SMALL;
                    orangeTargetDiameter = CIRCLE_SIZE_SMALL;
                    pinkTargetDiameter = CIRCLE_SIZE_SMALL;
                    purpleTargetDiameter = CIRCLE_SIZE_SMALL;
                    greenTargetDiameter = CIRCLE_SIZE_SMALL;
                    blueTargetDiameter = CIRCLE_SIZE_LARGE;
                    break;
                case 5: // Green
                    greenreg1.visible = greenreg2.visible = greenreg3.visible = greenreg4.visible = true;
					targetDiameter = CIRCLE_SIZE_SMALL;
                    orangeTargetDiameter = CIRCLE_SIZE_SMALL;
                    pinkTargetDiameter = CIRCLE_SIZE_SMALL;
                    purpleTargetDiameter = CIRCLE_SIZE_SMALL;
                    greenTargetDiameter = CIRCLE_SIZE_LARGE;
                    blueTargetDiameter = CIRCLE_SIZE_SMALL;
                    break;
            }
            
            currentHoverIndex = (currentHoverIndex + 1) % 6;
            lastHoverTime = currentTime;
        }
        
        // Apply smooth transitions
        let currentLerpSpeed = TABLET_LERP_SPEED;
        
        // Smoothly interpolate diameters
        currentDiameter = lerp(currentDiameter, targetDiameter, currentLerpSpeed);
        pinkCurrentDiameter = lerp(pinkCurrentDiameter, pinkTargetDiameter, currentLerpSpeed);
        blueCurrentDiameter = lerp(blueCurrentDiameter, blueTargetDiameter, currentLerpSpeed);
        purpleCurrentDiameter = lerp(purpleCurrentDiameter, purpleTargetDiameter, currentLerpSpeed);
        greenCurrentDiameter = lerp(greenCurrentDiameter, greenTargetDiameter, currentLerpSpeed);
        orangeCurrentDiameter = lerp(orangeCurrentDiameter, orangeTargetDiameter, currentLerpSpeed);

        // Apply the interpolated values
        yellowText.diameter = currentDiameter;
        pinkText.diameter = pinkCurrentDiameter;
        blueText.diameter = blueCurrentDiameter;
        purpleText.diameter = purpleCurrentDiameter;
        greenText.diameter = greenCurrentDiameter;
        orangeText.diameter = orangeCurrentDiameter;

    } else {
        // PC hover logic remains unchanged
        resetAllVisibility();

        if (cursorHitbox.overlapping(yellowText)) {
            yellowreg1.visible = yellowreg2.visible = true;
            targetDiameter = CIRCLE_SIZE_LARGE;
        } else {
            targetDiameter = CIRCLE_SIZE_SMALL;
        }
        if (cursorHitbox.overlapping(orangeText)) {
            orangereg1.visible = orangereg2.visible = true;
            orangeTargetDiameter = CIRCLE_SIZE_LARGE;
        } else {
            orangeTargetDiameter = CIRCLE_SIZE_SMALL;
        }
        if (cursorHitbox.overlapping(pinkText)) {
            pinkreg1.visible = pinkreg2.visible = pinkreg3.visible = true;
            pinkTargetDiameter = CIRCLE_SIZE_LARGE;
        } else {
            pinkTargetDiameter = CIRCLE_SIZE_SMALL;
        }
        if (cursorHitbox.overlapping(purpleText)) {
            purplereg1.visible = purplereg2.visible = purplereg3.visible = true;
            purpleTargetDiameter = CIRCLE_SIZE_LARGE;
        } else {
            purpleTargetDiameter = CIRCLE_SIZE_SMALL;
        }
        if (cursorHitbox.overlapping(blueText)) {
            bluereg1.visible = true;
            blueTargetDiameter = CIRCLE_SIZE_LARGE;
        } else {
            blueTargetDiameter = CIRCLE_SIZE_SMALL;
        }
        if (cursorHitbox.overlapping(greenText)) {
            greenreg1.visible = greenreg2.visible = greenreg3.visible = greenreg4.visible = true;
            greenTargetDiameter = CIRCLE_SIZE_LARGE;
        } else {
            greenTargetDiameter = CIRCLE_SIZE_SMALL;
        }
        cursor.changeAni('cursor_main');
    }

    // Apply smooth transitions with different speeds for PC and tablet
    let currentLerpSpeed = isTouchDevice ? TABLET_LERP_SPEED : PC_LERP_SPEED;

    // Smoothly interpolate diameters
    currentDiameter = lerp(currentDiameter, targetDiameter, currentLerpSpeed);
    pinkCurrentDiameter = lerp(pinkCurrentDiameter, pinkTargetDiameter, currentLerpSpeed);
    blueCurrentDiameter = lerp(blueCurrentDiameter, blueTargetDiameter, currentLerpSpeed);
    purpleCurrentDiameter = lerp(purpleCurrentDiameter, purpleTargetDiameter, currentLerpSpeed);
    greenCurrentDiameter = lerp(greenCurrentDiameter, greenTargetDiameter, currentLerpSpeed);
    orangeCurrentDiameter = lerp(orangeCurrentDiameter, orangeTargetDiameter, currentLerpSpeed);

    // Smoothly interpolate text sizes
    yellowText.textSize = lerp(yellowText.textSize, targetDiameter === CIRCLE_SIZE_LARGE ? TEXT_SIZE_LARGE : TEXT_SIZE_SMALL, currentLerpSpeed);
    orangeText.textSize = lerp(orangeText.textSize, orangeTargetDiameter === CIRCLE_SIZE_LARGE ? TEXT_SIZE_LARGE : TEXT_SIZE_SMALL, currentLerpSpeed);
    pinkText.textSize = lerp(pinkText.textSize, pinkTargetDiameter === CIRCLE_SIZE_LARGE ? TEXT_SIZE_LARGE : TEXT_SIZE_SMALL, currentLerpSpeed);
    purpleText.textSize = lerp(purpleText.textSize, purpleTargetDiameter === CIRCLE_SIZE_LARGE ? TEXT_SIZE_LARGE : TEXT_SIZE_SMALL, currentLerpSpeed);
    blueText.textSize = lerp(blueText.textSize, blueTargetDiameter === CIRCLE_SIZE_LARGE ? TEXT_SIZE_LARGE : TEXT_SIZE_SMALL, currentLerpSpeed);
    greenText.textSize = lerp(greenText.textSize, greenTargetDiameter === CIRCLE_SIZE_LARGE ? TEXT_SIZE_LARGE : TEXT_SIZE_SMALL, currentLerpSpeed);

    // Apply the interpolated diameter values
    yellowText.diameter = currentDiameter;
    pinkText.diameter = pinkCurrentDiameter;
    blueText.diameter = blueCurrentDiameter;
    purpleText.diameter = purpleCurrentDiameter;
    greenText.diameter = greenCurrentDiameter;
    orangeText.diameter = orangeCurrentDiameter;
}

// Helper function to reset visibility only
function resetAllVisibility() {
    yellowreg1.visible = yellowreg2.visible = false;
    orangereg1.visible = orangereg2.visible = false;
    pinkreg1.visible = pinkreg2.visible = pinkreg3.visible = false;
    purplereg1.visible = purplereg2.visible = purplereg3.visible = false;
    greenreg1.visible = greenreg2.visible = greenreg3.visible = greenreg4.visible = false;
    bluereg1.visible = false;
}

function draw() {

	
	//Interactions Framework
    mouseHover(); noCursor();
	cursor.layer = 21; logoLetters.layer = 19; mouthBallsGroup.layer = 18;

	// Logo Explosion + Gravity
	if (isLogoExploded && logoLetters) {
		for (let letter of logoLetters) {
		  if (letter.removed) continue;
		  letter.vel.y -= letter.myGravity;
		  letter.vel.x *= 0.99;
		  if (letter.y < -200) letter.remove();
		}

		// Fade out text smoothly
		authorText.opacity = max(0, authorText.opacity - 0.004);
		infoText.opacity = max(0, infoText.opacity - 0.004);
	}

    // OnHover Interactions

	textFont(somaticFont);
	//Initialisation of SFX
    if (initial == 0) {
		playBGM();
		initial = 1;
	}

	bgmTimer--; //console.log(bgmTimer);
	if (bgmTimer <= 1) {
		playBGM();
		bgmTimer = 12300;
	} 

	if (!autoCyclePaused && millis() - lastCycleTime > cycleInterval) {
		lastCycleTime = millis();
		// Optionally spawn a ball for the current word before cycling:
		spawnBallForWord(words[currentWordIndex]);
		
		// Cycle to the next word, wrapping around when reaching the end.
		currentWordIndex = (currentWordIndex + 1) % words.length;
	  }

 // Dynamically scale the text size based on the word length
  if (words.length > 0) {
    let currentWord = words[currentWordIndex];
    
    // Define the expected range for word lengths (for example, from 1 to 15 characters)
    let minWordLength = 1;
    let maxWordLength = 15;
    
    // Define your desired text size range relative to the canvas width.
    // Short words will get a larger size and longer words a smaller size.
    let maxTextSize = canvas.w / 8;
    let minTextSize = canvas.w / 16;
    
    // Map the current word's length to a text size value.
    let scaledTextSize = map(currentWord.length, minWordLength, maxWordLength, maxTextSize, minTextSize);
    
    // Update the bookText sprite with the current word and its new text size.
    bookText.text = currentWord;
    bookText.textSize = scaledTextSize;
  }

// Camera Settings
/* if (windowWidth <= 600){
	xsScreenSettings();
	//Phone
} else if (windowWidth >= 600 && windowWidth <= 1023) {
	smallScreenSettings();
	//Tablet
} else if (windowWidth >= 1023 && windowWidth <= 1339) {
	mediumScreenSettings();
	//Small Laptop
} else if (windowWidth >= 1339 && windowWidth <= 2559) {
	largeScreenSettings();
	//Large Laptop
} else if (windowWidth >= 2560) {
	ultrawideScreenSettings();
} */

// Initialise World Variables
background('#000000');

// Pipe & Man Pass-through System
if (man1.y + 2 >= pipe.y) { man1.layer = 5; } else if (man1.y + 2 <= pipe.y) { man1.layer = 3; }
if (man2.y + 2 >= pipe.y) { man2.layer = 5; } else if (man2.y + 2 <= pipe.y) { man2.layer = 3; }
if (man3.y + 2 >= pipe.y) { man3.layer = 5; } else if (man3.y + 2 <= pipe.y) { man3.layer = 3; }
if (man4.y + 2 >= pipe.y) { man4.layer = 5; } else if (man4.y + 2 <= pipe.y) { man4.layer = 3; }
if (man5.y + 2 >= pipe.y) { man5.layer = 5; } else if (man5.y + 2 <= pipe.y) { man5.layer = 3; }

// Pipe Timer
if (pipetimer >= 1) {

	pipetimer++;
	if (pipetimer >= 29) {
		pipetimer = 0;
	}
} else if (pipetimer == 0) {
	pipe.changeAni('pipe_idle');
}

//Eyes Timer
if (eyesstate>= 1) {
	eyesTimer++;
	////console.log("Eyes Timer:", eyesTimer);
	if (eyesTimer >= 1 && eyesTimer <= 41) {
		eyes.changeAni('eyes_r2l');
	} else if (eyesTimer >= 42 && eyesTimer <= 62) {
		eyes.changeAni('eyes_l2r_idle');
	} else if (eyesTimer >= 63 && eyesTimer <= 103) {
		eyes.changeAni('eyes_l2r');
	} else if (eyesTimer >= 104 && eyesTimer <=124) {
		eyes.changeAni('eyes_r2l_idle');
	} else if (eyesTimer >= 125) {
		eyesTimer = 0;
		eyesstate = 0;
	}
}

// -----
// Your mouth animation update block remains mostly the same,
// but now the state is only modified via handleBallEnteredPipe().
// This block would be in your draw/update loop:
if (mouthstate === 0) {
	// Set idle animation when mouthstate is off.
	if (mouth.animation.name !== 'mouth_idle') {
	  mouth.changeAni('mouth_idle');
	}
  } 
  else if (mouthstate === 1) {
	mouthTimer++;
	
	if (mouthTimer >= 0 && mouthTimer <= 30) {
	  if (mouth.animation.name !== 'mouth_loop') {
		mouth.changeAni('mouth_loop');
	  }
	} 
	else if (mouthTimer >= 31 && mouthTimer <= 72) {
	  if (mouth.animation.name !== 'mouth_idle_reverse') {
		mouth.changeAni('mouth_idle_reverse');
	  }
	} 
	else if (mouthTimer >= 73 && mouthTimer <= 104) {
	  if (mouth.animation.name !== 'mouth_loop_reverse') {
		mouth.changeAni('mouth_loop_reverse');
	  }
	} 
	else if (mouthTimer >= 105) {
	  // Reset after one full cycle
	  mouthTimer = 0;
	  mouthstate = 0;
	}
  }

// Man AI Implementation ( Idle (1) -> Walk (2) -> Pickup (3) -> Carry (4) -> Drop (5) -> Walk (2) -> Idle (1) )

//man1 algorithm
if (man1state == 1) {
	man1.changeAni('walk_idle');

    // Find nearest ball and check if it's within detection range
    let nearest = findNearestBall(man1);
    if (nearest) {
        let detectionRange = 300;
        let distanceToBall = dist(man1.x, man1.y, nearest.sprite.x, nearest.sprite.y);
        
        if (distanceToBall <= detectionRange) {
            man1timer++;
            if (man1timer >= 100) {
                man1state = 2;
                man1timer = 0;
                man1NeedsNewTarget = true;  // Reset wander target when transitioning
                //console.log("( MAN 1 ) Ball detected within range, transitioning to walking state");
            }
        } else {
            man1timer = 0;
            wander1(man1);  // Wander if ball is out of range
        }
    } else {
        man1timer = 0;
        wander1(man1);  // Wander if no balls exist
    }

} else if (man1state == 2) {
    man1.changeAni('walk_loop');
    
    // Look for the nearest ball
    let nearest = findNearestBall(man1);
    
    // If no ball is found, revert to idle/wander state (1)
    if (!nearest) {
        man1state = 1;
        man1NeedsNewTarget = true;
        //console.log("( MAN 1 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man1.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man1.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man1collect(man1);
            // Make sure the ball color is set for this man only
            man1state = 3;
            //console.log("( MAN 1 ) Collected ball!");
        }
    }

} else if (man1state == 3) {
    // Pickup animation using man1.ballColor (if it exists) or a default
    let pickupAnim = (man1.ballColor) ? 'pickup_' + man1.ballColor : 'pickup_default';
    man1.changeAni(pickupAnim);
    man1timer++;
    if (man1timer >= 60) {
        man1state = 4;
        man1timer = 0;
    }
} else if (man1state == 4) {
    // Carry state: Use stored ballColor for walking animation
    let walkAnim = (man1.ballColor) ? 'walk_' + man1.ballColor : 'walk_idle';
    man1.changeAni(walkAnim);
    // Carry logic: move toward the pipe
    man1.moveTo(pipe.x, pipe.y, 2);
    if (dist(man1.x, man1.y, pipe.x, pipe.y) < 5) {
        man1state = 5;
        man1timer = 0;
		pipetimer = 1;
		pipe.changeAni("pipe_" + man1.ballColor);
		handleBallEnteredPipe(man1.ballColor);
		man1.ballColor = null;  // Clear the ball color after dropping
        //console.log("( MAN 1 ) Reached pipe; starting drop animation");
    }
} else if (man1state == 5) {
    // Drop animation; use stored ballColor or default
    let dropAnim = (man1.ballColor) ? 'pickup_reverse' : 'pickup_reverse_default';
    man1.changeAni(dropAnim);
    man1timer++;
    if (man1timer >= 60) {
        man1state = 1;
        man1timer = 0;
        // Clear ballColor for man1 only
        man1.ballColor = null;
        //console.log("( MAN 1 ) Drop complete; returning to idle");
    }
} else {}


//man2 algorithm
if (man2state == 1) {
	man2.changeAni('walk_idle');

    // Find nearest ball and check if it's within detection range
    let nearest = findNearestBall(man1);
    if (nearest) {
        let detectionRange = 300;
        let distanceToBall = dist(man2.x, man2.y, nearest.sprite.x, nearest.sprite.y);
        
        if (distanceToBall <= detectionRange) {
            man2timer++;
            if (man2timer >= 100) {
                man2state = 2;
                man2timer = 0;
                man2NeedsNewTarget = true;  // Reset wander target when transitioning
                //console.log("( MAN 2 ) Ball detected within range, transitioning to walking state");
            }
        } else {
            man2timer = 0;
            wander2(man2);  // Wander if ball is out of range
        }
    } else {
        man2timer = 0;
        wander2(man2);  // Wander if no balls exist
    }

} else if (man2state == 2) {
    man2.changeAni('walk_loop');
    
    // Look for the nearest ball
    let nearest = findNearestBall(man2);
    
    // If no ball is found, revert to idle/wander state (1)
    if (!nearest) {
        man2state = 1;
        man2NeedsNewTarget = true;
        //console.log("( MAN 2 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man2.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man2.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man2collect(man2);
            // Make sure the ball color is set for this man only
            man2state = 3;
            //console.log("( MAN 2 ) Collected ball!");
        }
    }

} else if (man2state == 3) {
    // Pickup animation using man1.ballColor (if it exists) or a default
    let pickupAnim = (man2.ballColor) ? 'pickup_' + man2.ballColor : 'pickup_default';
    man2.changeAni(pickupAnim);
    man2timer++;
    if (man2timer >= 60) {
        man2state = 4;
        man2timer = 0;
    }
} else if (man2state == 4) {
    // Carry state: Use stored ballColor for walking animation
    let walkAnim = (man2.ballColor) ? 'walk_' + man2.ballColor : 'walk_idle';
    man2.changeAni(walkAnim);
    // Carry logic: move toward the pipe
    man2.moveTo(pipe.x, pipe.y, 2);
    if (dist(man2.x, man2.y, pipe.x, pipe.y) < 5) {
        man2state = 5;
        man2timer = 0;
		pipetimer = 1;
		pipe.changeAni("pipe_" + man2.ballColor);
		handleBallEnteredPipe(man2.ballColor);
		man2.ballColor = null;  // Clear the ball color after dropping
        //console.log("( MAN 2 ) Reached pipe; starting drop animation");
    }
} else if (man2state == 5) {
    // Drop animation; use stored ballColor or default
    let dropAnim = (man2.ballColor) ? 'pickup_reverse' : 'pickup_reverse_default';
    man2.changeAni(dropAnim);
    man2timer++;
    if (man2timer >= 60) {
        man2state = 1;
        man2timer = 0;
        // Clear ballColor for man1 only
        man2.ballColor = null;
        //console.log("( MAN 2 ) Drop complete; returning to idle");
    }
} else {}

//man3 algorithm
if (man3state == 1) {
	man3.changeAni('walk_idle');

    // Find nearest ball and check if it's within detection range
    let nearest = findNearestBall(man1);
    if (nearest) {
        let detectionRange = 300;
        let distanceToBall = dist(man3.x, man3.y, nearest.sprite.x, nearest.sprite.y);
        
        if (distanceToBall <= detectionRange) {
            man3timer++;
            if (man3timer >= 100) {
                man3state = 2;
                man3timer = 0;
                man3NeedsNewTarget = true;  // Reset wander target when transitioning
                //console.log("( MAN 3 ) Ball detected within range, transitioning to walking state");
            }
        } else {
            man3timer = 0;
            wander2(man3);  // Wander if ball is out of range
        }
    } else {
        man3timer = 0;
        wander3(man3);  // Wander if no balls exist
    }

} else if (man3state == 2) {
	man3.changeAni('walk_loop');
    
    // Look for the nearest ball
    let nearest = findNearestBall(man1);
    
    // If no ball is found, revert to idle/wander state (1)
    if (!nearest) {
        man3state = 1;
        man3NeedsNewTarget = true;
        //console.log("( MAN 3 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man3.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man3.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man3collect(man3);
            // Make sure the ball color is set for this man only
            man3state = 3;
            //console.log("( MAN 3 ) Collected ball!");
        }
    }

} else if (man3state == 3) {
    // Pickup animation using man1.ballColor (if it exists) or a default
    let pickupAnim = (man3.ballColor) ? 'pickup_' + man3.ballColor : 'pickup_default';
    man3.changeAni(pickupAnim);
    man3timer++;
    if (man3timer >= 60) {
        man3state = 4;
        man3timer = 0;
    }
} else if (man3state == 4) {
    // Carry state: Use stored ballColor for walking animation
    let walkAnim = (man3.ballColor) ? 'walk_' + man3.ballColor : 'walk_idle';
    man3.changeAni(walkAnim);
    // Carry logic: move toward the pipe
    man3.moveTo(pipe.x, pipe.y, 2);
    if (dist(man3.x, man3.y, pipe.x, pipe.y) < 5) {
        man3state = 5;
        man3timer = 0;
		pipetimer = 1;
		pipe.changeAni("pipe_" + man3.ballColor);
		handleBallEnteredPipe(man3.ballColor);
		man3.ballColor = null;  // Clear the ball color after dropping
        //console.log("( MAN 3 ) Reached pipe; starting drop animation");
    }
} else if (man3state == 5) {
    // Drop animation; use stored ballColor or default
    let dropAnim = (man3.ballColor) ? 'pickup_reverse' : 'pickup_reverse_default';
    man3.changeAni(dropAnim);
    man3timer++;
    if (man3timer >= 60) {
        man3state = 1;
        man3timer = 0;
        // Clear ballColor for man1 only
        man3.ballColor = null;
        //console.log("( MAN 3 ) Drop complete; returning to idle");
    }
} else {}

//man4 algorithm
if (man4state == 1) {
	man4.changeAni('walk_idle');

    // Find nearest ball and check if it's within detection range
    let nearest = findNearestBall(man1);
    if (nearest) {
        let detectionRange = 300;
        let distanceToBall = dist(man4.x, man4.y, nearest.sprite.x, nearest.sprite.y);
        
        if (distanceToBall <= detectionRange) {
            man4timer++;
            if (man4timer >= 100) {
                man4state = 2;
                man4timer = 0;
                man4NeedsNewTarget = true;  // Reset wander target when transitioning
                //console.log("( MAN 4 ) Ball detected within range, transitioning to walking state");
            }
        } else {
            man4timer = 0;
            wander2(man4);  // Wander if ball is out of range
        }
    } else {
        man4timer = 0;
        wander4(man4);  // Wander if no balls exist
    }

} else if (man4state == 2) {
	man4.changeAni('walk_loop');
    
    // Look for the nearest ball
    let nearest = findNearestBall(man1);
    
    // If no ball is found, revert to idle/wander state (1)
    if (!nearest) {
        man4state = 1;
        man4NeedsNewTarget = true;
        //console.log("( MAN 4 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man4.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man4.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man4collect(man4);
            // Make sure the ball color is set for this man only
            man4state = 3;
            //console.log("( MAN 4 ) Collected ball!");
        }
    }

} else if (man4state == 3) {
    // Pickup animation using man1.ballColor (if it exists) or a default
    let pickupAnim = (man4.ballColor) ? 'pickup_' + man4.ballColor : 'pickup_default';
    man4.changeAni(pickupAnim);
    man4timer++;
    if (man4timer >= 60) {
        man4state = 4;
        man4timer = 0;
    }
} else if (man4state == 4) {
    // Carry state: Use stored ballColor for walking animation
    let walkAnim = (man4.ballColor) ? 'walk_' + man4.ballColor : 'walk_idle';
    man4.changeAni(walkAnim);
    // Carry logic: move toward the pipe
    man4.moveTo(pipe.x, pipe.y, 2);
    if (dist(man4.x, man4.y, pipe.x, pipe.y) < 5) {
        man4state = 5;
        man4timer = 0;
		pipetimer = 1;
		pipe.changeAni("pipe_" + man4.ballColor);
		handleBallEnteredPipe(man4.ballColor);
		man4.ballColor = null;  // Clear the ball color after dropping
        //console.log("( MAN 4 ) Reached pipe; starting drop animation");
    }
} else if (man4state == 5) {
    // Drop animation; use stored ballColor or default
    let dropAnim = (man4.ballColor) ? 'pickup_reverse' : 'pickup_reverse_default';
    man4.changeAni(dropAnim);
    man4timer++;
    if (man4timer >= 60) {
        man4state = 1;
        man4timer = 0;
        // Clear ballColor for man1 only
        man4.ballColor = null;
        //console.log("( MAN 4 ) Drop complete; returning to idle");
    }
} else {}

//man5 algorithm
if (man5state == 1) {
	man5.changeAni('walk_idle');

    // Find nearest ball and check if it's within detection range
    let nearest = findNearestBall(man5);
    if (nearest) {
        let detectionRange = 300;
        let distanceToBall = dist(man5.x, man5.y, nearest.sprite.x, nearest.sprite.y);
        
        if (distanceToBall <= detectionRange) {
            man5timer++;
            if (man5timer >= 100) {
                man5state = 2;
                man5timer = 0;
                man5NeedsNewTarget = true;  // Reset wander target when transitioning
                //console.log("( MAN 5 ) Ball detected within range, transitioning to walking state");
            }
        } else {
            man5timer = 0;
            wander2(man5);  // Wander if ball is out of range
        }
    } else {
        man5timer = 0;
        wander5(man5);  // Wander if no balls exist
    }

} else if (man5state == 2) {
    man5.changeAni('walk_loop');
    
    // Look for the nearest ball
    let nearest = findNearestBall(man5);
    
    // If no ball is found, revert to idle/wander state (1)
    if (!nearest) {
        man5state = 1;
        man5NeedsNewTarget = true;
        //console.log("( MAN 5 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man5.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man5.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man5collect(man5);
            // Make sure the ball color is set for this man only
            man5state = 3;
            //console.log("( MAN 5 ) Collected ball!");
        }
    }

} else if (man5state == 3) {
    // Pickup animation using man1.ballColor (if it exists) or a default
    let pickupAnim = (man5.ballColor) ? 'pickup_' + man5.ballColor : 'pickup_default';
    man5.changeAni(pickupAnim);
    man5timer++;
    if (man5timer >= 60) {
        man5state = 4;
        man5timer = 0;
    }
} else if (man5state == 4) {
    // Carry state: Use stored ballColor for walking animation
    let walkAnim = (man5.ballColor) ? 'walk_' + man5.ballColor : 'walk_idle';
    man5.changeAni(walkAnim);
    // Carry logic: move toward the pipe
    man5.moveTo(pipe.x, pipe.y, 2);
    if (dist(man5.x, man5.y, pipe.x, pipe.y) < 5) {
        man5state = 5;
        man5timer = 0;
		pipetimer = 1;
		pipe.changeAni("pipe_" + man5.ballColor);
		handleBallEnteredPipe(man5.ballColor);
		man5.ballColor = null;  // Clear the ball color after dropping
        //console.log("( MAN 5 ) Reached pipe; starting drop animation");
    }
} else if (man5state == 5) {
    // Drop animation; use stored ballColor or default
    let dropAnim = (man5.ballColor) ? 'pickup_reverse' : 'pickup_reverse_default';
    man5.changeAni(dropAnim);
    man5timer++;
    if (man5timer >= 60) {
        man5state = 1;
        man5timer = 0;
        // Clear ballColor for man1 only
        man5.ballColor = null;
        //console.log("( MAN 5 ) Drop complete; returning to idle");
    }
} else {}

function man1collect(man1) {
    let nearest = findNearestBall(man1);
    if (nearest && !nearest.sprite.pickedUp) {
        //console.log("Man 1 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man1.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn't there, revert to idle/wander state
        //console.log("Ball not found during collection, reverting to wander");
        man1state = 1;
        man1NeedsNewTarget = true;
    }
}

function man2collect(man2) {
    let nearest = findNearestBall(man2);
    if (nearest && !nearest.sprite.pickedUp) {
        //console.log("Man 2 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man2.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn't there, revert to idle/wander state
        //console.log("Ball not found during collection, reverting to wander");
        man2state = 1;
        man2NeedsNewTarget = true;
    }
}

function man3collect(man3) {
    let nearest = findNearestBall(man3);
    if (nearest && !nearest.sprite.pickedUp) {
        //console.log("Man 3 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man3.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn't there, revert to idle/wander state
        //console.log("Ball not found during collection, reverting to wander");
        man3state = 1;
        man3NeedsNewTarget = true;
    }
}

function man4collect(man4) {
    let nearest = findNearestBall(man4);
    if (nearest && !nearest.sprite.pickedUp) {
        //console.log("Man 4 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man4.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn't there, revert to idle/wander state
        //console.log("Ball not found during collection, reverting to wander");
        man4state = 1;
        man4NeedsNewTarget = true;
    }
}

function man5collect(man5) {
    let nearest = findNearestBall(man5);
    if (nearest && !nearest.sprite.pickedUp) {
        //console.log("Man 5 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man5.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn't there, revert to idle/wander state
        //console.log("Ball not found during collection, reverting to wander");
        man5state = 1;
        man5NeedsNewTarget = true;
    }	
}

// Checks manually if the given sprite is inside the brainbox's circle,
// using the brainboxCenter as the anchor.
function isInsideBrainbox(sprite) {
	let d = dist(sprite.x, sprite.y, brainboxCenter.x, brainboxCenter.y);
	return d <= (brainbox.diameter / 2);
  }
  
  function getRandomBrainboxTarget() {
    // Calculate half the range for both x and y axes.
    // (canvas.w/2.7)/2 is equivalent to canvas.w/5.4.
    const halfRange = canvas.w / 5.4;
    
    // Generate a random offset for x and y within the specified range.
    const offsetX = random(-halfRange, halfRange);
    const offsetY = random(-halfRange, halfRange);
    
    // Return the random target, anchored around the brainbox center.
    return {
        x: brainbox.x + offsetX,
        y: brainbox.y + offsetY
    };
}

// Updated wander function for man1
function wander1(sprite) {
	// If the sprite is not inside the brainbox,
	// force a new target inside the brainbox.
	if (!isInsideBrainbox(sprite)) {
	  man1WanderTarget = getRandomBrainboxTarget();
	  man1NeedsNewTarget = false;
	  //console.log("wander1: Off brainbox, new target:", man1WanderTarget.x, man1WanderTarget.y);
	}
	
	// Resting behavior
	if (man1IsResting) {
	  sprite.changeAni('walk_idle');
	  man1RestTimer++;
	  if (man1RestTimer >= 120) {
		man1IsResting = false;
		man1RestTimer = 0;
		man1NeedsNewTarget = true;
		//console.log("wander1: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	// Generate a new target if needed or if the current one is nearly reached
	if (man1NeedsNewTarget || dist(sprite.x, sprite.y, man1WanderTarget.x, man1WanderTarget.y) < 10) {
	  man1WalkCycles++;
	  if (man1WalkCycles >= 3) {
		man1IsResting = true;
		man1WalkCycles = 0;
		//console.log("wander1: Taking a rest");
		return;
	  }
	  // Generate a new random target inside the brainbox
	  man1WanderTarget = getRandomBrainboxTarget();
	  man1NeedsNewTarget = false;
	  //console.log("wander1: New wander target:", man1WanderTarget.x, man1WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man1WanderTarget.x, man1WanderTarget.y, 0.5);
  }
  
  // Use a similar approach for the other wander functions:
  
  function wander2(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man2WanderTarget = getRandomBrainboxTarget();
	  man2NeedsNewTarget = false;
	  //console.log("wander2: Off brainbox, new target:", man2WanderTarget.x, man2WanderTarget.y);
	}
	
	if (man2IsResting) {
	  sprite.changeAni('walk_idle');
	  man2RestTimer++;
	  if (man2RestTimer >= 120) {
		man2IsResting = false;
		man2RestTimer = 0;
		man2NeedsNewTarget = true;
		//console.log("wander2: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man2NeedsNewTarget || dist(sprite.x, sprite.y, man2WanderTarget.x, man2WanderTarget.y) < 10) {
	  man2WalkCycles++;
	  if (man2WalkCycles >= 3) {
		man2IsResting = true;
		man2WalkCycles = 0;
		//console.log("wander2: Taking a rest");
		return;
	  }
	  man2WanderTarget = getRandomBrainboxTarget();
	  man2NeedsNewTarget = false;
	  //console.log("wander2: New wander target:", man2WanderTarget.x, man2WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man2WanderTarget.x, man2WanderTarget.y, 0.5);
  }
  
  function wander3(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man3WanderTarget = getRandomBrainboxTarget();
	  man3NeedsNewTarget = false;
	  //console.log("wander3: Off brainbox, new target:", man3WanderTarget.x, man3WanderTarget.y);
	}
	
	if (man3IsResting) {
	  sprite.changeAni('walk_idle');
	  man3RestTimer++;
	  if (man3RestTimer >= 120) {
		man3IsResting = false;
		man3RestTimer = 0;
		man3NeedsNewTarget = true;
		//console.log("wander3: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man3NeedsNewTarget || dist(sprite.x, sprite.y, man3WanderTarget.x, man3WanderTarget.y) < 10) {
	  man3WalkCycles++;
	  if (man3WalkCycles >= 3) {
		man3IsResting = true;
		man3WalkCycles = 0;
		//console.log("wander3: Taking a rest");
		return;
	  }
	  man3WanderTarget = getRandomBrainboxTarget();
	  man3NeedsNewTarget = false;
	  //console.log("wander3: New wander target:", man3WanderTarget.x, man3WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man3WanderTarget.x, man3WanderTarget.y, 0.5);
  }
  
  function wander4(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man4WanderTarget = getRandomBrainboxTarget();
	  man4NeedsNewTarget = false;
	  //console.log("wander4: Off brainbox, new target:", man4WanderTarget.x, man4WanderTarget.y);
	}
	
	if (man4IsResting) {
	  sprite.changeAni('walk_idle');
	  man4RestTimer++;
	  if (man4RestTimer >= 120) {
		man4IsResting = false;
		man4RestTimer = 0;
		man4NeedsNewTarget = true;
		//console.log("wander4: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man4NeedsNewTarget || dist(sprite.x, sprite.y, man4WanderTarget.x, man4WanderTarget.y) < 10) {
	  man4WalkCycles++;
	  if (man4WalkCycles >= 3) {
		man4IsResting = true;
		man4WalkCycles = 0;
		//console.log("wander4: Taking a rest");
		return;
	  }
	  man4WanderTarget = getRandomBrainboxTarget();
	  man4NeedsNewTarget = false;
	  //console.log("wander4: New wander target:", man4WanderTarget.x, man4WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man4WanderTarget.x, man4WanderTarget.y, 0.5);
  }
  
  function wander5(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man5WanderTarget = getRandomBrainboxTarget();
	  man5NeedsNewTarget = false;
	  //console.log("wander5: Off brainbox, new target:", man5WanderTarget.x, man5WanderTarget.y);
	}
	
	if (man5IsResting) {
	  sprite.changeAni('walk_idle');
	  man5RestTimer++;
	  if (man5RestTimer >= 120) {
		man5IsResting = false;
		man5RestTimer = 0;
		man5NeedsNewTarget = true;
		//console.log("wander5: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man5NeedsNewTarget || dist(sprite.x, sprite.y, man5WanderTarget.x, man5WanderTarget.y) < 10) {
	  man5WalkCycles++;
	  if (man5WalkCycles >= 3) {
		man5IsResting = true;
		man5WalkCycles = 0;
		//console.log("wander5: Taking a rest");
		return;
	  }
	  man5WanderTarget = getRandomBrainboxTarget();
	  man5NeedsNewTarget = false;
	  //console.log("wander5: New wander target:", man5WanderTarget.x, man5WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man5WanderTarget.x, man5WanderTarget.y, 0.5);
  }

    // Update gravity for each ball in the group.
  // Make sure mouthBallsGroup exists.
  if (mouthBallsGroup) {
    for (let i = 0; i < mouthBallsGroup.length; i++) {
      let ball = mouthBallsGroup[i];
      // Apply the custom gravity value to the ball's vertical velocity.
      ball.velocity.y += ball.myGravity;
    }
  }
  
}

// Called once when the mouse is pressed.
function mousePressed() {
    // Check button clicks first (remove canvas height check for buttons)
    if (dist(mouseX, mouseY, pauseButton.x, pauseButton.y) < buttonSize/2) {
        autoCyclePaused = !autoCyclePaused;
        pauseButton.text = autoCyclePaused ? '▶️' : '⏸️';
        return;
    }
    
    if (dist(mouseX, mouseY, speedButton.x, speedButton.y) < buttonSize/2) {
        worldSpeed = worldSpeed === 1 ? 2 : 1;
        world.timeScale = worldSpeed;
        speedButton.text = worldSpeed + 'x';
        return;
    }
    
    if (dist(mouseX, mouseY, muteButton.x, muteButton.y) < buttonSize/2) {
        isMuted = !isMuted;
        muteButton.text = isMuted ? '🔇' : '🔊';
        bgm.volume = isMuted ? 0 : 0.08;
        return;
    }

    if (dist(mouseX, mouseY, resetButton.x, resetButton.y) < buttonSize/2 && resetButton.visible) {
        // Hide reset button after reset
        resetButton.visible = false;
        
        // Reset text opacity
        authorText.opacity = 0.2;
        infoText.opacity = 0.2;
        
        // Remove all existing letters
        if (logoLetters) {
            // Remove each letter sprite
            for (let letter of logoLetters) {
                if (letter) letter.remove();
            }
            // Clear the group itself
            logoLetters.removeAll();
        }
        
        // Reset explosion state
        isLogoExploded = false;
        
        // Create new logo letters group
        logoLetters = new Group();
        
        // Define the text and spacing
        const textConfig = [
            { word: 'ways', spacings: [90, 80, 65, 11] },
            { word: 'of', spacings: [63, -1] },
            { word: 'seeing', spacings: [65, 70, 50, 50, 80, 0] }
        ];
        const wordSpacing = 100;
        const y = (canvas.h/18)*1.3;
        
        // Calculate total width
        let totalWidth = 0;
        for (let wordConfig of textConfig) {
            totalWidth += wordConfig.spacings.reduce((sum, spacing) => sum + spacing, 0);
        }
        totalWidth += (textConfig.length - 1) * wordSpacing;
        
        // Create new letters
        let currentX = (canvas.w/2) - (totalWidth/2);
        for (let wordIndex = 0; wordIndex < textConfig.length; wordIndex++) {
            const wordConfig = textConfig[wordIndex];
            const word = wordConfig.word;
            
            for (let letterIndex = 0; letterIndex < word.length; letterIndex++) {
                let letter = new Sprite(currentX, y);
                letter.text = word[letterIndex];
                letter.textSize = 140;
                letter.textColor = '#550c5d';
                letter.font = 'assets/somatic.ttf';
                letter.scale = 2;
                letter.layer = 19;
                letter.fill = color(0, 0, 0, 0);
                letter.stroke = color(0, 0, 0, 0);
                letter.collider = 'none';
                letter.overlaps(allSprites);
                
                logoLetters.add(letter);
                currentX += wordConfig.spacings[letterIndex];
            }
            if (wordIndex < textConfig.length - 1) {
                currentX += wordSpacing;
            }
        }
        return;
    }

  // Allow dragging only if the click is in the top 2/5 of the canvas
  if (mouseY > canvas.h * 2 / 5) {
    return;
  }
  
  // Check if a mouth ball exists in the group
  if (mouthBallsGroup) {
    for (let i = 0; i < mouthBallsGroup.length; i++) {
      let ball = mouthBallsGroup[i];
      // Check if the mouse is over this ball.
      if (
        mouseX >= ball.x - ball.width / 2 && mouseX <= ball.x + ball.width / 2 &&
        mouseY >= ball.y - ball.height / 2 && mouseY <= ball.y + ball.height / 2
      ) {
        draggedMouthBall = ball;
        // Optionally, zero out the velocity so it stops moving
        ball.velocity.x = 0;
        ball.velocity.y = 0;
        break;  // Exit after the first hit
      }
    }
  }

  // Check if click is near any letter
  if (logoLetters) {
    for (let letter of logoLetters) {
      if (letter.removed) continue;
      
      if (dist(mouseX, mouseY, letter.x, letter.y) < 70) {
        if (!isLogoExploded) {
          isLogoExploded = true;
          // Show reset button when explosion happens
          resetButton.visible = true;

          for (let l of logoLetters) {
            if (!l.removed) {
              // Enable physics and collisions when exploding
              l.collider = 'dynamic';
              l.collide(boundarybox);
              l.collide(invisborder);
              l.collides(mouthBallsGroup);
              l.collides(logoLetters);
              
              // Set initial velocities
              l.vel.x = random(-2, 2);
              l.vel.y = -0.3;  // Consistent upward velocity
              l.rotationSpeed = random(-1, 1);
              l.width = 65; l.height = 65;
              // Set constant upward force
              l.myGravity = 0.02;  // Constant upward force
            }
          }
        }
        break;
      }
    }
  }

  // Check for letter dragging only if already exploded
  if (isLogoExploded && logoLetters) {
    for (let letter of logoLetters) {
      if (letter.removed) continue;
      if (dist(mouseX, mouseY, letter.x, letter.y) < 70) {
        draggedLetter = letter;
        letter.vel.x = 0;
        letter.vel.y = 0;
        return;
      }
    }
  }
}

// Called every frame while the mouse is dragged.
function mouseDragged() {
  if (draggedLetter) {
    if (mouseY > canvas.h * 2 / 5) {
      draggedLetter = null;
      return;
    }
    draggedLetter.x = mouseX;
    draggedLetter.y = mouseY;
  } else if (draggedMouthBall) {
    // If the mouse leaves the top 2/5 of the canvas, stop dragging the ball.
    if (mouseY > canvas.h * 2 / 5) {
      draggedMouthBall = null;
      return;
    }

    // Otherwise, update the ball's position to follow the mouse
    draggedMouthBall.x = mouseX;
    draggedMouthBall.y = mouseY;
  }
}

// Called when the mouse is released.
function mouseReleased() {
  draggedLetter = null;
  draggedMouthBall = null;
}

function getRandomPointInCircle(center, radius) {
	let x, y;
	// Keep looping until a point is found inside the circle.
	do {
	  // Generate random x and y offsets from -radius to +radius.
	  x = random(-radius, radius);
	  y = random(-radius, radius);
	} while (x * x + y * y > radius * radius);
	
	return {
	  x: center.x + x,
	  y: center.y + y
	};
  }
  
/********************
 * Spawn Functions
 ********************/
  function spawnRandomPinkBall() {
	// Create an array of the three pink regions.
	let pinkRegions = [pinkreg1, pinkreg2, pinkreg3];
	
	// Randomly select one region.
	let selectedRegion = pinkRegions[floor(random(0, pinkRegions.length))];
	
	// Calculate the region's radius (half its diameter).
	let radius = selectedRegion.diameter / 2;
	
	// Use the rejection sampling method to get a random point inside the circle.
	let spawnPoint = getRandomPointInCircle({ x: selectedRegion.x, y: selectedRegion.y }, radius);
	
	// Create the pinkball sprite at the chosen spawn point.
	let newPinkBall = createSprite(spawnPoint.x, spawnPoint.y, 6);
	
	// Set the ball's visual appearance.
	newPinkBall.color = color(255, 255, 255);  // white fill
	newPinkBall.stroke = '#ff0178';  // pink stroke
	newPinkBall.strokeWeight = 4;
	newPinkBall.scale = 2;
	newPinkBall.layer = 1;
	// Add the new pinkball to your pinkball group.
	pinkball.add(newPinkBall);
	
	return newPinkBall;
  }

  function spawnRandomPurpleBall() {
	// Array of purple regions (must be defined elsewhere in your code).
	let purpleRegions = [purplereg1, purplereg2, purplereg3];
	let selectedRegion = purpleRegions[floor(random(0, purpleRegions.length))];
	let radius = selectedRegion.diameter / 2;
	let spawnPoint = getRandomPointInCircle({ x: selectedRegion.x, y: selectedRegion.y }, radius);
	
	// Create the ball sprite (size 6x6 is used here; adjust as needed)
	let newPurpleBall = createSprite(spawnPoint.x, spawnPoint.y, 6);
	// Visual styling: white fill with purple stroke (#a138ff)
	newPurpleBall.color = color(255, 255, 255);
	newPurpleBall.stroke = '#a138ff';
	newPurpleBall.strokeWeight = 4;
	newPurpleBall.scale = 2;
	newPurpleBall.layer = 1;
	eyesstate= 1;
	// Add to the purpleball group (ensure this group is created, e.g., in setup)
	purpleball.add(newPurpleBall);
	
	return newPurpleBall;
  }
  
  // Spawn a BlueBall at a random location within one of the blue regions
  function spawnRandomBlueBall() {
	let blueRegions = [bluereg1];
	let selectedRegion = blueRegions[floor(random(0, blueRegions.length))];
	let radius = selectedRegion.diameter / 2;
	let spawnPoint = getRandomPointInCircle({ x: selectedRegion.x, y: selectedRegion.y }, radius);
	
	let newBlueBall = createSprite(spawnPoint.x, spawnPoint.y, 6);
	newBlueBall.color = color(255, 255, 255);
	newBlueBall.stroke = '#00a9ff';
	newBlueBall.strokeWeight = 4;
	newBlueBall.scale = 2;
	newBlueBall.layer = 1;
	
	blueball.add(newBlueBall);
	return newBlueBall;
  }
  
  // Spawn a GreenBall at a random location within one of the green regions
  function spawnRandomGreenBall() {
	let greenRegions = [greenreg1, greenreg2, greenreg3, greenreg4];
	let selectedRegion = greenRegions[floor(random(0, greenRegions.length))];
	let radius = selectedRegion.diameter / 2;
	let spawnPoint = getRandomPointInCircle({ x: selectedRegion.x, y: selectedRegion.y }, radius);
	
	let newGreenBall = createSprite(spawnPoint.x, spawnPoint.y, 6);
	newGreenBall.color = color(255, 255, 255);
	newGreenBall.stroke = '#13ce0d';
	newGreenBall.strokeWeight = 4;
    newGreenBall.scale = 2;
	newGreenBall.layer = 1;
	greenball.add(newGreenBall);
	return newGreenBall;
  }
  
  // Spawn an OrangeBall at a random location within one of the orange regions
  function spawnRandomOrangeBall() {
	let orangeRegions = [orangereg1, orangereg2];
	let selectedRegion = orangeRegions[floor(random(0, orangeRegions.length))];
	let radius = selectedRegion.diameter / 2;
	let spawnPoint = getRandomPointInCircle({ x: selectedRegion.x, y: selectedRegion.y }, radius);
	
	let newOrangeBall = createSprite(spawnPoint.x, spawnPoint.y, 6);
	newOrangeBall.color = color(255, 255, 255);
	newOrangeBall.stroke = '#ff560a';
	newOrangeBall.strokeWeight = 4;
	newOrangeBall.scale = 2;
	newOrangeBall.layer = 1;
	
	orangeball.add(newOrangeBall);
	return newOrangeBall;
  }
  
  // Spawn a YellowBall at a random location within one of the yellow regions
  function spawnRandomYellowBall() {
	let yellowRegions = [yellowreg1, yellowreg2];
	let selectedRegion = yellowRegions[floor(random(0, yellowRegions.length))];
	let radius = selectedRegion.diameter / 2;
	let spawnPoint = getRandomPointInCircle({ x: selectedRegion.x, y: selectedRegion.y }, radius);
	
	let newYellowBall = createSprite(spawnPoint.x, spawnPoint.y, 6);
	newYellowBall.color = color(255, 255, 255);
	newYellowBall.stroke = '#ffb00b';
	newYellowBall.strokeWeight = 4;
    newYellowBall.scale = 2;
	newYellowBall.layer = 1;
	
	yellowball.add(newYellowBall);
	return newYellowBall;
  }

  function spawnNoBall() {
	eyesstate= 1;
  }
  /**
 * This function takes a word from the essay, determines its associated brain region
 * (and thus which color ball it should spawn), and then calls the appropriate spawn function.
 */
  function spawnBallForWord(word) {
    // Check if we've hit the limit
    if (mouthBallsGroup && mouthBallsGroup.length >= MAX_MOUTH_BALLS) {
        // Remove the oldest ball
        let oldestBall = mouthBallsGroup[0]; // First ball in the group is the oldest
        if (oldestBall) {
            oldestBall.remove();
        }
    }

    let ballType = determineBallType(word);
    //console.log("Processing word:", word, "=> spawning a", ballType, "ball");
    let ball;
    
    // Call the correct spawning function based on the ball type.
    if (ballType === "pink") {
      ball = spawnRandomPinkBall();
      playRandomPop();
    } else if (ballType === "purple") {
      ball = spawnRandomPurpleBall();
      playRandomPop();
    } else if (ballType === "blue") {
      ball = spawnRandomBlueBall();
      playRandomPop();
    } else if (ballType === "green") {
      ball = spawnRandomGreenBall();
      playRandomPop();
    } else if (ballType === "orange") {
      ball = spawnRandomOrangeBall();
      playRandomPop();
    } else if (ballType === "yellow") {
      ball = spawnRandomYellowBall();
      playRandomPop();
    } else {
      ball = spawnNoBall(); // fallback: no ball spawned
    }
    
  }
  
  /**
   * Determines which brain region (or ball type) corresponds to the given word.
   * This elementary example uses regex matching on the word (after making it lowercase).
   * You should update these conditions to suit your actual categorization.
   *
   * @param {string} word - The word to evaluate.
   * @returns {string} - Returns one of: "pink", "purple", "blue", "green", "orange", or "yellow".
   */
  function determineBallType(word) {
	word = word.toLowerCase();
	if (word.match(/love|friend|social|family|child|speak|Magritte|commented|relation|world|earth|hell|painter|Middle Ages|Europe|Renaissance|past|history|image|artist|photographer|art|truth|beauty|civilisation|form|status|taste|mystify|mystification|Frans Hals|human condition|governors|governesses|alms house|paupers|haarlem|debt|charity|administrators|sitters|women|men|dialogue|people|other|individual|individuality|minority|classes|role|justify|justification|authoritative|specialized|commissioned|portraits|destitute|life|lived|living|act|embrace|match|share|experience|direct|precise|richer|literature|expressive|profound|privileged|striving|invent|retrospectively|ruling|modern|terms|specialized|book|author|records|bitterness|spirit|equal|importance|harmonious|fusion|unforgettable|contrast|powerful|peak|breadth|strength|beloved|officially|remarkable|reads|writes|studied|language|cultural|deprivation|benefit|benefits|human|humanity|person|another|official|studied|remarkable|reads|writes|studied|language|cultural|official|studied/)) {
    // Social/Cultural/Human interactions
	  return "pink";
  } else if (word.match(/mind|thought|intellect|brain|establishes|explain|world|knowledge|explanation|fact|relation|know|Surrealist|recognizes|believe|believed|consciousness|understand|learn|assumptions|accord|mystify|mystification|constituting|awareness|imagination|imaginative|testimony|conclusions|consider|considered|reasonable|contributes|fundamentally|power|emotional|charge|provoked|plane|experience|disinterested|appreciation|transfer|emotion|disappears|unchanging|treat|treating|documentary|evidence|deny|complete|question|mechanically|reacting|stimuli|isolate|process|concerns|choice|result|credible|propose|discover|metaphorically|literally|sense|verbalize|attempt|preserved|embodies|appreciation|assumptions|learnt|objective|meaning|meant|means|think|thinking|thought|understanding|understood|realize|realized|realizing|comprehend|comprehension|interpret|interpretation|interpreting|analyzed|analysis|analyzing|reason|reasoning|reasoned|logic|logical|mentally|mental|psychologically|psychological|cognitive|cognition|intellectual|intellectually|conceptual|conceptually|abstract|abstractly|theoretical|theoretically|philosophical|philosophically/)) {
    // Cognitive/Mental processes
	  return "purple";
  } else if (word.match(/nature|sky|ocean|blue|surrounding|world|evening|sunset|sun|earth|sight|painter|gap|fire|hill|physical|existence|consuming|ashes|remaining|retina|circle|around|part|reach|arm's|situated|static|limited|combine|fundamental|mechanical|record|infinity|possible|sights|detached|preserved|space|spatial|environment|environmental|landscape|landscapes|geographical|geography|terrain|territory|territories|location|locations|position|positions|direction|directions|distance|distances|horizon|horizons|atmosphere|atmospheric|climate|climatic|weather|environmental|surroundings|vicinity|area|areas|region|regions|zone|zones|field|fields/)) {
    // Physical space/Environment
	  return "blue";
  } else if (word.match(/image|visual|art|color|seeing|words|looks|recognizes|knowledge|see|fits|sight|visible|vision|images|appearance|appearances|look|looking|saw|seen|record|painting|paintings|canvas|paper|marks|relic|work|works|conjure|represent|represented|showed|looked|recognized|vision|image-maker|direct|testimony|precise|richer|literature|expressive|imaginative|presented|composition|compositional|unity|contributes|reproduction|reproduced|photograph|photographs|casual|family|snapshot|subject|selection|reflected|reconstituted|outlast|documentary|evidence|drawing|text|relic|observe|observed|observing|observation|view|viewed|viewing|viewport|witness|witnessed|witnessing|perceive|perceived|perceiving|perception|perceptual|visually|visualize|visualized|visualizing|illustration|illustrated|illustrating|pictorial|depict|depicted|depicting|depiction|render|rendered|rendering|display|displayed|displaying|exhibit|exhibited|exhibiting|show|showed|showing|shown/)) {
    // Visual perception/Art
	  return "green";
  } else if (word.match(/time|place|history|location|comes|before|surrounded|between|always|present|everyday|past|centuries|once|beginning|first|date|winter|year|later|still|gradually|increasingly|consciousness|accompanying|awareness|certainly|existed|since|temporarily|accommodate|infinity|moments|eventually|recently|published|during|waiting|discovered|settled|constituting|present|waiting|discovered|originally|appeared|preserved|centuries|gradually|later|still|accompanying|eventually|recently|published|during|temporal|chronological|chronologically|historical|historically|era|eras|period|periods|epoch|epochs|age|ages|duration|durations|interval|intervals|sequence|sequences|timeline|timelines|contemporary|contemporaneous|modern|modernly|ancient|anciently|previous|previously|subsequent|subsequently|future|presently|currently|momentarily|temporarily|permanent|permanently|eternal|eternally|perpetual|perpetually|instant|instantly|moment|momentary|brief|briefly|lengthy|lengthily/)) {
    // Temporal concepts
	  return "orange";
  } else if (word.match(/violence|danger|conflict|battle|body|eye|eyes|arm|burns|pain|frozen|death|fear|combine|consuming|ashes|remaining|retina|circle|around|reach|arm's|situated|static|limited|combine|fundamental|mechanical|record|infinity|possible|sights|detached|preserved|completeness|touch|touching|moved|moving|active|continually|moving|holding|situate|ourselves|faculty|touch|physical|physically|bodily|corporeal|corporeally|sensory|sensation|sensations|tactile|tactually|kinesthetic|kinesthetically|proprioceptive|proprioception|somatic|somatically|muscular|muscularly|skeletal|skeletally|nervous|nervously|neural|neurally|cellular|cellularly|organic|organically|physiological|physiologically|anatomical|anatomically|biological|biologically/)) {
    // Physical sensations/Body
	  return "yellow";
	} else {
	  // Default category if none match.
	  return "none";
	}
  }

  
async function playBGM() {
	await bgm.stop(); await bgm.play();
  }

  function playRandomBloop() {
	// Create an array containing the four bloop sound objects.
	const bloops = [bloop1, bloop2, bloop3, bloop0];
	
	// Choose a random index (0, 1, 2, or 3).
	const randomIndex = floor(random(bloops.length));
	
	// Play the randomly selected bloop sound.
	bloops[randomIndex].play();
  }

  function playRandomPop() {
	const pops = [pop0, pop1, pop2, pop3, pop4, pop5];
	const randomIndex = floor(random(pops.length));
	pops[randomIndex].play();
  }

  function playRandomNya() {
	const nyas = [nya0, nya1, nya2];
	const randomIndex = floor(random(nyas.length));
	nyas[randomIndex].play();
  }

