import React, { Component } from "react";
import { Grid, Button, withStyles } from "@material-ui/core";

import "./CoinToss.css";

const style = {
  coinTossDiv: {
    marginTop: "7rem",
    textAlign: "center"
  },
  tossButton: {
    width: "160px"
  },
  fixedContainer: {
    position: "fixed",
    bottom: "0",
    left: "0",
    padding: "1rem 0 2rem"
  }
};

class CoinToss extends Component {
  state = {
    coinClasses: "coin",
    sideAClasses: "side-a",
    sideBClasses: "side-b"
  };

  coinFlip = () => {
    var flipResult = Math.random();
    this.setState(prevState => ({
      ...prevState,
      coinClasses: ""
    }));
    if (flipResult <= 0.5) {
      this.setState(prevState => ({
        ...prevState,
        coinClasses: "coin heads"
      }));
      // this.forceUpdate();
    } else {
      this.setState(prevState => ({
        ...prevState,
        coinClasses: "coin tails"
      }));
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.coinTossDiv}>
        <div className={this.state.coinClasses}>
          <div className={this.state.sideAClasses} />
          <div className={this.state.sideBClasses} />
        </div>
        <Grid container className={classes.fixedContainer} justify="center">
          <Grid item>
            <Button
              variant="extendedFab"
              color="primary"
              onClick={this.coinFlip}
              className={classes.tossButton}
            >
              Toss
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(CoinToss);
