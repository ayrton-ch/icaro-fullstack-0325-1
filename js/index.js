const clickProductUno = document.querySelector(".btnAgregarUno");
const clickProductDos = document.querySelector(".btnAgregarDos");

function sumarNumeroShop(num) {
  const cartContador = document.querySelector("#cartContador");
  cartContador.classList.remove("d-none");
  let numero = parseInt(cartContador.innerText);
  numero += num;
  cartContador.innerText = numero;
}

const listaProductos = document.querySelectorAll(
  ".card-title, .card-text, .card-precio"
);

clickProductUno.addEventListener("click", function () {
  sumarNumeroShop(1);

  console.log(listaProductos[0].innerText);
  console.log(listaProductos[1].innerText);
  console.log(listaProductos[2].innerText);

  agregarProductos();
});

clickProductDos.addEventListener("click", function () {
  sumarNumeroShop(1);

  console.log(listaProductos[3].innerText);
  console.log(listaProductos[4].innerText);
  console.log(listaProductos[5].innerText);
  agregarProductos();
});

function agregarProductos(lista) {}
