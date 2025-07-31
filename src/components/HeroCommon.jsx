import React from "react";
import { motion } from "framer-motion";

const HeroCommon = ({
  heading = "About Us",
  subheading = "Discover the mission, the people, and the heart behind Word Hope International.",
  primaryCtaText = "Donate",
  primaryCtaLink = "/donate",
  secondaryCtaText = "Get Involved",
  secondaryCtaLink = "/contact",
  backgroundImage = "/img/about-hero.jpeg"
}) => {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center text-center px-6 md:px-12 py-20 overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-100 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {heading}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-100 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {subheading}
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {primaryCtaText && (
            <motion.a
              href={primaryCtaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#e01b24] hover:bg-red-800 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
            >
              {primaryCtaText}
            </motion.a>
          )}
          {secondaryCtaText && (
            <motion.a
              href={secondaryCtaLink}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-[#e01b24] text-gray-100 hover:text-[#e01b24] hover:bg-red-50 px-6 py-3 rounded-md text-lg font-semibold transition"
            >
              {secondaryCtaText}
            </motion.a>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroCommon;
