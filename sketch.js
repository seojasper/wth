function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(200,100,500);
  } else {
    fill(255,100,100);
  }
  ellipse(mouseX, mouseY, 80, 80);
}