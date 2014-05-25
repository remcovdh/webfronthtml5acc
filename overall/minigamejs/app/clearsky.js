
// Gradient to replicate a clear bleu sky

function clearSky() {
  context.rect(0, 0, canvas.width, canvas.height);

  // add linear gradient
  var grd = context.createLinearGradient(canvas.width / 2,  canvas.height, canvas.width / 2, 0);

  // light blue
  grd.addColorStop(0, '#8ED6FF');   
  // dark blue
  grd.addColorStop(1, '#004CB3');

  context.fillStyle = grd;
  context.fill();
}
