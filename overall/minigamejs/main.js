
var cyclus = 1;
var canvas;
var context;
var drawableobjects = [];
var blokjes;
var groundheight = 80;
var theskyline;

function initAfterLoadPage() {
	canvas = document.getElementById('thecanvas');

	// Full page
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	context = canvas.getContext('2d');

	blokjes = initBlocks(context);

	var grlvl = canvas.height - groundheight;

	drawableobjects.push({
		draw: function() {
			linefigure(context, 'lightgreen', [0,grlvl],
				[ [100,grlvl], [100,grlvl+20], [150,grlvl+20], [150,grlvl], 
					[400,grlvl], [400,grlvl+20], [450,grlvl+20], [450,grlvl], [canvas.width,grlvl], [canvas.width,canvas.height],
					[0,canvas.height] ])}
	});
	
	// drawableobjects.push({
	// 	draw: function() {
	// 		linefigure(context, 'yellow', [500,200] , 
	// 			[ [520,210], [600,220], [620,210], [640,190], [540,180], [500,200]])}
	// });
	// 
	theskyline = skyline(grlvl);
	drawableobjects.push({
		draw: function() {
			linefigure(context, 'gray', [0,grlvl], theskyline)}
	});
	
	drawableobjects.push({
		draw: function() {
			var grlvl = canvas.height - groundheight;
			linefigure(context, 'red', [400,grlvl], [[450,grlvl-30]])}
	});
	
	var acloud = [[170, 80], [130, 100, 130, 150, 230, 150],
													[250, 180, 320, 180, 340, 150],
													[420, 150, 420, 120, 390, 100],
													[430, 40, 370, 30, 340, 50],
													[320, 5, 250, 20, 250, 50],
													[200, 5, 150, 20, 170, 80]]
													
	drawableobjects.push({
		origin: [290,40],
		draw: function() {
			makeCloud2(context, '#8ED6FF', this.origin, acloud);
			this.origin[0] = this.origin[0] - 0.1;
		}
	});
	
	drawableobjects.push({
		origin: [400,60],
		draw: function() {
			makeCloud3(context, '#8ED6FF', this.origin, acloud)
			this.origin[0] = this.origin[0] - 0.2;
		}
	});
		
	var acloud2 =	[[150, 60], [130, 100, 130, 150, 230, 150],
								[250, 180, 320, 180, 340, 150],
								[420, 150, 420, 120, 390, 100],
								[430, 40, 370, 30, 340, 50],
								[360, 40, 350, 35, 330, 50],
								[300, 5, 220, 20, 220, 50],
								[200, 5, 170, 20, 150, 60]]
	
	drawableobjects.push({
		origin: [0,0],
		draw: function() {
			makeCloud2(context, '#8ED6FF', this.origin, acloud2)
			this.origin[0] = this.origin[0] + 0.1;
		}
	});
	
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
		drawableobjects[i].draw();
	}

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
  var grd = context.createLinearGradient(canvas.width / 2,  canvas.height, canvas.width / 2, 0);
  // light blue
  grd.addColorStop(0, '#8ED6FF');   
  // dark blue
  grd.addColorStop(1, '#004CB3');
  context.fillStyle = grd;
  context.fill();
}
