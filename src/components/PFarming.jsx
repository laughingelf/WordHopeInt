import { motion } from "framer-motion";

const GrowingFeedingCommunities = () => {
  return (
    <>
     

      {/* Main Content */}
      <section className="bg-white py-16 px-6 md:px-12">
        <motion.p
          className="text-lg text-green-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Word Hope International’s commitment to feeding and growing communities is rooted in sustainable practices and compassionate outreach. Through our agricultural efforts and hunger relief initiatives, we’re building long-term solutions to food insecurity while meeting urgent needs.
        </motion.p>

        {/* Image and Text - Hunger Relief */}
        <div className="mb-12">
          <img
            src="/img/feeding.jpeg"
            alt="Rice distribution to families"
            className="w-full max-w-2xl mx-auto rounded-md shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-green-900 mb-2">Hunger Relief</h2>
          <p className="text-green-800">
            We distributed 1,800 pounds of rice to families in need, providing essential nourishment and a tangible expression of God’s provision. This initiative is part of our larger effort to ensure that no family in the communities we serve goes hungry.
          </p>
        </div>

        {/* Image and Text - Farming God’s Way */}
        <div className="mb-12">
          <img
            src="/img/feeding2.jpeg"
            alt="Farming God's Way training"
            className="w-full max-w-2xl mx-auto rounded-md shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-green-900 mb-2">Farming God's Way</h2>
          <p className="text-green-800">
            147 local farmers were trained in Farming God’s Way—a sustainable and biblically-based agricultural method. These quarterly training sessions help families improve crop yields, steward their land, and break cycles of poverty.
          </p>
        </div>

        {/* Image and Text - Chicken Farm */}
        <div>
          <img
            src="/img/about-mission.jpeg"
            alt="Chicken farm initiative"
            className="w-full max-w-2xl mx-auto rounded-md shadow-md mb-4"
          />
          <h2 className="text-2xl font-bold text-green-900 mb-2">Chicken Farm Initiative</h2>
          <p className="text-green-800">
            Our agricultural outreach includes the launch of chicken farms that provide a sustainable source of protein and income. These farms empower families and help foster community-based food systems.
          </p>
        </div>
      </section>
    </>
  );
};

export default GrowingFeedingCommunities;
