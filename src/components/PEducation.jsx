import React from "react";
import { motion } from "framer-motion";
import HeroCommon from "../components/HeroCommon"; // adjust if needed

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const educators = [
  {
    name: "Sharon Prince",
    creds: "M.A. in Early Childhood Education, Retired Librarian",
  },
  {
    name: "Tammy Ledesma",
    creds: "B.S. in Elementary Education & M.S. in Library Science, Retired",
  },
  {
    name: "Lesley Norris",
    creds:
      "B.S. in Elementary Education (Math emphasis) & M.A. in Library Science",
  },
  {
    name: "Susan Buckles",
    creds: "B.S. in Education, Retired",
  },
];

const curriculumPoints = [
  "Aligns with Tanzanian national education guidelines",
  "Offers a holistic approach—spiritual, academic, emotional, and social",
  "Builds literacy, numeracy, leadership, and life skills",
  "Integrates Biblical values into daily lessons",
  "Prepares students to contribute meaningfully to their communities",
];

const leadershipPoints = [
  "Service-based learning",
  "Civic responsibility",
  "Spiritual formation & faith-building",
];

const EducationAndLeadership = () => {
  return (
    <>
      <HeroCommon
        heading="Education"
        subheading="Changing futures through Christ-centered education and leadership development."
        backgroundImage="/img/education-hero.jpeg"
      />

      <section className="bg-white py-16 px-6 md:px-12">
        {/* Intro / Stat */}
        <motion.div
          className="max-w-4xl mx-auto text-green-900"
          {...fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            📚 Educational &amp; Leadership Development
          </h2>
          <p className="text-lg md:text-xl mb-6">
            <span className="font-semibold">
              Changing Futures Through Christ-Centered Education
            </span>
          </p>
          <p className="text-green-800 mb-4">
            In the villages surrounding Word Hope International’s campus,{" "}
            <span className="font-semibold">
              more than 50% of children between the ages of 4 and 18 have never
              attended a single day of school.
            </span>{" "}
            This heartbreaking reality represents not only a lack of education
            but also a loss of potential, opportunity, and hope. Word Hope is
            committed to changing that.
          </p>
        </motion.div>

        {/* A School for the Forgotten */}
        <motion.div className="max-w-5xl mx-auto mt-12" {...fadeInUp}>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <img
              src="/img/education1.jpeg"
              alt="Children learning in a classroom"
              className="w-full h-72 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                🎓 A School for the Forgotten
              </h3>
              <p className="text-green-800 mb-4">
                Plans are underway to establish a school on the Word Hope
                campus—a place where children left behind by traditional systems
                will find a new beginning. This school will offer access to
                quality education in a nurturing, Christ-centered environment
                that empowers students to:
              </p>
              <ul className="list-disc pl-6 text-green-800 space-y-2">
                <li>
                  Discover their God-given purpose and find passion in learning
                </li>
                <li>
                  Unlock their educational potential by nurturing students
                  academically, emotionally, socially, and spiritually
                </li>
                <li>
                  Rise above generational poverty and provide strength and
                  encouragement
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Guided by Passionate Educators */}
        <motion.div className="max-w-5xl mx-auto mt-16" {...fadeInUp}>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                🧠 Guided by Passionate Educators
              </h3>
              <p className="text-green-800 mb-4">
                To ensure excellence from the ground up, a team of experienced
                educators is actively overseeing the development of the school.
                These leaders bring decades of expertise in early childhood
                education, library sciences, and classroom instruction:
              </p>
              <ul className="space-y-3">
                {educators.map((e) => (
                  <li
                    key={e.name}
                    className="p-3 rounded-md border text-green-900 bg-green-50/50"
                  >
                    <p className="font-semibold">{e.name}</p>
                    <p className="text-green-700 text-sm">{e.creds}</p>
                  </li>
                ))}
              </ul>
              <p className="text-green-800 mt-4">
                Their guidance ensures the future school will be academically
                strong, spiritually grounded, and developmentally appropriate
                for students of all ages.
              </p>
            </div>
            <img
              src="/img/education2.jpeg"
              alt="Educators collaborating"
              className="w-full h-72 object-cover rounded-md shadow-md"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Curriculum with a Purpose */}
        <motion.div className="max-w-5xl mx-auto mt-16" {...fadeInUp}>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <img
              src="/img/education3.jpeg"
              alt="Students reading and writing"
              className="w-full h-72 object-cover rounded-md shadow-md"
              loading="lazy"
            />
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                📘 Curriculum with a Purpose
              </h3>
              <p className="text-green-800 mb-4">
                We are in the early stages of curriculum development, working
                with local and international partners to ensure that our
                program:
              </p>
              <ul className="list-disc pl-6 text-green-800 space-y-2">
                {curriculumPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Developing Future Leaders */}
        <motion.div className="max-w-5xl mx-auto mt-16" {...fadeInUp}>
          <div className="grid gap-6 md:grid-cols-2 items-center">
            <div>
              <h3 className="text-2xl font-bold text-green-900 mb-2">
                🧑‍🏫 Developing Future Leaders
              </h3>
              <p className="text-green-800 mb-4">
                Education at Word Hope is more than academics—it’s about raising
                leaders for tomorrow. Through our programs, students will grow
                in character, courage, and calling. Leadership development will
                include:
              </p>
              <ul className="list-disc pl-6 text-green-800 space-y-2">
                {leadershipPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <img
              src="/img/education4.jpeg"
              alt="Student leaders serving community"
              className="w-full h-72 object-cover rounded-md shadow-md"
              loading="lazy"
            />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default EducationAndLeadership;
