// Part of the web front-end html5 acceleration course
// Written by Remco
// Minigame
//
// Gradient to replicate a clear bleu sky

function clearSky() {
	var thewidth   = getGameWidth();
	var theheight  = getGameHeight();
	var theContext = getGameContext();
	
  theContext.rect(0, 0, thewidth, theheight);

  // add linear gradient
  var linearGradient = context.createLinearGradient(thewidth / 2,  theheight, thewidth / 2, 0);

  // light blue
  linearGradient.addColorStop(0, '#8ED6FF');   
  // dark blue
  linearGradient.addColorStop(1, '#004CB3');

  theContext.fillStyle = linearGradient;
  theContext.fill();
}
