import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css"

import getGeocode from "../../services/geocoding";


const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("")

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    setSearchText(value)
  }

  return (
    <div className={styles.searchBar}>
      <input 
        type="search"
        id="weather-search"
        placeholder="Enter City Name"
        onChange={handleSearch}
        />
      <button onClick={console.log(getGeocode(searchText))}>Search</button>
    </div>
  )

}

export default SearchBar