// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Collision detection is based on colors

function checkCollision(actxt, ax, ay, collisioncolor) {
	var pix = actxt.getImageData(ax, ay, 1, 1).data;
		return ((pix[0] === collisioncolor[0]) && (pix[1] === collisioncolor[1]) && (pix[2] === collisioncolor[2]));
}

