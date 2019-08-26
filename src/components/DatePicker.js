import React from "react";
import { useStyles } from "../styles/date-picker";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DatePickerInput = props => {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(null);
  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <div className={classes.datePicker}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={props.label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
        {/* <DatePicker
          keyboard={true}
          clearable={true}
          format="MM/dd/yyyy"
          label="Basic example"
          value={props.selectedDate ? null : props.selectedDate}
          onChange={props.handleDateChange}
        /> */}
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePickerInput;
