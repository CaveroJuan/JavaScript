//----------------------NOTAS---------------------------
//Cartel de confirm con un producto con un precio definido
//Cartel de promp preguntando cuantos articulos se quieren cargar
//repetir con diferente productos
//finalizar compra y luego resultado total de la compra
//----------------------------------------------------

//Variables
let total = 0;

//Funciones
function comprar() {
  alert("Compra de articulos");
  for (let i = 1; i <= 3; i++) {
    switch (i) {
      case 1:
        agregarItems("teclado", 2500);
        break;
      case 2:
        agregarItems("monitor", 30000);
        break;
      default:
        agregarItems("mouse", 600);
        break;
    }
  }
  alert("El total es: $" + total);
}

function agregarItems(item, precio) {
  let deseaComprar = confirm("Desea comprar: " + item + " de $" + precio); //True or False
  if (deseaComprar === true) {
    let cantidad = prompt("¿Cuantos quiere adquirir?");
    let subtotal = precio * cantidad;
    total = subtotal + total;
  }
}

// Programa
comprar();
