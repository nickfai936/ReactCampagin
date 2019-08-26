import React from "react";
import { useStyles } from "../styles/search-form";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { ReactComponent as SearchIcon } from "./../svg/searchIcon.svg";

const SearchForm = props => {
  const classes = useStyles();

  return (
    <div className={classes.searchForm}>
      <InputBase placeholder="Search" />
      <IconButton aria-label="search">
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default SearchForm;
