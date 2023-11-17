import {AppDispatch} from "../store.ts";
import {countrySlice} from "../reducers/CountrySlice.ts";
import axios from "axios";


export const filterAndSearchCountry = (filter = 'All', search = '') => (dispatch: AppDispatch) => {
    dispatch(countrySlice.actions.filter(filter));
    dispatch(countrySlice.actions.search(search));
}

export const fetchCounty = () =>  async(dispatch: AppDispatch) => {
    try{
        dispatch(countrySlice.actions.fetch_country());
        const response = await axios.get('https://restcountries.com/v3.1/all');
        dispatch(countrySlice.actions.fetch_country_success(response.data));
        dispatch(countrySlice.actions.filter('All'));
        dispatch(countrySlice.actions.search(''));
    }catch (e){
        dispatch(countrySlice.actions.fetch_country_error('Ошибка при загрузке стран!'))
    }
}


