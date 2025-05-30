import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      {/* Left Section: Contact Info */}
      <div className="contact-info">
        <h1>Get In Touch With Us</h1>
        <p>
          Reach out to us for capturing your special moments. Whether it’s a
          question, project inquiry, or collaboration, we’re here to help you
          every step of the way.
        </p>
        <h2>Cupido Wedding Films Kochi</h2>
        <div className="contact-details">
          <p className="contact-item">
            <span className="icon">📍</span> 2nd Floor, Tihama Center Near EMC
            Hospital, Palarivattom, Kochi, 682028
          </p>
          <p className="contact-item">
            <span className="icon">✉️</span> cupidofilms.india@gmail.com
          </p>
          <p className="contact-item">
            <span className="icon">📞</span> +91 92819 66669
          </p>
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="contact-form">
        <form>
          <input
            type="text"
            placeholder="Enter your name"
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="input-field"
            required
          />
          <input
            type="text"
            placeholder="Subject(Optional)"
            className="input-field"
          />
          <textarea
            placeholder="Here goes your message"
            className="input-field textarea"
            required
          />
          <button type="submit" className="send-button">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
