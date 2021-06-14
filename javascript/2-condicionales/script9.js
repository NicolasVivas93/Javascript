let nombre = prompt('NOMBRE ALUMNO');
let nota = parseInt(prompt('NOTA'));

if (nota >= 4) {
    document.write(`${nombre} esta aprobado con ${nota}`);
}