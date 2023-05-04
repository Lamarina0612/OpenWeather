// src/App.js

import React from "react";
import "./App.css";
import WeatherApp from "./components/WeatherApp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <WeatherApp />
    </div>
  );
}

export default App;

