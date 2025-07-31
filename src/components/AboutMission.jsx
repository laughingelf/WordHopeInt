import React from "react";
import { motion } from "framer-motion";

const AboutMissionSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Mission Text */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-green-800 mb-4 leading-relaxed">
            Word Hope International exists to bring holistic transformation to communities across Tanzania through the love of Christ. We are committed to alleviating hunger, providing quality education, increasing access to medical care, and empowering local leaders through sustainable development and biblical training.
          </p>
          <p className="text-green-700">
            Through partnerships, outreach, and prayerful service, we aim to restore dignity, cultivate hope, and build thriving communities for the glory of God.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src="/img/about-mission.jpeg"
            alt="Outreach in Tanzania"
            className="w-full rounded-md shadow-lg object-cover max-h-[450px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMissionSection;
