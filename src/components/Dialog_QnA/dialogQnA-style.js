import { makeStyles } from "@material-ui/core";

const DialogQnAStyle = makeStyles((theme) => ({
    dialogHeight: {
        minHeight: "40vh",
        wordBreak: "break-word"
    },
    color: {
        fontWeight: 545,
        color: theme.palette.type === "dark" ? "#bb8cfc" : "#3f51b5",
    },
    answer: {
        textAlign: "start",
        color: theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#000",
        fontWeight: theme.palette.type === "dark" ? 400 : 500,
        fontSize: theme.palette.type === "dark" ? "15px" : "16px",
    },
    textalign: {
        textAlign: "start",
        wordBreak: "break-word"
    },
    textalignicon: {
        color: theme.palette.type === "dark" ? "#03DAC5" : "#f2334c",
        cursor: "pointer",
    },
    syntaxHigh: {
        fontSize: "15px",
        background:
            theme.palette.type === "dark" ? "#424242 !important" : "#fff !important",
        padding: "0px !important",
        marginTop: "-1.3em !important",
    },
}));

export default DialogQnAStyle;
