<?php


require_once (__DIR__ . DIRECTORY_SEPARATOR . 'palabras.class.php');

$acction = filter_input(INPUT_POST, "action");
$name = filter_input(INPUT_POST, "name");
$controlwhile = TRUE;

$p = new palabras();

if ($acction == "register") {
    $arrayUser = $p->getIdUser($name);
    $arrayUserDecode = json_decode($arrayUser);
    if ($arrayUserDecode->ID == "") {
        echo json_encode(array("palabra" => $arrayUserDecode->ID));
    } else {
        $arrayWord = $p->getWord();

        //$arrayUser = $p->getIdUser($name);

        $arrayWordDecode = json_decode($arrayWord);
        //$arrayUserDecode = json_decode($arrayUser);

        if ($p->checkFull($arrayWordDecode->ID, $arrayUserDecode->ID)) {
            while ($controlwhile) {
                $palabra = $p->checkWord($arrayWordDecode->ID, $arrayUserDecode->ID);
                if ($palabra) {
                    $arrayWord = $p->getWord();
                    $arrayWordDecode = json_decode($arrayWord);
                } else {
                    $controlwhile = FALSE;
                }
            }
        }
//DESCOMENTAR PARA QUE FUNCIONE LA INSERCIÓN
$p->insertWord($arrayWordDecode->ID,$arrayUserDecode->ID);

        echo json_encode(array("palabra" => $arrayWordDecode->word));
    }
}

