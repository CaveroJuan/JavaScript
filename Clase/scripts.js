////////////////////////               UN SOLO OBJETO ---- JSON            /////////////////////////////////////////
// let obj = {
//   nombre: "chocolate",
//   id: 34,
//   precio: 25,
// };

// let objString = JSON.stringify(obj);
// localStorage.setItem("producto", objString);

// let objetoString = localStorage.getItem("producto");
// let objeto = JSON.parse(objetoString);

////////////////////////               ARRAY DE OBJETOS 1 ---- JSON            /////////////////////////////////////////
// let carritosDeCompra = [
//   { nombre: "leche", precio: 23 },
//   { nombre: "pan", precio: 43 },
//   { nombre: "pastas", precio: 72 },
// ];

// function guardarCarrito() {
//   let carritoString = JSON.stringify(carritosDeCompra);
//   localStorage.setItem("carrito", carritoString);
// }

// function obtenerCarrito() {
//   let carritoString = localStorage.getItem("carrito");
//   let carrito = JSON.parse(carritoString);
//   return carrito;
// }

////////////////////////               ARRAY DE OBJETOS 2 ---- JSON            /////////////////////////////////////////
//Genera el array de obejetos a guardar
// const productos = [
//   { id: 1, nombreProducto: "arroz", precio: 100 },
//   { id: 2, nombreProducto: "pasta", precio: 120 },
//   { id: 3, nombreProducto: "azucar", precio: 150 },
//   { id: 4, nombreProducto: "cerveza", precio: 80 },
// ];

////Guarda un producto determinado
// const guardarLocal = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

////Guarda uno por uno
// for (const producto of productos) {
//   guardarLocal(producto.id, JSON.stringify(producto));
// }

// function obtenerCarrito() {
//   let carritoString = localStorage.getItem("carrito");
//   let carrito = JSON.parse(carritoString);
//   return carrito;
// }

// for (const producto of productos) {
//   obtenerCarrito(producto);
// }

// // //Guardar y cargar el array completo
// let guardarLocal = localStorage.setItem("listadoProductos", JSON.stringify(productos));
// let cargarLocal = JSON.parse(localStorage.getItem("listadoProductos"));

// //del array nuevo armar otro diferente
// class Producto {
//   constructor(obj) {
//     this.nombre = obj.producto;
//     this.precio = parseFloat(obj.precio);
//   }
// }

// const productos2 = [];

// for (const objeto of cargarLocal) {
//   productos2.push(new Producto(objeto));
// }

////////////////////////               MANIPULACION DEL DOM            ////////////////////////
//buscar y modificar elementos
// let paises = document.getElementsByClassName //trae todas las etiqeutas que tengan la misma clase
// paises es una clase de lista entonces
// paises[2].innerHTML //modifica el segundo item de esa clase
// let div = document.getElementById("box")  //trae una etiqueta por el id #
// div.innerHTML("PERPIMTE MODIFICAR EL TEXTO DE LO Q TENGA EL ID box")
// let contenedores = document.getElementsByTagName("div")
// modifica el contenido de todas las etiquetas div, con [] selecciono un div determinado

//agregar elementos
// let parrafo =document.createElement("p")  //crea una etiqueta P  y la guarda en la variable parrafo
// parrafo.innerHTML="texto" //se agrega el texto deseado a la etiqueta p
// document.body.appendChild(parrafo) //agrga la variable parrafo como hijo del body, en este ejemplo agrega un parrafo

//borrar elementos
// let parrafo2 = document.getElementById("parrafo")
// parrafo2.parentNode.removeChild(parrafo2) //parent se mueve al nodo anterior y remove sacal el hijo de nombre parrafo2
// parrafo2.parentNode //selecciiona el nodo de donde se encuntra el parrafo

//modifica texto de un input
// document.getElementById("nombre").value = "pedro";

// actividad1
// const personas = ["roque", "cristian", "brian", "jonatan", "rodrigo", "diego"];

// const padre = document.getElementById("personas");

// for (const persona of personas) {
//   let li = document.createElement("li");
//   li.innerHTML = persona;
// }

//actividad 2

// let nombre = localStorage.getItem("saludo");
// if (nombre === null) {
//   nombre = prompt("ingrese su nombre");
//   localStorage.setItem("nombre", nombre);
// }

// let campoSaludo = document.getElementById("saludo");
// campoSaludo.innerHTML = `<h1>Bienvenido ${nombre}</h1>`;

// const productos = [
//   { id: 1, nombre: "fideos", precio: 125 },
//   { id: 2, nombre: "pan", precio: 100 },
//   { id: 3, nombre: "arroz", precio: 75 },
//   { id: 4, nombre: "harina", precio: 90 },
// ];

// for (const producto of productos) {
//   let contenedor = document.createElement("div");

//   contenedor.innerHTML = `
//     <h3> id: ${producto.id} </h3>
//     <p> producto: ${producto.nombre} </p>
//     <b>$ ${producto.precio} </b>
//     <button> add to cart </button>
//     <button> delete </button>
//     <hr>
//     `;

//   document.body.appendChild(contenedor);

//   console.log(producto);
// }
////////////////////////                          EVENTOS                             ////////////////////////
// //BUSCA EL BOTON CON ID btnPrincipal en el html
// let btn = document.getElementById("btnPrincipal");
// //al hacer click hace el alert
// btn.addEventListener("click", () => {
//   alert("Me tocaste =D");
// });
// //hace lo mismo q antes pero de otra forma
// btn.onclick = () => {
//   alert("Waaaaa");
// };

// ///
// let btn1 = document.getElementById("product1");
// btn1.addEventListener("click", () => agregarElemento(3));
// // igual a anterior
// document.getElementById("product1").addEventListener("click", () => agregarElemento(3));

// function agregarElemento(productoID) {
//   let producto = productos.find((p) => p.id == productoID);
//   //iguasl q lo de arriba
//   producto = productos.find(funtion (producto) {
//       if (producto.id == productoID)
//         return true;
//       else
//         return false;
//   })
//   carrito.push(producto);
//   alert("Se ha agregado el producto: " + producto.nombre);
// }
// //simil mouse over
// boton.onmousemove = () => console.log("algo se movio por aqui");
// //teclas
// inputNombre.onkeyup = () => console.log("se presiono una tecla");
// inputNombre.onkeydown = () => console.log("se solto una tecla");

// //envia data del formulario y lo limpia
// let miFormulario = document.getElementById("formulario");
// function validarFormulario(event) {
//   event.preventDefault();
//   miFormulario.reset();
// }

// miFormulario.addEventListener("submit".validarFormulario);

//traer elementos del formulario
// let formulario = document.getElementById("formulario");
// formulario.addEventListener("submit", validar);
// function validar(event) {
//   event.preventDefault();
//   let elemento = event.target;
//   console.log(elemento.children);
//   nombre = elemento.children[0].value;
//   edad = elemento.children[0].value;

//   alert(`Hola${nombre} con ${edad} años`);
// }

//en video agregar cosas al carrito y eleminar del carrito
