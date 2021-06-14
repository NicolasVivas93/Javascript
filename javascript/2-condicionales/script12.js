//Realizar un programa que solicite dos números distintos y muestre el mayor de ellos.

let numero1 = parseInt(prompt('INGRESE NUMERO 1'));
let numero2 = parseInt(prompt('INGRESE NUMERO 2'));

if (numero1 > numero2) {
    document.write(`EL MAYOR ES ${numero1}`);    
} else {
    document.write(`EL MAYOR ES ${numero2}`);
}