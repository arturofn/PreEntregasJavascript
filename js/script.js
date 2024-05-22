// Simulador de Préstamos

let montoPrestamo = prompt("ingresa el monto que deseas solicitar");
let numeroCuotas = prompt("ingresa el numero de cuotas que deseas pagar");
let montoPorCuota = montoPrestamo/numeroCuotas;

if (numeroCuotas <= 5) {
    montoPorCuota = montoPorCuota + montoPorCuota * 0.05;
} else {
    montoPorCuota = montoPorCuota + montoPorCuota * 0.10;
}

console.log(montoPorCuota);
alert("El monto por cuota seria: " + montoPorCuota);