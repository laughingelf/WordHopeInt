import React from "react";
import { motion } from "framer-motion";

const involvementOptions = [
  {
    title: "Give",
    desc: "Support clinics, farming projects, and education through one-time or recurring donations.",
    button: "Donate Now",
    link: "/donate",
  },
  {
    title: "Sponsor",
    desc: "Become a monthly partner and walk alongside a community long-term.",
    button: "Become a Sponsor",
    link: "/donate#monthly",
  },
  {
    title: "Pray",
    desc: "Join us in prayer for the people we serve and the mission ahead.",
    button: "Prayer Requests",
    link: "/contact",
  },
  {
    title: "Volunteer",
    desc: "Help in-person or remotely. Let’s talk about how you can serve.",
    button: "Get Involved",
    link: "/contact",
  },
];

const GetInvolvedSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-green-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Get Involved
        </motion.h2>

        <motion.p
          className="text-lg text-green-800 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Whether you're looking to donate, sponsor, pray, or serve, there’s a place for you to be part of what God is doing through Word Hope International.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          {involvementOptions.map((item, index) => (
            <motion.div
              key={index}
              className="bg-green-50 p-6 rounded-md shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                {item.title}
              </h3>
              <p className="text-green-700 mb-4">{item.desc}</p>
              <a
                href={item.link}
                className="inline-block bg-[#e01b24] hover:bg-red-800 text-white px-5 py-2 rounded-md text-sm font-medium transition"
              >
                {item.button}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
