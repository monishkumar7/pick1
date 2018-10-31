import React from 'react';
import { Grid, Typography } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

const style = {
  title: {
    marginTop: '6rem',
    padding: '0 2rem'
  },
  textContent: {
    padding: '1rem 2rem',
    margin: '2rem 0'
  }
};

const about = props => {
  const { classes } = props;
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={8}>
        <Grid container>
          <Grid item xs={12} className={classes.title}>
            <Typography variant="title">About</Typography>
          </Grid>
          <Grid item xs={12} className={classes.textContent}>
            <Typography paragraph variant="body1">
              pick1 is a simple app to help you pick one among your choices.
              <br />
              <br />
              We have all been there - having way too many choices of
              restaurants to eat from or too many choices to watch when
              scrolling through your favorite streaming service. These choices
              often confuse us. That is why I decided to make this simple app
              that throws the decision of picking one from your choices into the
              hands of fate (in this case, your browser's random number
              generator function).
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(style)(about);
