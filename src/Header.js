import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://www.pngitem.com/pimgs/m/117-1170427_hospital-logo-red-cross-hd-png-download.png"
      />
      <h1 className="navbar-logo">HOSPITAL</h1>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">
            <a href="#">LOGIN</a>
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">
            {" "}
            <a href="#">ABOUT</a>
          </span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">
            <a href="#">CONTACT US</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
