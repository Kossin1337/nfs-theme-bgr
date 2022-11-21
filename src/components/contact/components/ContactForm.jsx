import React, { useState } from "react";

import "./ContactForm.scss";

const mockData = {
  name: "Kossin 1337",
  email: "kossin1337@gmail.com",
  message: "yo wassup, how u doing? lets get in touch",
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [info, setInfo] = useState(mockData);

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const onChange = ({ target }) => {
    const { name, value } = target.name;

    setInfo((prevInfo) => {
      prevInfo[name] = value;
    });
  };

  if (submitted) {
    return (
      <>
        <span>Congratulations!</span>
      </>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Your Name</label>
      <input type="text" placeholder="Your name" name="name" required />
      <label>Email</label>
      <input type="email" placeholder="Email" name="email" required />
      <label>Message</label>
      <textarea placeholder="Your message" name="message" required />
      <button type="submit" className="submit-btn">
        Send a message
      </button>
    </form>
  );
};

export default ContactForm;
