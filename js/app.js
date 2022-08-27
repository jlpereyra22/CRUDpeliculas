import prototypePelis from "./classObject.js";
import{cantidadCaracteres,validDescription,validImagen,validGenero} from "./helper.js"




// Iniciamos Variables
let listaPeliculas = JSON.parse(localStorage.getItem("localStoragePeli"))||[];
const modalFormPeliculas = new bootstrap.Modal(document.querySelector("#modalForm"));
const btnCrearPelicula = document.getElementById("btnCrearPelicula")
let codigo = document.getElementById("codigo");
let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let genero = document.getElementById("genero");
let formPelicula = document.getElementById("formPelicula");

// events
btnCrearPelicula.addEventListener("click",()=>{mostrarForm(codigo)})
formPelicula.addEventListener("submit",crearPelicula);
codigo.addEventListener("blur",()=>{cantidadCaracteres(codigo)});
titulo.addEventListener("blur",()=>{cantidadCaracteres(titulo)});
descripcion.addEventListener("blur",()=>{validDescription(descripcion)});
imagen.addEventListener("blur",()=>{validImagen(imagen)});
genero.addEventListener("blur",()=>{validGenero(genero)});



function mostrarForm(){
  modalFormPeliculas.show();
  codigo.value = uuidv4();
}



function crearPelicula(e){
  e.preventDefault();
  console.log("vamo a crea la pelicula");
  const IngresarPelicula = new prototypePelis(codigo.value, titulo.value, descripcion.value, imagen.value, genero.value);
  console.log(IngresarPelicula);
  listaPeliculas.push(IngresarPelicula);
  console.log(listaPeliculas);
  guardarDatosSL();
}

function guardarDatosSL(){
  localStorage.setItem("localStoragePeli", JSON.stringify(listaPeliculas))
}