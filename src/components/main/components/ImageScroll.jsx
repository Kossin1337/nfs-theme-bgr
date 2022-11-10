import React from "react";

/* arrows */
import ArrowLeft from "../../../assets/icons/ArrowLeft";
import ArrowRight from "../../../assets/icons/ArrowRight";

import "./ImageScroll.scss";

const ImageScroll = ({ setImageID, totalImages }) => {
  const nextImage = () => {
    setImageID((id) => (id === totalImages ? 0 : id + 1));
  };

  const prevImage = () => {
    setImageID((id) => (id === 0 ? totalImages : id - 1));
  };

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
