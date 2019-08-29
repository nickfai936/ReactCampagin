import React, { useEffect, useReducer } from "react";
import { useStyles } from "../styles/dataRange";
import DatePicker from "./DatePicker";

const DataRange = props => {
  const classes = useStyles();

  const reducer = (selectedDate, action) => {
    switch (action.id) {
      case "startDate":
        return Object.assign({}, selectedDate, { startDate: action.value });
      case "endDate":
        return Object.assign({}, selectedDate, { endDate: action.value });
      default:
        return selectedDate;
    }
  };

  const [selectedDate, handleDateChange] = useReducer(reducer, {});

  useEffect(() => {
    if (
      (!props.location.state ||
        props.location.state.selectedDate !== selectedDate) &&
      Object.keys(selectedDate).length !== 0
    ) {
      props.history.push({
        pathname: "/filter",
        state: { ...props.location.state, selectedDate }
      });
    }
  }, [selectedDate, props.history, props.location.state]);

  return (
    <div className={classes.row}>
      <div className={classes.col}>
        <DatePicker
          id="startDate"
          name="startDateInput"
          label="Start-Date"
          selectedDate={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className={classes.col}>
        <DatePicker
          id="endDate"
          name="endDateInput"
          label="End-Date"
          selectedDate={selectedDate}
          minDate={selectedDate.startDate}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DataRange;
