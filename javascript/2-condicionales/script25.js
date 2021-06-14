/*EJERCICIO 3

Se ingresan por teclado tres números, si todos los valores ingresados son menores a 10, imprimir en la página la leyenda ' Todos los números son menores a diez'. */

let num1 = parseInt(prompt('NUMERO 1'));
let num2 = parseInt(prompt('NUMERO 2'));
let num3 = parseInt(prompt('NUMERO 3')); 

if (num1 < 10 && num2 < 10 && num3 < 10) {
    document.write('Todos los numeros son menores a diez');
}