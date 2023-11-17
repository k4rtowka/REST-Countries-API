import {Link, useParams} from "react-router-dom";
import arrow from '../assets/icon-left.png'
import classes from "./countryPage.module.scss";
import {useAppSelector} from "../hooks/redux.ts";

const CountryPage = () => {
    const params = useParams<{ cca3: string }>();
    const countries = useAppSelector(state => state.countries.countries);
    const country = countries.find(value => params.cca3 === value.cca3);

    return (
        <div>
            <div className={classes.topper}>
                <Link to={'/home'} style={{textDecoration: 'none'}}>
                    <button className={classes.button__back}>
                        <img src={arrow} alt="" style={{marginRight: '10px'}}/>
                        Back
                    </button>
                </Link>
            </div>
            <div className={classes.content}>
                <img src={country?.flags['svg']} alt={country?.flags['alt']}/>
                <div className={classes.rightSide}>
                    <h2>{country?.name.common}</h2>
                    <div></div>
                    <div>
                        <div className={classes.item}>Population: {country?.population.toLocaleString('eu')}</div>
                        <div className={classes.item}>Region: {country?.region}</div>
                        <div className={classes.item}>Sub region: {country?.subregion}</div>
                        <div className={classes.item}>Capital: {country?.capital}</div>
                    </div>
                    <div>
                        <div className={classes.item}>Top level Domain: {country?.tld}</div>
                        <div className={classes.item}>Country code: {country?.cca3}</div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default CountryPage;