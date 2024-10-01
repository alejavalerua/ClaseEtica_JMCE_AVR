// Función para mostrar diferentes secciones
function mostrarSeccion(seccion) {
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(sec) {
        sec.style.display = 'none';
    });
    document.getElementById(seccion).style.display = 'block';
}

// Función para verificar el juego de memoria
function verificarMemoria() {
    var seleccion = document.getElementById("autor-seleccion").value;
    var resultado = document.getElementById("resultado-memoria");
    if (seleccion === "democrito") {
        resultado.innerText = "Correcto. Demócrito es el autor de la frase.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}

// Función para verificar si es ético o moral
function verificarEtico(opcion) {
    var resultado = document.getElementById("resultado-etico-moral");
    if (opcion === "moral") {
        resultado.innerText = "Correcto. La moral está relacionada con normas de la sociedad.";
    } else {
        resultado.innerText = "Incorrecto. Esta acción se considera inmoral.";
    }
}

// Función para agregar una pregunta al foro
function agregarPregunta() {
    var nuevaPregunta = document.getElementById("nueva-pregunta").value;
    var listaPreguntas = document.getElementById("lista-preguntas");
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = nuevaPregunta;
    listaPreguntas.appendChild(nuevoElemento);
    document.getElementById("nueva-pregunta").value = "";
}

// Función para agregar una pregunta al foro
function agregarPregunta() {
    var nuevaPregunta = document.getElementById("nueva-pregunta").value;
    var listaPreguntas = document.getElementById("lista-preguntas");
    
    // Crear un nuevo elemento de lista
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = nuevaPregunta;

    // Crear un contenedor para las respuestas
    var contenedorRespuestas = document.createElement("div");
    contenedorRespuestas.classList.add("respuestas");
    
    // Crear un campo de respuesta
    var campoRespuesta = document.createElement("input");
    campoRespuesta.type = "text";
    campoRespuesta.placeholder = "Escribe tu respuesta aquí";
    
    // Crear un botón para enviar la respuesta
    var botonRespuesta = document.createElement("button");
    botonRespuesta.innerText = "Responder";
    botonRespuesta.onclick = function() {
        var respuesta = campoRespuesta.value;
        if (respuesta) {
            var nuevaRespuesta = document.createElement("p");
            nuevaRespuesta.innerText = respuesta;
            contenedorRespuestas.appendChild(nuevaRespuesta);
            campoRespuesta.value = ""; // Limpiar el campo de respuesta
        }
    };

    // Agregar el campo de respuesta y el botón al contenedor de respuestas
    contenedorRespuestas.appendChild(campoRespuesta);
    contenedorRespuestas.appendChild(botonRespuesta);
    
    // Agregar el contenedor de respuestas al nuevo elemento
    nuevoElemento.appendChild(contenedorRespuestas);
    listaPreguntas.appendChild(nuevoElemento);
    
    // Limpiar el campo de pregunta
    document.getElementById("nueva-pregunta").value = "";
}

// Función para voltear la ficha de aprendizaje
function voltearFicha(ficha) {
    ficha.classList.toggle('volteada');
}

// Inicializar la primera sección a mostrar
document.addEventListener("DOMContentLoaded", function() {
    mostrarSeccion('memoria');
});
