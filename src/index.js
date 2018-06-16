import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import WeatherList from './components/weather_list';
const API_Key = '922d2bc180766311e15d37de8d5aae84';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'New York',
      forecast: [],
    }

    this.weatherSearch('11214');

  }

  weatherSearch(zip) {
      var context = this;
      fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${API_Key}`)
        .then((response) => {
          if (response.status >= 400) {
            throw new Error('Bad response from server');
          }
          return response.json();
        }).then((data) => {
            console.log(data);
            context.setState({
              location: data.city.name,
              country: data.city.country,
              forecast: data.list
            });
        });
    }

  render() {
    return (
      <div>
      <SearchBar onSearchTermChange={term => {if(term.length >= 5) this.weatherSearch(term)}} />
      <WeatherList
        forecast={this.state.forecast}
        location={this.state.location} />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.container'));
