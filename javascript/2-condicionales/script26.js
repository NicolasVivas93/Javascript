/* EJERCICIO 4
Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y.
Posteriormente imprimir en pantalla en qué cuadrante se ubica dicho punto. (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.) */

let x = parseInt(prompt('INGRESE COORDENADA X'));
let y = parseInt(prompt('INGRESE COORDENADA Y'));

if (x > 0 && y > 0) {
    document.write('PRIMER CUADRANTE');
} else if (x < 0 && y > 0) {
    document.write('SEGUNDO CUADRANTE');
} else if (x < 0 && y < 0) {
    document.write('TERCER CUADRANTE');
} else {
    document.write('CUARTO CUADRANTE');
}