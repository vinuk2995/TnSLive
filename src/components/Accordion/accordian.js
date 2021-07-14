import React, { useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { scroller } from "react-scroll";
import { Card, CardHeader, Grid, Paper, Tooltip } from "@material-ui/core";
import accordianStyle from "./accordian-style";
import { connect } from "react-redux";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  solarizedlight,
  darcula,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import CustomizedSnackbars from "../Alert/alert";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    minHeight: 50,
    "&$expanded": {
      minHeight: 50,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const mapStateToProps = (state) => {
  return {
    question: state.question,
    darkMode: state.darkMode,
    langName: state.langName,
  };
};

const CustomizedAccordions = ({ question, darkMode, langName }) => {
  const [expanded, setExpanded] = React.useState("panelReact1");
  const [langData, setlangData] = React.useState([{}]);
  const [openAlert, setOpenAlert] = React.useState(false);
  const classes = accordianStyle();

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: theme.palette.common.white,
      color: "#3f51b5",
      boxShadow: theme.shadows[1],
      fontSize: 13,
      fontWeight: 600,
    },
  }))(Tooltip);
  const DarkTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: 13,
    },
  }))(Tooltip);
  const handleChange = (panel) => (event, newExpanded) => {
    // scroller.scrollTo(val-3 >= 0 ? val-3 : val-2, {
    //   duration: 0,
    //   delay: 0,
    //   smooth: "easeInOutQuart",
    // });
    setExpanded(newExpanded ? panel : false);
  };

  const handleAlertOpen = (data) => {
    navigator.clipboard.writeText(data);
    setTimeout(function () {
      setOpenAlert(false);
    }, 1500);
    setOpenAlert(true);
  };

  useEffect(() => {
    let filteredData = question.filter((l) => l.lang === langName);
    setlangData(filteredData);
  }, [langName, question]);

  return (
    <div>
       <CustomizedSnackbars isopenAlert={openAlert} message="Copied Successfully !!!" severity="success" />
      <Grid
        container
        direction="row"
        alignItems="center"
        className={classes.rootGrid}
      >
        <Paper className={classes.rootpaper}>
          {langData &&
            langData.map((data, i) => {
              const val = i + 1;
              const id = "panel" + data.lang + val;
              const area = "panel" + data.lang + val;

              return (
                <Accordion
                  className={val}
                  square
                  // expanded={expanded === "panel" + data.lang + val }
                  // onChange={handleChange("panel" + data.lang + val)}
                  id={id}
                  key={id}
                  defaultExpanded={
                    id === "panel" + data.lang + "1" ? true : false
                  }
                  aria-controls={area}
                >
                  <AccordionSummary>
                    <Typography className={classes.color}>
                      {i + 1}. {data.qText}
                    </Typography>
                  </AccordionSummary>
                  {/* {data.image ? (
                    <img
                      alt="logo"
                      className={classes.image}
                      src={data.image}
                    />
                  ) : null} */}
                  <AccordionDetails className={classes.padding0}>
                    <Typography
                      className={classes.answer}
                      dangerouslySetInnerHTML={{ __html: data.answer }}
                    ></Typography>
                  </AccordionDetails>
                  {data.code ? (
                    <Card className={classes.textalign} elevation={2}>
                      <CardHeader
                        action={
                          darkMode ? (
                            <DarkTooltip title="Copy Snippet" aria-label="Light">
                            <FileCopyOutlinedIcon
                            className={classes.textalignicon}
                            onClick={() => {
                              handleAlertOpen(data.code);
                            }}
                          />
                            </DarkTooltip>
                          ) : (
                            <LightTooltip title="Copy Snippet" aria-label="Dark">
                              <FileCopyOutlinedIcon
                            className={classes.textalignicon}
                            onClick={() => {
                              handleAlertOpen(data.code);
                            }}
                          />
                            </LightTooltip>
                          )
                         
                        }
                      />
                      <SyntaxHighlighter
                        language="javascript"
                        style={darkMode ? darcula : solarizedlight}
                        className={classes.syntaxHigh}
                      >
                        {data.code}
                      </SyntaxHighlighter>
                    </Card>
                  ) : null}
                </Accordion>
              );
            })}
        </Paper>
      </Grid>
    </div>
  );
};

const Accordian = connect(mapStateToProps)(CustomizedAccordions);
export default Accordian;
