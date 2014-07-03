// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Move-able item ('a','w','s')

function playerHeight() {
	return 30;	
}

function playerWidth() {
	return 50
}

function detectCollisionOrOutOfGameView(xpos, pot_xpos, ypos, pot_ypos) {
	return ((pot_ypos > getGameHeight() - (playerHeight() + 1)) || 
					(checkCollision(getGameContext(), xpos, pot_ypos + playerHeight() + 1, [144,238,144]))) 

}

function detect1(xpos, pot_xpos, ypos, pot_ypos) {
	if (detectCollisionOrOutOfGameView(xpos, pot_xpos, ypos, pot_ypos)) {
		if (((pot_ypos - ypos)) > 1) {
			// recursive looping with half the distance
			// new_pot_ypos = (ypos + Math.round(((pot_ypos - ypos) / 2)));
			new_pot_ypos = (ypos + Math.round(((pot_ypos - ypos) / 2)));
			return (detect1(xpos, pot_xpos, ypos, new_pot_ypos));
		} else {
			return ypos;
		}
	} else {
		return pot_ypos;
	}
}

function returnPlayer() {
	var acontext      = getGameContext();
	var groundlevel   = getGameGroundLevelY();
	
	var updatePos = function() {

		// X position
		var potential_xpos = this.xpos + this.direction[0];
		var potential_ypos = this.ypos + this.direction[1];
		
		if (potential_xpos < 0) {
			this.xpos = 0;
		} else {
			if ((potential_xpos > getGameWidth() - playerWidth())) {
				this.xpos = getGameWidth() - playerWidth();
			} else {
				if ((this.direction[0] > 0)) {
					if (checkCollision(acontext, this.xpos + playerWidth(), this.ypos + playerHeight(), [144,238,144])) {
						console.log('doen');
						// ingewikkelder snijpunt meten
					} else {
						this.xpos = potential_xpos;
					}
				} else {
					if (checkCollision(acontext, this.xpos, this.ypos + playerHeight(), [144,238,144])) {
						console.log('doen2 = '+ this.xpos + ' ' + this.ypos + ' ' + potential_xpos);
						// ingewikkelder snijpunt meten
					} else {
						this.xpos = potential_xpos;
					}
				}
			}	
		}

		// Y position
		if (potential_ypos > getGameHeight() - (playerHeight() + 1)) {
			this.direction[1] = 1;
		} else {
			if ((checkCollision(acontext, this.xpos, potential_ypos + playerHeight() + 1, [144,238,144])) ||
					(checkCollision(acontext, this.xpos + playerWidth(), potential_ypos + playerHeight() + 1, [144,238,144]))) {
						console.log("hierY");
						this.direction[1] = 1;
			} else {
				this.ypos = detect1(this.xpos, potential_xpos, this.ypos,potential_ypos);
				this.ypos = potential_ypos;
				console.log("hierZ");
			}
			this.direction[1] = this.direction[1] + Math.round(Math.abs(this.direction[1] / 2)) + 1;
		}
	}

	var aPlayer = initDrawable(acontext, [580,270,playerWidth(),playerHeight()], 'purple', [0,0], updatePos);

	aPlayer.onkeypress = function(event) {
		if (event.keyCode===115) { // 's'
			this.direction[0] = 6;  // x direction
		}
		if (event.keyCode===97) {  // 'a'
			this.direction[0] = -6;
		}
		if (event.keyCode===119) { // 'w'
			this.direction[1] = -45;
		}
	}
	return aPlayer;
}