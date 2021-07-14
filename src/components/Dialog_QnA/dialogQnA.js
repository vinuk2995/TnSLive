import React from "react";
import {
  Button,
  Card,
  CardHeader,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import DialogQnAStyle from "./dialogQnA-style";
import {
  solarizedlight,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { connect, useDispatch } from "react-redux";
import { setDialogOpen, setDialogQnAOpen } from "../../actions";
import CustomizedSnackbars from "../Alert/alert";

const mapStateToProps = (state) => {
  return {
    question: state.question,
    darkMode: state.darkMode,
    dialogQnA: state.dialogQnA,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDialogQnAOpen: (dialogQnA) => dispatch(setDialogQnAOpen(dialogQnA)),
    setDialogOpen: (isDialogOpen) => dispatch(setDialogOpen(isDialogOpen)),
  };
};

const DialogQnA = ({ darkMode, dialogQnA }) => {
  const [openAlert, setOpenAlert] = React.useState(false);
  const classes = DialogQnAStyle();
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      setDialogQnAOpen({
        data: [{}],
        isDialogQnAOpen: false,
      })
    );
  };

  const handleQueList = () => {
    dispatch(
      setDialogQnAOpen({
        data: [{}],
        isDialogQnAOpen: false,
      })
    );
    dispatch(setDialogOpen(true));
  };

  const handleAlertOpen = (data) => {
    navigator.clipboard.writeText(data);
    setTimeout(function () {
      setOpenAlert(false);
    }, 1500);
    setOpenAlert(true);
  };

  return (
    <React.Fragment>
      <CustomizedSnackbars isopenAlert={openAlert} message="Copied Successfully !!!" severity="success" />
      <Dialog
        classes={{ paper: classes.dialogHeight }}
        fullWidth={true}
        maxWidth="lg"
        open={dialogQnA.isDialogQnAOpen}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title" className={classes.color}>
          {dialogQnA.data && dialogQnA.data.qText}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            className={classes.textalign}
            dangerouslySetInnerHTML={{
              __html: dialogQnA.data && dialogQnA.data.answer,
            }}
          ></DialogContentText>
          {dialogQnA.data && dialogQnA.data.code ? (
            <Card className={classes.textalign}>
              <CardHeader
                action={
                  <FileCopyOutlinedIcon
                    className={classes.textalignicon}
                    onClick={() => {
                      handleAlertOpen(dialogQnA.data && dialogQnA.data.code);
                    }}
                  />
                }
              />

              <SyntaxHighlighter
                language="javascript"
                style={darkMode ? darcula : solarizedlight}
                className={classes.syntaxHigh}
              >
                {dialogQnA.data && dialogQnA.data.code}
              </SyntaxHighlighter>
            </Card>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleQueList}
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
            color="primary"
          >
            Questions List
          </Button>
          <Button onClick={handleClose} variant="outlined" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogQnA);
