divStart = document.getElementById("start");
divJeu = document.getElementById("jeu");
divMap = document.getElementById("map");
divDialogue = document.getElementById("dialogue");
divOverlay = document.getElementById("overlay");
btOverlayO = document.getElementById("overlayOpen");
btOverlayC = document.getElementById("overlayClose");

message = document.getElementById("message");



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
//passe de map à dialogue et vice-versa
function mapDialog(){
  if(divJeu.style.display == "none"){
    divJeu.style.display = "block";
    divDialogue.style.display = "none";
  }else{
    divJeu.style.display = "none";
    divDialogue.style.display = "block";
  }
}

function hideShow(){
  if(divOverlay.style.display == "none"){
    divOverlay.style.display = "block";
    btOverlayC.style.display = "block";
    btOverlayO.style.display = "none";
  }
  else{
    divOverlay.style.display = "none"
    btOverlayC.style.display = "none";
    btOverlayO.style.display = "block";
  }
}
function setMessage(text){
  message.innerHTML = text;
}

setMessage("bienvenue, ceci est un message écrit en utilisant la fonction setMessage!")

//ajout des events
btStart = document.getElementById("btStart");
btStart.addEventListener("click",start);

btOverlayC.addEventListener("click",hideShow);
btOverlayO.addEventListener("click",hideShow);
