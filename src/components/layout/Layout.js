import React from "react";
import Header from "../header/Header";
import Content from "../content/Content";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

export default Layout;
