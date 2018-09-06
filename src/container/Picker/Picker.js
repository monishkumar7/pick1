import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  content: {
    marginTop: "5rem"
  }
};

class Picker extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <Typography
        className={classes.content}
        variant="display3"
        color="inherit"
      >
        Picker
      </Typography>
    );
  }
}

export default withStyles(styles)(Picker);
