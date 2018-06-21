import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchTerm} from '../actions/index';
import {bindActionCreators} from 'redux';
const API_Key = '922d2bc180766311e15d37de8d5aae84';

class SearchBar extends Component {

  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.props.term}
        placeholder="Enter a zip code to fetch a forecast from. Only United States zip codes can be searched."
        onChange={event => this.onInputChange(event.target.value)}
        maxLength='5'></input>
      </div>
    );
  }

  onInputChange(term) {
     this.props.searchTerm(term);
     if(term.length == 5) {
        this.weatherSearch(term);
     }
  }

  weatherSearch(zip) {
    var context = this;
    return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=${API_Key}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      }).then((data) => {
          context.props.searchTerm(zip, data);
      });
  }
}

function mapStateToProps(state){
  return {
    term: state.term
  }
}

//Anything returned from this function will end up as mapStateToProps
// on the WeatherList container
function mapDispatchToProps(dispatch) {
  //Whenever searchTerm is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({searchTerm: searchTerm}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
