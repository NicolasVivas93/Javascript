/* EJERCICIO 2

Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero (tener en cuenta que puede haber tres condiciones simples) */

let num1 = parseInt(prompt('NUMERO 1'));
let num2 = parseInt(prompt('NUMERO 2'));
let num3 = parseInt(prompt('NUMERO 3')); 

if (num1 == num2 && num2 == num3) {
    let operacion = (num1 + num2) * num3;
    document.write(`RESULTADO: ${operacion}`);
}
