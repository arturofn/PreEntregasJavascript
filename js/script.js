// Simulador de Préstamos

let montoPrestamo = prompt("ingresa el monto que deseas solicitar");
let numeroCuotas = prompt("ingresa el numero de cuotas que deseas pagar");

let miCuota = (montoPrestamo, numeroCuotas) => {
    let montoPorCuota = montoPrestamo/numeroCuotas;
    const interes1 = 0.05;
    const interes2 = 0.10;

    if (numeroCuotas <= 5) {
        montoPorCuota = montoPorCuota + montoPorCuota * interes1;
    } else {
        montoPorCuota = montoPorCuota + montoPorCuota * interes2;
    }

    return montoPorCuota;
}

let resultado = miCuota(montoPrestamo, numeroCuotas);

alert("El monto por cuota seria: " + resultado);

// Imprimiendo el monto y numero de orden de cada cuota

for (let numeroDeCuota=1; numeroDeCuota<=numeroCuotas; numeroDeCuota++) {
    alert("Cuota Nro" + " " + numeroDeCuota + " " + "es de" + " " + resultado);
}