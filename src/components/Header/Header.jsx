import React from "react";
import styles from './Header.module.css'

import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = (props) => {

  return (
    <div className={styles.header}>
      <SearchBar />
    </div>
  )
}

export default Header