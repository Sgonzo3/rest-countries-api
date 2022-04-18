import './App.css';
import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

function CountryList(props) {
    const [countryData, setCountryData] = useState([]);

    const [regionData, setRegionData] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredList, setFilteredList] = useState([]);
    const [regionFilter, setRegionFilter] = useState("");
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

    useEffect(() => {
        setFilteredList(countryData.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()) && (!regionFilter || country.region.toLowerCase() === regionFilter)))
    }, [countryData, searchTerm, regionFilter]);

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleRegionSelect = (event) => {
        setRegionFilter(event.target.value);
    }

    return (
        <section className="country-list">
            <form className="controls" action="">
                <input className="searchbar themed" onChange={handleSearchInput} type="text" name="" id="" placeholder="Search for a country..."/>
                <select className="filter-dropdown themed" onChange={handleRegionSelect} name="" id="" placeholder="Filter by Region">
                    <option className="filter-dropdown-option themed" value="">All</option>
                    {   
                        regionData.length 
                            ? regionData.map(region => <option className="filter-dropdown-option themed" value={region.toLowerCase()}>{region}</option>)
                            : <option className="filter-dropdown-option themed">Loading...</option>
                    }
                </select>
            </form>
          <section className='country-grid'>
            {
                countryData.length 
                    ? filteredList.map(country => <CountryCard country={country}/>)
                    : <div className="loading-div">Loading...</div>
            }
          </section>
        </section>
    );
}

export default CountryList;