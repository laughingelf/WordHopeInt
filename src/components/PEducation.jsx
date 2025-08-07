import React from "react";
import { motion } from "framer-motion";
import HeroCommon from "../components/HeroCommon"; // adjust the import if needed

const EducationAndLeadership = () => {
  return (
    <>
      <HeroCommon
        heading="Education & Leadership"
        subheading="Equipping the next generation and empowering community leaders across Tanzania."
        backgroundImage="/img/education-hero.jpeg"
      />

      <section className="bg-white py-16 px-6 md:px-12">
        <motion.p
          className="text-lg text-green-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Word Hope International believes in the transformational power of education and strong leadership. Through focused investment in schools and pastoral training, we’re raising up leaders who will disciple others and create lasting change in their communities.
        </motion.p>

        {/* Section: Establishing Schools */}
        <div className="mb-12">
          <img
            src="/img/education1.jpeg"
            alt="Classroom of students"
            className="w-full max-w-2xl mx-auto rounded-md shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-green-900 mb-2">Establishing Schools</h2>
          <p className="text-green-800">
            Education is a cornerstone of long-term transformation. We are actively working to establish schools in underserved areas, providing children with access to quality education and hope for a brighter future.
          </p>
        </div>

        {/* Section: Pastoral Training */}
        <div className="mb-12">
          <img
            src="/img/education2.jpeg"
            alt="Pastors attending training"
            className="w-full max-w-2xl mx-auto rounded-md shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-green-900 mb-2">Pastoral Training</h2>
          <p className="text-green-800">
            Twice a year, we host intensive pastoral training conferences for local church leaders. These gatherings are designed to equip pastors with sound biblical teaching, leadership development, and encouragement as they shepherd their communities.
          </p>
        </div>
      </section>
    </>
  );
};

export default EducationAndLeadership;
