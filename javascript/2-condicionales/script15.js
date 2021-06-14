/* EJERCICIO  3 
Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos (recordar de convertir a entero con parseInt para preguntar posteriormente por una variable entera). Tener en cuenta qué condición debe cumplirse para tener dos dígitos un número entero. */

let numero = parseInt(prompt('INGRESE NUMERO'));

if (numero >=1 && numero <10) {
    document.write('EL NUMERO TIENE UN DIGITO');
} else {
    document.write('EL NUMERO TIENE DOS DIGITOS');
}

