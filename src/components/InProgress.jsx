import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Remove if not using react-router

const UnderConstruction = () => {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-white px-6 py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl"
      >
        <h1 className="text-4xl font-bold text-green-900 mb-4">
          This Page is Under Construction
        </h1>
        <p className="text-green-700 text-lg mb-8">
          We're still working on this section of the site. In the meantime, feel free to head back or support the mission.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="bg-[#e01b24] hover:bg-red-800 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
          >
            Go to Homepage
          </Link>
          <Link
            to="/donate"
            className="border border-[#e01b24] text-[#e01b24] hover:bg-red-50 px-6 py-3 rounded-md text-lg font-semibold transition"
          >
            Donate Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default UnderConstruction;
