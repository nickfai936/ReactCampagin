import React, { useState } from "react";
import DateRange from "../components/DateRange";
import CampaignTable from "../components/CampaignTable";
import SearchForm from "../components/SearchForm";
import { ReactComponent as HamburgerMenuIcon } from "./../svg/toggleCollpaseMenu.svg";
import { useStyles } from "../styles/mainPage";

const MainPage = props => {
  const classes = useStyles();
  const [showCollapse, setShowCollapse] = useState(false);
  const s = showCollapse
    ? {
        maxHeight: "184px"
      }
    : "";

  const handleOnClick = () => {
    setShowCollapse(!showCollapse);
  };

  return (
    <div className={classes.container}>
      <div className={classes.headerRow}>
        <div className={"d-none d-sm-inline " + classes.headerCol}>
          <DateRange {...props} />
        </div>
        <div className={classes.headerCol}>
          <SearchForm {...props} />
        </div>
        <div
          className={"d-flex d-sm-none align-items-center " + classes.headerCol}
          style={{ padding: "34px 0 10px 0" }}
        >
          <span onClick={handleOnClick}>
            <HamburgerMenuIcon width="24px" height="24px" />
          </span>
        </div>
      </div>
      <div
        id="collapsedDateRange"
        className={"d-sm-none " + classes.headerCol}
        style={{
          maxHeight: 0,
          transition: "max-height 0.35s ease-out",
          overflow: "hidden",
          ...s
        }}
      >
        <DateRange {...props} />
      </div>
      <CampaignTable {...props} />
    </div>
  );
};

export default MainPage;
