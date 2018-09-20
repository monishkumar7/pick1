import React from "react";
import { Grid, Typography } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";

const style = {
  title: {
    marginTop: "6rem",
    padding: "0 2rem"
  },
  textContent: {
    padding: "1rem 2rem",
    margin: "2rem 0"
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
              Picker
            </Typography>
            <Typography paragraph variant="body1">
              Enter your options. Press Pick1 button and there you go - fate(in
              this case, your web browser) has decided for. If this is not the
              choice you were looking for, keep hitting that button until your
              preferred choice shows up{" "}
              <span role="img" aria-label="wink">
                😉
              </span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(help);
