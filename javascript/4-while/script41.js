/* EJERCICIO 6
Realizar un programa que permita cargar dos listas de 3 valores cada una. Informar con un mensaje cual de las dos listas tiene un valor acumulado mayor (mensajes 'Lista 1 mayor', 'Lista 2 mayor', 'Listas iguales')
Tener en cuenta que puede haber dos o más estructuras repetitivas en un algoritmo.*/

let contador1 = 1;
let contador2 = 1;

let acumLista1 = 0;
let acumLista2 = 0;

while (contador1 <= 3) {
        let lista1 = parseInt(prompt('INGRESE VALOR'));
        acumLista1 = acumLista1 + lista1;
        contador1++;
}
    
while (contador2 <= 3) {
        let lista2 = parseInt(prompt('INGRESE VALOR'));
        acumLista2 = acumLista2 + lista2;
        contador2++;
}

if (acumLista1 > acumLista2) {
    document.write('LISTA 1 MAYOR');
} else if (acumLista1 < acumLista2) {
    document.write('LISTA 2 MAYOR');
} else {
    document.write('LISTAS IGUALES');
}




