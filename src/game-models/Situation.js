class Situation {
  constructor() {
    this.skin = '🚓';
    this.horizontal = -1;
  }

  moveLeft() {
    // Идём влево
    setInterval(() => {
      this.horizontal -= 1;
    }, 100);
  }
}

module.exports = Situation;
