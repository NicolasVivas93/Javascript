const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.toggle('content');
content.textContent = 'This is content of the container'

container.appendChild(content);

// Crear párrafo
const para1 = document.createElement('p');
para1.setAttribute('style', 'color: red;');
para1.textContent = "Hey, i'm red!"
container.appendChild(para1);

// Crear h3
const h3Elem = document.createElement('h3');
h3Elem.setAttribute('style', 'color: blue;');
h3Elem.textContent = "Hey, i'm blue!"
container.appendChild(h3Elem);

// Crear container 2
const container2 = document.createElement('div');
container2.classList.toggle('container2');
container2.setAttribute('style', 'border: 2px solid black; background-color: pink;')

// Crear h1
const h1Elem = document.createElement('h1')
h1Elem.textContent = "I'm in a div!"

// Crear parrafo 2
const para2 = document.createElement('p');
para2.textContent = "ME TOO!"

// Agregar para2 y h1 a container 2
container2.appendChild(h1Elem);
container2.appendChild(para2);

// Agregar container2 a container principal
container.appendChild(container2);