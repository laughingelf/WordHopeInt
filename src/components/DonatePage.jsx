import { useState } from "react";
import { motion } from "framer-motion";
import { loadStripe } from "@stripe/stripe-js";


const donationTiers = [50, 100, 250, 500];

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [isMonthly, setIsMonthly] = useState(false);
  const [customAmount, setCustomAmount] = useState("");

const handleDonate = async () => {
  try {
    const amountToDonate = Number(customAmount) || selectedAmount;

    const response = await fetch("/.netlify/functions/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amountToDonate }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Server Error: ${response.status} – ${errorText}`);
    }

    const data = await response.json();

    if (!data.id) {
      throw new Error("No session ID returned");
    }

    const stripe = await stripePromise;
    const result = await stripe.redirectToCheckout({ sessionId: data.id });

    if (result.error) {
      console.error("Stripe error:", result.error.message);
    }
  } catch (err) {
    console.error("Donate error:", err.message || err);
  }
};




  return (
    <section className="bg-white pt-28 pb-20 px-6 md:px-12 min-h-screen">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-green-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Give Hope. Change Lives.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg text-green-800 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Through your support, we’re reaching communities across Tanzania with healthcare, education, agriculture, and the love of Christ.
        </motion.p>

        {/* Tier Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {donationTiers.map((tier) => (
            <button
              key={tier}
              onClick={() => {
                setSelectedAmount(tier);
                setCustomAmount("");
              }}
              className={`px-6 py-3 rounded-md text-lg font-semibold transition ${
                selectedAmount === tier && !customAmount
                  ? "bg-[#e01b24] text-white"
                  : "bg-green-100 text-green-800 hover:bg-green-200"
              }`}
            >
              ${tier}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <input
          type="number"
          placeholder="Or enter custom amount"
          className="w-full max-w-xs px-4 py-3 border border-green-300 rounded-md mb-6 text-green-900 text-center"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
        />

        {/* Monthly Toggle */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <input
            type="checkbox"
            id="monthly"
            checked={isMonthly}
            onChange={() => setIsMonthly(!isMonthly)}
            className="w-5 h-5 accent-[#e01b24]"
          />
          <label htmlFor="monthly" className="text-green-800 text-md">
            Make this a monthly donation
          </label>
        </div>

        {/* Donate Button */}
        <button
          onClick={handleDonate}
          className="bg-[#e01b24] hover:bg-red-800 text-white px-8 py-4 rounded-md text-lg font-semibold transition"
        >
          Donate {customAmount || selectedAmount ? `$${customAmount || selectedAmount}` : ""}
        </button>

        {/* Optional Testimonial */}
        <motion.div
          className="mt-16 max-w-xl mx-auto text-green-700 italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          "Every dollar you give helps bring dignity and healing to families who have gone without. Your gift makes a difference." – Pastor Daniel, Outreach Leader
        </motion.div>
      </div>
    </section>
  );
};

export default DonatePage;
