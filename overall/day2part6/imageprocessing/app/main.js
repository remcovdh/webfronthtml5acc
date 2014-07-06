
// Zie zeker ook http://kenazzawe.wordpress.com/2013/08/23/image-processing-using-the-html5-canvas/

var mainCanvas = null;
  
window.onload = onReady;
  
function onReady() {
  var workCanvas = document.createElement("canvas");
  workCanvas.width  = 1024;
  workCanvas.height = 400;
  var wctx = workCanvas.getContext("2d");
	
	// mainCanvas = document.getElementById("mainCanvas").getContext("2d");
	var img1 = document.getElementById("canvasImg1")
	// var img1 = new Image();
	img1.src = "images/Teaser1-08102012NL.jpg";

	img1.onload = function() {
		wctx.drawImage(this, 0,0);
		var transparentfilter = [[97,197], [97,197], [97,197]];

		var img2 = document.getElementById("canvasImg2")
		transparenceImage(this, transparentfilter, img2, 156, 0);

		var img3 = document.getElementById("canvasImg3")
		var clipRect = [9, 136, 136, 97]
		
		clipImage(this, clipRect, img3, 312, 0);
		
		var img4 = document.getElementById("canvasImg4")
		transparentfilter = [[140,256], [140,256], [140,256]];
		transparenceImage(img3, transparentfilter, img4, 468, 0);

		var img5 = document.getElementById("canvasImg5")
		resizeImage(img4, img5, 42, 30);

		var img6 = document.getElementById("canvasImg6")
		duplicateImage(img3, img6, 2, 2);

		var img7 = document.getElementById("canvasImg7")
		resizeImage(img6, img7, 256, 256);
	};
}

