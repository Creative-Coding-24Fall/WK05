// TODO: use mouseX and mouseY

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,20,120);
 rectMode(CENTER);
 
}

function draw() {
  // background(255,20,120);
  rect(width/2, height/2, mouseX);
}

function mouseClicked(){
    background(random(255));

}