import React, { useState, useEffect } from "react";
import "./WeatherCard.css";

const API_KEY = "0a88833b630c6eef22b68f28747b5750"; // Replace with your actual API key

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Use browser's geolocation to get user's location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );

    // Update current date and time every second
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, []);

  return (
    <div className="weather-card">
      {weatherData ? (
        <div className="card-content">
          <h1 className="location-name">{weatherData.name}</h1>
          <p className="temperature">
            {Math.round(weatherData.main.temp - 273.15)}°C
          </p>
          <p className="temperature">{Math.round(weatherData.main.pressure)}</p>
          <p className="description">{weatherData.weather[0].description}</p>
          <p className="current-date">{currentDateTime.toLocaleDateString()}</p>
          <p className="current-time">
            {currentDateTime.toLocaleTimeString([], { timeStyle: "short" })}
          </p>
          <p className="current-day">
            {currentDateTime.toLocaleDateString([], { weekday: "long" })}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherCard;
