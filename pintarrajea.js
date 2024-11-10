"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const btnBorrar = document.getElementById("btnBorrar");
  const lienzo = document.querySelector(".lienzo");
  const paleta = document.querySelector(".paleta");
  let colorActual = null;
  //Genera la tabla que hará de lienzo donde pintar.
  function crearTablaLienzo() {
    const tablaLienzo = document.createElement("table");

    for (let i = 0; i < 50; i++) {
      const tablaLienzoRow = document.createElement("tr");
      for (let j = 0; j < 60; j++) {
        const tablaLienzoCell = document.createElement("td");
        tablaLienzoCell.className = "pixel";
        tablaLienzoRow.appendChild(tablaLienzoCell);
      }
      tablaLienzo.appendChild(tablaLienzoRow);
    }
    lienzo.appendChild(tablaLienzo);
  }
  crearTablaLienzo();

  //Botón reset para refrescar la página y dejar en blanco.
  btnBorrar.addEventListener("click", () => {
    location.reload();
  });

  //Para seleccionar un color en la paleta.
  paleta.addEventListener("click", (e) => {
    const colorSeleccionado = e.target.id;

    // Seleccionamos todos los elementos con la clase "color"
    const elementosColor = document.querySelectorAll(".color");

    // Recorremos cada elemento en "elementosColor"
    elementosColor.forEach((element) => {
      // Si el id del elemento coincide con el color seleccionado
      if (element.id === colorSeleccionado) {
        element.className = "color seleccionado";
        colorActual = colorSeleccionado;
        console.log(colorActual);
      } else {
        // Eliminamos la clase "seleccionado" si no es el elemento seleccionado
        element.className = "color";
      }
    });
  });

  //Parte de pintar en el lienzo.

  const pixeles = document.querySelectorAll(".pixel");
  let mouseoverActivo = false; // Controla si el mouseover está activado

  pixeles.forEach((pixel) => {
    // Manejo del evento click
    pixel.addEventListener("click", (e) => {
      const pixel = e.target;
      pixel.style.backgroundColor = colorActual;

      // Alterna el estado del mouseover
      if (mouseoverActivo) {
        // Si el mouseover está activo, desactívalo
        pixeles.forEach((pixel) => {
          pixel.removeEventListener("mouseover", handleMouseover);
        });
      } else {
        // Si el mouseover no está activo, actívalo
        pixeles.forEach((pixel) => {
          pixel.addEventListener("mouseover", handleMouseover);
        });
      }
      mouseoverActivo = !mouseoverActivo;
    });
  });

  // Evento mouseover
  function handleMouseover(e) {
    const pixel = e.target;
    pixel.style.backgroundColor = colorActual;
  }
});
