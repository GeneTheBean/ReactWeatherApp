import React, {Component} from 'react';
import WeatherListItem from '../components/weather_list_item';
import {connect} from 'react-redux';

class WeatherList extends Component {

  renderList() {
    if(this.props.forecasts != null) {
      return this.props.forecasts.map((forecast) => {
        return (
          <WeatherListItem
            key={forecast.dt}
            forecast={forecast}
          />
        );
      })
    }
  }

  render() {
    return (
      <div>
      <ul>
        {this.renderList()}
      </ul>
      </div>
    );
  }

}

function mapStateToProps(state) {
    return {forecasts: state.forecasts};
}

export default connect(mapStateToProps)(WeatherList);
