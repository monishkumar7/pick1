import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import "./CoinToss.css";
import { Button } from "@material-ui/core";

const style = {
  coinTossDiv: {
    marginTop: "7rem",
    textAlign: "center"
  },
  tossButton: {
    width: "160px"
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
          <div className={this.state.sideAClasses}> HEADS </div>
          <div className={this.state.sideBClasses}> TAILS </div>
        </div>
        <Button
          variant="extendedFab"
          color="primary"
          onClick={this.coinFlip}
          className={classes.tossButton}
        >
          Toss
        </Button>
      </div>
    );
  }
}

export default withStyles(style)(CoinToss);
