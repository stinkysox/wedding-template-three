import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import WeddingAlbums from "./components/WeddingAlbums/WeddingAlbums";
import ContactForm from "./components/ContactForm/ContactForm";
import Gallery from "./components/Gallery/Gallery";
import Services from "./components/Services/Services";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Banner />} />
        <Route path="/Wedding Albums" element={<WeddingAlbums />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/portfolio" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
