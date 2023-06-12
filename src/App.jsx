import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Home-Page/Navbar/Navbar";
import Contact from "./components/Contact";
import Home from "./components/Home-Page/Home";
import '../src/index.css';
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
    </section>
  );
};

export default App;
