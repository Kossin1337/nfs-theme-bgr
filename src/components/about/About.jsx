import React from "react";

import Partners from "./partners/Partners";

import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <span className="special-text">About Us</span>
      <span className="secondary-text">
        A company created out of a passion for automobiles
      </span>
      <Partners />
    </div>
  );
};

export default About;
