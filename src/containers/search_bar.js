import React, {Component} from 'react';
import {connect} from 'react-redux';
import {searchTerm} from '../actions/index';
import {bindActionCreators} from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.state.term}
        placeholder="Enter a zip code to fetch a forecast from. Only United States zip codes can be searched."
        onChange={this.onInputChange}
        maxLength='5'></input>
      </div>
    );
  }

  onInputChange(event) {
    this.setState({term: event.target.value});

    if(event.target.value.length == 5) {
      this.props.searchTerm(event.target.value);
      this.setState({term: ''});
    }
  }

}

//Anything returned from this function will end up as mapStateToProps
// on the WeatherList container
function mapDispatchToProps(dispatch) {
  //Whenever searchTerm is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({searchTerm: searchTerm}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
