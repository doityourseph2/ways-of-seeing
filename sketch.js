let somaticFont; let debugMode = false; 
let puppet; let nose; 
let pinkball; let purpleball; let blueball; let greenball; let orangeball; let yellowball;
let man1; let man2; let man3; let man4; let man5; let pipe; let pipetimer = 0; let mouth; let mouthTimer = 0; let mouthstate = 0;
let man1state = 1; let man2state = 1; let man3state = 1; let man4state = 1; let man5state = 1;
let man1timer = 0; let man2timer = 0; let man3timer = 0; let man4timer = 0; let man5timer = 0;

let mouthBallsGroup;

let man1WanderTarget = { x: 0, y: 0 }; let man1NeedsNewTarget = true; let man1RestTimer = 0; let man1IsResting = false; let man1WalkCycles = 0;
let man2WanderTarget = { x: 0, y: 0 }; let man2NeedsNewTarget = true; let man2RestTimer = 0; let man2IsResting = false; let man2WalkCycles = 0;
let man3WanderTarget = { x: 0, y: 0 }; let man3NeedsNewTarget = true; let man3RestTimer = 0; let man3IsResting = false; let man3WalkCycles = 0;
let man4WanderTarget = { x: 0, y: 0 }; let man4NeedsNewTarget = true; let man4RestTimer = 0; let man4IsResting = false; let man4WalkCycles = 0;
let man5WanderTarget = { x: 0, y: 0 }; let man5NeedsNewTarget = true; let man5RestTimer = 0; let man5IsResting = false; let man5WalkCycles = 0;

function preload() {
	somaticFont = loadFont("assets/somatic.ttf");

	// sound preload
	//bgm = loadSound("sfx/ChillMenu_Loopable.wav"); bgm.setVolume(0.1);

	//sprite preload
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
   
	mouth = new Sprite(300, 300, 142.6, 57.9); mouth.spriteSheet = 'assets/-_mouthloop.png'; mouth.anis.frameDelay = 10;
    mouth.addAnis({ mouth_loop: { row: 0, frames: 9 }, mouth_loop_reverse: { row: 1, frames: 9 }, mouth_idle: { row: 0, frames: 1 }, mouth_idle_reverse: { row: 1, frames: 1 } }); mouth.changeAni('mouth_idle');

	pipe = new Sprite(300, 300, 67.3, 69.9 ); pipe.spriteSheet = 'assets/-_pipe_sprite.png'; pipe.anis.frameDelay = 10;
	pipe.addAnis({ pipe_pink: { row: 0, frames: 10 }, pipe_purple: { row: 1, frames: 10 }, pipe_blue: { row: 2, frames: 10 }, pipe_green: { row: 3, frames: 10 }, pipe_orange: { row: 4, frames: 10 }, pipe_yellow: { row: 5, frames: 10 }, pipe_idle: { row: 6, frames: 1 } }); pipe.changeAni('pipe_idle');
}

function keyPressed() {
	if (key === 'd') {
	  debugMode = !debugMode;
	  allSprites.debug = !allSprites.debug;  
	  console.log("debugMode:", debugMode);
	}
} 

