import { useState, useEffect } from 'react';
import Title from '../components/Title';
import Search from '../components/Search';
import Card from '../components/Card';
import Stat from '../components/Stat';

export default function App() {
  const [stat, setStat] = useState({
    // Card
    timezone: '',
    city: 'san francisco',
    country: '',
    weatherIcon: '',
    // Stat
    weather: '',
    weatherDescription: '',
    temperature: '',
    windSpeed: '',
    humidity: '',
  });

  const apiKey = 'd38044d2ec2f1eb501cebf3fc4d5a156';
  console.log(stat);

  useEffect(() => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${stat.city}&appid=${apiKey}&units=metric`;

    fetch(apiURL)
      .then((response) => {
        if (!response.ok) {
          alert('No weather found.');
          return;
        }
        return response.json();
      })
      .then((data) => {
        const currentTimeUTC = new Date();
        const localTime = new Date(
          currentTimeUTC.getTime() + data.timezone * 1000
        );

        // Format the local time in 12-hour format (00:00 AM/PM)
        const formattedTime = localTime.toLocaleString('en-US', {
          timeZone: 'UTC', // Important: Set to UTC to adjust for the offset
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });

        setStat({
          timezone: formattedTime,
          city: data.name,
          country: data.sys.country,
          weatherIcon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
          weather: data.weather[0].main,
          weatherDescription: data.weather[0].description,
          temperature: `${data.main.temp}°C`,
          windSpeed: `${data.wind.speed} m/s`,
          humidity: `${data.main.humidity}%`,
        });
      });
  }, [stat.city, apiKey]);

  const handleSearch = (city) => {
    // Update the city state and trigger the API request
    setStat({ ...stat, city });
  };

  return (
    <div className="bg-background bg-center bg-cover bg-no-repeat min-h-screen flex flex-col gap-5 items-center p-10">
      <Title />
      <Search onSearch={handleSearch} />
      <Card
        weatherIcon={stat.weatherIcon}
        timezone={stat.timezone}
        city={stat.city}
        country={stat.country}
      />
      <Stat
        // Left
        weatherIcon={stat.weatherIcon}
        weather={stat.weather}
        weatherDescription={stat.weatherDescription}
        // Right
        temperature={stat.temperature}
        windSpeed={stat.windSpeed}
        humidity={stat.humidity}
      />
    </div>
  );
}
