// Función para guardar los valores seleccionados en localStorage
function guardarSeleccion(nombreGrupo, valorSeleccionado) {
    // Guardar los valores en localStorage
    localStorage.setItem(nombreGrupo, valorSeleccionado);
    console.log(`Valor ${valorSeleccionado} de ${nombreGrupo} guardado en localStorage.`);
}

// Obtener los elementos de los radio buttons
const radioTiempo = document.querySelectorAll('input[name="tiempo"]');
const radioPiel = document.querySelectorAll('input[name="piel"]');
const radioRango = document.querySelectorAll('input[name="rango"]');

console.log("Elementos de radio para tiempo:", radioTiempo);
console.log("Elementos de radio para piel:", radioPiel);
console.log("Elementos de raadio para rango:", radioRango);

// Escuchar el evento change en los radio buttons y llamar a la función guardarSeleccion
radioTiempo.forEach(radio => radio.addEventListener('change', () => guardarSeleccion('tiempo', radio.value)));
radioPiel.forEach(radio => radio.addEventListener('change', () => guardarSeleccion('piel', radio.value)));
radioRango.forEach(radio => radio.addEventListener('change', () => guardarSeleccion('rango', radio.value)));


// Cargar datos del JSON y mostrar rutina correspondiente
const listaRutinas = document.querySelector("#listaRutinas");
let rutinasData = [];

fetch('datos.json')
    .then((res) => res.json())
    .then((data) => {
        rutinasData = data;
        console.log("Datos cargados del JSON:", rutinasData);
        mostrarRutina();
    })
    .catch((error) => {
        console.error('Error al cargar los datos:', error);
    });

