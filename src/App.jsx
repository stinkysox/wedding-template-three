import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import WeddingAlbums from "./components/WeddingAlbums/WeddingAlbums";
import ContactForm from "./components/ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Banner />} />
        <Route path="/Wedding Albums" element={<WeddingAlbums />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
