// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon for mobile menu
import logo from "../assets/logo.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md py-3 px-6 md:px-12 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Identity Express Logo" className="w-14 h-14" />
        <Link to="/" className="font-extrabold text-lg md:text-xl">
          Identity Express
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-4 lg:space-x-6 text-black font-bold">
        <Link to="/" className="hover:text-gray-600 transition">Home</Link>
        <Link to="/services" className="hover:text-gray-600 transition">Services</Link>
        <Link to="/projects" className="hover:text-gray-600 transition">Projects</Link>
        <Link to="/contact" className="hover:text-gray-600 transition">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden focus:outline-none" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-3 md:hidden">
          <Link to="/" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/projects" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contact" className="hover:text-gray-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
