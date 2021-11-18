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
// const productos = [
//   { id: 1, nombreProducto: "arroz", precio: 100 },
//   { id: 2, nombreProducto: "pasta", precio: 120 },
//   { id: 3, nombreProducto: "azucar", precio: 150 },
//   { id: 4, nombreProducto: "cerveza", precio: 80 },
// ];

// const guardarLocal = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// for (const producto of productos) {
//   guardarLocal(producto.id, producto);
// }
