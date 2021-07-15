import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";
import { connect, useDispatch } from "react-redux";
import footerStyle from "./footer-style";
import { setlangName } from "../../actions";
import ImageOut from './out.png';
import ImageOutDark from './out_dark.png';

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLangName: (langName) => dispatch(setlangName(langName)),
  };
};

const Data = [
  {
    langName: "React",
  },
  {
    langName: "Javascript",
  },
  {
    langName: "HTML",
  },
  {
    langName: "CSS",
  },
];

const Footer = ({ langName, darkMode }) => {
  const classes = footerStyle();
  const dispatch = useDispatch();

  const postLangName = (value) => {
    dispatch(setlangName(value));
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Grid
          container
          className={classes.root}
          direction="row"
          justify="space-between"
        >
          <Grid item xs={12}>
            <Grid container justify="center" spacing={5}>
              <Grid item xs={12} sm={4}>
                <Toolbar>
                  <img
                    src={darkMode ? ImageOutDark : ImageOut}
                    alt="TnS"
                    className={classes.logo}
                  />
                  <Typography>
                    <b className={classes.colorButton}>Learning Site </b>
                  </Typography>
                </Toolbar>
              </Grid>
              <Grid item xs={5} sm={4}>
                <Typography className={classes.marginTop}>
                  <b>TnS Learnings</b>
                  <ul className={classes.ul}>
                    {Data.map((data) => {
                     return  <li>
                        <Button
                          className={classes.colorButton}
                          onClick={() => {
                            postLangName(data.langName);
                          }}
                        >
                          {data.langName}
                        </Button>
                      </li>
                    })}
                  </ul>
                </Typography>
              </Grid>
              <Grid item xs={7} sm={4}>
                <Typography className={classes.marginTop}>
                  <b>Developer</b>
                  <ul className={classes.ul}>
                    <li>
                      <i>Vinayak Kharate</i>
                    </li>
                    <li className={classes.font}>
                      <i>vinayakkharate0209@gmail.com</i>
                    </li>
                    <li className={classes.font}>
                      <i>Software Engineer - UI</i>
                    </li>
                  </ul>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
};

const FooterConnected = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterConnected;
