class DetalleVenta {
    constructor(producto, precio, cant, total) {
    this.producto = producto
    this.precio = precio
    this.cant = cant
    this.total = total
    }
}

let carritoCompras = []

let booleana = false

while (booleana == false){
    let detalle = new DetalleVenta()
    detalle.producto = prompt("ingresa el nombre del producto | Si no deseas ingresar escribe no");
    if (detalle.producto == "no") {
        booleana = true
    } else {
        detalle.cant = prompt("ingresa la cantidad");
        detalle.precio = prompt("ingresa el precio");
        detalle.total = detalle.cant * detalle.precio;
        carritoCompras.push(detalle);
    }
}

console.log('El carrito', carritoCompras);

const tituloH1 = document.getElementById('titulo');
tituloH1.innerText = "Carrito de compras";

//Pendientes:
//imprimir titulo - CARRITO DE COMPRAS
// map -> Imprimir Producto - Cantidad - Precio - Total
// suma de los totales
//El total de la venta es: TOTAL