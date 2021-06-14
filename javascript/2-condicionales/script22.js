/* Se carga una fecha (día, mes y año) por teclado. Mostrar un mensaje si corresponde al primer trimestre del año (enero, febrero o marzo).

Cargar por teclado el valor numérico del día, mes y año por separado. */

let dia = prompt('INGRESE DIA (dd)');
let mes = prompt('INGRESE MES (mm)');
let año = prompt('INGRESE AÑO (aaaa)');

let mesEnLetras;

if (mes == 01) { mesEnLetras = 'Enero';}
if (mes == 02) { mesEnLetras = 'Febrero';}
if (mes == 03) { mesEnLetras = 'Marzo';} 

if (mes == 01 || mes == 02 || mes == 03) {
    document.write('CORRESPONDE AL PRIMER TRIMESTRE');
    document.write('<br>');
    document.write(`MES: ${mes}  ${mesEnLetras}`);
} else {
    document.write('NO CORRESPONDE AL PRIMER TRIMESTRE');
}