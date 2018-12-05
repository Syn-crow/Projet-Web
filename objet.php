<?php
$link = mysqli_connect('localhost','root','','objets'); //port 3306;usename:mysql; password: mysql

//$link = pg_connect('host=localhost port=5432 dbname=escapegame user=postgres password=postgres');

if (!$link) {
    die('Erreur de connexion');
}else {
}
mysqli_set_charset($link, "utf8");


if ($_POST['id'] == "1") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=1";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $ligne["id"] = (int)$ligne["id"];
            $ligne["ancreX"] = (int)$ligne["ancreX"];
            $ligne["ancreY"] = (int)$ligne["ancreY"];
            $ligne["latitude"] = (float)$ligne["latitude"];
            $ligne["longitude"] = (float)$ligne["longitude"];
            $ligne["taille"] = (int)$ligne["taille"];
            $ligne["typeCond"] = (int)$ligne["typeCond"];
            $ligne["zoom"] = (int)$ligne["zoom"];
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif ($_POST['id'] == '2') {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=2";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif ($_POST['id'] == "3") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=3";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif ($_POST['id'] == "4") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=4";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif ($_POST['id'] == "5") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=5";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif ($_POST['id'] == "6") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=6";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif ($_POST['id'] == "7") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=7";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif($_POST['id'] == "8") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=8";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

elseif($_POST['id'] == "9") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=9";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
          $ligne["id"] = (int)$ligne["id"];
          $ligne["ancreX"] = (int)$ligne["ancreX"];
          $ligne["ancreY"] = (int)$ligne["ancreY"];
          $ligne["latitude"] = (float)$ligne["latitude"];
          $ligne["longitude"] = (float)$ligne["longitude"];
          $ligne["taille"] = (int)$ligne["taille"];
          $ligne["typeCond"] = (int)$ligne["typeCond"];
          $ligne["zoom"] = (int)$ligne["zoom"];
          $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}
else{
  echo "erreur";
}
?>
