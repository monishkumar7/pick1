import React, { Component, Fragment } from "react";
import { CssBaseline } from "@material-ui/core/";

import NavBar from "./components/NavBar/NavBar";
import Picker from "./container/Picker/Picker";

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <NavBar />
        <Picker />
      </Fragment>
    );
  }
}

export default App;
