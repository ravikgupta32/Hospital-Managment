import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <img
          className="header_logo"
          src="https://www.pngitem.com/pimgs/m/117-1170427_hospital-logo-red-cross-hd-png-download.png"
        />
        <h1 className="navbar-logo">HOSPITAL</h1>

        <div className="menu-icon"></div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
