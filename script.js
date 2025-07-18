const productos = [
  { id: 1, title: 'Plan Conservador', price: 5000, image: 'img/conservador.jpg' },
  { id: 2, title: 'Plan Moderado', price: 10000, image: 'img/moderado.jpg' },
  { id: 3, title: 'Plan Agresivo', price: 15000, image: 'img/agresivo.jpg' },
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function guardarCarrito() {
  localStorage.setItem('carrito', JSON.stringify(carrito));
}

function actualizarCarrito() {
  const contenedor = document.querySelector('.carrito-container');
  const totalSpan = document.getElementById('total');
  const contadorSpan = document.getElementById('contador');
  contenedor.innerHTML = '';
  let total = 0;
  let cantidadTotal = 0;
  carrito.forEach(item => {
    total += item.price * item.cantidad;
    cantidadTotal += item.cantidad;
    const div = document.createElement('div');
    div.classList.add('carrito-item');
    div.innerHTML = `
      <p>${item.title}</p>
      <p>Precio: $${item.price.toFixed(2)}</p>
      <input type="number" min="1" value="${item.cantidad}" data-id="${item.id}" />
      <button data-id="${item.id}">Eliminar</button>
    `;
    contenedor.appendChild(div);
  });
  totalSpan.textContent = total.toFixed(2);
  contadorSpan.textContent = cantidadTotal;
  guardarCarrito();
}

function agregarAlCarrito(producto) {
  const existe = carrito.find(item => item.id === producto.id);
  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }
  actualizarCarrito();
}

function validarFormulario() {
  const form = document.querySelector('#contacto form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();
    if (!nombre || !email || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }
    alert('Formulario enviado correctamente.');
    form.submit();
  });
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('btn-agregar')) {
    const card = e.target.closest('.plan-card');
    const id = Number(card.dataset.id);
    const producto = productos.find(p => p.id === id);
    if (producto) agregarAlCarrito(producto);
  }
  if (e.target.tagName === 'BUTTON' && e.target.closest('.carrito-item')) {
    const id = Number(e.target.dataset.id);
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
  }
  if (e.target.id === 'vaciar-carrito') {
    if (confirm('¿Estás seguro de vaciar el carrito?')) {
      carrito = [];
      actualizarCarrito();
    }
  }
  if (e.target.id === 'confirmar-compra') {
    if (carrito.length === 0) {
      alert('El carrito está vacío.');
    } else {
      alert('¡Gracias por tu compra! Nos comunicaremos a tu email.');
      carrito = [];
      actualizarCarrito();
    }
  }
});

document.addEventListener('input', e => {
  if (e.target.tagName === 'INPUT' && e.target.closest('.carrito-item')) {
    const id = Number(e.target.dataset.id);
    let cantidad = Number(e.target.value);
    if (cantidad < 1) cantidad = 1;
    const item = carrito.find(i => i.id === id);
    if (item) {
      item.cantidad = cantidad;
      actualizarCarrito();
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  actualizarCarrito();
  validarFormulario();
});

// Mostrar u ocultar el botón de scroll al tope
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Subir al principio al hacer clic
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
