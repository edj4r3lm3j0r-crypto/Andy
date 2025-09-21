function abrirCarta() {
  // Oculta la sección inicial (sobre y mensaje)
  document.getElementById("intro").style.display = "none";

  // Selecciona el contenedor de la carta y fuerza el reflow
  var card = document.getElementById("card");
  card.style.display = "flex";
  void card.offsetWidth; // Forzar reflow para que la transición funcione

  // Con un pequeño retardo, añade la clase "open" para activar la animación
  setTimeout(function () {
    card.classList.add("open");
  }, 100);
}

function irAFlores() {
  window.location.href = "flores.html";
}
function irAFlores() {
  window.location.href = "flores.html";
}
