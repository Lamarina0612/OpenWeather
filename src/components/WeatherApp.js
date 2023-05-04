// components/WeatherApp.js

import React, { useState } from "react";
import LocationInput from "./LocationInput";
import WeatherDisplay from "./WeatherDisplay";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);

  const APIKEY = process.env.api_key;

  const fetchWeatherData = async (location) => {
    // Fetch latitude and longitude
    const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKEY}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    console.log('Geocode Data:', geocodeData); // Add this line
    const { lat, lon } = geocodeData[0];

    // Fetch weather data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${APIKEY}`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    console.log('Weather Data:', weatherData); // Add this line

    setWeatherData(weatherData);
  };

  return (
    <div>
      <LocationInput onLocationSubmit={fetchWeatherData} />
      <WeatherDisplay weatherData={weatherData} />
    </div>
  );
};

export default WeatherApp;
