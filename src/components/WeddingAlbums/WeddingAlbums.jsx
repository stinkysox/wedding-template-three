import React, { useState, useEffect } from "react";
import { ArrowLeft, Calendar } from "lucide-react";
import "./WeddingAlbums.css";

const WeddingAlbums = () => {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const albums = [
    {
      id: 1,
      title: "Swetha & Pratik",
      date: "September 30, 2023",
      coverImage:
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      ],
    },
    {
      id: 2,
      title: "Swati & Abhishek",
      date: "April 9, 2023",
      coverImage:
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      ],
    },
  ];

  const handleAlbumClick = (album) => setSelectedAlbum(album);
  const handleBackClick = () => setSelectedAlbum(null);
  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setLightboxImage(selectedAlbum.images[index]);
  };
  const closeLightbox = () => setLightboxImage(null);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!lightboxImage) return;
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [lightboxImage]);

  if (selectedAlbum) {
    return (
      <>
        <div className="album-gallery">
          <div className="gallery-header">
            <button className="back-button" onClick={handleBackClick}>
              <ArrowLeft size={20} /> Back to Albums
            </button>
            <div className="gallery-title">
              <h1>{selectedAlbum.title}</h1>
              <p className="sub-heading">
                A glimpse into their beautiful celebration of love.
              </p>
              <div className="gallery-date">
                <Calendar size={16} /> {selectedAlbum.date}
              </div>
            </div>
          </div>

          <div className="image-grid">
            {selectedAlbum.images.map((img, index) => (
              <div
                key={index}
                className="image-card"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={img}
                  alt={`${selectedAlbum.title} - Image ${index + 1}`}
                  className="gallery-image"
                />
                <div className="image-overlay">
                  <span className="expand-text">Click to enlarge</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div
              className="lightbox-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="lightbox-image-container">
                <img
                  src={lightboxImage}
                  alt={`${selectedAlbum.title} - Image ${
                    currentImageIndex + 1
                  }`}
                  className="lightbox-image"
                />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="albums-container">
      <div className="albums-heading">
        <h1 className="main-heading">Wedding Memories</h1>
        <p className="sub-heading">
          Browse through our beautifully captured wedding stories.
        </p>
      </div>
      <div className="albums-list">
        {albums.map((album) => (
          <div
            key={album.id}
            className="album-card"
            onClick={() => handleAlbumClick(album)}
          >
            <img
              src={album.coverImage}
              alt={album.title}
              className="album-cover"
            />
            <div className="album-details">
              <h2>{album.title}</h2>
              <p>{album.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingAlbums;
