import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutUs from "../../components/AboutUs/AboutUs";
import OurServices from "../../components/OurServices/OurServices";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import WeddingVideos from "../../components/WeddingVideos/WeddingVideos";
const Home = () => {
  return (
    <div>
      <AboutUs />
      <OurServices />
      <HomeGallery />
      <WeddingVideos />
    </div>
  );
};

export default Home;
