import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect, useDispatch } from "react-redux";
import {
  FormControl,
  FormHelperText,
  Grid,
  Link,
  MenuItem,
  Select,
} from "@material-ui/core";
import dialogStyle from "./dialog-style";
import { setDialogOpen, setDialogQnAOpen } from "../../actions";

const mapStateToProps = (state) => {
  return { question: state.question, isDialogOpen: state.isDialogOpen };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setDialogOpen: (isDialogOpen) => dispatch(setDialogOpen(isDialogOpen)),
    setDialogQnAOpen: (dialogQnA) =>
      dispatch(setDialogQnAOpen(dialogQnA)),
  };
};
const MaxWidthDialog = ({ question, isDialogOpen }) => {
  const classes = dialogStyle();
  const [Language, setLanguage] = React.useState("All");
  const [langData, setlangData] = React.useState([{}]);
  const dispatch = useDispatch();

  const handleQnAOpen = (data) => {
    dispatch( setDialogQnAOpen({
      data: data,
      isDialogQnAOpen: true,
    }));
    dispatch(setDialogOpen(false));
  };

  const handleLangSelect = (event) => {
    setLanguage(event.target.value);
  };

  const handleClose = () => {
    dispatch(setDialogOpen(false));
  };

  useEffect(() => {
    var filteredData = question;
    if (Language !== "All") {
      filteredData = question.filter((l) => l.lang === Language);
    }
    setlangData(filteredData);
  }, [Language, question]);

  return (
    <React.Fragment>
      <Dialog
        classes={{ paper: classes.dialogHeight }}
        fullWidth={true}
        maxWidth="lg"
        scroll="body"
        open={isDialogOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">
          <Grid
            container
            className={classes.root}
            direction="row"
            justify="space-between"
          >
            <Grid item xs={5} className={classes.colorh4}>
              List of All Questions
            </Grid>

            <Grid item xs={7}>
              <FormControl className={classes.formControl}>
                <Select
                  value={Language}
                  onChange={handleLangSelect}
                  className={classes.colorh4}
                >
                  <MenuItem value="All" className={classes.colorh4}>
                    All Questions
                  </MenuItem>
                  <MenuItem value="React" className={classes.colorh4}>
                    React
                  </MenuItem>
                  <MenuItem value="Javascript" className={classes.colorh4}>
                    Javascript
                  </MenuItem>
                  <MenuItem value="HTML" className={classes.colorh4}>
                    HTML
                  </MenuItem>
                  <MenuItem value="CSS" className={classes.colorh4}>
                    CSS
                  </MenuItem>
                </Select>
                <FormHelperText className={classes.colorh4}>
                  Select Language
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {langData.map((data, i) => {
              return (
                <Link
                  onClick={() => {
                    handleQnAOpen(data);
                  }}
                >
                  <li value={data.qText} className={classes.color}>
                    {data.qText}
                  </li>
                </Link>
              );
            })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
     
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MaxWidthDialog);
