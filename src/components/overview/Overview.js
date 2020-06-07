import React from "react";
import "./overview.scss";
import { ReactComponent as StarIcon } from "../../assets/star.svg";
import { ReactComponent as LocationIcon } from "../../assets/location-pin.svg";

const Overview = () => {
  return (
    <div className="overview">
      <h1 class="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        <div className="overview__icon-star">
          <StarIcon />
        </div>
        <div className="overview__icon-star">
          <StarIcon />
        </div>
        <div className="overview__icon-star">
          <StarIcon />
        </div>
        <div className="overview__icon-star">
          <StarIcon />
        </div>
        <div className="overview__icon-star">
          <StarIcon />
        </div>
      </div>

      <div className="overview__location">
        <div className="overview__icon-location">
          <LocationIcon />
        </div>

        <button class="btn-inline">Albufeira, Portugal</button>
      </div>

      <div class="overview__rating">
        <div class="overview__rating-average">8.6</div>
        <div class="overview__rating-count">429 votes</div>
      </div>
    </div>
  );
};

export default Overview;
