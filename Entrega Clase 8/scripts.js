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
    return (this.precioUnidadMedida = this.precio / this.cantidad);
  }
}

const ingredientes = [];

//INGREDO DE DATOS PARA LISTA DE INGREDIENTES
function datosIngredientes() {
  return ingredientes.push(
    new Ingrediente(
      prompt("Ingrese el nombre"),
      prompt("Ingrese cantidad de un producto en: gramos, centimetros o unidades"),
      prompt("Ingrese precio de un producto"),
      prompt("Ingrese fecha de compra")
    )
  );
}

datosIngredientes();
datosIngredientes();
// datosIngredientes();
// datosIngredientes();

//PARA PROBAR sin ingresar datos
ingredientes.push(new Ingrediente("harina", 1000, 100, "14/11/21"));
ingredientes.push(new Ingrediente("azucar", 1000, 40, "14/11/21"));
ingredientes.push(new Ingrediente("huevos", 12, 25, "14/11/21"));
ingredientes.push(new Ingrediente("dulce de leche", 500, 200, "14/11/21"));
ingredientes.push(new Ingrediente("crema", 100, 150, "14/11/21"));
ingredientes.push(new Ingrediente("manteca", 250, 120, "14/11/21"));
ingredientes.push(new Ingrediente("1", 12, 25, "14/11/21"));
ingredientes.push(new Ingrediente("2", 12, 25, "14/11/21"));
ingredientes.push(new Ingrediente("3", 12, 25, "14/11/21"));
ingredientes.push(new Ingrediente("4", 12, 25, "14/11/21"));
ingredientes.push(new Ingrediente("5", 12, 25, "14/11/21"));

//SACA EL PRECIO DE UNIDAD DE MEDIDA DE CADA UNO DE LOS INGREDIENTES
for (index of ingredientes) {
  index.sacarPrecioUndidadMedida();
}

//Guardar data localmente
function guardarLocal(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}
guardarLocal("listadoIngredientes", ingredientes);

//Cargar data localmente
function cargarLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

class IngredienteLocal {
  constructor(obj) {
    this.nombre = obj.nombre;
    this.cantidad = obj.cantidad;
    this.precio = obj.precio;
    this.fecha = obj.fecha;

    this.precioUnidadMedida = obj.precioUnidadMedida;
  }
}

const ingredientesLocal = [];

for (let index of cargarLocal("listadoIngredientes")) {
  ingredientesLocal.push(new IngredienteLocal(index));
}

// //TABLA PARA USAR SOLO EN INDEX, EN PAGINA INGREDIENTES DEBE MOSTRAR TODOS
let tabla = document.getElementById("tabla"); //SELECCIONA LA TABLA
for (objeto of ingredientesLocal) {
  if (ingredientesLocal.indexOf(objeto) <= 4) {
    //SOLO TOMA LOS ULTIMOS 5 INGREDIENTES
    //PARA CADA 1 CREA UNA FILA
    let fila = document.createElement("tr");
    tabla.appendChild(fila);
    for (propiedad in objeto) {
      if (propiedad === "precioUnidadMedida") {
        continue;
      } else {
        //CREA UNA COLUMNA POR CADA PROPIEDAD, MENOS PARA PRECIOUNIDADMEDIDA
        let columna = document.createElement("td");
        columna.innerHTML = `<h4>${objeto[propiedad]}</h4>`;
        fila.appendChild(columna);
      }
    }
  }
}

///////// para agregar en recetas

// //FUNCION PARA BUSCAR EL PRECIO CORRESPONDIENTE AL INGREDIENTE INGRESADO EN LA RECETA
// function buscar(nombre) {
//   let buscado = ingredientes.find((ingredientes) => ingredientes.nombre === nombre);
//   return buscado.precioUnidadMedida;
// }

// //CONSTRUCTOR DE LA LISTA DE RECETAS, los ingredientes son de la lista existente y las cantidad son propias de cada receta
// class Receta {
//   constructor(nombreIngrediente, cantidadIngrediente) {
//     this.nombre = nombreIngrediente;
//     this.cantidad = cantidadIngrediente;
//     this.precio = 0; //PRECIO DEL INGREDIENTE
//   }

//   sacarPrecio() {
//     this.precio = buscar(this.nombre) * this.cantidad;
//     //dato externo (Se debe tomar de la base de datos de ingredientes, buscado con nombreIngredientes) * this.cantidad
//   }
// }

// const recetas = [];
// //INGREDO DE DATOS PARA LISTA DE RECETA
// //PARA PROBAR sin ingresar datos
// recetas.push(new Receta("harina", 500));
// recetas.push(new Receta("azucar", 500));
// recetas.push(new Receta("huevos", 6));

// //SACA EL PRECIO DE LOS INGREDIENTES SEGUN LA CANTIDAD DE LA RECETA
// for (index of recetas) {
//   index.sacarPrecio();
// }

// console.log(recetas);
