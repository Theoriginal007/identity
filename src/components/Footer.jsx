import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-black py-6 px-6 md:px-12">
      {/* Brand Name */}
      <div className="text-center mb-4">
        <h2 className="text-lg md:text-xl font-bold">Identity Express</h2>
        <p className="text-gray-600 text-sm">Bringing your identity to life.</p>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4 flex-wrap">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-6 h-6 text-blue-600 hover:text-blue-800 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 text-blue-400 hover:text-blue-600 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-pink-600 hover:text-pink-800 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-blue-700 hover:text-blue-900 transition" />
        </a>
      </div>

      {/* Contact Email */}
      <div className="text-center mb-4">
        <p className="text-gray-600 text-sm">
          For inquiries, email us at:{" "}
          <a href="mailto:contact@identityexpress.com" className="text-blue-500 hover:text-blue-700 transition">
            contact@identityexpress.com
          </a>
        </p>
      </div>

      {/* Copyright Text */}
      <div className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Identity Express. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
