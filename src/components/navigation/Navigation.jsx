import React from "react";
import ModeSwitch from "./components/ModeSwitch";

import "./Navigation.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <span>BGR CARS</span>
      </div>
      <ul className="menu">
        <li className="menu-item">
          <a href="#home">Home</a>
        </li>
        <li className="menu-item active">
          <a href="#offer">Offer</a>
        </li>
        <li className="menu-item">
          <a href="#about">About Us</a>
        </li>
        <li className="menu-item">
          <a href="#contact">Contact</a>
        </li>
        <ModeSwitch />
      </ul>
    </div>
  );
};

export default Navigation;
