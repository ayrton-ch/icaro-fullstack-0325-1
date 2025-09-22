const clickProductUno = document.querySelector(".btnAgregarUno");
const clickProductDos = document.querySelector(".btnAgregarDos");
const clickProductTres = document.querySelector(".btnAgregarTres");
const clickProductCuatro = document.querySelector(".btnAgregarCuatro");
const clickProductCinco = document.querySelector(".btnAgregarCinco");
const clickProductSeis = document.querySelector(".btnAgregarSeis");
const clickProductSiete = document.querySelector(".btnAgregarSiete");
const clickProductOcho = document.querySelector(".btnAgregarOcho");

const comprar = document.querySelector("#comprar");

comprar.addEventListener("click", function () {
  console.log("click en comprar");
  window.location.href = "comprar.html";
});

function numeroShop() {
  const cartContador = document.querySelector("#cartContador");
  cartContador.classList.remove("d-none");

  cartContador.innerText = productos.length;
}

const productos = [];

const listaProductos = document.querySelectorAll(
  ".card-title, .card-text, .card-precio, .card-img"
);

clickProductUno.addEventListener("click", function () {
  console.log(listaProductos[0].getAttribute("src"));
  console.log(listaProductos[1].innerText);
  console.log(listaProductos[2].innerText);
  console.log(listaProductos[3].innerText);

  agregarProductos(0, 1, 2, 3);
});

clickProductDos.addEventListener("click", function () {
  console.log(listaProductos[4].getAttribute("src"));
  console.log(listaProductos[5].innerText);
  console.log(listaProductos[6].innerText);
  console.log(listaProductos[7].innerText);
  agregarProductos(4, 5, 6, 7);
});

clickProductTres.addEventListener("click", function () {
  console.log(listaProductos[8].getAttribute("src"));
  console.log(listaProductos[9].innerText);
  console.log(listaProductos[10].innerText);
  console.log(listaProductos[11].innerText);

  agregarProductos(8, 9, 10, 11);
});

clickProductCuatro.addEventListener("click", function () {
  console.log(listaProductos[12].getAttribute("src"));
  console.log(listaProductos[13].innerText);
  console.log(listaProductos[14].innerText);
  console.log(listaProductos[15].innerText);

  agregarProductos(12, 13, 14, 15);
});

clickProductCinco.addEventListener("click", function () {
  console.log(listaProductos[16].getAttribute("src"));
  console.log(listaProductos[17].innerText);
  console.log(listaProductos[18].innerText);
  console.log(listaProductos[19].innerText);

  agregarProductos(16, 17, 18, 19);
});

clickProductSeis.addEventListener("click", function () {
  console.log(listaProductos[20].getAttribute("src"));
  console.log(listaProductos[21].innerText);
  console.log(listaProductos[22].innerText);
  console.log(listaProductos[23].innerText);

  agregarProductos(20, 21, 22, 23);
});

clickProductSiete.addEventListener("click", function () {
  console.log(listaProductos[24].getAttribute("src"));
  console.log(listaProductos[25].innerText);
  console.log(listaProductos[26].innerText);
  console.log(listaProductos[27].innerText);

  agregarProductos(24, 25, 26, 27);
});

clickProductOcho.addEventListener("click", function () {
  console.log(listaProductos[28].getAttribute("src"));
  console.log(listaProductos[29].innerText);
  console.log(listaProductos[30].innerText);
  console.log(listaProductos[31].innerText);

  agregarProductos(28, 29, 30, 31);
});

function agregarProductos(lista) {
  const dato = {
    img: listaProductos[lista].getAttribute("src"),
    titulo: listaProductos[lista + 1].innerText,
    detalle: listaProductos[lista + 2].innerText,
    precio: listaProductos[lista + 3].innerText,
  };

  productos.push(dato);
  console.log(productos);
  numeroShop();
}
