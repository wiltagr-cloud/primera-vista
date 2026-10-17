
function siguientePantalla(numero) {

    // Ocultar todas las pantallas
    let pantallas = document.querySelectorAll(".pantalla");

    pantallas.forEach(function(pantalla) {
        pantalla.classList.remove("activa");
    });

    // Mostrar la pantalla seleccionada
    let pantallaSeleccionada = document.getElementById("pantalla" + numero);

    pantallaSeleccionada.classList.add("activa");
}


// Mensajes secretos de las estrellas
function mostrarMensaje(indice) {

    let mensajes = [
        "✨ Tienes una forma muy bonita de hacer sonreír.",
        "💗 Tu personalidad tiene algo que llama la atención.",
        "🌙 A veces una persona especial aparece sin avisar."
    ];

    let resultado = document.getElementById("mensajeEstrella");

    resultado.innerHTML = mensajes[indice];
}


// Respuestas del mini juego
function responder(opcion) {

    let resultado = document.getElementById("respuesta");

    resultado.innerHTML =
        "¡Buena elección! 💕 " + opcion +
        "<br>Ahora solo falta que se haga realidad. ✨";
}


// Volver a comenzar
function reiniciarJuego() {

    // Volver a la primera pantalla
    siguientePantalla(1);

    // Limpiar mensajes anteriores
    document.getElementById("mensajeEstrella").innerHTML =
        "Tu sorpresa aparecerá aquí 💗";

    document.getElementById("respuesta").innerHTML = "";
}
