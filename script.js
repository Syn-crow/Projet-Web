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

var map ;
function start(){
  divStart.style.display = "none";
  divJeu.style.display = "block";
  map= L.map('map').setView([48.8605,  2.3921], 16);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map); // on initialise la map seulement
  //la car on n'utilise pas la carte avant
  getObject(1);
  setTimeout(function(){addMarker(listeObjets[0],map)},2000);
}
//passe de map à dialogue et vice-versa



//______________Fonctions affichage des images et interactions______________

listeObjets = [];
//Affiche les images de tous les objets
function getObject(id) {
  var deja = false;
  for(var i=0;i<listeObjets.length;i++){
    console.log(listeObjets[i]['id']);
    console.log(listeObjets[i]);
    if(listeObjets[i]['id'] == id){
      deja = true;
    }
  }
  if(!deja){
  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'objet.php');
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.send("id="+id);

  ajax.addEventListener('load', function () {
      var result = JSON.parse(ajax.response);
      listeObjets.push(result[0]);
  });}
}
function eventZoom(){
    map.on('zoomend', function() {
        if (map.getZoom() <listeAttributsObjet[zoom]){
                map.removeLayer(markers);
        }
        else {
                map.addLayer(markers);
            }
    });
}


listeMarker = {};
function addMarker(objet,map) { //id,nom,image,latitude,longitude,type_condition,parametre,message,indice,image_pnj
  var img = L.icon({
    //iconUrl: listeAttributsObjet[2], //EXEMPLE iconUrl: 'images/scroll_t.png',
    iconUrl: objet['img'],
    iconSize: [objet['taille'],objet['taille']], //taille de l'image
    iconAnchor: [objet['ancreX'],objet['ancreY']], //de combien est décalé l'image par rapport à son coin en haut à gauche
    popupAnchor: [-3,-3]
  });
  //marker = L.marker([listeAttributsObjet[3],listeAttributsObjet[4]],{icon: img}).addTo(markers).on('click', onClick);;
  var marker = L.marker([objet['latitude'], objet['longitude']],{icon: img});
  onClick = null;
  if(objet["typeCond"]==1){
    onClick = ramassageSimple;
  }
  if(objet["typeCond"]==2){
    onClick = codeNombre;
  }
  marker.addTo(map).once('click',function() {onClick(objet)});
  listeMarker[String(objet['id'])] = marker;
}


function ramassageSimple(objet) {
  addToInventory(objet);
  afficherMsg(objet);
  listeMarker[objet["id"]].setOpacity(0);
  getObject(objet["id"]+1);
  setTimeout(function(){addMarker(listeObjets[objet["id"]],map)},2000);
}
function codeNombre(objet) {
  setCode(object["img"]);
  document.getElementById("submit").addEventListener('click',function(){
    if(document.getElementById("code").value==String(code)){
      addToInventory(objet);
      setDialogue(objet["message"],objet["img"]);
      dialogueTexte.addEventListener('click',mapDialog);
      setMessage(objet["indice"]);
      listeMarker[objet["id"]].setOpacity(0);
      getObject(objet["id"]+1);
      setTimeout(function(){addMarker(listeObjets[objet["id"]],map)},2000);
    }
  })

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
function setCode(img=""){
  dTexte.innerHTML = " <input type='text' id='code'><input type='submit' id='submit'>";
  dialogueImg.innerHTML = "<img src="+img+">";
}

function afficherMsg(objet) {
  mapDialog();
  setDialogue(objet["message"],objet["img"]);
  dialogueTexte.addEventListener('click',mapDialog);
  setMessage(objet["indice"]);
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
setMessage("devans, un papier!")

//___________________________INVENTORY_________________________________
selection = null;
function resetBorderInventory(){
  allInInventory = document.querySelector(".objet");
  for(var i=0; i<allInInventory.length;i++){
    allInInventory[i].style= "";
  }
}
function addToInventory(object){
  nomStr = '"'+object["nom"]+'"';
  selectStr = '"'+selection+'"';
  vide = '""';
  classe = '"class"';
  divInventaire.innerHTML+="<img src='"+object["img"]+"' onclick='if(selection!=null){document.getElementById(selection).setAttribute("+classe+","+'"unselected"'+");};selection="+nomStr+"; document.getElementById("+nomStr+").setAttribute("+classe+","+'"selected"'+")' id='"+object["nom"]+"' class='unselected' title='"+object["indice"]+"'>";
}



//ajout des events
btStart = document.getElementById("btStart");
btStart.addEventListener("click",start);

btOverlayC.addEventListener("click",hideShow);
btOverlayO.addEventListener("click",hideShow);


// ----------------------------------------------- Partie requête php -----------------------------------------------

//On crée une liste qui va être parcourue pour récupérer chaque objet
//On va chercher chaque objet en fonction de sa position dans la liste listeObjets
var indObjetActuel = 0;
//Liste des attributs de l'objet id,nom,image,latitude,longitude,type_condition,parametre,message,indice,image_pnj
var listeAttributs;

//afficherImg();

var ajax = new XMLHttpRequest();
ajax.open('POST', 'score.php',true);
ajax.open('POST', 'objet.php',true);
ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//ajax.send("request='score'"); //Cette requête porte sur le premier objet de la liste à savoir "code1"

ajax.addEventListener("load", function () {
    //listeAttributs = JSON.parse(ajax.response);
    //--------Opérations sur les différents éléments de l'objet "code1"------------
    //Afficher le nouvel objet avec image et position
    afficherImg();
    //Afficher le nouveau message
    //afficherMsg(listeAttributs);
    //Cliquer pour quitter la page de dialogue...

    //Afficher l'indice en texte
    //setMessage(listeAttributs[8]);
    //Changer d'objet actuel
    }
);

ajax.addEventListener("click", function() {

})
