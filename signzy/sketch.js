
var nodes = [];

function setup() {
	createCanvas(windowWidth, 600);
	for(var i = 0; i < 100; i++)	{
		nodes[i] = new Signzy();
	}
}

function draw() {
	background(25);

	for(var i = 0; i < nodes.length; i++)	{

		for(var j = 0; j < nodes.length; j++)	{
			var distance = nodes[i].ellip.dist(nodes[j].ellip);

			if(distance < height/5)	{
				stroke(random(120,255));
				strokeWeight(random(0.1,0.4));
				line(nodes[i].ellip.x, nodes[i].ellip.y, nodes[j].ellip.x, nodes[j].ellip.y);
			}
		}

		nodes[i].loc();
	 	nodes[i].bounce();
	 	nodes[i].draw();
	}
}
