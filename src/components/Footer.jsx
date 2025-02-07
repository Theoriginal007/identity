import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] text-black py-6 px-6 md:px-12">

      {/* Contact Information */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
        <p className="text-lg text-gray-600 mb-6">
          Call us: <strong className="text-blue-600">0725 328 827</strong> |{" "}
          <strong className="text-blue-600">0705 450 051</strong>
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Email: <a href="mailto:identityexpressid@gmail.com" className="text-blue-600">identityexpressid@gmail.com</a>
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
