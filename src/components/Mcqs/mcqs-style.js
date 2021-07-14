import { makeStyles } from "@material-ui/core/styles";

const McqStyle = makeStyles((theme) => ({
  rootGrid: {
    background: theme.palette.type === "dark" ? "#303030" : "#fff",
    color: theme.palette.type === "dark" ? "#bb8cfc" : "#3f51b5",
    marginTop: "4%",
    // marginBottom : "2%"
  },
  rootpaper: {
    marginLeft: "3%",
    width: "95%",
    marginTop: 1,
    wordBreak: "break-word",
    backgroundColor: 'transparent',
  },
  marginTop: {
    marginTop: ".5%",
  },
  marginBottom1: {
    marginBottom: "1%",
  },
  marginTop3: {
    marginLeft: "3%",
    // marginTop: "1rem",
    color :  theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#3f51b5",
  },
  cuesor: {
    cursor: "pointer",
  },
  marginTop5: {
    marginTop: "5%",
    marginLeft: "3%",
  },
  marginTop2: {
    marginTop: "3rem",
  },
  colorh4: {
    color:
      theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#3f51b5",
    fontWeight: 545,
  },
  color: {
    fontWeight: 545,
    color: theme.palette.type === "dark" ? "#bb8cfc" : "#3f51b5",
  },
  scrollCss: {
    marginTop: "1px",
  },
  textalign: {
    textAlign: "start",
  },
  textalignicon: {
    color: theme.palette.type === "dark" ? "#03DAC5" : "#f2334c",
    cursor: "pointer",
  },
  ansStyle: {
    borderLeft: "2px solid #f2334c",
    color: theme.palette.type === "dark" ? "#fff" : "#000",
    display: "block",
    wordWrap: "break-word",
    textAlign: "start",
  },
  syntaxHigh: {
    fontSize: "15px",
    background:
      theme.palette.type === "dark" ? "#424242 !important" : "#fff !important",
    padding: "0px !important",
    marginTop: "-1.3em !important",
  },
  li: {
    textAlign: "start",
    listStyle: "none",
    cursor: "pointer",
    padding: "10px",
    // backgroundColor : " ",
    marginTop: "10px",
    background: theme.palette.type === "dark" ? "rgb(3, 14, 24)" : "rgb(232, 244, 253)",   
    // border:  "1px solid #2196f3",
    borderRadius : "11px" ,
    color: theme.palette.type === "dark" ? " rgb(166, 213, 250)" : "rgb(13, 60, 97)",
  },
  correct: {
    textAlign: "start",
    listStyle: "none",
    cursor: "pointer",
    padding: "10px",
    marginTop: "10px",
    borderRadius : "11px" ,
    border: "1px solid #4caf50",
    color: theme.palette.type === "dark" ? "rgb(183, 223, 185)" : "rgb(30, 70, 32)",
  },
  incorrect: {
    textAlign: "start",
    listStyle: "none",
    cursor: "pointer",
    padding: "10px",
    marginTop: "10px",
    borderRadius : "11px" ,
    border:  " 1px solid #f44336",
    color: theme.palette.type === "dark" ? "rgb(250, 179, 174)" : "rgb(97, 26, 21)",
  },
  clicked: {
    textAlign: "start",
    listStyle: "none",
    cursor: "pointer",
    padding: "10px",
    marginTop: "10px",
    backgroundColor: "yellow",
    color: theme.palette.type === "dark" ? "#fff" : "#000",
  },
  input: {
    "&:checked": {
      backgroundColor: "#ffa500",
    },
    "&:disabled": {
      backgroundColor: "#ffa500",
    },
    width: "14px",
    height: "16px",
    color: "black",
  },
  correctIconStyle : {
    color : "#4caf50",
  },
  incorrectIconStyle : {
    color : "#f44336"
  },
  finalCheck : {
    textAlign: "start",
    display : "flex"
  },
  correctAlert : {
    display : "true",
    color : "#4caf50"
  },
  incorrectAlert : {
    display : "true",
    color : "#f44336"
  },
  initialAlert : {
    display : "none",
  },
  showScore : {
    marginBottom : "3%",
    marginTop : "2%"
  },
}));

export default McqStyle;
