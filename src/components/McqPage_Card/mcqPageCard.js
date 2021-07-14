import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import { CardContent, Grid, Paper } from "@material-ui/core";
import McqpageCardStyle from "./mcqPageCard-style";
import { setlangName } from "../../actions/index";
import { connect, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";

const Data = [
  {
    langName: "React",
  },
  {
    langName: "Javascript",
  },
  {
    langName: "HTML",
  },
  {
    langName: "CSS",
  },
];

const mapDispatchToProps = (dispatch) => {
  return {
    setlangName: (langName) => dispatch(setlangName(langName)),
  };
};
const McqPageCard = () => {
  const classes = McqpageCardStyle();
  const dispatch = useDispatch();
  const postLangName = (value) => {
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
        <Grid container justify="flex-start" spacing={5}>
          {Data.map((data) => {
            return (
              <Grid item xs={6} sm={2}>
                <Card
                  onClick={() => {
                    postLangName(data.langName);
                  }}
                  elevation={4}
                  className={classes.root}
                >
                  <CardActionArea className={classes.cardActions}>
                   <CardActions>
                      <Button size="small" color="primary">
                        {data.langName} Quiz
                      </Button>
                  </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(mapDispatchToProps)(McqPageCard);
