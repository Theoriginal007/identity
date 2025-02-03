import React, { useState } from "react";
import { FaCheck, FaLightbulb, FaSmile, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import creative1 from "../assets/creative1.png";
import photography2 from "../assets/photography2.png";
import photography1 from "../assets/photography1.png";
import print from "../assets/print.png";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="bg-white text-[#3C3E50]">
      {/* Navbar */}
      <nav className="bg-[#002D72] text-white p-4">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">Identity Express</Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-[#FF5722]">Home</Link>
            <Link to="/services" className="hover:text-[#FF5722]">Services</Link>
            <Link to="/about" className="hover:text-[#FF5722]">About</Link>
            <Link to="/contact" className="hover:text-[#FF5722]">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#002D72] text-white py-4 space-y-4 text-center">
          <Link to="/" className="block">Home</Link>
          <Link to="/services" className="block">Services</Link>
          <Link to="/about" className="block">About</Link>
          <Link to="/contact" className="block">Contact</Link>
        </div>
      )}

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${photography1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center px-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            We Bring Brands to Life
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6">
            Crafting creative media solutions that make your brand stand out.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#002D72] text-white font-bold border-2 border-[#002D72]"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[#F8F9FA] text-[#3C3E50] py-16">
        <div className="max-w-full mx-auto text-center">
          <div className="flex flex-wrap justify-around gap-8">
            {/* Who We Are Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[280px] max-w-[400px] border-l-4 border-[#002D72]">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#002D72]">Who We Are</h2>
              <p className="text-lg text-[#555]">
                At <strong>Identity Express Ltd</strong>, we are a creative media agency dedicated to transforming brands...
              </p>
            </div>

            {/* Our Mission Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[280px] max-w-[400px] border-l-4 border-[#FF5722]">
              <h3 className="text-3xl font-semibold mb-4 text-[#FF5722]">Our Mission</h3>
              <p className="text-lg text-[#555]">
                Our mission is simple: <strong>To help businesses grow</strong> by delivering cutting-edge media solutions...
              </p>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex-1 min-w-[280px] max-w-[400px] border-l-4 border-[#4CAF50]">
              <h3 className="text-3xl font-semibold mb-4 text-[#4CAF50]">Why Choose Us?</h3>
              <ul className="list-none text-lg text-[#555] space-y-4">
                <li><strong>Innovation:</strong> We stay ahead of trends...</li>
                <li><strong>Quality:</strong> Every project meets the highest standards...</li>
                <li><strong>Collaboration:</strong> We involve our clients...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stats & Achievements */}
      <div className="bg-[#F8F9FA] py-16 px-6 text-center">
        <h3 className="text-4xl font-semibold mb-12 text-[#333]">Our Achievements</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaCheck className="text-[#2D6A4F] text-6xl mb-4" />
            <p className="text-lg text-[#777]">Projects Completed</p>
            <p className="text-4xl font-semibold text-[#2D6A4F]">350+</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaLightbulb className="text-[#FFB400] text-6xl mb-4" />
            <p className="text-lg text-[#777]">Creative Ideas</p>
            <p className="text-4xl font-semibold text-[#FFB400]">500+</p>
          </div>
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
            <FaSmile className="text-[#FF6F61] text-6xl mb-4" />
            <p className="text-lg text-[#777]">Happy Clients</p>
            <p className="text-4xl font-semibold text-[#FF6F61]">200+</p>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="bg-white py-16 px-6">
        <h3 className="text-4xl font-semibold text-center mb-10">Our Expertise</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="text-center">
            <img src={creative1} alt="Creative Design" className="w-full h-auto"/>
            <p className="mt-4 text-xl font-semibold">Creative Design</p>
          </div>
          <div className="text-center">
            <img src={photography2} alt="Photography" className="w-full h-auto"/>
            <p className="mt-4 text-xl font-semibold">Photography Services</p>
          </div>
          <div className="text-center">
            <img src={print} alt="Print Services" className="w-full h-auto"/>
            <p className="mt-4 text-xl font-semibold">Print Services</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="bg-white py-16 px-6 text-center">
        <h3 className="text-4xl font-semibold mb-6">What Our Clients Say</h3>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          See what our satisfied clients have to say about working with us.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-[#3C3E50] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              className="h-12 mx-auto mb-4 text-white"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H0V18H10V8H0Z"
                fill="white"
              ></path>
            </svg>
            <p className="text-xl text-white italic">
              "Identity Express helped us redefine our brand. Their team brought our vision to life with exceptional creativity and professionalism."
            </p>
            <p className="text-lg text-white mt-4">John Doe, CEO of XYZ Corp</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-[#3C3E50] p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <svg
              className="h-12 mx-auto mb-4 text-white"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H0V18H10V8H0Z"
                fill="white"
              ></path>
            </svg>
            <p className="text-xl text-white italic">
              "Working with Identity Express has been an incredible experience. Their creativity and attention to detail exceeded our expectations."
            </p>
            <p className="text-lg text-white mt-4">Jane Smith, Marketing Manager</p>
          </div>
        </div>
      </section>

    </section>
  );
};

export default Home;
