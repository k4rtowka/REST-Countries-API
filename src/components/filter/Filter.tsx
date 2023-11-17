import classes from './filter.module.scss'
import {useEffect, useState} from "react";
import {useAppDispatch} from "../../hooks/redux.ts";
import {filterAndSearchCountry} from "../../store/action-creators/CountryAction.ts";
const Filter = () => {
    const [filterCountry, setFilterCountry] = useState('');
    const [search, setSearch] = useState('')
    const dispatch = useAppDispatch();
    const changeFilter = (value:string) => {
        setFilterCountry(value);
    }

    const change = (value:string) =>{
        setSearch(value);
    }

    useEffect(() => {
        dispatch(filterAndSearchCountry(filterCountry, search));
    }, [search, filterCountry, dispatch]);

    return (
        <div className={classes.wrapper}>
            <input type="text"
                   placeholder={"Search for a country..."}
                   onChange={(e) => change(e.currentTarget.value)}
                   className={classes.search}/>
            <div className={classes.filter}>
                <select
                    value={filterCountry}
                    onChange={event => changeFilter(event.target.value)}
                >
                    <option disabled value="">Filter by Region</option>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>

        </div>
    );
};

export default Filter;