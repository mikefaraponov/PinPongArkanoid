var canvas;
var ctx;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 5;

function moveEverything() {

}

function drawEverything() {
	colorRect(0, 0, canvas.width, canvas.height, 'black');

	drawNet();

}

function drawNet() {
	for(var i = 0; i < canvas.height; i += 40) {
		colorRect(canvas.width / 2-1, i, 2, 20, 'white');
	}
}

function colorRect(leftX, topY, width, height, drawColor) {
	ctx.fillStyle = drawColor;
	ctx.fillRect(leftX,topY, width,height);
}


window.onload = function() {
	canvas = document.querySelector('.js-arkanoid');
	canvas.height = 500;
	canvas.width = 700;

	ctx = canvas.getContext('2d');

	var fps = 30;
	setInterval(function() {
			moveEverything();
			drawEverything();
	}, 1000/fps);
}
