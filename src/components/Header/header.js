import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { adddarkMode, setlangName } from "../../actions/index";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import {
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Tooltip,
} from "@material-ui/core";
import headerStyle from "./header-style";
import MenuIcon from "@material-ui/icons/Menu";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
import AssessmentIcon from "@material-ui/icons/Assessment";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import ClassIcon from "@material-ui/icons/Class";

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

const mapDispatchToProps = (dispatch) => {
  return {
    adddarkMode: (darkMode) => dispatch(adddarkMode(darkMode)),
    setlangName: (langName) => dispatch(setlangName(langName)),
  };
};

const mapStateToProps = (state) => {
  return { darkMode: state.darkMode, langName: state.langName };
};
const Header = ({ darkMode }) => {
  const classes = headerStyle();
  const dispatch = useDispatch();
  const [drawer, toggleDrawer] = React.useState(false);

  const setdarkMode = (value) => {
    dispatch(adddarkMode(value));
  };

  const setlangNameInner = (open, langName) => {
    toggleDrawer(open);

    if (langName && langName !== "Dashboard") {
      var lang = langName.slice(0, -5);
      dispatch(setlangName(lang));
    }
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.color}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setlangNameInner(true)}
          >
            <MenuIcon className={classes.iconColor} />
          </IconButton>
          <img
            src={darkMode ? "images/out_dark.png" : "images/out.png"}
            alt="TnS"
            className={classes.logo}
          />
          <Typography variant="h6" className={classes.title}>
            {/* <b>Learning Site</b> */}
          </Typography>
          <span className={classes.cursor}>
            {darkMode ? (
              <DarkTooltip title="Turn on lights" aria-label="Light">
                <Brightness7Icon onClick={() => setdarkMode(false)} />
              </DarkTooltip>
            ) : (
              <LightTooltip title="Turn off lights" aria-label="Dark">
                <Brightness4Icon onClick={() => setdarkMode(true)} />
              </LightTooltip>
            )}
            <i class="fas fa-moon"></i>
          </span>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
        <SwipeableDrawer
          anchor={"left"}
          open={drawer}
          onClose={() => setlangNameInner(false)}
          className={classes.sidebar}
        >
          <img
            src={darkMode ? "/out_dark.png" : "/out.png"}
            alt="TnS"
            className={classes.logoSidebar}
          />
          <List>
            {[
              "Dashboard",
              "React Quiz",
              "Javascript Quiz",
              "HTML Quiz",
              "CSS Quiz",
            ].map((text, index) => (
              <Link
                to={text === "Dashboard" ? "/dashboard" : "/quiz"}
                className={classes.Link}
                onClick={() => setlangNameInner(false, text)}
              >
                <ListItem button key={text}>
                  <ListItemIcon className={classes.iconColor}>
                    {text === "Dashboard" ? (
                      <DashboardIcon />
                    ) : text === "React Quiz" ? (
                      <AssignmentIcon />
                    ) : text === "Javascript Quiz" ? (
                      <ClassIcon />
                    ) : text === "HTML Quiz" ? (
                      <ChromeReaderModeIcon />
                    ) : (
                      <AssessmentIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </SwipeableDrawer>
      </AppBar>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
