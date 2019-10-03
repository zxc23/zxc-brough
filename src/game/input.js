import * as game from './game';

export function keydown({ key }) {
  switch (key) {
    case 'ArrowLeft':
      game.moveLeft();
      break;
    case 'ArrowRight':
      game.moveRight();
      break;
    case 'ArrowUp':
      game.moveUp();
      break;
    case 'ArrowDown':
      game.moveDown();
      break;
    case 'a':
      game.moveLeft();
      break;
    case 'd':
      game.moveRight();
      break;
    case 'w':
      game.moveUp();
      break;
    case 's':
      game.moveDown();
      break;
  }
}
