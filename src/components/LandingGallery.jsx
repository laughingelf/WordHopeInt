import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  "/img/galleryimg.jpeg",
  "/img/clinic.jpeg",
  "/img/food.jpeg",
  "/img/hut-img.jpeg",
  "/img/pastor.jpg",
  "/img/clinic2.jpeg",
];

const GallerySection = () => {
  return (
    <section className="bg-green-50 py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Moments of Hope
        </motion.h2>

        <motion.p
          className="text-lg text-green-800 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          See the heart of our mission in action — clinics, classrooms, fields, and faith coming to life.
        </motion.p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="w-full h-64 rounded overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.a
          href="/gallery"
          className="inline-block bg-[#e01b24] hover:bg-red-800 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Full Gallery
        </motion.a>
      </div>
    </section>
  );
};

export default GallerySection;
