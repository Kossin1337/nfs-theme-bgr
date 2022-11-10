import React, { useState } from "react";

/* images */
import springNoRoof from "./images/spring-no-roof.jpg";
import AMGG63 from "./images/amg-g63.jpg";
import SClass from "./images/S-class.jpg";
import WinterMercedes from "./images/winter-mercedes.jpg";

import mustBe1 from "./mustBeImages/mustBe1.jpg";
import mustBe2 from "./mustBeImages/mustBe2.jpg";
import mustBe3 from "./mustBeImages/mustBe3.jpeg";
import mustBe4 from "./mustBeImages/mustBe4.jpeg";
import mustBe5 from "./mustBeImages/mustBe5.jpeg";

/* components */
import ImageScroll from "./components/ImageScroll";
import ImagesBar from "./components/ImagesBar";

import "./Main.scss";

// for those in Need For Speed
// BGR - TAKE THE LEAD

// WE GOT WHAT U WANT
// WE GOT WHAT YOU NEED

const images = [springNoRoof, SClass, AMGG63, WinterMercedes];

const mustBeImages = [mustBe1, mustBe2, mustBe3, mustBe4, mustBe5];

const imagesArray = [
  { id: 0, image: mustBe1, message: "NEED FOR SPEED" },
  { id: 1, image: mustBe2, message: "NEED FOR SPEED" },
  { id: 2, image: mustBe3, message: "NEED FOR SPEED" },
  { id: 3, image: mustBe4, message: "NEED FOR SPEED" },
  { id: 4, image: mustBe5, message: "NEED FOR SPEED" },
];

const Main = () => {
  const [imageID, setImageID] = useState(0);

  return (
    <div className="main" id="#home">
      <div className="title-container">
        <h1 className="title">Smoke a blunt with me</h1>
      </div>
      <ImageScroll
        setImageID={setImageID}
        totalImages={mustBeImages.length - 1}
      />
      <img src={mustBeImages[imageID]} alt="spring-no-roof" />
      <ImagesBar
        images={mustBeImages}
        activeImageID={imageID}
        setImageID={setImageID}
        totalImages={mustBeImages.length - 1}
      />
    </div>
  );
};

export default Main;
