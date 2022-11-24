import Character from "./Character.js";

class Bart extends Character {
  constructor(name, hp, power, energy) {
    super(name, hp, power, energy);
    this.job = "Bart";
  }
}

export default Bart;
