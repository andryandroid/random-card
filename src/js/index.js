/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function random(max) {
  var num = Math.floor(Math.random() * max);
  return num;
}

function getColor(palos) {
  if (palos == 0 || palos == 1) {
    return "black";
  } else {
    return "red";
  }
}

function getPinta(palos) {
  switch (palos) {
    case 0:
      return "&spades;";
      break;
    case 1:
      return "&clubs;";
      break;
    case 2:
      return "&hearts;";
      break;
    case 3:
      return "&diams;";
      break;
  }
}

function getNumber(numero) {
  numero++;
  switch (numero) {
    case 1:
      return "A";
      break;
    case 11:
      return "J";
      break;
    case 12:
      return "Q";
      break;
    case 13:
      return "K";
      break;
    default:
      return numero;
      break;
  }
}

window.onload = function() {
  var pinta = random(4);
  var carta = random(13);
  var simbolo = getPinta(pinta);
  var color = getColor(pinta);
  var number = getNumber(carta);

  var iconos = document.getElementsByClassName("icon");
  iconos[0].style.color = color;
  iconos[1].style.color = color;
  iconos[0].innerHTML = simbolo;
  iconos[1].innerHTML = simbolo;

  var elem = document.getElementById("num");
  elem.style.color = color;
  elem.innerHTML = number;
};
