/* EJERCICIO 3
Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras.  */

let numero = parseInt(prompt('INGRESE NUMERO'));

if (numero >=1 && numero <10) {
    document.write('EL NUMERO TIENE UNA CIFRA');
} else {
    if (numero >=10 && numero <100) {
        document.write('EL NUMERO TIENE DOS CIFRAS');    
    } else {
        document.write('EL NUMERO TIENE TRES CIFRAS');    
    }
}