import React from "react";
import { useSpring, animated } from "@react-spring/web";

/* arrows */
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import ArrowRight from "../../../assets/icons/ArrowRight";

import "./ImageScroll.scss";

const ImageScroll = ({ prevImage, nextImage }) => {
  const leftArrowSpringProps = useSpring({
    from: { opacity: 0.5, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    delay: 350,
  });

  const rightArrowSpringProps = useSpring({
    from: { opacity: 0.5, scale: 0.5 },
    to: { opacity: 1, scale: 1 },
    delay: 350,
  });

  return (
    <div className="image-scroll">
      <animated.div
        style={leftArrowSpringProps}
        className="arrow prev"
        onClick={prevImage}
      >
        <ArrowLeft />
      </animated.div>
      <animated.div
        style={rightArrowSpringProps}
        className="arrow next"
        onClick={nextImage}
      >
        <ArrowRight />
      </animated.div>
    </div>
  );
};

export default ImageScroll;
