//CONSTRUCTOR DE LISTA DE INGREDIENTES
class Ingrediente {
  constructor(nombre, cantidad, precio, fechaCompra) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.fecha = fechaCompra;

    this.precioUnidadMedida = 0;
  }

  sacarPrecioUndidadMedida() {
    this.precioUnidadMedida = this.precio / this.cantidad;
  }
}

const ingredientes = [];

//INGREDO DE DATOS PARA LISTA DE INGREDIENTES
// function datosIngredientes() {
//   ingredientes.push(
//     new Ingrediente(
//       prompt("Ingrese el nombre"),
//       prompt("Ingrese cantidad de un producto en: gramos, centimetros o unidades"),
//       prompt("Ingrese precio de un producto"),
//       prompt("Ingrese fecha de compra")
//     )
//   );
// }

// datosIngredientes();
// datosIngredientes();
// datosIngredientes();

//PARA PROBAR sin ingresar datos
ingredientes.push(new Ingrediente("harina", 1000, 100, "14/11/21"));
ingredientes.push(new Ingrediente("azucar", 1000, 40, "14/11/21"));
ingredientes.push(new Ingrediente("huevos", 12, 25, "14/11/21"));

//SACA EL PRECIO DE UNIDAD DE MEDIDA DE CADA UNO DE LOS INGREDIENTES
for (index of ingredientes) {
  index.sacarPrecioUndidadMedida();
}

console.log(ingredientes);

//FUNCION PARA BUSCAR EL PRECIO CORRESPONDIENTE AL INGREDIENTE INGRESADO EN LA RECETA
function buscar(nombre) {
  for (index in ingredientes) {
    if (ingredientes[index].nombre === nombre) {
      return ingredientes[index].precioUnidadMedida;
    }
  }
}

//CONSTRUCTOR DE LA LISTA DE RECETAS, los ingredientes son de la lista existente y las cantidad son propias de cada receta
class Receta {
  constructor(nombreIngrediente, cantidadIngrediente) {
    this.nombre = nombreIngrediente;
    this.cantidad = cantidadIngrediente;
    this.precio = 0; //PRECIO DEL INGREDIENTE
  }

  sacarPrecio() {
    this.precio = buscar(this.nombre) * this.cantidad;
    //dato externo (Se debe tomar de la base de datos de ingredientes, buscado con nombreIngredientes) * this.cantidad
  }
}

const recetas = [];
//INGREDO DE DATOS PARA LISTA DE RECETA
// function datosRecetas() {
//   recetas.push(
//     new Receta(prompt("Ingrese nombre de Ingrediente"), prompt("Ingrese cantidad del Ingrediente a utilziar en: gramos, centiemtros o unidades"))
//   );
// }

// datosRecetas();
// datosRecetas();
// datosRecetas();

//PARA PROBAR sin ingresar datos
recetas.push(new Receta("harina", 500));
recetas.push(new Receta("azucar", 500));
recetas.push(new Receta("huevos", 6));

//SACA EL PRECIO DE LOS INGREDIENTES SEGUN LA CANTIDAD DE LA RECETA
for (index of recetas) {
  index.sacarPrecio();
}

console.log(recetas);
