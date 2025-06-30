function renderizarInicio() {
    const contenedorVenta = document.getElementById('contenedor-venta');
    const contenedorAlquiler = document.getElementById('contenedor-alquiler');
  
    contenedorVenta.innerHTML = '';
    propiedades_venta.slice(0, 3).forEach(prop => {
      contenedorVenta.innerHTML += generarCard(prop);
    });
  
    contenedorAlquiler.innerHTML = '';
    propiedades_alquiler.slice(0, 3).forEach(prop => {
      contenedorAlquiler.innerHTML += generarCard(prop);
    });
  }
  
  function generarCard(prop) {
    return `
      <div class="propiedad">
        <img src="${prop.src}" alt="${prop.nombre}">
        <h3>${prop.nombre}</h3>
        <p>${prop.descripcion}</p>
        <p><strong>Ubicación:</strong> ${prop.ubicacion}</p>
        <p><strong>Habitaciones:</strong> ${prop.habitaciones}</p>
        <p><strong>Precio:</strong> $${prop.costo}</p>
        <p class="${prop.smoke ? 'permitido' : 'no-permitido'}">
          ${prop.smoke ? 'Se permite fumar' : 'No se permite fumar'}
        </p>
        <p class="${prop.pets ? 'permitido' : 'no-permitido'}">
          ${prop.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
        </p>
      </div>
    `;
  }
  
  renderizarInicio();
  