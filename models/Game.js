class Game {
  constructor(round) {
    this.round = round;
  }
  getRound() {
    return this.round;
  }
  incrementRound() {
    this.round += 1;
  }
}

export default Game;
