var imagenes = [
    ["https://i.ibb.co/1Xf3wCq/1.png", 
    "https://i.ibb.co/f8dtyBZ/2.png", 
    "https://i.ibb.co/5Td1Bt2/3.png", 
    "https://i.ibb.co/86Dgf5P/4.png"
    ],
    ["https://i.ibb.co/9yFjWbf/5.png", 
    "https://i.ibb.co/dt6wY7t/6.png", 
    "https://i.ibb.co/b5LfQZd/7.png", 
    "https://i.ibb.co/SB3f4jB/8.png"],
    ["https://i.ibb.co/kD2s9cR/porc1.png", 
    "https://i.ibb.co/GPv98zV/porc2.png",
    "https://i.ibb.co/gMf7ntP/porc3.png",
    "https://i.ibb.co/9GLCTfN/porc-4.png"],
    ["https://i.ibb.co/kD2s9cR/porc1.png", 
    "https://i.ibb.co/GPv98zV/porc2.png",
    "https://i.ibb.co/gMf7ntP/porc3.png",
    "https://i.ibb.co/9GLCTfN/porc-4.png"],
    
];
var pasos = [
    "PASO 1",
    "PASO 2",
    "PASO 3",
    "PASO 4"
];

var preguntas = [
    "Lávese la cara con un limpiador suave y espere de 15 a 30 minutos. Haga clic en el icono que coincida con lo que ve.",
    "¿Cuál es tu principal preocupación? o ¿Con cuál te sientes más identificada? ",
    "¿Qué tan a menudo sientes la necesidad de aplicar crema hidratante durante el día?",
    "¿Cómo reacciona tu piel ante los productos nuevos o diferentes?"
]
var opciones = [
    ["Se siente tenso y deshidratado . Algunas zonas escamosas.", "Luce brillante y se siente resbaladizo al tacto.", "Parece seco en algunas zonas, pero brillante en otras. Particularmente la zona T (frente, nariz y mentón)", "Se siente suave , equilibrado y saludable "],
    ["Brotes , puntos negros o poros obstruidos", "Envejecimiento , pérdida de firmeza o arrugas", "Tono de piel desigual o decoloración.", "Enrojecimiento o sensibilidad"],
    ["Casi siempre, mi piel se siente muy seca.", "A veces, dependiendo del clima o la temporada.", "Raramente, mi piel tiende a ser equilibrada.", "Nunca, mi piel es naturalmente grasa."],
    ["Frecuentemente se irrita o se enrojece.", "A veces presenta irritación, pero desaparece rápidamente.", "Rara vez experimenta irritación.", "Nunca experimenta irritación."],
];

var puntajePorOpcion = [
    [1, 4, 3, 2],
    [4, 3, 2, 1],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
];

// Necesitamos saber en qué imagen estamos y la opción seleccionada
var puntaje = 0;
var i = 0;

function mostrarPregunta() {
    // Cargamos los pasos
    document.getElementById("pasos").innerHTML = pasos[i];
    // Cargamos la pregunta
    document.getElementById("pregunta").innerHTML = preguntas[i];
    // Cargamos la imagen
    document.getElementById("img1").src = imagenes[i][0];
    document.getElementById("img2").src = imagenes[i][1];
    document.getElementById("img3").src = imagenes[i][2];
    document.getElementById("img4").src = imagenes[i][3];
    // Cargamos las opciones
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("op4").innerHTML = opciones[i][3];
    // Actualizamos la barra de progreso
    var progressValue = (i + 1) * 100 / imagenes.length;
    document.getElementById("barra-progreso").value = progressValue;
    document.getElementById("contador-progreso").textContent = Math.round(progressValue) + "%"; // Actualizamos el contador
}

function mostrarResultado() {
    // Creamos un nuevo contenedor para los resultados
    var containerResultado = document.createElement("div");
    containerResultado.classList.add("container-fluid", "d-flex", "vh-100");

    // Contenido de los resultados
    containerResultado.innerHTML = `
        <div class="main-container p-0 mt-3 px-4 bg-dark-toggle"> 
            <div class="row">
                <div class="col-md-12 border-bottom p-0">
                    <nav class="navbar navbar-expand-lg bg-body-tertiary p-0">
                        <div class="container-fluid p-1">
                            <img id="logo-nav" src="https://cdn-icons-png.flaticon.com/512/5403/5403989.png" class="mx-4" alt="logo">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav mr-auto mt-2">
                                    <h5 class="nav-link">LÚA CARES - TEST</h5>
                                </div>
                                <div class="navbar-nav">
                                    <label class="toggle-container m-2">
                                        <input type="checkbox" class="toggle-checkbox" id="darkModeToggle">
                                        <span class="toggle-slider"></span>
                                        <i class="bi bi-brightness-high toggle-icon light ml-4"></i>
                                        <i class="bi bi-moon toggle-icon dark ml-1"></i>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </nav> 
                </div>
            </div>
            <div class="container-fluid d-flex vh-100 col-md-12 d-flex flex-column">
                <div class="row">
                    <h3 class='resultado_titulo'>RESULTADOS</h3>
                    <p class='resultado_obtenido'>
                        ¡FELICIDADES! Ahora conoces que tu tipo de piel es: 
                        <span id='resultado'>
                            ${puntaje >= 20 ? 'PIEL GRASA' : puntaje >= 15 ? 'PIEL MIXTA' : puntaje >= 10 ? 'PIEL NORMAL' : 'PIEL SECA'}
                        </span>.
                    </p>
                    <p>¡Gracias por completar el LÚA CARES - TEST! Recuerda, cada tipo de piel es hermoso y único. No importa cuál sea tu resultado, estamos aquí para ayudarte a cuidar tu piel y hacerla brillar. Juntos, podemos lograr una piel radiante y saludable que te haga sentir seguro/a y feliz. ¡Estamos aquí para ti!</p>
                    <a href="test.html" class="btn">QUIERO VOLVER A HACER EL TEST</a>
                    <a href="rutinas.html" class="btn">AHORA QUIERO UNA RUTINA</a>
                </div>
            </div>
        </div>
    `;

    // Obtenemos el contenedor principal
    var tablero = document.getElementById("tablero");

    // Limpiamos su contenido actual
    tablero.innerHTML = '';

    // Agregamos el contenedor de resultados al contenedor principal
    tablero.appendChild(containerResultado);
}



function actualizarPuntaje(opcion) {
    puntaje += puntajePorOpcion[i][opcion];
    i++;
    if (i < imagenes.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
}

// Esto se ejecuta una vez apenas carga el archivo
mostrarPregunta();

// Se ejecuta constantemente al hacer clic en una opción
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(0);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(3);
});

// MODO OSCURO/CLARO
function switchTheme() {
    const toggleSwitch = document.getElementById('darkModeToggle');
    const container = document.querySelector(".circle-red");
    
    if (toggleSwitch.checked) {
      document.querySelector('.main-container').classList.add('bg-dark-toggle');
      container.classList.add("sign-up-mode");
      localStorage.setItem('theme', 'dark');
    } else {
      document.querySelector('.main-container').classList.remove('bg-dark-toggle');
      container.classList.remove("sign-up-mode");
      localStorage.setItem('theme', 'light');
    }
  }
  
  const toggleSwitch = document.getElementById('darkModeToggle');
  toggleSwitch.addEventListener('change', switchTheme);
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true; 
  }
  switchTheme();
