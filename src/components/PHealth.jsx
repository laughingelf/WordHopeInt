import React from "react";
import { motion } from "framer-motion";
import HeroCommon from "../components/HeroCommon"; // adjust if needed

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const highlights = [
  {
    title: "Permanent Medical Clinic",
    text: "Staffed by American and African healthcare professionals, our clinic provides ongoing access to essential care for hundreds of families year-round.",
  },
  {
    title: "Annual Bush Clinics",
    text: "Each summer, mobile teams venture into remote villages to offer free check-ups, treatments, and medicine—bringing care to those who would otherwise go without.",
  },
  {
    title: "Healing with Purpose",
    text: "We combine physical care with spiritual encouragement, praying with patients and sharing the love of Christ in every interaction.",
  },
];

const bushClinicServices = [
  "Free medical treatment",
  "Health checkups",
  "Essential medicines",
  "Health education",
  "Spiritual encouragement and prayer",
];

const yearRoundServices = [
  "Primary care",
  "Maternal and child health",
  "Chronic disease management",
  "Vaccinations and preventative care",
  "Health and wellness education",
];

const HealthAndHealing = () => {
  return (
    <>
      

      {/* Intro */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6">
            Word Hope International
          </h2>
          <p className="text-green-800 text-lg leading-relaxed">
            Word Hope International is committed to bringing compassionate, Christ-centered healthcare to underserved communities in the African bush.
            Through the Health and Healing Clinics, we aim to bridge the gap between urgent medical needs and long-term, high-quality care.
          </p>
        </motion.div>
      </section>

      {/* Our Vision */}
      <section className="bg-green-50 py-12 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <h3 className="text-2xl md:text-3xl font-bold text-green-900 mb-3">🌿 Our Vision</h3>
          <p className="text-green-800">
            To bring physical and spiritual healing by providing year-round and mobile medical care,
            building strong community relationships, and sharing the love of Jesus.
          </p>
        </motion.div>
      </section>

      {/* Highlights */}
      <section className="bg-white py-12 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8" {...fadeInUp}>
          {highlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 text-center border">
              <h3 className="text-xl font-bold text-green-900 mb-2">{item.title}</h3>
              <p className="text-green-800">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Bush Clinics */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start" {...fadeInUp}>
          <img
            src="/img/medical1.jpeg"
            alt="Mobile clinic serving a rural village"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-2">🚐 Bush Clinics</h3>
            <p className="text-green-800 mb-4">
              Each year, American doctors and medical volunteers travel with Word Hope to provide mobile clinics in rural areas. These clinics offer:
            </p>
            <ul className="list-disc pl-6 text-green-800 space-y-2 mb-4">
              {bushClinicServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="text-green-900 font-semibold mb-1">Led by:</p>
            <ul className="text-green-800">
              <li>Dr. Anna Nelson (MD, USA)</li>
              <li>Dr. Carey Nelson (MD, USA)</li>
            </ul>
            <p className="text-green-800 mt-3">
              They oversee the planning and care to ensure each clinic provides quality service and consistent follow-up.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Year-Round Medical Clinic */}
      <section className="bg-white py-4 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start" {...fadeInUp}>
          <div>
            <h3 className="text-2xl font-bold text-green-900 mb-1">🏥 Year-Round Medical Clinic</h3>
            <p className="text-green-700 mb-3 italic">Opening Summer 2026 on the Word Hope campus</p>
            <p className="text-green-800 mb-4">
              Our permanent medical clinic will provide daily care to the community, offering:
            </p>
            <ul className="list-disc pl-6 text-green-800 space-y-2 mb-4">
              {yearRoundServices.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <p className="text-green-900 font-semibold mb-1">Staffed by:</p>
            <ul className="text-green-800">
              <li>Dr. Joseph Sironga (MD, Africa)</li>
              <li>Dr. Fides Maleo (MD, Africa)</li>
            </ul>
            <p className="text-green-800 mt-3">
              These dedicated African physicians bring a deep understanding of local needs and a heart for Christ-centered care.
            </p>
          </div>
          <img
            src="/img/medical2.jpeg"
            alt="Clinic facility and community care"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Sustainable Impact */}
      <section className="bg-green-50 py-16 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto" {...fadeInUp}>
          <h3 className="text-2xl font-bold text-green-900 mb-2">🌍 Sustainable Impact</h3>
          <p className="text-green-800">
            Our clinics are more than a medical service—they are a ministry. We believe every patient deserves to be treated with love,
            dignity, and compassion. By partnering African and American doctors, we’re building a sustainable and locally driven healthcare model.
          </p>
        </motion.div>
      </section>

      {/* Scripture + How You Can Help */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto text-center" {...fadeInUp}>
          <blockquote className="text-green-900 text-lg md:text-xl font-medium mb-6">
            “When Jesus landed and saw a large crowd, he had compassion on them and healed their sick.” — Matthew 14:14
          </blockquote>

          <h3 className="text-2xl font-bold text-green-900 mb-4">🙏 How You Can Help</h3>
          <ul className="grid gap-3 md:grid-cols-2 text-green-800 max-w-3xl mx-auto text-left">
            <li>✅ Donate medical supplies</li>
            <li>✅ Sponsor a mobile clinic trip</li>
            <li>✅ Give toward the new clinic building</li>
            <li>✅ Pray for our doctors and volunteers</li>
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#e01b24] text-white py-12 px-6 md:px-12 text-center">
        <h3 className="text-2xl font-bold mb-4">Be Part of the Healing</h3>
        <p className="mb-6 max-w-xl mx-auto">
          Help us bring quality healthcare and the hope of Christ to families in need. Your donation supports life-saving treatment, supplies, and medical outreach.
        </p>
        <a
          href="/donate"
          className="bg-white text-[#e01b24] font-semibold px-6 py-3 rounded-md hover:bg-gray-100"
        >
          Donate Now
        </a>
      </section>
    </>
  );
};

export default HealthAndHealing;
