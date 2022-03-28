import { makeStyles } from "@material-ui/core";

const dashboardStyle = makeStyles((theme) => ({

    rootGrid: {
        background: theme.palette.type === "dark" ? "#303030" : "#fff",
        color: theme.palette.type === "dark" ? "#bb8cfc" : "#3f51b5",
      },
      rootpaper: {
        marginLeft: "3%",
        width: "95%",
        marginTop: 1,
      },
      image: {
        width: "2%",
        minWidth: "2%",
        height: "20%",
      },
      marginTop: {
        marginTop: "3%",
      },
      cuesor: {
        cursor: "pointer",
      },
      marginTop5: {
        // marginTop: "2em",
        marginLeft: "3%",
      },
      marginTop6 : {},
      Empty: {},
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
      marginTop3: {
        marginTop: "1%",
        marginLeft : "3%"
      },
      mgnBottom: {
        marginBottom: "3%",
      },
      textalign: {
        textAlign: "start",
      },
      answer: {
        textAlign: "start",
        color: theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#000",
        fontWeight: theme.palette.type === "dark" ? 400 : 500,
        fontSize: theme.palette.type === "dark" ? "15px" : "16px",
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
      dialogHeight: {
        minHeight: "40vh",
      },
      syntaxHigh: {
        fontSize: "15px",
        background:
          theme.palette.type === "dark" ? "#424242 !important" : "#fff !important",
        padding: "0px !important",
        marginTop: "-1.3em !important",
      },

}));

export default dashboardStyle;
