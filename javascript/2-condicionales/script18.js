/* EJERCICIO 2

Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, cero o negativo. */

let num1 = parseInt(prompt('INGRESE NUMERO'));

if (num1 > 0) {
    document.write('NUMERO POSITIVO');
} else {
    if (num1 === 0) {
        document.write('NUMERO IGUAL A 0');
    } else {
        document.write('NUMERO NEGATIVO');
    }
}