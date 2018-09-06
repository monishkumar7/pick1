import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Hind Madurai", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#424242"
    },
    secondary: {
      main: "#c310ef"
    }
  }
});

const app = (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
