import React from "react";
//import { Link } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { ReactComponent as LocationIcon } from "../../assets/aircraft-take-off.svg";
import { ReactComponent as KeyIcon } from "../../assets/key.svg";
import { ReactComponent as MapIcon } from "../../assets/map.svg";
import ListItem from "../list-item/ListItem";
import "./sidebar.scss";

const sideBarLinks = [
  {
    icon: HomeIcon,
    spanText: "Hotel",
    path: "/",
  },
  {
    icon: LocationIcon,
    spanText: "Flight",
    path: "/",
  },
  {
    icon: KeyIcon,
    spanText: "Car Rentals",
    path: "/me",
  },
  {
    icon: MapIcon,
    spanText: "Tours",
    path: "/test",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul class="side-nav">
        {sideBarLinks.map(({ icon, spanText, path }) => (
          <ListItem key={spanText} Icon={icon} spanText={spanText} path={path} />
        ))}
      </ul>

      <div class="legal">&copy; 2020 by Trillo. All right reserved.</div>
    </div>
  );
};

export default Sidebar;
