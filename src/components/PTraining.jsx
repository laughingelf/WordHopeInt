import React from "react";
import { motion } from "framer-motion";
import HeroCommon from "../components/HeroCommon"; // adjust path if needed

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const conferenceFeatures = [
  "A week of intensive biblical and leadership training",
  "Access to discipleship tools and ministry resources",
  "Fellowship, encouragement, and prayer",
  "A path to return equipped to serve and lead effectively",
];

const outcomes = [
  "Stronger biblical teaching in local churches",
  "Healthier church leadership and discipleship pathways",
  "Contextualized ministry that serves real community needs",
  "Multiplication as trained pastors equip others",
];

const threeYearPlan = [
  {
    title: "Year 1: Foundations",
    points: [
      "Core biblical theology",
      "Hermeneutics & sermon prep",
      "Personal spiritual formation",
    ],
  },
  {
    title: "Year 2: Shepherding & Mission",
      points: [
      "Pastoral care & counseling",
      "Evangelism & community outreach",
      "Church health & governance",
    ],
  },
  {
    title: "Year 3: Leadership & Multiplication",
    points: [
      "Leadership development & team building",
      "Discipleship systems",
      "Capstone project & Certificate of Completion",
    ],
  },
];

const PastorTraining = () => {
  return (
    <>
      <HeroCommon
        heading="Pastoral Training & Equipping Local Leaders"
        subheading="Strengthening the church by equipping pastors with biblical depth, leadership skills, and practical tools."
        backgroundImage="/img/pastorHero.jpg"
      />

      {/* Intro */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
          <p className="text-green-800 text-lg leading-relaxed">
            In addition to educating children, Word Hope is passionate about strengthening the church through local pastors.
            Many serve without formal training or resources yet lead growing congregations in spiritually hungry communities.
          </p>
          <p className="text-green-800 text-lg leading-relaxed mt-4">
            To equip these leaders, Pastor’s Conferences will be held twice a year at the Word Hope Campus.
          </p>
        </motion.div>
      </section>

      {/* Conferences Overview */}
      <section className="bg-green-50 py-12 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start" {...fadeInUp}>
          <img
            src="/img/pastor1.jpg"
            alt="Pastors gathered for training"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-3">Bi-Annual Pastor’s Conferences</h2>
            <ul className="list-disc pl-6 text-green-800 space-y-2">
              {conferenceFeatures.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Led by Greg Buckles */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 items-start" {...fadeInUp}>
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">Led by Greg Buckles</h2>
            <p className="text-green-800 mb-3">
              These training efforts are led by <span className="font-semibold">Greg Buckles</span>, a partner with Word Hope International and Senior Staff with Global Training Network.
              Greg holds a ThM from Dallas Theological Seminary and brings over 40 years of pastoral experience with a deep passion for equipping indigenous leaders.
            </p>
            <ul className="list-disc pl-6 text-green-800 space-y-2">
              <li>Biblical depth</li>
              <li>Cultural understanding</li>
              <li>Spiritual mentorship</li>
            </ul>
          </div>
          <img
            src="/img/pastor2.jpg"
            alt="Greg Buckles teaching"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Three-Year Program */}
      <section className="bg-green-50 py-16 px-6 md:px-12">
        <motion.div className="max-w-6xl mx-auto" {...fadeInUp}>
          <h2 className="text-2xl font-bold text-green-900 mb-6">Three-Year Training Path</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {threeYearPlan.map((year) => (
              <div key={year.title} className="bg-white border rounded-lg shadow p-6">
                <h3 className="text-xl font-semibold text-green-900 mb-3">{year.title}</h3>
                <ul className="list-disc pl-5 text-green-800 space-y-2">
                  {year.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-green-800 mt-6">
            The training is structured as a three-year program, culminating in a <span className="font-semibold">Certificate of Completion</span> for each pastor.
          </p>
        </motion.div>
      </section>

      {/* Outcomes */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto" {...fadeInUp}>
          <h2 className="text-2xl font-bold text-green-900 mb-3">What This Produces</h2>
          <ul className="grid gap-3 md:grid-cols-2 text-green-800">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2">
                <span className="mt-1">✅</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* Quote + CTA */}
      <section className="bg-green-50 py-16 px-6 md:px-12 text-center">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <blockquote className="text-green-900 text-lg md:text-xl font-medium mb-6">
            “Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela
          </blockquote>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/donate"
              className="bg-[#e01b24] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90"
            >
              Support Pastor Training
            </a>
            <a
              href="/contact"
              className="border border-[#e01b24] text-[#e01b24] font-semibold px-6 py-3 rounded-md hover:bg-[#e01b24]/10"
            >
              Ask About Conferences
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default PastorTraining;
