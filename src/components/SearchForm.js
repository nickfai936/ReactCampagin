import React, { useState } from "react";
import { useStyles } from "../styles/searchForm";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as SearchIcon } from "./../svg/searchIcon.svg";
import { Link } from "react-router-dom";

const SearchForm = props => {
  const classes = useStyles();

  const [searchTxt, setSearchTxt] = useState({});

  const handleSearchChange = event => {
    setSearchTxt(Object.assign({}, searchTxt, { value: event.target.value }));
  };

  return (
    <div className={classes.searchForm}>
      <InputBase
        id="searchInput"
        placeholder="Search"
        onChange={event => handleSearchChange(event)}
      />
      <Link
        id="searchLink"
        to={{
          pathname: "/filter",
          search: `search=${searchTxt.value ? searchTxt.value : ""}`,
          state: { ...props.location.state, searchTxt }
        }}
      >
        <IconButton id="searchIconButton">
          <SearchIcon id="searchIcon" />
        </IconButton>
      </Link>
    </div>
  );
};

export default SearchForm;
