const productos = [
    {id: 1, nombre: "audifonos", precio: 100},
    {id: 2, nombre: "parlante", precio: 200},
    {id: 3, nombre: "reloj", precio: 300},
]

let carrito = localCarritoFromLocalStorage ();

function agregarCarrito (productoId, cantidad) {
    const producto = productos.find(item => item.id === productoId);

    const sumarProducto = carrito.find(prod => prod.id === productoId);
    if(sumarProducto){
        sumarProducto.cantidad += cantidad;
        sumarProducto.subTotal = sumarProducto.precio * sumarProducto.cantidad;
    } else {
        carrito.push(
            {
                id: productoId,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: cantidad,
                subTotal: producto.precio * cantidad
            }
        )
    }

    saveCartToLocalStorage();
    renderCart();

}

function renderProducts() {
    const listaProductos = document.querySelector("#lista-de-productos");
    listaProductos.innerHTML = " ";
    productos.forEach(itemp => {
        const productoDiv = document.createElement("div");
        productoDiv.innerHTML = `
                <p>${itemp.nombre} - ${itemp.precio}</p>
                <button onclick="agregarCarrito(${itemp.id},1)">Agregar al carrito</button
                `;
                listaProductos.appendChild(productoDiv);
    })
}

function renderCart() {
    const carritoDiv = document.querySelector("#carrito");
    carritoDiv.innerHTML = " ";
    carrito.forEach (p => {
        const carritoItemDiv = document.createElement("div");
        carritoItemDiv.innerHTML = `
                <p>Nombre: ${p.nombre}, Cantidad: ${p.cantidad}, Precio Total: S/${p.subTotal}</p>
                `;
                carritoDiv.appendChild(carritoItemDiv);
    })
}

function saveCartToLocalStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function localCarritoFromLocalStorage () {
    const carritoData = localStorage.getItem("carrito");
    return carritoData ? JSON.parse(carritoData) : [];
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCart();
});


const vaciarCarrito = document.querySelector("#vaciar");
const vaciarBtn = document.createElement("button");
function carritoVacio () {
    carrito.innerHTML = " ";
    localStorage.clear();
}
vaciarBtn.addEventListener('click', carritoVacio);
vaciarBtn.innerHTML = "Vaciar carrito";
vaciarCarrito.appendChild(vaciarBtn);