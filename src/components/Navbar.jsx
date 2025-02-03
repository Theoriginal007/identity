import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Mobile menu icons
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md py-4 px-6 md:px-12 flex justify-between items-center relative z-50">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Identity Express Logo" className="w-14 h-14" />
        <Link to="/" className="font-extrabold text-lg md:text-xl">
          Identity Express
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-6 text-black font-semibold">
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
      <div 
        className={`absolute top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center space-y-4 md:hidden transform transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 hidden"
        }`}
      >
        <Link to="/" 
          className="hover:text-gray-600 transition"
          onClick={() => { 
            setIsOpen(false);
            window.location.pathname !== "/" && window.location.reload();
          }}
        >Home</Link>
        <Link to="/services" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Services</Link>
        <Link to="/projects" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" className="hover:text-gray-600 transition" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
