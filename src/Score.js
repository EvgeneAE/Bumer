class Score {
  constructor(name) {
    this.name = name;
    this.scoreNumber = 0;
  }
  // magnifier()
  plusScore() {
    this.scoreNumber += 50;
  }
}

module.exports = Score;
