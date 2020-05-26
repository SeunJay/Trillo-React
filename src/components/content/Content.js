import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import Main from "../main/Main";
import "./content.scss"

const Content = () => {
  return (
    <div className="content">
      <Sidebar/>
      <Main/>
    </div>
  )
}

export default Content
