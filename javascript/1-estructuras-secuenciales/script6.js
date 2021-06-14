/* EJERCICIO 2 

Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del tercero y el cuarto. */

let num1 = prompt('INGRESE NUMERO 1'); 
let num2 = prompt('INGRESE NUMERO 2'); 
let num3 = prompt('INGRESE NUMERO 3'); 
let num4 = prompt('INGRESE NUMERO 4');

let suma = parseInt(num1) + parseInt(num2);
let producto = num3 * num4;

document.write(`SUMA: ${suma}`);
document.write('<br>');
document.write(`PRODUCTO: ${producto}`);

