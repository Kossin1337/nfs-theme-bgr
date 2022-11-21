import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/* react spring */
import { useTransition, animated } from "@react-spring/web";

/* components */
import MobileBurger from "./components/MobileBurger";
import ContactButton from "./components/ContactButton";

import "./Navigation.scss";

const Navigation = ({ refs }) => {
  const [menu, setMenu] = useState("mobile-inactive");
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const transitions = useTransition(isVisible, {
    from: { x: -1000, y: 0, opacity: 0 },
    enter: { x: -500, y: 0, opacity: 1 },
    leave: { x: 0, y: 0, opacity: 1 },
  });

  function toggleMenu() {
    menu === "mobile-active"
      ? setMenu("mobile-inactive")
      : setMenu("mobile-active");
  }

  useEffect(() => {
    console.log("location", location.hash);
    switch (location.hash) {
      case "#about":
        scrollSmoothHandler(refs.aboutRef);
        break;
      case "#offer":
        scrollSmoothHandler(refs.offerRef);
        break;
      case "":
        scrollSmoothHandler(refs.homeRef);
        break;

      default:
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    if (ref?.current) {
      ref?.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <animated.div className="navigation">
      <div className="mobile-wrapper">
        <div className="logo">
          <Link to="/">
            <span>BGR GARAGE</span>
          </Link>
        </div>
        <MobileBurger
          menuActive={menu === "mobile-active"}
          handleClick={toggleMenu}
        />
      </div>
      <ul className={`menu ${menu}`}>
        <li className="menu-item">
          <Link to="/" activeclassname="selected">
            Home
          </Link>
        </li>
        <li className="menu-item active">
          <Link
            to="/#offer"
            activeclassname="selected"
            onClick={() => {
              window.history.pushState("object or string", "Title", "/#offer");
            }}
          >
            Offer
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/#about" activeclassname="selected">
            About Us
          </Link>
        </li>
        <li className="menu-item special">
          <NavLink to="/contact" activeClassName="selected">
            <ContactButton />
          </NavLink>
        </li>
      </ul>
    </animated.div>
  );
};

export default Navigation;
