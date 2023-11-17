import Filter from "../components/filter/Filter.tsx";
import CountryList from "../components/countryList/CountryList.tsx";

const HomePage = () => {
    return (
        <>
            <Filter/>
            <CountryList/>
        </>
    );
};

export default HomePage;