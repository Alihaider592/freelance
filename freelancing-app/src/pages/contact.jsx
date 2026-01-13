import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full bg-slate-50 overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 relative py-28 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1200px] mx-auto px-6 text-center text-white relative z-10"
        >
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Contact <span className="text-white">Freelance</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg">
            Have a question, feedback, or need support? We’d love to hear from you.
          </p>
        </motion.div>
      </div>

      {/* ================= CONTACT CONTENT ================= */}
      <div className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>

          <p className="text-gray-600 mb-10">
            Our team is here to help you with anything related to Freelance —
            from account issues to partnerships.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Email</p>
                <p className="text-gray-500">support@freelance.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 flex items-center justify-center text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Phone</p>
                <p className="text-gray-500">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Location</p>
                <p className="text-gray-500">Remote • Worldwide</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden"
        >
          {/* Soft glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6 relative z-10">
            Send us a message
          </h3>

          <form className="space-y-5 relative z-10">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
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
      </div>
    </div>
  );
};

export default Contact;
