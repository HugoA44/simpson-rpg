export function move(perso) {
  // Déplacement latéral
  if (event.keyCode === 37) {
    perso.move(1);
    document.getElementById("character-bloc").style.right =
      perso.position + "rem";

    document
      .getElementById("character-bloc")
      .classList.add(localStorage.getItem("character") + "Run");
    document
      .getElementById("character-bloc")
      .classList.remove(localStorage.getItem("character") + "Idle");
  } else if (event.keyCode === 39) {
    perso.move(-1);
    document.getElementById("character-bloc").style.right =
      perso.position + "rem";
    document
      .getElementById("character-bloc")
      .classList.add(localStorage.getItem("character") + "Run");
    document
      .getElementById("character-bloc")
      .classList.remove(localStorage.getItem("character") + "Idle");
  }
  if (event.keyCode === 37 || event.keyCode === 39) {
    setTimeout(() => {
      document
        .getElementById("character-bloc")
        .classList.remove(localStorage.getItem("character") + "Run");
      document
        .getElementById("character-bloc")
        .classList.add(localStorage.getItem("character") + "Idle");
    }, 1000);
  }
}
