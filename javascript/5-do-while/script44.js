/* EJERCICIO 1  
Realizar un programa que acumule (sume) valores ingresados por teclado hasta ingresa el 9999 (no sumar dicho valor, solamente indica que ha finalizado la carga). Imprimir el valor acumulado e informar si dicho valor es cero, mayor a cero o menor a cero. */

let numero;
let acumulador = 0;

do {
    numero = parseInt(prompt('INGRESE NUMERO (9999 para finalizar)'));

    if (numero != 9999) {
        acumulador = acumulador + numero;
    }
} while (numero !=9999);

document.write(`VALOR ACUMULADO: ${acumulador}`, '<br>');

if (acumulador == 0) {
    document.write('EL VALOR ES IGUAL A CERO');
} else if (acumulador > 0) {
    document.write('EL VALOR ES MAYOR A CERO');
} else {
    document.write('EL VALOR ES MENOR A CERO');
}


 
