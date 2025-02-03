import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6 md:px-12">
      <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Get in Touch</h2>

      <p className="text-lg text-center text-gray-600 mb-12">
        We’d love to hear from you. Whether you have a question, suggestion, or just want to say hello, don’t hesitate to reach out to us.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-12">
        {/* Left Column (Contact Details) */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-lg text-gray-600 mb-6">
            Call us: <strong className="text-blue-600">0725 328 827</strong> |{" "}
            <strong className="text-blue-600">0705 450 051</strong>
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Email: <a href="mailto:identityexpressid@gmail.com" className="text-blue-600">identityexpressid@gmail.com</a>
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Address: 1234 Street Name, Nairobi, Kenya
          </p>
          <div className="text-2xl text-gray-700 mb-6">
            <p className="font-medium">Follow us on social media:</p>
            <div className="flex space-x-6 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column (Form) */}
        <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
          <form action="#" method="POST">
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="mt-12">
        <p className="text-xl text-center text-gray-700 mb-4">Find us on the map:</p>
        <div className="w-full h-72 bg-gray-200 rounded-lg">
          {/* Embed Google Map centered on Nairobi, Kenya */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3994.6199949815177!2d36.81722311531761!3d-1.2863890358089517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f169cb586be27%3A0x7b62a029b8037ee4!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1627488202012!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
