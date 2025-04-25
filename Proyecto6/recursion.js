
function buscarRegaloRecursivo(lista, regalo, indice) {
    // Caso base: llegamos al final de la lista sin encontrar el regalo
    if (indice === lista.length) {
        return -1;
    }

    // Si el elemento actual coincide con el regalo buscado, devolvemos su posición
    if (lista[indice].trim().toLowerCase() === regalo.trim().toLowerCase()) {
        return indice;
    }

    // Sino, hacemos la llamada recursiva al siguiente índice
    return buscarRegaloRecursivo(lista, regalo, indice + 1);
}

// Manejador del formulario
document.getElementById('formRegalos').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener y procesar la lista de regalos
    const textoLista = document.getElementById('listaRegalos').value;
    const listaRegalos = textoLista
        .split(',')
        .map(item => item.trim())
        .filter(item => item !== '');

    // Obtener el regalo a buscar
    const regaloBuscado = document.getElementById('regaloBuscado').value.trim();

    // Llamar a la función recursiva a partir del índice 0
    const posicion = buscarRegaloRecursivo(listaRegalos, regaloBuscado, 0);

    // Mostrar el resultado en la página
    const contenedor = document.getElementById('resultado');
    contenedor.innerHTML = ''; // limpiar mensaje previo

    if (posicion >= 0) {
        contenedor.innerHTML = `
            <div class="viaje">
                <p><strong>¡Regalo encontrado!</strong></p>
                <p>El regalo "<em>${regaloBuscado}</em>" está en la posición ${posicion + 1}.</p>
            </div>
        `;
    } else {
        contenedor.textContent = `El regalo "${regaloBuscado}" no está en la lista.`;
    }

    // Resetear formulario
    this.reset();
});
