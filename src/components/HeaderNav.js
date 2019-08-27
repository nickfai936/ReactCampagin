import React from "react";
import { useStyles } from "../styles/headerNav";
import DatePickerInput from "./DatePicker";
import SearchForm from "./SearchForm";

const HeaderNave = props => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState({});
  const handleDateChange = (id, value) => {
    setSelectedDate(Object.assign({}, selectedDate, { [id]: value }));
  };

  return (
    <div className={classes.headerRow}>
      <div className={classes.headerCol}>
        <DatePickerInput
          id="startDate"
          name="startDateInput"
          label="Start-Date"
          selectedDate={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className={classes.headerCol}>
        <DatePickerInput
          id="endDate"
          name="endDateInput"
          label="End-Date"
          selectedDate={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div className={classes.headerCol}>
        <SearchForm />
      </div>
    </div>
  );
};

export default HeaderNave;
