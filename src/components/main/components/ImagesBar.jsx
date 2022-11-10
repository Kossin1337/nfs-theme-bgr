import React from "react";
import "./ImagesBar.scss";

const ImagesBar = ({ images, activeImageID, setImageID }) => {
  return (
    <div className="images-bar-wrapper">
      <div className="bar">
        {images.map((image, index) => {
          return (
            <div
              className={`image-box ${
                index === activeImageID ? "active" : "disabled"
              }`}
              onClick={() => setImageID(index)}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagesBar;
