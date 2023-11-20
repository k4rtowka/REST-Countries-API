import {AppDispatch} from "../store.ts";
import {countrySlice} from "../reducers/CountrySlice.ts";
import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";


export const filterAndSearchCountry = (filter = 'All', search = '') => (dispatch: AppDispatch) => {
    dispatch(countrySlice.actions.filter(filter));
    dispatch(countrySlice.actions.search(search));
}

export const fetchCountries = () =>  async(dispatch: AppDispatch) => {
    dispatch(countrySlice.actions.fetchCountries());
    try{
        const response = await axios.get('https://restcountries.com/v3.1/all');
        dispatch(countrySlice.actions.fetchCountriesSuccess(response.data));
        dispatch(countrySlice.actions.filter('All'));
        dispatch(countrySlice.actions.search(''));

    }catch (e){
        dispatch(countrySlice.actions.fetchCountriesError('Ошибка при загрузке стран!'))
    }
}

export const fetchCountry = createAsyncThunk(
    'main/fetchCountry',
    async (countryCode: string) => {
        try{
            const response = await axios.get(`https://restcountries.com/v3.1/alpha?codes=${countryCode}`);
            return response.data[0];
        }catch(error){
            return "Error";
        }



    }

)

