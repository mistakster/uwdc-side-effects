import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import markersReducer from './markersReducer.js';
import leafletMiddleware from './leafletMiddleware.js';

const rootReducer = combineReducers({
  markers: markersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(leafletMiddleware)
));

export default store;
