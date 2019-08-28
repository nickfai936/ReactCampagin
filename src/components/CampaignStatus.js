import React from "react";
import { useStyles } from "../styles/campaginStatus";

const CampaignStatus = props => {
  const classes = useStyles(props);

  return (
    <div className={classes.status}>
      {props.status ? (
        <>
          <span className={classes.circle}></span>
          {"Active"}
        </>
      ) : (
        <>
          <span className={classes.circle}></span>
          {"Inactive"}
        </>
      )}
    </div>
  );
};

export default CampaignStatus;
