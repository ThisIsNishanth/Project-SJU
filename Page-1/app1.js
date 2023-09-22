 document.addEventListener('DOMContentLoaded', () => {
        const apiKey = 'f97640ad63ce49db9f9150127232009'; // Replace with your actual API key
        const cities = [
            'BENGALURU',
            'MUMBAI',
            'CHENNAI',
            'DELHI',
            'NEW YORK',
            'WASHINGTON',
            'SAN FRANSISCO',
            'SEATTLE',
            'BARCELONA',
            'LONDON',
            'MADRID',
            'SYDNEY'
        ];
    
        const weatherInfo = document.getElementById('cont');
    
        const fetchWeatherData = async (city) => {
            try {
                const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
                const response = await fetch(apiUrl);
                const data = await response.json();
    
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
                    <h2>${city}</h2>
                    <p>${conditionText}</p>
                    <img src="${conditionIcon}" alt="${conditionText}" />
                    <p style="text-align: left;"> ${temperatureCelsius} Degree Celcius</p>
                    <p style="text-align: left;"> ${windSpeed} KPH Wind</p>
                    <p style="text-align: left;">Humidity- ${humidity}</p>
                `;
    
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
