import Character from "./Character.js";

class Burns extends Character {
  constructor(name, hp, power, energy) {
    super(name, hp, power, energy);
    this.job = "Burns";
  }
}

export default Burns;
