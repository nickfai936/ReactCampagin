import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

import CampaignStatus from "../components/CampaignStatus";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("<ComponentStatus>", () => {
  it("can render", () => {
    act(() => {
      ReactDOM.render(<CampaignStatus />, container);
    });
    const div = container.querySelector("div");
    const span = container.querySelector("span");
    expect(div.textContent).toBe("Inactive");
    expect(span).toHaveStyle("background-color: red");
  });

  it("show active", () => {
    act(() => {
      ReactDOM.render(<CampaignStatus status={true} />, container);
    });
    const div = container.querySelector("div");
    const span = container.querySelector("span");
    expect(div.textContent).toBe("Active");
    expect(span).toHaveStyle("background-color: green");
  });

  it("show inactive", () => {
    act(() => {
      ReactDOM.render(<CampaignStatus status={false} />, container);
    });
    const div = container.querySelector("div");
    const span = container.querySelector("span");
    expect(div.textContent).toBe("Inactive");
    expect(span).toHaveStyle("background-color: red");
  });
});
