import React from "react";
import DataRange from "../components/DataRange";
import CampaignTable from "../components/CampaignTable";
import SearchForm from "../components/SearchForm";
import { useStyles } from "../styles/mainPage";

const MainPage = props => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.headerRow}>
        <div className={classes.headerCol}>
          <DataRange {...props} />
        </div>
        <div className={classes.headerCol}>
          <SearchForm {...props} />
        </div>
      </div>
      <CampaignTable {...props} />
    </div>
  );
};

export default MainPage;
