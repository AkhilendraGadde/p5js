function Pipe(pipe_up, pipe_down, pipe_up_inv, pipe_down_inv) {

  this.gap = 75;
  this.w = 75;
  this.x = width;
  this.speed = 2;
  this.h1 = random(height / 2);
  this.h2 = this.h1 + this.gap;
  this.checkCollision = false;

  this.show = function() {
    if (this.checkCollision) {
      image(pipe_up_inv, this.x, 0, this.w, this.h1);
      image(pipe_down_inv, this.x, this.h2, this.w, height);
    } else {
      image(pipe_up, this.x, 0, this.w, this.h1);
      image(pipe_down, this.x, this.h2, this.w, height);
    }
    //rect(this.x, 0, this.w, this.h1);
    //image(pipe_up, this.x, 0, this.w, this.h1);
    //image(pipe_down, this.x, this.h2, this.w, height);
    //rect(this.x, this.h2, this.w, height);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    return this.x < -this.w;
  }

  this.collision = function(bird) {
    if (bird.y <= this.h1 || bird.y >= this.h2) {
      if (bird.x >= this.x || bird.x <= this.x + this.w) {

        this.checkCollision = true;
        console.log("HIT");
        //return true;

      }
    }
    //return false;
    this.checkCollision = false;
  }

}
