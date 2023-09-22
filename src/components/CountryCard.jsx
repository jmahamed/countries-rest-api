import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';

const CountryCard = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("")
  
  const darkMode = useSelector((state) => state.darkMode);

  useEffect(() => {
    if (searchText.trim() === "") {

      fetch("https://restcountries.com/v3.1/all")
        .then((response) => response.json())
        .then((data) => setCountries(data))
    } else {
   
      fetch(`https://restcountries.com/v3.1/name/${searchText}`)
        .then((response) => response.json())
        .then((data) => setCountries(data))
    }
  }, [searchText]);

  async function searchCountry() {

    const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
    const data = await res.json()
    setCountries(data)
  }

  function handleSearchCountry(e) {
    e.preventDefault()
    searchCountry()
  }

  return (
    <div className="container">
    <form onSubmit={handleSearchCountry} action="">
    <input className={`search ${darkMode ? 'dark-mode' : ''}`} onChange={(e) => setSearchText(e.target.value)} id="search"  name="search" value={searchText} type="text" placeholder='Search for a country'/>
    </form>
    <div className="cards-grid">
      {countries.map((country) => {
        return (
          <div className={`card ${darkMode ? 'dark-mode' : ''}`} key={country.name.common}>
            <img width={267} height={160} src={country.flags.svg} alt="flag" />
            <h4 className="country-name">{country.name.common}</h4>
            <div className="country-details">
              <span className="population">Population:</span>
              <span className="pop-number">
                {country.population.toLocaleString()}
              </span>{" "}
              <br />
              <span className="region">Region:</span>
              <span className="region-name">{country.region}</span> <br />
              <span className="capital">Capital:</span>
              <span className="capital-name">{country.capital}</span> <br />
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default CountryCard;
