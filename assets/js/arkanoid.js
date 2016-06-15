
var canvas;
var ctx;
var ballX = 50;
var ballY = 50;
var ballSpeedX = 10;
var ballSpeedY = 5;

var paddle1Y = 250;
var paddle2Y = 250;
const PADDLE_THICKNESS = 10;
const PADDLE_HEIGHT = 100;

function ballReset() {
	ballSpeedX = -ballSpeedX;
	ballX = canvas.width / 2;
	ballY = canvas.height / 2;
}

function moveEverything() {
	ballX = ballX + ballSpeedX;
	ballY = ballY + ballSpeedY;
	
	if(ballX < 0) {
		if(ballY > paddle1Y &&
			ballY < paddle1Y + PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;

			var deltaY = ballY (paddle1Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35;
		} else {
			ballReset();
		}
	}
	if(ballX > canvas.width) {
		if(ballY > paddle2Y &&
			ballY < paddle2Y + PADDLE_HEIGHT) {
			ballSpeedX = -ballSpeedX;

			var deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
			ballSpeedY = deltaY * 0.35;
		} else {
			ballReset();	
		}
	}
	if(ballY < 0) {
		ballSpeedY = -ballSpeedY;
	}
	if(ballY > canvas.height) {
		ballSpeedY = -ballSpeedY;
	}
}

function drawEverything() {
	drawRect(0, 0, canvas.width, canvas.height, 'black');

	drawNet();

	drawRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

	drawRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT, 'white');

	drowCircle(ballX, ballY, 10, 'white');
}

function drawNet() {
	for(var i = 0; i < canvas.height; i += 40) {
		drawRect(canvas.width / 2-1, i, 2, 20, 'white');
	}
}


function drowCircle(centerX, centerY, radius, drawColor) {
	ctx.fillStyle = drawColor;
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, 0, Math.PI*2, true);
	ctx.fill();
}

function drawRect(leftX, topY, width, height, drawColor) {
	ctx.fillStyle = drawColor;
	ctx.fillRect(leftX,topY, width,height);
}


window.onload = function() {
	canvas = document.querySelector('.js-arkanoid');
	canvas.height = 600;
	canvas.width = 700;

	ctx = canvas.getContext('2d');

	var fps = 30;
	setInterval(function() {
			moveEverything();
			drawEverything();
	}, 1000/fps);
}
