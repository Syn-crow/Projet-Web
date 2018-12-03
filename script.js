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


// ----------------------------------------------- Partie requête php -----------------------------------------------//

//On crée une liste qui va être parcourue pour récupérer chaque objet
var listeObjets = ["code1","pendentif","panneau","code2","porte1","cle","porte2","cadenas1","cadenas2"]
//On va chercher chaque objet en fonction de sa position dans la liste listeObjets
var indObjetActuel = 0;
//Liste des attributs de l'objet id,nom,image,position,type_condition,parametre,message,indice
var listeAttributs;

var ajax = new XMLHttpRequest();
ajax.open('GET', 'objet.php');
ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
ajax.send("request="+indObjetActuel);

ajax.addEventListener('load', function () {
    var result = JSON.parse(ajax.response);
    //for (i=1;i<result.length;i++) {
        //pays.innerHTML +="<option value="+result[i-1]['id']+">"+result[i-1]["pays"]+"</option>";
    }
});
