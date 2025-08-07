import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CancelPage = () => {
  return (
    <section className="min-h-screen bg-red-50 flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        <h1 className="text-4xl font-bold text-red-900 mb-4">Transaction Cancelled</h1>
        <p className="text-lg text-red-800 mb-8">
          It looks like the donation didn’t go through. If this was a mistake, you can try again below.
        </p>
        <Link
          to="/donate"
          className="inline-block bg-[#e01b24] hover:bg-red-700 text-white px-6 py-3 rounded-md text-md font-medium transition"
        >
          Try Again
        </Link>
      </motion.div>
    </section>
  );
};

export default CancelPage;
