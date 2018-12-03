divStart = document.getElementById("start");
divJeu = document.getElementById("jeu");
divMap = document.getElementById("map");
divDialogue = document.getElementById("dialogue");
divOverlay = document.getElementById("overlay");
btOverlayO = document.getElementById("overlayOpen");
btOverlayC = document.getElementById("overlayClose");
divInventaire = document.getElementById("inventaire");
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
selection = null;
listObj = [];
function resetBorderInventory(){
  allInInventory = document.querySelector(".objet");
  for(var i=0; i<allInInventory.length;i++){
    allInInventory[i].style= "";
  }
}
function addToInventory(object){
  nomStr = '"'+object.nom+'"';
  selectStr = '"'+selection+'"';
  vide = '""';
  classe = '"class"';
  divInventaire.innerHTML+="<img src='"+object.image+"' onclick='if(selection!=null){document.getElementById(selection).setAttribute("+classe+","+'"unselected"'+");};selection="+nomStr+"; document.getElementById("+nomStr+").setAttribute("+classe+","+'"selected"'+")' id='"+object.nom+"' class='unselected' title='"+object.indice+"'>";
}
addToInventory({image:"images\\Key_Gold.PNG",nom:"objet test", indice:"ceci est un test"})
addToInventory({image:"images\\scroll_t.PNG",nom:"objet test2", indice:"ceci est un test"})
addToInventory({image:"images\\scroll_t.PNG",nom:"objet test3", indice:"ceci est un test"})


setMessage("bienvenue, ceci est un message écrit en utilisant la fonction setMessage!")



//ajout des events
btStart = document.getElementById("btStart");
btStart.addEventListener("click",start);

btOverlayC.addEventListener("click",hideShow);
btOverlayO.addEventListener("click",hideShow);
