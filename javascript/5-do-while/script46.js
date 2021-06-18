/* EJERCICIO 3
Se realizó un censo provincial y se desea procesar la información obtenida en dicho censo. De cada una de las personas censadas se tiene la siguiente información: número de documento, edad y sexo ('femenino' o 'masculino')
Se pide confeccionar un programa que lea los datos de cada persona censada (para finalizar ingresar el valor cero en el número de documento) e informar:
 
a)	Cantidad total de personas censadas.
b)	Cantidad de varones.
c)	Cantidad de mujeres.
d)	Cantidad de varones cuya edad varía entre 16 y 65 años. */

let documento;
let edad; 
let sexo;

let totalPersonas = 0; // PUNTO A
let varones = 0; // PUNTO B
let mujeres = 0; // PUNTO C
let varones16Y65 = 0; // PUNTO D

totalPersonas++;

do {
    documento = parseInt(prompt('INGRESE DOCUMENTO'));
    edad = parseInt(prompt('INGRESE EDAD'));
    sexo = prompt('INGRESE SEXO');

    if (documento != 0) {
        totalPersonas = totalPersonas + 1;
        if (sexo == 'masculino') {
            varones = varones + 1;
        } else {
            
        }

    }
} while (documento != 0);














