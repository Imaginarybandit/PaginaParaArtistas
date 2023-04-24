const opciones = document.querySelectorAll("#octOp");
const actividadesYGalerias = document.querySelector("#actYGal");
const titleImageG = document.querySelector("#titleImage");
const opGroup = document.querySelectorAll(".octOp");
const mediaQuery = window.matchMedia("(max-width: 1042px)");
const mediaQuery2 = window.matchMedia("(max-min: 790px)");

actividadesYGalerias.style.width = "1000px";

for (let opcion of opciones) {
  opcion.addEventListener("click", function (e) {
    e.preventDefault();

    for (let opcion of opciones) {
      opcion.parentNode.classList.remove("selected");
    }

    opcion.parentNode.classList.add("selected");

    console.log(opcion.childNodes[0].textContent);
  });
}

//set an event listener for activities and gallery whenever the screen is resized
window.addEventListener("resize", function () {
  titleImageG.style.height = titleImageG.clientWidth * 0.35 + "px";
  actividadesYGalerias.style.width = "100%";
});
