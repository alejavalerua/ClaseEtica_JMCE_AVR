// Función para mostrar diferentes secciones
function mostrarSeccion(seccion) {
    var secciones = document.querySelectorAll('.seccion');
    secciones.forEach(function(sec) {
        sec.style.display = 'none';
    });
    document.getElementById(seccion).style.display = 'block';
}

// Función para verificar el juego de memoria
function verificarMemoria1() {
    var seleccion = document.getElementById("autor-seleccion1").value;
    var resultado = document.getElementById("resultado-memoria1");
    if (seleccion === "democrito") {
        resultado.innerText = "Correcto. Demócrito destaca la decadencia moral de una sociedad cuando las personas corruptas o inmorales son vistas como modelos a seguir, mientras que las personas honestas y justas son ridiculizadas o despreciadas. Cuando la sociedad invierte los valores, exaltando el mal y burlándose del bien, se encuentra en una situación crítica, donde el respeto por la virtud y la justicia se ha perdido. Es una advertencia sobre las consecuencias de la degradación ética en las comunidades.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria2() {
    var seleccion = document.getElementById("autor-seleccion2").value;
    var resultado = document.getElementById("resultado-memoria2");
    if (seleccion === "Sócrates") {
        resultado.innerText = "Correcto.  Sócrates creía que la verdadera virtud se lograba al alcanzar el conocimiento y la sabiduría. Solo a través del entendimiento profundo del bien y el mal, las personas pueden actuar de manera moral.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria3() {
    var seleccion = document.getElementById("autor-seleccion3").value;
    var resultado = document.getElementById("resultado-memoria3");
    if (seleccion === "Protágoras") {
        resultado.innerText = "Correcto. Protágoras sostenía que no existe una verdad universal, sino que la percepción y juicio de cada persona define lo que es verdadero o falso. Cada individuo es, por tanto, el referente para evaluar el mundo.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria4() {
    var seleccion = document.getElementById("autor-seleccion4").value;
    var resultado = document.getElementById("resultado-memoria4");
    if (seleccion === "Immanuel Kant") {
        resultado.innerText = "Correcto. Immanuel Kant proponía que debemos tratar a todas las personas con dignidad y respeto, como fines en sí mismas, y no utilizarlas simplemente para alcanzar nuestros propios objetivos.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria5() {
    var seleccion = document.getElementById("autor-seleccion5").value;
    var resultado = document.getElementById("resultado-memoria5");
    if (seleccion === "Ulpiano") {
        resultado.innerText = "Correcto. Ulpiano define la justicia como un principio universal e inmutable: cada persona debe recibir lo que le corresponde por derecho, sin excepción.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria6() {
    var seleccion = document.getElementById("autor-seleccion6").value;
    var resultado = document.getElementById("resultado-memoria6");
    if (seleccion === "Aristóteles") {
        resultado.innerText = "Correcto. Aristóteles consideraba que el propósito de la vida es alcanzar la 'eudaimonía', o felicidad plena, la cual se logra mediante la virtud y la realización de nuestro potencial humano.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria7() {
    var seleccion = document.getElementById("autor-seleccion7").value;
    var resultado = document.getElementById("resultado-memoria7");
    if (seleccion === "Jean-Paul Sartre") {
        resultado.innerText = "Correcto. Jean-Paul Sartre afirmaba que, aunque la libertad puede ser una carga, estamos destinados a tomar decisiones constantemente, y somos responsables de las consecuencias de nuestras elecciones.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria8() {
    var seleccion = document.getElementById("autor-seleccion8").value;
    var resultado = document.getElementById("resultado-memoria8");
    if (seleccion === "John Stuart Mill") {
        resultado.innerText = "Correcto. John Stuart Mill defendía que la moralidad de una acción se juzga por su capacidad de aumentar el bienestar general. El bien de la mayoría prevalece sobre el de unos pocos.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria9() {
    var seleccion = document.getElementById("autor-seleccion9").value;
    var resultado = document.getElementById("resultado-memoria9");
    if (seleccion === "Sócrates") {
        resultado.innerText = "Correcto. Sócrates enfatizaba la importancia de la autorreflexión y el examen de nuestras vidas y acciones. Sin esta introspección, no podemos alcanzar una vida verdaderamente significativa.";
    } else {
        resultado.innerText = "Incorrecto. Inténtalo de nuevo.";
    }
}
function verificarMemoria10() {
    var seleccion = document.getElementById("autor-seleccion10").value;
    var resultado = document.getElementById("resultado-memoria10");
    if (seleccion === "Maquiavelo") {
        resultado.innerText = "Correcto (Aunque la frase es atribuida erróneamente al escritor, el postulado “el fin justifica a los medios” no aparece textualmente en las palabras de Maquiavelo. Sin embargo, se entiende como conclusión debido a lo planteado por el autor)\n Maquiavelo sugería que, en política y en la vida, a veces es necesario hacer cosas moralmente cuestionables para alcanzar un fin mayor o deseado. Lo que importa es el resultado, no los métodos.";
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