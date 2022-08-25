import{cantidadCaracteres} from "./helper.js"




// Iniciamos Variables

let codigo = document.getElementById("codigo");
let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");
let imagen = document.getElementById("imagen");
let genero = document.getElementById("genero");
let formPelicula = document.getElementById("formPelicula");

// events
formPelicula.addEventListener("submit",crearPelicula)
codigo.addEventListener("blur",()=>{cantidadCaracteres(codigo)})

function crearPelicula(e){
  e.preventDefault();
  console.log("vamo a crea la pelicula")
}