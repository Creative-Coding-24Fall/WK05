// TODO: time with map() and mod

function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(20);
   
  // period of our 
  let p = 2000;
  let counter = millis() % p;
  let md = map(counter,0,p,20,300);
  let mr = map(counter,0,p,100,255);

  fill(mr, 20, 100);

  ellipse(width / 2, height / 2, md);
}
