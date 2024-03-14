const baseURL = "https://valraz.github.io/wdd230/";
const linksURL = "https://valraz.github.io/wdd230/chamber/data/spotlight.json";

async function getSpotlightData() {
    const response = await fetch(linksURL);
    const data = await response.json();
    return data.businesses;
}

function displaySpot(businesses) {
    const spotlightCards = document.querySelectorAll("[class^='spotlightcard']");

    spotlightCards.forEach((card, index) => {
        const business = businesses[index];

        const heading = card.querySelector("h3");
        const paragraph = card.querySelector("p");
        const image = card.querySelector("img");

        heading.textContent = business.name;
        paragraph.textContent = business.info;
        image.src = business.image;
        image.alt = business.name.toLowerCase().replace(/['"\s]/g, '');
    });
}

document.addEventListener("DOMContentLoaded", async function() {
    const businesses = await getSpotlightData();
    displaySpot(businesses);
});