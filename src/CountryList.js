import './App.css';
import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function CountryList(props) {
    const [countryData, setCountryData] = useState([]);

    const [regionData, setRegionData] = useState([]);


    useEffect(() => {
        const fetchCountries = async () => {
            await fetch('https://restcountries.com/v2/all')
            .then(resp => {
                if (!resp.ok) throw new Error(`${resp}`);
                return resp.json();
            })
            .then(data => {
                setCountryData(data);
                setRegionData([...new Set(data.map(country => country.region))]);
            });
        }
        fetchCountries();
    }, []);

    return (
        <section className="country-list">
            <form className="controls" action="">
                <input className="searchbar" type="text" name="" id="" placeholder="Search for a country..."/>
                <select className="filter-dropdown" name="" id="" placeholder="Filter by Region">
                    {
                        regionData.length 
                            ? regionData.map(region => <option>{region}</option>)
                            : <option>Loading...</option>
                    }
                </select>
            </form>
          <section className='country-grid'>
            {
                countryData.length 
                    ? countryData.map(country => <CountryCard country={country}/>)
                    : <>Loading...</>
            }
          </section>
        </section>
    );
}

export default CountryList;