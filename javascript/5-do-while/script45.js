/* EJERCICIO 2 
En un banco se procesan datos de las cuentas corrientes de sus clientes. De cada cuenta corriente se conoce: número de cuenta, nombre del cliente y saldo actual. El ingreso de datos debe finalizar al ingresar un valor negativo en el número de cuenta.
Se pide confeccionar un programa que lea los datos de las cuentas corrientes e informe:
a) De cada cuenta: número de cuenta, nombre del cliente y estado de la cuenta según su saldo, sabiendo que:
Estado de la cuenta	'Acreedor' si el saldo es >0.
			'Deudor' si el saldo es <0.
			'Nulo' si el saldo es =0.
b) La suma total de los saldos acreedores. */

let nombreCliente;
let numeroCuenta;
let saldoActual;
let acumSaldoAcreedores = 0;
let estadoCuenta;

do {
    nombreCliente = prompt('NOMBRE DEL CLIENTE');
    numeroCuenta = parseInt(prompt('NRO DE CUENTA'));
    saldoActual = parseInt(prompt('SALDO ACTUAL'));

    if (numeroCuenta >= 0) {
        if (saldoActual > 0) {
            estadoCuenta = 'Acreedor';
            acumSaldoAcreedores = acumSaldoAcreedores + saldoActual;
        } else if (saldoActual < 0) {
            estadoCuenta = 'Deudor';
        } else {
            estadoCuenta = 'Nulo';
        }

        document.write(`NUMERO DE CUENTA: ${numeroCuenta}`, '<br>');
        document.write(`NOMBRE DE CLIENTE: ${nombreCliente}`, '<br>');
        document.write(`ESTADO DE CUENTA: ${estadoCuenta}`, '<br>', '<br>');
    }
} while (numeroCuenta >= 0);

document.write(`TOTAL SALDO ACREEDORES: ${acumSaldoAcreedores}`);







