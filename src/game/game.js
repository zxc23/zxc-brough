const TILE_SIZE = 64;
const NUM_TILES = 9;
const UI_WIDTH = 4;
const CANVAS_WIDTH = TILE_SIZE * (NUM_TILES + UI_WIDTH);
const CANVAS_HEIGHT = TILE_SIZE * NUM_TILES;

let canvas = null;
let ctx = null;
let x = 0;
let y = 0;
let spritesheet = new Image();
spritesheet.src = require('../assets/spritesheet.png');

export function init() {
  setInterval(draw, 15);
  setupCanvas();
}

function setupCanvas() {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;
  canvas.style.width = `${CANVAS_WIDTH}px`;
  canvas.style.height = `${CANVAS_HEIGHT}px`;
  ctx.imageSmoothingEnabled = false;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSprite(0, x, y);
}

function drawSprite(sprite, x, y) {
  ctx.drawImage(
    spritesheet,
    sprite * 16,
    0,
    16,
    16,
    x * TILE_SIZE,
    y * TILE_SIZE,
    TILE_SIZE,
    TILE_SIZE
  );
}

export function moveLeft() {
  x--;
}

export function moveRight() {
  x++;
}

export function moveUp() {
  y--;
}

export function moveDown() {
  y++;
}
