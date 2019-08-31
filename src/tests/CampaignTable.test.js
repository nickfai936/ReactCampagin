import React from "react";
import "@testing-library/jest-dom/extend-expect";
import CampaignContext from "../CampaignContext";
import preloadedCampaigns from "../campaigns";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CampaignTable from "../components/CampaignTable";

configure({ adapter: new Adapter() });

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("<CampaignTable>", () => {
  const props = {
    location: {
      state: {}
    }
  };

  it("can render and display row correctly", () => {
    const wrapper = mount(
      <CampaignContext.Provider value={preloadedCampaigns}>
        <CampaignTable {...props} />} />
      </CampaignContext.Provider>
    );
    const tableHead = wrapper.find("thead");
    const headers = tableHead.find("th");
    const tableBody = wrapper.find("tbody");
    const tableRows = tableBody.find("tr");
    expect(tableHead).toHaveLength(1);
    expect(tableHead.find("tr")).toHaveLength(1);
    expect(headers).toHaveLength(5);
    expect(headers.at(0).text()).toBe("Name");
    expect(headers.at(1).text()).toBe("Start Date");
    expect(headers.at(2).text()).toBe("End Date");
    expect(headers.at(3).text()).toBe("Active");
    expect(headers.at(4).text()).toBe("Budget");
    expect(tableRows.find("tr")).toHaveLength(preloadedCampaigns.data.length);
    tableRows.forEach((tr, index) => {
      const cells = tr.find("td");
      expect(cells.at(0).text()).toEqual(preloadedCampaigns.data[index].name);
      expect(cells.at(1).text()).toEqual(
        preloadedCampaigns.data[index].startDate
      );
      expect(cells.at(2).text()).toEqual(
        preloadedCampaigns.data[index].endDate
      );
      if (
        Date.parse(preloadedCampaigns.data[index].startDate) <= new Date() &&
        Date.parse(preloadedCampaigns.data[index].endDate) >= new Date()
      ) {
        expect(cells.at(3).text()).toEqual("Active");
      } else {
        expect(cells.at(3).text()).toEqual("Inactive");
      }
      expect(cells.at(4).text()).toEqual(
        `${preloadedCampaigns.data[index].budget} ${preloadedCampaigns.currencyCode}`
      );
    });
  });
});
