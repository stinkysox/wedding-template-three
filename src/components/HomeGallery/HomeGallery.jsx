import React, { useState, useEffect } from "react";
import "./HomeGallery.css";

const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      alt: "Wedding couple portrait",
      size: "medium",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=1000&fit=crop",
      alt: "Wedding ceremony",
      size: "tall",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      alt: "Wedding party",
      size: "medium",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=800&fit=crop",
      alt: "Bridesmaids",
      size: "square",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
      alt: "Wedding couple intimate moment",
      size: "medium",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=1000&fit=crop",
      alt: "Bride portrait",
      size: "tall",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      alt: "Wedding celebration",
      size: "medium",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedImage(null), 300);
  };

  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "next") {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }

    setSelectedImage(galleryImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, selectedImage]);

  return (
    <>
      <section className="home-gallery">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className={`gallery-item ${image.size}`}>
                <div
                  className="image-container"
                  onClick={() => openModal(image)}
                >
                  <img src={image.src} alt={image.alt} />
                  <div className="image-overlay">
                    <div className="overlay-content">
                      <span className="view-text">View</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedImage && (
        <div
          className={`modal-overlay ${isModalOpen ? "modal-open" : ""}`}
          onClick={closeModal}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Navigation Arrows */}
            <button
              className="modal-nav modal-prev"
              onClick={() => navigateImage("prev")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="modal-nav modal-next"
              onClick={() => navigateImage("next")}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18L15 12L9 6"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="modal-image-container">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modal-image"
              />
            </div>

            {/* Image Counter */}
            <div className="modal-counter">
              {galleryImages.findIndex((img) => img.id === selectedImage.id) +
                1}{" "}
              / {galleryImages.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeGallery;
