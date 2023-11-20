import classes from "./country.module.scss";
import {countryType} from "../../store/models/ICountry.ts";
import {useNavigate} from "react-router-dom";

interface CountryProps {
    country: countryType;
}
const Country = ({country}: CountryProps) => {
    const router = useNavigate();

    return (
        <div
            className={classes.country}
            key={country.numericCode}
            onClick={() => router(`/home/${country.cca3}`)}
        >
            <div className={classes.flag}>
                <img src={country.flags['svg']} alt={country.flags['alt']}/>
            </div>
            <div className={classes.bottom}>
                <h3>{country.name.common}</h3>
                <div>Population: {country.population.toLocaleString('eu')}</div>
                <div>Region: {country.region}</div>
                <div>Capital: {country.capital}</div>
            </div>
        </div>
    );
};

export default Country;