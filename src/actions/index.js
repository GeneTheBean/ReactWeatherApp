import App from '../components/app.js';

export function searchTerm(term, data) {
  // searchTerm is an ActionCreator, it needs to return an action,
  // an object with a type property.

  var payload;
  if(data == null) {
    return {
      type: 'SEARCH_BAR_TEXT',
      text: term
    }
  }

  else return {
    type: 'CURRENT_SEARCH',
    payload: data
  }
}
