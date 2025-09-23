const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

img2.addEventListener("click", () => {
  const imgenDos = img2.src;
  img2.src = img1.src;
  img1.src = imgenDos;
});

img3.addEventListener("click", () => {
  const imgenTres = img3.src;
  img3.src = img1.src;
  img1.src = imgenTres;
});

img4.addEventListener("click", () => {
  const imgenCuatro = img4.src;
  img4.src = img1.src;
  img1.src = imgenCuatro;
});
