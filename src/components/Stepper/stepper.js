import React, { useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import stepperStyle from "./stepper-style";
import { connect, useDispatch } from "react-redux";
import { setQueCount } from "../../actions";

const mapStateToProps = (state) => {
  return {
    langName: state.langName,
    queCount: state.queCount,
    mcqs: state.mcqs,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addMcqList: (queCount) => dispatch(setQueCount(queCount)),
  };
};
const VerticalLinearStepper = ({ langName, queCount, mcqs }) => {
  const classes = stepperStyle();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState();
  const dispatch = useDispatch();
  useEffect(() => {
    var steps = [];
    var totalQue = mcqs.filter((l) => l.langName === langName);
    for (var i = 0; i < totalQue.length / 7; i++) {
      steps.push([{ label: "MCQ List " + (i + 1) }]);
    }
    setSteps(steps);
    setActiveStep(0);
  }, [langName, mcqs]);

  const handleNext = (index) => {
    dispatch(setQueCount(index * 7 + 7));
    setActiveStep(index);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" className={classes.back}>
        {steps &&
          steps.map((l, index) => (
            <Step key={l.label}>
              <StepLabel
                onClick={() => handleNext(index)}
                className={classes.cursor}
              >
                {langName + " " + l[0].label}
              </StepLabel>
            </Step>
          ))}
      </Stepper>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VerticalLinearStepper);
