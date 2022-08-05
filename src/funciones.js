const nombre = document.querySelector("#nombre");
const numero = document.querySelector("#numero");
const btnAgregar = document.querySelector("#btn_agregar");
const btnBorrar = document.getElementsByClassName("borrar");

btnAgregar.addEventListener("click", function () {
  /* console.log(nombre.value, numero.value); */
  window.location.href = `agregar/${nombre.value}/${numero.value}`;
  /* window.location.reload(); */
});

for (let i of btnBorrar) {
  i.addEventListener("click", function () {
    let id = this.getAttribute("id");
    window.location.href = `borrar/${id}`;
   /*  window.location.reload(); */
  });
}
