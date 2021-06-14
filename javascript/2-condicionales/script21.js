/* Confeccionar un programa que lea por teclado tres números distintos y nos muestre el mayor de ellos. */

let num1 = parseInt(prompt('NUMERO 1'));
let num2 = parseInt(prompt('NUMERO 2'));
let num3 = parseInt(prompt('NUMERO 3')); 

/* let num1 = Math.floor(Math.random() * (1000 - 1)) + 1;
let num2 = Math.floor(Math.random() * (1000 - 1)) + 1;
let num3 = Math.floor(Math.random() * (1000 - 1)) + 1; */

if (num1 > num2 && num1 > num3) {
    document.write(`EL MAYOR ES: ${num1}`);
} else {
    if (num2 > num1 && num2 > num3) {
        document.write(`EL MAYOR ES: ${num2}`);
    } else {
        document.write(`EL MAYOR ES: ${num3}`);
    } 
}

document.write('<br>');
document.write(`NUM 1: ${num1}      NUM 2: ${num2}      NUM 3: ${num3}`);