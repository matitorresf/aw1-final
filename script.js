document.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('selectedCity');
    localStorage.removeItem('purchaseDetails');
    fetch('place-copy.json')
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
                        <button onclick='storeCityData(${JSON.stringify(city)})'>Ver más</button>
                    </div>
                `;
                citiesContainer.appendChild(cityCard);
            });
        })
        .catch(error => console.error('Error al cargar el JSON:', error));
  });
  
  function storeCityData(city) {
    localStorage.setItem('selectedCity', JSON.stringify(city));
    window.location.href = 'details.html';
  }