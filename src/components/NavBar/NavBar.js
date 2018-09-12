import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const style = theme => ({
  appbar: {
    boxShadow: "0 1px 5px #ddd"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.dark
  }
});

const navbar = props => {
  const { classes } = props;
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar} position="static">
        <Typography variant="headline" color="inherit">
          pick1
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(navbar);
