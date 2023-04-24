const opciones = document.querySelectorAll("#octOp");

//do an event listener for each option in the array when clicked
for (let opcion of opciones) {
  //do a function when clicked
  opcion.addEventListener("click", function (e) {
    e.preventDefault();
    for (let opcion of opciones) {
      opcion.parentNode.classList.remove("selected");
    }

    //add selected to the parent of the clicked option

    opcion.parentNode.classList.add("selected");
  });
}
