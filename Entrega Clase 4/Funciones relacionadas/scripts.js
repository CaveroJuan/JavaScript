// ----------------------NOTAS--------------------
// estacionamiento abierto 24 horas
// cantidad de lugares para estacionar
// 3 turnos -> entonces 3 precios diferentes
// ingresar cantidad de autos por turno
// ingresar cantidad de camionetas por turno  !!!
// ingresar cantidad de motor por turno       !!!
// cantidad de $ por turno
// cantidad de $ total
// -----------------------------------------------

//Variables

//Se utiliza en: Funcion ingresar precios por turno
let precioMañana;
let precioTarde;
let precioNoche;
//Se utiliza en: Funcion ingresar autos por turno
let autosMañana;
let autosTarde;
let autosNoche;
//Se utiliza en: Funcion ingresos $ por turno
let ingresoMañana;
let ingresoTarde;
let ingresoNoche;

//Funciones
function pedirPrecio(dato) {
  //Pedir precio
  let precio = parseInt(prompt("Ingrese el precio del turno " + dato));
  return precio;
}

function ingresarPrecios() {
  //Precio en cada turno
  precioMañana = pedirPrecio("mañana");
  precioTarde = pedirPrecio("tarde");
  precioNoche = pedirPrecio("noche");
}

function ingresarVehiculos(dato) {
  let cantVehiculos = parseInt(
    prompt("Ingrese la cantidad de vehiculos en el turno " + dato)
  );
  return cantVehiculos;
}

function ingresarAutos() {
  //Cantidad de autos en cada turno
  autosMañana = ingresarVehiculos("mañana");
  autosTarde = ingresarVehiculos("tarde");
  autosNoche = ingresarVehiculos("noche");
}

function subtotalIngresos(turno, precio, cantidad) {
  let subTotal = precio * cantidad;
  console.log("Los ingresos del turno " + turno + " fueron de: " + subTotal);
  return subTotal;
}

function ingresosPorTurno() {
  //Cantidad de ingresos $ en cada turno
  ingresoMañana = subtotalIngresos("mañana", precioMañana, autosMañana);
  ingresoTarde = subtotalIngresos("tarde", precioTarde, autosTarde);
  ingresoNoche = subtotalIngresos("noche", precioNoche, autosNoche);
}

function ingresosTotal() {
  //Cantidad total de ingesos $
  let total = ingresoMañana + ingresoTarde + ingresoNoche;
  console.log("Los ingresos del día fueron de: " + total);
}

function cierreCaja() {
  //Proceso de cierre de caja - Llamado a todas las funciones
  let hacer = confirm("¿Realizar el cierre de caja?");
  if (hacer === true) {
    ingresarPrecios();
    ingresarAutos();
    alert("Resultados por consola");
    ingresosPorTurno();
    ingresosTotal();
  } else {
    alert("Cierre de caja anulado");
  }
}

//PROGRAMA
cierreCaja();
