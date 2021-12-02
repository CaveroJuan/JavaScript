/////////////  --------------  VARIABLES  --------------  /////////////

const ingredientes = [];
let numeroIngredientes = 0;

/////////////  --------------   CLASES   --------------  /////////////

//CONSTRUCTOR DE LISTA DE INGREDIENTES
class Ingrediente {
  constructor(nombre, cantidad, precio, fechaCompra) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio = precio;
    this.fecha = fechaCompra;

    this.precioUnidadMedida = 0;
  }
  //Por ahora sin usar
  sacarPrecioUndidadMedida() {
    return (this.precioUnidadMedida = this.precio / this.cantidad);
  }
}

class IngredienteLocal {
  constructor(obj) {
    this.nombre = obj.nombre;
    this.cantidad = obj.cantidad;
    this.precio = obj.precio;
    this.fecha = obj.fecha;

    this.precioUnidadMedida = obj.precioUnidadMedida;
  }
  //Por ahora sin usar
  sacarPrecioUndidadMedida() {
    return (this.precioUnidadMedida = this.precio / this.cantidad);
  }
}

/////////////  --------------   FUNCIONES   --------------  /////////////

//Cargar data localmente
function cargarLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

//Guardar data localmente
function guardarLocal(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

// Obtenerdatos Formulario agregar ingredientes
function obtenerDatosIngredientes() {
  let nombre = document.getElementById("nombre").value;
  let cantidad = parseFloat(document.getElementById("cantidad").value);
  let precio = parseFloat(document.getElementById("precio").value);
  let fecha = document.getElementById("fecha").value;
  ingredientes.push(new Ingrediente(nombre, cantidad, precio, fecha));
  localStorage.removeItem("listaIngredientes");
  guardarLocal("listaIngredientes", ingredientes);
  numeroIngredientes = ingredientes.length - 1;
  cargarUltimoIngredientes();
}

//Carga el ultimo Ingrediente ingresado en el Dom
function cargarUltimoIngredientes() {
  //GENERA EL DOM
  let objeto = ingredientes[numeroIngredientes];
  domIngredientes(objeto);
}

//Carga todos los Ingredientes del localstorage en el Dom
function cargarTodoIngredientes() {
  // //CARGAR LOCAL CN GUARDAR EN ARRAY - FALTA PONER EN WHILE
  ingredientes.length = 0;
  if (cargarLocal("listaIngredientes") === null) {
  } else {
    for (let index of cargarLocal("listaIngredientes")) {
      ingredientes.push(new IngredienteLocal(index));
    }
  }
  //GENERA EL DOM
  for (objeto of ingredientes) {
    domIngredientes(objeto);
  }
}

/////////////  --------------   DOM   --------------  /////////////

let tablaIngredientes = document.getElementById("tablaIngredientes");

//Dom de tabla Ingredientes
function domIngredientes(objeto) {
  let fila = document.createElement("tr");
  fila.classList.add("filaIngrediente");
  //PARA CADA 1 CREA UNA FILA
  tablaIngredientes.appendChild(fila);
  for (propiedad in objeto) {
    if (propiedad === "precioUnidadMedida") {
      let columna = document.createElement("td");
      let borrar = document.createElement("button");
      borrar.classList.add("borrar");
      let editar = document.createElement("button");
      editar.classList.add("editar");
      columna.appendChild(editar);
      columna.appendChild(borrar);
      fila.appendChild(columna);
    } else {
      //CREA UNA COLUMNA POR CADA PROPIEDAD, MENOS PARA PRECIOUNIDADMEDIDA
      let columna = document.createElement("td");
      columna.innerHTML = `<h4>${objeto[propiedad]}</h4>`;
      fila.appendChild(columna);
    }
  }
}

/////////////  --------------   EVENTOS   --------------  /////////////

//Formulario agregar ingrediente/recetas
let abrir = document.getElementById("btn-abrir-popup");
let ventana = document.getElementById("overlay");
let popup = document.getElementById("popup");
let cerrar = document.getElementById("btn-cerrar-popup");
let enviar = document.getElementById("enviar");
let formulario = document.getElementById("form_reset");

//Abrir
abrir.addEventListener("click", () => {
  ventana.classList.add("active"), popup.classList.add("active"), formulario.reset();
});
//Cerrar
cerrar.addEventListener("click", () => {
  ventana.classList.remove("active"), popup.classList.remove("active");
});
// Enviar
enviar.addEventListener("click", () => {
  obtenerDatosIngredientes(), ventana.classList.remove("active"), popup.classList.remove("active");
});

/////////////  --------------   PROGRAMA   --------------  /////////////

//INICIA LA TABLA con datos viejos
cargarTodoIngredientes();

// ------------ Para tener algunos datos cargados  -----  Ejecutar desde consola una vez ------------ //
// localStorage.removeItem("listaIngredientes");
// -------------------------- Luego volver a cargar la pagina y  ejecutar -------------------------- //
// ingredientes.push(new Ingrediente("ingrediente 1", 1000, 100, "14/11/21"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
// ingredientes.push(new Ingrediente("ingrediente 2", 1000, 100, "14/11/21"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
