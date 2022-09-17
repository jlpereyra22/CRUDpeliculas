console.log(window.location.search);


const parametroCodigo = new URLSearchParams(window.location.search);
console.log(parametroCodigo.get("codigo"));

let listaPeliculas = JSON.parse(localStorage.getItem("localStoragePeli"))|| [];
let peliBuscada = listaPeliculas.find((pelicula)=>{return pelicula.codigo == parametroCodigo.get("codigo")})


console.log(peliBuscada);

let detalle = document.getElementById("grillaDetalle");
detalle.innerHTML = `<article class= "text-center fs-1 p-3 text-white">
<h2 class="" >${peliBuscada.titulo}</h2>
<hr>
</article>
<div class="card mt-3 colorCard cardDetalle">
<img src="${peliBuscada.imagen}" class="card-img-top imgDetalle" alt="${peliBuscada.titulo}">
<div class="card-body text-white">
  <h3 class="card-title">${peliBuscada.titulo}</h3>
  <h4 class="card-text">Genero:${peliBuscada.genero}</h4>
  <h4 class="card-text"><small>Detalle ${peliBuscada.descripcion}</small></h4>
  <div>
    <a href="http://" class="btn btn-primary fs-4">Ir a la pelicula</a>
  </div>
</div>
</div>`