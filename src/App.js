import React from "react";
import { Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="">
      <Route path="/" component={Layout} />
    </div>
  );
}

export default App;
