let listaPeliculas = JSON.parse(localStorage.getItem("localStoragePeli")) || [];

//dibujar columnas

listaPeliculas.map((pelicula) => {
  crearColumna(pelicula);
});

function crearColumna(pelicula) {
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
      <button class="btn btn-primary" onclick="detallePelicula('${pelicula.codigo}')">ver detalle</button>
          
        >
      </div>
    </div>
  </div>
    `;
}


function detallePelicula(codigo){
    console.log(codigo);
    console.log(window.location.origin + "/pages/detallespelis.html?codigo="+ codigo);
    window.location.href = window.location.origin + "/pages/detallespelis.html?codigo="+ codigo;
}