// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.horizontal = 50;
    this.vertical = Math.floor(Math.random() * 4);
  }

  generateSkin() {
    const skins = ['💩', '🏎️', '🧜🏾‍♂️', '🚬', '🛢️', '🦄', '🦖', '🦫', '🪃'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.horizontal -= 1;
  }

  die() {
    this.horizontal = -5;
  }
}

module.exports = Enemy;
