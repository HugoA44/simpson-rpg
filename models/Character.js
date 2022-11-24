class Character {
  constructor(name, hp, power, energy) {
    this.name = name;
    this.hp = hp;
    this.power = power;
    this.energy = energy;
    this.position = 0;
  }

  attack(character) {
    if (this.energy > 0) {
      character.hp -= this.power;
      this.energy -= 20;
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
  move($sens) {
    this.position += $sens;
  }
}

export default Character;
