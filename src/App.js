import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import HeaderNav from "./components/HeaderNav";
import CampaignTable from "./components/CampaignTable";
import CampaignContext from "./CampaignContext";
import preloadedCampaigns from "./campaigns";

const App = props => {
  const [campaigns, setCampaigns] = useState(preloadedCampaigns);

  const AddCampaigns = newData => {
    const updatedCampaigns = Object.assign({}, campaigns, {
      data: [...campaigns.data, ...newData]
    });
    setCampaigns(updatedCampaigns);
  };

  window.AddCampaigns = AddCampaigns;

  return (
    <CampaignContext.Provider value={campaigns}>
      <div className="container">
        <HeaderNav />
        <CampaignTable />
      </div>
    </CampaignContext.Provider>
  );
};

export default App;
