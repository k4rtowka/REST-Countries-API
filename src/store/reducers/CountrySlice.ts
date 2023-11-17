import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {countryType} from "../models/ICountry.ts";


interface CountryState{
    countries:countryType[];
    sortedCountries: countryType[],
    searchAndSortedCountries: countryType[],
    isLoading: boolean,
    error: string
}

const initState:CountryState = {
    countries: [],
    sortedCountries: [],
    searchAndSortedCountries: [],
    isLoading: false,
    error: ''
}

export const countrySlice = createSlice({
    name: 'country',
    initialState: initState,
    reducers:{
        fetch_country(state){
            state.isLoading = true;
        },
        fetch_country_success(state,action:PayloadAction<countryType[]>){
            state.isLoading = false;
            state.countries = action.payload;
            state.error = '';
        },
        fetch_country_error: (state, action:PayloadAction<string>)=>{
            state.isLoading = false;
            state.countries = [];
            state.error = action.payload
        },
        filter: (state,action:PayloadAction<string>) => {
            if(action.payload === 'All'){
                state.sortedCountries = state.countries;
            }else {
                state.sortedCountries = state.countries.filter((country) => {
                    if(country.region.toLowerCase().includes(action.payload.toLowerCase())){
                        return country;
                    }
                });
            }
        },
        search: (state,action:PayloadAction<string>) => {
            if(action.payload === ''){
                state.searchAndSortedCountries = state.sortedCountries;
            }else{
                state.searchAndSortedCountries = state.sortedCountries.filter(country => {
                    if(country.name.common.toLowerCase().includes(action.payload.toLowerCase())){
                        return country
                    }
                })
            }
        }
    }
})

export default countrySlice.reducer;