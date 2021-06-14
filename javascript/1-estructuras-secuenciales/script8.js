/* EJERCICIO 4

Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.) */

let precio = prompt('PRECIO ARTICULO');
let cantidad = prompt('CANTIDAD ARTICULO');

let totalAPagar = precio * cantidad;

document.write(`TOTAL A PAGAR: $ ${totalAPagar}`);