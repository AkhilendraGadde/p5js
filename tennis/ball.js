function Ball() {

  this.r = 25;
  this.x = width / 2;
  this.y = height / 2;
  this.scoreLeft = 0;
  this.scoreRight = 0;
  //let ball = createVector(width / 2, height / 2);

  this.xspeed = 10 * cos(random(-PI / 4, PI / 4));
  this.yspeed = 10 * sin(random(-PI / 4, PI / 4));
  if (random(1) < 0.5) {
    this.xspeed *= -1;
  }
  this.show = function() {

    textSize(32);
    fill(255, 100);
    text('' + this.scoreLeft, width / 10, width * 0.05);
    text('' + this.scoreRight, width - width / 10, width * 0.05);
    fill(255);
    ellipse(this.x, this.y, this.r);
  }

  this.update = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  this.hits = function(paddle) {
    if (this.x < width / 2) {
      //check leftPaddle
      if (this.y >= paddle.y1 && this.y <= paddle.y1 + paddle.h && this.x <= paddle.x1 + paddle.w) {


        let diff = this.y - (paddle.y1);
        let angle = map(diff, 0, paddle.h, -radians(45), radians(45));
        this.xspeed = 10 * cos(angle);
        this.yspeed = 10 * sin(angle);

      }
    } else {

      //check rightPaddle
      if (this.y >= paddle.y2 && this.y <= paddle.y2 + paddle.h && this.x >= paddle.x2) {

        let diff = this.y - (paddle.y2);
        let angle = map(diff, 0, paddle.h, -radians(135), radians(135));
        this.xspeed = 10 * cos(angle);
        this.yspeed = 10 * sin(angle);

      }
    }

  }


  this.collision = function() {
    if (this.y > height || this.y < 0) {
      this.yspeed *= -1;
    }

    if (this.x < 0) {
      this.scoreRight++;
      this.restart();
    }
    if (this.x > width) {
      this.scoreLeft++;
      this.restart();
    }
  }
  this.restart = function() {
    this.x = width / 2;
    this.y = height / 2;

    this.xspeed = 10 * cos(random(-PI / 4, PI / 4));
    this.yspeed = 10 * sin(random(-PI / 4, PI / 4));

    if (random(1) < 0.5) {
      this.xspeed *= -1;
    }
  }
}
