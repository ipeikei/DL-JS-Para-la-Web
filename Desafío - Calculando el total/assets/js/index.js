let precio = 400000;
let cantidad = 0;

// Capturamos elementos del DOM
const precioSpan = document.querySelector(".precio-inicial");
const cantidadSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const botones = document.querySelectorAll("button");

// Mostramos el precio inicial
precioSpan.innerHTML = precio;

// Asignamos eventos a los botones
botones[0].onclick = () => {
  cantidad++;
  actualizarDOM();
};

botones[1].onclick = () => {
  if (cantidad > 0) {
    cantidad--;
    actualizarDOM();
  }
};

// Función para actualizar cantidad y total
function actualizarDOM() {
  cantidadSpan.innerHTML = cantidad;
  totalSpan.innerHTML = cantidad * precio;
}
