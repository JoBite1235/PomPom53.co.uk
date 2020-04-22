let canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d");


let framesPerSecond = 50;

let ball = {
    radius: 10,
    pos: {x:100, y:100},
    speed: {x:10, y:4},
    color: "#FF0000"
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update(){
    ball.pos.x += ball.speed.x;
    ball.pos.y += ball.speed.y;

    if (ball.pos.x > canvas.width){
        ball.speed.x = -ball.speed.x;
    }
    if (ball.pos.x < 0){
        ball.speed.x = -ball.speed.x;
    }
    if (ball.pos.y > canvas.height){
        ball.speed.y = -ball.speed.y;
    }
    if (ball.pos.y < 0){
        ball.speed.y = -ball.speed.y;
    }
}


function drawBall() {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, 2 * Math.PI, true);
    ctx.fill();
}

function game() {
    clear();
    update();
    drawBall();
}


setInterval(game, 1000 / framesPerSecond);