$("body").append('<h3 class="textoUno" style="display:none;">TEXTO 1</h3>');
$("body").append('<h3 class="textoDos" style="display:none;">TEXTO 2</h3>');

mostrarUno();

function ocultarDos() {
  $(".textoDos").fadeOut("fast", () => {
    mostrarUno();
  });
}

function ocultarUno() {
  $(".textoUno").fadeOut("fast", () => {
    ocultarDos();
  });
}

function mostrarUno() {
  $(".textoUno").fadeIn("slow", () => {
    mostrarDos();
  });
}

function mostrarDos() {
  $(".textoDos").fadeIn("slow", () => {
    ocultarUno();
  });
}

$("body").append('<div class="formaUno" style="background-color:red;width:100px;height:100px;";"></div>');
$("body").append('<button id="btn1">Mover</button>');

$("#btn1").click(() => {
  $(".formaUno").animate(
    {
      marginLeft: "100px",
    },
    () => volver()
  );
});

function volver() {
  $(".formaUno").animate({
    marginLeft: "0px",
  });
}

$("body").append('<div class="formaDos" style="background-color:green;width:100px;height:100px;";"></div>');
$("body").append('<button id="btn2">Estirar</button>');

$("#btn2").click(() => {
  $(".formaDos")
    .animate(
      {
        height: "200px",
      },
      1000,
      () => estirar()
    )
    .delay(3000);
});

function estirar() {
  $(".formaDos").animate(
    {
      height: "100px",
    },
    1000
  );
}
