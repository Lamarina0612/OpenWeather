// components/WeatherApp.js

import React, { useState } from "react";
import LocationInput from "./LocationInput";
import WeatherDisplay from "./WeatherDisplay";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const APIKEY = process.env.REACT_APP_API_KEY;

  const formatWeatherData = (weatherData) => {
    const currentWeather = {
      temp: weatherData.current.temp,
      icon: weatherData.current.weather[0].icon,
      description: weatherData.current.weather[0].description
    };

    const hourlyForecasts = weatherData.hourly.slice(0,24).map(hourlyData => {
      return {
        temp: hourlyData.temp,
        icon: hourlyData.weather[0].icon,
        description: hourlyData.weather[0].description
      };
    });

    const dailyForecasts = weatherData.daily.slice(0,7).map(dailyData => {
      return {
        temp: dailyData.temp.day,
        icon: dailyData.weather[0].icon,
        description: dailyData.weather[0].description
      };
    });
    
    return {
      currentWeather,
      hourlyForecasts,
      dailyForecasts
    };
  };

  const fetchWeatherData = async (location) => {
    // Fetch latitude and longitude
    const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIKEY}`;
    const geocodeResponse = await fetch(geocodeUrl);
    const geocodeData = await geocodeResponse.json();
    console.log('Geocode Data:', geocodeData); 
    const { lat, lon } = geocodeData[0];
    

    // Fetch weather data
    const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=${APIKEY}`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    console.log('Weather Data:', weatherData); 

    const formattedWeatherData = formatWeatherData(weatherData);
    setWeatherData(formattedWeatherData);
  };

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={2}>
        <Typography variant="h2" component="h1" align="center">
          Weather App
        </Typography>
      </Box>
      <Box mt={4}>
        <LocationInput onLocationSubmit={fetchWeatherData} />
      </Box>
      <Box mt={4}>
        <WeatherDisplay weatherData={weatherData} />
      </Box>
    </Container>
  );
};

export default WeatherApp;
