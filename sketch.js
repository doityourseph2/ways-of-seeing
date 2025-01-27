let debugMode = false; 
let puppet; let nose; 

let somaticFont;

function preload() {
	somaticFont = loadFont("assets/somatic.ttf");

	// sound preload
	//bgm = loadSound("sfx/ChillMenu_Loopable.wav"); bgm.setVolume(0.1);
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

	// Gradient Background, 1080x1920 ->
	gradient = new Sprite();
    gradient.x = (canvas.w/2); gradient.y = (canvas.h/2);
	gradient.scale.x = 2; gradient.scale.y = 2;
	gradient.width = canvas.w; gradient.height = canvas.h;
    gradient.collider = 'none'; gradient.layer = 0;
    gradient.image = 'assets/-_orange-gradient.png'; gradient.sleeping = true;

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
	bookText.fill = color(0, 0, 0, 0);  // Completely transparent fill
    bookText.stroke = color(0, 0, 0, 0);  // Remove stroke/borders
	bookText.collider = 'none'; bookText.scale = 2;
	bookText.x = (canvas.w/2); bookText.y = (canvas.h/18)*16;
	bookText.text = "artistic"; bookText.textSize = canvas.w/8; bookText.textColor = '#550c5d';	
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
//world.gravity.y = 11;
}
