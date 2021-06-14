/* EJERCICIO 3

Realizar un programa que lea cuatro valores numéricos e informar su suma y producto. */

let num1 = prompt('INGRESE NUMERO 1'); 
let num2 = prompt('INGRESE NUMERO 2'); 
let num3 = prompt('INGRESE NUMERO 3'); 
let num4 = prompt('INGRESE NUMERO 4');

let suma = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4);
let producto = num1 * num2 * num3 * num4;

document.write(`SUMA: ${suma}`);
document.write('<br>');
document.write(`PRODUCTO: ${producto}`);
