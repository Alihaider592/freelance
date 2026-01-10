import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // API call here
  };

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Welcome Back 👋
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 focus:bg-white
                       border border-gray-200 focus:border-blue-500
                       outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 focus:bg-white
                       border border-gray-200 focus:border-blue-500
                       outline-none transition"
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <a
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-blue-600 to-cyan-500
                     hover:scale-[1.02] hover:shadow-lg
                     transition-all duration-300"
        >
          Log In
        </button>
      </form>

      {/* Signup Link */}
      <p className="mt-6 text-center text-gray-500 text-sm">
        Don’t have an account?{" "}
        <a href="/signup" className="text-blue-600 hover:underline">
          Create one
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
