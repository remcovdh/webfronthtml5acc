// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Build an array pretending to look like a city skyline

function skyline() {
	var theskyline = [];
  var distanceprevious;
	var buildingwidth;
	var buildingheight;
	
	var agrlvl = getGameGroundLevelY() - 4;
	var startXpoint = 5; 
	var theWidth = getGameWidth()
	while (startXpoint < theWidth) {
		distanceprevious = (Math.random() * 10) - 5;
		buildingwidth = Math.random() * 25 + 5;
		
		var a = Math.abs(startXpoint - (theWidth / 3));
		var b = (-1 * (a - (2 * (theWidth / 3)))) / theWidth;
		var c = 300 * b;
		
		buildingheight = Math.random() * c + (20 * (b+1)) ;
		theskyline.push([startXpoint + distanceprevious, agrlvl ]);
		theskyline.push([startXpoint + distanceprevious, agrlvl - buildingheight ]);
		theskyline.push([startXpoint + distanceprevious + buildingwidth, agrlvl - buildingheight ]);
		theskyline.push([startXpoint + distanceprevious + buildingwidth, agrlvl ]);
		startXpoint = startXpoint + distanceprevious + buildingwidth;
	}
	return theskyline;
}

