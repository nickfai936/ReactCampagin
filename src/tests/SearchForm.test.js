import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchForm from "../components/SearchForm";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("<SearchForm>", () => {
  it("can render", () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={SearchForm} />
          </Switch>
        </BrowserRouter>,
        container
      );
    });
    const InputBase = container.querySelector('[id="searchInput"]');
    expect(InputBase).toHaveAttribute("placeholder", "Search");
    expect(InputBase).not.toHaveValue();

    const IconButton = container.querySelector('[id="searchIconButton"]');
    const SearchIcon = container.querySelector('[id="searchIcon"]');
    expect(IconButton).toContainElement(SearchIcon);
  });
  it("can search", () => {
    act(() => {
      ReactDOM.render(
        <BrowserRouter>
          <Switch>
            <Route path="/" component={SearchForm} />
          </Switch>
        </BrowserRouter>,
        container
      );
    });
    const InputBase = container.querySelector('[id="searchInput"]');
    fireEvent.change(InputBase, {
      target: { value: "testing" }
    });
    expect(InputBase).toHaveValue("testing");
    expect(container.state.searchTxt).toBe(false);
  });
});
