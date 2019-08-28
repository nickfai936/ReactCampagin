import React, { useEffect, useState } from "react";
import { useStyles } from "../styles/dataRange";
import DatePicker from "./DatePicker";

const DataRange = props => {
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
