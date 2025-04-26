
function encontrarMaximo(arreglo) {
    // Caso base: si el arreglo tiene un solo elemento, ese es el máximo
    if (arreglo.length === 1) {
        return arreglo[0];
    }

    // Dividir el arreglo en dos mitades
    const mitad = Math.floor(arreglo.length / 2);
    const izquierda = arreglo.slice(0, mitad);
    const derecha = arreglo.slice(mitad);

    // Llamadas recursivas para encontrar el máximo en cada mitad
    const maxIzquierda = encontrarMaximo(izquierda);
    const maxDerecha = encontrarMaximo(derecha);

    // Comparar ambos máximos y devolver el mayor
    return Math.max(maxIzquierda, maxDerecha);
}

// Manejador del formulario
document.getElementById('formMaximo').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener el valor del input y convertirlo en un arreglo de números
    const input = document.getElementById('numeros').value;
    const arreglo = input
        .split(',')
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));

    // Validar que haya al menos un número válido
    if (arreglo.length === 0) {
        document.getElementById('resultado').textContent = 'Por favor ingresa al menos un número válido.';
        return;
    }

    // Encontrar el máximo usando divide and conquer
    const maximo = encontrarMaximo(arreglo);

    // Mostrar el resultado
    const contenedor = document.getElementById('resultado');
    contenedor.innerHTML = `
        <div class="viaje">
            <p><strong>Número máximo:</strong> ${maximo}</p>
        </div>
    `;

    // Resetear el formulario
    this.reset();
});
