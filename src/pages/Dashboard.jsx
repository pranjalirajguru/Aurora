// src/pages/Dashboard.jsx
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "File a Complaint",
      description:
        "A safe space for victims to confidentially file complaints. We understand that not everyone can take a public stand — we’re here to listen, protect, and take the first step together.",
      button: "File Complaint",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Law Bot",
      description:
        "An AI-powered chatbot designed to spread awareness about women’s rights, legal procedures, and protection laws — because knowledge is your first line of defense.",
      button: "Open Law Bot",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "AI Therapist",
      description:
        "Meet your personal AI therapist — a calm, compassionate avatar that listens, guides, and helps victims heal emotionally while ensuring they are never alone in their journey.",
      button: "Talk to AI Therapist",
      color: "from-pink-400 to-rose-500",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 aurora-bg text-[#1B003F]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-5xl font-bold text-[#4B0082] mb-4"
      >
        Welcome to Aurora Dashboard
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-lg text-[#1B003F]/80 mb-10 max-w-2xl"
      >
        Empowering women with knowledge, safety, and emotional support.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-8 hover:shadow-purple-300/50 hover:bg-white/60 transition-all duration-300`}
          >
            <h2 className="text-2xl font-semibold text-[#4B0082] mb-3">
              {feature.title}
            </h2>
            <p className="text-[#1B003F]/80 mb-6">{feature.description}</p>
            <button
              className={`px-6 py-2 rounded-full bg-gradient-to-r ${feature.color} text-white font-medium hover:opacity-90 transition`}
            >
              {feature.button}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
