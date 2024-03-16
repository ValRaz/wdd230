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
            displayResults(dataForecast);
        } else {
            throw new Error(await responseForecast.text());
        }
    } catch (error) {
        console.error(error);
    }
}

apiFetchForecast();

function displayResults(dataForecast) {
    const forecasts = dataForecast.list;

    const filteredForecasts = [];
const days = new Set(); // To track the unique days
for (const forecast of forecasts) {
    const dateTime = forecast.dt_txt.split(' '); // Split date and time
    const date = new Date(dateTime[0]); // Extract date
    const time = dateTime[1]; // Extract time

    // Check if it's noon (12:00:00) and if it's a new day
    if (time.startsWith('12:00:00') && !days.has(date.toDateString())) {
        filteredForecasts.push(forecast);
        days.add(date.toDateString()); // Add the day to the set to mark it as processed
    }

    // Break if we found forecasts for three days at noon
    if (filteredForecasts.length === 3) break;
}

    for (let i = 0; i < filteredForecasts.length; i++) {
        const forecast = filteredForecasts[i];

        const date = new Date(forecast.dt_txt);
        const formattedDate = formatDateMMDD(date);
        const weatherIcon = forecast.weather[0].icon;
        const temperature = `${Math.round(forecast.main.temp)}`;
        const description = forecast.weather[0].description;

        let dateElement, tempElement, iconElement, descElement;
        switch (i) {
            case 0:
                dateElement = dateOne;
                tempElement = tempOne;
                iconElement = iconOne;
                descElement = capOne;
                break;
            case 1:
                dateElement = dateTwo;
                tempElement = tempTwo;
                iconElement = iconTwo;
                descElement = capTwo;
                break;
            case 2:
                dateElement = dateThree;
                tempElement = tempThree;
                iconElement = iconThree;
                descElement = capThree;
                break;
            default:
                break;
        }

        dateElement.innerHTML = formattedDate;
        tempElement.innerHTML = `${temperature} °F`;
        iconElement.src = `https://openweathermap.org/img/w/${weatherIcon}.png`;
        iconElement.alt = forecast.weather[0].description;
        descElement.innerHTML = ` ${description}`;
    }
}

function formatDateMMDD(date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}`;
}

apiFetchForecast();