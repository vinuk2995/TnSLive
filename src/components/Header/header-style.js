import { makeStyles } from "@material-ui/core";

const headerStyle = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
      minWidth: "9%",
      marginRight: "10px",
      maxHeight: "48px",
    },
    logoSidebar : {
      minWidth: "83%",
      margin : "8%",
      maxHeight: "6.5%",
    },
    color: {
      backgroundColor: theme.palette.type === "dark" ? "#303030" : "#fff",
      color: theme.palette.type === "dark" ? "#fff" : "#3f51b5",
      borderBottom:
        theme.palette.type === "dark" ? "1.5px solid #bb8cfc" : "2px solid #3f51b5",
    },
    cursor: {
      cursor: "pointer",
    },
    Link : {
      textDecoration : "none",
      color: theme.palette.type === "dark" ? "#fff" : "#3f51b5",
    },
    iconColor : {
      color : theme.palette.type === "dark" ? "#bb8cfc !important" : "#3f51b5 !important",
    }
  }));
  
  export default headerStyle;
