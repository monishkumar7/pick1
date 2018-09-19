import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core/";
import { Switch, Route } from "react-router-dom";

import Layout from "./container/Layout/Layout";
import Picker from "./container/Picker/Picker";
import CoinToss from "./container/CoinToss/CoinToss";
import About from "./components/About/About";
import Help from "./components/Help/Help";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Layout />
        <Switch>
          <Route exact path="/help" component={Help} />
          <Route exact path="/about" component={About} />
          {/*<Route exact path="/couples" component={} /> */}
          <Route exact path="/toss" component={CoinToss} />
          <Route path="/" component={Picker} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
