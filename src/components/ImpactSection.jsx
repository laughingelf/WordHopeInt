import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const impactData = [
  { label: "Evangelism Reached", value: 1274 },
  { label: "Decisions for Christ", value: 477 },
  { label: "Pastors Trained", value: 42 },
  { label: "Farming Trainees", value: 147 },
  { label: "Women Empowered", value: 919 },
  { label: "Hygiene Bags Distributed", value: 800 },
  { label: "Pounds of Rice Given", value: 1800 },
  { label: "Children Ministered To", value: 528 },
  { label: "Mosquito Nets Given", value: 75 },
  { label: "Eyeglasses Provided", value: 125 },
];

const ImpactSection = () => {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-900 text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Summer 2025 Mission Trip – Qandach, Tanzania
        </motion.h2>

        {/* Overview */}
        <motion.p
          className="text-lg text-green-800 max-w-4xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          In Summer 2025, our mission team served the people of Qandach Village,
          Tanzania through medical outreach, evangelism, discipleship, and
          humanitarian aid. A fully functional medical clinic was operated by a
          compassionate team of doctors and nurses, touching lives with healing
          and hope. Evangelism efforts reached 1,274 people, with 477 decisions
          for Christ. Forty-two local pastors were trained, 147 learned Farming
          God’s Way, and 919 women attended hygiene classes—with 800 bags
          distributed. Our team shared 1,800 pounds of rice, 528 children were
          ministered to, 75 mosquito nets were given out, and 125 glasses were
          fitted by our optometry team. Every effort reflected the love of
          Christ, bringing hope and lasting transformation.
        </motion.p>

        {/* Stats */}
        <motion.h3
          className="text-3xl font-bold text-center text-green-900 mb-8"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Impact by the Numbers
        </motion.h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#e01b24]">
                <CountUp end={item.value} duration={2} suffix={item.suffix || ""} />
              </div>
              <p className="text-green-800 text-lg mt-2 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="/project-updates"
            className="bg-[#e01b24] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:opacity-90 transition"
          >
            View Project Updates
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
