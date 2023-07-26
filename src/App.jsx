import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Home-Page/Navbar/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home-Page/Home";
import '../src/index.css';
import Ios from "./components/Home-Page/Navbar/Ios";
import GoToTopButton from "./components/GoToTopButton";
import Android from "./components/Home-Page/Navbar/Android";
import Industries from "./components/IndustriesWeServe/Industries";
import Appdevelopement from "./components/Home-Page/Navbar/Appdevelopement";
import Webapp from "./components/Home-Page/Navbar/Webapp";
import  Pyramid  from "./components/Pyramid";
import About from "./components/Home-Page/About";
const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About/>} />
        <Route path="/ios" element={<Ios/>} />
        <Route path="/ios" element={<Ios/>} />
        <Route path="/android" element={<Android/>}></Route>
       <Route path="/appdevelopment" element={<Appdevelopement/>}></Route>
       <Route path="/webdevelopment" element={<Webapp/>}></Route>
       <Route path="/pyramid" element={<Pyramid />}></Route>
      </Routes>
      <GoToTopButton/>
    </section>
  );
};

export default App;
