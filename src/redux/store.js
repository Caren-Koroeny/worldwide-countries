import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  countries: '',
});

const Store = configureStore(
  { reducer: rootReducer },
);

export default Store;
