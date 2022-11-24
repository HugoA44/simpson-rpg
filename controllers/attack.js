import { updateJauges } from "./jauges.js";

export function attack(attacker, defender, who, type) {
  if (attacker.getEnergy() > 0) {
    attacker.attack(defender);

    if (who === "player") {
      // On met l'animation d'attaque du personnage
      if (type === 1) {
        document
          .getElementById("character-bloc")
          .classList.add(localStorage.getItem("character") + "Attack");
        document.getElementById("character-bloc").style.width = "60px";
      } else if (type === 2) {
        document
          .getElementById("character-bloc")
          .classList.add(localStorage.getItem("character") + "Attack2");
        document.getElementById("character-bloc").style.width = "200px";
      }
      document
        .getElementById("character-bloc")
        .classList.remove(localStorage.getItem("character") + "Idle");

      document.getElementById("monster-bloc").classList.add("animHitMonster");
      document.getElementById("monster-bloc").classList.remove("monsterIdle");

      updateJauges(attacker, defender);

      // On désactive l'animation d'attaque
      setTimeout(() => {
        document
          .getElementById("character-bloc")
          .classList.remove(localStorage.getItem("character") + "Attack");
        document
          .getElementById("character-bloc")
          .classList.remove(localStorage.getItem("character") + "Attack2");
        document
          .getElementById("character-bloc")
          .classList.add(localStorage.getItem("character") + "Idle");
        document.getElementById("character-bloc").style.width = "48px";

        document
          .getElementById("monster-bloc")
          .classList.remove("animHitMonster");
        document.getElementById("monster-bloc").classList.add("monsterIdle");
      }, 1200);
    } else {
      // On met l'animation d'attaque du monstre
      document.getElementById("monster-bloc").classList.add("animAttack");
      document.getElementById("monster-bloc").classList.remove("monsterIdle");
      document
        .getElementById("character-bloc")
        .classList.add(localStorage.getItem("character") + "Hit");
      document
        .getElementById("character-bloc")
        .classList.remove(localStorage.getItem("character") + "Idle");

      updateJauges(defender, attacker);

      // On désactive l'animation d'attaque
      setTimeout(() => {
        document.getElementById("monster-bloc").classList.remove("animAttack");
        document.getElementById("monster-bloc").classList.add("monsterIdle");
        document
          .getElementById("character-bloc")
          .classList.remove(localStorage.getItem("character") + "Hit");
        document
          .getElementById("character-bloc")
          .classList.add(localStorage.getItem("character") + "Idle");
      }, 1200);
    }
  }
}
