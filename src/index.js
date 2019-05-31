import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

//eventually this will have provider and store so that it can pass the state to app

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
