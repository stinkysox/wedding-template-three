import React, { useState, useEffect } from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/82/2d/2f/822d2fa17da10b447982307cb5e39236.jpg",
    alt: "Wedding photo 1",
    category: "wedding",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/2d/f9/4d/2df94db13fd4ca3a01e9d208b837f76c.jpg",
    alt: "Wedding photo 2",
    category: "wedding",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/736x/89/2d/7e/892d7eb76f8ce6242c0eb17b81343e14.jpg",
    alt: "Pre-wedding photo 1",
    category: "pre-wedding",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/736x/f0/2f/1b/f02f1b59de35082ce3cd2c022afe320c.jpg",
    alt: "Engagement photo 1",
    category: "engagement",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/b2/c7/7e/b2c77ecba4b258dcebdb4b8d1317f3b8.jpg",
    alt: "Pre-wedding photo 2",
    category: "pre-wedding",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/b2/c7/7e/b2c77ecba4b258dcebdb4b8d1317f3b8.jpg",
    alt: "Wedding photo 3",
    category: "wedding",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/736x/56/14/fe/5614fe1e4cd3be3b974aa4804da01ca0.jpg",
    alt: "Engagement photo 2",
    category: "engagement",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/736x/43/a3/f2/43a3f2e6055c4ca748a74a815ead9aaf.jpg",
    alt: "Baby shower photo 1",
    category: "baby-shower",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/736x/15/f4/23/15f423873c17738947ff493e9b7ea245.jpg",
    alt: "Baby shower photo 2",
    category: "baby-shower",
  },
  {
    id: 10,
    src: "https://i.pinimg.com/736x/15/f4/23/15f423873c17738947ff493e9b7ea245.jpg",
    alt: "Wedding photo 4",
    category: "wedding",
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "wedding", name: "Wedding" },
  { id: "pre-wedding", name: "Pre-Wedding" },
  { id: "engagement", name: "Engagement" },
  { id: "baby-shower", name: "Baby Shower" },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setFilteredImages(
      selectedCategory === "all"
        ? galleryImages
        : galleryImages.filter((img) => img.category === selectedCategory)
    );
  }, [selectedCategory]);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="gallery-component">
      <div className="gallery-component__container" id="gallery">
        <h2 className="gallery-component__heading">Captured Moments</h2>
        <p className="gallery-component__subheading">
          A glimpse into the timeless stories we’ve framed — from weddings to
          baby showers.
        </p>
        <h2 className="gallery-component__title">Our Gallery</h2>

        <div className="gallery-component__filter">
          {categories.map(({ id, name }) => (
            <button
              key={id}
              className={`gallery-component__filter-button ${
                selectedCategory === id ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(id)}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="gallery-component__grid">
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="gallery-component__item"
              onClick={() => openModal(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="gallery-component__image"
              />
              <div className="gallery-component__overlay">
                <div className="gallery-component__overlay-content">
                  <span>View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {modalOpen && selectedImage && (
          <div
            className="gallery-component__modal-overlay"
            onClick={closeModal}
          >
            <div
              className="gallery-component__modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="gallery-component__modal-close"
                onClick={closeModal}
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="gallery-component__modal-image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
