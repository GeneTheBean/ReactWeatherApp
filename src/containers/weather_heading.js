import React, {Component} from 'react';
import {connect} from 'react-redux';

class WeatherHeading extends Component {

  render() {
    return (
      <div>
      <h1 className='weather-title'>5 Day Forecast For {this.props.location}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {location: state.location};
}

export default connect(mapStateToProps)(WeatherHeading);
