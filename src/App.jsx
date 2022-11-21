import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

/* components */
import Navigation from "./components/navigation/Navigation";
import Contact from "./components/contact/Contact";
import Offer from "./components/offer/Offer";
import About from "./components/about/About";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import "./App.scss";

const HomeSection = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Main />
    </section>
  );
});

const OfferSection = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <Offer />
    </section>
  );
});

const AboutSection = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <About />
    </section>
  );
});

const App = () => {
  const [activeURL, setActiveURL] = useState("home");
  const homeRef = useRef(null);
  const offerRef = useRef(null);
  const aboutRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    
  }, [location]);

  return (
    <div className="application">
      <Navigation refs={{ homeRef, offerRef, aboutRef }} />
      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <HomeSection ref={homeRef} />
              <OfferSection ref={offerRef} />
              <AboutSection ref={aboutRef} />
            </div>
          }
        />
        <Route
          path="/contact"
          element={
            <div className="content">
              <Contact />
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
