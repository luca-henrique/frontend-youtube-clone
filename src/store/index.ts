import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './reducers';

const composeEnhancers = compose;

const middlewares = [thunk, logger];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
