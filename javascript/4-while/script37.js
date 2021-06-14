/* EJERCICIO 2
Se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas. */

let contador = 1;
let sumaAlturas = 0; // acumulador

while (contador <= 5) {
    let altura = parseFloat(prompt('INGRESE ALTURA'));
    sumaAlturas = sumaAlturas + altura;
    contador++;
}

let promedio = sumaAlturas / 5;
document.write(`LA ALTURA PROMEDIO ES DE: ${promedio}`);









