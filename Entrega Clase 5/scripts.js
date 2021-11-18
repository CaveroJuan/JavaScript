//Se usa para armar la lista de todos los ingredientes
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
alert("DATOS DE INGREDIENTE");
const ingredienteUno = new Ingrediente(
  prompt("Ingrese el nombre"),
  prompt("Ingrese cantidad de un producto en: gramos, centimetros o unidades"),
  prompt("Ingrese precio de un producto"),
  prompt("Ingrese fecha de compra")
);

ingredienteUno.sacarPrecioUndidadMedida();

//Se usa para armar las recetas, los ingredientes son de la lista existente y las cantidad son propias de cada receta
class Receta {
  constructor(nombreIngrediente, cantidadIngrediente) {
    this.nombre = nombreIngrediente;
    this.cantidad = cantidadIngrediente;
    this.precio = 0; //PRECIO DEL INGREDIENTE
  }

  sacarPrecio() {
    this.precio = ingredienteUno.precioUnidadMedida * this.cantidad;
    //dato externo (Se debe tomar de la base de datos de ingredientes, buscado con nombreIngredientes) * this.cantidad
  }
}

alert("DATOS DE RECETA");

const recetaUno = new Receta(
  prompt("Ingrese nombre de Ingrediente"),
  prompt("Ingrese cantidad del Ingrediente a utilziar en: gramos, centiemtros o unidades")
);
recetaUno.sacarPrecio();
alert(`EL COSTO DEL INGREDIENTE A UTILZIAR ES DE: $${recetaUno.precio}`);
