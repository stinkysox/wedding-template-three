import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const images = [
    "https://i.pinimg.com/736x/12/45/70/124570cb15e2fa0215ba74111f7b6685.jpg",
    "https://i.pinimg.com/736x/91/0c/c1/910cc18c356da058c2e248d3b8d0ff6a.jpg",
    "https://i.pinimg.com/736x/50/36/08/50360859203a51e5de8e30e934ab856d.jpg",
    "https://i.pinimg.com/736x/55/a0/42/55a042ffebaf73b4367b0e78f3c5b08e.jpg",
    "https://i.pinimg.com/736x/2d/b5/64/2db5642cf4c34f3d422cb9172b9873c5.jpg",
  ];

  const menuItems = [
    "Home",
    "About",
    "Portfolio",
    "Wedding Albums",
    "Services",
    "Contact",
  ];

  const handleMenuClick = (item) => {
    const route =
      item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;

    navigate(route);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar-container">
      <div className="image-slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentImageIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="overlay" />
      </div>

      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <span className="logo-text">cupido</span>
          <span className="logo-divider">|</span>
          <span className="logo-text">films</span>
        </div>

        <div className="search-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>

        <div
          className={`menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-content">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a onClick={() => handleMenuClick(item)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
