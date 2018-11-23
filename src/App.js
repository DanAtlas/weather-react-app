import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';
import './App.css';

const API_KEY = "cd699731e2b2d7d4ec620936f3ef50b6";

class App extends Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    condition: undefined,
    error:  undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await 
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        condition: data.weather[0].description,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        condition: undefined,
        error: "Enter the city you want to find"
      });
    }
    
  }

  render() {
    return (
      <div className="wrapper">
        <div className="container">

          <div className="left-block">
            <Info />
            <div className="author">
              <i class="fab fa-github"></i>
              <a href="https://github.com/danatlas" target="_blank"
                rel="noopener noreferrer" className="btn-auth" 
                aria-label="Follow @nourabusoud on GitHub">
                
                <span googl="true"> Follow @danatlas</span>
              </a>
              <br/>
                <span className="git-auth">
                  View on <a target="_blank" rel="noopener noreferrer" 
                  href="https://github.com/DanAtlas/weather-react-app">Github</a>
                </span>
            </div>
          </div>

          <div className="right-block">
            <Form weatherMethod={this.getWeather} />
            <Weather 
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              condition={this.state.condition}
              error={this.state.error}
            />
          </div>

        </div>
      </div>  
    );
  }
}

export default App;
