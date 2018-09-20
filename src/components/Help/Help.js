import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const style = {
  title: {
    margin: "6rem 0 2rem",
    padding: "0 2rem"
  },
  textContent: {
    padding: "1rem 2rem",
    margin: "1rem 0"
  }
};

const help = props => {
  const { classes } = props;
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8}>
        <Grid container>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="title">Help</Typography>
          </Grid>
          <Grid item xs={12} className={classes.textContent}>
            <Typography paragraph variant="subheading">
              pick1
            </Typography>
            <Typography paragraph variant="body1">
              1. Enter your choices using the input textbox towards the top of
              the page. <br />
              <br />
              2. Once you have atleast two choices to choose from, press "Pick1"
              button to pick one. <br />
              <br />
              Pro Tip - Keep hitting the "Pick1 Again" button until your
              preferred choice from the list shows up{" "}
              <span role="img" aria-label="wink">
                😉
              </span>
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.textContent}>
            <Typography paragraph variant="subheading">
              Coin Toss
            </Typography>
            <Typography paragraph variant="body1">
              Use the "Toss" button towards the bottom of the page to begin the
              toss.
              <br />
              <br />
              Wait till the coin stops to toss the coin again.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(help);
