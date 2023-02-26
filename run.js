// Основной файл.
// Запускает игру.
const Game = require('./src/Game');

// const game = new Game({
//   trackLength: 50,
//   name: ,
// });

async function foo() {
  await Game.rules();
  const userName = await Game.whoIsPlayer();
  const game = new Game({
    trackLength: 50,
    name: userName,
  });
  await game.play();
}
foo();

// Введите имя игрока

// Запуск игры
