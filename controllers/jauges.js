export function updateJauges(perso, enemy) {
  document.getElementById("monster-hp").style.width = enemy.getHp() + "%";
  document.getElementById("monster-energy").style.width =
    enemy.getEnergy() + "%";

  document.getElementById("character-energy").style.width =
    perso.getEnergy() + "%";

  document.getElementById("character-hp").style.width = perso.getHp() + "%";

  if (perso.getHp() <= 0) {
    //enregistre dans le localstorage que le joueur est mort
    localStorage.setItem("isHeroDead", true);
    // redirect to end.html
    window.location.href = "end.html";
  }
  if (enemy.getHp() <= 0) {
    //enregistre dans le localstorage que le joueur a gagné
    localStorage.setItem("isHeroDead", false);
    // redirect to end.html
    window.location.href = "end.html";
  }
}
