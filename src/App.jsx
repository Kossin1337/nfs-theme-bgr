import React from "react";

/* components */
import Navigation from "./components/navigation/Navigation";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Partners from "./components/partners/Partners";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import "./App.scss";

const App = () => {
  return (
    <div className="application">
      <Navigation />
      <Main id="#home" />
      <About id="#about" />
      <Contact id="#contact" />
      <Partners />
      <Footer />
      <img
        src="https://tenor.com/view/toyota-corolla-drifting-drift-japanese-cars-toyota-gif-23514049"
        alt="gif"
      />
    </div>
  );
};

export default App;
