import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
import Router from "./router";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
