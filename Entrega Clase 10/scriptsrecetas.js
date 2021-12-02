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

// Obtenerdatos Formulario agregar ingredientes
function obtenerDatosReceta() {
  let nombre = document.getElementById("nombre").value;
  let descripcion = document.getElementById("descripcion").value;
  let url = document.getElementById("url").value;
  let id = recetas.length + 1;
  recetas.push(new Recetas(id, nombre, descripcion, url));
  localStorage.removeItem("listaRecetas");
  guardarLocal("listaRecetas", recetas);
  numeroRecetas = recetas.length - 1;
  cargarUltimoRecetas(id);
}

//Carga todos los Ingredientes del localstorage en el Dom
function cargarUltimoRecetas(id) {
  //GENERA EL DOM
  let objeto = recetas[numeroRecetas];
  domRecetas(objeto, id);
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
function domRecetas(objeto, id) {
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

  let carta__boton = document.createElement("a");
  carta__boton.classList.add("carta__boton");
  carta__boton.setAttribute("id", `btn-${id}`);
  carta__cuerpo.appendChild(carta__boton);
  carta__boton.innerHTML = `Ir a la receta`;
}

/////////////  --------------   EVENTOS   --------------  /////////////

//Formulario agregar ingrediente/recetas
let abrir = document.getElementById("btn-abrir-popup");
let ventana = document.getElementById("overlay");
let popup = document.getElementById("popup");
let cerrar = document.getElementById("btn-cerrar-popup");
let enviarReceta = document.getElementById("enviarReceta");
let formulario = document.getElementById("form_reset");
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

//nos manda a las lista de ingredientes d la receta
//tengo q buscar el id de la receta cuando hago click

/////////////  --------------   PROGRAMA   --------------  /////////////

//INICIA LA TABLA con datos viejos
cargarTodoRecetas();

// ------------ Para tener algunos datos cargados  -----  Ejecutar desde consola una vez ------------ //
// localStorage.removeItem("listaRecetas");
// --------------------------------- Luego volver a cargar la pagina y  ejecutar -------------------------------- //
// recetas.push(new Recetas(1, "Lemon Pie", "Es una tarta de limon y merengue para 6 personas", "https://placeralplato.com/files/2015/06/lemon-pie-640x480.jpg?width=1200&enable=upscale"))
// guardarLocal("listaRecetas", recetas);
// numeroRecetas = recetas.length - 1;
// cargarUltimoRecetas()
// recetas.push(new Recetas(2, "Brownie", "Torta Brownie con merengue y dulce de leche para 6 personas", "https://recetasdecocina.elmundo.es/wp-content/uploads/2016/11/brownie-de-chocolate.jpg"))
// guardarLocal("listaRecetas", recetas);
// numeroRecetas = recetas.length - 1;
// cargarUltimoRecetas()
