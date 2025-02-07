import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setIsSubmitting(false);
      return;
    }
    setError("");

    // Send email using mailto
    const mailtoLink = `mailto:identityexpressid@gmail.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;

    // Show success feedback
    setSuccessMessage("Your message has been sent successfully. We'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" }); // Clear the form
    setIsSubmitting(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Get in Touch</h2>

        <p className="text-lg text-center text-gray-600 mb-12">
          We’d love to hear from you. Whether you have a question, suggestion, or just want to say hello, don’t hesitate to reach out to us.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <p className="text-lg text-gray-600 mb-6">
              Call us: <strong className="text-blue-600">0725 328 827</strong> | <strong className="text-blue-600">0705 450 051</strong>
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Email: <a href="mailto:identityexpressid@gmail.com" className="text-blue-600">identityexpressid@gmail.com</a>
            </p>
          </div>

          <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600'} text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
