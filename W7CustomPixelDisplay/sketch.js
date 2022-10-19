let vid;
let gridSize = 60;
let gridCount = 3;
let gridMinX = 80;
let gridMinY = 140;

let gridMaxX = gridMinX + gridSize * gridCount;
let gridMaxY = gridMinY + gridSize * gridCount;
let scale = 1.7;


function setup() {
  createCanvas(400, 400);
  vid = createVideo("./mian1.mp4");
  vid.size(400, 400);
  pixelDensity(1);
  vid.loop();
  vid.showControls();
  vid.autoplay(true);
  //vid.hide();
  noStroke();
}


function draw() {
  background(0);
  vid.loadPixels();
  let pixelSize = 2;

  for (let y = 0; y < height; y += pixelSize) {
    for (let x = 0; x < width; x += pixelSize) {
      // normal pixels
      // if (x <= gridMinX || x >= gridMaxX || y <= gridMinY || y >= gridMaxY) {
      //   let offset = getOffset(x, y, width);
      //   fill(vid.pixels[offset], vid.pixels[offset+1], vid.pixels[offset+2], vid.pixels[offset + 3]);
      //   rect(x, y, pixelSize, pixelSize); 
      // } 
      // else 
      // {
        // scaled pixels
        //find which grid is the pixel falls in
        let gridXIndex = floor((x - gridMinX) / gridSize);
        let gridYIndex = floor((y - gridMinY) / gridSize);
        //find center corrdinate of the grid 
        let gridCenterX = gridMinX + (gridXIndex + 0.5) * gridSize;
        let gridCenterY = gridMinY + (gridYIndex + 0.5) * gridSize;

        // use scale to find a new pixel
        let targetX = round((x - gridCenterX) / scale + gridCenterX);
        let targetY = round((y - gridCenterY) / scale + gridCenterY);
        let offset = getOffset(targetX, targetY, width);
        fill(vid.pixels[offset], vid.pixels[offset+1], vid.pixels[offset+2], vid.pixels[offset + 3]);
        rect(x, y, pixelSize, pixelSize); 
      // }


    }
  }
}

function getOffset(x, y, width) {
  return ((y*width)+x) * 4;
}