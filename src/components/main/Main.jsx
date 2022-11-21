import React, { useState, useEffect } from "react";

/* REACT SPRING ANIMATIONS */
// import { useSpring, animated } from "@react-spring/web";
// import { Parallax, ParallaxLayer } from "@react-spring/web";
import { useSpringCarousel } from "react-spring-carousel";

/* hooks */
import { useWindowSize } from "../../hooks/useWindowSize";

/* images */
import mustBe1 from "./mustBeImages/mustBe1.jpeg";
import mustBe2 from "./mustBeImages/mustBe2.jpg";
import mustBe3 from "./mustBeImages/mustBe3.jpeg";
import mustBe4 from "./mustBeImages/mustBe4.jpeg";
// import mustBe5 from "./mustBeImages/mustBe5.jpeg";
// import mustBe6 from "./mustBeImages/mustBe6.jpg";

/* phone images */
import phoneOne from "./images/phone/phone1.jpg";
import phoneTwo from "./images/phone/phone2.jpeg";
import phoneThree from "./images/phone/phone3.jpeg";
import phoneFour from "./images/phone/phone4.jpeg";

/* components */
import ImageScroll from "./components/ImageScroll";
import ImagesBar from "./components/ImagesBar";

import "./Main.scss";

// const images = [springNoRoof, SClass, AMGG63, WinterMercedes];

// IMAGE BREAKPOINTS ARRAYS
// (1920x1080) - basic desktop resolution
const desktopImages = [
  {
    id: 0,
    image: mustBe1,
    message: ["Die with memories", "not dreams"],
    author: "~Anonymous",
  },
  {
    id: 1,
    image: mustBe2,
    message: [
      "BOYS NEVER GROW UP",
      "THEIR TOYS JUST GET BIGGER",
      "AND MORE EXPENSIVE",
    ],
    author: "~Anonymous",
  },
  {
    id: 2,
    image: mustBe3,
    message: [
      "IF EVERYTHING SEEMS UNDER CONTROL",
      `YOU'RE NOT GOING FAST ENOUGH`,
    ],
    author: "~Anonymous",
  },
  {
    id: 3,
    image: mustBe4,
    message: [
      "I spend a lot of money on women, booze and fast cars",
      "The rest is just squandered",
    ],
    author: "~Anonymous",
  },
  // {
  //   id: 4,
  //   image: mustBe5,
  //   message: [
  //     "IF YOU GIVE THIS MAN A RIDE SEAT, FAMILY WILL DIE. KILLER ON THE ROAD",
  //   ],
  // },
  // { id: 5, image: mustBe6, message: ["THE CARS WE DRIVE SAY A LOT ABOUT US"] },
];
// 1060/960x800 - tablet resolution
const tabletImages = [
  {
    id: 0,
    image: phoneOne,
    message: ["Die with memories", "not dreams"],
    author: "~Anonymous",
  },
  {
    id: 1,
    image: phoneTwo,
    message: [
      "BOYS NEVER GROW UP",
      "THEIR TOYS JUST GET BIGGER",
      "AND MORE EXPENSIVE",
    ],
    author: "~Anonymous",
  },
  {
    id: 2,
    image: phoneThree,
    message: [
      "I ain't saying she's a gold digger",
      `but she ain't messing with no broke...`,
    ],
    author: "~Kanye",
  },
  {
    id: 3,
    image: phoneFour,
    message: [
      "I spend a lot of money on women, booze and fast cars",
      "The rest is just squandered",
    ],
    author: "~Anonymous",
  },
];
// PHONE (less than 960)
const phoneImages = [
  {
    id: 0,
    image: phoneOne,
    message: ["Die with memories", "not dreams"],
    author: "~Anonymous",
  },
  {
    id: 1,
    image: phoneTwo,
    message: [
      "BOYS NEVER GROW UP",
      "THEIR TOYS JUST GET BIGGER",
      "AND MORE EXPENSIVE",
    ],
    author: "~Anonymous",
  },
  {
    id: 2,
    image: phoneThree,
    message: [
      "I ain't saying she's a gold digger",
      `but she ain't messing with no broke...`,
    ],
    author: "~Anonymous",
  },
  {
    id: 3,
    image: phoneFour,
    message: [
      "I spend a lot of money on women, booze and fast cars",
      "The rest is just squandered",
    ],
    author: "~Anonymous",
  },
];

/* react spring render arrays */
const RSdesktopImages = [
  {
    id: "item-1",
    renderItem: <img src={mustBe1} alt="spring-no-roof" />,
  },
  {
    id: "item-2",
    renderItem: <img src={mustBe2} alt="spring-no-roof" />,
  },
  {
    id: "item-3",
    renderItem: <img src={mustBe3} alt="spring-no-roof" />,
  },
  {
    id: "item-4",
    renderItem: <img src={mustBe4} alt="spring-no-roof" />,
  },
];

const Main = () => {
  const [imageID, setImageID] = useState(0);
  const { width } = useWindowSize();
  const [imagesArray, setImagesArray] = useState(desktopImages);

  /* react spring */
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: RSdesktopImages,
    });

  /* assess screen to display images */
  useEffect(() => {
    setImagesArray(
      width > 1920 ? desktopImages : width > 960 ? tabletImages : phoneImages
    );
  }, [width]);

  useEffect(() => {
    const newInterval = setInterval(() => {
      slideToNextItem();
    }, 5000);

    return () => clearInterval(newInterval);
  }, []);

  // const prevImage = () => {
  //   setImageID((id) => (id === 0 ? imagesArray.length - 1 : id - 1));
  // };

  // const nextImage = () => {
  //   setImageID((id) => (id === imagesArray.length - 1 ? 0 : id + 1));
  // };

  return (
    <div className="main" id="home">
      <div className="title-container">
        {imagesArray[imageID].message.map((msg, index) => {
          return (
            <h1 className="title message" key={index}>
              {msg}
            </h1>
          );
        })}
        {imagesArray[imageID].author && (
          <h2 className="title author">{imagesArray[imageID].author}</h2>
        )}
      </div>
      <div className="image-wrapper">{carouselFragment}</div>
      <ImageScroll prevImage={slideToPrevItem} nextImage={slideToNextItem} />
      {/* <img src={imagesArray[imageID].image} alt="spring-no-roof" /> */}
      <ImagesBar
        images={imagesArray}
        setImageID={setImageID}
        activeImageID={imageID}
      />
    </div>
  );
};

export default Main;
