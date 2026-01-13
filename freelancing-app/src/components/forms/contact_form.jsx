import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden"
    >
      {/* Soft Glow */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>

      <h3 className="text-2xl font-bold text-gray-800 mb-6 relative z-10">
        Send us a message
      </h3>

      <form className="space-y-5 relative z-10">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl text-white font-semibold text-lg
                     bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600
                     hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          Send Message
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
