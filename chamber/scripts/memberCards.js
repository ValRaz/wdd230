const baseURL = "https://valraz.github.io/wdd230/";
const linksURL = "https://valraz.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch ('https://valraz.github.io/wdd230/data/members.json');
    const data = await response.json();
    console.table(data);
    displayMembers(data.members);
}

getMemberData();

function displayMembers(members) {
    members.forEach(member => {
        const section = document.createElement('section');
        
        const h2 = document.createElement('h2');
        h2.textContent = member.name;

        const p = document.createElement('p');
        p.innerHTML = `<strong>Type:</strong> ${member.type}<br>
                       <strong>Address:</strong> ${member.address}<br>
                       <strong>Phone Number:</strong> ${member['phone number']}<br>
                       <strong>Website URL:</strong> <a href="${member['website url']}">${member['website url']}</a>`;

        const image = document.createElement('img');
        image.src = member.image;
        image.alt = `${member.name} Image`;

        const h3 = document.createElement('h3');
        h3.textContent = `Membership Level: ${member['membership level']}`;

        section.appendChild(h2);
        section.appendChild(p);
        section.appendChild(image);
        section.appendChild(h3);

        memberCards.appendChild(section);
    });
}

