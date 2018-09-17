import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core/";

import NavBar from "./components/NavBar/NavBar";
import Picker from "./container/Picker/Picker";
import CoinToss from "./container/CoinToss/CoinToss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <NavBar />
        <CoinToss />
        <Picker />
      </Fragment>
    );
  }
}

export default App;
