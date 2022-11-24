if (
  document.getElementById("type1") ||
  document.getElementById("type2") ||
  document.getElementById("persoName")
) {
  document.getElementById("type1").addEventListener("click", () => {
    localStorage.setItem("character", "homer");

    document.getElementById("type1").style.filter = "grayscale(0%)";
    document.getElementById("type2").style.filter = "grayscale(100%)";
  });

  document.getElementById("type2").addEventListener("click", () => {
    localStorage.setItem("character", "bart");
    document.getElementById("type1").style.filter = "grayscale(100%)";
    document.getElementById("type2").style.filter = "grayscale(0%)";
  });
}

// Afficher sur la page, 6 boutons avec des noms de personnages récupérer depuis cette api : https://api.sampleapis.com/simpsons/characters
// Lorsque l'on clique sur un bouton, le nom du personnage doit être enregistré dans le localstorage
// Lorsque l'on clique sur un bouton, le nom du personnage doit être affiché sur la page

const url = "https://api.sampleapis.com/simpsons/characters";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((character) => {
      const button = document.createElement("button");
      button.innerHTML = character.name;
      // mettre le bouton dans la div avec id name-choice
      document.getElementById("name-choice").appendChild(button);

      button.addEventListener("click", () => {
        localStorage.setItem("name", character.name);
        document.getElementById("name").innerHTML = character.name;
      });
      document.body.appendChild(button);
    });
  });
