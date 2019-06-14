import React from "react";
import LoginPages from "./routes/LoginPages";
import { BrowserRouter, Route } from "react-router-dom";
import ChatPages from "./routes/ChatPages";
import "./App.css";

const ReduxApp: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact={true} component={LoginPages} />
      <Route path="/chat/" component={ChatPages} />
    </BrowserRouter>
  );
};
export default ReduxApp;
