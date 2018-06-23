const API_Key = '922d2bc180766311e15d37de8d5aae84';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

function weatherSearch(zip) {
  const url = `${ROOT_URL}zip=${zip}&appid=${API_Key}`;
  return fetch(url)
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then((data) => {
        return data;
    });
}

export function searchTerm(term) {
  // searchTerm is an ActionCreator, it needs to return an action,
  // an object with a type property.
  var request = weatherSearch(term);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
