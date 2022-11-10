import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";

/* components */
import Navigation from "./components/navigation/Navigation";
import Contact from "./components/contact/Contact";
import Offer from "./components/offer/Offer";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import "./App.scss";

const App = () => {
  const homeRef = useRef();
  const offerRef = useRef();
  const aboutRef = useRef();

  const scrollHome = () =>
    homeRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollOffer = () =>
    offerRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollAbout = () =>
    aboutRef?.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="application">
      <Navigation
        scrollHome={scrollHome}
        scrollOffer={scrollOffer}
        scrollAbout={scrollAbout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <Main id="#home" ref={homeRef} />
              <Offer id="#offer" ref={offerRef} />
              <About id="#about" ref={aboutRef} />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="content">
              <Contact id="#contact" />
            </div>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
