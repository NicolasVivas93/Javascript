/* EJERCICIO 3
En una empresa trabajan 5 empleados cuyos sueldos oscilan entre $100 y $500, realizar un programa que lea los sueldos que cobra cada empleado e informe cuántos empleados cobran entre $100 y $300 y cuántos cobran más de $300. Además el programa deberá informar el importe que gasta la empresa en sueldos al personal.  */

let contador = 1;

let acumuladorEmpleados1 = 0;  // sueldos entre $100 y $300
let acumuladorEmpleados2 = 0;  // sueldos más de $300
let acumuladorSueldos = 0;

while (contador <=5) {
    let sueldo = parseInt(prompt('INGRESE SUELDO'));
    if (sueldo >= 100 && sueldo <= 300) { acumuladorEmpleados1 = acumuladorEmpleados1 + 1; } 
    if (sueldo > 300 && sueldo <= 500) { acumuladorEmpleados2 = acumuladorEmpleados2 + 1; } 
    acumuladorSueldos = acumuladorSueldos + sueldo;
    contador++;
}

document.write(`SUELDOS ENTRE $100 Y $300: ${acumuladorEmpleados1}`);
document.write('<br>');
document.write(`SUELDOS MAYORES A $300: ${acumuladorEmpleados2}`);
document.write('<br>');
document.write(`TOTAL SUELDOS: ${acumuladorSueldos}`);












