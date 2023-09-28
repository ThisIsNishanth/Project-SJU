document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f97640ad63ce49db9f9150127232009'; // Replace with your actual API key
    const cities = [
        'BENGALURU',
        'MUMBAI',
        'PUNE',
        'DELHI',
        'NEW YORK',
        'WASHINGTON',
        'TEXAS',
        'SEATTLE',
        'BARCELONA',
        'LONDON',
        'MADRID',
        'SYDNEY',
        'CHENNAI',
        'DUBAI',
        'UDUPI',
        'CALIFORNIA',
        'AMSTERDAM',
        'PARIS',
        'TORONTO',
        'RIO'
    ];

    const weatherInfo = document.getElementById('cont');
    const button = document.querySelector("#e-button");
    const button2 = document.querySelector("#e-button2");

    button.addEventListener('click', () => {
        window.location.href = "index2.html";
    })

    button2.addEventListener('click', () => {
        window.location.href = 'index2.html';
    })

    const fetchWeatherData = async (city) => {
        try {
            const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            console.log(data);

            // Extract relevant weather information
            const humidity = data.current.humidity;
            const temperatureCelsius = data.current.temp_c;
            const windSpeed = data.current.wind_kph;
            const conditionText = data.current.condition.text;
            const conditionIcon = data.current.condition.icon;
             
            // Create a box for the city with weather information
            const cityBox = document.createElement('div');
            cityBox.className = 'box';
            cityBox.innerHTML = `
                <h2 style = "font-weight: 700; letter-spacing: 2px">${city}</h2>
                <b><p style  = "font-size:11.5px; margin-top:6px; text-transform: uppercase;" >${conditionText}</p></b>
                <img src="${conditionIcon}" alt="${conditionText}" />
                <p style="text-align: left;"> ${temperatureCelsius} Degree Celsius</p>
                <p style="text-align: left;"> ${windSpeed} KPH Wind</p>
                <p style="text-align: left;">Humidity- ${humidity}</p>
            `;

            // cityBox.style.marginTop = "-15px";
            weatherInfo.style.marginTop = "-150px";


            // Append the city box to the weatherInfo div
            weatherInfo.appendChild(cityBox);
        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
        }
    };

    // Use a for loop to fetch weather data for each city
   
 for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    fetchWeatherData(city);

    }
});
