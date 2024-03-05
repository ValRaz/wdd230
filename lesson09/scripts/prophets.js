const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch ('https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json');
    const data = await response.json();
    //console.table(data);//
    displayProphets(data.prophets);
}

const displayProphets = prophets => {
    prophets.forEach(prophet => {
        const card = document.createElement('section');

        const fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        const birthInfo = document.createElement('p');
        birthInfo.innerHTML = `Date of Birth: ${prophet.birthdate}<br> Place of Birth: ${prophet.birthplace}` 

        const portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `${prophet.name} ${prophet.lastName}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '300');
        portrait.setAttribute('height', '400');

        card.appendChild(fullName);
        card.appendChild(birthInfo);
        card.appendChild(portrait);
        cards.appendChild(card);
    });
}

getProphetData();