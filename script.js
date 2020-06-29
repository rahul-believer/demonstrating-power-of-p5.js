let canvas;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	textFont('Roboto Mono');
}

function draw() {
	background(0);
	
	stroke(255);
	noFill();
	
	let now = new Date();
	
	let mil = now.getMilliseconds();
	let sec = now.getSeconds() + mil / 1000;
	let s = sec / 60;
	let min = now.getMinutes() + s;
	let m = min / 60;
	let hou = now.getHours() % 12 + m;
	let h = hou / 12;
	
	translate(width / 2, height / 2);
	
	let x = Math.min(width, height) * 0.9;
	let x2 = x * 0.9;
	let x3 = x * 0.8;
	
	strokeCap(SQUARE);
	strokeWeight(30 / 1000 * x);
	textAlign(CENTER, CENTER);
	
	push();
	rotate(-HALF_PI);
	
	arc(0, 0, x, x, 0, h * TAU);
	arc(0, 0, x2, x2, 0, m * TAU);
	arc(0, 0, x3, x3, 0, s * TAU);
	pop();
	
	noStroke();
	fill(255);
	
	textSize(100 / 1000 * x);
	let clockText = [
			floor(hou),
			floor(min),
			floor(sec)
		]
		.map(n => ('0' + n).slice(-2))
		.join(':');
	text(clockText, 0, 0);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
