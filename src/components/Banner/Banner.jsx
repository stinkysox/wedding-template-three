import React from "react";
import "./Banner.css";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <h3 className="banner-title">About Cupido</h3>
        <h2 className="banner-subtitle">
          They call it magic, we call it memories forever….
        </h2>

        <div className="banner-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80"
            alt="Couple smiling"
            className="banner-image"
          />
        </div>

        <p className="banner-text">
          Based in Kochi, India, Cupido specializes in candid wedding
          photography and videography. We capture your big moments with a
          creative touch, ensuring each frame reflects the beauty and emotion of
          your special day. Our team is committed to delivering high-quality,
          stunning visuals that you will cherish forever.
        </p>
        <p className="banner-text">
          Have a significant occasion coming up? We are here to tell your story
          with precision and care. With a focus on professionalism and
          creativity, we craft timeless memories you can relive for years. We’d
          love the opportunity to be part of your journey and capture it with
          excellence.
        </p>
      </section>
      <OurServices />
      <Testimonials />
    </>
  );
};

export default Banner;
