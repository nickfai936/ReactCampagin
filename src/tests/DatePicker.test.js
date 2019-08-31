import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import DatePicker from "../components/DatePicker";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("<DatePicker>", () => {
  it("can render", () => {
    act(() => {
      ReactDOM.render(
        <DatePicker id="startDate" name="startDateInput" label="Start-Date" />,
        container
      );
    });

    const startDate = container.querySelector('[id="kdp-startDate"]');
    expect(startDate).not.toHaveValue();
  });

  it("can select date", async () => {
    act(() => {
      ReactDOM.render(
        <DatePicker
          id="startDate"
          name="startDateInput"
          label="Start-Date"
          selectedDate={new Date("08/25/2019")}
        />,
        container
      );
    });

    const startDate = container.querySelector('[id="kdp-startDate"]');
    expect(startDate).toHaveValue("08/25/2019");
  });

  it("can call onChange", () => {
    const onChange = jest.fn();

    act(() => {
      ReactDOM.render(
        <DatePicker
          id="startDate"
          name="startDateInput"
          label="Start-Date"
          selectedDate={new Date("08/25/2019")}
          onChange={onChange}
        />,
        container
      );
    });

    const startDate = container.querySelector('[id="kdp-startDate"]');
    expect(startDate).toHaveValue("08/25/2019");
    fireEvent.change(startDate, { target: { value: null } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
