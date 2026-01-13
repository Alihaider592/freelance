import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../components/forms/contact_form";

const Contact = () => {
  return (
    <div className="w-full bg-slate-50 overflow-hidden">

      {/* HERO */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 relative py-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[1200px] mx-auto px-6 text-center text-white"
        >
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Contact <span className="text-white">Freelance</span>
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg">
            Have a question, feedback, or need support? We’d love to hear from you.
          </p>
        </motion.div>
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* LEFT INFO */}
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

        {/* RIGHT FORM */}
        <ContactForm />

      </div>
    </div>
  );
};

export default Contact;
