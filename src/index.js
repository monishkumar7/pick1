import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import shareReducer from './store/reducers/share';
import fbConfig from './config/fbConfig';

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Noto Sans', 'sans-serif'].join(',')
  },
  palette: {
    primary: {
      main: '#1976d2'
    },
    background: {
      default: '#fff'
    }
  }
});

const rootReducer = combineReducers({ share: shareReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig),
    reduxFirestore(fbConfig)
  )
);

const app = (
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
