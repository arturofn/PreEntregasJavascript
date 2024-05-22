// Simulador de Préstamos

let montoPrestamo = prompt("ingresa el monto que deseas solicitar");
let numeroCuotas = prompt("ingresa el numero de cuotas que deseas pagar");
const montoPorCuota = montoPrestamo/numeroCuotas;

if (numeroCuotas <= 5) {

}

console.log(montoPorCuota);
alert("El monto por cuota seria: " + montoPorCuota);