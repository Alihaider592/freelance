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
  };

  return (
    <div>
      {/* Card */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 relative overflow-hidden">
        
        {/* Glow blobs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center relative z-10">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">

          {/* Email */}
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
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
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded-xl text-white font-semibold text-lg
                       bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600
                       hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Log In
          </button>

        </form>

        <p className="mt-6 text-center text-gray-500 text-sm relative z-10">
          Don’t have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
