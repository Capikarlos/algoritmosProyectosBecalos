// Función que encuentra la palabra más larga usando Sliding Window
function encontrarPalabraMasLarga(texto) {
    // Paso 1: Dividir el texto en un arreglo de palabras
    const palabras = texto.split(' ').filter(p => p.trim() !== '');

    // Inicializar la palabra más larga como la primera
    let palabraMasLarga = palabras[0] || '';

    // Recorrer cada palabra (ventana de tamaño 1) y comparar longitudes
    for (let i = 1; i < palabras.length; i++) {
        const palabraActual = palabras[i];
        // Si la palabra actual es más larga, actualizar la ventana (palabraMasLarga)
        if (palabraActual.length > palabraMasLarga.length) {
            palabraMasLarga = palabraActual;
        }
    }

    return palabraMasLarga;
}

// Manejo del envío del formulario
document.getElementById('formTexto').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener el texto del usuario
    const textoIngresado = document.getElementById('textoUsuario').value.trim();

    const resultadoPalabra = encontrarPalabraMasLarga(textoIngresado);

    // Mostrar el resultado en la página
    const contenedorResultado = document.getElementById('resultado');
    contenedorResultado.innerHTML = ''; // limpiar contenido previo

    if (resultadoPalabra) {
        contenedorResultado.innerHTML = `
            <div class="viaje">
                <p><strong>Palabra más larga:</strong> ${resultadoPalabra}</p>
                <p><strong>Longitud:</strong> ${resultadoPalabra.length} caracteres</p>
            </div>
        `;
    } else {
        contenedorResultado.textContent = 'No se encontró ninguna palabra.';
    }

    // Resetear el formulario
    this.reset();
});
