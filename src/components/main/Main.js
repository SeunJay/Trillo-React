import React from "react";
import PhotoGallery from "../photo-gallery/PhotoGallery";
import Overview from "../overview/Overview";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <PhotoGallery />
      <Overview />
    </div>
  );
};

export default Main;
