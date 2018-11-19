import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import AppContainer from './app/App';
import * as serviceWorker from './serviceWorker';
import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
