import prototypePelis from "./classObject.js";
import {
  cantidadCaracteres,
  validDescription,
  validImagen,
  validGenero,
} from "./helper.js";

// Iniciamos Variables
let listaPeliculas = JSON.parse(localStorage.getItem("localStoragePeli")) || [];
const modalFormPeliculas = new bootstrap.Modal(
  document.querySelector("#modalForm")
);
const btnCrearPelicula = document.getElementById("btnCrearPelicula");
let codigo = document.getElementById("codigo");
let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let genero = document.getElementById("genero");
let formPelicula = document.getElementById("formPelicula");
let peliculaNueva = true; //true crear, false editar

// events
btnCrearPelicula.addEventListener("click", () => {
  mostrarForm(codigo);
});
formPelicula.addEventListener("submit", crearPelicula);
codigo.addEventListener("blur", () => {
  cantidadCaracteres(codigo);
});
titulo.addEventListener("blur", () => {
  cantidadCaracteres(titulo);
});
descripcion.addEventListener("blur", () => {
  validDescription(descripcion);
});
imagen.addEventListener("blur", () => {
  validImagen(imagen);
});
genero.addEventListener("blur", () => {
  validGenero(genero);
});
cargaInicial();

// Funciones

function mostrarForm() {
  peliculaNueva = true
  modalFormPeliculas.show();
  codigo.value = uuidv4();
}

function crearPelicula(e) {
  e.preventDefault();
  if(peliculaNueva === true){
    generarPelicula();
  }else{
    actualizarPelicula();
  }
 
}
function generarPelicula(){
  console.log("vamo a crea la pelicula");
  const IngresarPelicula = new prototypePelis(
    codigo.value,
    titulo.value,
    descripcion.value,
    imagen.value,
    genero.value
  );
  console.log(IngresarPelicula);
  listaPeliculas.push(IngresarPelicula);
  console.log(listaPeliculas);
  guardarDatosSL();
  limpiarForm();
  crearFila(IngresarPelicula);
  Swal.fire(
    "Pelicula creada",
    "La pelicula fue creada correctamente",
    "success"
  );
  modalFormPeliculas.hide();
}

function guardarDatosSL() {
  localStorage.setItem("localStoragePeli", JSON.stringify(listaPeliculas));
}

function limpiarForm() {
  formPelicula.reset();
  titulo.className = "form-control";
  descripcion.className = "form-control";
  imagen.className = "form-control";
  genero.className = "form-control";
}

function crearFila(pelicula) {
  console.log(pelicula);
  let tablaPelicula = document.querySelector("#tablaPelicula");
  tablaPelicula.innerHTML += `<tr>
  <th scope="row" class=" text-truncate" style="max-width: 150px;">${pelicula.codigo}</th>
  <td >${pelicula.titulo}</td>
  <td class=" text-truncate" style="max-width: 150px;">${pelicula.descripcion}</td>
  <td class=" text-truncate" style="max-width: 150px;">${pelicula.imagen}</td>
  <td>"${pelicula.genero}"</td>
  <td>
    <button class="btn">
    <i class="bi bi-pencil-square text-warning fs-1" onclick = "editarPelicula('${pelicula.codigo}')"></i>
  </button>
  <button class="btn">
    <i class="bi bi-clipboard-x-fill text-danger fs-1" onclick="borrarpelicula('${pelicula.codigo}')"></i>
  </button>
  </td>
</tr>`;
}

function cargaInicial() {
  if (listaPeliculas.length > 0) {
    listaPeliculas.map((pelicula) => {
      crearFila(pelicula);
    });
  }
}

window.borrarpelicula = function (codigo) {
  Swal.fire({
    title: "Eliminar Pelicula",
    text: "Si eliminas la pelicula no podras volver a recuperar",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, Eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let copiaListaPeliculas = listaPeliculas.filter((pelicula) => {
        return pelicula.codigo != codigo;
      });
      console.log(copiaListaPeliculas);
      listaPeliculas = copiaListaPeliculas;
      guardarDatosSL();
      actualizarTabla();
      Swal.fire(
        "Eliminada!",
        "Has eliminado con exito esta pelicula",
        "success"
      );
    }
  });
};

function actualizarTabla() {
  let tablaPelicula = document.querySelector("#tablaPelicula");
  tablaPelicula.innerHTML = "";
  cargaInicial();
}

window.editarPelicula = function (fCodigo) {
  peliculaNueva = false
  modalFormPeliculas.show();
  let peliBuscada = listaPeliculas.find(
    (pelicula) => pelicula.codigo == fCodigo
  );
  codigo.value = peliBuscada.codigo;
  titulo.value = peliBuscada.titulo;
  descripcion.value = peliBuscada.descripcion;
  imagen.value = peliBuscada.imagen;
  genero.value = peliBuscada.genero;
};


function actualizarPelicula(){
  console.log("vamo a actualiza lo form");
  listaPeliculas[0].titulo = titulo.value;
}
