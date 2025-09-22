const clickProductUno = document.querySelector(".btnAgregarUno");
const clickProductDos = document.querySelector(".btnAgregarDos");
const clickProductTres = document.querySelector(".btnAgregarTres");
const clickProductCuatro = document.querySelector(".btnAgregarCuatro");
const clickProductCinco = document.querySelector(".btnAgregarCinco");
const clickProductSeis = document.querySelector(".btnAgregarSeis");
const clickProductSiete = document.querySelector(".btnAgregarSiete");
const clickProductOcho = document.querySelector(".btnAgregarOcho");

function sumarNumeroShop(num) {
  const cartContador = document.querySelector("#cartContador");
  cartContador.classList.remove("d-none");
  let numero = parseInt(cartContador.innerText);
  numero += num;
  cartContador.innerText = numero;
}

const listaProductos = document.querySelectorAll(
  ".card-title, .card-text, .card-precio, .card-img"
);

clickProductUno.addEventListener("click", function () {
  sumarNumeroShop(1);

  console.log(listaProductos[0].getAttribute("src"));
  console.log(listaProductos[1].innerText);
  console.log(listaProductos[2].innerText);
  console.log(listaProductos[3].innerText);

  agregarProductos();
});

clickProductDos.addEventListener("click", function () {
  sumarNumeroShop(1);
  console.log(listaProductos[4].getAttribute("src"));
  console.log(listaProductos[5].innerText);
  console.log(listaProductos[6].innerText);
  console.log(listaProductos[7].innerText);
  agregarProductos();
});

clickProductTres.addEventListener("click", function () {
  sumarNumeroShop(1);
  console.log(listaProductos[8].getAttribute("src"));
  console.log(listaProductos[9].innerText);
  console.log(listaProductos[10].innerText);
  console.log(listaProductos[11].innerText);
  agregarProductos();
});

clickProductCuatro.addEventListener("click", function () {
  sumarNumeroShop(1);
  console.log(listaProductos[12].getAttribute("src"));
  console.log(listaProductos[13].innerText);
  console.log(listaProductos[14].innerText);
  console.log(listaProductos[15].innerText);

  agregarProductos();
});

clickProductCinco.addEventListener("click", function () {
  sumarNumeroShop(1);
  console.log(listaProductos[16].getAttribute("src"));
  console.log(listaProductos[17].innerText);
  console.log(listaProductos[18].innerText);
  console.log(listaProductos[19].innerText);
  agregarProductos();
});

clickProductSeis.addEventListener("click", function () {
  sumarNumeroShop(1);
  console.log(listaProductos[20].getAttribute("src"));
  console.log(listaProductos[21].innerText);
  console.log(listaProductos[22].innerText);
  console.log(listaProductos[23].innerText);

  agregarProductos();
});

clickProductSiete.addEventListener("click", function () {
  sumarNumeroShop(1);
  console.log(listaProductos[24].getAttribute("src"));
  console.log(listaProductos[25].innerText);
  console.log(listaProductos[26].innerText);
  console.log(listaProductos[27].innerText);
  agregarProductos();
});

clickProductOcho.addEventListener("click", function () {
  sumarNumeroShop(1);
  console.log(listaProductos[28].getAttribute("src"));
  console.log(listaProductos[29].innerText);
  console.log(listaProductos[30].innerText);
  console.log(listaProductos[31].innerText);
  agregarProductos();
});

function agregarProductos(lista) {}
