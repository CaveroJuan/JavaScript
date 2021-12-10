/////////////  --------------  VARIABLES  --------------  /////////////

const recetas = [];
let numeroRecetas = 0;

/////////////  --------------   CLASES   --------------  /////////////

//CONSTRUCTOR DE LISTA DE Recetas
class Recetas {
  constructor(id, nombre, descripcion, url) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.url = url;
  }
}

class RecetasLocal {
  constructor(obj) {
    this.id = obj.id;
    this.nombre = obj.nombre;
    this.descripcion = obj.descripcion;
    this.url = obj.url;
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

// Obtenerdatos Formulario agregar Recetas
function obtenerDatosReceta() {
  let nombre = document.getElementById("nombreReceta").value;
  let descripcion = document.getElementById("descripcionReceta").value;
  let url = document.getElementById("urlReceta").value;
  let id = `ing_${nombre}`;
  recetas.push(new Recetas(id, nombre, descripcion, url));
  localStorage.removeItem("listaRecetas");
  guardarLocal("listaRecetas", recetas);
  numeroRecetas = recetas.length - 1;
  cargarUltimoRecetas();
}

//Carga todos los Ingredientes del localstorage en el Dom
function cargarUltimoRecetas() {
  //GENERA EL DOM
  let objeto = recetas[numeroRecetas];
  domRecetas(objeto);
}

function cargarTodoRecetas() {
  // //CARGAR LOCAL CN GUARDAR EN ARRAY - FALTA PONER EN WHILE
  recetas.length = 0;
  if (cargarLocal("listaRecetas") === null) {
  } else {
    for (let index of cargarLocal("listaRecetas")) {
      recetas.push(new RecetasLocal(index));
    }
  }
  //GENERA EL DOM
  for (objeto of recetas) {
    domRecetas(objeto);
  }
}

/////////////  --------------   DOM   --------------  /////////////

let tablaRecetas = document.getElementById("tablaRecetas");

//Dom de cartas de Recetas
let idBotonBorrar;
function domRecetas(objeto) {
  let carta = document.createElement("div");
  carta.classList.add("carta");
  tablaRecetas.appendChild(carta);

  let cont = document.createElement("div");
  cont.classList.add("cont");
  carta.appendChild(cont);
  let carta__imagen = document.createElement("img");
  carta__imagen.classList.add("carta__imagen");
  cont.appendChild(carta__imagen);
  carta__imagen.setAttribute("src", `${objeto.url}`);

  let carta__cuerpo = document.createElement("div");
  carta__cuerpo.classList.add("carta__cuerpo");
  carta.appendChild(carta__cuerpo);
  let carta__titulo = document.createElement("h5");
  carta__titulo.classList.add("carta__titulo");
  carta__cuerpo.appendChild(carta__titulo);
  carta__titulo.innerHTML = objeto.nombre;

  let carta__texto = document.createElement("p");
  carta__texto.classList.add("carta__texto");
  carta__cuerpo.appendChild(carta__texto);
  carta__texto.innerHTML = objeto.descripcion;

  let carta__boton = document.createElement("button");
  carta__boton.classList.add("boton", "carta__boton");
  carta__boton.setAttribute("id", `btnReceta_${objeto.id}`);
  carta__cuerpo.appendChild(carta__boton);
  carta__boton.innerHTML = `Ir a la receta`;

  let carta__borrarEditar = document.createElement("div");
  carta__borrarEditar.classList.add("borrarEditar");
  carta__cuerpo.appendChild(carta__borrarEditar);

  let carta__editar = document.createElement("button");
  carta__editar.classList.add("boton", "delEdit");
  carta__editar.setAttribute("id", `btnEditar_${objeto.id}`);
  carta__borrarEditar.appendChild(carta__editar);
  carta__editar.innerHTML = `Editar`;

  let carta__borrar = document.createElement("button");
  carta__borrar.classList.add("boton", "delEdit");
  carta__borrar.setAttribute("id", `btnBorrar_${objeto.id}`);
  carta__borrarEditar.appendChild(carta__borrar);
  carta__borrar.innerHTML = `Borrar`;

  eventClickEditar(`${objeto.id}`);
  eventClickBorrar(`${objeto.id}`);
}
/////////////  --------------   EVENTOS   --------------  /////////////

//Formulario agregar ingrediente/recetas
let abrir = document.getElementById("btnAbrirPopupReceta");
let ventana = document.getElementById("overlayReceta");
let popup = document.getElementById("popupReceta");
let cerrar = document.getElementById("btnCerrarPopupReceta");
let enviarReceta = document.getElementById("btnEnviarReceta");
let formulario = document.getElementById("formularioReceta");
// let btnReceta;

//Abrir
abrir.addEventListener("click", () => {
  ventana.classList.add("active"), popup.classList.add("active"), formulario.reset();
});
//Cerrar
cerrar.addEventListener("click", () => {
  ventana.classList.remove("active"), popup.classList.remove("active");
});
// Enviar
enviarReceta.addEventListener("click", () => {
  obtenerDatosReceta(), ventana.classList.remove("active"), popup.classList.remove("active");
});

// Borrar una receta de la lista de recetas
function eventClickBorrar(idBotonBorrar) {
  // console.log(idBotonBorrar);
  $(`#btnBorrar_${idBotonBorrar}`).click((e) => {
    let ventana = document.getElementById("overlayEliminar");
    let popup = document.getElementById("popupEliminar");
    let idBuscado = e.target.id.slice(14);
    ventana.classList.add("active"), popup.classList.add("active");
    $(`#eliminarSi`).click(() => {
      let recetaBorrar = recetas.find((recetas) => recetas.nombre == idBuscado);
      let borrar = recetas.indexOf(recetaBorrar);
      recetas.splice(borrar, 1);
      localStorage.removeItem("listaRecetas");
      guardarLocal("listaRecetas", recetas);
      ventana.classList.remove("active"), popup.classList.remove("active");
      location.reload();
    });

    $(`#eliminarNo`).click(() => {
      ventana.classList.remove("active"), popup.classList.remove("active");
    });
  });
}

// Editar una receta de la lista de recetas
function eventClickEditar(idBotonEditar) {
  $(`#btnEditar_${idBotonEditar}`).click((e) => {
    console.log("funciona");
    let idBuscado = e.target.id.slice(14);
    let recetaEditar = recetas.find((recetas) => recetas.nombre == idBuscado);
    let editar = recetas.indexOf(recetaEditar);
    ventana.classList.add("active");
    popup.classList.add("active");

    document.getElementById("nombreReceta").value = recetaEditar.nombre;
    document.getElementById("descripcionReceta").value = recetaEditar.descripcion;
    document.getElementById("urlReceta").value = recetaEditar.url;

    recetas.splice(editar, 1);

    enviarReceta.addEventListener("click", () => {
      obtenerDatosRecetas2(), ventana.classList.remove("active"), popup.classList.remove("active");
    });

    function obtenerDatosRecetas2() {
      let nombre = document.getElementById("nombreReceta").value;
      let descripcion = document.getElementById("descripcionReceta").value;
      let url = document.getElementById("urlReceta").value;
      let id = `ing_${nombre}`;

      recetas.splice(editar, 1, new Recetas(id, nombre, descripcion, url));
      location.reload();
    }
  });
}

/////////////  --------------   PROGRAMA   --------------  /////////////

//INICIA LA TABLA con datos viejos
cargarTodoRecetas();

// ------------ Para tener algunos datos cargados  -----  Ejecutar desde consola una vez ------------ //
// localStorage.removeItem("listaRecetas");
// --------------------------------- Luego volver a cargar la pagina y  ejecutar -------------------------------- //
// recetas.push(new Recetas("ing_LemonPie", "LemonPie", "Es una tarta de limon y merengue para 6 personas", "https://placeralplato.com/files/2015/06/lemon-pie-640x480.jpg?width=1200&enable=upscale"))
// guardarLocal("listaRecetas", recetas);
// numeroRecetas = recetas.length - 1;
// cargarUltimoRecetas()
// recetas.push(new Recetas("ing_Brownie", "Brownie", "Torta Brownie con merengue y dulce de leche para 6 personas", "https://recetasdecocina.elmundo.es/wp-content/uploads/2016/11/brownie-de-chocolate.jpg"))
// guardarLocal("listaRecetas", recetas);
// numeroRecetas = recetas.length - 1;
// cargarUltimoRecetas()
