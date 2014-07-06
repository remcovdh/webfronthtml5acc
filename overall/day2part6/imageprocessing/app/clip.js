
function clipImage(originalImage, cRect, targetImage, tleft, ttop)
{
  var originalCanvas = document.createElement("canvas");

  originalCanvas.width  = originalImage.width;
  originalCanvas.height = originalImage.height;

  var wctx2 = originalCanvas.getContext("2d");
  wctx2.drawImage(originalImage, 0, 0);
	
	ctop    = cRect[0];
	cleft   = cRect[1];
	cwidth  = cRect[2];
	cheight = cRect[3];

  var imageData = wctx2.getImageData(ctop, cleft, cwidth, cheight);

  var workCanvas = document.createElement("canvas");
  workCanvas.width  = cwidth;
  workCanvas.height = cheight;
  var wctx = workCanvas.getContext("2d");

  wctx.putImageData(imageData, 0, 0);

  targetImage.src = workCanvas.toDataURL("image/jpeg");
}

