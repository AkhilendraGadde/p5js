function Paddle() {

  this.w = 12;
  this.h = 150;
  this.offset = 25;
  this.x1 = this.offset;
  this.y1 = height / 2 - this.h / 2;

  this.x2 = width - this.w - this.offset;
  this.y2 = height / 2 - this.h / 2;

  this.showLeft = function() {
    rect(this.x1, this.y1, this.w, this.h);
  }
  this.showRight = function() {
    rect(this.x2, this.y2, this.w, this.h);
  }

  this.update = function() {
    if (mouseX < width / 2) {
      this.y1 = mouseY;
    } else {
      this.y2 = mouseY;
    }
  }
}
