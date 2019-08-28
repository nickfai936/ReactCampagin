import React from "react";
import HeaderNav from "../components/HeaderNav";
import CampaignTable from "../components/CampaignTable";

const MainPage = props => {
  return (
    <div>
      <HeaderNav {...props} />
      <CampaignTable {...props} />
    </div>
  );
};

export default MainPage;
