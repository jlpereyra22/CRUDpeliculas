import{cantidadCaracteres,validDescription,validImagen,validGenero} from "./helper.js"




// Iniciamos Variables

let codigo = document.getElementById("codigo");
let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let genero = document.getElementById("genero");
let formPelicula = document.getElementById("formPelicula");

// events
formPelicula.addEventListener("submit",crearPelicula);
codigo.addEventListener("blur",()=>{cantidadCaracteres(codigo)});
titulo.addEventListener("blur",()=>{cantidadCaracteres(titulo)});
descripcion.addEventListener("blur",()=>{validDescription(descripcion)});
imagen.addEventListener("blur",()=>{validImagen(imagen)});
genero.addEventListener("blur",()=>{validGenero(genero)});

function crearPelicula(e){
  e.preventDefault();
  console.log("vamo a crea la pelicula")
}