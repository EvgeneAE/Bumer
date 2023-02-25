// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

const game = new Game({
  trackLength: 50,
  name: process.argv[2],
});

game.play();

// Введите имя игрока

// Запуск игры
