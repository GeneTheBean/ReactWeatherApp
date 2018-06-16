import React from 'react';
import WeatherListItem from './weather_list_item';

const WeatherList = (props) => {
  const weatherItems = props.forecast.map((forecast) => {
    return (
      <WeatherListItem
        key={forecast.dt}
        forecast={forecast}
      />
    );
  });

  return (
    <div>
    <h1 className='weather-title'>5 Day Forecast For {props.location.toUpperCase()}</h1>
    <ul>
      {weatherItems}
    </ul>
    </div>
  );
}

export default WeatherList;
