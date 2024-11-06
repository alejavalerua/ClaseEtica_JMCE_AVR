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

function verificarEtico2(opcion) {
    var resultado = document.getElementById("resultado-etico-moral2");
    if (opcion === "etico") {
        resultado.innerText = "En ética médica, existe el principio de 'no maleficencia', que busca evitar el sufrimiento innecesario del paciente. Aunque la transparencia es importante, el médico puede considerar ético minimizar el daño emocional del paciente, priorizando su bienestar.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

function verificarEtico3(opcion) {
    var resultado = document.getElementById("resultado-etico-moral3");
    if (opcion === "moral") {
        resultado.innerText = "La decisión de quedarse con la billetera depende de la moralidad personal del trabajador, que puede estar influida por sus valores individuales o culturales. Éticamente, la honestidad es esperada en cualquier circunstancia laboral, pero el trabajador actúa según su moral.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

function verificarEtico4(opcion) {
    var resultado = document.getElementById("resultado-etico-moral4");
    if (opcion === "moral") {
        resultado.innerText = "La moralidad del estudiante está en conflicto, ya que sus valores personales pueden estar influenciados por la presión familiar, mientras que éticamente, la honestidad académica condena la trampa.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

function verificarEtico5(opcion) {
    var resultado = document.getElementById("resultado-etico-moral5");
    if (opcion === "etico") {
        resultado.innerText = "La ética empresarial puede evaluar temas de accesibilidad y equidad. Aunque algunos podrían verlo moralmente cuestionable, el enfoque ético se centra en las decisiones de mercado que, aunque excluyan a ciertos segmentos, cumplen con sus propios estándares éticos de calidad y exclusividad.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}


function verificarEtico6(opcion) {
    var resultado = document.getElementById("resultado-etico-moral6");
    if (opcion === "etico") {
        resultado.innerText = "La ética política exige honestidad y transparencia en todos los niveles, no solo en el discurso. Aunque pueda justificarlo moralmente para 'beneficiar a su círculo', sus actos se alejan de la ética pública y la responsabilidad que debería tener.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

function verificarEtico7(opcion) {
    var resultado = document.getElementById("resultado-etico-moral7");
    if (opcion === "moral") {
        resultado.innerText = "Esta es una decisión moral, ya que se basa en creencias personales o religiosas, que guían el comportamiento individual. La ética podría promover la ayuda universal, pero la moralidad personal influye en su decisión.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

function verificarEtico8(opcion) {
    var resultado = document.getElementById("resultado-etico-moral8");
    if (opcion === "etico") {
        resultado.innerText = "La ética empresarial y ambiental promueve el respeto al medio ambiente. Aunque el directivo moralmente se justifique para mantener los empleos, desde un punto de vista ético debería buscar prácticas que no dañen el ambiente.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

function verificarEtico9(opcion) {
    var resultado = document.getElementById("resultado-etico-moral9");
    if (opcion === "moral") {
        resultado.innerText = "Esta decisión se basa en la moralidad personal, influida por la presión social y los valores individuales. Éticamente, evitar el consumo de sustancias ilegales es esperado, pero aquí prevalece la moralidad personal.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

function verificarEtico10(opcion) {
    var resultado = document.getElementById("resultado-etico-moral10");
    if (opcion === "etico") {
        resultado.innerText = "La ética profesional exige imparcialidad y justicia. Aunque la moralidad de la profesora pueda guiarla a 'premiar' al alumno, su deber ético es evaluar objetivamente.";
    } else {
        resultado.innerText = "Incorrecto.";
    }
}

// Función para agregar una pregunta al foro
// function agregarPregunta() {
//     var nuevaPregunta = document.getElementById("nueva-pregunta").value;
//     var listaPreguntas = document.getElementById("lista-preguntas");
//     var nuevoElemento = document.createElement("li");
//     nuevoElemento.innerText = nuevaPregunta;
//     listaPreguntas.appendChild(nuevoElemento);
//     document.getElementById("nueva-pregunta").value = "";
// }

// // Función para agregar una pregunta al foro
// function agregarPregunta() {
//     var nuevaPregunta = document.getElementById("nueva-pregunta").value;
//     var listaPreguntas = document.getElementById("lista-preguntas");
    
//     // Crear un nuevo elemento de lista
//     var nuevoElemento = document.createElement("li");
//     nuevoElemento.innerText = 'Pregunta: ' + nuevaPregunta;
//     nuevoElemento.style.fontWeight = "bold";

//     // Crear un contenedor para las respuestas
//     var contenedorRespuestas = document.createElement("div");
//     contenedorRespuestas.classList.add("respuestas");
    
//     // Crear un campo de respuesta
//     var campoRespuesta = document.createElement("input");
//     campoRespuesta.type = "text";
//     campoRespuesta.placeholder = "Escribe tu respuesta aquí";
    
//     // Crear un botón para enviar la respuesta
//     var botonRespuesta = document.createElement("button");
//     botonRespuesta.innerText = "Responder";
//     botonRespuesta.onclick = function() {
//         var respuesta = campoRespuesta.value;
//         if (respuesta) {
//             var nuevaRespuesta = document.createElement("p");
//             nuevaRespuesta.innerText = 'Respuesta: ' + respuesta;
//             nuevaRespuesta.style.fontWeight = "normal";
//             contenedorRespuestas.appendChild(nuevaRespuesta);
//             campoRespuesta.value = ""; // Limpiar el campo de respuesta
//         }
//     };

//     // Agregar el campo de respuesta y el botón al contenedor de respuestas
//     contenedorRespuestas.appendChild(campoRespuesta);
//     contenedorRespuestas.appendChild(botonRespuesta);
    
//     // Agregar el contenedor de respuestas al nuevo elemento
//     nuevoElemento.appendChild(contenedorRespuestas);
//     listaPreguntas.appendChild(nuevoElemento);
    
//     // Limpiar el campo de pregunta
//     document.getElementById("nueva-pregunta").value = "";
// }

// Función para voltear la ficha de aprendizaje
function voltearFicha(ficha) {
    ficha.classList.toggle('volteada');
}

// Inicializar la primera sección a mostrar
// document.addEventListener("DOMContentLoaded", function() {
//     mostrarSeccion('memoria');
// });

// Lecturas Embedding System
function changeText(text) {
    let embedElement = document.querySelector('.embed');
    if (text) {
        embedElement.src = "../lecturas/" + text;
    }
}

// Foro Function
// Cargar las preguntas desde el backend al iniciar la página
window.onload = function() {
    fetch("http://localhost:3000/api/preguntas")
        .then(response => response.json())
        .then(data => {
            data.forEach(function(pregunta) {
                agregarPreguntaAlDOM(pregunta.texto, pregunta.respuestas);
            });
        })
        .catch(error => console.error("Error al cargar las preguntas:", error));
};

// Función para agregar una pregunta al foro y guardarla
function agregarPregunta() {
    var nuevaPregunta = document.getElementById("nueva-pregunta").value;
    if (nuevaPregunta.trim() === "") return; // No agregar preguntas vacías

    var nuevaPreguntaObj = { texto: nuevaPregunta, respuestas: [] };

    // Enviar la nueva pregunta al backend
    fetch("http://localhost:3000/api/preguntas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(nuevaPreguntaObj)
    })
    .then(response => {
        if (response.ok) {
            agregarPreguntaAlDOM(nuevaPreguntaObj.texto, nuevaPreguntaObj.respuestas);
            document.getElementById("nueva-pregunta").value = "";
        } else {
            console.error("Error al guardar la pregunta");
        }
    })
    .catch(error => console.error("Error al enviar la pregunta:", error));
}

// Función para agregar una pregunta al DOM
function agregarPreguntaAlDOM(textoPregunta, respuestas) {
    var listaPreguntas = document.getElementById("lista-preguntas");

    // Crear un nuevo elemento de lista
    var nuevoElemento = document.createElement("li");
    nuevoElemento.innerText = 'Pregunta: ' + textoPregunta;
    nuevoElemento.style.fontWeight = "bold";

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
            nuevaRespuesta.innerText = 'Respuesta: ' + respuesta;
            nuevaRespuesta.style.fontWeight = "normal";
            contenedorRespuestas.appendChild(nuevaRespuesta);

            campoRespuesta.value = ""; // Limpiar el campo de respuesta
        }
    };

    // Agregar el campo de respuesta y el botón al contenedor de respuestas
    contenedorRespuestas.appendChild(campoRespuesta);
    contenedorRespuestas.appendChild(botonRespuesta);

    // Agregar respuestas previamente guardadas al contenedor
    respuestas.forEach(function(respuesta) {
        var nuevaRespuesta = document.createElement("p");
        nuevaRespuesta.innerText = 'Respuesta: ' + respuesta;
        nuevaRespuesta.style.fontWeight = "normal";
        contenedorRespuestas.appendChild(nuevaRespuesta);
    });

    // Agregar el contenedor de respuestas al nuevo elemento
    nuevoElemento.appendChild(contenedorRespuestas);
    listaPreguntas.appendChild(nuevoElemento);
}
