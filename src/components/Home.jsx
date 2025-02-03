import React from "react";
import { FaCheck, FaLightbulb, FaSmile } from "react-icons/fa"; 
import { Link } from "react-router-dom";
import creative1 from "../assets/creative1.png";
import photography2 from "../assets/photography2.png";
import photography1 from "../assets/photography1.png";
import print from "../assets/print.png";

const Home = () => (
  <section className="bg-white text-[#3C3E50]">
    {/* Hero Section */}
    <div
      className="relative bg-cover bg-center h-[420px] md:h-[620px] flex items-center justify-center"
      style={{ backgroundImage: `url(${photography1})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          We Bring Brands to Life
        </h1>
        <p className="text-base md:text-lg text-white mb-6">
          Crafting creative media solutions that make your brand stand out.
        </p>
        <Link
          to="/contact"
          className="px-6 py-3 md:px-8 md:py-4 bg-[#002D72] text-white font-bold border-2 border-[#002D72]"
        >
          Start Your Journey
        </Link>
      </div>
    </div>

    {/* About Section */}
    <section className="bg-[#F8F9FA] text-[#3C3E50] py-12 md:py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Who We Are Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#002D72] flex-1">
            <h2 className="text-2xl font-bold mb-4 text-[#002D72]">Who We Are</h2>
            <p className="text-base md:text-lg text-[#555]">
              At <strong>Identity Express Ltd</strong>, we are a creative media agency dedicated to transforming brands. We specialize in blending innovative design, high-quality prints, and impactful media solutions. 
            </p>
          </div>

          {/* Our Mission Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#FF5722] flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-[#FF5722]">Our Mission</h3>
            <p className="text-base md:text-lg text-[#555]">
              Our mission is simple: <strong>To help businesses grow</strong> by delivering cutting-edge media solutions that elevate brands and connect with their target audience.
            </p>
          </div>

          {/* Why Choose Us Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-[#4CAF50] flex-1">
            <h3 className="text-2xl font-semibold mb-4 text-[#4CAF50]">Why Choose Us?</h3>
            <ul className="list-none text-base md:text-lg text-[#555] space-y-4">
              <li><strong>Innovation:</strong> We stay ahead of trends, using the latest technologies.</li>
              <li><strong>Quality:</strong> Every project meets the highest standards.</li>
              <li><strong>Collaboration:</strong> We involve our clients in the creative process.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* Client Stats & Achievements */}
    <div className="bg-[#F8F9FA] py-12 md:py-16 text-center">
      <h3 className="text-3xl md:text-4xl font-semibold mb-8 md:mb-12 text-[#333]">Our Achievements</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Projects Completed */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <FaCheck className="text-[#2D6A4F] text-5xl md:text-6xl mb-4" />
          <p className="text-base md:text-lg text-[#777]">Projects Completed</p>
          <p className="text-3xl md:text-4xl font-semibold text-[#2D6A4F]">350+</p>
        </div>

        {/* Creative Ideas */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <FaLightbulb className="text-[#FFB400] text-5xl md:text-6xl mb-4" />
          <p className="text-base md:text-lg text-[#777]">Creative Ideas</p>
          <p className="text-3xl md:text-4xl font-semibold text-[#FFB400]">500+</p>
        </div>

        {/* Happy Clients */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
          <FaSmile className="text-[#FF6F61] text-5xl md:text-6xl mb-4" />
          <p className="text-base md:text-lg text-[#777]">Happy Clients</p>
          <p className="text-3xl md:text-4xl font-semibold text-[#FF6F61]">200+</p>
        </div>
      </div>
    </div>

    {/* Our Services */}
    <div className="bg-white py-12 md:py-16 px-4 md:px-6">
      <h3 className="text-3xl md:text-4xl font-semibold text-center mb-8 md:mb-10">Our Expertise</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
    <section className="bg-white py-12 md:py-16 px-4 md:px-6 text-center">
      <h3 className="text-3xl md:text-4xl font-semibold mb-6">What Our Clients Say</h3>
      <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10">
        See what our satisfied clients have to say about working with us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-[#3C3E50] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <svg
            className="h-10 md:h-12 mx-auto mb-4 text-white"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p className="italic text-white">
            “Identity Express transformed our brand and helped us reach new heights. Highly recommend!”
          </p>
          <p className="mt-4 font-semibold text-white">— Joseph Mwangi</p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#3C3E50] p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
          <svg
            className="h-10 md:h-12 mx-auto mb-4 text-white"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <p className="italic text-white">
            “Their attention to detail and creative approach are unmatched. Absolutely love their work!”
          </p>
          <p className="mt-4 font-semibold text-white">— Sarah Wanjiru</p>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <div className="max-w-6xl mx-auto text-center py-12 md:py-16 px-4 md:px-6 bg-white">
      <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-[#333]">Let’s Build Your Brand Together</h3>
      <p className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8 md:mb-10 text-[#555]">
        Whether you're starting fresh or rebranding, our team is ready to create something exceptional. Let's collaborate and bring your vision to life.
      </p>
      <Link
        to="/contact"
        className="px-6 py-3 md:px-8 md:py-4 bg-[#002D72] text-white font-bold border-2 border-[#002D72]"
      >
        Get in Touch
      </Link>
    </div>
  </section>
);

export default Home;