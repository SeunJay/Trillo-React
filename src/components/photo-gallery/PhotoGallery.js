import React from 'react';
import "./photo-gallery.scss"

const PhotoGallery = () => {
  return (
    <div className="gallery">
        <figure className="gallery__items">
          <img src="img/hotel-1.jpg" alt="#" className="gallery__photo"></img>
        </figure>

        <figure className="gallery__items">
          <img src="img/hotel-2.jpg" alt="#" className="gallery__photo"></img>
        </figure>

        <figure className="gallery__items">
          <img src="img/hotel-3.jpg" alt="#" className="gallery__photo"></img>
        </figure>

      
    </div>
  );
}

export default PhotoGallery
