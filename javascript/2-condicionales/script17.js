/* EJERCICIO 1
Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos. */

let numero1 = parseInt(prompt('INGRESE NUMERO 1'));
let numero2 = parseInt(prompt('INGRESE NUMERO 2'));
let numero3 = parseInt(prompt('INGRESE NUMERO 3'));

document.write(numero1);
document.write('<br>');
document.write(numero2);
document.write('<br>');
document.write(numero3);
document.write('<br>');

if (numero1 > numero2 && numero1 > numero3) {
    document.write(`EL MAYOR ES ${numero1}`);
} else {
    if (numero2 > numero1 && numero2 > numero3) {
        document.write(`EL MAYOR ES ${numero2}`);
    } else {
        document.write(`EL MAYOR ES ${numero3}`);
    }
}

document.write('<br>');
document.write('<br>');

let num1 = Math.random();
let num2 = Math.random();
let num3 = Math.random();

document.write(num1);
document.write('<br>');
document.write(num2);
document.write('<br>');
document.write(num3);
document.write('<br>');

if (num1 > num2 && num1 > num3) {
    document.write(`EL MAYOR ES ${num1}`);
} else {
    if (num2 > num1 && num2 > num3) {
        document.write(`EL MAYOR ES ${num2}`);
    } else {
        document.write(`EL MAYOR ES ${num3}`);
    }
}
