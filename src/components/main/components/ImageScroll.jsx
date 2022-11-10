import React from "react";

/* arrows */
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import ArrowRight from "../../../assets/icons/ArrowRight";

import "./ImageScroll.scss";

const ImageScroll = ({ prevImage, nextImage }) => {
  return (
    <div className="image-scroll">
      <div className="arrow prev" onClick={prevImage}>
        <ArrowLeft />
      </div>
      <div className="arrow next" onClick={nextImage}>
        <ArrowRight />
      </div>
    </div>
  );
};

export default ImageScroll;