function mostrarRutina() {
    const tiempoSeleccionado = localStorage.getItem('tiempo');
    const pielSeleccionada = localStorage.getItem('piel');
    const rangoSeleccionado = localStorage.getItem('rango');

    console.log("Tiempo seleccionado desde localStorage:", tiempoSeleccionado);
    console.log("Piel seleccionada desde localStorage:", pielSeleccionada);
    console.log("Rango seleccionado desde localStorage:", rangoSeleccionado);

    // Verificar si los valores obtenidos del localStorage no son null
    if (tiempoSeleccionado && pielSeleccionada && rangoSeleccionado) {
        const rutinaEncontrada = rutinasData.find(rutina => rutina.tiempo === tiempoSeleccionado && rutina.piel === pielSeleccionada && rutina.rango === rangoSeleccionado);

        console.log("Rutina encontrada:", rutinaEncontrada);

        if (rutinaEncontrada) {
            listaRutinas.innerHTML = ""; // Limpiar contenido actual
            const divRutina = document.createElement("div");
            divRutina.classList.add("rutina");

            // Verificar si es una rutina de mañana o de noche
            if (tiempoSeleccionado === 'mañana') {
                // Estructura HTML para rutina de mañana
                divRutina.innerHTML = `
                <div class="nombre-contenedor">
                    <div class="row">
                        <div clas="col-md-12">
                        <div class="card-body">
                        <h2 class="card-title">Rutina para ${tiempoSeleccionado} - Piel ${pielSeleccionada} - Rango ${rangoSeleccionado}</h2>
                        <p class="card-text">Según las características seleccionadas, la rutina ideal para ti es:</p>
                        </div>
                    <div>
                    <div class="row text-dark">
                        <div class="col-md-3">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h3 class="card-subtitle mb-2 text-muted">1.- Limpieza Facial Suave: ${rutinaEncontrada['Limpieza Facial Suave'].nombre}</h3>
                                <img src="${rutinaEncontrada['Limpieza Facial Suave'].img}" class="card-img-top" alt="Limpieza Facial Suave">
                                <p class="card-text">Descripción: ${rutinaEncontrada['Limpieza Facial Suave'].descripción}</p>
                                <p class="card-text">Información: ${rutinaEncontrada['Limpieza Facial Suave'].información}</p>
                                <p class="card-text">Precio: ${rutinaEncontrada['Limpieza Facial Suave'].precio}</p>
                                <a href="${rutinaEncontrada['Limpieza Facial Suave'].tienda}" class="btn btn-primary" target="_blank">Cómpralo aquí</a>
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div class="col-md-3">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h3 class="card-subtitle mb-2 text-muted">2.- Hidratación Intensa: ${rutinaEncontrada['Hidratación Intensa'].nombre}</h3>
                                <img src="${rutinaEncontrada['Hidratación Intensa'].img}" class="card-img-top" alt="Hidratación Intensa">
                                <p class="card-text">Descripción: ${rutinaEncontrada['Hidratación Intensa'].descripción}</p>
                                <p class="card-text">Información: ${rutinaEncontrada['Hidratación Intensa'].información}</p>
                                <p class="card-text">Precio: ${rutinaEncontrada['Hidratación Intensa'].precio}</p>
                                <a href="${rutinaEncontrada['Hidratación Intensa'].tienda}" class="btn btn-primary" target="_blank">Cómpralo aquí</a>
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div class="col-md-3">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h3 class="card-subtitle mb-2 text-muted">3.- Tratamiento Reparador: ${rutinaEncontrada['Tratamiento Reparador'].nombre}</h3>
                                <img src="${rutinaEncontrada['Tratamiento Reparador'].img}" class="card-img-top" alt="Tratamiento Reparador">
                                <p class="card-text">Descripción: ${rutinaEncontrada['Tratamiento Reparador'].descripción}</p>
                                <p class="card-text">Información: ${rutinaEncontrada['Tratamiento Reparador'].información}</p>
                                <p class="card-text">Precio: ${rutinaEncontrada['Tratamiento Reparador'].precio}</p>
                                <a href="${rutinaEncontrada['Tratamiento Reparador'].tienda}" class="btn btn-primary" target="_blank">Cómpralo aquí</a>
                            </li>
                            </ul>
                        </div>
                        </div>

                        <div class="col-md-3">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <h3 class="card-subtitle mb-2 text-muted">4.- Protección Solar Diaria: ${rutinaEncontrada['Protección Solar Diaria'].nombre}</h3>
                                <img src="${rutinaEncontrada['Protección Solar Diaria'].img}" class="card-img-top" alt="Protección Solar Diaria">
                                <p class="card-text">Descripción: ${rutinaEncontrada['Protección Solar Diaria'].descripción}</p>
                                <p class="card-text">Información: ${rutinaEncontrada['Protección Solar Diaria'].información}</p>
                                <p class="card-text">Precio: ${rutinaEncontrada['Protección Solar Diaria'].precio}</p>
                                <a href="${rutinaEncontrada['Protección Solar Diaria'].tienda}" class="btn btn-primary" target="_blank">Cómpralo aquí</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>

                `;
            } else if (tiempoSeleccionado === 'noche') {
                // Estructura HTML para rutina de noche
                if (rutinaEncontrada['Limpieza Facial Suave'] && rutinaEncontrada['Hidratación Intensa'] && rutinaEncontrada['Tratamiento Reparador'] && rutinaEncontrada['Hidratación Adicional (Opcional)']) {
                    divRutina.innerHTML = `
                    <div class="nombre-contenedor">
                    <div>
                        <div>
                            <h2 class="videojuego-tittle">Rutina para ${tiempoSeleccionado} - Piel ${pielSeleccionada} - Rango ${rangoSeleccionado}</h2>
                            <p>Según las características seleccionadas, la rutina ideal para ti es:</p>
                        </div>
                        <div class="producto">
                            <h3>1.- Limpieza Facial Suave:</h3>
                            <img src="${rutinaEncontrada['Limpieza Facial Suave'].img}" alt="Limpieza Facial Suave">
                            <p>Nombre: ${rutinaEncontrada['Limpieza Facial Suave'].nombre}</p>
                            <p>Descripción: ${rutinaEncontrada['Limpieza Facial Suave'].descripción}</p>
                            <p>Información: ${rutinaEncontrada['Limpieza Facial Suave'].información}</p>
                            <p>Precio: ${rutinaEncontrada['Limpieza Facial Suave'].precio}</p>
                            <a class="game_url" href="${rutinaEncontrada['Limpieza Facial Suave'].tienda}" target="_blank">Cómpralo aquí</a>
                        </div>
                        <div class="producto">
                            <h3>2.- Hidratación Intensa:</h3>
                            <img src="${rutinaEncontrada['Hidratación Intensa'].img}" alt="Hidratación Intensa">
                            <p>Nombre: ${rutinaEncontrada['Hidratación Intensa'].nombre}</p>
                            <p>Descripción: ${rutinaEncontrada['Hidratación Intensa'].descripción}</p>
                            <p>Información: ${rutinaEncontrada['Hidratación Intensa'].información}</p>
                            <p>Precio: ${rutinaEncontrada['Hidratación Intensa'].precio}</p>
                            <a class="game_url" href="${rutinaEncontrada['Hidratación Intensa'].tienda}" target="_blank">Cómpralo aquí</a>
                        </div>
                        <div class="producto">
                            <h3>3.- Tratamiento Reparador:</h3>
                            <img src="${rutinaEncontrada['Tratamiento Reparador'].img}" alt="Tratamiento Reparador">
                            <p>Nombre: ${rutinaEncontrada['Tratamiento Reparador'].nombre}</p>
                            <p>Descripción: ${rutinaEncontrada['Tratamiento Reparador'].descripción}</p>
                            <p>Información: ${rutinaEncontrada['Tratamiento Reparador'].información}</p>
                            <p>Precio: ${rutinaEncontrada['Tratamiento Reparador'].precio}</p>
                            <a class="game_url" href="${rutinaEncontrada['Tratamiento Reparador'].tienda}" target="_blank">Cómpralo aquí</a>
                        </div>
                        <div class="producto">
                            <h3>4.- Hidratación Adicional (Opcional):</h3>
                            <img src="${rutinaEncontrada['Hidratación Adicional (Opcional)'].img}" alt="Protección Solar Diaria">
                            <p>Nombre: ${rutinaEncontrada['Hidratación Adicional (Opcional)'].nombre}</p>
                            <p>Descripción: ${rutinaEncontrada['Hidratación Adicional (Opcional)'].descripción}</p>
                            <p>Información: ${rutinaEncontrada['Hidratación Adicional (Opcional)'].información}</p>
                            <p>Precio: ${rutinaEncontrada['Hidratación Adicional (Opcional)'].precio}</p>
                            <a class="game_url" href="${rutinaEncontrada['Hidratación Adicional (Opcional)'].tienda}" target="_blank">Cómpralo aquí</a>
                        </div>
                    </div>
                </div>
                    `;
                } else {
                    listaRutinas.innerHTML = "<p>No se encontró una rutina para los criterios seleccionados.</p>";
                }
            }

            listaRutinas.append(divRutina);
        } else {
            listaRutinas.innerHTML = "<p>No se encontró una rutina para los criterios seleccionados.</p>";
        }
    } else {
        console.error("Al menos uno de los valores obtenidos del localStorage es null.");
    }
}

// Función para abrir o cerrar la ventana emergente
function toggleVentana(idVentana) {
    var ventana = document.getElementById(idVentana);
    if (ventana.style.display === 'block') {
      cerrarVentana(idVentana);
    } else {
      abrirVentana(idVentana);
    }
  }
  
  // Función para abrir la ventana emergente
  function abrirVentana(idVentana) {
    document.getElementById(idVentana).style.display = 'block';
  }
  
  // Función para cerrar la ventana emergente
  function cerrarVentana(idVentana) {
    document.getElementById(idVentana).style.display = 'none';
  }