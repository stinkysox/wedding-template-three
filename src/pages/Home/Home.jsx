import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurServices from "../../components/OurServices/OurServices";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
const Home = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <OurServices />
      <HomeGallery />
      {/* Add more components as needed */}
    </div>
  );
};

export default Home;
