// components/WeatherDisplay.js

import React from "react";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { current, hourly, daily } = weatherData;

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {current.temp}°C</p>
      <p>Weather: {current.weather[0].description}</p>

      <h2>Hourly Forecast</h2>
      <div className="hourly-forecast">
        {hourly.slice(0, 24).map((hour, index) => (
          <div key={index}>
            <p>Hour: {index + 1}</p>
            <p>Temperature: {hour.temp}°C</p>
            <p>Weather: {hour.weather[0].description}</p>
          </div>
        ))}
      </div>

      <h2>Daily Forecast</h2>
      <div className="daily-forecast">
        {daily.slice(0, 7).map((day, index) => (
          <div key={index}>
            <p>Day: {index + 1}</p>
            <p>Temperature: {day.temp.day}°C</p>
            <p>Weather: {day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDisplay;
