import { makeStyles } from "@material-ui/core";

const cardStyle = makeStyles((theme) => ({
    root: {
      margin: "1%",
    },
    media: {
      height: 70,
    },
    image: {
      width: "100%",
      minHeight: 100,
      display: "inline-flex",
    },
    color: {
      color: theme.palette.type === "dark" ? "#bb8cfc" : "#3f51b5",
    },
    Link : {
      textDecoration : "none"
    }
  }));
  
  export default cardStyle ;
