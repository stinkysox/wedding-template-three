import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop",
      alt: "Wedding photo 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=400&fit=crop",
      alt: "Wedding photo 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=300&h=400&fit=crop",
      alt: "Wedding photo 3",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop",
      alt: "Wedding photo 4",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=300&h=400&fit=crop",
      alt: "Wedding photo 5",
    },
  ];

  return (
    <section className="about-us">
      <div className="container">
        {/* Header */}
        <div className="header">
          <h3 className="subtitle">We're Cupido</h3>
          <h1 className="title">Capturing memories that last a lifetime</h1>
        </div>

        {/* Photo Gallery */}
        <div className="photo-gallery">
          {photos.map((photo, index) => (
            <div key={photo.id} className={`photo-item photo-${index + 1}`}>
              <img src={photo.src} alt={photo.alt} />
            </div>
          ))}
        </div>

        {/* Description Text */}
        <div className="description">
          <p className="description-text">
            "Love is a story that unfolds with every passing moment, and your
            wedding marks a turning point in that journey. Through our lens, we
            capture the essence of your story – the raw emotions, the pure love,
            and the unbridled joy.
          </p>
          <p className="description-text">
            At Cupido, we weave your tale into a tapestry of{" "}
            <span className="highlight">candid</span> wedding photography,
            immortalizing your cherished moments for{" "}
            <span className="highlight">eternity</span>."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
