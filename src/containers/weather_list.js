import React, {Component} from 'react';
import WeatherListItem from '../components/weather_list_item';
import {connect} from 'react-redux';

class WeatherList extends Component {

  renderList() {
      if(this.checkForecasts())
      return this.props.forecasts.list.map((forecast) => {

        return (

          <WeatherListItem
            key={forecast.dt}
            forecast={forecast}
          />

        );
      })
  }

  render() {
    return (
      <div>
      <h1 className='weather-title'>5 Day Forecast For {this.getCityName()}</h1>
      <ul>
        {this.renderList()}
      </ul>
      </div>
    );
  }

  getCityName() {
      if(this.checkForecasts())
        return this.props.forecasts.city.name.toUpperCase();
      else return "---";
  }

  checkForecasts() { //returns true if forecasts has data
    return (this.props.forecasts.length != 0);
  }

}


function mapStateToProps(state) {
    return {
      forecasts: state.forecasts,
      //location: state.location
    };
}

export default connect(mapStateToProps)(WeatherList);
