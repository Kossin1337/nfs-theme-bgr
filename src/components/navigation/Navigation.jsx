import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

/* react-motion animations */
import { motion } from "framer-motion";
import { navVariants, navMobileVariants } from "../../utils/motion";

/* components */
import MobileBurger from "./components/MobileBurger";
import ContactButton from "./components/ContactButton";

import "./Navigation.scss";

const Navigation = ({ refs }) => {
  const [menu, setMenu] = useState("mobile-inactive");
  const location = useLocation();

  console.log("Location: ", location);

  function toggleMenu() {
    menu === "mobile-active"
      ? setMenu("mobile-inactive")
      : setMenu("mobile-active");
  }

  useEffect(() => {
    console.log("location", location.hash);
    switch (location.hash) {
      case "#about":
        scrollSmoothHandler(refs?.aboutRef);
        break;
      case "#offer":
        scrollSmoothHandler(refs?.offerRef);
        break;
      case "":
        scrollSmoothHandler(refs?.homeRef);
        break;

      default:
        break;
    }
  }, [location, refs]);

  const scrollSmoothHandler = (ref) => {
    const offset = location.pathname === "/" ? 0 : 80;

    window.scrollTo({
      top: ref?.current?.offsetTop + offset,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="navigation"
      initial="hidden"
      animate="visible"
      whileInView="show"
      variants={navVariants}
    >
      <div className="mobile-wrapper">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">BGR GARAGE</span>
          </Link>
        </div>
        <MobileBurger
          menuActive={menu === "mobile-active"}
          handleClick={toggleMenu}
        />
      </div>
      <motion.ul
        initial="hidden"
        animate={menu === "mobile-active" ? "visible" : ""}
        className={`menu ${menu}`}
        variants={navMobileVariants}
      >
        <li className="menu-item">
          <Link to="/" activeclassname="selected">
            Home
          </Link>
        </li>
        <li className="menu-item active">
          <Link to="/#offer" activeclassname="selected" onClick={toggleMenu}>
            Offer
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/#about" activeclassname="selected" onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li className="menu-item special">
          <NavLink
            to="/contact"
            activeClassName="selected"
            onClick={toggleMenu}
          >
            <ContactButton />
          </NavLink>
        </li>
      </motion.ul>
    </motion.div>
  );
};

export default Navigation;
