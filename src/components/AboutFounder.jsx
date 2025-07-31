import React from "react";
import { motion } from "framer-motion";

const AboutFounderSection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/img/founder.jpeg"
            alt="Founder of Word Hope"
            className="rounded-md shadow-md w-full object-cover max-h-[450px]"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
            Meet Our Founder
          </h2>
          <p className="text-lg text-green-800 mb-4 leading-relaxed">
            Word Hope International was born from a vision to uplift Tanzanian communities through compassion, sustainability, and faith.
          </p>
          <p className="text-green-700 mb-4">
            With years of outreach experience and deep partnerships on the ground, our founder stepped into action to meet urgent needs — medical, agricultural, educational, and spiritual.
          </p>
          <p className="text-green-700">
            Today, that vision continues to grow through faithful partnerships, hands-on service, and a commitment to restoring hope where it’s needed most.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounderSection;
