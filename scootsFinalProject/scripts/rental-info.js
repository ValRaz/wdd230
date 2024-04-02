const baseUrl ='https://valraz.github.io/wdd230/scootsFinalProject/'
const url = 'https://valraz.github.io/wdd230/scootsFinalProject/data/prices.json'

function populateTable(rentals) {
    const tableBody = document.querySelector('tbody');
    rentals.forEach(rental => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${rental.type}</td>
            <td>${rental.half_day_reservation}</td>
            <td>${rental.full_day_reservation}</td>
            <td>${rental.half_day_walk_in}</td>
            <td>${rental.full_day_walk_in}</td>`;
        tableBody.appendChild(row);
    });
}

function populateCards(rentals) {
    const rentalCards = document.querySelectorAll('.rentals-card');

    rentalCards.forEach((card, index) => {
        const rental = rentals[index];
        card.innerHTML = `
            <h3>${rental.type}</h3>
            <p>Max Capacity: ${rental.max_persons}</p>
            <img src="${rental.image}" alt="${rental.type}">
        `;
    });
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        populateTable(data.rentals);
        populateCards(data.rentals);
    })
    .catch(error => console.error('Error fetching JSON:', error));