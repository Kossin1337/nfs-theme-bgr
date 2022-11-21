import React from "react";
import "./MobileBurger.scss";

const MobileBurger = ({ menuActive, handleClick }) => {
  return (
    <div
      className={`icon burger-menu ${menuActive ? "open" : "disabled"}`}
      onClick={handleClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default MobileBurger;
