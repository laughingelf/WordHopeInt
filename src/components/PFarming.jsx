import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const harvestGoals = [
  "Feed vulnerable families in surrounding villages",
  "Supply fresh produce to Word Hope’s school, medical clinic, and mission teams",
  "Create job opportunities and training for local workers",
  "Model sustainable agriculture practices",
];

const trainingBenefits = [
  "Improve yields and preserve soil health",
  "Teach sustainable, faith‑grounded techniques",
  "Bring dignity to farming as a calling from God",
];

const GrowingFeedingCommunities = () => {
  return (
    <>
      {/* Intro / Hero Copy */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-4xl mx-auto" {...fadeInUp}>
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 mb-3">
            🌱 Growing and Feeding Community
          </h1>
          <p className="text-green-700 text-lg font-medium mb-2">
            Meeting the Challenge of Hunger in Tanzania
          </p>
          <p className="text-green-800 text-lg leading-relaxed">
            At the core of Word Hope International is a calling to bring hope and healing through hunger relief.
            From the very beginning, our mission has been simple but urgent: to fight food insecurity and nourish families—both physically and spiritually.
          </p>
        </motion.div>
      </section>

      {/* Vision Rooted in the Land */}
      <section className="bg-green-50 py-12 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-center" {...fadeInUp}>
          <img
            src="/img/feeding3.jpeg"
            alt="Fertile farmland dedicated to community impact"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">🌍 A Vision Rooted in the Land</h2>
            <p className="text-green-800">
              Word Hope began with the purchase of 100 acres of farmland, along with an additional 10‑acre gift from a local village.
              Today—through the overwhelming generosity of surrounding communities—the project has expanded to an incredible{" "}
              <span className="font-semibold">200 acres</span> dedicated to sustainable farming, education, and life‑giving ministry.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Preparing the Ground for Harvest */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-start" {...fadeInUp}>
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">🚜 Preparing the Ground for Harvest</h2>
            <p className="text-green-800 mb-4">
              Land preparation is set to begin in mid to late August, with the first crop expected by early December.
              This initial harvest will launch a long‑term strategy to:
            </p>
            <ul className="list-disc pl-6 text-green-800 space-y-2">
              {harvestGoals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
          <img
            src="/img/feeding.jpeg"
            alt="Rice distribution to families"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* On-Site Leadership & Labor */}
      <section className="bg-white py-6 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-center" {...fadeInUp}>
          <img
            src="/img/feeding4.jpeg"
            alt="Farm foreman and farmhands at work"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">👷 On‑Site Leadership & Labor</h2>
            <p className="text-green-800">
              To ensure success, Word Hope has secured a <span className="font-semibold">Farm Foreman</span> and{" "}
              <span className="font-semibold">six full‑time farmhands</span> to oversee day‑to‑day operations.
              This team brings local knowledge and year‑round dedication to planting, harvesting, and maintenance—building capacity and stewardship within the community.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Farming God's Way */}
      <section className="bg-green-50 py-16 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-start" {...fadeInUp}>
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">📖 Farming God’s Way: Training Local Farmers</h2>
            <p className="text-green-800 mb-4">
              A cornerstone of our agricultural vision is <span className="font-semibold">Farming God’s Way</span>,
              a biblically‑based training program that teaches farmers to steward the land with wisdom and care.
              Word Hope will host quarterly on‑site sessions that are designed to:
            </p>
            <ul className="list-disc pl-6 text-green-800 space-y-2">
              {trainingBenefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <img
            src="/img/feeding2.jpeg"
            alt="Farming God's Way training"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </motion.div>
      </section>

      {/* Chicken Farm */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-start" {...fadeInUp}>
          <img
            src="/img/about-mission.jpeg"
            alt="Chicken farm initiative"
            className="w-full h-72 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-900 mb-2">🐓 Chicken Farm: Eggs for Nutrition & Sustainability</h2>
            <p className="text-green-800 mb-4">
              To further support the nutritional needs of the community, Word Hope is developing an on‑site chicken farm.
              This initiative will:
            </p>
            <ul className="list-disc pl-6 text-green-800 space-y-2">
              <li>Supply eggs for families, students, and patients</li>
              <li>Improve local nutrition</li>
              <li>Serve as a training and employment opportunity</li>
              <li>Support long‑term sustainability for the ministry</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* More Than a Farm — It’s a Ministry */}
      <section className="bg-green-50 py-16 px-6 md:px-12">
        <motion.div className="max-w-5xl mx-auto" {...fadeInUp}>
          <h2 className="text-2xl font-bold text-green-900 mb-2">🤝 More Than a Farm—It’s a Ministry</h2>
          <p className="text-green-800">
            This is about more than crops and chickens. It’s about restoring hope, rebuilding dignity, and renewing communities through practical acts of love.
            Every seed planted and every meal provided is a testament to God’s provision and the power of working together.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 px-6 md:px-12 text-center">
        <motion.div className="max-w-3xl mx-auto" {...fadeInUp}>
          <p className="text-green-900 text-xl font-semibold mb-6">
            “Join us in growing a future rooted in faith.”
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/donate"
              className="bg-[#e01b24] text-white font-semibold px-6 py-3 rounded-md hover:opacity-90"
            >
              Donate to the Farming Project
            </a>
            <a
              href="/contact"
              className="border border-[#e01b24] text-[#e01b24] font-semibold px-6 py-3 rounded-md hover:bg-[#e01b24]/10"
            >
              Sponsor a Farmer’s Training
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default GrowingFeedingCommunities;
