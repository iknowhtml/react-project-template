import { createStore, applyMiddleware } from 'redux';

import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers/root_reducer';

let middleware = [ReduxThunk, ReduxPromise];

if (process.env.NODE_ENV !== 'production') {
  const ReduxLogger = require('redux-logger').createLogger();
  middleware = [...middleware, ReduxLogger];
}

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;
