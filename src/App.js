import React from "react";
import swal from "sweetalert"; //SweetAlert Modals

import './styles/App.css'; //Styles

import Form from "./Components/Form"; //Components
import Weather from "./Components/Weather";

import logo from "./assets/logo.png"; //Logo

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      iconOnline: "",
      main: "",
      celsius: "",
      temp_max: "",
      temp_min: "",
      description: "",
      wind: "",
      humidity: ""
    };
    
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  calKMH(speed) {
    let result = Math.floor(speed * 3.6);
    return result;
  }

  getWeather = async(e) => {

    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country) {
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1e4132a7ce605a14bf946566dff95731`);

      const response = await api_call.json();

      console.log(response)

      this.setState({
        city: `${response.name}, ${response.sys.country}`,
        celsius: this.calCelsius(response.main.temp),
        temp_max: this.calCelsius(response.main.temp_max),
        temp_min: this.calCelsius(response.main.temp_min),
        description: response.weather[0].description[0].toUpperCase() + response.weather[0].description.slice(1),
        humidity: response.main.humidity,
        wind: this.calKMH(response.wind.speed),
        weatherIconOnline: response.weather[0].icon
      })
    } else if(city && !country) {
      swal({title: "No country", text: "Please, enter a country", icon: "warning"})
    } else if(!city && country){
      swal({title: "No city.", text: "Please, enter a city.", icon: "warning"})
    } else {
      swal({title: "No city and country", text: "Please, enter a city and a country", icon:"warning"})
    }
  }
  
  render() {
    return(
      <div className="App">
        <img className="logoCloud" src={logo} alt=""></img>
        <Form loadweather={this.getWeather} />

        <Weather city={this.state.city} temp_celsius={this.state.celsius} temp_min={this.state.temp_min} temp_max={this.state.temp_max} description={this.state.description} humidity={this.state.humidity} wind={this.state.wind} weatherIconOnline={this.state.weatherIconOnline} />
      </div>
    );
  }
}

export default App;
