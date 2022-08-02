const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')


function saludo() {
    let name = prompt('Nombre:')
    if (name !== null) {
        alert("Hola! " + name)
    } else {
        alert("Hola!")
    }
}

btn1.addEventListener('click', saludo);

btn2.addEventListener('click', function (e) {
    console.log(e) // Apuntamos al evento en sí y accedemos a las propiedades, funciones e información sobre el objetivo del evento
    console.log(e.target) // Apuntamos al objetivo del evento; en este caso, el btn2
    e.target.style.backgroundColor = 'blue' // Entramos a los estilos del target y cambiamos el valor del backgroundColor
});

btn3.addEventListener('click', saludo);


// Agregar eventos a grupos de nodos/elementos

const buttons = document.querySelectorAll('button')  // Traigo en una lista todos los nodos/elementos que correspondan a 'button' en este caso. buttons seria una lista de nodos, y actua muy parecido a un array

// Usamos el metodo forEach para iterar por cada botón
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("Hola soy el boton " + button.id);
    });
});