function setup() {
let DynamicWindowWidth = windowWidth;

if (windowWidth <= 600){
	console.log("XS Size detected"); 
    DynamicWindowWidth = (windowHeight/16)*9;
} else if (windowWidth >= 600 && windowWidth <= 1023) {
	console.log("Small Size detected"); 
    DynamicWindowWidth  = (windowHeight/16)*9;
} else if (windowWidth >= 1023 && windowWidth <= 1339) {
	console.log("Medium Size detected");
    DynamicWindowWidth  = (windowHeight/16)*9;
} else if (windowWidth >= 1339 && windowWidth <= 2559) {
	console.log("Large Size detected");
    DynamicWindowWidth  = (windowHeight/16)*9;
} else if (windowWidth >= 2560) {
	console.log("Ultra Wide Size detected");
    DynamicWindowWidth  = (windowHeight/16)*9;
} 

new Canvas(1080, 1920);
displayMode('maxed');
frameRate(60);

textAlign(CENTER, TOP);

p5play.renderStats = true;
allSprites.pixelPerfect = true;

allSprites.overlaps(allSprites);
randomSeed(millis()); // or any varying value to randomize the starting sequence

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

    // Colour Ball Spawne
	mouthBallsGroup = new Group();
	balls = new Group(); balls.layer = 2;

    pinkball = new balls.Group(); pinkball.diameter = 6; pinkball.collider = "dynamic"; pinkball.color = color(255, 255, 255); pinkball.stroke = '#ff0178'; pinkball.strokeWeight = 4;
    pinkball.x = canvas.w/2; pinkball.y = canvas.h/2; pinkball.scale = 2; pinkball.layer = 4;

    purpleball = new balls.Group(); purpleball.diameter = 6; purpleball.collider = "dynamic"; purpleball.color = color(255, 255, 255); purpleball.stroke = '#a138ff'; purpleball.strokeWeight = 4;
    purpleball.x = canvas.w/2; purpleball.y = canvas.h/2+10; purpleball.scale = 2; purpleball.layer = 4;

    blueball = new balls.Group(); blueball.diameter = 6; blueball.collider = "dynamic"; blueball.color = color(255, 255, 255); blueball.stroke = '#00a9ff'; blueball.strokeWeight = 4;
    blueball.x = canvas.w/2; blueball.y = canvas.h/2+10+10; blueball.scale = 2; blueball.layer = 4;

    greenball = new balls.Group(); greenball.diameter = 6; greenball.collider = "dynamic"; greenball.color = color(255, 255, 255); greenball.stroke = '#13ce0d'; greenball.strokeWeight = 4;
    greenball.x = canvas.w/2; greenball.y = canvas.h/2+10+10+10; greenball.scale = 2; greenball.layer = 4;

	orangeball = new balls.Group(); orangeball.diameter = 6; orangeball.collider = "dynamic"; orangeball.color = color(255, 255, 255); orangeball.stroke = '#ff560a'; orangeball.strokeWeight = 4;
    orangeball.x = canvas.w/2; orangeball.y = canvas.h/2+10+10+10+10; orangeball.scale = 2; orangeball.layer = 4;

	yellowball = new balls.Group(); yellowball.diameter = 6; yellowball.collider = "dynamic"; yellowball.color = color(255, 255, 255); yellowball.stroke = '#ffb00b'; yellowball.strokeWeight = 4;
    yellowball.x = canvas.w/2; yellowball.y = canvas.h/2+10+10+10+10+10; yellowball.scale = 2; yellowball.layer = 4;

	pinkball.amount = 1; purpleball.amount = 1; blueball.amount = 1; greenball.amount = 1; orangeball.amount = 1; yellowball.amount = 1;

	// Initialise Man Sprites Locations
	man1.layer = 5; man2.layer = 5; man3.layer = 5; man4.layer = 5; man5.layer = 5; pipe.layer = 4; pipe.collider = 'none';
	man1.rotationLock = true; man2.rotationLock = true; man3.rotationLock = true; man4.rotationLock = true; man5.rotationLock = true;
	man1.width = 28.8/2; man1.height = 74.3/2; man2.width = 28.8/2; man2.height = 74.3/2; man3.width = 28.8/2; man3.height = 74.3/2; man4.width = 28.8/2; man4.height = 74.3/2; man5.width = 28.8/2; man5.height = 74.3/2; pipe.width = 67.3/2; pipe.height = 69.9/2;
	man1.collider = 'dynamic'; man2.collider = 'dynamic'; man3.collider = 'dynamic'; man4.collider = 'dynamic'; man5.collider = 'dynamic'; pipe.collider = 'none';
    man1.scale = 2; man2.scale = 2; man3.scale = 2; man4.scale = 2; man5.scale = 2; pipe.scale = 2;


	balls.collider = 'dynamic'; balls.scale = 2;
	
	man1.x = (canvas.w/2); man1.y = (canvas.h/15)*7; man2.x = (canvas.w/6*4); man2.y = (canvas.h/15)*8.5; man3.x = (canvas.w/6*2); man3.y = (canvas.h/15)*8.5; man4.x = (canvas.w/8*3); man4.y = (canvas.h/15)*10.2; man5.x = (canvas.w/8*5); man5.y = (canvas.h/15)*10.2;
    pipe.x = (canvas.w/2); pipe.y = (canvas.h/15)*9;

	// Gradient Background, 1080x1920 ->
	gradient = new Sprite();
    gradient.x = (canvas.w/2); gradient.y = (canvas.h/2);
	gradient.scale.x = 2; gradient.scale.y = 2;
	gradient.width = canvas.w; gradient.height = canvas.h;
    gradient.collider = 'none'; gradient.layer = 0;
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

	// Nose Sprite
	nose = new Sprite();
	nose.scale.x = 2; nose.scale.y = 2;
	nose.x = (canvas.w/2); nose.y = (canvas.h/15)*12;
	nose.collider = 'none'; nose.image = 'assets/-_nose.png';

	// bookText Sprite
	bookText = new Sprite(); 
	bookText.fill = color(0, 0, 0, 0);    // Completely transparent fill
    bookText.stroke = color(0, 0, 0, 0);  // Remove stroke/borders
	bookText.collider = 'none'; bookText.scale = 2;
	bookText.x = (canvas.w/2); bookText.y = (canvas.h/18)*16;
	bookText.text = "artistic"; bookText.textSize = canvas.w/8; bookText.textColor = '#550c5d';	

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
        console.log("Found nearest ball:", nearestBall.color, "at", nearestBall.sprite.x, nearestBall.sprite.y);
    }
    return nearestBall;
}

