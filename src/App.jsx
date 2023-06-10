import React from "react";
import {Routes, Route} from 'react-router-dom';
import Navbar from "./components/Home-Page/Navbar/Navbar";
import TopImgSlider from "./components/Home-Page/Hero-section/ImgSlider/TopImgSlider";
import {slides} from "./components/Home-Page/Hero-section/ImgSlider/SliderData.json"
import Footer from "./components/Home-Page/Footer/Footer";
import Contact from "./components/Contact";
const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      
        <TopImgSlider data={slides} />
        <Footer/>
      <Routes>
        <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </section>
  );
};

export default App;
