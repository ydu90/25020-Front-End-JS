# Proyecto: Página de Planes de Inversión

Este proyecto consiste en una página web dinámica y responsive que muestra planes de inversión, permite a los usuarios agregarlos a un carrito de compras y mantener la información persistente incluso al recargar o cerrar la página.

## 🌐 Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- Fetch API
- LocalStorage

---

## 🚀 Funcionalidades

### 🛒 Carrito de Compras Dinámico

- Los usuarios pueden **agregar productos/planes al carrito** desde las tarjetas de la sección "Planes de Inversión".
- Se muestra un **contador dinámico** con la cantidad total de productos en el carrito.
- Se puede **modificar la cantidad** de cada producto directamente desde el carrito.
- Permite **eliminar productos** del carrito.
- El **total se actualiza automáticamente** al modificar cantidades o eliminar productos.
- El estado del carrito se guarda automáticamente en `localStorage`.

---

### 📦 Visualización de Productos

- Los productos se cargan desde un **array local** predefinido (no se usa una API externa).
- Se muestran en forma de **tarjetas atractivas** con:
  - Imagen
  - Título
  - Precio en negrita y tamaño aumentado
  - Botón “Agregar al carrito” con feedback de confirmación.

---

### 📄 Validación de Formulario

- Validación de campos obligatorios y formato correcto del correo electrónico.
- Se muestra un mensaje de error si hay campos inválidos.

---

### 🎨 Diseño y Accesibilidad

- Estilo visual profesional y moderno usando CSS puro.
- **Imágenes con atributo `alt`** para mejorar la accesibilidad.
- Navegación posible con teclado.
- Botón flotante para **subir al principio de la página**.

---

### 🔍 SEO Básico

- Uso de `meta` etiquetas como `description`, `keywords` y `viewport`.
- Estructura semántica del HTML (`header`, `main`, `section`, `footer`).

---

## 📁 Estructura del Proyecto

/proyecto
│
├── index.html # Página principal
├── style.css # Estilos CSS
├── script.js # Lógica e interactividad JS
├── /img # Imágenes y recursos estáticos
└── README.md # Documentación del proyecto

---

## 🧪 Cómo Ejecutar el Proyecto

1. Cloná o descargá este repositorio.
2. Abrí `index.html` con tu navegador favorito.
3. Interactuá con los productos, añadilos al carrito, validá el formulario, etc.

---

## 💻 Autor

Desarrollado por Y-Mora.