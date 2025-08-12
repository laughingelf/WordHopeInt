import React from "react";

const ContactForm = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-8">
          Contact Us
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          className="grid gap-6"
        >
          {/* Netlify Hidden Input */}
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          {/* Name */}
          <div>
            <label className="block text-green-900 font-semibold mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full border text-green-700 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-green-900 font-semibold mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full border text-green-700 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-green-900 font-semibold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              className="w-full border text-green-700 border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#e01b24] hover:bg-red-800 text-white px-8 py-3 rounded-md text-lg font-semibold transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
