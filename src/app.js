/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {
  let pronoun = ["El"];
  let sujeto = ["castor", "gato", "oso", "pescado"];
  let verbo = ["se comio ", "forzo", " trato de aruñarme", "intento matarme"];
  let lugar = ["en mi casa", "en la calle", "en la oficina", " en el patio"];
  let quesecomio = [" la tarea", "la corbata", "la pelota", "el dinero"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);
  let quesecomioIndex = Math.floor(Math.random() * quesecomio.length);

  return (
    pronoun[pronounIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    verbo[verboIndex] +
    " " +
    lugar[lugarIndex] +
    " " +
    quesecomio[quesecomioIndex]
  );
};
