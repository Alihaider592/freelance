import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import SignupForm from "../components/forms/signup/signup_form";

const SignupPage = () => {
  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4">

      {/* PAGE CONTENT */}
      <motion.div 
        className="max-w-5xl mx-auto py-20"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >

        {/* HEADER */}
        <motion.div variants={itemVariants} className="mb-14 text-center sm:text-left">
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
            Create your account
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Get started as a freelancer or hire top talent in just a few steps.
          </p>
        </motion.div>

        {/* SOCIAL LOGIN */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12 max-w-xl">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 py-3 px-4 
              border rounded-md bg-white hover:bg-gray-100 transition font-medium"
          >
            <FaGoogle /> Continue with Google
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 py-3 px-4 
              rounded-md bg-gray-900 text-white hover:bg-black transition font-medium"
          >
            <FaGithub /> Continue with GitHub
          </motion.button>
        </motion.div>

        {/* DIVIDER */}
        <motion.div variants={itemVariants} className="flex items-center gap-4 my-12 max-w-xl">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs uppercase tracking-wider text-gray-400">
            Or sign up with email
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </motion.div>

        {/* MULTI STEP FORM */}
        <motion.div variants={itemVariants} className="max-w-3xl">
          <SignupForm />
        </motion.div>

        {/* FOOTER */}
        <motion.p variants={itemVariants} className="mt-16 text-xs text-gray-500 text-center sm:text-left">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-gray-900 underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-gray-900 underline">
            Privacy Policy
          </a>.
        </motion.p>

      </motion.div>
    </div>
  );
};

export default SignupPage;
