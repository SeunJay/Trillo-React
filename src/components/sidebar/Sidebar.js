import React from "react";
import { Link } from "react-router-dom";
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
  },
  {
    icon: LocationIcon,
    spanText: "Flight",
  },
  {
    icon: KeyIcon,
    spanText: "Car Rentals",
  },
  {
    icon: MapIcon,
    spanText: "Tours",
  },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul class="side-nav">
        {sideBarLinks.map(({ icon, spanText }) => (
          <ListItem key={spanText} Icon={icon} spanText={spanText} />
        ))}
      </ul>

      <div class="legal">&copy; 2020 by Trillo. All right reserved.</div>
    </div>
  );
};

export default Sidebar;
