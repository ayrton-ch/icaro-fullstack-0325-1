const cont = document.querySelector("#lista");
//obtener le json del la carpeta doc CSSNestedDeclarations.json
const datoJson = [
  {
    img: "img/p1.webp",
    titulo: "Llave de Impacto",
    detalle:
      "Herramienta sin cables con motor de alto torque, perfecta para aflojar y ajustar pernos o tuercas con rapidez. Incluye batería recargable y diseño ergonómico para uso prolongado.",
    precio: "$150.00",
  },
  {
    img: "img/p2.webp",
    titulo: "Truper Juego de Dados y Puntas",
    detalle:
      "Set completo con dados, puntas y accesorios de acero al cromo vanadio para mayor durabilidad. Viene en estuche organizado, ideal para trabajos mecánicos y de mantenimiento.",
    precio: "$25.00",
  },
  {
    img: "img/p3.webp",
    titulo: "Kit de Herramientas Básico 17 Piezas",
    detalle:
      "Incluye herramientas esenciales como martillo, destornilladores, pinzas, cinta métrica y llave ajustable. Perfecto para reparaciones domésticas y proyectos simples.",
    precio: "$30.00",
  },
  {
    img: "img/p4.webp",
    titulo: "Daewoo Combo Taladro Percutor + Amoladora Angular",
    detalle:
      "Taladro percutor potente para perforar madera, metal y mampostería, acompañado de amoladora angular para cortes y desbastes. Ideal para trabajos de construcción y bricolaje.",
    precio: "$85.00",
  },
  {
    img: "img/p5.webp",
    titulo: "Bahco Destornillador Plano",
    detalle:
      "Destornillador de alta calidad con mango bicolor antideslizante y punta plana resistente, diseñado para trabajos de precisión y uso profesional.",
    precio: "$15.00",
  },
  {
    img: "img/p6.webp",
    titulo: "Pretul Juego de 3 Pinzas",
    detalle:
      'Set con pinza de electricista 8", punta larga 6" y corte diagonal 6"; mangos antideslizantes.',
    precio: "$14.00",
  },
  {
    img: "img/p7.webp",
    titulo: "Ingco Industrial Juego de Llaves Combinadas (8 pzs)",
    detalle:
      "Llaves combinadas (abierta + estrella) en portallaves; medidas escalonadas para mecánica general.",
    precio: "$28.00",
  },
  {
    img: "img/p8.webp",
    titulo: "Varilla Corrugada de Acero (rebar)",
    detalle:
      "Barras estriadas para refuerzo de hormigón; alta adherencia y resistencia para construcción.",
    precio: "$3.00",
  },
  {
    img: "img/p7.webp",
    titulo: "Ingco Industrial Juego de Llaves Combinadas (8 pzs)",
    detalle:
      "Llaves combinadas (abierta + estrella) en portallaves; medidas escalonadas para mecánica general.",
    precio: "$28.00",
  },
  {
    img: "img/p8.webp",
    titulo: "Varilla Corrugada de Acero (rebar)",
    detalle:
      "Barras estriadas para refuerzo de hormigón; alta adherencia y resistencia para construcción.",
    precio: "$3.00",
  },
  {
    img: "img/p7.webp",
    titulo: "Ingco Industrial Juego de Llaves Combinadas (8 pzs)",
    detalle:
      "Llaves combinadas (abierta + estrella) en portallaves; medidas escalonadas para mecánica general.",
    precio: "$28.00",
  },
  {
    img: "img/p8.webp",
    titulo: "Varilla Corrugada de Acero (rebar)",
    detalle:
      "Barras estriadas para refuerzo de hormigón; alta adherencia y resistencia para construcción.",
    precio: "$3.00",
  },
];
cont.innerHTML = datoJson
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
