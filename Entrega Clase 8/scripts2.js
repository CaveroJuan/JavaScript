//Cargar data localmente
function cargarLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}

class IngredienteLocal {
  constructor(obj) {
    this.nombre = obj.nombre;
    this.cantidad = obj.cantidad;
    this.precio = obj.precio;
    this.fecha = obj.fecha;

    this.precioUnidadMedida = obj.precioUnidadMedida;
  }
}

const ingredientesLocal = [];

for (let index of cargarLocal("listadoIngredientes")) {
  ingredientesLocal.push(new IngredienteLocal(index));
}

//////// tabla full
let tablaFull = document.getElementById("tablaFull"); //SELECCIONA LA TABLA
for (objeto of ingredientesLocal) {
  //PARA CADA 1 CREA UNA FILA
  let fila = document.createElement("tr");
  tablaFull.appendChild(fila);
  for (propiedad in objeto) {
    if (propiedad === "precioUnidadMedida") {
      continue;
    } else {
      //CREA UNA COLUMNA POR CADA PROPIEDAD, MENOS PARA PRECIOUNIDADMEDIDA
      let columna = document.createElement("td");
      columna.innerHTML = `<h4>${objeto[propiedad]}</h4>`;
      fila.appendChild(columna);
    }
  }
}
