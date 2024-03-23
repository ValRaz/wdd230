const baseURL = "https://valraz.github.io/wdd230/";
const linksURL = "https://valraz.github.io/wdd230/chamber/data/members.json";

async function getSpotlightData() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        
        if (data && data.members) {
            const members = data.members;
            
            const goldMembers = members.filter(member => member.membershiplevel === "Gold Member").slice(0, 2);
            const silverMembers = members.filter(member => member.membershiplevel === "Silver Member");

            const silverMember = silverMembers[0];

            const spotlightMembers = [...goldMembers, silverMember].filter(Boolean);

            return spotlightMembers;
        } else {
            throw new Error("No 'members' array found in JSON data");
        }
    } catch (error) {
        console.error("Error fetching and processing spotlight data:", error);
        return [];
    }
}

function displaySpot(businesses) {
    const spotlightCards = document.querySelectorAll(".spotlightcard");

    spotlightCards.forEach((card, index) => {
        const business = businesses[index];

        const heading = card.querySelector("h2");
        const paragraph = card.querySelector("p");
        const image = card.querySelector("img");
        const level = card.querySelector(".level");
        const type = card.querySelector("h4");

        if (business) {
            heading.textContent = business.name;
            level.textContent = business.membershiplevel;
            type.textContent = business.type;
            paragraph.textContent = `${business.address}\n${business["phone number"]}\n${business.info}`;
            image.src = business.image;
            image.alt = business.name.toLowerCase().replace(/['"\s]/g, '');
        }
    });
}

document.addEventListener("DOMContentLoaded", async function() {
    const businesses = await getSpotlightData();
    displaySpot(businesses);
});