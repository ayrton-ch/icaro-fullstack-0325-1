const cont = document.querySelector("#lista");

async function cargarProductos() {
  const resp = await fetch("datos.json", { cache: "no-store" });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  console.log(resp);
  return await resp.json();
}
cargarProductos().then((json) => {
  cont.innerHTML = json
    .map(
      (p, i) => `
          <section class="flex-item shadow-lg" data-index="${i}" >
                    <div class="card" >
                    <img id="img-card" src="${p.img}" class="card-img card-img-top " >
                    <div id="detalle-card"  class="card-body rounded-bottom-3"> 
                        <h3 class="card-title">${p.titulo}</h3>
                        <p class="card-text">${p.detalle}</p>
                        
                          <a id="flex-precio" class="card-precio" >${p.precio}</a>
                    
                        <a id="flex-comprar" class="btnAgregar${i} btn btn-primary">Agregar</a>
                      
                    </div>
                </div>
                </section>
`
    )
    .join("");

  const clickProductUno = document.querySelector(".btnAgregar0");
  const clickProductDos = document.querySelector(".btnAgregar1");
  const clickProductTres = document.querySelector(".btnAgregar2");
  const clickProductCuatro = document.querySelector(".btnAgregar3");
  const clickProductCinco = document.querySelector(".btnAgregar4");
  const clickProductSeis = document.querySelector(".btnAgregar5");
  const clickProductSiete = document.querySelector(".btnAgregar6");
  const clickProductOcho = document.querySelector(".btnAgregar7");

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
    agregarProductos(0, 1, 2, 3);
  });

  clickProductDos.addEventListener("click", function () {
    agregarProductos(4, 5, 6, 7);
  });

  clickProductTres.addEventListener("click", function () {
    agregarProductos(8, 9, 10, 11);
  });

  clickProductCuatro.addEventListener("click", function () {
    agregarProductos(12, 13, 14, 15);
  });

  clickProductCinco.addEventListener("click", function () {
    agregarProductos(16, 17, 18, 19);
  });

  clickProductSeis.addEventListener("click", function () {
    agregarProductos(20, 21, 22, 23);
  });

  clickProductSiete.addEventListener("click", function () {
    agregarProductos(24, 25, 26, 27);
  });

  clickProductOcho.addEventListener("click", function () {
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
});
