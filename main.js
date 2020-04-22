const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

function drawBall(){
  ctx.fillStyle = "#0000FF";
  ctx.fillRect(x, y, 100, 100);
}

function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  drawBall()
  x ++;
  y ++;
  
  
}

setInterval(draw, 10);
