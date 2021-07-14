import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    
  },
  darkModeAdjust: {
    color:
      theme.palette.type === "dark"
        ? "#fff !important"
        : "#3f51b5 !important",
    backgroundColor:
      theme.palette.type === "dark" ? "#303030 !important" : "#fff !important",
  },
  darkModeAdjustError: {
    color:
      theme.palette.type === "dark"
        ? "rgb(250, 179, 174) !important"
        : "rgb(97, 26, 21) !important",
    backgroundColor:
      theme.palette.type === "dark" ? "rgb(24, 6, 5) !important" : "rgb(253, 236, 234) !important",
  },
}));

const CustomizedSnackbars = ({ isopenAlert ,message ,severity }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar
        open={isopenAlert}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert className={severity === "error" ? classes.darkModeAdjustError : classes.darkModeAdjust} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default CustomizedSnackbars;
