// Productos (puedes agregar o modificar)
const productosData = [
    {
        id: 1,
        nombre: "Auriculares Inalámbricos",
        categoria: "electronica",
        descripcion: "Auriculares bluetooth con cancelación de ruido.",
        imagen: "auriculares.jpg",
        precio: 59.99
    },
    {
        id: 2,
        nombre: "Camiseta Deportiva",
        categoria: "ropa",
        descripcion: "Camiseta cómoda y transpirable para deporte.",
        imagen: "camiseta.jpg",
        precio: 19.99
    },
    {
        id: 3,
        nombre: "Lámpara de Mesa",
        categoria: "hogar",
        descripcion: "Lámpara moderna para escritorio con luz regulable.",
        imagen: "lampara.jpg",
        precio: 34.99
    },
    {
        id: 4,
        nombre: "Smartwatch",
        categoria: "electronica",
        descripcion: "Reloj inteligente con múltiples funciones.",
        imagen: "smartwatch.jpg",
        precio: 129.99
    },
];

// Referencias DOM
const contenedorProductos = document.getElementById("productos");
const enlacesCategorias = document.querySelectorAll(".sidebar a");

// Función para renderizar productos
function mostrarProductos(productos) {
    contenedorProductos.innerHTML = "";
    productos.forEach(prod => {
        const productoElem = document.createElement("article");
        productoElem.classList.add("producto");
        productoElem.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.descripcion}</p>
            <button data-id="${prod.id}">Comprar - $${prod.precio.toFixed(2)}</button>
        `;
        contenedorProductos.appendChild(productoElem);
    });

    // Añadir evento a botones de compra
    document.querySelectorAll(".producto button").forEach(btn => {
        btn.addEventListener("click", e => {
            const id = e.target.dataset.id;
            const producto = productosData.find(p => p.id == id);
            alert(`¡Has agregado al carrito: ${producto.nombre} por $${producto.precio.toFixed(2)}!`);
        });
    });
}

// Filtrar productos por categoría
enlacesCategorias.forEach(enlace => {
    enlace.addEventListener("click", e => {
        e.preventDefault();
        const categoria = enlace.dataset.category;
        if (categoria === "all") {
            mostrarProductos(productosData);
        } else {
            const filtrados = productosData.filter(p => p.categoria === categoria);
            mostrarProductos(filtrados);
        }
    });
});

// Inicializar mostrando todos los productos
mostrarProductos(productosData);
