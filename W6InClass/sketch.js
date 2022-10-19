let capture;
function setup() {
  createCanvas(720, 1080);
  capture = createCapture(VIDEO);
  capture.hide()
  pixelDensity(1);

}

function draw() {
  translate(width, 0);
  scale(-1, 1);
  image(capture, 0,0,720,580);

}