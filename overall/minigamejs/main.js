
var cyclus = 1;
var canvas;
var context;
var drawableobjects = [];
var blokjes;

function initAfterLoadPage() {
	canvas = document.getElementById('thecanvas');

	// Full page
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	context = canvas.getContext('2d');

	blokjes = initBlocks(context);
	drawableobjects[0] = {
		draw: function() {linefigure(context, 'orange', 
			[ [0,350], [100,350], [100,370], [150,370], [150,350], 
				[400,350], [400,370], [450,370], [450,350], [canvas.width,350], [canvas.width,400], [0,400] ])}
	}
	drawableobjects[1] = {
		draw: function() {linefigure(context, 'yellow', [[500,200], [520,210], [600,220], [620,210], [640,190], [540,180], [500,200]])}
	}
	drawableobjects[2] = {
		draw: function() {linefigure(context, 'orange', [[0,0], [300,150], [200,250], [250,300]])}
	}
	drawableobjects[3] = {
		draw: function() {linefigure(context, 'red', [[400,350], [450,320]])}
	}
	drawableobjects[4] = {
		draw: function() {linefigure(context, 'lightgreen', [[700,150], [720,210], [800,220], [820,210], [940,190], [940,180], [700,150]])}
	}
	
	var acloud = [[170, 80], [130, 100, 130, 150, 230, 150],
													[250, 180, 320, 180, 340, 150],
													[420, 150, 420, 120, 390, 100],
													[430, 40, 370, 30, 340, 50],
													[320, 5, 250, 20, 250, 50],
													[200, 5, 150, 20, 170, 80]]
													
	drawableobjects[5] = {
		draw: function() {makeCloud2(context, '#8ED6FF', [290,40], acloud)}
	}
	drawableobjects[6] = {
		draw: function() {makeCloud3(context, '#8ED6FF', [400,60], acloud)}
	}
	
	
	var acloud2 =	[[150, 60], [130, 100, 130, 150, 230, 150],
								[250, 180, 320, 180, 340, 150],
								[420, 150, 420, 120, 390, 100],
								[430, 40, 370, 30, 340, 50],
								[360, 40, 350, 35, 330, 50],
								[300, 5, 220, 20, 220, 50],
								[200, 5, 170, 20, 150, 60]]
	
	drawableobjects[7] = {
		draw: function() {makeCloud2(context, '#8ED6FF', [0,0], acloud2)}
	}
	runner();
}

window.onkeypress = function(event) {
	console.log('yiew'+event.keyCode);
	
	blokjes[3].onkeypress(event);
}

window.onclick = function(event) {
	console.log("clicked")
}

function runner() {
	cyclus = cyclus + 1;
	if (cyclus < 500) {
		setTimeout( function() {
			// keyResult = onKeyDown();
			// console.log('keyResult'+keyResult);
			redraw();
			runner();
		}, 10);
	}
}

function redraw() {
	clearWindow();

	for (var i = 0; i < (drawableobjects.length); i++) { 
		// console.log(drawableobjects[i]);
		drawableobjects[i].draw();
	}
	// // ground
	// linefigure(context, 'orange', [[0,350], [100,350], [100,370], [150,370], [150,350], 
	// 															[400,350], [400,370], [450,370], [450,350], [canvas.width,350], [canvas.width,400], [0,400] ]);
	// linefigure(context, 'yellow', [[500,200], [520,210], [600,220], [620,210], [640,190], [540,180], [500,200]]);
	// linefigure(context, 'orange', [[0,0], [300,150], [200,250], [250,300]]);
	// linefigure(context, 'red', [[400,350], [450,320]]);
	// linefigure(context, 'lightgreen', [[700,150], [720,210], [800,220], [820,210], [940,190], [940,180], [700,150]]);



	for (var i = 0; i < (blokjes.length); i++) { 
		blokjes[i].update();
	}
	for (var i = 0; i < (blokjes.length); i++) { 
		blokjes[i].redraw();
	}
}

function clearWindow() {
	context.fillStyle = 'black';	
	context.fillRect(0, 0, canvas.width, canvas.height);


	console.log("canvas.width "+canvas.width+ ", canvas.height "+canvas.height);
  context.rect(0, 0, canvas.width, canvas.height);
  // add linear gradient
  // var grd = context.createLinearGradient(canvas.width, canvas.height, 0, 0);
  var grd = context.createLinearGradient(canvas.width / 2,  canvas.height, canvas.width / 2, 0);
  // light blue
  grd.addColorStop(0, '#8ED6FF');   
  // dark blue
  grd.addColorStop(1, '#004CB3');
  context.fillStyle = grd;
  context.fill();

  // context.rect(0, 0, 200, 200);
  // // add linear gradient
  // var grd = context.createLinearGradient(0, 0, 200, 200);
  // // light blue
  // grd.addColorStop(0, '#8ED6FF');   
  // // dark blue
  // grd.addColorStop(1, '#004CB3');
  // context.fillStyle = grd;
  // context.fill();
}
