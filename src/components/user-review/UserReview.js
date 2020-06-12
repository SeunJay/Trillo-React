import React from "react";
import "./user-review.scss";

const UserReview = ({ review, userName, date, reviewRating }) => {
  return (
    <div className="review">
      <blockquote class="review__text">{review}</blockquote>

      <figcaption className="review__user">
        <img src="img/user-1.jpg" alt="User 1" class="review__photo"></img>

        <div class="review__user-box">
          <p class="review__user-name">{userName}</p>
          <p class="review__user-date">{date}</p>
        </div>
        <div class="review__rating">{reviewRating}</div>
      </figcaption>
    </div>
  );
};

export default UserReview;
