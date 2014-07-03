// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// A function meant for building enemies

function getAnEnemy() {
	anfunc = function(aspeed, mostleft, mostright) {
		if (checkCollision(getGameContext(), this.xpos+21, this.ypos, [255,0,0])) {
			this.direction[1] = -2;
		} else {
			this.direction[1] = 0;
		}
		
		if ((this.direction[0] > 0) && (this.xpos > 450)) {
			this.direction[0] = -5;
		} 
		if ((this.direction[0] < 1) && (this.xpos < 50)) {
			this.direction[0] = 5;
		} 

		this.xpos = this.xpos + this.direction[0];
		this.ypos = this.ypos + this.direction[1];
	}

	var aEnemy = initDrawable(getGameContext(), [100,(getGameGroundLevelY()-20),20,20], 'orange', [5,0], anfunc);
	return aEnemy;
}