import React from "react";
import Reviews from "../reviews/Reviews";
import "./details.scss";

const Details = () => {
  return (
    <div className="details">
      <div className="description">
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>

        <p class="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>

        <ul class="list">
          <li class="list__item">Close to the beach</li>
          <li class="list__item">Breakfast included</li>
          <li class="list__item">Free airport shuttle</li>
          <li class="list__item">Free wifi in all rooms</li>
          <li class="list__item">Air conditioning and heating</li>
          <li class="list__item">Pets allowed</li>
          <li class="list__item">We speak all languages</li>
          <li class="list__item">Perfect for all families</li>
        </ul>

        <div className="recommend">
          <p class="recommend__count">
            Lucy and 3 other friends recommend this hotel
          </p>

          <div className="recommend__friends">
            <img
              src="img/user-3.jpg"
              alt="Friend 1"
              class="recommend__photo"
            ></img>
            <img
              src="img/user-3.jpg"
              alt="Friend 1"
              class="recommend__photo"
            ></img>
            <img
              src="img/user-3.jpg"
              alt="Friend 1"
              class="recommend__photo"
            ></img>
            <img
              src="img/user-3.jpg"
              alt="Friend 1"
              class="recommend__photo"
            ></img>
          </div>
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Details;
