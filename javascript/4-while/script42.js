/* EJERCICIO 7
Desarrollar un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares y cuántos impares.
Emplear el operador "%" en la condición de la estructura condicional.
	if (valor%2==0)
El operador "%" retorna el resto de la división valor / 2. Por ejemplo: 12 % 2, retorna 0; 13 % 2, retorna 1, porque el resto de dividir 13 en 2 es 1.*/

let contador = 1;

let acumPares = 0;
let acumImpares = 0;

while (contador <= 5) {
	let numero = parseInt(prompt('INGRESE NUMERO'));
	if (numero % 2 == 0) {
		acumPares = acumPares + 1;
	} else {
		acumImpares = acumImpares + 1;
	}
	contador ++;
}

document.write(`NUMEROS PARES: ${acumPares}`, '<br>', `NUMEROS IMPARES: ${acumImpares}`);









