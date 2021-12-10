/////////////  --------------  VARIABLES  --------------  /////////////

const ingredientes = [];
let numeroIngredientes = 0;

/////////////  --------------   CLASES   --------------  /////////////

//CONSTRUCTOR DE LISTA DE INGREDIENTES
class Ingrediente {
  constructor(id, nombre, cantidad, precio, fechaCompra) {
    this.id = id;
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
    this.id = obj.id;
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
  let nombre = document.getElementById("nombreIngrediente").value;
  let cantidad = parseFloat(document.getElementById("cantidadIngrediente").value);
  let precio = parseFloat(document.getElementById("precioIngrediente").value);
  let fecha = document.getElementById("fechaIngrediente").value;
  let id = `ing_${nombre}`;
  ingredientes.push(new Ingrediente(id, nombre, cantidad, precio, fecha));
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
    if (propiedad === "id") {
    } else if (propiedad === "precioUnidadMedida") {
      let columna = document.createElement("td");
      columna.classList.add("botonesEditarEliminar");
      let borrar = document.createElement("button");
      borrar.classList.add("boton", "btnBorrar");
      borrar.setAttribute("id", `btnBorrar_${objeto.id}`);

      borrar.innerHTML = "Borrar";

      let editar = document.createElement("button");
      editar.classList.add("boton");
      editar.setAttribute("id", `btnEditar_${objeto.id}`);

      editar.innerHTML = "Editar";
      columna.appendChild(borrar);
      columna.appendChild(editar);
      fila.appendChild(columna);
    } else {
      //CREA UNA COLUMNA POR CADA PROPIEDAD, MENOS PARA PRECIOUNIDADMEDIDA
      let columna = document.createElement("td");
      columna.innerHTML = `<h4>${objeto[propiedad]}</h4>`;
      fila.appendChild(columna);
    }
  }
  eventClickBorrar(`${objeto.id}`);
  eventClickEditar(`${objeto.id}`);
}

/////////////  --------------   EVENTOS   --------------  /////////////

//Formulario agregar ingrediente/recetas
let abrir = document.getElementById("btnAbrirPopupIngrediente");
let ventana = document.getElementById("overlayIngrediente");
let popup = document.getElementById("popupIngrediente");
let cerrar = document.getElementById("btnCerrarPopupIngrediente");
let enviar = document.getElementById("btnEnviarIngrediente");
let formulario = document.getElementById("formularioIngrediente");

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

//Borrar un ingrediente de la lista de ingredientes
function eventClickBorrar(idBotonBorrar) {
  $(`#btnBorrar_${idBotonBorrar}`).click((e) => {
    let ventana = document.getElementById("overlayEliminar");
    let popup = document.getElementById("popupEliminar");
    ventana.classList.add("active"), popup.classList.add("active");
    let idBuscado = e.target.id.slice(14);
    $(`#eliminarSi`).click(() => {
      let ingredienteBorrar = ingredientes.find((ingredientes) => ingredientes.nombre == idBuscado);
      let borrar = ingredientes.indexOf(ingredienteBorrar);
      ingredientes.splice(borrar, 1);
      localStorage.removeItem("listaIngredientes");
      guardarLocal("listaIngredientes", ingredientes);
      ventana.classList.remove("active"), popup.classList.remove("active");
      location.reload();
    });

    $(`#eliminarNo`).click(() => {
      ventana.classList.remove("active"), popup.classList.remove("active");
    });
  });
}

//Editar un ingrediente de la lista de ingredientes
function eventClickEditar(idBotonEditar) {
  $(`#btnEditar_${idBotonEditar}`).click((e) => {
    console.log("funciona");
    let idBuscado = e.target.id.slice(14);
    let ingredienteEditar = ingredientes.find((ingredientes) => ingredientes.nombre == idBuscado);
    let editar = ingredientes.indexOf(ingredienteEditar);

    ventana.classList.add("active");
    popup.classList.add("active");
    document.getElementById("nombreIngrediente").value = ingredienteEditar.nombre;
    document.getElementById("cantidadIngrediente").value = ingredienteEditar.cantidad;
    document.getElementById("precioIngrediente").value = ingredienteEditar.precio;
    document.getElementById("fechaIngrediente").value = ingredienteEditar.fecha;

    ingredientes.splice(editar, 1);

    enviar.addEventListener("click", () => {
      obtenerDatosIngredientes2(), ventana.classList.remove("active"), popup.classList.remove("active");
    });

    function obtenerDatosIngredientes2() {
      let nombre = document.getElementById("nombreIngrediente").value;
      let cantidad = parseFloat(document.getElementById("cantidadIngrediente").value);
      let precio = parseFloat(document.getElementById("precioIngrediente").value);
      let fecha = document.getElementById("fechaIngrediente").value;
      let id = `ing_${nombre}`;
      ingredientes.splice(editar, 1, new Ingrediente(id, nombre, cantidad, precio, fecha));
      location.reload();
    }
  });
}

/////////////  --------------   PROGRAMA   --------------  /////////////

//INICIA LA TABLA con datos viejos
cargarTodoIngredientes();

// ------------ Para tener algunos datos cargados  -----  Ejecutar desde consola una vez ------------ //
// localStorage.removeItem("listaIngredientes");
// -------------------------- Luego volver a cargar la pagina y  ejecutar -------------------------- //
// ingredientes.push(new Ingrediente("ing_ingrediente1", "ingrediente1", 1000, 100, "2021-05-05"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
// ingredientes.push(new Ingrediente("ing_ingrediente2","ingrediente2", 1000, 100, "2021-05-05"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
// ingredientes.push(new Ingrediente("ing_ingrediente3","ingrediente3", 1000, 100, "2021-05-05"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
// ingredientes.push(new Ingrediente("ing_ingrediente4", "ingrediente4", 1000, 100, "2021-05-05"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
// ingredientes.push(new Ingrediente("ing_ingrediente5","ingrediente5", 1000, 100, "2021-05-05"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
// ingredientes.push(new Ingrediente("ing_ingrediente6","ingrediente6", 1000, 100, "2021-05-05"));
// guardarLocal("listaIngredientes", ingredientes);
// numeroIngredientes = ingredientes.length - 1;
// cargarUltimoIngredientes();
