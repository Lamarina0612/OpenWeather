// components/WeatherDisplay.js

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) return null;

  const { currentWeather, hourlyForecasts, dailyForecasts } = weatherData;

  const weatherIconUrl = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom>
        Current Weather
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="h5" component="p">
            Temperature: {currentWeather.temp}°C
          </Typography>
          <Typography variant="body1" component="p">
            Weather: {currentWeather.description}
          </Typography>
            <img src={weatherIconUrl(currentWeather.icon)} alt={currentWeather.description} />
        </CardContent>
      </Card>

      <Typography variant="h4" component="h2" gutterBottom mt={4}>
        Hourly Forecast
      </Typography>
      <Grid container spacing={2}>
        {hourlyForecasts.map((hour, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="p">
                  Hour: {index + 1}
                </Typography>
                <Typography variant="body1" component="p">
                  Temperature: {hour.temp}°C
                </Typography>
                <img src={weatherIconUrl(hour.icon)} alt={hour.description} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" component="h2" gutterBottom mt={4}>
        Daily Forecast
      </Typography>
      <Grid container spacing={2}>
        {dailyForecasts.map((day, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="p">
                  Day: {index + 1}
                </Typography>
                <Typography variant="body1" component="p">
                  Temperature: {day.temp}°C
                </Typography>
                <Typography variant="body1" component="p">
                  Weather: {day.description}
                </Typography>
                <img src={weatherIconUrl(day.icon)} alt={day.description} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherDisplay;
