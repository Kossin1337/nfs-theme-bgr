import React from "react";

/* icons */
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";
import TikTok from "../../assets/icons/TikTok";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <span className="title">BGR GARAGE</span>
      <div className="icons">
        <div className="social-icon instagram">
          <Instagram />
        </div>
        <div className="social-icon facebook">
          <Facebook />
        </div>
        <div className="social-icon tiktok">
          <TikTok />
        </div>
      </div>
    </div>
  );
};

export default Footer;
