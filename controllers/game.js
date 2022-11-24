import Burns from "../models/Burns.js";
import Homer from "../models/Homer.js";
import Game from "../models/Game.js";
import Log from "../models/Log.js";
import { attack } from "./attack.js";
import { move } from "./move.js";
import { updateJauges } from "./jauges.js";
import Bart from "../models/Bart.js";

const game = new Game(0);
const perso =
  localStorage.getItem("character") === "homer"
    ? new Homer("Hugo", 100, 10, 100)
    : new Bart("Hugo", 100, 10, 100);
const enemy = new Burns("Smaug", 100, 10, 100);
const logs = new Log();

document
  .getElementById("character-bloc")
  .classList.add(localStorage.getItem("character") + "Idle");

document.getElementById("spell2").addEventListener("click", () => {
  if (game.getRound() % 2 === 0) {
    attack(perso, enemy, "player", 1);
  }
  logs.addLog("Attaque " + localStorage.getItem("name") + " contre monstre");
});
document.getElementById("spell1").addEventListener("click", () => {
  if (game.getRound() % 2 === 0) {
    attack(perso, enemy, "player", 2);
  }
  logs.addLog("Attaque " + localStorage.getItem("name") + " contre monstre");
});

document.addEventListener("keydown", (event) => {
  move(perso);
});

document.getElementById("next").addEventListener("click", () => {
  nextRound(perso, enemy);
  if (game.getRound() % 2 !== 0) {
    const interval = setInterval(() => {
      attack(enemy, perso, "ia");
      logs.addLog("Attaque monstre contre " + localStorage.getItem("name"));
      if (enemy.getEnergy() === 0) {
        clearInterval(interval);
        nextRound(perso, enemy);
      }
    }, 1000);
  }
});

function nextRound(perso, enemy) {
  logs.addLog("Nouveau tour");
  perso.setEnergy(100);
  enemy.setEnergy(100);
  updateJauges(perso, enemy);
  game.incrementRound();
  if (game.getRound() % 2 === 0) {
    // Tour du joueur
    document.getElementById("spell1").style.filter = "grayscale(0%)";
    document.getElementById("spell2").style.filter = "grayscale(0%)";
  } else {
    // Tour adverse
    document.getElementById("spell1").style.filter = "grayscale(100%)";
    document.getElementById("spell2").style.filter = "grayscale(100%)";
  }
}

const audio = new Audio("./sounds/background.mp3");
audio.loop = true;
audio.muted = true;
document.addEventListener("click", () => {
  audio.muted = false;
  audio.play();
});
