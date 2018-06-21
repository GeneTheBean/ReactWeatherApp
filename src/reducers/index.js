import { combineReducers } from 'redux';
import ForecastsReducer from './reducer_forecasts';
import SearchBarReducer from './reducer_searchbar';

const rootReducer = combineReducers({
  forecasts: ForecastsReducer,
  term: SearchBarReducer,
});

export default rootReducer;
