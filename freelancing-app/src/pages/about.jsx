import { FaUsers, FaRocket, FaShieldAlt, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen overflow-hidden">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="max-w-[1200px] mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">About Freelance</h1>
          <p className="mt-6 text-lg max-w-2xl mx-auto opacity-90">
            We connect talented freelancers with businesses that need high-quality work — fast, secure, and reliable.
          </p>
        </motion.div>
      </div>

      {/* Who We Are */}
      <div className="max-w-[1200px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Freelance is a modern freelancing platform designed to help professionals
            find meaningful work and businesses hire skilled talent without stress.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Whether you’re a developer, designer, writer, or entrepreneur, Freelance
            gives you the tools to succeed and grow in today’s digital economy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team working"
            className="rounded-3xl shadow-xl max-h-[400px] object-cover"
          />
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-900 mb-16"
          >
            Why Choose Freelance?
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-10">
            {[
              { icon: <FaUsers />, title: "Skilled Talent", text: "Work with verified professionals from all around the world." },
              { icon: <FaBriefcase />, title: "Quality Projects", text: "Find projects that match your expertise and goals." },
              { icon: <FaShieldAlt />, title: "Secure Payments", text: "Your money is protected with safe and transparent transactions." },
              { icon: <FaRocket />, title: "Fast Growth", text: "Grow your career or business with powerful tools." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 rounded-2xl shadow-md text-center hover:scale-105 transition"
              >
                <div className="text-blue-600 text-4xl mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-20 text-center text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to start your journey?
          </h2>
          <p className="mb-8 opacity-90">
            Join Freelance today and connect with the best talent or clients.
          </p>
          <a
            href="/signup"
            className="inline-block px-10 py-4 bg-white text-blue-600 font-semibold rounded-full
                       hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get Started
          </a>
        </motion.div>
      </div>

    </div>
  );
};

export default About;
