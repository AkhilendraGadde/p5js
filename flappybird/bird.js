function Bird(brain) {

  this.x = 60;
  this.y = height / 2;
  this.gravity = 0.8;
  this.velocity = 0;
  this.uplift = -12;
  this.r = 16;

  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.r * 2);
  }

  this.offscreen = function() {
    return (this.y > height || this.y < 0);
  }

  this.update = function() {
    this.score++;

    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y > height) {
      this.y = height;
      this.velocity = 0;

    }
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;

    }

  }

  this.up = function() {
    this.velocity += this.uplift;
  }

}
