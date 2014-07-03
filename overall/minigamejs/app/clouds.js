// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Cloud like bezierCurves

function cloudArray1() { 
	var acloud = [[170, 80], [130, 100, 130, 150, 230, 150],
								[250, 180, 320, 180, 340, 150],
								[420, 150, 420, 120, 390, 100],
								[430, 40, 370, 30, 340, 50],
								[320, 5, 250, 20, 250, 50],
								[200, 5, 150, 20, 170, 80]];
	return acloud;
}

function cloudArray2() { 
	var acloud2 =	[	[150, 60], [130, 100, 130, 150, 230, 150],
									[250, 180, 320, 180, 340, 150],
									[420, 150, 420, 120, 390, 100],
									[430, 40, 370, 30, 340, 50],
									[360, 40, 350, 35, 330, 50],
									[300, 5, 220, 20, 220, 50],
									[200, 5, 170, 20, 150, 60]]
	return acloud2;
}

function makeCloud2(actxt, acolor, origin, points) {
	// this.origin = origin;
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


	var linearGradient = context.createLinearGradient(origin[0], origin[1], origin[0]+200, origin[0]+50);
	linearGradient.addColorStop(0, '#FFFFFF');	// light blue
	linearGradient.addColorStop(1, '#111111');	// dark blue
	context.fillStyle = linearGradient;
	context.fill();
	
	actxt.strokeStyle = 'gray';
	actxt.stroke();
}

