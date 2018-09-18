import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#1976d2"
    },
    background: {
      default: "#fff"
    }
  }
});

const app = (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
