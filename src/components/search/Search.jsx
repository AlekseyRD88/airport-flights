import React, { useState } from 'react';
import './search.scss';

const Search = ({ setValue }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearch = event => {
    setInputValue(event.target.value);
  };
  const handleSearchList = () => {
    setValue(inputValue.toLowerCase());
    setInputValue('');
  };

  return (
    <div className="search">
      <h1 className="search-header">Search your flight</h1>
      <div className="search__container">
        <i className="fa-solid fa-magnifying-glass search-icon" />
        <input className="search__input" type="text"
          placeholder="Airline, direction, flight" value={inputValue}
          onChange={handleSearch} />
      </div>
      <button className="button search__button" onClick={handleSearchList}>
        Search
      </button>
    </div>
  );
};

export default Search;