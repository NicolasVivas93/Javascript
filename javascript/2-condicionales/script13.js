/* EJERCICIO 1 
Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo. */

let numero1 = parseInt(prompt('INGRESE NUMERO 1'));
let numero2 = parseInt(prompt('INGRESE NUMERO 2'));

let suma = numero1 + numero2;
let diferencia = numero1 - numero2;
let producto = numero1 * numero2;
let division = numero1 / numero2;

if (numero1 > numero2) {
    document.write(`SUMA: ${suma}`);
    document.write('<br>');
    document.write(`DIFERENCIA: ${diferencia}`);
} else {
    document.write(`PRODUCTO: ${producto}`);
    document.write('<br>');
    document.write(`DIVISION: ${division}`);
}
