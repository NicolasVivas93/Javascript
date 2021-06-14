/* EJERCICIO 1
Realizar un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44, etc. (No se ingresan valores por teclado). */

let contador = 11;

while (contador >= 11 && contador <= 275) {
    document.write(contador);
    document.write('<br>');
    contador = contador + 11;    
}