import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {

    const MotionLink = motion(Link);
  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-12">
      {/* Background image */}
      <img
        src="/img/hero-bg.jpeg" // Replace with your actual path
        alt="Hope and outreach in Africa"
        className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
      />

      <div className="absolute inset-0 bg-green-50 opacity-60 z-0"></div> {/* Optional soft overlay */}

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse md:flex-row items-center">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-green-900 mb-4">
            Sharing Hope with the People of Tanzania
          </h1>
          <p className="text-lg md:text-xl text-green-800 mb-6">
            Word Hope International provides medical care, sustainable farming, education, and spiritual support to communities in Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to='/donate'
              className="bg-[#e01b24] hover:bg-red-800 text-white px-6 py-3 rounded-md text-lg font-semibold transition"
            >
              Donate Now
            </MotionLink>
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/about"
              className="border border-[#e01b24] text-[#e01b24] hover:bg-red-50 px-6 py-3 rounded-md text-lg font-semibold transition"
            >
              Learn More
            </MotionLink>
          </div>
        </motion.div>

        {/* Right: Logo or Image */}
        <motion.div
          className="flex-1 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="/img/WordHopeLogo.png"
            alt="Word Hope International logo"
            className="max-w-xs mx-auto md:max-w-sm"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
