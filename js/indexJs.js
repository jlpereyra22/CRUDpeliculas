let listaPeliculas = JSON.parse(localStorage.getItem("localStoragePeli"))|| [];

//dibujar columnas

listaPeliculas.map((pelicula)=>{crearColumna(pelicula)})


function crearColumna(pelicula){
    let grilla = document.getElementById("cardPeliculas");
    grilla.innerHTML += `
    <div
    class="card m-3 col-sm-12 col-md-6 col-lg-3"
    style="width: 18rem"
  >
    <img src="${pelicula.imagen}" class="card-img-top" alt="${pelicula.titulo}" />
    <div class="card-body">
      <h4 class="card-title">
        ${pelicula.titulo}
      </h4>
      <div class="d-grid gap-2">
        <a href="/pages/detallesMacross.html" class="btn btn-primary"
          >Detalle</a
        >
      </div>
    </div>
  </div>
    `
}