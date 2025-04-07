// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
function registrarDestino(destino, fecha, transporte) {
    // Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
    mostrarItinerario();
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
    }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }

    return costoBase;
};

// Función para mostrar el itinerario de los viajes registrados en la página
function mostrarItinerario() {
    const contenedor = document.getElementById("itinerario");
    contenedor.innerHTML = ""; // Limpiar contenido previo

    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        contenedor.innerHTML += `
            <div class="viaje">
                <p><strong>Destino:</strong> ${viaje.destino}</p>
                <p><strong>Fecha:</strong> ${viaje.fecha}</p>
                <p><strong>Transporte:</strong> ${viaje.transporte}</p>
                <p><strong>Costo:</strong> $${viaje.costo}</p>
            </div>
        `;
    }
}

// Manejo del envío del formulario
document.getElementById("formRegistro").addEventListener("submit", (e) => {
    e.preventDefault();
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fecha").value;
    const transporte = document.getElementById("transporte").value;

    registrarDestino(destino, fecha, transporte);
    e.target.reset(); // Reiniciar formulario
});
