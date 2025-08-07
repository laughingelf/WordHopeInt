import React from "react";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
       

        {/* Right: Quote */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-green-900 mb-4">
            A Life Changed
          </h3>
          <p className="text-green-800 text-lg italic mb-6 leading-relaxed">
            “Every gift you give helps bring hope, health, and opportunity to communities in need. Together, we are changing lives and building a brighter future.”
          </p>
          <p className="text-green-700 font-semibold">– – Bo Prince, Executive Director, Word Hope International</p>
        </motion.div>

         {/* Left: Image */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/ag-img.jpeg"
            alt="Testimonial - grateful family"
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </motion.div>


      </div>
    </section>
  );
};

export default TestimonialSection;
