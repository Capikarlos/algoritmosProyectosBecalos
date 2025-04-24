// Arreglo que esta en el link
const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" }
];

// use filter() para obtener los productos que cuesten menos de $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos con precio menor a $100:", productosBaratos);

//ordenar alfabéticamente los productos por su nombre
const productosOrdenados = productosBaratos.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:", productosOrdenados);

// map() para generar un nuevo arreglo que contenga solo los nombres de los productos filtrados y ordenados
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

//calcular el precio total de los productos filtrados
const precioTotal = productosBaratos.reduce((total, producto) => total + producto.precio, 0);
console.log("Precio total de productos baratos:", precioTotal);

//comprobar si existe algún producto en la categoría "Educación"
const existeEducacion = productos.some(producto => producto.categoria === "Educación");
console.log("¿Existe algún producto en 'Educación'?", existeEducacion);

//para verificar si todos los productos tienen un precio menor a $1000
const todosBaratos = productos.every(producto => producto.precio < 1000);
console.log("¿Todos los productos cuestan menos de $1000?", todosBaratos);
