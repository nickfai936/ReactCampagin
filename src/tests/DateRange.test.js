import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DateRange from "../components/DateRange";

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

describe("<DateRange>", () => {
  it("can render", () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Switch>
            <Route render={props => <DateRange {...props} />} />
          </Switch>
        </BrowserRouter>,
        container
      );
    });
    const startDate = container.querySelector('[id="startDate"]');
    const endDate = container.querySelector('[id="endDate"]');
    expect(startDate).not.toHaveValue();
    expect(endDate).not.toHaveValue();
  });
  it("error if start date after end date", () => {
    const wrapper = shallow(
      <BrowserRouter>
        <Switch>
          <Route render={props => <DateRange {...props} />} />
        </Switch>
      </BrowserRouter>
    );
    const startDate = wrapper.find("DatePicker");
    // startDate.simulate("change", { target: { value: 20 } });
  });
});
