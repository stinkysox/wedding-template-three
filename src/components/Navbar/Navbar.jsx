import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy images - replace with your actual images
  const images = [
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=600&fit=crop",
  ];

  const menuItems = ["Home", "Portfolio", "About", "Services", "Contact"];

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      {/* Background Images Slider */}
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

      {/* Navbar */}
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <span className="logo-text">cupido</span>
          <span className="logo-divider">|</span>
          <span className="logo-text">films</span>
        </div>

        {/* Search Icon */}
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

        {/* Menu Button */}
        <div
          className={`menu-button ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-content">
          <ul className="menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="menu-item">
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
