
import { makeStyles } from "@material-ui/core";

const footerStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    color: {
      backgroundColor: "#444444",
      color: theme.palette.type === "dark" ? "#bb8cfc" : "#fff",
    },
    cursor: {
      cursor: "pointer",
    },
    logo: {
      minWidth: "9%",
      marginRight: "10px",
      maxHeight: "48px",
    },
    marginTop: {
      marginTop: "3%",
      color: theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#fff",
    },
    mgnLeft: {
      marginLeft: "-2%",
    },
    ul: {
      listStyleType: "none",
      marginLeft: "-5%",
      fontStyle: "Italic",
    },
    font: {
      fontSize: "65%",
    },
    colorButton: {
      color: theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#fff",
    },
  }));

  export default footerStyle;
