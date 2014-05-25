
function addObjects(drawableobjects, grlvl) { 
	drawableobjects.push({
		draw: function() {
			linefigure(context, 'lightgreen', [0,grlvl],
				[ [100,grlvl], [100,grlvl+20], [150,grlvl+20], [150,grlvl], 
					[400,grlvl], [400,grlvl+20], [450,grlvl+20], [450,grlvl], [canvas.width,grlvl], [canvas.width,canvas.height],
					[0,canvas.height] ])}
	});

	var theskyline = skyline(grlvl);

	var img1 = new Image();
	img1.src = "pattern4.png";
	
	drawableobjects.push({
		draw: function() {
			linefigure(context, 'gray', [0,grlvl], theskyline, [1,'000000'], img1)}
	});

	drawableobjects.push({
		draw: function() {
			var grlvl = canvas.height - groundheight;
			linefigure(context, 'red', [400,grlvl], [[450,grlvl-30]])}
	});

	drawableobjects.push({
		origin: [290,40],
		draw: function() {
			makeCloud2(context, '#8ED6FF', this.origin, cloudArray1());
			this.origin[0] = this.origin[0] - 0.1;
		}
	});

	drawableobjects.push({
		origin: [400,60],
		draw: function() {
			makeCloud3(context, '#8ED6FF', this.origin, cloudArray1())
			this.origin[0] = this.origin[0] - 0.2;
		}
	});
	
	drawableobjects.push({
		origin: [0,0],
		draw: function() {
			makeCloud2(context, '#8ED6FF', this.origin, cloudArray2())
			this.origin[0] = this.origin[0] + 0.1;
		}
	});
};