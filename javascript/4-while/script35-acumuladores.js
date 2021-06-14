
/* Desarrollar un programa que permita la carga de 5 valores por teclado y nos muestre posteriormente la suma acumulada. */

let contador = 1;
let suma = 0;

while (contador <=5) {
    let num = parseInt(prompt('INGRESE NUMERO'));  
    suma = suma + num;
    contador++;
}
document.write(`TOTAL ACUMULADO: ${suma}`);










