var canvas;
var ctx;

function moveEverything() {

}

function drawEverything() {
	colorRect(0, 0, canvas.width, canvas.height, 'black');
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
