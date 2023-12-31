import classes from "./countryList.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {useEffect} from "react";
import {fetchCountries} from "../../store/action-creators/CountryAction.ts";
import Country from "../country/Country.tsx";
const CountryList = () => {
    const {searchAndSortedCountries,isLoading,error} = useAppSelector(state => state.countries)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    return (
        <div className={classes.list}>
            {isLoading && <h1>Загрузка...</h1>}
            {error && <h1>{error}</h1>}
            {searchAndSortedCountries.map((country, index) =>
                <Country key={index}  country={country}/>
            )}
        </div>
    );
};

export default CountryList;