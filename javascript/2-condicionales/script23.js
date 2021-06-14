/* EJERCICIO 1
Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad (se debe cargar por separado el dia, el mes y el año) */

let dia = prompt('INGRESE DIA (dd)');
let mes = prompt('INGRESE MES (mm)');
let año = prompt('INGRESE AÑO (aaaa)');

if (dia == 25 && mes == 12) {
    document.write('FELIZ NAVIDAD =D!!');
} else {
    document.write('AUN NO ES NAVIDAD =(');
}
