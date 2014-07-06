
function duplicateImage(originalImage, targetImage, widthtimes, heighttimes)
{
  var workCanvas = document.createElement("canvas");
  workCanvas.width  = originalImage.width*widthtimes;
  workCanvas.height = originalImage.height*heighttimes;
  var wctx = workCanvas.getContext("2d");
	
  for (var x = 0; x < widthtimes; x += 1) {
  	for (var y = 0; y < widthtimes; y += 1) {
			wctx.drawImage(originalImage, x*originalImage.width, y*originalImage.height, originalImage.width, originalImage.height);
  	}
  }
  targetImage.src = workCanvas.toDataURL("image/jpeg");
}

