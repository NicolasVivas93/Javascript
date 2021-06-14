/* 
Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menores a 10, imprimir en la página la leyenda 'Alguno de los números es menor a diez'. */

let num1 = parseInt(prompt('NUMERO 1'));
let num2 = Math.floor(Math.random() * (100-1)) + 1;
let num3 = Math.floor(Math.random() * (100-1)) + 1;

if (num1 < 10 || num2 < 10 || num3 < 10) {
    document.write('Alguno de los números es menor a diez');
}
document.write('<br>');
document.write(`NUM1: ${num1}           NUM2: ${num2}           NUM3: ${num3}`);