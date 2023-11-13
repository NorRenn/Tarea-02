let backgroundColors = ["#FF6F61", "#8A2BE2", "#7FFFD4"];
let currentBackgroundColorIndex = 0;
let circles = [];

function setup() {
  createCanvas(600, 600);
  changeBackgroundColor();
}

function draw() {
  moveCircles();
  background(backgroundColors[currentBackgroundColorIndex]);
  drawCircles();
}

function mousePressed() {
  changeBackgroundColor();
  createCircle();
}

function changeBackgroundColor() {
  currentBackgroundColorIndex = (currentBackgroundColorIndex + 1) % backgroundColors.length;
}

function createCircle() {
  let x = random(width);
  let y = random(height);
  let radius = random(0.2, 2.5) * 50;
  let fillColor = color(200, 200, 200, 150);
  let strokeColor = color(255);
  let xSpeed = random(-2.5, 2.5); // Rango de velocidad de movimiento entre -2.5 y 2.5
  let ySpeed = random(-2.5, 2.5); // Rango de velocidad de movimiento entre -2.5 y 2.5

  circles.push({
    x: x,
    y: y,
    radius: radius,
    fillColor: fillColor,
    strokeColor: strokeColor,
    xSpeed: xSpeed,
    ySpeed: ySpeed
  });
}

function moveCircles() {
  for (let i = 0; i < circles.length; i++) {
    circles[i].x += circles[i].xSpeed;
    circles[i].y += circles[i].ySpeed;

    if (circles[i].x < 0 || circles[i].x > width) {
      circles[i].xSpeed *= -1;
    }
    if (circles[i].y < 0 || circles[i].y > height) {
      circles[i].ySpeed *= -1;
    }
  }
}

function drawCircles() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    fill(circle.fillColor);
    stroke(circle.strokeColor);
    strokeWeight(2);
    ellipse(circle.x, circle.y, circle.radius * 2, circle.radius * 2);
  }
}

