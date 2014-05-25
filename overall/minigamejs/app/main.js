
// Main game loop
// Part of the web front-end html5 acceleration course

// canvas attributes
var canvas;
var context;

// TODO Shoudl be removed when it's working continuously
var cyclus = 1;

var drawableobjects = [];
var blokjes;
var groundheight = 80;

function initAfterLoadPage() {
	
	// Init
	canvas = document.getElementById('thecanvas');
	context = canvas.getContext('2d');

	// Full page
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	// TODO must be combined
	var grlvl = canvas.height - groundheight;
	blokjes = initBlocks(context, grlvl);
	addObjects(drawableobjects, grlvl);

	runner();
}

window.onkeypress = function(event) {
	console.log('key code'+event.keyCode);
	
	for (var i = 0; i < (blokjes.length); i++) { 
		if ((typeof blokjes[i].onkeypress !== 'undefined') )
		blokjes[i].onkeypress(event);
	}
}

window.onclick = function(event) {
	console.log("clicked")
}

function runner() {
	cyclus = cyclus + 1;
	if (cyclus < 500) {
		setTimeout( function() {
			redraw();
			runner();
		}, 50);
	}
}

function redraw() {
	clearSky();

	for (var i = 0; i < (drawableobjects.length); i++) { 
		drawableobjects[i].draw();
	}

	for (var i = 0; i < (blokjes.length); i++) { 
		blokjes[i].update();
	}
	for (var i = 0; i < (blokjes.length); i++) { 
		blokjes[i].redraw();
	}
}

