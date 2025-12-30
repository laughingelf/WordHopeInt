import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const MotionLink = motion(Link);

  return (
    <section className="relative overflow-hidden py-16 px-6 md:px-12">
      {/* Background image */}
      <img
        src="/img/hero-bg.jpeg"
        alt="Hope and outreach in Africa"
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-50"
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 z-0 bg-green-50/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 md:flex-row md:gap-12">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-3 text-5xl font-bold text-green-900 md:text-6xl">
            Sharing Hope with the People of Tanzania
          </h1>

          {/* 501(c)(3) Trust Line */}
          <p className="mb-4 inline-flex items-center rounded-full border border-green-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-green-800 md:text-sm">
            A Registered 501(c)(3) Nonprofit Organization
          </p>

          <p className="mb-6 text-lg text-green-900/90 md:text-xl">
            Word Hope International provides medical care, sustainable farming,
            education, and spiritual support to communities in Africa.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/donate"
              className="rounded-md bg-[#e01b24] px-6 py-3 text-lg font-semibold text-white transition hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-[#e01b24]/40 focus:ring-offset-2"
            >
              Donate Now
            </MotionLink>

            <MotionLink
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to="/about"
              className="rounded-md border border-[#e01b24] bg-white/70 px-6 py-3 text-lg font-semibold text-[#e01b24] transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-[#e01b24]/30 focus:ring-offset-2"
            >
              Learn More
            </MotionLink>
          </div>

          {/* Optional: small reassurance line */}
          <p className="mt-4 text-sm text-green-900/70">
            Donations support on-the-ground programs and outreach.
          </p>
        </motion.div>

        {/* Right: Logo */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mx-auto w-fit rounded-3xl bg-white/70 p-6 shadow-sm backdrop-blur md:p-8">
            <img
              src="/img/WordHopeLogo.png"
              alt="Word Hope International logo"
              className="mx-auto w-64 max-w-xs md:w-80 md:max-w-sm"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
