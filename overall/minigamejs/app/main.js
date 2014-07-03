
// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Main game loop

// TODO Shoudl be removed when it's working continuously
var cyclus = 1;

// TODO All these window level var's and function should be put under namespace
var canvas;
var context;

var drawables;

function getGameHeight() {
	return canvas.height;
}
function getGameWidth() {
	return canvas.width;	
}
function getGameGroundLevelY() {
	return getGameHeight() - 80;
}
function getGameContext() {
	return context;
}

function initAfterLoadPage() {
	// Init
	canvas  = document.getElementById('thecanvas');
	context = canvas.getContext('2d');

	// Set canvas to full page
	canvas.width  = window.innerWidth;
	canvas.height = window.innerHeight;

	drawables = initDrawables(context, getGameGroundLevelY());

	gameloop();
}

window.onkeypress = function(event) {
	console.log('key code'+event.keyCode);
	
	for (var i = 0; i < (drawables.length); i++) { 
		if ((typeof drawables[i].onkeypress !== 'undefined') )
		drawables[i].onkeypress(event);
	}
}

window.onclick = function(event) {
	console.log("clicked")
}

function gameloop() {
	cyclus = cyclus + 1;
	if (cyclus < 500) {
		setTimeout( function() {
			redraw();
			gameloop();
		}, 50);
	}
}

function redraw() {
	for (var i = 0; i < (drawables.length); i++) { 
		drawables[i].update();
	}
	clearSky();

	for (var i = 0; i < (drawables.length); i++) { 
		drawables[i].redraw();
	}
}
