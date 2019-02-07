function setup() {
  createCanvas(400, 400);
}

function draw() {
background(255);

if(mouseIsPressed){
  background(200,100,255);
  rect(150,150,80,80);
  textSize(100);
  text("Gas ",80,130,130);
}
  else{
    background(150);
    rect(150,150,80,80);
    mouseIsPressed
  }
