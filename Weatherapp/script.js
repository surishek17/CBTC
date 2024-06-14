// Event listener for the 'Get Weather' button
document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);  // Fetch weather if city is provided
    } else {
        alert("Please enter a city name."); // Alert if no city is provided
    }
});

// Function to fetch weather data from OpenWeatherMap API
async function getWeather(city) {
    const apiKey = 'f62fcaa3a815ab8d2a1cc8506248fac5'; //  OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found'); // Throw error if city is not found
        }
        const weatherData = await response.json();
        displayWeather(weatherData); // Display weather data
    } catch (error) {
        alert(error.message); // Alert error message
    }
}

// Function to display weather data in the application
function displayWeather(data) {
    const location = document.getElementById('location');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const icon = document.getElementById('icon');

    // Update the HTML elements with weather data
    location.textContent = `${data.name}, ${data.sys.country}`;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    description.textContent = `Weather: ${data.weather[0].description}`;
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    // Remove the hidden class to show the weather data
    document.getElementById('weatherDisplay').classList.remove('hidden');
}

