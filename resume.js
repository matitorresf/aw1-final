document.addEventListener('DOMContentLoaded', () => {
    const purchaseDetails = localStorage.getItem('purchaseDetails');
    if (purchaseDetails) {
        const details = JSON.parse(purchaseDetails);
        document.getElementById('resume-city').innerText = details.city;
        document.getElementById('resume-hotel').innerText = details.hotel;
        document.getElementById('resume-pax').innerText = details.pax;
        document.getElementById('resume-days').innerText = details.days;
        document.getElementById('resume-total-price').innerText = `$${details.totalPrice}`;
    } else {
        console.error('No purchase details found');
    }
});

function submitForm() {
    // Handle form submission logic
    alert('Reservado con éxito!');
}

function cancelForm() {
    localStorage.removeItem('purchaseDetails');
    window.location.href = 'index.html';
}
