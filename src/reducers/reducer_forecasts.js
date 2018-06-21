
export default function(state = [], action) {

  switch(action.type) {
    case 'CURRENT_SEARCH':
      return action.payload
  }

  return state;
}
