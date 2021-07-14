import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import "./App.css";
// import theme from "./Globalcss";
import Routes from "./router/Route";

const mapStateToProps = (state) => {
  return { darkMode: state.darkMode };
};
const App = ({ darkMode }) => {
  const isMounted = useRef(false);
  const [theme, setTheme] = useState({
    palette: {
      type: "light",
      primary: {
        main: "#3f51b5",
      },
      secondary: {
        main: "#e33371",
      },
      background: { default: "#f1f3f4 " },
    },
  });

  useEffect(() => {
    if (isMounted.current) {
      let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
      setTheme({
        palette: {
          type: newPaletteType,
          primary: {
            main: newPaletteType === "dark" ? "#bb8cfc" : "#3f51b5",
          },
          secondary: {
            main: newPaletteType === "dark" ? "#03DAC5" : "#e33371",
          },
          background: {
            default: newPaletteType === "dark" ? "#303030" : "#f1f3f4",
          },
        },
      });
    } else {
      isMounted.current = true;
    }
  }, [darkMode]);

  const muiTheme = createMuiTheme(theme);
  return (
    <div className="App">
      <MuiThemeProvider theme={muiTheme}>
        <Routes />
      </MuiThemeProvider>
    </div>
  );
};

export default connect(mapStateToProps)(App);
