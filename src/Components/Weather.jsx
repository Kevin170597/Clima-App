import React from "react";

import "../styles/weather.css";

const Weather = (props) => {
    return(
        <div className="container">
            <div className="cards pt-2">
                <div className="infoCard pb-2">
                    <h1 className="cityName">{props.city}</h1>

                    {props.temp_celsius ? (<h1 className="tempNow">{props.temp_celsius}&deg;c</h1>) : null}

                    {props.weatherIconOnline ? (
                    <h5 className="">
                        <div id="icon"><img id="wicon" src={`http://openweathermap.org/img/wn/${props.weatherIconOnline}@2x.png`} alt="Weather icon"></img></div>
                    </h5>
                    ) : null}

                    {/* show max and min temp */}
                    {minmaxTemp(props.temp_min, props.temp_max)}

                    <h4 className="desc py-2">{props.description}</h4>

                    {windHumidity(props.wind, props.humidity)}
                </div>
            </div>
        </div>
    );
};

function windHumidity(wind, humidity) {
    if(wind && humidity) {
        return (
            <h3>
                <span className="px-4"><i className="fas fa-tint"></i> {humidity}%</span>
                <span className="px-4"><i className="fas fa-wind"></i> {wind} km/h</span>
            </h3>
        );
    }
}

function minmaxTemp(min, max) {
    if(min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;c</span>/
                <span className="px-4">{max}&deg;c</span>
            </h3>
        );
    }
}

export default Weather;