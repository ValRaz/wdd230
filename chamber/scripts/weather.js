const currentTemp = document.querySelector('#currentTemperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#captionDesc');

const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=38.02&lon=-78.47&appid=b29d059d0ae9fd5dbb73739f2a72b55e&units=imperial';

async function apiFetch() {
    try {
        const responseCurrent = await fetch(urlCurrent);
        console.log('Response status:', responseCurrent.status); // Log response status
        if (responseCurrent.ok) {
            const dataCurrent = await responseCurrent.json();
            console.log(dataCurrent); // testing only
            displayResults(dataCurrent);
        } else {
            throw new Error(await responseCurrent.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayResults(dataCurrent) {
    currentTemp.textContent = `${Math.round(dataCurrent.main.temp)} °F`;

    const weatherEvent = dataCurrent.weather[0];
    const iconCode = weatherEvent.icon;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    const description = weatherEvent.description.charAt(0).toUpperCase() + weatherEvent.description.slice(1).toLowerCase();

    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', weatherEvent.description);
    captionDesc.textContent = `, ${description}`;
}

apiFetch();