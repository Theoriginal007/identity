import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from './components/Home';
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  


const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer (Always Visible) */}
      <Footer />
    </div>
  );
};

export default App;
