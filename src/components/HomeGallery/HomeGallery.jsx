import React, { useState, useEffect } from "react";
import "./HomeGallery.css";

const HomeGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/8a/aa/a7/8aaaa71dcaa9e82be9f9b4860b72e23b.jpg",
      alt: "Wedding couple portrait",
      size: "medium",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/4f/f9/0d/4ff90d6f8cb055e0a2b7a2a2ea66c43b.jpg",
      alt: "Wedding ceremony",
      size: "tall",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/63/23/28/632328d4643f0b06d585e0c62ab1d11e.jpg",
      alt: "Wedding party",
      size: "medium",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/63/e3/d2/63e3d23b4e8fab213aaabbef595d6009.jpg",
      alt: "Bridesmaids",
      size: "square",
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/ec/3b/66/ec3b668c49e226258c2a7657de83e6fc.jpg",
      alt: "Wedding couple intimate moment",
      size: "medium",
    },
    {
      id: 6,
      src: "https://i.pinimg.com/736x/ff/8b/2e/ff8b2ecaf1c685969de67635b751862c.jpg",
      alt: "Bride portrait",
      size: "tall",
    },
    {
      id: 7,
      src: "https://i.pinimg.com/736x/94/f0/2c/94f02c122b1e17f4d2f427536c4bd484.jpg",
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

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      }
      // Arrow key navigation removed
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen]);

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
            {/* Close button removed */}

            {/* Image */}
            <div className="modal-image-container">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="modal-image"
              />
            </div>

            {/* Image counter removed */}
          </div>
        </div>
      )}
    </>
  );
};

export default HomeGallery;
