document.addEventListener('DOMContentLoaded', () => {
  fetch('place.json')
      .then(response => response.json())
      .then(data => {
          const citiesContainer = document.getElementById('cities-container');
          data.forEach(city => {
              const cityCard = document.createElement('div');
              cityCard.classList.add('city-card');
              cityCard.innerHTML = `
                  <img src="${city.img}" alt="${city.city}">
                  <div class="city-info">
                      <h2>${city.city}</h2>
                      <p>${city.desc}</p>
                      <div class="price">Desde $${city.price}</div>
                      <button onclick="selectCity(${city.id})">Ver más</button>
                  </div>
              `;
              citiesContainer.appendChild(cityCard);
          });
      })
      .catch(error => console.error('Error al cargar el JSON:', error));
});

function selectCity(cityId) {
  // Aquí puedes manejar la lógica para seleccionar la ciudad y navegar a la página de detalles
  console.log(`Ciudad seleccionada: ${cityId}`);
  // Aquí puedes redirigir a una página de detalles o mostrar un modal con más información
}
