let leftPaddle, rightPaddle;
let paddle;
let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddle = new Paddle();
  ball = new Ball();
}

function draw() {
  background(25);
  ball.show();
  ball.update();
  ball.collision();
  ball.hits(paddle);
  paddle.showLeft();
  paddle.showRight();
  paddle.update();
  strokeWeight(0.1);
  stroke(255);
  line(width / 2, 0, width / 2, height);
}
