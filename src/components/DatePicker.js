import React from "react";
import { useStyles } from "../styles/datePicker";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const DatePickerInput = props => {
  const classes = useStyles();

  return (
    <div className={classes.datePicker}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          autoOk
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id={props.id}
          label={props.label}
          value={
            props.selectedDate[props.id] ? props.selectedDate[props.id] : null
          }
          onChange={value => props.onChange(props.id, value)}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default DatePickerInput;