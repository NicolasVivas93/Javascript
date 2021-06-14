/* EJERCICIO 4
Realizar un programa que imprima 20 términos de la serie 5 - 10 - 15 - 20, etc. (No se ingresan valores por teclado) */

let contador = 1;

while (contador <= 20) {
    let calculo = contador * 5;
    document.write(calculo, '<br>');
    contador++;
}

