divStart = document.getElementById("start");
divJeu = document.getElementById("jeu");
divMap = document.getElementById("map");
divDialogue = document.getElementById("dialogue")

btStart.addEventListener("click",start);


//initialisation
console.log(divJeu.style.display);
divJeu.style.display = "none";



// fonction permettant de cacher la page d'accueil
// pour passer au jeu

function start(){
  divStart.style.display = "none";
  divJeu.style.display = "block";
  var map = L.map('map').setView([48.8605,  2.3921], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map); // on initialise la map seulement
  //la car on utilise pas la carte avant
}

//ajout des events
btStart = document.getElementById("btStart");
