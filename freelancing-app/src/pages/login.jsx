import { FaGoogle, FaGithub } from "react-icons/fa";
import LoginForm from "../components/forms/login_form";
const LoginPage = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Welcome Back
        </h1>
        <p className="text-lg md:text-xl">
          Log in to manage projects, hire talent, or grow your freelance career.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-center items-center flex-1 px-4 md:px-12 py-12 gap-12">

        {/* Illustration */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/secure-mobile-login-data-privacy_1058841-1739.jpg"
            alt="Login Illustration"
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Login Form */}
        <div className="w-full max-w-md">

          {/* Social Login */}
          <div className="flex flex-col gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-gray-800 hover:bg-gray-100 transition font-medium shadow">
              <FaGoogle /> Continue with Google
            </button>

            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white hover:bg-gray-800 transition font-medium shadow">
              <FaGithub /> Continue with GitHub
            </button>
          </div>

          <div className="text-center mb-4 text-gray-500">
            or log in with email
          </div>

          {/* Email Login Form */}
          <LoginForm />

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
