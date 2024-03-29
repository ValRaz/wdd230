const dateOne = document.querySelector('#dateOne');
const dateTwo = document.querySelector('#dateTwo');
const dateThree = document.querySelector('#dateThree');
const tempOne = document.querySelector('#tempOne');
const tempTwo = document.querySelector('#tempTwo');
const tempThree = document.querySelector('#tempThree');
const iconOne = document.querySelector('#weather-one');
const iconTwo = document.querySelector('#weather-two');
const iconThree = document.querySelector('#weather-three');
const capOne = document.querySelector('#capOne');
const capTwo = document.querySelector('#capTwo');
const capThree = document.querySelector('#capThree');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=38.02&lon=-78.47&appid=983d444bf31a095597adacee0413798e&units=imperial';

async function apiFetchForecast() {
    try {
        const responseForecast = await fetch(urlForecast);
        console.log('Response status:', responseForecast.status); // Log response status
        if (responseForecast.ok) {
            const dataForecast = await responseForecast.json();
            console.log(dataForecast); // testing only
            displayForecastResults(dataForecast);
        } else {
            throw new Error(await responseForecast.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetchForecast();

function displayForecastResults(dataForecast) {
    if (!dataForecast || !dataForecast.list || !Array.isArray(dataForecast.list)) {
        console.error("Invalid data received:", dataForecast);
        return;
    }

    const forecasts = dataForecast.list;
    const filteredForecasts = [];
    const days = new Set();

    for (const forecast of forecasts) {
        const dateTime = forecast.dt_txt.split(' ');
        const date = new Date(dateTime[0]);
        const time = dateTime[1];

        if (time.startsWith('12:00:00') && !days.has(date.toDateString())) {
            filteredForecasts.push(forecast);
            days.add(date.toDateString());
        }

        if (filteredForecasts.length === 3) break;
    }

    const dateSelectors = [dateOne, dateTwo, dateThree];
    const tempSelectors = [tempOne, tempTwo, tempThree];
    const iconSelectors = [iconOne, iconTwo, iconThree];
    const capSelectors = [capOne, capTwo, capThree];

    for (let i = 0; i < filteredForecasts.length; i++) {
        const forecast = filteredForecasts[i];
        const date = new Date(forecast.dt_txt);
        const formattedDate = formatDateMMDD(date);
        const weatherIcon = forecast.weather[0].icon;
        const temperature = `${Math.round(forecast.main.temp)}`;
        const description = forecast.weather[0].description;

        const dateElement = dateSelectors[i];
        const tempElement = tempSelectors[i];
        const iconElement = iconSelectors[i];
        const descElement = capSelectors[i];

        dateElement.innerHTML = formattedDate;
        tempElement.innerHTML = `${temperature} °F`;
        iconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
        iconElement.alt = forecast.weather[0].description;
        descElement.innerHTML = `, ${description}`;
    }
}

function formatDateMMDD(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
}