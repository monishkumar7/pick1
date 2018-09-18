import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core/";
import { Switch, Route } from "react-router-dom";

import Layout from "./container/Layout/Layout";
import Picker from "./container/Picker/Picker";
import CoinToss from "./container/CoinToss/CoinToss";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Layout />
        <Switch>
          {/* <Route exact path="/help" Component={} />
          <Route exact path="/about" Component={} />
          <Route exact path="/couples" Component={} /> */}
          <Route exact path="/toss" component={CoinToss} />
          <Route path="/" component={Picker} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
