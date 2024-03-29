const urlCurrent = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50&lon=-86.96&appid=b29d059d0ae9fd5dbb73739f2a72b55e&units=imperial';


async function apiFetch() {
    try {
        const response = await fetch(urlCurrent);
        console.log('Response status:', response.status); // Log response status
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayCurrentResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}

function displayCurrentResults(data) {
    const currentTempElem = document.getElementById('current-temp');
    currentTempElem.textContent += `${data.main.temp} °F`;

    const currentHumidityElem = document.getElementById('current-humidity');
    currentHumidityElem.textContent += `${data.main.humidity}%`;

    const currentWindSpeedElem = document.getElementById('current-wind-speed');
    currentWindSpeedElem.textContent += `${data.wind.speed} mph`;

    const weatherDetailsElem = document.getElementById('weather-details');
    weatherDetailsElem.textContent = ''; // Clear existing content

    data.weather.forEach(weather => {
        const weatherItem = document.createElement('div');
        weatherItem.classList.add('weather-item');

        const title = document.createElement('h3');
        title.textContent = weather.main;
        weatherItem.appendChild(title);

        const icon = document.createElement('img');
        icon.src = `https://openweathermap.org/img/wn/${weather.icon}.png`;
        icon.alt = weather.main;
        weatherItem.appendChild(icon);

        const description = document.createElement('p');
        description.textContent = weather.description;
        weatherItem.appendChild(description);

        weatherDetailsElem.appendChild(weatherItem);
    });
}

apiFetch();