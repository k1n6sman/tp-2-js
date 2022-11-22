const boton = document.querySelector('#boton').addEventListener('click', renderizarPizza );
const nombre =document.querySelector('#nombre');
const precio =document.querySelector('#precio');



class Pizza {
    constructor (id,nombre,ingredientes,precio){  
      this.id = id;
      this.nombre = nombre;
      this.ingredientes = ingredientes;
      this.precio = precio;
    }
}

  const muzza = new Pizza(1,'muzzarella',['tomate', 'muzzarella'] ,700);
  const napo = new Pizza(2,'napolitana',['muzzarella', 'jamon', 'morron'],1000);
  const huevoFrito = new Pizza(3,'huevo frito',['huevo frito', 'muzzarella'],800);
  const anana = new Pizza(4,'anana',['muzzarella', 'anana'],1200);
  const carne = new Pizza(5,'carne',['muzzarella', 'carne'],1250);
  const anchoas = new Pizza(6,'anchoas',['muzzarella', 'anchoas'],1400);
  
const pizzass = [muzza,napo,huevoFrito,anana,carne,anchoas]; 





function renderizarPizza() {
    const idInput = document.querySelector('#input').value;
    const IdNumber = parseInt (document.querySelector('#input').value);
    pizzass.forEach (e => {
      
     if (IdNumber === e.id)
               {nombre.textContent = e.nombre; 
               precio.textContent = e.precio;}
     else if (idInput === '') 
               {nombre.textContent = 'Error'; 
               precio.textContent = 'No existe el id';}
     else if (idInput > e.id) 
              {nombre.textContent = 'Error'; 
               precio.textContent = 'No existe el id';}})
  }



