import React, { useRef } from "react";

/* react motion */
import { AnimatePresence, motion } from "framer-motion";
import { footerVariants } from "../../utils/motion";

/* icons */
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";
import TikTok from "../../assets/icons/TikTok";

import { useInView } from "framer-motion";

import "./Footer.scss";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    marginTop: "80px",
  });

  return (
    <AnimatePresence>
      <motion.div
        className="footer"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={footerVariants}
        ref={ref}
      >
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Footer;
