const boton = document.querySelector('.btn').addEventListener('click', renderizarPizza);
const nombre = document.querySelector('.nombre');
const precio = document.querySelector('.precio');
const ingredientes = document.querySelector(".ingredientes")
const imagen = document.querySelector(".imagen")

class Pizza {
  constructor(id, nombre, [...ingredientes], precio) {
    this.id = id;
    this.nombre = nombre;
    this.ingredientes = ingredientes;
    this.precio = precio;
  }
}

const muzza = new Pizza(1, 'muzzarella', ['tomate', 'muzzarella'], 700);
const napo = new Pizza(2, 'napolitana', ['muzzarella', 'jamon', 'morron', 'tomate'], 1000);
const huevoFrito = new Pizza(3, 'huevo frito', ['huevo frito', 'muzzarella'], 800);
const anana = new Pizza(4, 'anana', ['muzzarella', 'anana'], 1200);
const carne = new Pizza(5, 'carne', ['muzzarella', 'carne'], 1250);
const anchoas = new Pizza(6, 'anchoas', ['muzzarella', 'anchoas'], 1400);

let pizzass = [muzza, napo, huevoFrito, anana, carne, anchoas];


function renderizarPizza() {
  const idInput = document.querySelector('.input').value;
  const IdNumber = parseInt(document.querySelector('.input').value);
  pizzass.forEach(pizza => {

    if (IdNumber === pizza.id) {
      ingredientes.textContent = 'Ingredientes: ' + pizza.ingredientes;
      nombre.textContent = 'Pizza tipo: ' + pizza.nombre;
      precio.textContent = 'Precio: $' + pizza.precio;
      mostrarPizza(pizza.nombre);
    }

    else if (idInput === '') {
      nombre.textContent = 'ERROR';
      precio.textContent = 'NO INGRESO VALOR';
      ingredientes.textContent = '';
      mostrarPizza('');
    }

    else if (idInput > pizza.id || idInput <= 0) {
      nombre.textContent = 'ERROR';
      precio.textContent = 'VALOR INVALIDO';
      ingredientes.textContent = '';
      mostrarPizza('');
    }
  })
}
const mostrarPizza = (Pizza) => {
  if (!Pizza) {
    imagen.innerHTML = '<p></p>';
  } else {
    imagen.innerHTML = `'<img src="./tp-2-js/img/' ${Pizza}  '.jfif" alt="imagen de la pizza">'`
  }
}


