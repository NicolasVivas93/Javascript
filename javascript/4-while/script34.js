/* EJERCICIO 2
Mostrar los múltiplos de 8 hasta el valor 500. Debe aparecer en pantalla 8 -16 -24, etc. */

let contador = 1;

while (contador <= 500) {
    let calculo = contador * 8;
    document.write(calculo);
    document.write('<br>');
    contador = contador +1;
}
