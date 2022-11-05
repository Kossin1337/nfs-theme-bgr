import React, { useState } from "react";

/* images */
import springNoRoof from "./images/spring-no-roof.jpg";
import cosySummerCar from "./images/cosy-summer-neigbourhood.jpg";
import AMGG63 from "./images/amg-g63.jpg";
import SClass from "./images/S-class.jpg";
import WinterMercedes from "./images/winter-mercedes.jpg";

/* components */
import ImageScroll from "./components/ImageScroll";

import "./Main.scss";

// for those in Need For Speed
// BGR - TAKE THE LEAD

const images = [springNoRoof, cosySummerCar, AMGG63, WinterMercedes];

const Main = () => {
  const [imageID, setImageID] = useState(0);

  return (
    <div className="main">
      <ImageScroll setImageID={setImageID} totalImages={images.length - 1} />
      <img src={images[imageID]} alt="spring-no-roof" />
      <span>main</span>
    </div>
  );
};

export default Main;
