// clase 3 JS

let desde = 0;
let hasta = 7;

let acumulador = 0;

let precio = 2000;

for (desde; desde < hasta; desde++) {
    
    if (desde == 7) {
        continue; // salta directo al ciclo 8, sin ejecutar lo de abajo
    }

    acumulador += 5000;
    acumulador += `<div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">Producto ${desde}</a>
        </h4>
        <h5>$${precio}</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
      </div>
      <div class="card-footer">
        <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
      </div>
    </div>
    </div>`;

}

// template string
// console.log(`El total de nuestro carrito es: ${acumulador}`);

document.getElementById('productos').innerHTML = acumulador;

// --------------------------

for (let i = 0; i < 20; i++) {
    console.log(i);
}

// --------------------------

// for (let i = 0; i < 20; i++) {
//     console.log(i);
// }

let aux = 0;

// while (aux < 20) {
//   console.log(aux);
// }

do {
  aux++;
//   console.log(aux);
} while (aux < 20);

switch (aux) {
    case 20:
        // alert('El aux es 20');
        break;
    case 30:
        // alert('El aux es 30');
        break;
    default:
        // alert('No encontramos tu numero');
}