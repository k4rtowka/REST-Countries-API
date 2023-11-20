import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {countryType} from "../models/ICountry.ts";
import {fetchCountry} from "../action-creators/CountryAction.ts";


interface CountryState{
    countries:countryType[];
    country: countryType | null,
    sortedCountries: countryType[],
    searchAndSortedCountries: countryType[],
    isLoading: boolean,
    error: string
}

const initState:CountryState = {
    countries: [],
    country: null,
    sortedCountries: [],
    searchAndSortedCountries: [],
    isLoading: false,
    error: ''
}

export const countrySlice = createSlice({
    name: 'country',
    initialState: initState,
    reducers:{
        fetchCountries(state){
            state.isLoading = true;
        },
        fetchCountriesSuccess(state,action:PayloadAction<countryType[]>){
            state.isLoading = false;
            state.countries = action.payload;
            state.error = '';
        },
        fetchCountriesError: (state, action:PayloadAction<string>)=>{
            state.isLoading = false;
            state.countries = [];
            state.error = action.payload
        },
        resetCountry: (state)=>{
           state.country = null;
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
        },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchCountry.pending, (state) => {
            state.isLoading = true;
        }).addCase(fetchCountry.fulfilled, (state, action) => {
            state.isLoading = false;
            state.country = action.payload
        }).addCase(fetchCountry.rejected, (state, action) => {
           state.isLoading = false;
           state.error = action.payload as string;
        })
    },
})

export const {resetCountry} = countrySlice.actions

export default countrySlice.reducer;