import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core/";

import Layout from "./container/Layout/Layout";
import Picker from "./container/Picker/Picker";
import CoinToss from "./container/CoinToss/CoinToss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Layout />
        <CoinToss />
        <Picker />
      </Fragment>
    );
  }
}

export default App;
