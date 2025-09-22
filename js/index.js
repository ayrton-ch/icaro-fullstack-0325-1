const clickProduct = document.getElementById("flex-comprar");

function sumarNumeroShop(num) {
  const cartContador = document.querySelector("#cartContador");
  cartContador.classList.remove("d-none");
  let numero = parseInt(cartContador.innerText);
  numero += num;
  cartContador.innerText = numero;
}

clickProduct.addEventListener("click", function () {
  sumarNumeroShop(1);

  agregarProductos();
});

function agregarProductos(lista) {}
