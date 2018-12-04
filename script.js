divStart = document.getElementById("start");
divJeu = document.getElementById("jeu");
divMap = document.getElementById("map");
divDialogue = document.getElementById("dialogue");
divOverlay = document.getElementById("overlay");
btOverlayO = document.getElementById("overlayOpen");
btOverlayC = document.getElementById("overlayClose");
divInventaire = document.getElementById("inventaire");
message = document.getElementById("message");

dialogueTexte = document.getElementById("dialText");
dialogueImg = document.getElementById("affichageObjet");
dTexte = document.getElementById("text")
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

//________________________________DIALOGUE__________________________________

function mapDialog(){
  if(divJeu.style.display == "none"){
    divJeu.style.display = "block";
    divDialogue.style.display = "none";
  }else{
    divJeu.style.display = "none";
    divDialogue.style.display = "flex";
    ps.update();
  }
}

function setDialogue(texte,img=""){
  dTexte.innerHTML = "<p>"+texte+"</p>";
  dialogueImg.innerHTML = "<img src="+img+">";
}

const ps = new PerfectScrollbar('#dialText', {
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
});
//-------------------------------------AFFICHAGE DU MESSAGE(overlay)------------------------//
function hideShow(){
  if(divOverlay.style.display == ""){
    divOverlay.style.display = "block";
    btOverlayC.style.display = "block";
    btOverlayO.style.display = "none";
  }
  else{
    divOverlay.style.display = ""
    btOverlayC.style.display = "none";
    btOverlayO.style.display = "block";
  }
}
function setMessage(text){
  message.innerHTML = text;
}
//___________________________INVENTORY_________________________________
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


// ----------------------------------------------- Partie requête php -----------------------------------------------

//On crée une liste qui va être parcourue pour récupérer chaque objet
var listeObjets = ["code1","pendentif","panneau","code2","porte1","cle","porte2","cadenas1","cadenas2"]
//On va chercher chaque objet en fonction de sa position dans la liste listeObjets
var indObjetActuel = 0;
//Liste des attributs de l'objet id,nom,image,latitude,longitude,type_condition,parametre,message,indice,image_pnj
var listeAttributs;

var ajax = new XMLHttpRequest();
ajax.open('GET', 'objet.php');
ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
ajax.send("request="+indObjetActuel);

ajax.addEventListener("load", function () {
    listeAttributs = JSON.parse(ajax.response);
    //--------Opérations sur les différents éléments de l'objet "code1"------------
    //Afficher le nouvel objet avec image et position
    var imageUrl = listeAttributs[2],
    imageBounds = [center, [listeAttributs[3],listeAttributs[4]]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    //Afficher le nouveau message
    mapDialog();
    setDialogue(listeAttributs[7],listeAttributs[9])
    //Afficher l'indice en texte
    setMessage(listeAttributs[8]);
    //Changer d'objet actuel
    indObjetActuel += 1;
    }
);
