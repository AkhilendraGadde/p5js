function Bird(bird_img) {

  this.x = 60;
  this.y = height / 2;
  this.gravity = 0.6;
  this.velocity = 0;
  this.uplift = -16;


  this.show = function() {
    fill(255);
    image(bird_img, this.x, this.y, 32, 32);
    //ellipse(this.x, this.y, 32);
  }

  this.update = function() {
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
