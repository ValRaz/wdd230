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

        const heading = card.querySelector("h3");
        const paragraph = card.querySelector("p");
        const image = card.querySelector("img");
        const level = card.querySelector(".level");

        if (business) {
            heading.textContent = business.name;
            level.textContent = business.membershiplevel;
            paragraph.textContent = `${business.type}\n${business.address}\n${business["phone number"]}`;
            image.src = business.image;
            image.alt = business.name.toLowerCase().replace(/['"\s]/g, '');
        }
    });
}

document.addEventListener("DOMContentLoaded", async function() {
    const businesses = await getSpotlightData();
    displaySpot(businesses);
});