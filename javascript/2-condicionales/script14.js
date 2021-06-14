/* EJERCICIO 2
Se ingresan tres notas de un alumno, si el promedio es mayor o igual a 4 mostrar un mensaje 'regular', sino 'reprobado'. */

let nota1 = parseInt(prompt('NOTA 1'));
let nota2 = parseInt(prompt('NOTA 2'));
let nota3 = parseInt(prompt('NOTA 3'));

let promedio = (nota1+ nota2 + nota3)/3;

if (promedio >= 4) {
    document.write('ALUMNO REGULAR');
} else {
    document.write('ALUMNO REPROBADO');
}