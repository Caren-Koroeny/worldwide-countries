import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  countries: '',
});

const Store = configureStore(
  { reducer: rootReducer },
  composeWithDevTools(applyMiddleware(thunk)),
);

export default Store;
