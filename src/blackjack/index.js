import _ from "underscore";
import {
  crearDeck,
  pedirCarta,
  valorCarta,
  turnoComputadora,
  crearCartaHTML,
} from "./usecases/index";

let deck = [];
const tipos = ["C", "D", "H", "S"];
const especiales = ["A", "J", "Q", "K"];

//Puntos
let puntosJugador = 0,
  puntosComputadora = 0;

//Referencia
const btnPedir = document.querySelector("#btnPedir"),
  btnDeneter = document.querySelector("#btnDetener"),
  btnNuevoJuego = document.querySelector("#btnNuevo"),
  smalls = document.querySelectorAll("small"),
  divCartasJugador = document.querySelector("#jugador-cartas"),
  divCartasComputadora = document.querySelector("#computadora-cartas");

deck = crearDeck(tipos, especiales);

// Eventos
btnPedir.addEventListener("click", () => {
  const carta = pedirCarta(deck);

  puntosJugador = puntosJugador + valorCarta(carta);
  smalls[0].innerText = puntosJugador;

  // <img class="carta" src="assets/cartas/2C.png">
  const imgCarta = crearCartaHTML(carta);
  divCartasJugador.append(imgCarta);

  if (puntosJugador > 21) {
    console.warn("Lo siento mucho, perdiste");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, smalls[1], divCartasComputadora, deck);
  } else if (puntosJugador === 21) {
    console.warn("21, genial!");
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, smalls[1], divCartasComputadora, deck);
  }
});

btnDeneter.addEventListener("click", () => {
  btnPedir.disabled = true;
  btnDetener.disabled = true;

  turnoComputadora(puntosJugador, smalls[1], divCartasComputadora, deck);
});

btnNuevoJuego.addEventListener("click", () => {
  console.clear();
  deck = [];
  deck = crearDeck(tipos, especiales);

  puntosJugador = 0;
  puntosComputadora = 0;

  smalls[0].innerText = 0;
  smalls[1].innerText = 0;

  divCartasComputadora.innerHTML = "";
  divCartasJugador.innerHTML = "";

  btnPedir.disabled = false;
  btnDetener.disabled = false;
});
