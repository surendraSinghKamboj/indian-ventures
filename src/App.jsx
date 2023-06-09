import React from "react";
import Navbar from "./components/Home-Page/Navbar/Navbar";
import TopImgSlider from "./components/Home-Page/Hero-section/ImgSlider/TopImgSlider";
import {slides} from "./components/Home-Page/Hero-section/ImgSlider/SliderData.json"
const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <TopImgSlider data={slides} />
    </section>
  );
};

export default App;
