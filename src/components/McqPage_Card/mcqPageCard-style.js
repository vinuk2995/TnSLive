import { makeStyles } from "@material-ui/core";

const McqPagecardStyle = makeStyles((theme) => ({
  root: {
    margin : "0 1% 2% 2% "
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
  cardActions: {
    cursor: "pointer",
    display : "flex",
    justifyContent : "center",
    fontWeight : 700
  },
}));

export default McqPagecardStyle;
