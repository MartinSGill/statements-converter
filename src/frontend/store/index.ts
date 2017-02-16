import { createStore, applyMiddleware, Store } from 'redux';
import { logger } from '../middleware';
import {rootReducer, ApplicationState } from '../reducers';

export default function configureStore(initialState?: ApplicationState): Store<ApplicationState> {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(logger)(create);

  const store = createStoreWithMiddleware(rootReducer, initialState) as Store<ApplicationState>;

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}