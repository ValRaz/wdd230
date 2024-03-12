const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=983d444bf31a095597adacee0413798e&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        console.log('Response status:', response.status); // Log response status
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    const weatherEvents = data.weather;
    const weatherDescriptions = weatherEvents.map(event => event.description.charAt(0).toUpperCase() + event.description.slice(1).toLowerCase());

    weatherIcon.innerHTML = '';

    weatherEvents.forEach(event => {
        const iconCode = event.icon;
        const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;

        weatherIcon.setAttribute('src', iconSrc);
        weatherIcon.setAttribute('alt', event.description);
    });

    captionDesc.textContent = weatherDescriptions.join(', ');
}
