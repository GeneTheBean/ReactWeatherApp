export default function(state = 'Enter Zip Code', action) {

  switch(action.type) {
    case 'FETCH_WEATHER':
    return action.payload.city.name;
  }

  return state;
}
