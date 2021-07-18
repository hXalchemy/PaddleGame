import Paddle from "/src/paddle";
import InputHandler from "/src/input";

//get canvas div from home screen
let canvas = document.getElementById("gameScreen");
//console.log(canvas);
//console.log("Hello!");

//https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

//clear canvas for refresh

//ctx.fillRect(100, 100, 100, 100);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

paddle.draw(ctx);

new InputHandler(paddle);

let lastTime = 0;

function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;

  lastTime = timestamp;

  //console.log(lastTime);

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();
