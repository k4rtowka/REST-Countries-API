import {AppDispatch} from "../store.ts";
import {themeSlice} from "../reducers/ThemeSlice.ts";

export const switchTheme = () =>  (dispatch: AppDispatch) => {
    dispatch(themeSlice.actions.switchTheme())
}