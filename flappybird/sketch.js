let bird;
let pipes = [];
let background;
let bird_img;
let pipe_up, pipe_down;
let pipe_up_inv, pipe_down_inv;


function preload() {
  //image(img,[sx=0],[sy=0],[sWidth=img.width],[sHeight=img.height],[dx=0],[dy=0],[dWidth],[dHeight])
  background = loadImage("background.png");
  bird_img = loadImage("bird.png");
  pipe_up = loadImage("up.png");
  pipe_down = loadImage("down.png");
  pipe_up_inv = loadImage("up_inv.png");
  pipe_down_inv = loadImage("down_inv.png");
}

function setup() {
  createCanvas(480, 640);
  bird = new Bird(bird_img);
  pipes.push(new Pipe(pipe_up, pipe_down, pipe_up_inv, pipe_down_inv));
}

function draw() {
  //background(0);

  image(background, 0, 0, 480, 640);
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1)
    }
    if (bird.x > pipes[i].x + pipes[i].w) {
      pipes[i].collision(bird);
    }
  }

  if (frameCount % 140 == 0) {
    pipes.push(new Pipe(pipe_up, pipe_down, pipe_up_inv, pipe_down_inv));
  }
  bird.show();
  bird.update();
}

function mousePressed() {
  bird.up();
}
