const weather_element = document.getElementById('weather');
const timezone_element = document.getElementById('timezone');
const weather_description_element = document.getElementById(
  'weather-description'
);
const weather_icon_element = document.querySelectorAll('#weather-icon');
const temperature_element = document.getElementById('temperature');
const humidity_element = document.getElementById('humidity');
const wind_speed_element = document.getElementById('wind-speed');
const country_element = document.getElementById('country');
const town_element = document.getElementById('city');

const apiKey = 'd38044d2ec2f1eb501cebf3fc4d5a156';

// Get the city from the URL query string input
const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.has('city') ? urlParams.get('city') : 'London';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
fetch(apiURL)
  .then((response) => {
    if (!response.ok) {
      alert('No weather found.');
      return;
    }
    return response.json();
  })
  .then((data) => {
    console.log('Weather Data: ', data);
    const weather = data.weather[0].main;
    const weather_description = data.weather[0].description;
    const weather_icon = data.weather[0].icon;
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const wind_speed = data.wind.speed;
    const country = data.sys.country;
    const town = data.name;
    const timeZoneOffset = data.timezone;

    // Calculate the local time based on the timezone offset
    const currentTimeUTC = new Date();
    const localTime = new Date(
      currentTimeUTC.getTime() + timeZoneOffset * 1000
    );

    // Format the local time in 12-hour format (00:00 AM/PM)
    const formattedTime = localTime.toLocaleString('en-US', {
      timeZone: 'UTC', // Important: Set to UTC to adjust for the offset
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    // Format the local time using the user's browser settings
    timezone_element.innerText = formattedTime.toLocaleString();

    weather_element.innerText = weather;
    country_element.innerText = country;
    town_element.innerText = town;
    temperature_element.innerText = `${temperature}°C`;
    weather_description_element.innerText = weather_description;
    humidity_element.innerText = `${humidity}%`;
    wind_speed_element.innerText = `${wind_speed}m/s`;

    weather_icon_element.forEach((element) => {
      element.src = `https://openweathermap.org/img/wn/${weather_icon}@2x.png`;
    });
  });
