import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import logger from 'redux-logger'

import App from './components/app';
import reducers from './reducers';
import Search from './containers/search';
import Data from './containers/data';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, logger)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
