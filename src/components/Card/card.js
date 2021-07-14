import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper } from "@material-ui/core";
import cardStyle from "./card-style";
import { setlangName } from "../../actions/index";
import { connect, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Data = [
  {
    langName: "React",
    info: "React is a Javascript library created by FaceBook. It is used for building the reusable components.",
  },
  {
    langName: "Javascript",
    info: "Javascript is a scripting language which can be used on server and client sides.",
  },
  {
    langName: "HTML",
    info: "HTML is the standard markup language for Web pages. It can be easily used with CSS.",
  },
  {
    langName: "CSS",
    info: "CSS is commonly used with markup languages to make presentable webpages.",
  },
];

const mapDispatchToProps = (dispatch) => {
  return {
    setlangName: (langName) => dispatch(setlangName(langName)),
  };
};
const MediaCard = ({ isCardClicked }) => {
  const classes = cardStyle();
  const dispatch = useDispatch();
  const postLangName = (value) => {
    dispatch(setlangName(value));
    isCardClicked(true);
  };

  const postLangNameCardAction = (value) => {
    dispatch(setlangName(value));
  };
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="space-between"
    >
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {Data.map((data) => {
            return (
              <Grid item xs={6} sm={3}>
                <Paper>
                  <Card
                    elevation={4}
                    className={(classes.root, classes.border)}
                  >
                    <CardActionArea
                      onClick={() => {
                        postLangName(data.langName);
                      }}
                    >
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className={classes.color}
                        >
                          {data.langName === "React"
                            ? data.langName.concat(" Js")
                            : data.langName}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {data.info}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link to="/quiz" className={classes.Link}>
                        <Button
                          size="small"
                          color="primary"
                          onClick={() => {
                            postLangNameCardAction(data.langName);
                          }}
                        >
                          Take Quiz
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(mapDispatchToProps)(MediaCard);
