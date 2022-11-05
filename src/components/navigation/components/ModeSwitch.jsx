import React, { useState, useEffect } from "react";
import "./ModeSwitch.scss";

const ModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");

    if (darkMode === true) {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [darkMode]);

  return (
    <div
      id="toggle"
      onClick={() =>
        darkMode === false ? setDarkMode(true) : setDarkMode(false)
      }
    >
      <div className="toggle-inner" />
    </div>
  );
};

export default ModeSwitch;
