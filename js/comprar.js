let datos = {};
try {
  datos = JSON.parse(window.name);
} catch {
  datos = {};
}
let producto = datos.acomodar;

console.log("Producto repetido:  " + producto.cantidad);

console.log("Producto recibido:", producto);

const cont = document.querySelector("#listaCompras");

cont.innerHTML = producto
  .map(
    (p, i) => `


                            <section class="flex-item shadow-lg" data-index="${i}" >
                    <div class="card" >
                    <img id="img-card" src="${p.img}" class="card-img card-img-top " >
                    <div id="detalle-card"  class="card-body "> 
                        <h4 class="card-title">${p.titulo}</h4>
                        
                        
                    
       
                    </div>

                    <div class="d-inline-flex align-items-center gap-3 mt-2 mx-5 mb-2">
              <button
                id="btnMenos"
                class="btn btn-light border-secondary btn-qty"
                aria-label="Disminuir"
              >
                −
              </button>
              <span id="cantidad" data-index="${i}" class="qty-value">${p.cantidad}</span>
              <button
                id="btnMas"
            
                class="btn btn-primary btn-qty"
                aria-label="Aumentar"
              >
                +
              </button>
            </div>

                     <a id="flex-precio" class="card-precio" >${p.precio}</a>

                     <a  id="flex-eliminar">

<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
</a>

                </div>

                
                </section>

`
  )
  .join("");

cont.addEventListener("click", (e) => {
  const section = e.target.closest("section.flex-item");
  if (!section) return;

  const btnMenos = e.target.closest("#btnMenos");
  const btnMas = e.target.closest("#btnMas");
  const cantidad = section.querySelector("#cantidad");
  const cardPrecio = section.querySelector(".card-precio");
  const btnEliminar = e.target.closest("#flex-eliminar");

  const cantidadMostrar = Number(cantidad?.textContent);
  const priceNow = Number((cardPrecio?.textContent).replace(/[^0-9.]/g, ""));

  const unit = priceNow / cantidadMostrar;

  const dinero = (n) => `$${Number(n).toFixed(2)}`;

  const index = Number(cantidad?.dataset.index);

  if (btnMenos) {
    const valor = Math.max(0, cantidadMostrar - 1);
    cantidad.textContent = String(valor);
    cardPrecio.textContent = dinero(unit * valor);

    if (valor === 0) {
      section.remove();
      eliminarDatosProductos(index);
      guardarProductos();
      return;
    }

    console.log("click en menos");
    editarDatosProductos(index, valor, dinero(unit * valor));
    guardarProductos();
    return;
  }

  if (btnMas) {
    const valor = cantidadMostrar + 1;

    //tome de 10 productos
    if (valor > 10) {
      alert("No puedes agregar más de 10 unidades de este producto.");
      return;
    }

    cantidad.textContent = String(valor);
    cardPrecio.textContent = dinero(unit * valor);
    console.log("click en mas");
    editarDatosProductos(index, valor, dinero(unit * valor));
    guardarProductos();
    return;
  }

  if (btnEliminar) {
    section.remove();
    eliminarDatosProductos(index);
    guardarProductos();
    return;
  }
});

function guardarProductos() {
  window.name = JSON.stringify({ acomodar: producto });
}

function editarDatosProductos(index, num, dinero) {
  producto[index].cantidad = num;
  producto[index].precio = dinero;
  console.log("Producto editado:", producto);
}

function eliminarDatosProductos(index) {
  producto.splice(index, 1);
  console.log("Producto eliminado:", producto);
}
