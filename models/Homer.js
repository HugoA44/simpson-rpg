import Character from "./Character.js";

class Homer extends Character {
  constructor(name, hp, power, energy) {
    super(name, hp, power, energy);
    this.job = "Homer";
  }
}

export default Homer;
