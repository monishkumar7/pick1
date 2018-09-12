import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Noto Sans", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#1976d2"
    },
    dark: "#333",
    light: "#ddd",
    background: "#fff"
  }
});

const app = (
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
