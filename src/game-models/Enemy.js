// Враг.

class Enemy {
  constructor() {
    this.generateSkin();
    this.horizontal = 50;
    this.vertical = Math.floor(Math.random() * 4);
  }

  generateSkin() {
    const skins = ['💩', '🏎️', '🛢️', '🦄', '🦖', '🦫', '🪃', '🧜🏾‍♂️', '🚬'];
    this.skin = skins[Math.floor(Math.random() * skins.length)];
  }

  moveLeft() {
    // Идём влево.
    this.horizontal -= 1;
  }

  die() {
    this.horizontal = -1;
  }
}

module.exports = Enemy;

// // Враг.

// class Enemy {
//   constructor() {
//     this.generateSkin();
//     this.horizon = this.trackLength; //50
//     this.vertical = Math.floor(Math.random() * 4);
//   }

//   generateSkin() {
//     // Найти скины по тематике игры
//     const skins = ['👾', '💀', '👾', '💀'];
//     this.skin = skins[Math.floor(Math.random() * skins.length)];
//   }

//   moveLeft() {
//     // Идём влево.
//     this.horizon -= 1;
//   }

//   die() {
//     this.horizon = -10;
//     this.skin = '💀';
//   }
// }

// module.exports = Enemy;
