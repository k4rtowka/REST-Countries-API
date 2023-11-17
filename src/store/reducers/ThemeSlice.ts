import {createSlice} from "@reduxjs/toolkit";

interface ThemeState{
    theme:string;
}

const initState:ThemeState = {
    theme: 'light'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: initState,
    reducers:{
        switchTheme(state){
            state.theme === 'light'?state.theme = 'dark':state.theme = 'light';
        }
    }
})

export default themeSlice.reducer;