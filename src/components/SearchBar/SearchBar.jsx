import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <AiOutlineSearch className="search-bar__icon" />
      <input
        type="search"
        value={ searchValue }
        placeholder="O que você procura?"
        className="search-bar__input"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />
    </form>
  );
}

export default SearchBar;
