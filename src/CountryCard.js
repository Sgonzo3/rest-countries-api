import './App.css';
import React from 'react';

function CountryCard({country}) {
    return(
        <article className="country-card">
            <img className="country-flag-img" src={country?.flags?.png} alt={`${country?.name} flag`} />
            <section className='country-details'>
                <h2>{country?.name}</h2>
                <p>Population: {country?.population}</p>
                <p>Region: {country?.region}</p>
                <p>Capital: {country?.capital}</p>
            </section>
        </article> 
    );
}

export default CountryCard;