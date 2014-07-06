
function inBetween(avar,start,end) {
	return ((avar >  start) && (avar <  end)) 
}

function transparenceImage(original, tfilter, targetImage, tleft, ttop)
{
  var workCanvas = document.createElement("canvas");
  workCanvas.width  = original.width;
  workCanvas.height = original.height;

  var wctx = workCanvas.getContext("2d");
  wctx.drawImage(original, 0, 0);

  var imageData = wctx.getImageData(0, 0, original.width, original.height);
  var length = imageData.data.length;

  for (var i = 3; i < length; i += 4)
  {
      // if transaparent color then set alpha to 0
      if (inBetween(imageData.data[i - 3],tfilter[0][0],tfilter[0][1]) &&
          inBetween(imageData.data[i - 2],tfilter[1][0],tfilter[1][1]) &&
          inBetween(imageData.data[i - 1],tfilter[2][0],tfilter[2][1]) )
      {
          imageData.data[i] = 0;
      }
   }
  wctx.putImageData(imageData, 0, 0);
 	targetImage.src = workCanvas.toDataURL();
}