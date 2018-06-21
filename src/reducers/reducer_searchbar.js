export default function(state = '', action) {

  switch(action.type) {
    case 'SEARCH_BAR_TEXT':
      return action.text;
  }

  return state;
}
