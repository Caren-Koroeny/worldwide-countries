/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

const GET_COUNTRIES = 'GET_COUNTRIES';
const FETCH_COUNTRY = 'FETCH_COUNTRY';
const initialState = [];

const countryReducer = (state = initialState, action) => {
  const actions = {
    'GET_COUNTRIES/fulfilled': () => action.payload,
    FETCH_COUNTRY: () => state.filter((country) => country.name.common === action.payload),
    default: () => state,
  };

  return (actions[action.type] || actions.default)();
};

export const getCountries = createAsyncThunk(GET_COUNTRIES, async (name) => {
  const response = await fetch(api);
  const data = await response.json();
  return data.filter((country) => (country.region === name ? country : country.subregion === name));
});

export const fetchCountryDetails = (name) => ({
  type: FETCH_COUNTRY,
  payload: name,
});

export default countryReducer;
