// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Convenience method to wrap a line figure

function linefigure(acolor, origin, points, astroke, afill) {
	actxt = getGameContext();
	if (arguments.length > 3) {  // TODO dangerous work based on position in argumentslist
		actxt.lineWidth   = astroke[0];
		actxt.strokeStyle = astroke[1];
	} else {
		actxt.strokeStyle = acolor;
	}
	
  actxt.beginPath();
	actxt.moveTo(origin[0],origin[1]);
		for (var i = 0; i < (points.length); i++) { 
		actxt.lineTo(points[i][0],points[i][1]);
	}

	if (arguments.length === 5) {
		var pat = actxt.createPattern(afill,"repeat");
		actxt.fillStyle = pat;
	} else {
		actxt.fillStyle = acolor;
	}

	actxt.fill();
  actxt.closePath();
	actxt.stroke();
}


