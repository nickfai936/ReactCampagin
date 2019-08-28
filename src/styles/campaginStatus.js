import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  status: {
    display: "flex"
  },
  circle: {
    display: "inline-flex",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    backgroundColor: props => (props.status ? "green" : "red"),
    alignSelf: "center",
    margin: "0 8px"
  }
});
