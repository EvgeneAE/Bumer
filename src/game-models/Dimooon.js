// Димон уезжает

class Dimooon {
  constructor({ horizontal, vertical } = {}) {
    this.skin = '🚗';
    this.horizontal = horizontal || 5;
    this.vertical = vertical || 2;
  }

  moveLeft() {
    if (this.horizontal > 0) this.horizontal -= 1;
  }
}

module.exports = Dimooon;
