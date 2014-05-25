

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

function initBlocks(acontext, groundlevel) {
	anfunc = function(aspeed, mostleft, mostright) {
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
		if ((this.richting === 0) && (this.xpos > 450)) {
			this.richting = 1;
		} 
		if ((this.richting === 1) && (this.xpos < 50)) {
			this.richting = 0;
		} 
	
		if (this.richting == 0) {
			this.xpos = this.xpos + 5;
		} else {
			this.xpos = this.xpos - 5;
		}
	
	}
	
	// HIER GEBLEVEN DEZE FUNCTIE WERKT ZO NIET MAAR IS WEL GOED VOORBEELD!
	
	// var blokje1 = initBlock(acontext, 100,(groundlevel-20),20,20, 'orange', 0, function() {return anfunc(5,50,450)});
	var blokje1 = initBlock(acontext, 100,(groundlevel-20),20,20, 'orange', 0, anfunc);
	
	
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
  var blokje4 =	returnblokje4(acontext, groundlevel);
	var blokje5 = initBlock(acontext, 620,170,50,30, 'lightgreen', 1, function() {});

	return [blokje1, blokje2, blokje3, blokje4, blokje5];
}