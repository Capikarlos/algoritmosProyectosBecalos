// invitados.js

// Función que implementa el algoritmo de dos punteros
function encontrarPareja(arr) {
    let punteroInicio = 0;
    let punteroSiguiente = 1;

    while (punteroSiguiente < arr.length) {
        const inicialInicio = arr[punteroInicio].trim().charAt(0).toLowerCase();
        const inicialSiguiente = arr[punteroSiguiente].trim().charAt(0).toLowerCase();

        if (inicialInicio === inicialSiguiente) {
            // Regresa el par encontrado
            return [arr[punteroInicio].trim(), arr[punteroSiguiente].trim()];
        }

        // Avanza ambos punteros
        punteroInicio++;
        punteroSiguiente++;
    }

    // Si no hay coincidencias
    return null;
}

// Manejo del envío del formulario
document.getElementById("formInvitados").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("lista").value;
    // Separa por comas y filtra entradas vacías
    const listaInvitados = input.split(',').map(n => n.trim()).filter(n => n !== '');

    const resultado = encontrarPareja(listaInvitados);
    const contenedor = document.getElementById("resultado");
    contenedor.innerHTML = ''; // limpia mensaje anterior

    if (resultado) {
        contenedor.innerHTML = `
            <div class="pareja">
                <p><strong>Pareja encontrada:</strong></p>
                <p>${resultado[0]} y ${resultado[1]}</p>
            </div>
        `;
    } else {
        contenedor.textContent = 'No se encontró ningún par de invitados consecutivos con la misma inicial.';
    }

    this.reset();
});
