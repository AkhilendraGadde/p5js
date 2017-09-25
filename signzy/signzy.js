
function Signzy() {
  var ellip;
  var vel;
  this.ellip = createVector(random(width),random(height));
  this.vel = createVector(random(-1,1),random(-1,1));
  var elx = random(2,6);

  this.loc = function()  {
    this.ellip.add(this.vel);
  }

  this.bounce = function()  {
    if(this.ellip.x > width || this.ellip.x < 0)  {
      this.ellip = createVector(random(width),random(height));
    }
    if(this.ellip.y > height || this.ellip.y < 0) {
      this.ellip = createVector(random(width),random(height));
    }
  }

  this.draw = function()  {
    stroke(255);
    ellipse(this.ellip.x, this.ellip.y, elx, elx);
  }
}
