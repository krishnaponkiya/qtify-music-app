
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className="{styles.search-container}">
      <input
        type="text"
        placeholder="Search a song of your choice"
      />
      <button type="button" aria-label="Search">
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
