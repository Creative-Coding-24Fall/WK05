// TODO: animation across the screen
//       wrap around
//       bounce
let x;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // for (let x = 0; x < width; x += 2) {
  //   ellipse(x, height / 2, 100);
  // }
  x=0;
}

function draw() {
  background(20);
  
  let xpos = 10 * frameCount;
  ellipse(xpos % width, height / 2, 100);

  // x = x + 2;
  
  // if(x>width){
  //   x=0;
  // }
}
