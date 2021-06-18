/* EJERCICIO 0
Escribir un programa que solicite la carga de un número entre 0 y 999, y nos muestre un mensaje de cuántos dígitos tiene el mismo. Finalizar el programa cuando se cargue el valor 0. */

let numero;

do {
    numero = parseInt(prompt('INGRESE NUMERO (0 para finalizar)'));
    if (numero !=0) {
        if (numero > 0 && numero < 10) {
            document.write(`EL NUMERO ${numero} TIENE UN DIGITO`, '<br>');
            } else if (numero >= 10 && numero < 100) {
            document.write(`EL NUMERO ${numero} TIENE DOS DIGITOS`, '<br>');
            } else if (numero >= 100 && numero <= 999) {
            document.write(`EL NUMERO ${numero} TIENE TRES DIGITOS`, '<br>');
            } else {
            document.write('NUMERO INVALIDO');
            }
    }
} while (numero != 0);



