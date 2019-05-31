import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index';

//could do without the index because a folder will default to the index file but i feel like still writing it

//thunk middleware sees that the action in the reducer is a function that pings the API and only dispatches once the fetch is finished. 

//so state is held in the reducer. reducer takes that state and an action and updates the state with the action. 

//the store uses that reducer?? store is then passed in index.js to provider so that it can be access by all components encompassed by provider

//where is store and state connected??? in the connector file

//so compose is just for middleware?
export default createStore(
  combineReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);




