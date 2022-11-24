class Monster {
  constructor(name, hp, power, energy) {
    this.name = name;
    this.hp = hp;
    this.power = power;

    this.energy = energy;
  }

  attack(character) {
    if (this.energy > 0) {
      character.hp -= this.power;
      this.energy -= 1;
    }
  }
  getHp() {
    return this.hp;
  }
  getEnergy() {
    return this.energy;
  }
  setEnergy(energy) {
    this.energy = energy;
  }
}
