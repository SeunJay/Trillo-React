import React from "react";
import "./reviews.scss";
import UserReview from "../user-review/UserReview";

const userReviews = [
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
    userName: "Nick Smith",
    date: "Feb 23rd, 2020",
    image: "img/user-1.jpg",
    reviewRating: 7.8,
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
    userName: "Mary Thomas",
    date: "March 23rd, 2020",
    image: "img/user-2.jpg",
    reviewRating: 9.3,
  },
];

const Reviews = () => {
  return (
    <div className="user-reviews">
      {userReviews.map((item, i) => (
        <UserReview key={i} {...item} />
      ))}
    </div>
  );
};

export default Reviews;
