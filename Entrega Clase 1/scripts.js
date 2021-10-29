console.log("Inicio");
alert("Puntos en un torneo de Futbol");
let ganados = parseInt(prompt("Ingrese la cantidad de partidos ganados"));
let empatados = parseInt(prompt("Ingrese la cantidad de partidos empatados"));
let perdidos = parseInt(prompt("Ingrese la cantidad de partidos perdidos"));
let partidos = ganados + empatados + perdidos;
let puntos = ganados * 3 + empatados;
alert("Sacaron " + puntos + " puntos, en " + partidos + " partidos jugados");
console.log("Fin");
