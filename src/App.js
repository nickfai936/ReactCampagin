import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import CampaignContext from "./CampaignContext";
import preloadedCampaigns from "./campaigns";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const App = props => {
  const [campaigns, setCampaigns] = useState(preloadedCampaigns);

  const AddCampaigns = newData => {
    try {
      const updatedCampaigns = Object.assign({}, campaigns, {
        data: Object.values(
          [...campaigns.data, ...newData].reduce((newList, campaign) => {
            return { ...newList, ...{ [campaign.id]: campaign } };
          }, {})
        )
      });
      setCampaigns(updatedCampaigns);
    } catch (error) {
      console.log(error);
    }
  };

  window.AddCampaigns = AddCampaigns;

  return (
    <BrowserRouter>
      <CampaignContext.Provider value={campaigns}>
        {!props.location && <Redirect to="/" />}
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </CampaignContext.Provider>
    </BrowserRouter>
  );
};

export default App;
