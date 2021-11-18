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
ingredientes.push(new Ingrediente("harina", 1000, 10, "14/11/21"));
ingredientes.push(new Ingrediente("azucar", 1000, 50, "14/11/21"));
ingredientes.push(new Ingrediente("huevos", 12, 25, "14/11/21"));

for (let producto of ingredientes) {
  producto.sacarPrecioUndidadMedida();
}

function menorMayor() {
  ingredientes.sort(function (a, b) {
    return a.precio - b.precio;
  });
  console.log("Array ordenado de menor a mayor");
  console.log(ingredientes);
}
function mayorMenor() {
  ingredientes.sort(function (a, b) {
    return b.precio - a.precio;
  });
  console.log("Array ordenado de mayor a menor");
  console.log(ingredientes);
}

let dato = prompt("Ingrese como desea ordenar los precios:\nmenor  =>  de menor a mayor\nmayor  =>  de mayor a menor");

switch (dato) {
  case "menor": {
    menorMayor();
    break;
  }
  case "mayor": {
    mayorMenor();
    break;
  }
  default: {
    alert("Dato ingresado invalido");
  }
}
