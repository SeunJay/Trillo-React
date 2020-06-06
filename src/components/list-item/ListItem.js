import React from "react";
import { Link } from "react-router-dom";
import "./list-item.scss";

const ListItem = ({ Icon, spanText, path }) => {
  return (
    <li class="side-nav__item">
      <Link to={path} class="side-nav__link">
        <Icon className="side-nav__icon" />
        <span>{spanText}</span>
      </Link>
    </li>
  );
};

export default ListItem;
