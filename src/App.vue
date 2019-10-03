<template>
  <div id="app">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import * as game from './game/game';
import * as input from './game/input';

export default {
  name: 'app',
  mounted() {
    game.init();
    window.addEventListener('keydown', input.keydown);
  }
};
</script>
