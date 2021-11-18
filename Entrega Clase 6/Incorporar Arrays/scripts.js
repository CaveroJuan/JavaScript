// FOR OF para usar y RECORRER ELEMENTOS DEL Array
// for in para usar y recorrer los indices de pos del Array
// arrow funtion funcion escrita en el lugar, se puede no usar arrow y llamarla de afuer si va a ser utilizada en otra parte del codigo

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
ingredientes.push(new Ingrediente("harina", 1000, 100, "14/11/21"));
ingredientes.push(new Ingrediente("azucar", 1000, 50, "14/11/21"));
ingredientes.push(new Ingrediente("huevos", 12, 25, "14/11/21"));

for (let producto of ingredientes) {
  producto.sacarPrecioUndidadMedida();
}

console.log(ingredientes);
