
// Convenience method to wrap a line figure

// function linefigure(actxt, origin, points, acolor, strokecolor) {
function linefigure(actxt, acolor, origin, points, astroke, afill) {
	if (arguments.length > 4) {
		actxt.lineWidth = astroke[0];
		actxt.strokeStyle = astroke[1];
	} else {
		actxt.strokeStyle = acolor;
	}
	
  actxt.beginPath();
	actxt.moveTo(origin[0],origin[1]);
		for (var i = 0; i < (points.length); i++) { 
		actxt.lineTo(points[i][0],points[i][1]);
	}

	// Intresting to reimplement this but must run under server (on file cross domain security error)
	if (arguments.length === 6) {
		var pat=actxt.createPattern(afill,"repeat");
		actxt.fillStyle=pat;
	} else {
		actxt.fillStyle = acolor;
	}
	// actxt.fillStyle = acolor;
	actxt.fill();
  actxt.closePath();
	actxt.stroke();
}


