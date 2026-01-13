import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import SignupForm from "../components/forms/signup_form";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-hidden">

      {/* ================= HERO ================= */}
      <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-center text-white overflow-hidden">

        {/* soft glowing blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-2 relative z-10"
        >
          Join Freelance
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-lg md:text-xl relative z-10"
        >
          Create your profile and start hiring or getting hired today.
        </motion.p>
      </div>

      {/* ================= MAIN ================= */}
      <div className="flex flex-col md:flex-row justify-center items-center flex-1 px-4 md:px-12 py-12 gap-12">

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block w-1/2"
        >
          <img
            src="https://img.freepik.com/free-photo/medium-shot-man-living-as-digital-nomad_23-2151205371.jpg?semt=ais_incoming&w=740&q=80"
            alt="Freelancer Illustration"
            className="rounded-2xl shadow-lg h-[690px] w-full object-cover"
          />
        </motion.div>

        {/* Signup Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Social Login */}
          <div className="flex flex-col gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-gray-800 hover:bg-gray-100 transition font-medium shadow"
            >
              <FaGoogle /> Sign up with Google
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition font-medium shadow"
            >
              <FaGithub /> Sign up with GitHub
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-4 text-gray-500"
          >
            or sign up with email
          </motion.div>

          {/* Signup Form */}
          <SignupForm />

          {/* Terms */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-center text-gray-600 text-sm"
          >
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default SignupPage;
