// Импортируем всё необходимое.

const Hero = require('./game-models/Hero');
const Enemy = require('./game-models/Enemy');
const View = require('./View');
const Score = require('./Score');
const runInteractiveConsole = require('./keyboard');
const Situation = require('./game-models/Situation');

// Основной класс игры.
// Тут будут все настройки, проверки, запуск.

class Game {
  constructor({ trackLength, name }) {
    this.trackLength = trackLength;
    this.hero = new Hero();
    this.enemy = new Enemy();
    this.view = new View();
    this.situation = new Situation();
    this.score = new Score(name);
    this.track = [];
    this.regenerateTrack(this.hero.vertical);
    this.name = name;
  }

  // Описание обновления игрового поля - для создания эффекта движения персонажа и врагов
  regenerateTrack(heroVertical) {
    // Массив игрового поля, определение расположения игрока и оружия на нем
    this.track = [
      new Array(this.trackLength).fill(' '),
      new Array(this.trackLength).fill(' '),
      new Array(this.trackLength).fill(' '),
      new Array(this.trackLength).fill(' '),
    ];
    this.track[heroVertical][this.hero.horizontal] = this.hero.skin;
    this.track[heroVertical][this.hero.boomerang.horizontal] =
      this.hero.boomerang.skin;

    // чтобы враги не смещались от передвижения и атак героя
    if (this.enemy.vertical === heroVertical) {
      if (
        this.hero.boomerang.vertical === this.enemy.vertical &&
        this.hero.boomerang.horizontal > this.hero.horizontal
      ) {
        this.track[this.enemy.vertical][this.enemy.horizontal - 2] =
          this.enemy.skin;
      } else {
        this.track[this.enemy.vertical][this.enemy.horizontal - 1] =
          this.enemy.skin;
      }
    } else {
      this.track[this.enemy.vertical][this.enemy.horizontal - 1] =
        this.enemy.skin;
    }

    // чтобы ряд машин не смещался от передвижения и атак героя
    for (let i = 0; i < this.track.length; i++) {
      if (heroVertical === i) {
        if (this.hero.boomerang.horizontal > this.hero.horizontal) {
          this.track[i][this.situation.horizontal - 1] = this.situation.skin;
        } else {
          this.track[i][this.situation.horizontal] = this.situation.skin;
        }
      } else {
        this.track[i][this.situation.horizontal] = this.situation.skin;
      }
    }

    // визуализация смерти врага при попадании бумеранга
    const verticalCheck = this.enemy.vertical === this.hero.vertical;
    if (
      this.hero.boomerang.horizontal >= this.enemy.horizontal &&
      verticalCheck
    ) {
      this.track[this.enemy.vertical][this.enemy.horizontal - 2] = '💥';
    }
  }

  // Проверка текущего состояния игрового поля (убитые враги, создание новых, убитый герой)
  check() {
    const verticalCheck = this.enemy.vertical === this.hero.vertical;

    // убийство врага и создание нового
    if (
      this.hero.boomerang.horizontal >= this.enemy.horizontal &&
      verticalCheck &&
      this.score.scoreNumber < 1000
    ) {
      this.score.plusScore();
      setTimeout(() => {
        this.enemy.die();
        this.enemy = new Enemy();
      }, 0);
    }

    // Создание нового врага при достижении предыдущим врагом начала поля
    if (this.enemy.horizontal <= 0 && this.score.scoreNumber < 1000) {
      this.enemy = new Enemy();
    }
    // позиция бумеранга по умолчанию
    if (this.hero.horizontal >= this.hero.boomerang.horizontal) {
      this.hero.boomerang.horizontal = -1;
    }
    // смерть героя
    if (
      (this.hero.horizontal === this.enemy.horizontal && verticalCheck) ||
      this.hero.horizontal === this.situation.horizontal
    ) {
      if (this.score.scoreNumber < 1000) {
        this.hero.die(this.score.scoreNumber, this.score.name);
        setTimeout(() => {
          process.exit();
        }, 0);
      }
      if (this.score.scoreNumber >= 1000) {
        setTimeout(() => {
          process.exit();
        }, 100);
      }
    }
  }

  play() {
    runInteractiveConsole(this.hero, this.track);
    setInterval(() => {
      // Let's play!
      this.check();
      this.regenerateTrack(this.hero.vertical);
      this.view.render(this.track, this.score.scoreNumber, this.score.name);
    }, 35);

    const enemyMove = setInterval(() => {
      if (this.score.scoreNumber >= 1000) {
        clearInterval(enemyMove);
        this.enemy.skin = '';
        this.situation.horizontal = 50;
        this.situation.moveLeft();
      }
      this.enemy.moveLeft();
    }, 70);
  }
}

module.exports = Game;
