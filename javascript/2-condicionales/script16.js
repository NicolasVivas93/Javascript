/* Confeccionar un programa que pida por teclado tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes:

Si el promedio es >=7 mostrar "Promocionado".
Si el promedio es >=4 y <7 mostrar "Regular".
Si el promedio es <4 mostrar "Reprobado".   */

let nota1 = parseInt(prompt('INGRESE NOTA'));
let nota2 = parseInt(prompt('INGRESE NOTA'));
let nota3 = parseInt(prompt('INGRESE NOTA'));

let promedio = (nota1 + nota2 + nota3)/3;

if (promedio >= 7) {
    document.write('PROMOCIONADO');
} else {
    if (promedio >= 4 && promedio < 7) {
        document.write('REGULAR');
    } else {
        document.write('REPROBADO');
    }
}