// Called when a man’s dropped ball reaches the pipe.
// ballColor is the color for that specific ball.
function handleBallEnteredPipe(ballColor) {
	// If this is the first ball, start the mouth animation.
	if (mouthstate === 0) {
	  mouthstate = 1;
	  mouthTimer = 0;
	  console.log("First ball entered pipe: starting mouth animation");
	  // Spawn a colored ball from the mouth
	  spawnMouthBall(ballColor);
	} 
	// Otherwise, if the animation is already running...
	else if (mouthstate === 1) {
	  // If we're still in the first phase, skip ahead.
	  if (mouthTimer < 31) {
		mouthTimer = 31;
		console.log("Additional ball: skipping to mouth_idle_reverse phase");
	  }
	  // Optionally, you can also spawn another ball here:
	  spawnMouthBall(ballColor);
	}
  }
  


  function spawnMouthBall(ballColor) {
	// Create a new ball sprite at the mouth's current position.
	let newBall = createSprite(mouth.x, mouth.y, random(30, 20));
	
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
	console.log("Spawning mouth ball with color:", ballColor, "mapped to:", hexColor);
	newBall.colour = hexColor; newBall.collider = 'dynamic'; 
	newBall.collide(boundarybox); newBall.collide(headbox);
	newBall.velocity.x = random(-10, 10); newBall.velocity.y = random(-30, -15);
	newBall.strokeWeight = 0; mouthBallsGroup.collides(mouthBallsGroup);
	// Set a custom gravity (negative value for upward acceleration)
	newBall.myGravity = -0.2;
	
	// Add the new ball to the group that holds mouth-spawned balls.
	mouthBallsGroup.add(newBall);
	
	return newBall;
}

