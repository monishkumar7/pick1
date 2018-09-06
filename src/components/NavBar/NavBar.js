import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const style = {
  toolbar: {
    display: "flex",
    justifyContent: "center"
  }
};

const navbar = props => {
  const { classes } = props;
  return (
    <AppBar>
      <Toolbar className={classes.toolbar} position="static" color="default">
        <Typography variant="headline" color="inherit">
          pick1
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(style)(navbar);
