import React, { useEffect, useRef } from "react";
import Rainbow from "./components/Rainbow";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

import { useInView } from "framer-motion";

import "./Offer.scss";

// WE GOT WHAT YOU WANT
// WE GOT WHAT YOU NEED

const Offer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 80px 0px 0px",
  });

  useEffect(() => {
    console.log("Offer is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="offer-wrapper" id="offer" ref={ref}>
      <Rainbow
        textOne={"WE GOT WHAT YOU WANT"}
        textTwo={"WE GOT WHAT YOU NEED"}
      />
      <div className="offer">
        <span className="special-text">BGR GARAGE</span>
        <div className="offer-box">
          <span className="offer-text">
            <span className="sub-text">
              We acquire masterpieces from all kinds of cars,
            </span>{" "}
            from
            <span className="sub-text"> classics</span> to the latest
            <span className="sub-text"> hypercars</span>
          </span>
        </div>

        <span className="offer-text">
          <span className="sub-text">For you,</span> we will find a car that is{" "}
          <span className="sub-text">not available in Automotive Services</span>
        </span>
        <span className="offer-text">
          We offer{" "}
          <span className="sub-text">
            vehicles fully ready for registration
          </span>
          , after all required fees
        </span>
        <span className="offer-text">
          In addition, we are able to{" "}
          <span className="sub-text">
            {" "}
            deliver the car to the door of your home
          </span>
        </span>

        <span className="offer-text">
          <span className="sub-text">
            Leave the price negotiation and leasing terms to us
          </span>
        </span>
      </div>
    </div>
  );
};

export default Offer;
