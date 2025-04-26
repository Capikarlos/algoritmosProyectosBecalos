// main.js

// Importamos recetas desde un archivo externo simulado
import { getRecipes } from "./services/recipes.js";

// Verificamos que los datos recibidos sean un arreglo
const recetas = Array.isArray(getRecipes()) ? getRecipes() : [];

// Referencias a elementos del DOM
const entradaIngrediente = document.getElementById("ingredient-input");
const contenedorRecetas    = document.getElementById("recipes");
const seleccionOrden       = document.getElementById("sort");
const botonSugerencia      = document.getElementById("suggestion-btn");

// Variables globales para autocompletado y análisis
let indiceSugerenciaActual = -1;
let sugerenciasActuales    = [];
let historialIngredientes   = [];

// =============================================
// UTIL: Búsqueda de subcadena manual (carácter a carácter)
// =============================================
function contieneSubcadena(texto, subcadena) {
    const longitudTexto     = texto.length;
    const longitudSubcadena = subcadena.length;
    for (let posInicio = 0; posInicio <= longitudTexto - longitudSubcadena; posInicio++) {
        let pos = 0;
        while (pos < longitudSubcadena && texto[posInicio + pos] === subcadena[pos]) {
            pos++;
        }
        if (pos === longitudSubcadena) {
            return true;
        }
    }
    return false;
}

// =============================================
// UTIL: Merge Sort genérico
// =============================================
function ordenarMezcla(arreglo, funcionComparacion) {
    if (arreglo.length <= 1) return arreglo;
    const puntoMedio     = Math.floor(arreglo.length / 2);
    const parteIzquierda = ordenarMezcla(arreglo.slice(0, puntoMedio), funcionComparacion);
    const parteDerecha   = ordenarMezcla(arreglo.slice(puntoMedio), funcionComparacion);

    const arregloOrdenado = [];
    let indiceIzq = 0;
    let indiceDer = 0;

    while (indiceIzq < parteIzquierda.length && indiceDer < parteDerecha.length) {
        if (funcionComparacion(parteIzquierda[indiceIzq], parteDerecha[indiceDer]) <= 0) {
            arregloOrdenado.push(parteIzquierda[indiceIzq]);
            indiceIzq++;
        } else {
            arregloOrdenado.push(parteDerecha[indiceDer]);
            indiceDer++;
        }
    }
    return arregloOrdenado
        .concat(parteIzquierda.slice(indiceIzq))
        .concat(parteDerecha.slice(indiceDer));
}

// =============================================
// UTIL: Encontrar receta de menor tiempo (Greedy simple)
// =============================================
function encontrarRecetaMasRapida(listadoRecetas) {
    let mejorReceta = listadoRecetas[0];
    for (let i = 1; i < listadoRecetas.length; i++) {
        if (listadoRecetas[i].tiempo < mejorReceta.tiempo) {
            mejorReceta = listadoRecetas[i];
        }
    }
    return mejorReceta;
}

// =============================================
// FUNCIÓN: Mostrar recetas en pantalla
// =============================================
function renderRecetas(lista) {
    contenedorRecetas.innerHTML = ""; // Limpiamos el contenedor

    lista.forEach((receta) => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "recipe-card";
        tarjeta.innerHTML = `
        <img src="${receta.imagen}" alt="${receta.nombre}" />
        <h3>${receta.nombre}</h3>
        <p><strong>Tiempo:</strong> ${receta.tiempo} min</p>
        <p>${receta.pasos}</p>
    `;
        contenedorRecetas.appendChild(tarjeta);
    });
}

// =============================================
// FUNCIÓN: Filtrar recetas por ingrediente
// =============================================
function filtrarPorIngrediente(ingrediente) {
    const minuscula = ingrediente.toLowerCase();
    return recetas.filter((receta) =>
        receta.ingredientes.some((ing) =>
            contieneSubcadena(ing.toLowerCase(), minuscula)
        )
    );
}

// =============================================
// FUNCIÓN: Actualizar historial y análisis
// =============================================
function actualizarHistorial(ingrediente) {
    historialIngredientes.push(ingrediente);

    // Sliding Window: mantenemos máximo 20 ingredientes
    if (historialIngredientes.length > 20) {
        historialIngredientes.shift();
    }

    // Mostrar en texto cuántos ingredientes únicos se han usado
    document.getElementById("analysis").textContent =
        `Usaste ${new Set(historialIngredientes).size} ingrediente${historialIngredientes.length > 1 ? 's' : ''} esta semana.`;

    actualizarSugerenciasRecientes();
}

