/**
 *
 * @param {String} carta
 * @returns {HTMLImageElement} Imagen de retorno
 */

export const crearCartaHTML = (carta) => {
  if (!carta) throw new Error("La carta es un argumento obligatorio");

  const imgCarta = document.createElement("img");
  imgCarta.src = `./assets/cartas/${carta}.png`;
  imgCarta.alt = "Carta";
  imgCarta.classList.add("position-relative");
  imgCarta.style.marginLeft = "-35px";
  imgCarta.style.left = "35px";
  imgCarta.style.maxWidth = "80%";
  imgCarta.style.maxHeight = "50%";
  imgCarta.classList.add("carta");

  return imgCarta;
};
