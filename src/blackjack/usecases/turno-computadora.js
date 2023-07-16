import { crearCartaHTML } from "./crear-carta-html";
import { pedirCarta } from "./pedircarta";
import { valorCarta } from "./valorcarta";

/**
 *
 * @param {Number} puntosMinimos puntos minimos necesario para que la computadora gane
 * @param {HTMLElement} smalls elemento HTML para los puntos
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<Strin>} deck
 */
export const turnoComputadora = (
  puntosMinimos,
  smalls,
  divCartasComputadora,
  deck = []
) => {
  if (!puntosMinimos) throw new Error("Puntos minimos son necesarios");
  if (!smalls) throw new Error("Argumento smalls es necesario!");

  let puntosComputadora = 0;

  do {
    const carta = pedirCarta(deck);
    puntosComputadora = puntosComputadora + valorCarta(carta);
    smalls.innerText = puntosComputadora;

    const imgCarta = crearCartaHTML(carta);
    divCartasComputadora.append(imgCarta);

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
