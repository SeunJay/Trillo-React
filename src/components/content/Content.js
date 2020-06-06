import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { Switch, Route } from "react-router-dom";
import Test from "../Test"
import Me from "../Me"
import Main from "../main/Main";
import "./content.scss";

const Content = () => {
  return (
    <div className="content">
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/me" component={Me} />
      </Switch>
    </div>
  );
};

export default Content;
