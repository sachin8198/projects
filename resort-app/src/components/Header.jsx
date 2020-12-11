import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <MenuIcon className="header__menuIcon" />
        <h4>Logo</h4>
      </div>
      <div className="header__navbar">
        <div className="header__left">
          <div className="header__activity">
            <h3>Activity</h3>
            <ArrowDropDownIcon className="header__dropDown" />
          </div>
          <div className="header__toolGuide">
            <h3>Tool Guide</h3>
            <ArrowDropDownIcon className="header__dropDown" />
          </div>
        </div>

        <div className="header__searchBar">
          <SearchIcon className="header__searchIcon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="header__navbar__right">
          <NotificationsIcon className="header__notificationBar" />
          <Avatar
            className="header__avatar"
            src="https://avatars0.githubusercontent.com/u/52592655?s=400&u=8b532ac09e0f2735c2f4e76169f609444c02b8c8&v=4"
          />
          <ArrowDropDownIcon className="header__dropdown" />
        </div>
      </div>
    </div>
  );
}

export default Header;
