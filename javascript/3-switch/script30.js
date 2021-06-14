/* Ingresar por teclado el nombre de un color (rojo, verde o azul), luego mostraremos un mensaje indicando el color ingresado: */

let color =prompt('INGRESE UN COLOR (rojo - verde - azul)');

switch (color) {
    case 'rojo': document.write((`ELEGISTE ${color}`).toUpperCase()); break;
    case 'verde': document.write((`ELEGISTE ${color}`).toUpperCase()); break;
    case 'azul': document.write((`ELEGISTE ${color}`).toUpperCase()); break;
    default: document.write('COLOR INCORRECTO'); break;
}