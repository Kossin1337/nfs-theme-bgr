import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/* react spring */
import { useSpring, animated } from "@react-spring/web";

/* components */
import MobileBurger from "./components/MobileBurger";
import ContactButton from "./components/ContactButton";

import "./Navigation.scss";

const Navigation = ({ refs }) => {
  const [menu, setMenu] = useState("mobile-inactive");
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const springProps = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
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
    window.scrollTo({
      top: ref?.current.offsetTop - 60,
      behavior: "smooth",
    });
  };

  return (
    <animated.div style={springProps} className="navigation">
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
