// src/App.js

import React from "react";
import "./App.css";
import WeatherApp from "./components/WeatherApp";
import NewsDisplay from './components/NewsDisplay';
import { Container } from '@mui/material';

function App() {
  return (
    <Container maxWidth="lg">
      <WeatherApp />
      <NewsDisplay />
    </Container>
  );
}

export default App;

