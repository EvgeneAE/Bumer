// Наш герой.
const Boomerang = require('./Boomerang');

class Hero {
  constructor({ horizontal, vertical } = {}) {
    this.skin = '⛟';
    this.horizontal = horizontal || 0;
    this.vertical = vertical || 0;
    this.boomerang = new Boomerang();
  }

  moveLeft() {
    if (this.horizontal > 0) this.horizontal -= 1;
  }

  moveRight() {
    if (this.horizontal < 50) this.horizontal += 1;
  }

  moveUp() {
    if (this.vertical > 0) this.vertical -= 1;
  }

  moveDown() {
    if (this.vertical < 3) this.vertical += 1;
  }

  attack(hero) {
    this.boomerang = new Boomerang(-1, hero.vertical);
    this.boomerang.moveRight(hero);
  }

  die() {
    this.skin = '💀';
  }
}

module.exports = Hero;
