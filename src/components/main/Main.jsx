import React, { useState, useEffect } from "react";

/* REACT SPRING ANIMATIONS */
import { useSpringCarousel } from "react-spring-carousel";

/* hooks */
import { useWindowSize } from "../../hooks/useWindowSize";

/* react motion text */
// import

/* react lazy loading */
import { LazyLoadImage } from "react-lazy-load-image-component";

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

/* react spring render arrays */
const RSdesktopImages = [
  {
    id: "item-1",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <LazyLoadImage
          key={"image-1"}
          src={mustBe1}
          width={"100%"}
          height={"100%"}
          alt="blue-lambo"
          effect="blur"
        />
      </>
    ),
  },
  {
    id: "item-2",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            BOYS NEVER GROW UP
          </h1>
          <h1 className="title message" key={2}>
            THEIR TOYS JUST GET BIGGER
          </h1>
          <h1 className="title message" key={3}>
            AND MORE EXPENSIVE
          </h1>
        </div>
        <img src={mustBe2} alt="white-cars-garage" />,
      </>
    ),
  },
  {
    id: "item-3",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            IF EVERYTHING SEEMS UNDER CONTROL
          </h1>
          <h1 className="title message" key={2}>
            YOU'RE NOT GOING FAST ENOUGH
          </h1>
        </div>
        <img src={mustBe3} alt="lambo-tire" />
      </>
    ),
  },
  {
    id: "item-4",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            I spend a lot of money on women, booze and fast cars
          </h1>
          <h1 className="title message" key={2}>
            The rest is just squandered
          </h1>
        </div>
        <img src={mustBe4} alt="classic-cars-parking" />
      </>
    ),
  },
];

const RStabletImages = [
  {
    id: "item-1",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneOne} alt="blue-lambo" />
      </>
    ),
  },
  {
    id: "item-2",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneTwo} alt="white-cars-garage" />,
      </>
    ),
  },
  {
    id: "item-3",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneThree} alt="lambo-tire" />
      </>
    ),
  },
  {
    id: "item-4",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneFour} alt="classic-cars-parking" />
      </>
    ),
  },
];

const RSphoneImages = [
  {
    id: "item-1",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneOne} alt="blue-lambo" />
      </>
    ),
  },
  {
    id: "item-2",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneTwo} alt="white-cars-garage" />,
      </>
    ),
  },
  {
    id: "item-3",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneThree} alt="lambo-tire" />
      </>
    ),
  },
  {
    id: "item-4",
    renderItem: (
      <>
        <div className="title-container">
          <h1 className="title message" key={1}>
            Die with memories
          </h1>
          <h1 className="title message" key={2}>
            not dreams
          </h1>
        </div>
        <img src={phoneFour} alt="classic-cars-parking" />
      </>
    ),
  },
];

const Main = () => {
  const [imageID, setImageID] = useState(0);
  const { width } = useWindowSize();
  const [imagesArray, setImagesArray] = useState(RSdesktopImages);

  /* react spring */
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      withLoop: true,
      items: imagesArray,
    });

  /* assess screen to display images */
  useEffect(() => {
    setImagesArray(
      width > 1600
        ? RSdesktopImages
        : width > 960
        ? RStabletImages
        : RSphoneImages
    );
  }, [width]);

  useEffect(() => {
    const newInterval = setInterval(() => {
      slideToNextItem();
    }, 5000);

    return () => clearInterval(newInterval);
  }, []);

  return (
    <div className="main" id="home">
      <div className="image-wrapper">{carouselFragment}</div>
      <ImageScroll prevImage={slideToPrevItem} nextImage={slideToNextItem} />
      <ImagesBar
        images={imagesArray}
        setImageID={setImageID}
        activeImageID={imageID}
      />
    </div>
  );
};

export default Main;
