import React, { useState } from "react";
import { useStyles } from "../styles/searchForm";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as SearchIcon } from "./../svg/searchIcon.svg";
import { Link } from "react-router-dom";

const SearchForm = props => {
  const classes = useStyles();

  const [searchTxt, setSearchTxt] = useState();
  console.log("searh",props.location.state);
  const handleDateChange = event => {
    setSearchTxt(Object.assign({}, searchTxt, { value: event.target.value }));
  };

  return (
    <div className={classes.searchForm}>
      <InputBase
        placeholder="Search"
        onChange={event => handleDateChange(event)}
      />
      <Link
        to={{
          pathname: "/byDate",
          state: { ...props.location.state, searchTxt }
        }}
      >
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
      </Link>
    </div>
  );
};

export default SearchForm;
