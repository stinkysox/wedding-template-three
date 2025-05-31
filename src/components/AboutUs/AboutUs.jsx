import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  const photos = [
    {
      id: 1,
      src: "https://i.pinimg.com/736x/23/c2/cb/23c2cba6852dc1ee2fe0db82875bdc9f.jpg",
      alt: "Wedding photo 1",
    },
    {
      id: 2,
      src: "https://i.pinimg.com/736x/58/55/5c/58555c3cc4cf8666e092a3434dcfd367.jpg",
      alt: "Wedding photo 2",
    },
    {
      id: 3,
      src: "https://i.pinimg.com/736x/69/80/a2/6980a2f2c956171f59f43a6a18f87abd.jpg",
      alt: "Wedding photo 3",
    },
    {
      id: 4,
      src: "https://i.pinimg.com/736x/92/73/72/927372dbb09045034a66d01ff48587f7.jpg",
      alt: "Wedding photo 4",
    },
    {
      id: 5,
      src: "https://i.pinimg.com/736x/50/27/d9/5027d93a8d75aa45f29cf4aad75f3973.jpg",
      alt: "Wedding photo 5",
    },
  ];

  return (
    <section className="about-us">
      <div className="container">
        {/* Header */}
        <motion.div
          className="header"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="subtitle">We're Cupido</h3>
          <h1 className="title">Capturing memories that last a lifetime</h1>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div
          className="photo-gallery"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className={`photo-item photo-${index + 1}`}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <img src={photo.src} alt={photo.alt} />
            </motion.div>
          ))}
        </motion.div>

        {/* Description Text */}
        <motion.div
          className="description"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
