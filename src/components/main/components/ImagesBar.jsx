import React from "react";
import "./ImagesBar.scss";

const ImagesBar = ({ images, activeImageID, setImageID, totalImages }) => {
  return (
    <div className="images-bar-wrapper">
      <div className="bar">
        {images.map((image, index) => {
          <div
            className={`image-box ${
              index === activeImageID ? "active" : "disabled"
            }`}
            key={index}
          ></div>;
        })}
      </div>
    </div>
  );
};

export default ImagesBar;
