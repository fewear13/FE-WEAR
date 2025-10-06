let carrito = [];
let carritoVisible = false;

function agregarCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalEl = document.getElementById("total");
  const contador = document.getElementById("contador-carrito");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - $${item.precio} MXN`;
    lista.appendChild(li);
    total += item.precio;
  });

  totalEl.textContent = `Total: $${total} MXN`;
  contador.textContent = carrito.length;
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}

function toggleCarrito() {
  carritoVisible = !carritoVisible;
  document.getElementById("carrito").style.display = carritoVisible ? "block" : "none";
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío 😅");
    return;
  }

  let resumen = "🛍️ Tu pedido FeWear:\n\n";
  let total = 0;

  carrito.forEach((item) => {
    resumen += `• ${item.nombre} - $${item.precio} MXN\n`;
    total += item.precio;
  });

  resumen += `\nTotal a pagar: $${total} MXN\n\nGracias por tu compra 💛 FeWear`;

  alert(resumen);
  vaciarCarrito();
  document.getElementById("carrito").style.display = "none";
}
