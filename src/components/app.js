import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../containers/search_bar';
import WeatherHeading from '../containers/weather_heading';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
      <SearchBar />
      <WeatherHeading />
      <WeatherList />
      </div>
    );
  }
}
