import React from "react";
import { motion } from "framer-motion";

const missionItems = [
  {
    title: "Medical Services",
    desc: "Accessible clinics and annual bush outreach to serve the physical needs of rural communities.",
  },
  {
    title: "Sustainable Farming",
    desc: "Empowering families through hands-on hunger relief and agricultural education.",
  },
  {
    title: "Farming God’s Way",
    desc: "Quarterly training that combines faith and sustainable farming to increase local yield.",
  },
  {
    title: "Education",
    desc: "Establishing schools and educational programs that offer long-term opportunities.",
  },
  {
    title: "Pastoral Training",
    desc: "Biannual programs to equip pastors and leaders with biblical knowledge and discipleship tools.",
  },
  {
    title: "Chicken Farm Project",
    desc: "Helping launch local farms that provide food security and income-generating opportunities.",
  },
];

const MissionSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/img/mission.jpeg"
            alt="Word Hope mission in action"
            className="w-full h-auto rounded-md shadow-md object-cover"
          />
        </motion.div>

        {/* Right: Mission Content */}
        <div>
          <motion.h2
            className="text-5xl md:text-5xl font-bold text-green-900 mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Mission
          </motion.h2>

          <motion.p
            className="text-lg text-green-800 mb-8 leading-relaxed text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Word Hope International exists to bring holistic transformation to communities through the love of Christ. We are committed to alleviating hunger, providing quality education, increasing access to medical care, equipping pastors through biblical training, and empowering farmers through sustainable practices like Farming God’s Way. Through faith-driven partnerships and practical outreach, we cultivate hope, restore dignity, and build thriving communities — all for the glory of God.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {missionItems.map((item, i) => (
              <motion.div
                key={i}
                className="bg-green-50 p-4 rounded-md shadow hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-green-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-green-800 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        


      </div>
    </section>
  );
};

export default MissionSection;
