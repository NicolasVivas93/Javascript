/* EJERCICIO 5

De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe
a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
b) Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios. */

let sueldo = parseInt(prompt('INGRESE SUELDO'));
let aniosAntiguedad = parseInt(prompt('INGRESE ANTIGUEDAD'));
let sueldoAPagar;

if (sueldo < 500 && aniosAntiguedad >= 10) {
    sueldoAPagar = (sueldo * 0.20) + sueldo;
    document.write(`TOTAL A PAGAR: $ ${sueldoAPagar}`);
} else if (sueldo < 500 && aniosAntiguedad < 10) {
    sueldoAPagar = (sueldo * 0.05) + sueldo;
    document.write(`TOTAL A PAGAR: $ ${sueldoAPagar}`);
} else {
    document.write(`TOTAL A PAGAR: $ ${sueldo}`);
}
