import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Twitch_logo_2019.svg/250px-Twitch_logo_2019.svg.png"
          alt="twitch logo"
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className="header__center">
        <input type="text" placeholder="search" />
        <div className="header__centerLogoContainer">
          <i class="fas fa-search"></i>
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>
          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h4>Get Bits</h4>
          </div>
          <AccountBoxIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
