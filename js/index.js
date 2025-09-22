const cont = document.querySelector("#lista");

async function cargarProductos() {
  const resp = await fetch("datos.json", { cache: "no-store" });
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  console.log(resp);
  return await resp.json();
}
cargarProductos().then((json) => {
  const productos = [];

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
                    
                        <a id="flex-comprar"  class="btn btn-primary btn-agregar" data-index="${i}">Agregar</a>
                      
                    </div>
                </div>
                </section>
`
    )
    .join("");

  cont.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn-agregar");
    if (!btn) return;
    const i = Number(btn.dataset.index);
    const p = json[i];
    agregarProductos(p);
  });

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

  function agregarProductos(lista) {
    console.log("click en agregar: " + lista);
    const dato = {
      img: lista.img,
      titulo: lista.titulo,
      detalle: lista.detalle,
      precio: lista.precio,
    };

    productos.push(dato);
    console.log(productos);
    numeroShop();
  }
});
