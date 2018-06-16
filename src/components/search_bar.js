import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' }
  }

  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
        placeholder="Enter a zip code to fetch a forecast from. Only United States zip codes can be searched."
        maxLength='5'></input>

      </div>
    );
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
