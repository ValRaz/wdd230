const baseUrl ='https://valraz.github.io/wdd230/scootsFinalProject/'
const url = 'https://valraz.github.io/wdd230/scootsFinalProject/data/prices.json'

function populateTable(rentals) {
    const tableBody = document.querySelector('tbody');
    rentals.forEach(rental => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${rental.type}</td>
            <td>${rental.max_persons}</td>
            <td>${rental.half_day_reservation}</td>
            <td>${rental.full_day_reservation}</td>
            <td>${rental.half_day_walk_in}</td>
            <td>${rental.full_day_walk_in}</td>`;
        tableBody.appendChild(row);
    });
}

function populateCards(rentals) {
    const rentalCardsContainer = document.querySelector('.rental-cards');
    rentals.forEach(rental => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${rental.type}</h3>
            <p>Max Capacity: ${rental.max_persons}</p>
            <img src="${rental.image}" alt="${rental.type}">
            
        `;
        rentalCardsContainer.appendChild(card);
    });
}

fetch(url)
    .then(response => response.json())
    .then(data => {
        populateTable(data.rentals);
        populateCards(data.rentals);
    })
    .catch(error => console.error('Error fetching JSON:', error));