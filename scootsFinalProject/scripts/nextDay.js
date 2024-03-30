const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.5&lon=-86.96&appid=983d444bf31a095597adacee0413798e&units=imperial';

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

function displayForecastResults(data) {
    const tomorrowNoonWeather = data.list.find(entry => {
        const entryDate = new Date(entry.dt_txt);
        return entryDate.getHours() === 12 && entryDate.getDate() === (new Date().getDate() + 1);
    });

    if (tomorrowNoonWeather) {
        const temperature = tomorrowNoonWeather.main.temp;
        const humidity = tomorrowNoonWeather.main.humidity;
        const windSpeed = tomorrowNoonWeather.wind.speed;
        const weatherDescription = tomorrowNoonWeather.weather[0].description;
        const weatherIcon = tomorrowNoonWeather.weather[0].icon;

        const forecastText = `Tomorrow's Forecast:<br>Temperature- ${temperature}°F<br>Humidity- ${humidity}%<br>Wind Speed- ${windSpeed} m/s<br>Weather- <img src="http://openweathermap.org/img/wn/${weatherIcon}.png" alt="${weatherDescription}">${weatherDescription}`;

        document.getElementById("next-day-forecast").innerHTML = forecastText;
    } else {
        document.getElementById("next-day-forecast").textContent = "No forecast available.";
    }
}

apiFetchForecast();