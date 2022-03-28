import { makeStyles } from "@material-ui/core";

const stepperStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    textAlign: "start",
  },
  back: {
    background: theme.palette.type === "dark" ? "#303030 !important" : "#fff",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  cursor: {
    cursor: "pointer",
  },
}));

export default stepperStyle;
