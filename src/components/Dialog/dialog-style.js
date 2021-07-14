import { makeStyles } from "@material-ui/core";

const dialogStyle = makeStyles((theme) => ({
    formControl: {
        minWidth: 150,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    color: {
        color:
            theme.palette.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#3f51b5",
        cursor: "pointer",
        "&:hover": {
            color: theme.palette.type === "dark" ? "#bb8cfc" : "#354497",
        },
    },
    colorh4: {
        color: theme.palette.type === "dark" ? "#bb8cfc" : "#3f51b5",
    },
    dialogHeight: {
        minHeight: "65vh",
    },
}));
export default dialogStyle;