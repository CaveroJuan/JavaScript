//Variables
let fechas = parseInt(
  prompt("Ingrese la cantidad de partidos que faltan jugar en el torneo")
);
let puntos = parseInt(
  prompt("Ingrese cuantos puntos de diferencia le saca el primero")
);

//Funciones
if (isNaN(fechas) || isNaN(puntos)) {
  alert("Un campo se encuntra nulo");
} else {
  let puntosPosibles = fechas * 3;
  let puntosLlegan = puntosPosibles - puntos;
  if (puntosLlegan > 0) {
    alert("Es posible quedar primero");
  } else {
    alert("No es posible alcanzar al primero, suerte la proxima");
  }
}
