<?php

/**
 * Description of palabras
 *
 * @author Miguel
 */
ini_set('error_reporting', E_ALL ^ E_NOTICE);
ini_set('display_errors', 'on');
ini_set('max_execution_time', 10);

require_once (__DIR__ . DIRECTORY_SEPARATOR . 'oConexion.class.php');

class palabras {

    private $oConexion, $oConni;

    public function __construct() {
        $this->oConexion = new oConexion('172.17.0.2', 'myapp', 'root', '123456');
        $this->oConexion->abrir();
        $this->oConni = $this->oConexion->obtenerConexion();
    }

    public function __desctruct() {
        $this->oConexion->cerrar();
    }

    function getWord() {
        $stmt = $this->oConni->prepare("SELECT ID,word from palabras WHERE RAND() LIMIT 1");
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($ID, $word);
        $stmt->fetch();
        $arrayWord = array("ID" => $ID, "word" => $word);
        return json_encode($arrayWord);
    }

    function getIdUser($name) {
        $stmt = $this->oConni->prepare("SELECT ID,name from usuarios WHERE NAME=?");
        $stmt->bind_param("s", $name);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($ID, $nameUser);
        $stmt->fetch();
        $arrayUser = array("ID" => $ID, "name" => $nameUser);
        return json_encode($arrayUser);
    }

    function checkWord($idWord, $idUser) {
        $stmt = $this->oConni->prepare("SELECT ID_PALABRA from `usuarios-palabras` WHERE ID_USUARIO=? AND ID_PALABRA=?");
        $stmt->bind_param("ii", $idUser, $idWord);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($IdPalabra);
        if ($stmt->fetch()) {
            return true;
        }
        return false;
    }

    function fullWords() {
        $stmt = $this->oConni->prepare("SELECT COUNT(ID) AS fullWords from palabras");
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($fullWords);
        $stmt->fetch();
        return $fullWords;
    }

    function totalUserWords($idUser) {
        $stmt = $this->oConni->prepare("SELECT COUNT(ID) AS FullWords from `usuarios-palabras` where ID_USUARIO=?");
        $stmt->bind_param("i", $idUser);
        $stmt->execute();
        $stmt->store_result();
        $stmt->bind_result($totalUserWords);
        $stmt->fetch();
        return $totalUserWords;
    }

    function checkFull($idWord, $idUser) {
        $fullWords = $this->fullWords();
        $totalUserWords = $this->totalUserWords($idUser);
        if ($fullWords != $totalUserWords) {
            return TRUE;
        }
        return FALSE;
    }
    
    function insertWord($idWord,$idUser){
        $stmt = $this->oConni->prepare("INSERT INTO `usuarios-palabras` (ID_PALABRA,ID_USUARIO) VALUES (?,?)");
        $stmt->bind_param("ii", $idWord,$idUser);
        $stmt->execute();
    }

}
