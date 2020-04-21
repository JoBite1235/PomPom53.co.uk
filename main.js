const canvas = document.getElementById("screen");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

ctx.fillStyle = "#000";

function draw(){
  ctx.fillRect(x, y, 100, 100);
  x ++;
  y ++;
  
  
}

setInterval(draw, 10);
