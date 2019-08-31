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
      target: { value: "08/36/2019" }
    });
    fireEvent.change(endDate, {
      target: { value: "13/12/2019" }
    });
    expect(
      container.querySelector('[id="kdp-startDate-helper-text"]').textContent
    ).toBe("Invalid Date Format");
    expect(
      container.querySelector('[id="kdp-endDate-helper-text"]').textContent
    ).toBe("Invalid Date Format");
  });

  it("error if start date after end date", () => {
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
      target: { value: "08/30/2019" }
    });
    fireEvent.change(endDate, {
      target: { value: "08/20/2019" }
    });
    expect(
      container.querySelector('[id="kdp-endDate-helper-text"]').textContent
    ).toBe("End-date should not be before start-date");
  });
});
