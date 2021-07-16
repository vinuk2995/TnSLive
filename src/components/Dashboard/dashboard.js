import {
  Button,
  Fab,
  Grid,
  makeStyles,
  Toolbar,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import React, { useEffect } from "react";
import dashboardStyle from "./dashboard-style";
import MaxWidthDialog from "../Dialog/dialog";
import DialogQnA from "../Dialog_QnA/dialogQnA";
import MediaCard from "../Card/card";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { connect, useDispatch } from "react-redux";
import Accordion from "../Accordion/accordian";
import { setDialogOpen } from "../../actions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    langName: state.langName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDialogOpen: (isDialogOpen) => dispatch(setDialogOpen(isDialogOpen)),
  };
};
const Dashboard = ({ props, langName }) => {
  const classes = dashboardStyle();
  const dispatch = useDispatch();

  const isCardClicked = (val) => {
    scroller.scrollTo(classes.marginTop6, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  return (
    <div>
      <Toolbar id="back-to-top-anchor" />
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.rootGrid}
      >
        <Grid
          container
          item
          xs={12}
          sm={5}
          className={classes.marginTop3}
          justify="flex-start"
        >
          <h2 className={classes.colorh4}>
            {/* Success is not final, failure is not fatal: it is the courage to
              continue that counts. - Winston Churchill */}
            Select Language for Interview Questions
          </h2>
        </Grid>

        <Grid container item xs={12} >
          <MediaCard isCardClicked={isCardClicked} />
        </Grid>

        <Grid
          container
          item
          xs={12}
          sm={12}
          className={classes.marginTop6}
          justify="flex-end"
        >
          <h4 className={classes.colorh4}>
            Please
            <Button
              color="secondary"
              onClick={() => dispatch(setDialogOpen(true))}
            >
              click here
            </Button>
            to get list of all Questions.
          </h4>

          <MaxWidthDialog />

          <DialogQnA />
        </Grid>

        <Grid container item xs={12} className={classes.Empty}></Grid>

        <Grid
          container
          item
          xs={12}
          className={classes.marginTop5}
          justify="start"
        >
          <h2 className={classes.colorh4}>{langName} Interview Questions</h2>
        </Grid>

        <Grid xs={12} sm={9}>
          <Accordion />
        </Grid>

        <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
