import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../../utils/motion";

import "./Rainbow.scss";

const Rainbow = ({ textOne, textTwo }) => {
  return (
    <div className="wrapper">
      <motion.ul
        className="c-rainbow"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        variants={fadeIn("left", "tween", 0.2, 1)}
        viewport={{ once: false, amount: 0.25 }}
      >
        <li className="c-rainbow__layer c-rainbow__layer--white">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--orange">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--red">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--violet">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--blue">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--green">{textOne}</li>
        <li className="c-rainbow__layer c-rainbow__layer--yellow">{textOne}</li>
      </motion.ul>
      <motion.ul
        className="c-rainbow"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        variants={fadeIn("right", "tween", 0.2, 1)}
        viewport={{ once: false, amount: 0.25 }}
      >
        <li className="c-rainbow__layer c-rainbow__layer--white">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--orange">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--red">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--violet">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--blue">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--green">{textTwo}</li>
        <li className="c-rainbow__layer c-rainbow__layer--yellow">{textTwo}</li>
      </motion.ul>
    </div>
  );
};

export default Rainbow;
