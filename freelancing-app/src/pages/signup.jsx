import { motion } from "framer-motion";
import { FaGoogle, FaGithub } from "react-icons/fa";
import SignupForm from "../components/forms/signup/signup_form";

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4">

      {/* PAGE CONTENT */}
      <div className="max-w-5xl mx-auto py-20">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <h2 className="text-4xl font-semibold text-gray-900 tracking-tight">
            Create your account
          </h2>
          <p className="text-gray-600 mt-2 max-w-xl">
            Get started as a freelancer or hire top talent in just a few steps.
          </p>
        </motion.div>

        {/* SOCIAL LOGIN */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-xl">
          <button className="flex items-center justify-center gap-2 py-3 px-4 
            border rounded-md bg-white hover:bg-gray-100 transition font-medium">
            <FaGoogle /> Continue with Google
          </button>

          <button className="flex items-center justify-center gap-2 py-3 px-4 
            rounded-md bg-gray-900 text-white hover:bg-black transition font-medium">
            <FaGithub /> Continue with GitHub
          </button>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 my-12 max-w-xl">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs uppercase tracking-wider text-gray-400">
            Or sign up with email
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* MULTI STEP FORM */}
        <div className="max-w-3xl">
          <SignupForm />
        </div>

        {/* FOOTER */}
        <p className="mt-16 text-xs text-gray-500">
          By continuing, you agree to our{" "}
          <a href="/terms" className="text-gray-900 underline">
            Terms
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-gray-900 underline">
            Privacy Policy
          </a>.
        </p>

      </div>
    </div>
  );
};

export default SignupPage;
