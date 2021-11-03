// Tablas de multiplicar
let encuesta = true;
while (encuesta === true) {
  let dato = parseInt(prompt("¿La tabla de que numero quiere ver?"));
  console.log("Es la tabla del: " + dato);
  for (let i = 1; i <= 10; i++) {
    let multiplo = dato * i;
    console.log(dato + " X " + i + " = " + multiplo);
  }
  encuesta = confirm("¿Desea ver otra tabla de multiplicar?");
  console.log(encuesta);
}
console.log("Fin");
