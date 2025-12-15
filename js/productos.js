const productos = [
    { nombre: "Producto 1", precio: "$10.000" },
    { nombre: "Producto 2", precio: "$500" },
    { nombre: "Producto 3", precio: "$5.850" },
    { nombre: "Producto 4", precio: "$2.100" },
    { nombre: "Producto 5", precio: "$3.100" },
    { nombre: "Producto 6", precio: "$14.850" }
];

let contenedorProductos = document.querySelector("#contenedor-productos");

productos.forEach(
    function (producto) {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("card");

        const nombreProducto = document.createElement("h3");
        nombreProducto.textContent = producto.nombre;

        const precioProducto = document.createElement("p");
        precioProducto.textContent = producto.precio;

        tarjeta.appendChild(nombreProducto);
        tarjeta.appendChild(precioProducto);

        contenedorProductos.appendChild(tarjeta);
    }
);