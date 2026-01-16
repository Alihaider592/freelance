import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaSpinner, FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from "react-icons/fa";

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      toast.info(
        <div className="flex items-center gap-2">
          <FaInfoCircle /> Please fill all fields
        </div>
      );
      setLoading(false);
      return;
    }

    // Show loading toast
    const toastId = toast.info(
      <div className="flex items-center gap-2">
        <FaSpinner className="animate-spin" /> Signing up...
      </div>,
      { autoClose: false, closeButton: false, draggable: false }
    );

    try {
      const res = await axios.post("http://localhost:5000/api/signup", formData);

      toast.update(toastId, {
        render: (
          <div className="flex items-center gap-2">
            <FaCheckCircle /> {res.data.msg || "Account created!"}
          </div>
        ),
        type: "success",
        autoClose: 3000,
        closeButton: true,
        draggable: true,
      });

      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      if (err.response?.status === 400) {
        // Duplicate email or validation error
        toast.warning(
          <div className="flex items-center gap-2">
            <FaExclamationTriangle /> {err.response.data.msg || "Email already exists"}
          </div>
        );
      } else {
        toast.update(toastId, {
          render: (
            <div className="flex items-center gap-2">
              {err.response?.data?.msg || "Something went wrong"}
            </div>
          ),
          type: "error",
          autoClose: 3000,
          closeButton: true,
          draggable: true,
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 relative overflow-hidden">
        {/* Background blurs */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl"></div>

        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`mt-4 w-full py-3 rounded-xl text-white font-semibold text-lg
              bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600
              hover:scale-105 hover:shadow-lg transition-all duration-300
              ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 text-sm relative z-10">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
