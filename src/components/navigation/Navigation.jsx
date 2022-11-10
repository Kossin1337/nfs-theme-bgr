import React from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.scss";

const Navigation = ({ scrollHome, scrollOffer, scrollAbout }) => {
  return (
    <div className="navigation">
      <div className="logo">
        <NavLink to="/">
          <span>BGR GARAGE</span>
        </NavLink>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <a href="#home" onClick={scrollHome}>
            Home
          </a>
        </li>
        <li className="menu-item active" onClick={() => scrollOffer}>
          <a href="#offer">Offer</a>
        </li>
        <li className="menu-item" onClick={() => scrollAbout}>
          <a href="#about">About Us</a>
        </li>
        <li className="menu-item special">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
