const player = require('play-sound')((opts = {}));

//testing code
//! Вставка кода в блок класса в Game.js, тостовый набросок
//фон

function musicPlayGame() {
  this.audioGame = player.play(`${__dirname}/sounds/zvonokBumer.mp3`, function (err) {
    if (err && !err.killed) throw err;
  });
}

function musicPlayDied() {
  player.play(`${__dirname}/sounds/dimoon.mp3`, function (err) {
    if (err) throw err;
  });
}
