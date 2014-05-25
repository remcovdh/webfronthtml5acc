



function returnblokje4(acontext, groundlevel) {
	afunc = function() {
		if (this.richting == 1) {
			this.xpos = this.xpos - 6;
		} else
		{
			this.xpos = this.xpos + 6;
		}
		if (checkCollision(acontext, this.xpos, this.ypos + 31, [144,238,144]))  {
			this.ypos = this.ypos + 3;
		} else {
			this.ypos = groundlevel - 30 ;
		}
	}

	var ablokje = initBlock(acontext, 480,270,50,30, 'purple', 1, afunc);

	ablokje.onkeypress = function(event) {
		if (event.keyCode===115) { // 's'
			this.richting = 0;
		}
		if (event.keyCode===97) {
			this.richting = 1;
		}
		if (event.keyCode===119) {
			if (this.ypos > groundlevel - 50) {
				this.ypos = this.ypos - 26;
			} 
		}
		// if (event.keyCode===122) {
		// 	this.ypos = this.ypos + 6;
		// }
	}
	return ablokje;
}