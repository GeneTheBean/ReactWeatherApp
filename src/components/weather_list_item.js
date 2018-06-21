import React from 'react';
import moment from 'moment';

var iconMap = new Map(); //Mapping Weather Conditions to icon file urls
//Thunderstorms
iconMap.set('Thunderstorm', '/img/icons/thunder.png');
iconMap.set('Drizzle', '/img/icons/rain.png');
iconMap.set('Rain', '/img/icons/rain.png');
iconMap.set('Snow', 'img/icons/snow.png');
iconMap.set('Clear', '/img/icons/sun.png');
iconMap.set('Clouds', '/img/icons/cloud.png');
iconMap.set('Atmosphere', '/img/icons/atmosphere.png');

const WeatherListItem = ({forecast}) => {
  var tempConversion = (K) => {return parseInt(9 / 5 * (K - 273) + 32) + '°F'};
  var imgUrl = iconMap.get(forecast.weather[0].main);
  var dateTime = new Date(forecast.dt_txt);
  var dateDay = moment(dateTime).format('dddd').toUpperCase();
  dateTime = moment(dateTime).format('MMMM Do YYYY hh:mm a');

  return (
    <li className='list-inline-item'>
      <div className='weather-list media'>
        <div className='day'>{dateDay}</div>
        <div className='media-middle'>
          <img className='media-object' src={imgUrl} />
        </div>
        <div className='weather-description'>
            <div className='media-heading' text-align='center'>{dateTime}</div>
            <div>Temperature: {tempConversion(forecast.main.temp)}</div>
            <div>Humidity: {forecast.main.humidity}%</div>
            <div>Skies : {forecast.weather[0].description}</div>
            <div>Cloudiness : {forecast.clouds.all}%</div>
          <div>Winds : {forecast.wind.speed}mph</div>
        </div>
      </div>
    </li>
  );
};

export default WeatherListItem;
