import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <section className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg"
      >
        <h1 className="text-4xl font-bold text-green-900 mb-4">Thank You!</h1>
        <p className="text-lg text-green-800 mb-8">
          Your donation has been received and will make a lasting impact in the lives of those we serve.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#e01b24] hover:bg-red-700 text-white px-6 py-3 rounded-md text-md font-medium transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default SuccessPage;
