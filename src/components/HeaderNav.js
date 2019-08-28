import React, { useEffect, useState } from "react";
import { useStyles } from "../styles/headerNav";
import DatePickerInput from "./DatePicker";
import SearchForm from "./SearchForm";
import { Link } from "react-router-dom";

const HeaderNav = props => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = useState({});
  const handleDateChange = (id, value) => {
    setSelectedDate(Object.assign({}, selectedDate, { [id]: value }));
  };

  const isDateValid = () => {
    if (selectedDate.startDate && selectedDate.endDate) {
      console.log(selectedDate.startDate, selectedDate.endDate);
      console.log(selectedDate.startDate <= selectedDate.endDate);
    }
  };

  useEffect(() => {
    props.history.push({
      pathname: "/byDate",
      state: { selectedDate }
    });
  }, [selectedDate, props.history]);

  return (
    <div className={classes.headerRow}>
      <div className={classes.headerCol}>
        <DatePickerInput
          id="startDate"
          name="startDateInput"
          label="Start-Date"
          selectedDate={selectedDate}
          maxDate={selectedDate.endDate}
          onChange={handleDateChange}
        />
      </div>
      <div className={classes.headerCol}>
        <DatePickerInput
          id="endDate"
          name="endDateInput"
          label="End-Date"
          selectedDate={selectedDate}
          minDate={selectedDate.startDate}
          onChange={handleDateChange}
        />
      </div>
      <div className={classes.headerCol}>
        <SearchForm />
      </div>
    </div>
  );
};

export default HeaderNav;