// =============================================
// FUNCIÓN: Mostrar top ingredientes populares recientes
// =============================================
function actualizarSugerenciasRecientes() {
    const ultimasBusquedas = historialIngredientes.slice(-5); // últimas 5 búsquedas
    const frecuencia       = {};
    ultimasBusquedas.forEach((ing) => {
        frecuencia[ing] = (frecuencia[ing] || 0) + 1;
    });

    // Ordenar por frecuencia descendente y quedarnos con los top 3
    const masPopulares = Object.entries(frecuencia)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3)
        .map((entrada) => entrada[0]);

    const ul = document.getElementById("recent-suggestions");
    ul.innerHTML = "";
    masPopulares.forEach((ing) => {
        const li = document.createElement("li");
        li.textContent = ing;
        ul.appendChild(li);
    });
}

// =============================================
// FUNCIÓN: Mostrar sugerencias de autocompletado
// =============================================
function autocompletar(valor) {
    const divAuto = document.getElementById("autocomplete-list");
    divAuto.innerHTML = "";

    if (!valor) return;

    sugerenciasActuales = [...new Set(recetas.flatMap(r => r.ingredientes))]
        .filter((ing) => ing.toLowerCase().startsWith(valor.toLowerCase()))
        .slice(0, 5);

    indiceSugerenciaActual = -1;

    sugerenciasActuales.forEach((sug) => {
        const item = document.createElement("div");
        item.textContent = sug;
        item.classList.add("autocomplete-item");
        item.onclick = () => {
            entradaIngrediente.value = sug;
            entradaIngrediente.focus();
        };
        divAuto.appendChild(item);
    });
}

// =============================================
// FUNCIÓN: Buscar recetas y mostrarlas
// =============================================
function buscarYRenderizar() {
    const valor = entradaIngrediente.value.trim();
    if (!valor) return;

    const resultados = filtrarPorIngrediente(valor);
    actualizarHistorial(valor);
    renderRecetas(resultados);
}

// =============================================
// FUNCIÓN: Ordenar recetas por nombre o tiempo
// =============================================
function ordenarRecetas(tipo) {
    let recetasOrdenadas;

    if (tipo === "time") {
        recetasOrdenadas = ordenarMezcla(recetas, (a, b) => a.tiempo - b.tiempo);
    } else {
        recetasOrdenadas = ordenarMezcla(recetas, (a, b) => a.nombre.localeCompare(b.nombre));
    }

    renderRecetas(recetasOrdenadas);
}

// =============================================
// FUNCIÓN: Resaltar sugerencia seleccionada
// =============================================
function resaltarSugerencia(items) {
    items.forEach((item, idx) => {
        item.classList.toggle("active", idx === indiceSugerenciaActual);
    });
}

// =============================================
// EVENTOS
// =============================================
entradaIngrediente.addEventListener("input", (e) => {
    const valor = e.target.value.trim();
    autocompletar(valor);
    if (!valor) renderRecetas(recetas);
});

entradaIngrediente.addEventListener("keydown", (e) => {
    const items = document.querySelectorAll(".autocomplete-item");
    if (e.key === "ArrowDown") {
        e.preventDefault();
        if (indiceSugerenciaActual < items.length - 1) indiceSugerenciaActual++;
        resaltarSugerencia(items);
    } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (indiceSugerenciaActual > 0) indiceSugerenciaActual--;
        resaltarSugerencia(items);
    } else if (e.key === "Enter") {
        if (indiceSugerenciaActual >= 0 && items[indiceSugerenciaActual]) {
            entradaIngrediente.value = items[indiceSugerenciaActual].textContent;
            document.getElementById("autocomplete-list").innerHTML = "";
        }
        buscarYRenderizar();
    }
});

seleccionOrden.addEventListener("change", (e) => ordenarRecetas(e.target.value));

botonSugerencia.addEventListener("click", () => {
    const recetaMasRapida = encontrarRecetaMasRapida(recetas);
    renderRecetas([recetaMasRapida]);
});

// Render inicial de todas las recetas
renderRecetas(recetas);