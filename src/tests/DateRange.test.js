import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DateRange from "../components/DateRange";
import { fireEvent } from "@testing-library/dom";

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
    const startDate = container.querySelector('[id="kdp-startDate"]');
    const endDate = container.querySelector('[id="kdp-endDate"]');
    expect(startDate).not.toHaveValue();
    expect(endDate).not.toHaveValue();
  });

  it("error if date format invalid", () => {
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
    const startDate = container.querySelector('[id="kdp-startDate"]');
    const endDate = container.querySelector('[id="kdp-endDate"]');
    fireEvent.change(startDate, {
      target: { value: "08/38/2019" }
    });
    console.log(container.querySelector('[id="kdp-startDate-helper-text"]'));
    expect(
      container.querySelector('[id="kdp-startDate-helper-text"]').textContent
    ).toBe("Invalid Date Format");
    // expect(startDate).not.toHaveValue();
    // expect(endDate).not.toHaveValue();
  });

  it("error if start date after end date", () => {
    const wrapper = mount(
      <BrowserRouter>
        <Switch>
          <Route render={props => <DateRange native={true} {...props} />} />
        </Switch>
      </BrowserRouter>
    );
    // const startDate = wrapper.find("DatePicker").at(0);
    // console.log(startDate.length);
    // console.log(startDate.prop("id"));
    // console.log(startDate.prop("value"));
    // console.log(wrapper.find("DatePicker").length);
    // const event = {
    //   target: { name: "startDateInput", value: new Date() }
    // };
    // console.log(
    //   startDate.simulate("change", event)
    //   // .prop("onChange")()
    // );
    // console.log(startDate.prop("value"));
    // console.log(startDate.prop("selectedDate"));
    // expect(wrapper.find("DatePicker")).toHaveProp("id", "startDate");
  });
});
