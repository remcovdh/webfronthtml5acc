
function resizeImage(originalImage, targetImage, twidth, theight)
{
  var workCanvas = document.createElement("canvas");
  workCanvas.width  = twidth;
  workCanvas.height = theight;
  var wctx = workCanvas.getContext("2d");
	wctx.drawImage(originalImage, 0, 0, twidth, theight);

  targetImage.src = workCanvas.toDataURL("image/jpeg");
}

