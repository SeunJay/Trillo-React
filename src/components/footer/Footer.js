import React from 'react';
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer__book-now">
        Good news! We have 4 free rooms for your selected dates!
      </h1>

      <button class="btn">
        <span class="btn__visible">Book now</span>
        <span class="btn__invisible">Only 4 rooms left</span>
      </button>
    </div>
  );
}

export default Footer
