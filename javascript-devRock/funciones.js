
function calcularEdad(nombre, edad) {
    let aniosHumanos = edad * 7;
    console.log(`${nombre} tiene ${aniosHumanos} años humanos`);
}

calcularEdad(prompt('Nombre del Perro'), prompt('Edad')); 

let contador = 1;
while (contador < 3) {
    calcularEdad(prompt('Nombre del Perro'), prompt('Edad')); 
    contador++;
}

