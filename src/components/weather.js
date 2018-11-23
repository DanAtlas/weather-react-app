import React, { Component } from 'react';

const Weather = props => (
  <div className="weather-container">
    { props.city &&
      // Сюда нужны иконки
      <div>
        <p className="weather-key">
          <i className="fas fa-map-marker-alt"></i> Location: <span className="weather-value">{props.city}, {props.country}</span>
        </p>
        <p className="weather-key">
          <i className="fas fa-temperature-low"></i> Temperature: <span className="weather-value">{props.temp} &#8451;</span>
        </p>
        <p className="weather-key">
          <i className="fas fa-tint"></i> Humidity: <span className="weather-value">{props.humidity}%</span>
        </p>
        <p className="weather-key">
          <i className="fas fa-cloud-sun-rain"></i> Condition: <span className="weather-value">{props.condition}</span>
        </p>
      </div>
    }
    <p className="error-note"> {props.error} </p>
  </div>
);

export default Weather;