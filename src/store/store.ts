import {combineReducers, configureStore} from "@reduxjs/toolkit";
import themeReducer from './reducers/ThemeSlice'
import countryReducer from "./reducers/CountrySlice";

const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countryReducer
})
export const setStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore['dispatch'];