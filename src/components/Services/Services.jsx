import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    title: "Wedding Photography",
    description:
      "Capturing the timeless essence of your special day with elegance and emotion.",
    image:
      "https://i.pinimg.com/736x/cc/ad/32/ccad32362b224d1351d2063ee1fa224d.jpg",
  },
  {
    title: "Candid Photography",
    description:
      "Real, unscripted moments that showcase genuine emotions and smiles.",
    image:
      "https://i.pinimg.com/736x/c0/f8/3b/c0f83b6d84a90ead3b2af2ac161b9443.jpg",
  },
  {
    title: "Cinematography",
    description:
      "Story-driven wedding films that beautifully narrate your journey with cinematic visuals.",
    image:
      "https://i.pinimg.com/736x/88/fa/26/88fa2607992eeb7232384c99ad5c7b37.jpg",
  },
  {
    title: "Album Design",
    description:
      "Handcrafted layouts designed to preserve your memories in style and grace.",
    image:
      "https://i.pinimg.com/736x/71/5b/78/715b78fd957ddb903e9bee3bb8e6a0b0.jpg",
  },
  {
    title: "Pre-Wedding Shoots",
    description:
      "Creative storytelling sessions that celebrate your love before the big day.",
    image:
      "https://i.pinimg.com/736x/3e/1d/7f/3e1d7f42dd8ddbdbb762210a01947bb6.jpg",
  },
  {
    title: "Event Coverage",
    description:
      "Complete photography solutions for birthdays, engagements, and all life events.",
    image:
      "https://i.pinimg.com/736x/eb/73/1d/eb731d7fe1437bbba6fe4babb188330e.jpg",
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services-section" id="services">
      <motion.h2
        className="services-heading"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <motion.p
        className="services-subheading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We offer a range of professional photography and film services to
        capture your precious moments.
      </motion.p>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="service-image"
              loading="lazy"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="services-buttons"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <button
          className="service-button"
          onClick={() => navigate("/wedding-albums")}
        >
          View Wedding Albums
        </button>
        <button
          className="service-button"
          onClick={() => navigate("/portfolio")}
        >
          Gallery
        </button>
      </motion.div>
    </section>
  );
};

export default Services;
