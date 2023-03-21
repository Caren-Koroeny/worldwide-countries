import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';
import countryReducer from './countries/countriesSlice';

const rootReducer = combineReducers({
  countries: countryReducer,
});

const Store = configureStore(
  { reducer: rootReducer },
);

export default Store;
