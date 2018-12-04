<?php
$link = mysqli_connect('localhost','root','','highscore');

if (!$link) {
    die('Erreur de connexion');
}else {
}


if ($_POST['request'] == "score") {
    $requete = "SELECT * FROM score";
    if ($result = mysqli_query($link,$requete)) {
        while ($ligne = mysqli_fetch_assoc($result)) {
            $tab[] = $ligne;
        }
        echo json_encode($tab);
    }
}
?>
