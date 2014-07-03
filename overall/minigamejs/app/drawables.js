// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Set up of all drawable things

function initDrawable(acontext, coord, acolor, adirection, aupdatefunc, adrawfunc) {
	ax = coord[0];
	ay = coord[1];
	aw = coord[2];
	ah = coord[3];

	var thedrawfunc;
	if (arguments.length > 5) {
	  thedrawfunc = adrawfunc;
	} else {
		thedrawfunc = function() {
			this.thecontext.fillStyle = this.color;	
			this.thecontext.fillRect(this.xpos, this.ypos, this.width, this.height);
		}
	}

	return {
		thecontext: acontext,
		
		xpos: ax,
		ypos: ay,
	
		width: aw,
		height: ah,
	
		color: acolor,
		direction: adirection,
		
		redraw: thedrawfunc,
		update: aupdatefunc
	}
}

function initDrawables(acontext) {
	var returnArray = [];
	returnArray.push(
		initDrawable(acontext, [0,getGameGroundLevelY(),getGameWidth(),getGameHeight()], 'lightgreen', 0, function() {})
	);
	
	returnArray.push(
		initDrawable(acontext, [100, getGameGroundLevelY(),150, 20], 'blue', 0, function() {})
	);
	returnArray.push(
		initDrawable(acontext, [400, getGameGroundLevelY(), 90, 25], 'blue', 0, function() {})
	);

 	var theskyline = skyline();

	var img1 = new Image();
	img1.src = "pattern4.png";

	returnArray.push(
		initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, function() {},
									function() {linefigure('gray', [0,getGameGroundLevelY()], theskyline, [1,'000000'], img1)})
	);
	
	returnArray.push(
		initDrawable(acontext, [0, 0, 0, 0], 'red', 0, function() {},
									function() {linefigure('red', [400, getGameGroundLevelY()], [[480,getGameGroundLevelY()-50]], [20,'FF0000'])})
	);

	var afunc = function() {this.xpos = this.xpos - 10;}
	returnArray.push(
		initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, 	afunc,
												function() {makeCloud2(context, '#8ED6FF', [290,40], cloudArray1())})
	);

	var afunc = function() {this.xpos = this.xpos - 10;}
	returnArray.push(
		initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, 	afunc,
											function() {makeCloud3(context, '#8ED6FF', [400, 60], cloudArray1())})
	);

	var afunc = function() {this.xpos = this.xpos - 10;}
	returnArray.push(
		initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, 	afunc,
													function() {makeCloud2(context, '#8ED6FF', [0,0], cloudArray1())})
	);

	returnArray.push(
		getAnEnemy()
	);
	
	returnArray.push(
		initDrawable(acontext, [100,80,40,50], 'blue', 0, function() {this.xpos = this.xpos + 8;})
	);
	
	returnArray.push(
		returnPlayer()
	);

	returnArray.push(
		initDrawable(acontext, [620,270,250,30], 'lightgreen', 1, function() {})
	);
	
	return returnArray;
	
	
	// var blokje0a = initDrawable(acontext, [0,getGameGroundLevelY(),getGameWidth(),getGameHeight()], 'lightgreen', 0, function() {});
	// 
	// var blokje0b = initDrawable(acontext, [100, getGameGroundLevelY(),150, 20], 'blue', 0, function() {});
	// var blokje0c = initDrawable(acontext, [400, getGameGroundLevelY(), 90, 25], 'blue', 0, function() {});
	// 
	//  	var theskyline = skyline();
	// 
	// var img1 = new Image();
	// img1.src = "pattern4.png";
	// 
	// var blokje0d = initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, function() {},
	// 									function() {linefigure('gray', [0,getGameGroundLevelY()], theskyline, [1,'000000'], img1)});
	// 
	// 
	// var blokje0e = initDrawable(acontext, [0, 0, 0, 0], 'red', 0, function() {},
	// 									function() {linefigure('red', [400, getGameGroundLevelY()], [[480,getGameGroundLevelY()-50]], [20,'FF0000'])});
	// 
	// // TODO CLOUDS MOETEN WEER BEWEGEN
	// var afunc = function() {this.xpos = this.xpos - 10;}
	// var blokje0f = initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, 	afunc,
	// 									function() {makeCloud2(context, '#8ED6FF', [290,40], cloudArray1())});
	// 
	// var afunc = function() {this.xpos = this.xpos - 10;}
	// var blokje0g = initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, 	afunc,
	// 								function() {makeCloud3(context, '#8ED6FF', [400, 60], cloudArray1())});
	// 																
	// var afunc = function() {this.xpos = this.xpos - 10;}
	// var blokje0h = initDrawable(acontext, [0, 0, 0, 0], 'blue', 0, 	afunc,
	// 										function() {makeCloud2(context, '#8ED6FF', [0,0], cloudArray1())});
	// 
	// var blokje1 = getAnEnemy();
	// 
	// var blokje2 = initDrawable(acontext, [100,80,40,50], 'blue', 0, function() {this.xpos = this.xpos + 8;});
	// 
	//   var blokje4 =	returnPlayer();
	// var blokje5 = initDrawable(acontext, [620,270,250,30], 'lightgreen', 1, function() {});
	// 
	// return [blokje0a, blokje0b, blokje0c, blokje0d, blokje0e, blokje0f, blokje0g, blokje0h, blokje1, blokje2, blokje4, blokje5];
}