// TODO: global state variables

let cc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cc = 0;
}

function draw() {
  background(20);

  // if (cc < 50) {
  //   fill(200, 0, 200);
  // }else{
  //   fill(200,20,0);
  // }
  
  ellipse(width / 2, height / 2, 5*cc);
}

function mouseReleased() {
  cc += 1;
}
