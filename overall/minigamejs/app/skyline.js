

// Build an array pretending to look like a city skyline

function skyline(grlvl) {
	var theskyline = [];
  var distanceprevious;
	var buildingwidth;
	var buildingheight;
	var agrlvl = grlvl - 4;
	var startXpoint = 5; 
	while (startXpoint < canvas.width) {
		distanceprevious = (Math.random() * 10) - 5;
		buildingwidth = Math.random() * 20 + 5;
		
		var a = Math.abs(startXpoint - (canvas.width / 3));
		var b = (-1 * (a - (2 * (canvas.width / 3)))) / canvas.width;
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

