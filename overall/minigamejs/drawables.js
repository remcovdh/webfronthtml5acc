

function skyline(grlvl) {
	var theskyline = [];
  var distanceprevious;
	var buildingwidth;
	var buildingheight;
	var agrlvl = grlvl - 4;
	var startXpoint = 5; 
	while (startXpoint < canvas.width) {
		distanceprevious = (Math.random() * 10) - 5;
		buildingwidth = Math.random() * 20 + 5;
		
		var a = Math.abs(startXpoint - (canvas.width / 3));
		var b = (-1 * (a - (2 * (canvas.width / 3)))) / canvas.width;
		var c = 300 * b;
		
		buildingheight = Math.random() * c + (20 * (b+1)) ;
		theskyline.push([startXpoint + distanceprevious, agrlvl ]);
		theskyline.push([startXpoint + distanceprevious, agrlvl - buildingheight ]);
		theskyline.push([startXpoint + distanceprevious + buildingwidth, agrlvl - buildingheight ]);
		theskyline.push([startXpoint + distanceprevious + buildingwidth, agrlvl ]);
		startXpoint = startXpoint + distanceprevious + buildingwidth;
	}
	return theskyline;
}

function linefigure(actxt, acolor, origin, points) {
	actxt.strokeStyle = acolor;
	
  actxt.beginPath();
	actxt.moveTo(origin[0],origin[1]);
	for (var i = 0; i < (points.length); i++) { 
		actxt.lineTo(points[i][0],points[i][1]);
	}
	actxt.fillStyle = acolor;
	// actxt.fillStyle = '#8ED6FF';
	actxt.fill();
  actxt.closePath();
	
	actxt.stroke();
}

function makeCloud2(actxt, acolor, origin, points) {
	actxt.beginPath();
	actxt.moveTo(points[0][0] + origin[0],points[0][1]  + origin[1]);
	for (var i = 1; i < (points.length); i++) { 
		actxt.bezierCurveTo(points[i][0] + origin[0],points[i][1] + origin[1],
												points[i][2] + origin[0],points[i][3] + origin[1],
												points[i][4] + origin[0],points[i][5] + origin[1]);
	}

	// complete custom shape
	actxt.closePath();
	actxt.lineWidth = 5;
	actxt.fillStyle = acolor;
	actxt.fill();
	actxt.strokeStyle = 'blue';
	actxt.stroke();
}

function makeCloud3(actxt, acolor, origin, points) {
	actxt.beginPath();
	actxt.moveTo(points[0][0] + origin[0],points[0][1]  + origin[1]);
	for (var i = 1; i < (points.length); i++) { 
		actxt.bezierCurveTo(points[i][0] + origin[0],points[i][1] + origin[1],
												points[i][2] + origin[0],points[i][3] + origin[1],
												points[i][4] + origin[0],points[i][5] + origin[1]);
	}

	// complete custom shape
	actxt.closePath();
	actxt.lineWidth = 5;
	
	
	var grd = context.createLinearGradient(origin[0], origin[1], origin[0]+200, origin[0]+50);
	grd.addColorStop(0, '#FFFFFF');   // light blue
	grd.addColorStop(1, '#111111');	// dark blue
	context.fillStyle = grd;
	context.fill();
	
	actxt.strokeStyle = 'gray';
	actxt.stroke();
}



function initBlock(acontext, ax, ay, aw, ah, acolor, arichting, aupdatefunc) {
	return {
		thecontext: acontext,
		
		xpos: ax,
		ypos: ay,
	
		width: aw,
		height: ah,
	
		color: acolor,
		richting: arichting,
		
		redraw: function() {
			this.thecontext.fillStyle = this.color;	
			this.thecontext.fillRect(this.xpos, this.ypos, this.width, this.height);
		},
	
		update: aupdatefunc
	}
}

function initBlocks(acontext) {
	anfunc = function() {
		var lengte = 10;
		var imgd = acontext.getImageData(this.xpos, this.ypos+1, 1, lengte);
		var pix = imgd.data;
		
		var foundGround = false;
		for (var i = 0; i < lengte; i++) { 
			if ((pix[0+(i*4)] > 200) && (pix[1+(i*4)] < 100) && (pix[2+(i*4)] < 100)) {
				foundGround = true;
			} else {
			}
		}
		if ((!foundGround) && (this.ypos < 400)) {
			this.ypos = this.ypos + 5;
		}
		// if (this.ypos < (350 - this.height)) {
		// 	this.ypos = this.ypos + 10;
		// }
		// if (this.xpos < 450) {
		// 	this.ypos = this.ypos - 2;
		// }
		// if (this.xpos > 450) {
		// 	this.ypos = this.ypos - 8;
		// }
		if ((this.richting === 0) && (this.xpos > 450)) {
			// console.log('A switch?'); 
			this.richting = 1;
		} 
		if ((this.richting === 1) && (this.xpos < 50)) {
			// console.log('Switch'); 
			this.richting = 0;
		} 
	
		if (this.richting == 0) {
			this.xpos = this.xpos + 5;
		} else {
			this.xpos = this.xpos - 5;
		}
	
	}

	var blokje1 = initBlock(acontext, 100,100,20,40, 'yellow', 0, anfunc);
	var blokje2 = initBlock(acontext, 100,80,40,50, 'blue', 0, function() {this.xpos = this.xpos + 8;});
	
	anfunc = function() {
		lengte = 20;
		var imgd = acontext.getImageData(this.xpos+1, this.ypos, 1, lengte);
		var pix = imgd.data;
		for (var i = 0; i < lengte; i++) { 
			if ((pix[0+(i*4)] === 0) && (pix[1+(i*4)] === 0) && (pix[2+(i*4)] === 0)) {
			} else {
				// console.log('h'+pix[0+(i*4)]+','+pix[1+(i*4)]+','+pix[2+(i*4)]);
			}
			if ((pix[0+(i*4)] > 200) && (pix[1+(i*4)] < 100) && (pix[2+(i*4)] < 100)) {
				this.richting = 1
			}
		}
		// if ((pix[0] == 0) && (pix[1] == 0) && (pix[2] == 0)) {
		// 	console.log('hier2	');
		// 	this.richting = 1
		// }
	
		if (this.richting == 0) {
			this.xpos = this.xpos + 5;
		} else {
			this.xpos = this.xpos - 5;
		}
		if ((this.richting == 1) && (this.xpos < 20)) {
			this.ypos = this.ypos + 25;
			this.richting = 0
		}
	}
	
	var blokje3 = initBlock(acontext, 80,170,50,30, 'gray', 0, anfunc);
	
	
	afunc = function() {
		if (this.richting == 1) {
			this.xpos = this.xpos - 6;
		} else
		{
			this.xpos = this.xpos + 6;
		}
	}
	
	var blokje4 = initBlock(acontext, 480,170,50,30, 'orange', 1, afunc);
	blokje4.onkeypress = function(event) {
		// 
		
		if (event.keyCode===115) { // 's'
			// this.xpos = this.xpos + 6;
			this.richting = 0;
		}
		if (event.keyCode===97) {
			console.log('ziew'+event.keyCode+'  '+ this.xpos);
			this.richting = 1;
			console.log('xiew'+event.keyCode+'  '+ this.xpos);
		}
		if (event.keyCode===119) {
			this.ypos = this.ypos - 6;
		}
		if (event.keyCode===122) {
			this.ypos = this.ypos + 6;
		}
	}
	
	var blokje5 = initBlock(acontext, 620,170,50,30, 'lightgreen', 1, function() {});

	return [blokje1, blokje2, blokje3, blokje4, blokje5];
}