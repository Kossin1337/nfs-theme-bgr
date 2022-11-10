import React from "react";

import ContactForm from "./components/ContactForm";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <span className="bg-text">Accelerate your life</span>
      <span className="title">Contact Us</span>
      <ContactForm />
    </div>
  );
};

export default Contact;
