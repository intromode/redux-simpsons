//why to do object of array vs just an array? when the array will have objects that have everything we need?

const initialState = [];

//this gets called in combine reducer 
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_QUOTES':
      return [...action.payload];
    default:
      return state;
  }
}
