import React from "react";
// import styles from 

const SearchBar = (props) => {

  return (
    <div>
      <label for="weather-search">Enter city name</label>
      <input type="search" id="weather-search" name="q">
        <button>Search</button>
      </input>
    </div>
  )

}

export default SearchBar