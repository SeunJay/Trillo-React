import React from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import userPhoto from "../../assets/user.jpg"
import { ReactComponent as BookmarkIcon } from "../../assets/bookmark.svg";
import { ReactComponent as SearchIcon } from "../../assets/magnifying-glass.svg";
import { ReactComponent as ChatIcon } from "../../assets/chat.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="header__logo" />
      <form action="#" className="search">
        <input
          type="text"
          class="search__input"
          placeholder="Search Hotels"
        ></input>
        <button className="search__button">
          <SearchIcon className="search__icon" />
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <BookmarkIcon className="user-nav__icon" />
          <span class="user-nav__notification">7</span>
        </div>

        <div className="user-nav__icon-box">
          <ChatIcon className="user-nav__icon" />
          <span class="user-nav__notification">13</span>
        </div>

        <div className="user-nav__icon-box">
          <img src={userPhoto} alt="User pic" className="user-nav__user-photo"/>
          <span class="user-nav__user-name">Jonas</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
