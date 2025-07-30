import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const impactData = [
  { label: "Patients Treated", value: 1200, suffix: "+" },
  { label: "Families Supported", value: 500, suffix: "+" },
  { label: "Pastors Trained", value: 12 },
  { label: "Schools Established", value: 3 },
  { label: "Meals Distributed", value: 8000, suffix: "+" },
  { label: "Chicken Farms Launched", value: 2 },
];

const ImpactSection = () => {
  return (
    <section className="bg-green-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Impact
        </motion.h2>

        <motion.p
          className="text-lg text-green-800 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Through local partnerships and hands-on outreach, we’ve been able to serve communities in meaningful ways. Here’s a snapshot of the impact we’re making together.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-[#e01b24]">
                <CountUp
                  end={item.value}
                  duration={2}
                  suffix={item.suffix || ""}
                />
              </div>
              <p className="text-green-800 text-lg mt-2 text-center">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
