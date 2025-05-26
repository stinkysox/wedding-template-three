import React from "react";
import "./Footer.css";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <h2>Renny Films</h2>
      </div>
      <p className="footer-tagline">
        we turn life’s most precious moments into poetic stories, <br />
        capturing the beauty and emotion of your special days with <br />
        heartfelt artistry.
      </p>

      <div className="footer-contact">
        <h3>Get In Touch</h3>
        <p>
          Renny Films, 2nd Floor, Tihama Center Near EMC hospital, <br />
          Enar Street, Chennai, 682028
        </p>
        <p>
          <FaEnvelope className="icon" /> rennyfilms.india@gmail.com
        </p>
        <p>
          <FaPhone className="icon" /> +91 82819 66669
        </p>
      </div>

      <div className="footer-links">
        <h3>Quicklinks</h3>
        <ul>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