function draw() {
	textFont(somaticFont);

//console.log ("Camera X:" + camera.x);
//console.log ("Camera Y:" + camera.y);
//console.log (TileWidth);
//console.log ("Zoom Level:" + ZoomLevel);


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
                console.log("( MAN 1 ) Ball detected within range, transitioning to walking state");
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
        console.log("( MAN 1 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man1.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man1.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man1collect(man1);
            // Make sure the ball color is set for this man only
            man1state = 3;
            console.log("( MAN 1 ) Collected ball!");
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
        console.log("( MAN 1 ) Reached pipe; starting drop animation");
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
        console.log("( MAN 1 ) Drop complete; returning to idle");
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
                console.log("( MAN 2 ) Ball detected within range, transitioning to walking state");
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
        console.log("( MAN 2 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man2.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man2.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man2collect(man2);
            // Make sure the ball color is set for this man only
            man2state = 3;
            console.log("( MAN 2 ) Collected ball!");
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
        console.log("( MAN 2 ) Reached pipe; starting drop animation");
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
        console.log("( MAN 2 ) Drop complete; returning to idle");
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
                console.log("( MAN 3 ) Ball detected within range, transitioning to walking state");
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
        console.log("( MAN 3 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man3.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man3.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man3collect(man3);
            // Make sure the ball color is set for this man only
            man3state = 3;
            console.log("( MAN 3 ) Collected ball!");
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
        console.log("( MAN 3 ) Reached pipe; starting drop animation");
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
        console.log("( MAN 3 ) Drop complete; returning to idle");
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
                console.log("( MAN 4 ) Ball detected within range, transitioning to walking state");
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
        console.log("( MAN 4 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man4.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man4.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man4collect(man4);
            // Make sure the ball color is set for this man only
            man4state = 3;
            console.log("( MAN 4 ) Collected ball!");
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
        console.log("( MAN 4 ) Reached pipe; starting drop animation");
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
        console.log("( MAN 4 ) Drop complete; returning to idle");
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
                console.log("( MAN 5 ) Ball detected within range, transitioning to walking state");
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
        console.log("( MAN 5 ) Ball no longer exists, reverting to wander");
    } else {
        // Continue moving toward the ball
        man5.moveTo(nearest.sprite.x, nearest.sprite.y, 2);
        
        // Using overlaps to determine if the ball is collected
        if (man5.overlaps(nearest.sprite)) {
            // Execute collection function which marks and removes the ball
            man5collect(man5);
            // Make sure the ball color is set for this man only
            man5state = 3;
            console.log("( MAN 5 ) Collected ball!");
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
        console.log("( MAN 5 ) Reached pipe; starting drop animation");
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
        console.log("( MAN 5 ) Drop complete; returning to idle");
    }
} else {}

function man1collect(man1) {
    let nearest = findNearestBall(man1);
    if (nearest && !nearest.sprite.pickedUp) {
        console.log("Man 1 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man1.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn’t there, revert to idle/wander state
        console.log("Ball not found during collection, reverting to wander");
        man1state = 1;
        man1NeedsNewTarget = true;
    }
}

function man2collect(man2) {
    let nearest = findNearestBall(man2);
    if (nearest && !nearest.sprite.pickedUp) {
        console.log("Man 2 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man2.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn’t there, revert to idle/wander state
        console.log("Ball not found during collection, reverting to wander");
        man2state = 1;
        man2NeedsNewTarget = true;
    }
}

function man3collect(man3) {
    let nearest = findNearestBall(man3);
    if (nearest && !nearest.sprite.pickedUp) {
        console.log("Man 3 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man3.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn’t there, revert to idle/wander state
        console.log("Ball not found during collection, reverting to wander");
        man3state = 1;
        man3NeedsNewTarget = true;
    }
}

function man4collect(man4) {
    let nearest = findNearestBall(man4);
    if (nearest && !nearest.sprite.pickedUp) {
        console.log("Man 4 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man4.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn’t there, revert to idle/wander state
        console.log("Ball not found during collection, reverting to wander");
        man4state = 1;
        man4NeedsNewTarget = true;
    }
}

function man5collect(man5) {
    let nearest = findNearestBall(man5);
    if (nearest && !nearest.sprite.pickedUp) {
        console.log("Man 5 collecting " + nearest.color + " ball");
        // Set man1's ballColor property rather than a global
        man5.ballColor = nearest.color;
        nearest.sprite.pickedUp = true;  // Mark as collected
        nearest.sprite.remove();
    } else {
        // If the ball isn’t there, revert to idle/wander state
        console.log("Ball not found during collection, reverting to wander");
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
	  console.log("wander1: Off brainbox, new target:", man1WanderTarget.x, man1WanderTarget.y);
	}
	
	// Resting behavior
	if (man1IsResting) {
	  sprite.changeAni('walk_idle');
	  man1RestTimer++;
	  if (man1RestTimer >= 120) {
		man1IsResting = false;
		man1RestTimer = 0;
		man1NeedsNewTarget = true;
		console.log("wander1: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	// Generate a new target if needed or if the current one is nearly reached
	if (man1NeedsNewTarget || dist(sprite.x, sprite.y, man1WanderTarget.x, man1WanderTarget.y) < 10) {
	  man1WalkCycles++;
	  if (man1WalkCycles >= 3) {
		man1IsResting = true;
		man1WalkCycles = 0;
		console.log("wander1: Taking a rest");
		return;
	  }
	  // Generate a new random target inside the brainbox
	  man1WanderTarget = getRandomBrainboxTarget();
	  man1NeedsNewTarget = false;
	  console.log("wander1: New wander target:", man1WanderTarget.x, man1WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man1WanderTarget.x, man1WanderTarget.y, 0.5);
  }
  
  // Use a similar approach for the other wander functions:
  
  function wander2(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man2WanderTarget = getRandomBrainboxTarget();
	  man2NeedsNewTarget = false;
	  console.log("wander2: Off brainbox, new target:", man2WanderTarget.x, man2WanderTarget.y);
	}
	
	if (man2IsResting) {
	  sprite.changeAni('walk_idle');
	  man2RestTimer++;
	  if (man2RestTimer >= 120) {
		man2IsResting = false;
		man2RestTimer = 0;
		man2NeedsNewTarget = true;
		console.log("wander2: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man2NeedsNewTarget || dist(sprite.x, sprite.y, man2WanderTarget.x, man2WanderTarget.y) < 10) {
	  man2WalkCycles++;
	  if (man2WalkCycles >= 3) {
		man2IsResting = true;
		man2WalkCycles = 0;
		console.log("wander2: Taking a rest");
		return;
	  }
	  man2WanderTarget = getRandomBrainboxTarget();
	  man2NeedsNewTarget = false;
	  console.log("wander2: New wander target:", man2WanderTarget.x, man2WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man2WanderTarget.x, man2WanderTarget.y, 0.5);
  }
  
  function wander3(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man3WanderTarget = getRandomBrainboxTarget();
	  man3NeedsNewTarget = false;
	  console.log("wander3: Off brainbox, new target:", man3WanderTarget.x, man3WanderTarget.y);
	}
	
	if (man3IsResting) {
	  sprite.changeAni('walk_idle');
	  man3RestTimer++;
	  if (man3RestTimer >= 120) {
		man3IsResting = false;
		man3RestTimer = 0;
		man3NeedsNewTarget = true;
		console.log("wander3: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man3NeedsNewTarget || dist(sprite.x, sprite.y, man3WanderTarget.x, man3WanderTarget.y) < 10) {
	  man3WalkCycles++;
	  if (man3WalkCycles >= 3) {
		man3IsResting = true;
		man3WalkCycles = 0;
		console.log("wander3: Taking a rest");
		return;
	  }
	  man3WanderTarget = getRandomBrainboxTarget();
	  man3NeedsNewTarget = false;
	  console.log("wander3: New wander target:", man3WanderTarget.x, man3WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man3WanderTarget.x, man3WanderTarget.y, 0.5);
  }
  
  function wander4(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man4WanderTarget = getRandomBrainboxTarget();
	  man4NeedsNewTarget = false;
	  console.log("wander4: Off brainbox, new target:", man4WanderTarget.x, man4WanderTarget.y);
	}
	
	if (man4IsResting) {
	  sprite.changeAni('walk_idle');
	  man4RestTimer++;
	  if (man4RestTimer >= 120) {
		man4IsResting = false;
		man4RestTimer = 0;
		man4NeedsNewTarget = true;
		console.log("wander4: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man4NeedsNewTarget || dist(sprite.x, sprite.y, man4WanderTarget.x, man4WanderTarget.y) < 10) {
	  man4WalkCycles++;
	  if (man4WalkCycles >= 3) {
		man4IsResting = true;
		man4WalkCycles = 0;
		console.log("wander4: Taking a rest");
		return;
	  }
	  man4WanderTarget = getRandomBrainboxTarget();
	  man4NeedsNewTarget = false;
	  console.log("wander4: New wander target:", man4WanderTarget.x, man4WanderTarget.y);
	}
	
	sprite.changeAni('walk_loop');
	sprite.moveTo(man4WanderTarget.x, man4WanderTarget.y, 0.5);
  }
  
  function wander5(sprite) {
	if (!isInsideBrainbox(sprite)) {
	  man5WanderTarget = getRandomBrainboxTarget();
	  man5NeedsNewTarget = false;
	  console.log("wander5: Off brainbox, new target:", man5WanderTarget.x, man5WanderTarget.y);
	}
	
	if (man5IsResting) {
	  sprite.changeAni('walk_idle');
	  man5RestTimer++;
	  if (man5RestTimer >= 120) {
		man5IsResting = false;
		man5RestTimer = 0;
		man5NeedsNewTarget = true;
		console.log("wander5: Rest complete, resuming wandering");
	  }
	  return;
	}
	
	if (man5NeedsNewTarget || dist(sprite.x, sprite.y, man5WanderTarget.x, man5WanderTarget.y) < 10) {
	  man5WalkCycles++;
	  if (man5WalkCycles >= 3) {
		man5IsResting = true;
		man5WalkCycles = 0;
		console.log("wander5: Taking a rest");
		return;
	  }
	  man5WanderTarget = getRandomBrainboxTarget();
	  man5NeedsNewTarget = false;
	  console.log("wander5: New wander target:", man5WanderTarget.x, man5WanderTarget.y);
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
