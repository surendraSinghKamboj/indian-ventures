import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Home-Page/Navbar/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home-Page/Home";
import '../src/index.css';
import GoToTopButton from "./components/GoToTopButton";
import Industries from "./components/IndustriesWeServe/Industries";
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
      </Routes>
      <GoToTopButton/>
    </section>
  );
};

export default App;
