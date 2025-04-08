

// Arreglo para guardar los productos
let listaDeCompras = [];


const agregarProducto = (producto) => {
    // Convertir a minúsculas para evitar duplicados con diferentes mayúsculas/minúsculas
    const productoNormalizado = producto.toLowerCase();
    if (!listaDeCompras.includes(productoNormalizado)) {
        listaDeCompras.push(productoNormalizado);
    } else {
        alert("El producto ya existe en la lista.");//ya esta el producto
    }
    mostrarLista();
};


const eliminarProducto = (producto) => {
    // Filtra el arreglo para eliminar el producto
    listaDeCompras = listaDeCompras.filter(item => item !== producto);
    mostrarLista();
};

/*** Muestra la lista de productos en la página web.*/
const mostrarLista = () => {
    const contenedor = document.getElementById("lista");
    contenedor.innerHTML = ""; // Limpiar lista anterior

    // Recorrer la lista y crear un contenedor para cada producto
    listaDeCompras.forEach((producto) => {
        contenedor.innerHTML += `
            <div class="producto">
                <span>${producto}</span>
                <button onclick="eliminarProducto('${producto}')">Eliminar</button>
            </div>
        `;
    });
};

// Manejo del envío del formulario
document.getElementById("formProducto").addEventListener("submit", (e) => {
    e.preventDefault();
    const producto = document.getElementById("producto").value;
    if (producto.trim() !== "") {
        agregarProducto(producto.trim());
        e.target.reset(); //limpiar el formulario tras agregar
    }
});
