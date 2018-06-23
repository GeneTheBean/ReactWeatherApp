import { combineReducers } from 'redux';
import ForecastsReducer from './reducer_forecasts';
import SearchBarReducer from './reducer_searchbar';
import LocationReducer from './reducer_location';

const rootReducer = combineReducers({
  forecasts: ForecastsReducer,
  location: LocationReducer,
  term: SearchBarReducer
});

export default rootReducer;
