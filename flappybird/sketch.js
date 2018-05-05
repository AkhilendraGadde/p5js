let bird;
let pipes = [];
let score = 0;
let maxScore = 0;

function showScores() {
  textSize(32);
  fill(255, 150, 255);
  text('score: ' + score, 1, 32);
  text('record: ' + maxScore, 1, 64);
}

function setup() {
  createCanvas(480, 640);

  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  if (frameCount % 75 == 0) {
    pipes.push(new Pipe());
  }
  for (var i = pipes.length - 1; i >= 0; i--) {

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1)
    }
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].pass(bird)) {
      score++;
    }
    if (bird.x >= pipes[i].x) {
      if (pipes[i].hits(bird)) {

        maxScore = max(score, maxScore);
        score = 0;
      }
    }
  }

  bird.update();
  if (bird.offscreen()) {
    maxScore = max(score, maxScore);
    score = 0;
  }

  background(0);
  bird.show();
  for (pipe of pipes) {
    pipe.show();
  }
  showScores();
}

function mousePressed() {
  bird.up();
}
