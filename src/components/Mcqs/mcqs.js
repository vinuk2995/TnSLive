import { connect, useDispatch } from "react-redux";
import React, { useEffect, useReducer } from "react";
import McqStyle from "./mcqs-style";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  useScrollTrigger,
  Zoom,
  Toolbar,
} from "@material-ui/core";
import { Paper } from "@material-ui/core";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { addMcqList } from "../../actions";
import { scroller } from "react-scroll";
import PropTypes from "prop-types";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import {
  solarizedlight,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import McqPageCard from "../McqPage_Card/mcqPageCard";
import CustomizedSnackbars from "../Alert/alert";

function ScrollTop(props) {
  const { children, window } = props;
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
      <div onClick={handleClick} role="presentation">
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
    mcqs: state.mcqs,
    darkMode: state.darkMode,
    langName: state.langName,
    mcqList: state.mcqList,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMcqList: (mcqList) => dispatch(addMcqList(mcqList)),
  };
};
const Mcqs = ({ darkMode, mcqs, langName, mcqList, props }) => {
  const classes = McqStyle();
  const [isSubmit, setisSubmit] = React.useState(false);
  const [openErrorAlert, setopenErrorAlert] = React.useState(false);
  const [openQuizSwitchAlert, setopenQuizSwitchAlert] = React.useState(false);
  const [correctAns, setCorrectAns] = React.useState(0);
  const [filterdMcq, setFilteredMcq] = React.useState([]);
  const [dontShowIcon, setDontShowIcon] = React.useState(false);
  const dispatch = useDispatch();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  var cnt = 0;
  var zeroCnt = 0;

  useEffect(() => {
    let filteredMcq = mcqs.filter((l) => l.langName === langName);
    setFilteredMcq(filteredMcq);
    forceUpdate();
    setisSubmit(false);
    setopenQuizSwitchAlert(true);
    setTimeout(function () {
      setopenQuizSwitchAlert(false);
    }, 2500);

    mcqs.map((filter, i) => {
      if (document.getElementById(filter.question + "correct"))
        document.getElementById(filter.question + "correct").className =
          classes.initialAlert;

      if (document.getElementById(filter.question + "incorrect"))
        document.getElementById(filter.question + "incorrect").className =
          classes.initialAlert;
    });
  }, [langName, mcqs]);

  const setErrorAlert = () => {
    console.log("inside error alert");
    setopenErrorAlert(true);
    setTimeout(function () {
      setopenErrorAlert(false);
    }, 2500);
  };

  const handleSubmit = () => {
    scroller.scrollTo(classes.showScore, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    var data1 = filterdMcq.map((que) => {
      var filterd = mcqList.filter((data) => data.selectedQue === que.question);
      if (filterd.length === 0) {
        zeroCnt++;
      } else return filterd;
    });

    if (zeroCnt === 0) {
      var data2 = data1.map((data) => {
        return data.slice(-1).pop();
      });
      data2.map((data, i) => {
        if (data && data.selectedOpt === filterdMcq[i].correct) {
          cnt++;
          document.getElementById(
            filterdMcq[i].question + filterdMcq[i].correct + langName + "li"
          ).className = classes.correct;
          document.getElementById(
            filterdMcq[i].question + "correct"
          ).className = classes.correctAlert;
        } else if (data && data.selectedOpt !== filterdMcq[i].correct) {
          document.getElementById(
            filterdMcq[i].question + data.selectedOpt + langName + "li"
          ).className = classes.incorrect;
          document.getElementById(
            filterdMcq[i].question + "incorrect"
          ).className = classes.incorrectAlert;
        }
      });
      setCorrectAns(cnt);
      setDontShowIcon(true);
      setisSubmit(true);
    } else {
      setDontShowIcon(false);
      setErrorAlert();
    }
  };

  const handleOptionVal = (val, e) => {
    var list = {
      selectedQue: val,
      selectedOpt: e,
    };
    dispatch(addMcqList(list));

    var filterd = filterdMcq.filter((data) => data.question === val);

    filterd[0].answers.forEach((data) => {
      document.getElementById(val + data.Option).checked = false;
    });
    document.getElementById(val + e).checked = true;
  };

  return (
    <React.Fragment>
      <Grid
        container
        className={classes.rootGrid}
        direction="row"
        alignItems="center"
      >
        <Toolbar id="back-to-top-anchor" />
        <McqPageCard />
        <CustomizedSnackbars
          isopenAlert={openErrorAlert}
          message="Please attempt all the questions !!!"
          severity="error"
        />
        <CustomizedSnackbars
          isopenAlert={openQuizSwitchAlert}
          message={`Switched to ${langName} Quiz successfully !!!`}
          severity="success"
        />

        <Grid item container className={classes.marginTop3}>
          <h1>{langName} Quiz</h1>
        </Grid>
        <Grid item container xs={12} sm={9}>
          <Paper className={classes.rootpaper}>
            {filterdMcq.map((mcq, i) => {
              const num = i + 1;
              return (
                <Card className={classes.marginBottom1} id={mcq.question}>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h2"
                      className={classes.textalign}
                    >
                      {num + ". " + mcq.question}
                    </Typography>
                    {mcq && mcq.code ? (
                      <Card className={classes.textalign}>
                        <SyntaxHighlighter
                          language="javascript"
                          style={darkMode ? darcula : solarizedlight}
                          className={classes.syntaxHigh}
                        >
                          {mcq && mcq.code}
                        </SyntaxHighlighter>
                      </Card>
                    ) : null}
                    <Typography
                      className={classes.finalCheck}
                      gutterBottom
                      variant="h6"
                      component="h6"
                    >
                      <span
                        className={classes.initialAlert}
                        id={mcq.question + "correct"}
                      >
                        {" "}
                        Correct
                      </span>
                      <span
                        className={classes.initialAlert}
                        id={mcq.question + "incorrect"}
                      >
                        {" "}
                        Incorrect
                      </span>
                    </Typography>

                    {mcq.answers.map((ans, i) => {
                      const id = mcq.question + ans.Option + langName + "li";
                      return (
                        <Typography>
                          <li
                            onClick={() =>
                              handleOptionVal(mcq.question, ans.Option)
                            }
                            className={classes.li}
                            key={ans.Option}
                            id={id}
                          >
                            <label>
                              {isSubmit && dontShowIcon ? (
                                ans.isCorrect ? (
                                  <CheckCircleOutlineIcon
                                    className={classes.correctIconStyle}
                                  />
                                ) : (
                                  <ErrorOutlineIcon
                                    className={classes.incorrectIconStyle}
                                  />
                                )
                              ) : (
                                ""
                              )}
                              <input
                                className={classes.input}
                                type="radio"
                                disabled={isSubmit ? true : false}
                                name={mcq.question + ans.Option}
                                id={mcq.question + ans.Option}
                              />

                              {"  " + ans.Option}
                            </label>
                          </li>
                        </Typography>
                      );
                    })}
                  </CardContent>
                </Card>
              );
            })}
            {!isSubmit && (
              <Button
                color="primary"
                hidden={!isSubmit}
                variant="outlined"
                onClick={() => handleSubmit()}
                className={classes.marginTop2}
              >
                Submit Quiz
              </Button>
            )}
            <br />
            <br />
            {isSubmit ? (
              <h2 className={classes.showScore}>
                {correctAns / filterdMcq.length > 0.5
                  ? "Congratulations!! "
                  : "Oops!"}{" "}
                Your score is {correctAns}/{filterdMcq.length}
              </h2>
            ) : (
              <h2 className={classes.showScore}> </h2>
            )}

            <ScrollTop {...props}>
              {isSubmit && (
                <Button
                  color="primary"
                  variant="outlined"
                  endIcon={<KeyboardArrowUpIcon />}
                >
                  Check Answers
                </Button>
              )}
            </ScrollTop>
            <br />
            <br />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Mcqs);
