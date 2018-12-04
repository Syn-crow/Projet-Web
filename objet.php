<?php
$link = mysqli_connect('localhost','mysqli','','escapegame'); //port 3306;usename:mysql; password: mysql

//$link = pg_connect('host=localhost port=5432 dbname=escapegame user=postgres password=postgres');

if (!$link) {
    die('Erreur de connexion');
}else {
}


if ($_POST['request'] == "code1") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=1";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "pendentif") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=2";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "panneau") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=3";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "code2") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=4";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "porte1") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=5";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "cle") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=6";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "porte2") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=7";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "cadenas1") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=8";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}

if ($_POST['request'] == "cadenas2") {
    $requete = "SELECT id,Nom,img,latitude,longitude,typeCond,parametre,message,indice,taille,zoom,ancreX,ancreY,imagePNJ FROM objets WHERE id=9";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}
?>
