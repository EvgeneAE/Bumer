// Бумеранг является оружием.

class Boomerang {
  constructor(horizontal, vertical) {
    this.skin = '🔫';
    this.horizontal = horizontal;
    this.vertical = vertical;
  }

  moveRight(hero) {
    this.horizontal = hero.horizontal + 1;
    let counter = 0;
    const right = setInterval(() => {
      this.horizontal += 1;
      counter += 1;
      if (counter > 20) {
        clearInterval(right);
        this.moveLeft(hero.horizontal);
        counter = 0;
      }
    }, 10);
  }

  moveLeft(horizontal) {
    const left = setInterval(() => {
      this.horizontal -= 1;
      if (this.horizontal === horizontal) {
        clearInterval(left);
        this.skin = ' ';
      }
    }, 10);
  }
}

module.exports = Boomerang;
