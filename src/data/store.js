import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

const configureStore = (initialState = {}) => {
  const middlewares = [];
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
  /* eslint-enable */

  const store = createStore(reducers, initialState, composeEnhancers(...enhancers));

  return store;
};

export default configureStore;
