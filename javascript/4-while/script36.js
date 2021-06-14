/* EJERCICIO 1
Escribir un programa que lea 10 notas de alumnos y nos informe cuántos tienen notas mayores o iguales a 7 y cuántos menores. */


let contador = 1;
let acumulador1 = 0;
let acumulador2 = 0;

while (contador <=3) {
    let nota   = parseInt(prompt('INGRESE NOTA'));
    if (nota >= 7) {
        acumulador1 = acumulador1 + 1;
    } else {
        acumulador2 = acumulador2 + 1;
    }
    contador++;
}

document.write(`NOTAS MAYORES A 7: ${acumulador1}`);
document.write('<br>');
document.write(`NOTAS MENORES A 7: ${acumulador2}`);