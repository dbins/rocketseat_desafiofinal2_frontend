import "./config/reactotron";
import React from "react";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import GlobalStyle from "./styles/global";
import Routes from "./routes";
import history from "./routes/history";

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
);

export default App;
