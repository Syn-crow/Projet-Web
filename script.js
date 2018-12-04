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

var map = L.map('map').setView([48.8605,  2.3921], 16);

function start(){
  divStart.style.display = "none";
  divJeu.style.display = "block";
  //var map = L.map('map').setView([48.8605,  2.3921], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map); // on initialise la map seulement
  //la car on n'utilise pas la carte avant
}
//passe de map à dialogue et vice-versa



//______________Fonctions affichage des images et interactions______________

var markers = new L.LayerGroup();

//Affiche les images de tous les objets
function afficherImg() {
  for (var i=0;i<listeObjets.length;i++) {
    ajax.send("request='"+listeObjets[i]+"'");
    listeAttributsObjet = JSON.parse(ajax.response); //id,nom,image,latitude,longitude,type_condition,parametre,message,indice,image_pnj

    var img = L.icon({
      iconUrl: listeAttributsObjet[image],
      iconSize: [listeAttributsObjet[taille],listeAttributsObjet[taille]],
      iconAnchor: [listeAttributsObjet[ancreX],listeAttributsObjet[ancreY]], //de combien est décalé l'image par rapport à son coin en haut à gauche
    });
    //marker = L.marker([listeAttributsObjet[3],listeAttributsObjet[4]],{icon: img}).addTo(markers).on('click', onClick);;
    marker = L.marker([listeAttributsObjet[latitude],listeAttributsObjet[longitude]],{icon: img}).addTo(markers);
    map.on('zoomend', function() {
        if (map.getZoom() <listeAttributsObjet[zoom]){
                map.removeLayer(markers);
        }
        else {
                map.addLayer(markers);
            }
    });
  }
}

//EXEMPLE
/*function afficherImg() { //id,nom,image,latitude,longitude,type_condition,parametre,message,indice,image_pnj
  var markers = new L.LayerGroup();
  var img = L.icon({
    //iconUrl: listeAttributsObjet[2], //EXEMPLE iconUrl: 'images/scroll_t.png',
    iconUrl: 'images/scroll_t.png',
    iconSize: [120,120], //taille de l'image
    iconAnchor: [10,10], //de combien est décalé l'image par rapport à son coin en haut à gauche
    popupAnchor: [-3,-3]
  });
  //marker = L.marker([listeAttributsObjet[3],listeAttributsObjet[4]],{icon: img}).addTo(markers).on('click', onClick);;
  marker = L.marker([48.843724, 2.3594],{icon: img}).addTo(markers);
  map.on('zoomend', function() {
      if (map.getZoom() <17){
              map.removeLayer(markers);
      }
      else {
              map.addLayer(markers);
          }
  });
}
afficherImg();*/

function onClick() {
  addToInventory(listeObjets[indObjetActuel])
  indObjetActuel += 1;
  afficherMsg(listeAttributsObjet);
  afficherImg(indObjetActuel);
}

function afficherMsg(listeAttributsObjet) {
  mapDialog();
  setDialogue(listeAttributsObjet[7],listeAttributsObjet[9]);
  dialogueTexte.addEventListener('click',)
}


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

//afficherImg();

var ajax = new XMLHttpRequest();
ajax.open('POST', 'objet.php',true);
ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
ajax.send("request='"+listeObjets[indObjetActuel]+"'"); //Cette requête porte sur le premier objet de la liste à savoir "code1"

ajax.addEventListener("load", function () {
    listeAttributs = JSON.parse(ajax.response);
    //--------Opérations sur les différents éléments de l'objet "code1"------------
    //Afficher le nouvel objet avec image et position
    afficherImg(indObjetActuel);
    //Afficher le nouveau message
    afficherMsg(listeAttributs);
    //Cliquer pour quitter la page de dialogue...

    //Afficher l'indice en texte
    setMessage(listeAttributs[8]);
    //Changer d'objet actuel
    indObjetActuel += 1;
    }
);

ajax.addEventListener("click", function() {

})
