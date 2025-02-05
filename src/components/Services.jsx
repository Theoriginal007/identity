import React from "react";
import project8 from "../assets/projects_8.jpg";
import project6 from "../assets/projects_6.jpg";
import project7 from "../assets/projects_7.jpg";
import project2 from "../assets/projects_2.jpg";
import project14 from "../assets/projects_14.jpg";

const services = [
  {
    title: "Card Printing",
    image: project8,
    description:
      "We offer high-quality card printing services, whether it's business cards, membership cards, or personalized designs. Get professional results that leave a lasting impression."
  },
  {
    title: "Design Work",
    image:  project6,
    description:
      "Our expert designers craft stunning visuals aligned with your brand. From logos to full branding suites, we bring your vision to life with creativity and precision."
  },
  {
    title: "Corporate Photography",
    image:  project7,
    description:
      "Capture the essence of your business with professional photography. Whether it's conferences, seminars, or team portraits, we provide high-quality imagery that tells your brand's story."
  },
  {
    title: "Company Profile Headshots",
    image:  project2,
    description:
      "Polished and professional headshots for your team. Ideal for websites, social media, and marketing materials to enhance your company's credibility and image."
  },
  {
    title: "Print Branding",
    image:  project14,
    description:
      "From brochures to banners, we deliver print branding solutions that ensure your business stands out. High-quality materials tailored to your marketing needs."
  }
];

const Services = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
        Our Services
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12 leading-relaxed">
        We provide professional services to help elevate your brand, capture
        your business essence, and create high-quality branding and printing solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl 
                       transition-transform transform hover:scale-105 duration-300 overflow-hidden"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 sm:h-64 lg:h-80 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed tracking-wide">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
