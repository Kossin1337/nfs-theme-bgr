import React from "react";

/* react spring */
import { useSpring, animated } from "@react-spring/web";

/* icons */
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";
import TikTok from "../../assets/icons/TikTok";

import "./Footer.scss";

const Footer = () => {
  const springProps = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
  });

  return (
    <animated.div style={springProps} className="footer">
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
    </animated.div>
  );
};

export default Footer;
