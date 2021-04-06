// clase 3 JS

let desde = 0;
let hasta = 7;
let acumulador = '';
let precios = [3000, 4500, 1799, 10, 500, 1000];
let nombres = ['remeras', 'buzos', 'chanclas', 'pantalones', 'shorts', 'zapatillas']

for (desde; desde < precios.length; desde++) {
    if (desde == 7) {
        continue; // salta directo al ciclo 8, sin ejecutar lo de abajo
    }

    acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">${nombres[desde]}</a>
        </h4>
        <h5>$${precios[desde]}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
    </div>`;

}

document.getElementById('productos').innerHTML = acumulador;
