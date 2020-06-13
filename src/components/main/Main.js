import React from "react";
import PhotoGallery from "../photo-gallery/PhotoGallery";
import Overview from "../overview/Overview";
import Details from "../details/Details";
import Footer from "../footer/Footer";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <PhotoGallery />
      <Overview />
      <Details />
      <Footer />
    </div>
  );
};

export default Main;
