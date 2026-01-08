import { FaGoogle, FaGithub } from "react-icons/fa";
import SignupForm from "../components/forms/signup_form"; 
const SignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Join FreelanceHub
        </h1>
        <p className="text-lg md:text-xl">
          Create your profile and start hiring or getting hired today.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center flex-1 px-4 md:px-12 py-12 gap-12">
        
        {/* Illustration / Image */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://www.mediabistro.com/wp-content/uploads/2016/06/successful-freelancer-repeat-work_opt.jpg"
            alt="Freelancer Illustration"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Signup Form + Social */}
        <div className="w-full max-w-md">
          {/* Social Login */}
          <div className="flex flex-col gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-gray-800 hover:bg-gray-100 transition font-medium shadow">
              <FaGoogle /> Sign up with Google
            </button>
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition font-medium shadow">
              <FaGithub /> Sign up with GitHub
            </button>
          </div>

          <div className="text-center mb-4 text-gray-500">or sign up with email</div>

          {/* Signup Form */}
          <SignupForm />

          {/* Benefits / Info */}
          <div className="mt-6 text-center text-gray-600 text-sm">
            By signing up, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
