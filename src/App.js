import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import DatePickerInput from "./components/DatePicker";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    // <Grid container justify="space-around">
    <div className="d-inline-flex flex-column flex-sm-row justify-content-around">
      <div className="align-self-end">
        <DatePickerInput
          id="startDate"
          name="startDateInput"
          label="Start-Date"
        />
      </div>
      <div className="align-self-end">
        <DatePickerInput id="endDate" name="endDateInput" label="End-Date" />
      </div>
      <div className="align-self-end">
        <SearchForm />
      </div>
    </div>
    // </Grid>
  );
}

export default App;
