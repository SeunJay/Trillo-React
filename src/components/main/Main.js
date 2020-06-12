import React from "react";
import PhotoGallery from "../photo-gallery/PhotoGallery";
import Overview from "../overview/Overview";
import Details from "../details/Details";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <PhotoGallery />
      <Overview />
      <Details />
    </div>
  );
};

export default Main;
