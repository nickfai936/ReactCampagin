import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React, { useState } from "react";
import CampaignContext from "./CampaignContext";
import preloadedCampaigns from "./campaigns";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = props => {
  const [campaigns, setCampaigns] = useState(preloadedCampaigns);

  const AddCampaigns = newData => {
    // const updatedCampaigns = Object.assign({}, campaigns, {
    //   data: Object.values({
    //     ...campaigns.data,
    //     ...[...campaigns.data, ...newData]
    //   })
    // });
    // console.log(updatedCampaigns.data);
    // console.log({ ...newData });
    // console.log({...[ ...campaigns.data, ...newData ]});
    // console.log([ ...campaigns.data, ...newData ]);
    // console.log(...Object.values({ ...campaigns.data }));
    // console.log(...Object.values({ ...newData }));
    // console.log(Object.assign(...campaigns.data, ...newData));
    // const a = { ...campaigns.data, ...[ ...campaigns.data, ...newData ] };
    // console.log(Object.values(a));
    const updatedCampaigns = Object.assign({}, campaigns, {
      data: [...campaigns.data, ...newData]
    });
    setCampaigns(updatedCampaigns);
  };

  window.AddCampaigns = AddCampaigns;

  return (
    <BrowserRouter>
      <CampaignContext.Provider value={campaigns}>
        <div className="container">
          <Switch>
            <Route path="/" component={MainPage} />
          </Switch>
        </div>
      </CampaignContext.Provider>
    </BrowserRouter>
  );
};

export default App;
