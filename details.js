document.addEventListener('DOMContentLoaded', () => {
    const cityData = localStorage.getItem('selectedCity');
    if (cityData) {
        const city = JSON.parse(cityData);
        displayCityDetails(city);
    } else {
        console.error('No city data found');
    }
});

function displayCityDetails(city) {
    const cityDetails = document.getElementById('city-details');
    cityDetails.innerHTML = `
        <h2>${city.city}</h2>
        <img src="${city.img}" alt="${city.city}">
        <p>${city.desc}</p>
        <div>
            <label for="hotel">Elegí tu hotel:</label>
            <select id="hotel">
                ${city.hotels.map(hotel => `<option value="${hotel.price}">${hotel.name} - $${hotel.price}</option>`).join('')}
            </select>
        </div>
        <div>
            <label for="pax">Cantidad de personas (Pax):</label>
            <input type="number" id="pax" min="1" value="1">
        </div>
        <div>
            <label for="days">Dias de viaje:</label>
            <input type="number" id="days" min="1" value="1">
        </div>
        <div id="total-price">Precio Total: $${city.price}</div>
        <div>
            <button id="calculate-btn">Reservar!</button>
        </div>
    `;

    document.getElementById('hotel').addEventListener('change', () => updateTotalPrice(city));
    document.getElementById('pax').addEventListener('input', () => updateTotalPrice(city));
    document.getElementById('days').addEventListener('input', () => updateTotalPrice(city));
    document.getElementById('calculate-btn').addEventListener('click', () => purchase(city));
}

function updateTotalPrice(city) {
    const hotelPrice = document.getElementById('hotel').value;
    const pax = document.getElementById('pax').value;
    const days = document.getElementById('days').value;

    const totalPrice = parseFloat(city.price) + (hotelPrice * pax * days);
    document.getElementById('total-price').innerText = `Total Price: $${totalPrice}`;
}

function purchase(city) {
    const hotel = document.getElementById('hotel');
    const selectedHotel = hotel.options[hotel.selectedIndex].text;
    const hotelPrice = hotel.value;
    const pax = document.getElementById('pax').value;
    const days = document.getElementById('days').value;
    const totalPrice = parseFloat(city.price) + (hotelPrice * pax * days);

    const purchaseDetails = {
        city: city.city,
        hotel: selectedHotel,
        pax: pax,
        days: days,
        totalPrice: totalPrice
    };

    localStorage.setItem('purchaseDetails', JSON.stringify(purchaseDetails));
    window.location.href = 'resume.html';
}
