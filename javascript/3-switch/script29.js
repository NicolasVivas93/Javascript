/* Confeccionar un programa que solicite que ingrese un valor entre 1 y 5. Luego mostrar en castellano el valor ingresado. Mostrar un mensaje de error en caso de haber ingresado un valor que no se encuentre en dicho rango */

let valor = parseInt(prompt('INGRESE UN VALOR (1-5)'));

switch (valor) {
    case 1: document.write(`SE INGRESO EL NUMERO ${valor}`);   break;
    case 2: document.write(`SE INGRESO EL NUMERO ${valor}`); break;
    case 3: document.write(`SE INGRESO EL NUMERO ${valor}`);   break;
    case 4: document.write(`SE INGRESO EL NUMERO ${valor}`); break;
    case 5: document.write(`SE INGRESO EL NUMERO ${valor}`); break;
    default: document.write('NUMERO INCORRECTO'); break;
}