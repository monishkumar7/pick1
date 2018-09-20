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
    tossing: false
  };

  coinFlip = () => {
    var flipResult = Math.random();
    this.setState({ tossing: true });
    document.getElementById("coin").className = "";
    setTimeout(() => {
      if (flipResult <= 0.25 || flipResult >= 0.75) {
        document.getElementById("coin").className += "heads";
      } else {
        document.getElementById("coin").className += "tails";
      }
    }, 100);
    setTimeout(() => {
      this.setState({ tossing: false });
    }, 3000);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.coinTossDiv}>
        <div id="coin">
          <div className="side-a" />
          <div className="side-b" />
        </div>
        <Grid container className={classes.fixedContainer} justify="center">
          <Grid item>
            <Button
              variant="extendedFab"
              color="primary"
              onClick={this.coinFlip}
              className={classes.tossButton}
              disabled={this.state.tossing}
            >
              {this.state.tossing ? "Toss in Progress" : "Toss"}
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(style)(CoinToss);
