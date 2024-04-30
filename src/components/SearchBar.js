import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

function SearchBar({placeholder}) {
  const [searchValue, setSearchValue] = useState('');

  const clearInput = () => {
    setSearchValue('');
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={handleInputChange}
        />
        <div className="searchIcon">
          {searchValue.trim() === '' && (
            <SearchIcon />
          )}
          {searchValue.trim() !== '' && (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
