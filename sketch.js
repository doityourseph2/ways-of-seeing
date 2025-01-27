
function preload() {
	somaticFont = loadFont('somatic.ttf');

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

new Canvas(windowWidth, windowHeight);
displayMode('maxed');
frameRate(60);

textFont(somaticFont);
textAlign(CENTER, TOP);

p5play.renderStats = true;
allSprites.pixelPerfect = true;

// Initialise TileWidth -> Spawning Bounding Boxes based on window size
/* if (windowWidth <= 600){
	console.log("XS Size detected"); 
	TileWidth = 240;
	SpawnMulti = 1;

} else if (windowWidth >= 600 && windowWidth <= 1023) {
	console.log("Small Size detected"); 
	TileWidth = 380;
	SpawnMulti = 1.5;

} else if (windowWidth >= 1023 && windowWidth <= 1339) {
	console.log("Medium Size detected");
	TileWidth = 480;
	SpawnMulti = 1.8;

} else if (windowWidth >= 1339 && windowWidth <= 2559) {
	console.log("Large Size detected");
	TileWidth = 630;
	SpawnMulti = 2;

} else if (windowWidth >= 2560) {
	console.log("Ultra Wide Size detected");
	TileWidth = 606;
	SpawnMulti = 2.5;
} */


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
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
} */

}

function draw() {

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
background('#ede7fd');
//world.gravity.y = 11;
}
