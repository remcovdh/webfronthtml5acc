
// Collision detection is based on colors

function checkCollision(actxt, ax, ay, collisioncolor) {
	var imgd = actxt.getImageData(ax, ay, 1, lengte);
	var pix = imgd.data;
	for (var i = 0; i < lengte; i++) { 
		if ((pix[0+(i*4)] === collisioncolor[0]) && (pix[1+(i*4)] === collisioncolor[1]) && (pix[2+(i*4)] === collisioncolor[2])) {
			return false;
		} else {
			return true;
			// console.log('h'+pix[0+(i*4)]+','+pix[1+(i*4)]+','+pix[2+(i*4)]);
		}
	}
}

